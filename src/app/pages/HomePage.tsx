import { MasonryGrid } from "../components/MasonryGrid";
import { InteractiveHero } from "../components/InteractiveHero";
import { CaseStudies } from "../components/CaseStudies";
import { Footer } from "../components/Footer";
import shopImage from "figma:asset/48b77747270b96512cc535afd048c3db73768eed.png";
import brandSwitchImage from "figma:asset/0c633f5d0759788bace4feb7b95da6182f7d5e5a.png";
import scrollPatternImage from "figma:asset/1db9a2bd722a4b1940761a19b8ab195a9eda2f25.png";
import visageColorImage from "figma:asset/9d27bd81fc71a23da37528a74ada98864aa25e49.png";
import visageComponentsImage from "figma:asset/81ee9abecf83d281e1c8a676ce036d6fa5c6eb90.png";

export function HomePage() {
  // Hero sentence — easy to edit. Plain strings render as static text.
  // Objects with { id, word, tooltip, color } become hoverable. Each gets its
  // own color so visitors discover them at rest; on hover, that word stays in
  // its color while the rest of the sentence dims to gray.
  const heroSegments = [
    " is a ",
    {
      id: "designer",
      word: "product designer",
      color: "text-yellow-400",
      tooltip:
        "Consumer apps, enterprise tools, and physical products. Metromile, Vistaprint, Gap Inc., now Amazon Bookmarks.",
    },
    " with 12 years of experience building ",
    {
      id: "systems",
      word: "design systems",
      color: "text-cyan-400",
      tooltip:
        "Led design systems at Vistaprint (SWAN) and Gap Inc. (BRONGA Stitch). Four brands, eight platforms.",
    },
    " and ",
    {
      id: "prototyping",
      word: "prototyping physical and digital things.",
      color: "text-fuchsia-400",
      tooltip:
        "Built Ugly Pickle solo: physical board game, mobile companion app, custom IoT scoring buzzer (PCB and Arduino), production packaging. Currently building a SaaS tool that helps board game publishers develop their rules.",
    },
  ];

  const masonryItems = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1759505017950-25e0733b9e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI2NzgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Interface Design",
      annotation: "Flip theme, size, variant and state. The button in the next tile rebuilds itself from those choices, the same token-and-variant model a component library runs on.",
      category: "Product",
      size: "large" as const,
      variableSwitcher: true,
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0eXBvZ3JhcGh5JTIwcG9zdGVyfGVufDF8fHx8MTc3MjYwNDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Typography Systems",
      annotation: "The live result of the switcher: the rendered button and the CSS it resolves to.",
      category: "Visual Design",
      size: "medium" as const,
      variablePreview: true,
    },
    {
      id: 3,
      imageUrl: "https://i.imgur.com/txdTssj.png",
      scrollLoop: true,
      title: "Pattern Library",
      annotation: "A slow loop through a pattern library, too long to fit on one screen.",
      category: "Systems",
      size: "small" as const,
    },
    {
      id: 4,
      imageUrl: shopImage,
      hoverImageUrl: brandSwitchImage,
      title: "Mobile Experience",
      annotation: "Hover to re-skin the same shop screen for a second brand. One set of components, different themes.",
      category: "Mobile",
      size: "small" as const,
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzI2MjI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Component Architecture",
      annotation: "Move your cursor into the stack to drop in a new block and watch the rest reflow, like auto layout in Figma.",
      category: "Systems",
      size: "medium" as const,
      autoLayoutPush: true,
    },
    {
      id: 6,
      imageUrl: visageColorImage,
      revealPair: [visageColorImage, visageComponentsImage] as [string, string],
      title: "Visage Design System",
      annotation: "Sweep across to peel back the color foundations and reveal the components built on them.",
      category: "Design Systems",
      size: "large" as const,
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero — full width, full type size */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 md:pt-28 pb-12">
        <InteractiveHero name="William Bee" segments={heroSegments} />
      </section>

      {/* Case Studies */}
      <section className="px-6 py-24">
        <CaseStudies />
      </section>

      {/* Playground */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-[0.2em] text-yellow-400 mb-4 block">
              Playground
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Nick nacks</h2>
            <p className="text-lg text-neutral-500 max-w-xl">
              Small interactive experiments. Hover, drag, and poke at them.
            </p>
          </div>
          <MasonryGrid items={masonryItems} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}