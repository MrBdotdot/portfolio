import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * A segment of the hero sentence.
 *  - A plain string is rendered as static text.
 *  - An object describes a hoverable word with a tooltip.
 */
export type HeroSegment =
  | string
  | {
      /** Stable id used to track which segment is hovered. */
      id: string;
      /** The visible word(s). Can include spaces, e.g. "design a system". */
      word: string;
      /** Short proof statement shown in the popup. */
      tooltip: ReactNode;
      /**
       * Tailwind text-color class used as both (a) the resting color of the
       * word — so it stands out as a discoverable hover target — and (b) the
       * highlight color on hover. Example: "text-yellow-400".
       */
      color: string;
    };

interface InteractiveHeroProps {
  /** The leading text — usually the person's name. Always shown in full color. */
  name: string;
  /** Ordered array of plain strings + hoverable segments that compose the rest of the sentence. */
  segments: HeroSegment[];
  /** Optional small text shown above the name (e.g. "Portfolio"). */
  eyebrow?: string;
  /** When true, use smaller text sizes and narrower tooltips so the hero fits inside a grid tile. */
  compact?: boolean;
}

/**
 * An interactive prose hero. The user reads a sentence; hovering certain key
 * words highlights them and reveals a small popup with supporting context,
 * while the rest of the sentence fades to gray.
 *
 * Inspired by the pattern used at https://chaachiedesigns.framer.website/.
 */
export function InteractiveHero({ name, segments, eyebrow, compact = false }: InteractiveHeroProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isAnyHovered = hoveredId !== null;

  /** Class for any text segment that ISN'T the currently hovered one. */
  const dimClass = "text-neutral-500";
  const baseClass = "text-white";
  const transition = "transition-colors duration-200 ease-out";

  // Type sizes vary by context. Compact = inside a grid tile.
  const proseSize = compact
    ? "text-lg md:text-xl lg:text-2xl"
    : "text-3xl md:text-5xl lg:text-6xl";
  const containerPadding = compact ? "px-0" : "px-6 md:px-10";

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${containerPadding}`}>
      {eyebrow && (
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-400">
          {eyebrow}
        </p>
      )}

      <p
        className={`${proseSize} leading-[1.25] font-medium tracking-tight ${transition}`}
      >
        {/* Name — always full color */}
        <span
          className={`${transition} ${
            isAnyHovered ? dimClass : baseClass
          }`}
        >
          {name}
        </span>

        {segments.map((seg, i) => {
          // Plain text
          if (typeof seg === "string") {
            return (
              <span
                key={`text-${i}`}
                className={`${transition} ${
                  isAnyHovered ? dimClass : baseClass
                }`}
              >
                {seg}
              </span>
            );
          }

          // Interactive (hoverable) word — its color is its discovery cue.
          const isThisHovered = hoveredId === seg.id;
          // Resting state: word shows in its own color.
          // Another sibling hovered: this word dims to gray.
          // This word hovered: stays in its color.
          const wordColorClass = isAnyHovered
            ? isThisHovered
              ? seg.color
              : dimClass
            : seg.color;

          return (
            <span
              key={seg.id}
              onMouseEnter={() => setHoveredId(seg.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(seg.id)}
              onBlur={() => setHoveredId(null)}
              tabIndex={0}
              className={`relative inline-block cursor-default outline-none font-mono font-normal ${transition} ${wordColorClass}`}
            >
              {seg.word}

              <AnimatePresence>
                {isThisHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    role="tooltip"
                    className={`absolute left-1/2 top-full z-20 mt-3 ${compact ? "w-64 md:w-72" : "w-80 md:w-96"} -translate-x-1/2 rounded-lg border border-neutral-800 bg-neutral-950/95 px-4 py-3 text-left ${compact ? "text-sm md:text-base" : "text-base md:text-lg"} font-sans font-normal leading-snug shadow-xl backdrop-blur-sm ${seg.color}`}
                  >
                    {seg.tooltip}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          );
        })}
      </p>
    </div>
  );
}
