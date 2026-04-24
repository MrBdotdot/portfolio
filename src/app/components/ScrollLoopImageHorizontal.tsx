import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollLoopImageHorizontalProps {
  src: string;
  alt: string;
  borderClass?: string;
}

/**
 * A horizontally-scrolling image preview with hover-to-scrub interaction.
 *
 * - When the cursor is OUT of the image: auto-scroll loops continuously.
 * - When the cursor is OVER the image: auto-scroll pauses, scroll position
 *   follows the cursor's X position, and a vertical line indicator follows
 *   the cursor to show where you are in the scroll. Just move the mouse —
 *   no clicking required.
 *
 *   progress  ∈ [0, 1]   (where 0 = left edge, 1 = fully scrolled)
 *   image transform:  translateX(-progress * 50%)   — two stacked copies, half-width loop
 */
export function ScrollLoopImageHorizontal({
  src,
  alt,
  borderClass = "border border-neutral-800",
}: ScrollLoopImageHorizontalProps) {
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorX, setCursorX] = useState(0); // px from container's left edge
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref mirror of isHovering so the RAF loop reads it without re-subscribing.
  const isHoveringRef = useRef(false);

  // Auto-scroll loop — paused while hovering.
  useEffect(() => {
    const durationMs = 30_000;
    let lastTimestamp: number | null = null;
    let raf = 0;

    const tick = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHoveringRef.current) {
        setProgress((p) => (p + delta / durationMs) % 1);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handlePointerEnter = useCallback(() => {
    isHoveringRef.current = true;
    setIsHovering(true);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorX(x);
    const newProgress = Math.max(0, Math.min(1, x / rect.width));
    setProgress(newProgress);
  }, []);

  const handlePointerLeave = useCallback(() => {
    isHoveringRef.current = false;
    setIsHovering(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative aspect-[16/10] overflow-hidden rounded-lg cursor-ew-resize ${borderClass}`}
    >
      {/* Auto-scrolling image, controlled by progress state. */}
      <div
        className="flex h-full will-change-transform"
        style={{ transform: `translateX(-${progress * 50}%)` }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-auto block max-w-none"
          draggable={false}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="h-full w-auto block max-w-none"
          draggable={false}
        />
      </div>

      {/* Vertical scrub indicator — anchored at the bottom edge, slides
          horizontally with the cursor. ~10% of the image height, thicker
          than a hairline so it reads as an intentional control. */}
      <div
        className="pointer-events-none absolute bottom-0 h-[10%] w-1.5 rounded-full bg-yellow-400/80 transition-opacity duration-200"
        style={{
          left: `${cursorX}px`,
          opacity: isHovering ? 1 : 0,
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
