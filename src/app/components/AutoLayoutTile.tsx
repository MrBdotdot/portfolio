import { useRef, useCallback, useEffect, useState } from "react";

// ── Asset imports ──────────────────────────────────────────────────
import rewardsCard from "figma:asset/5c153487ee53792a2b1de2779090b72422cffb90.png";
import tabOptions from "figma:asset/44d99956cb5868781c923a67394ca5d178bdebfe.png";
import rewardsHeader from "figma:asset/f5cf0b67a00be8bf24bb26f4cfd4241e76453d68.png";
import rewardFive from "figma:asset/1df962af696d8e33e65cabf5d003c630c0c2f7fd.png";
import creditCardReward from "figma:asset/4e4b8c79cba30a4e41fcac3d96800b767d72de97.png";
import doGoodDonations from "figma:asset/245500ab6efe0f468b6c86fb4c1c62f2d1487a0a.png";
import redeemPoints from "figma:asset/b600f6d5bfbf2473422f68d998102bde3685dfc8.png";

// ── Middle blocks (pushable) ───────────────────────────────────────
const MIDDLE_BLOCKS = [
  { id: "reward-5", src: rewardFive },
  { id: "credit-card", src: creditCardReward },
];

const GAP = 0;
const CURSOR_BLOCK_H_DEFAULT = 60;

