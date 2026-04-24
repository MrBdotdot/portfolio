interface ScrollLoopImageHorizontalProps {
  src: string;
  alt: string;
  borderClass?: string;
}

/**
 * Continuously scrolls an image horizontally inside its container, looping.
 * Uses a CSS keyframe (defined in styles/index.css) — no JS animation loop.
 * The image is rendered twice side-by-side and the inner track translates by
 * 50% so the seam never shows.
 */
export function ScrollLoopImageHorizontal({
  src,
  alt,
  borderClass = "border border-neutral-800",
}: ScrollLoopImageHorizontalProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-lg ${borderClass}`}
    >
      <div
        className="flex h-full will-change-transform"
        style={{ animation: "scroll-loop-x 30s linear infinite" }}
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
    </div>
  );
}
