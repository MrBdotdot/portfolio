import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  containerClassName?: string;
  /** Whether to show a white bg behind the thumbnail */
  lightBg?: boolean;
  /** Constrain thumbnail height (px). Shows object-cover + fade hint. Lightbox still shows full image. */
  maxHeight?: number;
  /** Control object-position when using maxHeight (default: "top") */
  objectPosition?: string;
  /** Fixed aspect ratio (e.g. "16/9", "4/3", "1/1"). Uses object-cover, no gradient fade. Preferred over maxHeight. */
  aspectRatio?: string;
  /** Control object-fit behavior (default: "cover") */
  objectFit?: "cover" | "contain";
}

export function LightboxImage({
  src,
  alt,
  caption,
  className = "",
  containerClassName = "",
  lightBg = false,
  maxHeight,
  objectPosition = "top",
  aspectRatio,
  objectFit = "cover",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  return (
    <>
      {/* Thumbnail */}
      <div className={`group ${containerClassName}`}>
        <button
          onClick={handleOpen}
          className={`relative block w-full rounded-xl overflow-hidden border border-neutral-800 cursor-zoom-in transition-all duration-300 group-hover:border-neutral-600 ${
            lightBg ? "bg-white" : "bg-neutral-900"
          }`}
          style={{
            ...(maxHeight && !aspectRatio ? { maxHeight: `${maxHeight}px` } : {}),
            ...(aspectRatio ? { aspectRatio } : {}),
          }}
          aria-label={`View full size: ${caption || alt}`}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full transition-transform duration-500 group-hover:scale-[1.02] ${
              aspectRatio
                ? `absolute inset-0 h-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`
                : maxHeight
                  ? "h-full object-cover"
                  : "h-auto object-cover"
            } ${className}`}
            style={{
              objectPosition,
              ...(maxHeight && !aspectRatio ? { maxHeight: `${maxHeight}px` } : {}),
            }}
          />
          {/* Fade hint at bottom for constrained images (maxHeight only, not aspectRatio) */}
          {maxHeight && !aspectRatio && (
            <div
              className={`absolute bottom-0 left-0 right-0 h-20 pointer-events-none ${
                lightBg
                  ? "bg-gradient-to-t from-white/90 via-white/40 to-transparent"
                  : "bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"
              }`}
            />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-600">
              <ZoomIn className="w-4 h-4 text-white" />
            </div>
          </div>
        </button>
        {caption && (
          <p className="text-xs text-neutral-500 mt-2.5 text-center">
            {caption}
          </p>
        )}
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="relative z-10 max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              {caption && (
                <p className="text-sm text-neutral-400 mt-4 text-center max-w-lg">
                  {caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}