export function AutoLayoutTile({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const cursorBlockRef = useRef<HTMLDivElement>(null);
  const insertIndexRef = useRef<number>(-1);
  const isHoveredRef = useRef(false);
  const rafRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const measuredHeights = useRef<number[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [cursorBlockH, setCursorBlockH] = useState(CURSOR_BLOCK_H_DEFAULT);
  const redeemImgRef = useRef<HTMLImageElement>(null);

  // Measure redeem points image height to size the placeholder
  const measureRedeemHeight = useCallback(() => {
    const img = redeemImgRef.current;
    if (img && img.offsetHeight > 0) {
      setCursorBlockH(img.offsetHeight);
    }
  }, []);

  useEffect(() => {
    measureRedeemHeight();
  }, [measureRedeemHeight, imagesLoaded]);

  const measureHeights = useCallback(() => {
    const heights: number[] = [];
    for (let i = 0; i < MIDDLE_BLOCKS.length; i++) {
      const el = blockRefs.current[i];
      heights.push(el ? el.offsetHeight : 0);
    }
    measuredHeights.current = heights;
  }, []);

  const getNaturalPositions = useCallback(() => {
    const heights = measuredHeights.current;
    const positions: number[] = [];
    let y = 0;
    for (let i = 0; i < MIDDLE_BLOCKS.length; i++) {
      positions.push(y);
      y += (heights[i] || 0) + GAP;
    }
    return positions;
  }, []);

  const applyLayout = useCallback(
    (insertIdx: number) => {
      measureHeights();
      const positions = getNaturalPositions();
      const heights = measuredHeights.current;

      MIDDLE_BLOCKS.forEach((_block, i) => {
        const el = blockRefs.current[i];
        if (!el) return;
        let y = positions[i];
        if (insertIdx >= 0 && i >= insertIdx) {
          y += cursorBlockH + GAP;
        }
        el.style.transform = `translateY(${y}px)`;
      });

      const ph = placeholderRef.current;
      if (ph) {
        if (insertIdx >= 0) {
          const phY =
            insertIdx < positions.length
              ? positions[insertIdx]
              : positions[positions.length - 1] +
                (heights[heights.length - 1] || 0) +
                GAP;
          ph.style.transform = `translateY(${phY}px)`;
          ph.style.opacity = "1";
        } else {
          ph.style.opacity = "0";
        }
      }

      const totalNatural =
        heights.reduce((sum, h) => sum + h, 0) +
        (MIDDLE_BLOCKS.length - 1) * GAP;
      const middleEl = middleRef.current;
      if (middleEl) {
        const extra = insertIdx >= 0 ? cursorBlockH + GAP : 0;
        middleEl.style.height = `${totalNatural + extra}px`;
      }
    },
    [getNaturalPositions, measureHeights, cursorBlockH]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const middle = middleRef.current;
      if (!middle) return;
      const rect = middle.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;

      const positions = getNaturalPositions();
      const heights = measuredHeights.current;
      let bestIdx = -1;
      let bestDist = Infinity;

      for (let i = 0; i <= MIDDLE_BLOCKS.length; i++) {
        let gapY: number;
        if (i === 0) {
          gapY = 0;
        } else if (i === MIDDLE_BLOCKS.length) {
          gapY = positions[i - 1] + (heights[i - 1] || 0) + GAP;
        } else {
          gapY = positions[i] - GAP / 2;
        }
        if (insertIndexRef.current >= 0 && i >= insertIndexRef.current) {
          gapY += cursorBlockH + GAP;
        }
        const dist = Math.abs(mouseY - gapY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      if (bestIdx !== insertIndexRef.current) {
        insertIndexRef.current = bestIdx;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          applyLayout(insertIndexRef.current);
        });
      }

      // Move cursor block — center on cursor for responsiveness
      const cb = cursorBlockRef.current;
      if (cb) {
        const tileRect = containerRef.current?.getBoundingClientRect();
        if (tileRect) {
          const y = e.clientY - tileRect.top;
          const cbH = cb.offsetHeight;
          cb.style.transform = `translateY(${y - cbH / 2}px)`;
        }
      }
    },
    [getNaturalPositions, applyLayout, cursorBlockH]
  );

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    setIsHovered(false);
    insertIndexRef.current = -1;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      applyLayout(-1);
    });
  }, [applyLayout]);

  useEffect(() => {
    measureHeights();
    applyLayout(-1);
  }, [applyLayout, measureHeights, imagesLoaded]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((c) => c + 1);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isHovered ? "grab" : "default" }}
    >
      <div className="bg-white rounded-lg overflow-hidden ml-auto" style={{ width: "50%" }}>
        {/* ── TOP LOCKED ── */}
        <div className="w-full">
          <img src={rewardsCard} alt="Rewards Card" className="w-full block" draggable={false} onLoad={handleImageLoad} />
          <img src={tabOptions} alt="Tab Options" className="w-full block" draggable={false} onLoad={handleImageLoad} />
          <img src={rewardsHeader} alt="Rewards Header" className="w-full block" draggable={false} onLoad={handleImageLoad} />
        </div>

        {/* ── MIDDLE PUSHABLE ── */}
        <div
          ref={middleRef}
          className="relative w-full"
          style={{
            transition: "height 250ms cubic-bezier(0.2, 0.8, 0.3, 1)",
          }}
        >
          {MIDDLE_BLOCKS.map((block, i) => (
            <div
              key={block.id}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              className="absolute left-0 right-0"
              style={{
                transition:
                  "transform 250ms cubic-bezier(0.2, 0.8, 0.3, 1)",
                willChange: "transform",
              }}
            >
              <img
                src={block.src}
                alt={block.id}
                className="w-full block"
                draggable={false}
                onLoad={handleImageLoad}
              />
            </div>
          ))}

          {/* Ghost placeholder */}
          <div
            ref={placeholderRef}
            className="absolute left-2 right-2 rounded-[4px] flex items-center justify-center"
            style={{
              height: cursorBlockH,
              border: "1.5px dashed rgba(234,179,8,0.5)",
              background: "rgba(234,179,8,0.04)",
              opacity: 0,
              transition:
                "transform 250ms cubic-bezier(0.2, 0.8, 0.3, 1), opacity 180ms ease",
              willChange: "transform, opacity",
              zIndex: 5,
            }}
          >
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                <path d="M6 2.5V9.5M2.5 6H9.5" stroke="rgb(234,179,8)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] text-yellow-400/50 tracking-wide">
                Drop component
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM LOCKED ── */}
        <div className="w-full">
          <img src={doGoodDonations} alt="Do Good Donations" className="w-full block" draggable={false} onLoad={handleImageLoad} />
        </div>
      </div>

      {/* ── CURSOR-FOLLOWING REDEEM POINTS MODULE ── */}
      <div
        ref={cursorBlockRef}
        className="absolute top-0 right-0 pointer-events-none z-30"
        style={{
          width: "50%",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 200ms ease",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
          willChange: "transform",
        }}
      >
        <img
          ref={redeemImgRef}
          src={redeemPoints}
          alt="Redeem Points"
          className="w-full block rounded-md"
          style={{
            border: "1.5px solid rgba(234,179,8,0.5)",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}