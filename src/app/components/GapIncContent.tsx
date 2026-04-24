import { LightboxImage } from "./Lightbox";
import {
  Layers,
  BookOpen,
  Megaphone,
  Smartphone,
  ShoppingCart,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  FileCode2,
  Users,
  TrendingUp,
} from "lucide-react";
import svgBR from "../../imports/svg-gr1iehk03n";
import svgON from "../../imports/svg-naosmpwnr0";
import svgGap from "../../imports/svg-yidlk3pbw5";
import svgAthelta from "../../imports/svg-hy82zyxq04";

// Loyalty section images
import loyaltyNotifications from "figma:asset/1fa10f636891abbe46873a320f1b23cc36a72c21.png";
import loyaltyRewards from "figma:asset/74024bfa1a6e30eddab8062cc344346248c4f4a5.png";
import loyaltyNavyistFull from "figma:asset/9b9a9850b32e18650f836a191d3d3b202dcb6034.png";

// Library section images
import libraryPages from "figma:asset/62f7f9b93b0e54e753a1d30a8306059742bfa938.png";
import cmsBrandColors from "figma:asset/98ae09cc292bbbe0399e47028ad41a04d215f446.png";
import cmsTypography from "figma:asset/2774193ba0c086c904ff0e83303b10a4c4cf6a1e.png";

// Shareout section images
import shareoutNewsletter from "figma:asset/820fc5770486074b4a9b91c3a0968e60ef4fc487.png";
import shareoutIntake from "figma:asset/0a8adde3690d82e3c1e6cd6fd8657616281dfefe.png";

/** Generous section divider */
function SectionDivider() {
  return (
    <div className="py-8">
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </div>
  );
}

/** Section label + heading pair with built-in bottom spacing */
function SectionHeader({
  label,
  heading,
  id,
  labelDelay = 0,
  headingDelay = 0.08,
}: {
  label: string;
  heading: string;
  id?: string;
  labelDelay?: number;
  headingDelay?: number;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/60 mb-3">
        {label}
      </p>
      <h3 id={id} className="text-xl md:text-2xl text-white">
        {heading}
      </h3>
    </div>
  );
}

/* ─── Brand logos ─── */

const brandLogos = [
  {
    name: "Banana Republic",
    bg: "bg-black",
    render: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          className="w-[55%] h-[40%]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 148.157 100.747"
        >
          <path
            clipRule="evenodd"
            d={svgBR.p38193000}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Old Navy",
    bg: "",
    render: () => (
      <div className="relative w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 237.051 237.051"
        >
          <rect fill="#003764" height="237.051" rx="118.525" width="237.051" />
          <path d={svgON.p3fabef00} fill="white" />
        </svg>
      </div>
    ),
  },
  {
    name: "Gap",
    bg: "bg-[#000d42]",
    render: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          className="w-[50%] h-[55%]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 124.452 93.7914"
        >
          <path
            clipRule="evenodd"
            d={svgGap.p44f5e80}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Athleta",
    bg: "",
    render: () => (
      <div className="relative w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 237.051 237.051"
        >
          <rect fill="#333333" height="237.051" rx="118.525" width="237.051" />
          <path d={svgAthelta.p1cc70f70} fill="white" />
        </svg>
      </div>
    ),
  },
];

/* ═══════════════════════════════════════════════════
 Section 1: System Context & Problem at Scale
 ═══════════════════════════════════════════════════ */

