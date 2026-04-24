import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PlacedWord {
  id: number;
  word: string;
  x: number;
  y: number;
  size: number;
}

interface SplitFlapDisplayProps {
  word1List: string[];
  word2List: string[];
  word3List: string[];
  word4List: string[];
}

export function SplitFlapDisplay({ word1List, word2List, word3List, word4List }: SplitFlapDisplayProps) {
  const [placedWords, setPlacedWords] = useState<PlacedWord[]>([]);
  const [wordIndex, setWordIndex] = useState(0);

  const allWords = [...word1List, ...word2List, ...word3List, ...word4List];
  const maxWords = 4;

  // Bounding box overlap check — all values in viewport-% units
  const rectsOverlap = (
    ax: number, ay: number, aw: number, ah: number,
    bx: number, by: number, bw: number, bh: number,
    padding: number
  ): boolean => {
    return !(
      ax + aw + padding < bx ||
      ax > bx + bw + padding ||
      ay + ah + padding < by ||
      ay > by + bh + padding
    );
  };

  // Estimate rendered word dimensions in viewport-% units
  const estimateWordDims = (size: number, charCount: number) => ({
    w: size * 0.55 * charCount,
    h: size * 1.4,
  });

  // Exclusion zone for the centred "william bee" name.
  // Generous rectangle covering the centre so nothing comes close.
  const nameZone = { x: 30, y: 43, w: 40, h: 14 };

  // Find a non-overlapping position that also avoids the name zone
  const findNonOverlappingPosition = (existingWords: PlacedWord[], size: number, word: string) => {
    const maxAttempts = 120;
    const wordCharCount = word.length;
    const { w: wordW, h: wordH } = estimateWordDims(size, wordCharCount);
    const padding = Math.max(3, size * 0.5); // scale padding with font size

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const x = Math.random() * 70 + 5;  // 5-75% horizontal
      const y = Math.random() * 65 + 10; // 10-75% vertical

      // Clamp so the word doesn't overflow offscreen
      const clampedX = Math.min(x, 95 - wordW);
      const clampedY = Math.min(y, 90 - wordH);

      // Reject if it overlaps the centred name
      if (rectsOverlap(clampedX, clampedY, wordW, wordH, nameZone.x, nameZone.y, nameZone.w, nameZone.h, padding)) {
        continue;
      }

      // Reject if it overlaps any existing descriptor word
      const hasOverlap = existingWords.some((existing) => {
        const { w: ew, h: eh } = estimateWordDims(existing.size, existing.word.length);
        return rectsOverlap(clampedX, clampedY, wordW, wordH, existing.x, existing.y, ew, eh, padding);
      });

      if (!hasOverlap) {
        return { x: clampedX, y: clampedY };
      }
    }

    // Fallback: place in a safe corner away from centre
    return {
      x: Math.random() * 15 + 5,
      y: Math.random() > 0.5 ? Math.random() * 15 + 5 : Math.random() * 15 + 70,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlacedWords((prev) => {
        const size = Math.floor(Math.random() * 10) + 3; // cap at 13vw instead of 18vw
        const word = allWords[wordIndex % allWords.length];
        const { x, y } = findNonOverlappingPosition(prev, size, word);

        const newWord: PlacedWord = {
          id: Date.now() + Math.random(),
          word,
          x,
          y,
          size,
        };

        setWordIndex((i) => i + 1);

        const updatedWords = [...prev, newWord];
        if (updatedWords.length > maxWords) {
          return updatedWords.slice(-maxWords);
        }
        return updatedWords;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [allWords.length, wordIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {placedWords.map((word) => {
        // Scale stroke width with font size - larger text gets thicker stroke
        const strokeWidth = Math.max(1, word.size * 0.15); // 0.15vw per vw of font size
        
        return (
          <motion.div
            key={word.id}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="absolute font-bold whitespace-nowrap leading-none pointer-events-none"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              fontSize: `${word.size}vw`,
              color: "#000000",
              textShadow: "0 0 40px rgba(0, 0, 0, 0.8)",
              WebkitTextStroke: `${strokeWidth}px #facc15`,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              // Chrome text rendering fixes
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            {word.word}
          </motion.div>
        );
      })}
    </div>
  );
}