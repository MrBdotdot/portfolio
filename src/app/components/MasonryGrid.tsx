import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AutoLayoutTile } from "./AutoLayoutTile";
import { VariableSwitcherPanel, VariableSwitcherPreview, VariableSwitcherProvider } from "./VariableSwitcherTile";

interface MasonryItem {
  id: number;
  imageUrl: string;
  hoverImageUrl?: string;
  scrollLoop?: boolean;
  autoLayoutPush?: boolean;
  variableSwitcher?: boolean;
  variablePreview?: boolean;
  revealPair?: [string, string];
  title: string;
  category: string;
  size: "small" | "medium" | "large";
}

interface MasonryGridProps {
  items: MasonryItem[];
}

const PEEK_PERCENT = 10; // how much of the bottom image peeks through on the left edge

function RevealTile({
  topImage,
  bottomImage,
  className,
}: {
  topImage: string;
  bottomImage: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const bottomOverlayRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  // Gentle breathing animation on the peek strip
  useEffect(() => {
    let animId: number;
    const animate = () => {
      if (isInteracting.current || !peekRef.current) {
        animId = requestAnimationFrame(animate);
        return;
      }
      const t = Date.now() / 1000;
      const pulse = 0.4 + Math.sin(t * 1.5) * 0.3; // oscillates 0.1 – 0.7
      peekRef.current.style.opacity = String(pulse);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    isInteracting.current = true;
    const x = Math.max(
      0,
      Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
    );
    // As x increases (more bottom revealed), fade the top and unshroud bottom
    const revealProgress = Math.min(1, (x / 100) / 0.75); // reaches 1.0 at 75% cursor position
    if (topLayerRef.current) {
      topLayerRef.current.style.clipPath = `inset(0 0 0 ${x}%)`;
      topLayerRef.current.style.opacity = String(1 - revealProgress);
    }
    if (bottomOverlayRef.current) {
      // Dark overlay fades out as more is revealed
      bottomOverlayRef.current.style.opacity = String(1 - revealProgress);
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `${x}%`;
      dividerRef.current.style.opacity = "1";
    }
    if (peekRef.current) {
      peekRef.current.style.opacity = "0";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isInteracting.current = false;
    if (topLayerRef.current) {
      topLayerRef.current.style.clipPath = `inset(0 0 0 ${PEEK_PERCENT}%)`;
      topLayerRef.current.style.opacity = "1";
    }
    if (bottomOverlayRef.current) {
      bottomOverlayRef.current.style.opacity = "1";
    }
    if (dividerRef.current) {
      dividerRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden cursor-crosshair ${className || ""}`}
      style={{ position: "absolute", inset: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Bottom image (revealed on hover) */}
      <img
        src={bottomImage}
        alt=""
        className="w-full h-full object-cover object-left-top"
        style={{ position: "absolute", inset: 0 }}
        draggable={false}
      />

      {/* Dark overlay on bottom image */}
      <div
        ref={bottomOverlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.75)",
          transition: "opacity 120ms ease-out",
          willChange: "opacity",
          pointerEvents: "none",
        }}
      />

      {/* Top image (clipped by cursor position) */}
      <div
        ref={topLayerRef}
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 0 0 ${PEEK_PERCENT}%)`,
          transition: "clip-path 80ms ease-out, opacity 120ms ease-out",
          willChange: "clip-path, opacity",
        }}
      >
        <img
          src={topImage}
          alt=""
          className="w-full h-full object-cover object-left-top"
          draggable={false}
        />
      </div>

      {/* Divider line at cursor */}
      <div
        ref={dividerRef}
        className="bg-white/60 pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 1,
          left: "100%",
          zIndex: 10,
          opacity: 0,
          transition: "left 80ms ease-out, opacity 200ms ease-out",
          willChange: "left, opacity",
        }}
      />

      {/* Peek strip */}
      <div
        ref={peekRef}
        className="bg-white/60 pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 1,
          left: `${PEEK_PERCENT}%`,
          zIndex: 10,
          opacity: 0.4,
          transition: "opacity 200ms ease-out",
          willChange: "opacity",
        }}
      />
    </div>
  );
}

/**
 * Continuously scrolls an image vertically inside its container, looping.
 * Uses a CSS keyframe (defined in styles/index.css) — no JS animation loop.
 * The image is rendered twice and the inner track translates by 50% so the
 * seam never shows.
 */
function ScrollLoopTile({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-neutral-900">
      <div
        className="flex flex-col will-change-transform"
        style={{ animation: "scroll-loop-y 20s linear infinite" }}
      >
        <img src={imageUrl} alt="" className="w-full block" draggable={false} />
        <img
          src={imageUrl}
          alt=""
          className="w-full block"
          draggable={false}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export function MasonryGrid({ items }: MasonryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-[450px]";
      case "medium":
        return "md:col-span-2 h-[300px]";
      default:
        return "h-[450px]";
    }
  };

  return (
    <VariableSwitcherProvider>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto pt-12 pb-12">
      {items.map((item, index) => {
        const isHovered = hoveredId === item.id;
        const hasHoverImage = !!item.hoverImageUrl;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`relative overflow-hidden rounded-lg group ${
              item.revealPair || item.hoverImageUrl ? "cursor-pointer" : item.scrollLoop ? "cursor-not-allowed" : item.autoLayoutPush ? "cursor-default" : "cursor-default"
            } ${item.autoLayoutPush ? getSizeClasses(item.size).replace(/h-\[\d+px\]/, "") + " md:row-span-2 self-end h-[450px]" : getSizeClasses(item.size)}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onTouchStart={() => setHoveredId(item.id)}
            onTouchEnd={() => setHoveredId(null)}
          >
            {/* Default Image */}
            {item.revealPair ? (
              <RevealTile
                topImage={item.revealPair[0]}
                bottomImage={item.revealPair[1]}
              />
            ) : item.scrollLoop ? (
              <ScrollLoopTile imageUrl={item.imageUrl} />
            ) : item.autoLayoutPush ? (
              <AutoLayoutTile />
            ) : item.variableSwitcher ? (
              <VariableSwitcherPanel />
            ) : item.variablePreview ? (
              <VariableSwitcherPreview />
            ) : (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                animate={{
                  scale: isHovered && !hasHoverImage ? 1.1 : 1,
                  opacity: isHovered && hasHoverImage ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}

            {/* Hover Image (only if provided) */}
            {hasHoverImage && (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.hoverImageUrl})` }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
    </VariableSwitcherProvider>
  );
}