export function GapIncChallenge() {
  return (
    <div>
      <SectionHeader
        label="System Context"
        heading="Four Brands, Zero Shared Infrastructure"
      />

      {/* Brand logos */}
      <div className="flex items-center justify-center gap-5 md:gap-8 mb-14 mt-2">
        {brandLogos.map((brand, i) => (
          <div
            key={brand.name}
            className={`w-14 h-14 md:w-18 md:h-18 rounded-full overflow-hidden shrink-0 ${brand.bg || ""}`}
            title={brand.name}
          >
            {brand.render()}
          </div>
        ))}
      </div>

      {/* Snapshot */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Snapshot
        </p>
        <ul className="space-y-3">
          {[
            "4 brands, 8 surfaces (iOS, Android, web, in-store, internal tools)",
            "Owned design system from mobile UX to systems manager",
            "Delivered system that reduced duplication and increased brand consistency",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-yellow-400/60 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Problem at Scale */}
      <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl">
        Four brands, eight surfaces. No shared infrastructure. Teams were solving the same problems independently: building loyalty features, redesigning navigation, creating components, all in parallel. Inconsistency, drift, and slow cycles.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        COVID hit and accelerated everything. Contactless and mobile-first went
        from nice-to-have to survival. Digital had to match in-store. Speed to
        market became the priority. The portfolio needed structure without
        losing what made each brand feel distinct.
      </p>

      {/* Scope cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {[
          {
            icon: Smartphone,
            title: "Mobile & Web",
            description:
              "Designed across native iOS/Android apps and responsive web for all four brands.",
          },
          {
            icon: ShoppingCart,
            title: "In-Store & Kiosk",
            description:
              "Connected digital and physical touchpoints so in-store experiences matched mobile.",
          },
          {
            icon: CreditCard,
            title: "Loyalty & Payments",
            description:
              "Integrated Barclay's rewards and Synchrony credit into a unified loyalty experience.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-4">
              <item.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <p className="text-white mb-2">{item.title}</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 2: System Intervention & Loyalty
 ═══════════════════════════════════════════════════ */

export function GapIncLoyalty() {
  return (
    <div>
      <SectionHeader
        label="System Intervention"
        heading="Built Stitch as Infrastructure"
      />

      <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
        I built and managed the Stitch design system: tokens, components,
        taxonomy, and governance. Loyalty was the flagship product initiative
        that drove adoption.
      </p>

      {/* Mobile screens + narrative: side by side */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start mb-20">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              src: loyaltyRewards,
              alt: "Gap Inc. mobile app loyalty screen showing points balance and reward status",
              caption: "Rewards dashboard",
            },
            {
              src: loyaltyNavyistFull,
              alt: "Old Navy Navyist rewards and store locator integration",
              caption: "Navyist enrollment",
            },
            {
              src: loyaltyNotifications,
              alt: "Gap Inc. mobile app notifications with curbside pickup and rewards",
              caption: "Pickup & notifications",
            },
          ].map((img, i) => (
            <div key={img.alt}>
              <LightboxImage
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                maxHeight={360}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:pt-4">
          <p className="text-neutral-300 leading-relaxed">
            Loyalty was the flagship initiative. I designed the end-to-end
            experience across mobile apps, integrating with Barclay's rewards
            and Synchrony credit so the in-store and digital sides finally moved together.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            I evolved navigation patterns, designed the product card quick-add
            feature, and used the Barclay rewards integration to connect loyalty
            moments from enrollment to redemption.
          </p>
        </div>
      </div>

      {/* System Diagram */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          System Architecture
        </p>
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-8">
          <div className="space-y-6">
            {[
              {
                from: "Design Tokens",
                to: "Brand Colors, Type, Spacing, Motion",
                icon: Layers,
              },
              {
                from: "Component Library",
                to: "Buttons, Cards, Navigation, Forms",
                icon: FileCode2,
              },
              {
                from: "Documentation",
                to: "Anatomy, States, Usage Guidelines",
                icon: BookOpen,
              },
              {
                from: "Product Teams",
                to: "iOS, Android, Web, In-Store",
                icon: Users,
              },
            ].map((row, i) => (
              <div key={row.from} className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
                  <row.icon className="w-4 h-4 text-yellow-400/60" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm mb-1">{row.from}</p>
                  <p className="text-xs text-neutral-500">{row.to}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-yellow-400/40" />
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-4">
          Tokens flow into components. Components use documentation. Teams adopt
          patterns across surfaces.
        </p>
      </div>

      {/* Figma prototype embed */}
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Interactive Prototype
        </p>
        <div
          className="relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            src="https://embed.figma.com/proto/9MvWGpXJA5ClYgzXfy7Qef/Navigation-MVP?page-id=536%3A7642&node-id=536-7951&p=f&viewport=-231%2C176%2C0.15&scaling=scale-down&content-scaling=fixed&embed-host=share"
            allowFullScreen
            loading="eager"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 3: Adoption, Before/After, Impact
 ══════════════════════════════════════════════════ */

export function GapIncLibrary() {
  return (
    <div>
      {/* Library Management */}
      <div>
        <SectionHeader
          label="Adoption & Governance"
          heading="Library Management & Documentation"
        />

        <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
          I consolidated brand specs and shared assets into a component library
          that designers and engineers could rely on in daily product work. I
          built libraries for Old Navy, Banana Republic, Athleta, and Gap with
          brand-specific assets while sharing foundational patterns.
        </p>

        {/* Library pages + narrative: side by side */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-start mb-16">
          <div className="md:max-w-[220px]">
            <LightboxImage
              src={libraryPages}
              alt="Figma library page structure showing Colors, Typography, iOS UI, and Base component pages for Old Navy"
              caption="Old Navy iOS library. Page structure."
              maxHeight={300}
            />
          </div>

          <div className="flex flex-col gap-6 md:pt-2">
            <p className="text-neutral-300 leading-relaxed">
              I set the quality bar on color and accessibility. I worked with
              engineers so the components actually worked in code, not just in
              Figma.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              In Figma, I built system-friendly prototypes using Auto Layout,
              tokens, instances, and properties so patterns stayed flexible and
              scalable.
            </p>
          </div>
        </div>

        {/* Figma design embed */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
            Explore the Library
          </p>
          <div
            className="relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src="https://embed.figma.com/design/aSAf2qrXqfdOAzBL55tbOs/ON-iOS?node-id=0-1&embed-host=share"
              allowFullScreen
              loading="eager"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Documentation */}
      <div>
        <SectionHeader
          label="Documentation"
          heading="Built Documentation as Product"
        />

        <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
          I designed the information architecture for the CMS documentation and
          wrote specs that translated brand and component rules into practical
          guidance. I audited real product usage across platforms to clarify
          states, behaviors, and edge cases.
        </p>

        {/* Doc images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div>
            <LightboxImage
              src={cmsBrandColors}
              alt="CMS documentation page showing cross-brand color palette with hex values, Sass functions, React Stitch tokens, and WCAG contrast ratings"
              caption="Brand Colors. Cross-brand accent and neutrals spec."
              lightBg
              maxHeight={280}
            />
          </div>
          <div>
            <LightboxImage
              src={cmsTypography}
              alt="CMS documentation page showing typography system with font sizes, weights, and applied typography showcase"
              caption="Typography. Scale, tokens, and applied showcase."
              lightBg
              maxHeight={280}
            />
          </div>
        </div>

        {/* Before / After */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
            Before / After
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 rounded-xl overflow-hidden">
            <div className="bg-neutral-950 px-6 py-7">
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-[0.15em]">
                Before
              </p>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>Duplicated components across brands</li>
                <li>No shared tokens or naming conventions</li>
                <li>Teams rebuilt patterns for every surface</li>
                <li>Accessibility was an afterthought</li>
              </ul>
            </div>
            <div className="bg-neutral-950 px-6 py-7">
              <p className="text-xs text-yellow-400/60 mb-3 uppercase tracking-[0.15em]">
                After
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>Single source of truth for all brands</li>
                <li>Tokenized colors, type, spacing, motion</li>
                <li>Reusable patterns across iOS, Android, web</li>
                <li>Accessibility baked into every component</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Shareout Strategy */}
      <div>
        <SectionHeader
          label="Adoption Strategy"
          heading="Communication as Infrastructure"
        />

        <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
          I treated adoption like a product problem. I used Figma library
          metrics, standup updates, and patch notes to publish a bi-weekly
          newsletter for UX and engineering. I onboarded new cohorts by walking
          through the library, sticker sheet, documentation, and intake flow.
        </p>

        {/* Newsletter + narrative: paired */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-start mb-20">
          <div>
            <LightboxImage
              src={shareoutNewsletter}
              alt="Stitch Newsletter announcing component availability, status board with Recently Updated, Work in Progress, In Backlog, and Now Available columns"
              caption="Bi-weekly newsletter. Component status and resources."
              lightBg
              maxHeight={340}
            />
          </div>

          <div className="flex flex-col gap-6 md:pt-2">
            <p className="text-neutral-300 leading-relaxed">
              I set up an intake system for feedback and worked with PM to scope
              and prioritize tickets weekly, turning adoption friction into
              actionable improvements.
            </p>
          </div>
        </div>

        {/* Intake form */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
            Intake & Prioritization
          </p>
          <LightboxImage
            src={shareoutIntake}
            alt="Submit your Request page with New Enhancement, New Feature, and Defect categories, plus request form flowing into a Kanban prioritization board"
            caption="Intake system. Request form to Kanban board."
            lightBg
            maxHeight={320}
          />
        </div>

        {/* Adoption & Impact */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
            Adoption & Impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: TrendingUp,
                metric: "450+ symbols",
                label: "Grew library 400% for in-store apps",
              },
              {
                icon: FileCode2,
                metric: "35 UI + 6 non-UI",
                label: "Components shipped and maintained",
              },
              {
                icon: BookOpen,
                metric: "58 component docs",
                label: "With anatomy and usage guidelines",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6"
              >
                <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-3">
                  <item.icon className="w-4 h-4 text-yellow-400/60" />
                </div>
                <p className="text-xl text-yellow-400 mb-2">{item.metric}</p>
                <p className="text-sm text-neutral-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decision-Making & Tradeoffs */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
            Decision-Making & Tradeoffs
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4 max-w-2xl">
            I found the balance: strong enough to scale, flexible enough to feel like Gap, Old Navy, Banana Republic, or Athleta.
          </p>
          <p className="text-neutral-300 leading-relaxed max-w-2xl">
            The tradeoff: slower initial adoption because teams needed to
            understand the token system. The payoff: long-term scalability and
            less rework as new surfaces and features were added.
          </p>
        </div>
      </div>
    </div>
  );
}
