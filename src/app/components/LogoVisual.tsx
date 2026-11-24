import type { ReactNode } from "react";

// Any file named src/assets/logos/<name>.(svg|png|webp) is picked up
// automatically — drop the file in and the card switches from the fallback.
const logos = import.meta.glob("../../assets/logos/*.{svg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function findLogo(name: string) {
  const key = Object.keys(logos).find((k) =>
    k.split("/").pop()!.replace(/\.\w+$/, "").toLowerCase() === name.toLowerCase()
  );
  return key ? logos[key] : undefined;
}

/** Company logo centered on a quiet card, used for case-study teasers. */
export function LogoVisual({
  name,
  alt,
  fallback,
}: {
  name: string;
  alt: string;
  fallback?: ReactNode;
}) {
  const src = findLogo(name);
  if (!src) return <>{fallback ?? null}</>;
  // Same hover treatment as the photo cards: border warms, image zooms,
  // gradient fades in (driven by the card's `group` class).
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-neutral-800 group-hover:border-yellow-400/30 bg-neutral-900 transition-colors duration-500">
      <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
        <img
          src={src}
          alt={alt}
          className="w-[45%] max-w-[340px] h-auto object-contain"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
