import { createContext, useContext, useState, useRef, useEffect, useMemo, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Types ──────────────────────────────────────────────────────────
type ModeOption = "light" | "dark";
type SizeOption = "xs" | "sm" | "md" | "lg" | "xl";
type VariantOption = "filled" | "outline" | "ghost" | "gradient" | "glass";
type RadiusOption = "sharp" | "rounded" | "pill" | "squircle";
type StateOption = "default" | "hover" | "active" | "disabled" | "loading";
type TokenOption = "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "neutral";

interface VariableState {
  mode: ModeOption;
  token: TokenOption;
  size: SizeOption;
  variant: VariantOption;
  radius: RadiusOption;
  state: StateOption;
}

const INITIAL: VariableState = {
  mode: "dark",
  token: "primary",
  size: "md",
  variant: "filled",
  radius: "rounded",
  state: "default",
};

// ── Presets ─────────────────────────────────────────────────────────
const PRESETS: { label: string; values: Partial<VariableState> }[] = [
  { label: "Default", values: { ...INITIAL } },
  { label: "CTA", values: { variant: "filled", size: "lg", radius: "pill", token: "primary", state: "default" } },
  { label: "Ghost", values: { variant: "ghost", size: "sm", radius: "rounded", token: "neutral", state: "default" } },
  { label: "Outline", values: { variant: "outline", size: "md", radius: "rounded", token: "secondary", state: "default" } },
  { label: "Danger", values: { variant: "filled", size: "md", radius: "rounded", token: "danger", state: "default" } },
  { label: "Disco", values: { variant: "gradient", size: "xl", radius: "pill", token: "accent", state: "hover", mode: "dark" } },
  { label: "Retro", values: { variant: "filled", size: "lg", radius: "sharp", token: "warning", state: "active", mode: "light" } },
];

// ── Shared Context ─────────────────────────────────────────────────
interface VarCtx {
  vars: VariableState;
  update: <K extends keyof VariableState>(key: K, value: VariableState[K]) => void;
  applyPreset: (preset: Partial<VariableState>) => void;
}

const VariableSwitcherCtx = createContext<VarCtx>({
  vars: INITIAL,
  update: () => {},
  applyPreset: () => {},
});

export function VariableSwitcherProvider({ children }: { children: ReactNode }) {
  const [vars, setVars] = useState<VariableState>(INITIAL);
  const update = <K extends keyof VariableState>(key: K, value: VariableState[K]) => {
    setVars((prev) => ({ ...prev, [key]: value }));
  };
  const applyPreset = (preset: Partial<VariableState>) => {
    setVars((prev) => ({ ...prev, ...preset }));
  };
  return (
    <VariableSwitcherCtx.Provider value={{ vars, update, applyPreset }}>
      {children}
    </VariableSwitcherCtx.Provider>
  );
}

// ── Palette helpers ────────────────────────────────────────────────
const GOLD = "rgba(234,179,8,";
const SILVER = "rgba(168,162,158,";

// ── Chevron ────────────────────────────────────────────────────────
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="transition-transform duration-150"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Variable Row ───────────────────────────────────────────────────
function VariableRow({
  label,
  options,
  value,
  onChange,
  colorTone,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  colorTone: "gold" | "silver";
}) {
  const [open, setOpen] = useState(true);
  const tone = colorTone === "gold" ? GOLD : SILVER;

  return (
    <div className="select-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full py-[4px] cursor-pointer"
        style={{ color: `${tone}0.7)` }}
      >
        <ChevronIcon open={open} />
        <span className="text-[9px] uppercase tracking-widest">{label}</span>
        <span className="ml-auto text-[9px] tracking-wide" style={{ color: `${tone}0.5)` }}>{value}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-[3px] py-[4px] pl-5">
              {options.map((opt) => {
                const isActive = value === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => onChange(opt)}
                    className="px-2 py-[3px] rounded-sm text-[9px] tracking-wide transition-all duration-150 cursor-pointer"
                    style={{
                      background: isActive ? `${tone}0.18)` : "transparent",
                      border: `1px solid ${isActive ? `${tone}0.5)` : `${tone}0.08)`}`,
                      color: isActive ? `${tone}1)` : `${tone}0.4)`,
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Divider between variable groups
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 pt-2.5 pb-1">
      <div className="flex-1 h-px" style={{ background: "rgba(82,82,82,0.2)" }} />
      <span className="text-[8px] uppercase tracking-[0.2em]" style={{ color: "rgba(234,179,8,0.35)" }}>{label}</span>
      <div className="flex-1 h-px" style={{ background: "rgba(82,82,82,0.2)" }} />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// ██  PANEL  (Tile 1 — Variables + Presets)
// ════════════════════════════════════════════════════════════════════
export function VariableSwitcherPanel({ className }: { className?: string }) {
  const { vars, update, applyPreset } = useContext(VariableSwitcherCtx);

  return (
    <div className={`absolute inset-0 flex flex-col bg-neutral-950 ${className || ""}`}>
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2 shrink-0"
        style={{ borderBottom: "1px solid rgba(82,82,82,0.25)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="1" y="1" width="4" height="4" rx="0.75" fill="rgba(234,179,8,0.6)" />
          <rect x="6.5" y="1" width="4" height="4" rx="0.75" fill="rgba(234,179,8,0.35)" />
          <rect x="1" y="6.5" width="4" height="4" rx="0.75" fill="rgba(234,179,8,0.35)" />
          <rect x="6.5" y="6.5" width="4" height="4" rx="0.75" fill="rgba(234,179,8,0.18)" />
        </svg>
        <span className="text-[10px] text-neutral-400 tracking-widest uppercase">Variables</span>
        <span className="ml-auto text-[8px] text-neutral-600 tracking-wider">component/button</span>
      </div>

      {/* Variable rows — fill remaining space */}
      <div className="flex-1 flex flex-col px-3 py-1.5 overflow-hidden">
        <div className="flex flex-col">
          <SectionDivider label="Theme" />
          <VariableRow label="Mode" options={["light", "dark"]} value={vars.mode} onChange={(v) => update("mode", v as ModeOption)} colorTone="gold" />
          <VariableRow label="Token" options={["primary", "secondary", "accent", "danger", "success", "warning", "info", "neutral"]} value={vars.token} onChange={(v) => update("token", v as TokenOption)} colorTone="gold" />

          <SectionDivider label="Layout" />
          <VariableRow label="Size" options={["xs", "sm", "md", "lg", "xl"]} value={vars.size} onChange={(v) => update("size", v as SizeOption)} colorTone="gold" />

          <SectionDivider label="Style" />
          <VariableRow label="Variant" options={["filled", "outline", "ghost", "gradient", "glass"]} value={vars.variant} onChange={(v) => update("variant", v as VariantOption)} colorTone="gold" />
          <VariableRow label="Radius" options={["sharp", "rounded", "pill", "squircle"]} value={vars.radius} onChange={(v) => update("radius", v as RadiusOption)} colorTone="silver" />

          <SectionDivider label="Interaction" />
          <VariableRow label="State" options={["default", "hover", "active", "disabled", "loading"]} value={vars.state} onChange={(v) => update("state", v as StateOption)} colorTone="silver" />
        </div>
      </div>

      {/* Presets bar */}
      <div className="shrink-0 px-3 py-3" style={{ borderTop: "1px solid rgba(82,82,82,0.2)" }}>
        <div className="text-[8px] uppercase tracking-[0.15em] mb-2" style={{ color: "rgba(234,179,8,0.4)" }}>Presets</div>
        <div className="flex flex-wrap gap-1">
          {PRESETS.map((p) => {
            const isWacky = p.label === "Disco" || p.label === "Retro";
            return (
              <button
                key={p.label}
                onClick={() => applyPreset(p.values)}
                className="px-2.5 py-[3px] rounded-sm text-[9px] tracking-wide cursor-pointer transition-all duration-150 hover:brightness-125"
                style={{
                  background: isWacky ? "rgba(139,92,246,0.1)" : "rgba(234,179,8,0.07)",
                  border: `1px solid ${isWacky ? "rgba(139,92,246,0.25)" : "rgba(234,179,8,0.15)"}`,
                  color: isWacky ? "rgba(139,92,246,0.75)" : "rgba(234,179,8,0.6)",
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// ██  PREVIEW TILE  (Tile 2 — Button visual + CSS expression)
// ════════════════════════════════════════════════════════════════════

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function Spinner({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28 10" strokeLinecap="round" />
    </svg>
  );
}

// Token color map
function getTokenColors(token: TokenOption, isDark: boolean) {
  const map: Record<TokenOption, { fill: string; text: string; fillHover: string; fillActive: string; fillDisabled: string; textDisabled: string }> = {
    primary:   { fill: "rgba(234,179,8,1)",   text: "rgba(0,0,0,0.9)",       fillHover: "rgba(250,200,30,1)",   fillActive: "rgba(200,150,0,1)",   fillDisabled: isDark ? "rgba(234,179,8,0.12)" : "rgba(234,179,8,0.2)",   textDisabled: isDark ? "rgba(234,179,8,0.3)" : "rgba(0,0,0,0.3)" },
    secondary: { fill: "rgba(168,162,158,1)",  text: "rgba(0,0,0,0.9)",       fillHover: "rgba(190,185,180,1)",  fillActive: "rgba(140,135,130,1)", fillDisabled: isDark ? "rgba(168,162,158,0.12)" : "rgba(168,162,158,0.2)", textDisabled: isDark ? "rgba(168,162,158,0.3)" : "rgba(0,0,0,0.3)" },
    accent:    { fill: "rgba(139,92,246,1)",   text: "rgba(255,255,255,0.95)", fillHover: "rgba(160,120,255,1)",  fillActive: "rgba(110,70,220,1)",  fillDisabled: isDark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.2)",  textDisabled: isDark ? "rgba(139,92,246,0.3)" : "rgba(0,0,0,0.3)" },
    danger:    { fill: "rgba(239,68,68,1)",    text: "rgba(255,255,255,0.95)", fillHover: "rgba(255,90,90,1)",    fillActive: "rgba(200,50,50,1)",   fillDisabled: isDark ? "rgba(239,68,68,0.12)" : "rgba(239,68,68,0.2)",    textDisabled: isDark ? "rgba(239,68,68,0.3)" : "rgba(0,0,0,0.3)" },
    success:   { fill: "rgba(34,197,94,1)",    text: "rgba(0,0,0,0.9)",       fillHover: "rgba(50,220,110,1)",   fillActive: "rgba(25,170,80,1)",   fillDisabled: isDark ? "rgba(34,197,94,0.12)" : "rgba(34,197,94,0.2)",    textDisabled: isDark ? "rgba(34,197,94,0.3)" : "rgba(0,0,0,0.3)" },
    warning:   { fill: "rgba(249,115,22,1)",   text: "rgba(0,0,0,0.9)",       fillHover: "rgba(255,140,50,1)",   fillActive: "rgba(220,95,15,1)",   fillDisabled: isDark ? "rgba(249,115,22,0.12)" : "rgba(249,115,22,0.2)",  textDisabled: isDark ? "rgba(249,115,22,0.3)" : "rgba(0,0,0,0.3)" },
    info:      { fill: "rgba(59,130,246,1)",   text: "rgba(255,255,255,0.95)", fillHover: "rgba(80,150,255,1)",   fillActive: "rgba(45,110,220,1)", fillDisabled: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.2)",   textDisabled: isDark ? "rgba(59,130,246,0.3)" : "rgba(0,0,0,0.3)" },
    neutral:   { fill: isDark ? "rgba(82,82,82,1)" : "rgba(200,200,200,1)", text: isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)", fillHover: isDark ? "rgba(100,100,100,1)" : "rgba(180,180,180,1)", fillActive: isDark ? "rgba(60,60,60,1)" : "rgba(160,160,160,1)", fillDisabled: isDark ? "rgba(82,82,82,0.2)" : "rgba(200,200,200,0.3)", textDisabled: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" },
  };
  return map[token];
}

function useButtonComputed(vars: VariableState) {
  return useMemo(() => {
    const { mode, token, size, variant, radius, state } = vars;
    const isDark = mode === "dark";
    const tc = getTokenColors(token, isDark) ?? getTokenColors("primary", isDark);

    // ── Size ──
    const sizeMap: Record<SizeOption, { padding: string; fontSize: number; iconSize: number; gap: number; height: number }> = {
      xs:  { padding: "4px 10px",  fontSize: 9,  iconSize: 10, gap: 3, height: 24 },
      sm:  { padding: "6px 14px",  fontSize: 11, iconSize: 12, gap: 4, height: 28 },
      md:  { padding: "10px 20px", fontSize: 13, iconSize: 14, gap: 6, height: 36 },
      lg:  { padding: "14px 28px", fontSize: 15, iconSize: 16, gap: 8, height: 44 },
      xl:  { padding: "18px 36px", fontSize: 17, iconSize: 20, gap: 10, height: 52 },
    };
    const sz = sizeMap[size];

    // ── Radius ──
    const radiusMap: Record<RadiusOption, { value: number; css: string }> = {
      sharp: { value: 2, css: "2px" },
      rounded: { value: 8, css: "8px" },
      pill: { value: 999, css: "999px" },
      squircle: { value: 16, css: "16px" },
    };
    const rad = radiusMap[radius];

    // ── Colors ──
    const isDisabled = state === "disabled";
    const isHover = state === "hover";
    const isActive = state === "active";
    const isLoading = state === "loading";

    let bg = "transparent";
    let color = isDark ? tc.fill : tc.text;
    let borderStyle = "1px solid transparent";
    let boxShadow = "none";

    if (variant === "filled") {
      bg = isDisabled ? tc.fillDisabled : isActive ? tc.fillActive : isHover ? tc.fillHover : tc.fill;
      color = isDisabled ? tc.textDisabled : tc.text;
    } else if (variant === "outline") {
      bg = isActive ? tc.fillDisabled : isHover ? `${tc.fill.slice(0, -2)}0.05)` : "transparent";
      borderStyle = `1.5px solid ${isDisabled ? `${tc.fill.slice(0, -2)}0.15)` : `${tc.fill.slice(0, -2)}0.6)`}`;
      color = isDisabled ? tc.textDisabled : isDark ? `${tc.fill.slice(0, -2)}0.9)` : tc.text;
    } else if (variant === "ghost") {
      bg = isActive ? `${tc.fill.slice(0, -2)}0.1)` : isHover ? `${tc.fill.slice(0, -2)}0.06)` : "transparent";
      color = isDisabled ? tc.textDisabled : isDark ? `${tc.fill.slice(0, -2)}0.8)` : tc.text;
    } else if (variant === "gradient") {
      bg = isDisabled
        ? `linear-gradient(135deg, ${tc.fillDisabled}, rgba(168,162,158,0.15))`
        : `linear-gradient(135deg, ${tc.fill}, ${tc.fillHover}, ${tc.fill.slice(0, -2)}0.8))`;
      color = isDisabled ? tc.textDisabled : tc.text;
    } else if (variant === "glass") {
      bg = isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)";
      borderStyle = `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`;
      color = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)";
      boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
    }

    // Preview background
    const previewBg = isDark ? "#0a0a0a" : "#f5f5f5";
    const previewGridColor = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";

    // Build style
    const isGradientBg = bg.startsWith("linear-gradient");
    const style: Record<string, string | number> = {
      ...(isGradientBg ? { backgroundImage: bg } : { background: bg }),
      border: borderStyle,
      color,
      boxShadow,
      padding: sz.padding,
      fontSize: sz.fontSize,
      borderRadius: rad.value,
      gap: sz.gap,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1,
      letterSpacing: "0.02em",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...(variant === "glass" ? { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } : {}),
    };

    const isLoadingState = isLoading;
    const label = isLoading ? "Loading..." : "Button";

    // ── CSS expression declarations (split into 2 lines) ──
    const cssLine1 = [
      { prop: "mode", val: `var(--${mode})`, changed: mode !== INITIAL.mode },
      { prop: "font-size", val: `var(--${size})`, changed: size !== INITIAL.size },
      { prop: "border-radius", val: `var(--${radius})`, changed: radius !== INITIAL.radius },
    ];
    const cssLine2 = [
      { prop: "variant", val: `var(--${variant})`, changed: variant !== INITIAL.variant },
      { prop: "color", val: `var(--${token})`, changed: token !== INITIAL.token },
      { prop: "state", val: `var(--${state})`, changed: state !== INITIAL.state },
    ];

    return { sz, rad, style, previewBg, previewGridColor, isLoading: isLoadingState, label, cssLine1, cssLine2 };
  }, [vars]);
}

export function VariableSwitcherPreview({ className }: { className?: string }) {
  const { vars } = useContext(VariableSwitcherCtx);
  const computed = useButtonComputed(vars);
  const [flash, setFlash] = useState(false);
  const prevVarsRef = useRef(JSON.stringify(vars));

  // Flash effect when vars change
  useEffect(() => {
    const current = JSON.stringify(vars);
    if (current !== prevVarsRef.current) {
      prevVarsRef.current = current;
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 400);
      return () => clearTimeout(t);
    }
  }, [vars]);

  return (
    <div className={`absolute inset-0 flex flex-col bg-neutral-950 ${className || ""}`}>
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2 shrink-0"
        style={{ borderBottom: "1px solid rgba(82,82,82,0.25)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4" stroke="rgba(234,179,8,0.5)" strokeWidth="1.2" />
          <circle cx="6" cy="6" r="1.5" fill="rgba(234,179,8,0.6)" />
        </svg>
        <span className="text-[10px] text-neutral-400 tracking-widest uppercase">Preview</span>
        <span className="ml-auto text-[9px] text-neutral-500 tracking-wider">
          {vars.mode === "light" ? "Light" : "Dark"}
        </span>
      </div>

      {/* Button preview area */}
      <div
        className="flex-1 flex items-center justify-center relative"
        style={{
          background: computed.previewBg,
          backgroundImage: `
            linear-gradient(${computed.previewGridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${computed.previewGridColor} 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          transition: "background 300ms ease",
        }}
      >
        {/* Crosshair guides */}
        <div className="absolute pointer-events-none" style={{ left: "50%", top: 0, bottom: 0, width: 1, background: computed.previewGridColor }} />
        <div className="absolute pointer-events-none" style={{ top: "50%", left: 0, right: 0, height: 1, background: computed.previewGridColor }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={JSON.stringify(vars)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="select-none"
            style={computed.style}
          >
            {computed.isLoading && <Spinner size={computed.sz.iconSize} />}
            <span>{computed.label}</span>
          </motion.div>
        </AnimatePresence>

        {/* Size label */}
        <div className="absolute bottom-2 right-3 text-[9px] tracking-wider" style={{ color: vars.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>
          H: {computed.sz.height} · R: {computed.rad.css}
        </div>
      </div>

      {/* Single-line CSS expression with flash highlight */}
      <div
        className="shrink-0 px-3 py-3 overflow-x-auto"
        style={{
          borderTop: "1px solid rgba(82,82,82,0.25)",
          scrollbarWidth: "none",
          background: flash ? "rgba(234,179,8,0.06)" : "transparent",
          transition: "background 400ms ease-out",
        }}
      >
        <pre
          className="text-[10px] whitespace-pre"
          style={{
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            lineHeight: 1.6,
          }}
        >
          {/* Line 1: selector + first 3 props */}
          <span style={{ color: "rgba(234,179,8,0.8)" }}>.btn-{vars.token}</span>
          <span style={{ color: "rgba(234,179,8,0.3)" }}>{" { "}</span>
          {computed.cssLine1.map((d, i) => (
            <span key={d.prop} style={{ display: "inline" }}>
              <AnimatePresence>
                {d.changed && (
                  <motion.span
                    key={`dot-${d.prop}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 600, damping: 20 }}
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(234,179,8,0.9)",
                      boxShadow: "0 0 4px rgba(234,179,8,0.4)",
                      marginRight: 3,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </AnimatePresence>
              <span style={{ color: d.changed ? "rgba(234,179,8,0.9)" : "rgba(168,162,158,0.45)" }}>{d.prop}</span>
              <span style={{ color: "rgba(234,179,8,0.25)" }}>: </span>
              <span style={{ color: d.changed ? "rgba(234,179,8,1)" : "rgba(168,162,158,0.6)" }}>{d.val}</span>
              <span style={{ color: "rgba(234,179,8,0.3)" }}>;</span>
              {i < computed.cssLine1.length - 1 && <span>{"  "}</span>}
            </span>
          ))}
          {"\n"}
          {/* Line 2: remaining 3 props + closing brace */}
          <span style={{ color: "transparent" }}>{"  "}</span>
          {computed.cssLine2.map((d, i) => (
            <span key={d.prop} style={{ display: "inline" }}>
              <AnimatePresence>
                {d.changed && (
                  <motion.span
                    key={`dot-${d.prop}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 600, damping: 20 }}
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(234,179,8,0.9)",
                      boxShadow: "0 0 4px rgba(234,179,8,0.4)",
                      marginRight: 3,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </AnimatePresence>
              <span style={{ color: d.changed ? "rgba(234,179,8,0.9)" : "rgba(168,162,158,0.45)" }}>{d.prop}</span>
              <span style={{ color: "rgba(234,179,8,0.25)" }}>: </span>
              <span style={{ color: d.changed ? "rgba(234,179,8,1)" : "rgba(168,162,158,0.6)" }}>{d.val}</span>
              <span style={{ color: "rgba(234,179,8,0.3)" }}>;</span>
              {i < computed.cssLine2.length - 1 && <span>{"  "}</span>}
            </span>
          ))}
          <span style={{ color: "rgba(234,179,8,0.3)" }}>{" }"}</span>
        </pre>
      </div>
    </div>
  );
}

// Legacy default export
export function VariableSwitcherTile({ className }: { className?: string }) {
  return (
    <VariableSwitcherProvider>
      <VariableSwitcherPanel className={className} />
    </VariableSwitcherProvider>
  );
}