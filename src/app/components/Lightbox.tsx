import { useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut, Maximize2, ExternalLink } from "lucide-react";

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

      {/* Lightbox overlay — portaled to <body> so it isn't clipped or scaled
          by the case-study modal it's opened from. */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <LightboxOverlay
                src={src}
                alt={alt}
                caption={caption}
                lightBg={lightBg}
                onClose={handleClose}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

const MAX_ZOOM = 4; // relative to the image's natural pixel size
const TALL_RATIO = 1.8; // taller than this → open at reading width and scroll
const READING_WIDTH = 1200;

/**
 * Full-screen viewer. Opens fitted to the screen; click the image (or use
 * +/−, scroll with Ctrl/⌘, or pinch) to zoom toward a point, then drag or
 * scroll to pan. Esc closes, 0 resets to fit.
 */
function LightboxOverlay({
  src,
  alt,
  caption,
  lightBg,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  lightBg: boolean;
  onClose: () => void;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [vp, setVp] = useState({ w: 0, h: 0 });
  // null = fit to screen; otherwise rendered width in CSS px
  const [width, setWidth] = useState<number | null>(null);
  const pendingAnchor = useRef<{ fx: number; fy: number; cx: number; cy: number } | null>(null);
  const drag = useRef<{ x: number; y: number; sl: number; st: number; moved: boolean } | null>(null);

  // Measure the viewport area
  useLayoutEffect(() => {
    const measure = () => {
      const el = viewportRef.current;
      if (el) setVp({ w: el.clientWidth, h: el.clientHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const fitWidth = natural && vp.w
    ? Math.min(natural.w, vp.w - 32, ((vp.h - 32) * natural.w) / natural.h)
    : 0;
  const renderedWidth = width ?? fitWidth;
  const zoomed = width !== null && width > fitWidth + 1;
  const percent = natural ? Math.round((renderedWidth / natural.w) * 100) : 100;
  const canZoomIn = !!natural && renderedWidth < natural.w * MAX_ZOOM - 1;

  // Zoom to a new width, keeping the point under (cx, cy) — viewport coords — fixed.
  const zoomTo = useCallback(
    (nextW: number | null, cx?: number, cy?: number) => {
      const el = viewportRef.current;
      if (!el || !natural) return;
      const target = nextW === null ? fitWidth : Math.max(fitWidth, Math.min(nextW, natural.w * MAX_ZOOM));
      const imgEl = el.querySelector("img");
      if (imgEl && cx !== undefined && cy !== undefined) {
        const r = imgEl.getBoundingClientRect();
        const vr = el.getBoundingClientRect();
        pendingAnchor.current = {
          fx: Math.min(1, Math.max(0, (cx - r.left) / r.width)),
          fy: Math.min(1, Math.max(0, (cy - r.top) / r.height)),
          cx: cx - vr.left,
          cy: cy - vr.top,
        };
      } else {
        // zoom around the current center of the view
        const vr = el.getBoundingClientRect();
        const r = imgEl?.getBoundingClientRect();
        pendingAnchor.current = r
          ? {
              fx: Math.min(1, Math.max(0, (vr.left + vr.width / 2 - r.left) / r.width)),
              fy: Math.min(1, Math.max(0, (vr.top + vr.height / 2 - r.top) / r.height)),
              cx: vr.width / 2,
              cy: vr.height / 2,
            }
          : null;
      }
      setWidth(target <= fitWidth + 1 ? null : target);
    },
    [fitWidth, natural]
  );

  // After a zoom renders, scroll so the anchored point stays under the cursor
  useLayoutEffect(() => {
    const el = viewportRef.current;
    const a = pendingAnchor.current;
    if (!el || !a || !natural) return;
    pendingAnchor.current = null;
    const imgEl = el.querySelector("img");
    if (!imgEl) return;
    const w = renderedWidth;
    const h = (w * natural.h) / natural.w;
    const offsetLeft = imgEl.offsetLeft;
    const offsetTop = imgEl.offsetTop;
    el.scrollLeft = offsetLeft + a.fx * w - a.cx;
    el.scrollTop = offsetTop + a.fy * h - a.cy;
  }, [renderedWidth, natural]);

  // Keyboard: Esc closes (without also closing the case-study modal), +/−/0 zoom
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        zoomTo(renderedWidth * 1.5);
      } else if (e.key === "-") {
        zoomTo(renderedWidth / 1.5);
      } else if (e.key === "0") {
        zoomTo(null);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose, zoomTo, renderedWidth]);

  // Lock page scroll while open, restoring whatever was there before
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Ctrl/⌘ + wheel and trackpad pinch zoom toward the cursor
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      zoomTo(renderedWidth * Math.exp(-e.deltaY * 0.01), e.clientX, e.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomTo, renderedWidth]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !zoomed) {
      drag.current = { x: e.clientX, y: e.clientY, sl: 0, st: 0, moved: false };
      return;
    }
    const el = viewportRef.current!;
    drag.current = { x: e.clientX, y: e.clientY, sl: el.scrollLeft, st: el.scrollTop, moved: false };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
    if (e.pointerType === "mouse" && zoomed) {
      const el = viewportRef.current!;
      el.scrollLeft = d.sl - dx;
      el.scrollTop = d.st - dy;
    }
  };
  const onImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const moved = drag.current?.moved;
    drag.current = null;
    if (moved || !natural) return;
    if (zoomed) {
      zoomTo(null);
    } else {
      // Jump to actual pixels — or 2× fit for images that are already small
      zoomTo(Math.max(natural.w, fitWidth * 2), e.clientX, e.clientY);
    }
  };

  const btn =
    "p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-default";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={caption || alt}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-950" onClick={onClose} />

      {/* Scrollable viewport */}
      <div
        ref={viewportRef}
        className="relative flex-1 overflow-auto overscroll-contain"
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="flex min-w-full min-h-full p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            draggable={false}
            onLoad={(e) => {
              const i = e.currentTarget;
              const n = { w: i.naturalWidth, h: i.naturalHeight };
              setNatural(n);
              // Long page screenshots are unreadable when squeezed to fit the
              // screen height, so open them at a readable width and let the
              // visitor scroll down the page instead.
              const el = viewportRef.current;
              if (el && n.h / n.w > TALL_RATIO) {
                const readable = Math.min(n.w, el.clientWidth - 32, READING_WIDTH);
                const whole = ((el.clientHeight - 32) * n.w) / n.h;
                if (readable > whole * 1.2) setWidth(readable);
              }
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: natural ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onClick={onImageClick}
            className={`m-auto block max-w-none select-none rounded-md shadow-2xl ${
              lightBg ? "bg-white" : ""
            } ${zoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
            style={{
              width: renderedWidth || undefined,
              height: natural && renderedWidth ? (renderedWidth * natural.h) / natural.w : undefined,
              touchAction: zoomed ? "pan-x pan-y" : "manipulation",
            }}
          />
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Toolbar + caption */}
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 pb-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-900/90 border border-neutral-700 backdrop-blur-sm">
          <button className={btn} onClick={() => zoomTo(renderedWidth / 1.5)} disabled={!zoomed} aria-label="Zoom out">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-xs tabular-nums text-neutral-400">{percent}%</span>
          <button className={btn} onClick={() => zoomTo(renderedWidth * 1.5)} disabled={!canZoomIn} aria-label="Zoom in">
            <ZoomIn className="w-4 h-4" />
          </button>
          <span className="w-px h-4 bg-neutral-700 mx-1" />
          <button className={btn} onClick={() => zoomTo(null)} disabled={!zoomed} aria-label="Fit to screen">
            <Maximize2 className="w-4 h-4" />
          </button>
          <a className={btn} href={src} target="_blank" rel="noreferrer" aria-label="Open full-size image in a new tab">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        {caption && <p className="text-sm text-neutral-400 text-center max-w-2xl">{caption}</p>}
        <p className="hidden md:block text-[11px] text-neutral-600">
          {zoomed ? "Drag to pan · click to fit" : "Click the image to zoom · Ctrl/⌘ + scroll to zoom further"}
        </p>
      </div>
    </motion.div>
  );
}
