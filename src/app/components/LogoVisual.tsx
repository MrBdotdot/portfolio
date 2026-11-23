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
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-[45%] max-w-[340px] h-auto object-contain"
        draggable={false}
      />
    </div>
  );
}
