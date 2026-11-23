/**
 * Coded, brand-neutral illustration for the Amazon / Bookmark docs teaser:
 * an abstracted documentation page — nav, page header, a live component
 * sample, and do / don't guidance cards. No real screenshots or branding.
 */
export function BookmarkDocsVisual() {
  const line = "h-1.5 rounded-full bg-neutral-700/70";
  return (
    <div
      className="aspect-[16/10] overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950"
      role="img"
      aria-label="Illustration of a design system documentation page with a component sample and do and don't guidance"
    >
      <div className="flex h-full">
        {/* Side nav */}
        <div className="hidden sm:flex w-[22%] flex-col gap-3 border-r border-neutral-800 p-[4%] pt-14">
          <div className="h-2 w-2/3 rounded-full bg-neutral-500" />
          <div className="mt-2 flex flex-col gap-2.5">
            {[70, 55, 80, 60].map((w, i) => (
              <div key={i} className={line} style={{ width: `${w}%` }} />
            ))}
            <div className="relative -mx-2 rounded bg-yellow-400/10 px-2 py-1.5">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded bg-yellow-400" />
              <div className="h-1.5 w-3/4 rounded-full bg-yellow-400/80" />
            </div>
            {[65, 50, 75, 45, 60].map((w, i) => (
              <div key={i} className={line} style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        {/* Page */}
        <div className="flex flex-1 flex-col gap-[4%] p-[5%] pt-12 sm:pt-[5%]">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="h-1 w-24 rounded-full bg-neutral-700" />
            <div className="h-4 w-2/5 rounded bg-neutral-200" />
            <div className={line} style={{ width: "85%" }} />
            <div className={line} style={{ width: "60%" }} />
          </div>

          {/* Live sample */}
          <div className="relative flex flex-1 items-center justify-center gap-3 rounded-md border border-neutral-800 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:12px_12px]">
            <span className="absolute left-2 top-2 hidden sm:block rounded bg-neutral-800 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-neutral-400">
              Sample
            </span>
            <div className="rounded-md bg-yellow-400 px-4 py-2 text-[11px] font-medium text-black">
              Primary
            </div>
            <div className="rounded-md border border-neutral-500 px-4 py-2 text-[11px] text-neutral-200">
              Secondary
            </div>
            <div className="hidden md:flex h-5 w-9 items-center rounded-full bg-yellow-400 p-0.5">
              <div className="ml-auto h-4 w-4 rounded-full bg-black" />
            </div>
            {/* Spec callout */}
            <div className="absolute -bottom-px left-1/2 hidden -translate-x-1/2 translate-y-1/2 items-center gap-1 rounded-full border border-yellow-400/40 bg-neutral-950 px-2 py-0.5 text-[9px] tabular-nums text-yellow-400 md:flex">
              44 × 44 min target
            </div>
          </div>

          {/* Do / Don't */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Do", bar: "bg-emerald-500", text: "text-emerald-400" },
              { label: "Don't", bar: "bg-rose-500", text: "text-rose-400" },
            ].map((c) => (
              <div key={c.label} className="overflow-hidden rounded-md border border-neutral-800">
                <div className={`h-1 ${c.bar}`} />
                <div className="flex flex-col gap-1.5 p-2.5">
                  <span className={`text-[10px] font-medium ${c.text}`}>{c.label}</span>
                  <div className={line} style={{ width: "90%" }} />
                  <div className={line} style={{ width: "65%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
