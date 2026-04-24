import {
  Layers,
  BookOpen,
  GitMerge,
  Megaphone,
  ArrowRight,
  FileText,
  Accessibility,
  LayoutTemplate,
  Link as LinkIcon,
  Mail,
  MessageSquare,
  Users,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { LightboxImage } from "./Lightbox";

// SWAN logo
import swanLogo from "figma:asset/22350e7a2da3e01ef480a96e102c483f12b4b3c2.png";

// System architecture diagram
import systemArchitecture from "figma:asset/310cb59e51f7a6de476eb0d7e786f11ce4ccdaee.png";

// Figma libraries panel screenshot
import figmaLibrariesImg from "figma:asset/ca0ff0dad294b06db05cf066d766fa8ff776ad0b.png";

// Documentation & guidelines screenshots
import docComponentsImg from "figma:asset/81ee9abecf83d281e1c8a676ce036d6fa5c6eb90.png";
import docComponentsGridImg from "figma:asset/55a82b90e8d3bbc56a8119116cb3dfdabe590021.png";
import docUxDesignImg from "figma:asset/17e7da5c2dd4b8c56b88d38899602889cac5de6b.png";
import docHomepageImg from "figma:asset/38ca40d770362794d39d1f19250deccda8e5099f.png";
import docFoundationsImg from "figma:asset/cf1fdeb5910c75918119ee3b76daa035e167efeb.png";

// Communication & adoption screenshots
import slackUpdatesImg from "figma:asset/56eadb144aef0f8498fc386bdad83df714d30e79.png";
import intakeFormImg from "figma:asset/0a91c75102ab9e73c4b6cdbcab6ed96ca3677eb5.png";
import bugReportImg from "figma:asset/8f9ea2e3a03d82e3b1b5f5b3e9aeb16ec0065c84.png";
import surveyResultsImg from "figma:asset/939c312f2a60b679a82e61502e8377bb4fbd1124.png";

// Impact — card sort similarity matrix
import cardSortMatrixImg from "figma:asset/39224db750c24cecdc1926572bf90f5ea9c536ae.png";

/** Generous section divider */
function SectionDivider() {
  return (
    <div className="py-8">
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </div>
  );
}

/** Section label + heading with built-in bottom spacing */
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

/* ═══════════════════════════════════════════════════
 Section 1: System Context & Problem at Scale
 ═══════════════════════════════════════════════════ */

export function VistaprintStartingPoint() {
  return (
    <div>
      {/* SWAN logo mark */}
      <div className="flex items-center gap-4 mb-12">
        <img
          src={swanLogo}
          alt="SWAN design system logo"
          className="w-10 h-12 object-contain invert"
        />
        <div>
          <p className="text-lg text-white tracking-wide">SWAN</p>
          <p className="text-xs text-neutral-500 tracking-[0.1em]">
            Vista Design System
          </p>
        </div>
      </div>

      <SectionHeader
        label="System Context"
        heading="First Design Systems Hire"
      />

      {/* Snapshot */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Snapshot
        </p>
        <ul className="space-y-3">
          {[
            "Started with Visage: large library, fractured adoption.",
            "Built SWAN: structure, tokens, clear governance.",
            "Teams started choosing SWAN over workarounds.",
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
        Visage existed. A sprawling library, but teams had learned to ignore it and build their own versions. Components were there but unused. By the time I arrived, the system had become invisible.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-12 max-w-2xl">
        SWAN was the reset. It aligned teams on a shared system and a shared way
        of building UI with clear structure, clearer rules, and a stronger path
        from design to code.
      </p>

      {/* Transition visual: Visage to SWAN evolution */}
      <div className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl px-6 py-8 text-center">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3">
              Before
            </p>
            <p className="text-2xl md:text-3xl text-neutral-600 mb-2">Visage</p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Large library, inconsistent adoption, no unified visual language
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-yellow-400/40" />
          </div>

          <div className="bg-neutral-900/60 border border-yellow-400/20 rounded-xl px-6 py-8 text-center">
            <p className="text-xs uppercase tracking-[0.15em] text-yellow-400/60 mb-3">
              After
            </p>
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <img
                src={swanLogo}
                alt=""
                className="w-5 h-6 object-contain invert"
              />
              <p className="text-2xl md:text-3xl text-white">SWAN</p>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Shared system, clear structure, stronger path from design to code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 2: System Intervention
 ══════════════════════════════════════════════════ */

const foundationPillars = [
  {
    icon: Layers,
    title: "Component Hierarchy",
    description:
      "Established a clear structure for how components relate: primitives, composites, and patterns. Teams could find and combine pieces predictably.",
  },
  {
    icon: GitMerge,
    title: "Tokens & Variants",
    description:
      "Defined the naming conventions, variant properties, and token architecture that made components flexible without becoming fragile.",
  },
  {
    icon: BookOpen,
    title: "Documentation Standards",
    description:
      "Created templates for usage guidelines, states, anatomy, and do's and don'ts so every component shipped with clear context from day one.",
  },
  {
    icon: Megaphone,
    title: "Adoption Workflows",
    description:
      "Built intake funnels, prioritization cadences, and communication rhythms that treated system adoption as a product problem, not a mandate.",
  },
];

export function VistaprintFoundation() {
  return (
    <div>
      <SectionHeader
        label="System Intervention"
        heading="Architect of the Library Foundation"
      />

      <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl">
        As the first design systems hire, I laid the foundation for how Figma
        libraries were organized, structured, and maintained. I defined naming
        conventions, hierarchy, and contribution patterns so the system could
        scale cleanly as more teams joined.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        I consolidated legacy and duplicate components into a single source of
        truth, and partnered with engineering early so states, behaviors, and
        props matched across design and code.
      </p>

      {/* Figma libraries panel */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Library Ecosystem
        </p>
        <LightboxImage
          src={figmaLibrariesImg}
          alt="Figma Libraries panel showing the full ecosystem: Visage UI Kit (Beta), 99d Design Tokens, 99d UI Library, Template Library, Ideas & Advice Article, and SWAN Vista Design System with Meta UI Kit and SWAN UI Kit"
          caption="The full library ecosystem from legacy Visage to SWAN"
          lightBg
        />
      </div>

      {/* Four pillars grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {foundationPillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-6 py-7 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
                <pillar.icon className="w-4 h-4 text-yellow-400/60" />
              </div>
              <div>
                <p className="text-white mb-2">{pillar.title}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* System architecture diagram */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          System Architecture
        </p>
        <LightboxImage
          src={systemArchitecture}
          alt="SWAN system architecture showing the flow from vista.design to Swan UI Library, Writer, Github Repo, Knapsack, Storybook, and CMS staging site, with Airtable intake integration"
          caption="SWAN ecosystem: from intake to documentation to code"
          lightBg
        />
        <p className="text-xs text-neutral-500 mt-4">
          Intake feeds prioritization. Figma designs sync to code. Documentation
          lives in Knapsack and Storybook. Teams pull from one source of truth.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 3: Documentation & Guidelines
 ═══════════════════════════════════════════════════ */

const toolchainSteps = [
  { label: "Abstract", description: "Version control for design files" },
  { label: "Figma", description: "Component design & prototyping" },
  { label: "Sanity", description: "Structured content management" },
  { label: "Knapsack", description: "Design system documentation" },
];

export function VistaprintGuidelines() {
  return (
    <div>
      <SectionHeader
        label="Documentation"
        heading="Built Documentation as Product"
      />

      <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl">
        I established documentation standards for component anatomy, usage
        guidance, states, and do's and don'ts so teams had clarity from day one.
        I turned tribal knowledge into structured pages that connected brand
        rules, UX patterns, and technical constraints in one reference.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        I created repeatable doc templates so future contributors could add new
        work without reinventing the format, and I baked accessibility guidance
        into the system from the start.
      </p>

      {/* Three capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: FileText,
            title: "Structured Documentation",
            description:
              "Anatomy, usage guidelines, states, do's and don'ts. Each component shipped with clear, consistent context.",
          },
          {
            icon: LayoutTemplate,
            title: "Repeatable Templates",
            description:
              "Created doc templates so future contributors could add new work without reinventing the format every time.",
          },
          {
            icon: Accessibility,
            title: "Accessibility Built In",
            description:
              "Baked a11y guidance into every component page: keyboard behavior, ARIA roles, color contrast, and screen reader notes.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-6 py-7 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="p-2.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-4">
              <item.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <p className="text-white mb-2">{item.title}</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Documentation site screenshots */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          vista.design: Documentation in Progress
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src={docHomepageImg}
            alt="SWAN documentation homepage: Design, prototype, and build exceptional experiences for all Vista customers"
            caption="SWAN doc site homepage with quick start guides and version changelog"
            lightBg
            maxHeight={260}
          />
          <LightboxImage
            src={docFoundationsImg}
            alt="SWAN Foundations page showing Color, Grids, Icons, Logo, Typography, and Spacing foundation cards"
            caption="Foundations: Color, Grids, Icons, Logo, Typography, Spacing"
            lightBg
            maxHeight={260}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LightboxImage
            src={docComponentsGridImg}
            alt="SWAN Components page showing a grid of components with featured component contribution"
            caption="Components library with category filters"
            lightBg
            maxHeight={220}
          />
          <LightboxImage
            src={docComponentsImg}
            alt="Full-length component documentation page showing anatomy, guidelines, and usage examples"
            caption="Component docs: anatomy, states, and guidelines"
            lightBg
            maxHeight={220}
          />
          <LightboxImage
            src={docUxDesignImg}
            alt="UX + Design at Vista page: team culture, design principles, and career progression"
            caption="UX + Design at Vista: team culture"
            lightBg
            maxHeight={220}
          />
        </div>
      </div>

      {/* Toolchain strip */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-5">
          Toolchain
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {toolchainSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg px-4 py-3 text-center">
                <p className="text-sm text-white">{step.label}</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {step.description}
                </p>
              </div>
              {i < toolchainSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-yellow-400/30 shrink-0" />
              )}
            </div>
          ))}
          <ArrowRight className="w-4 h-4 text-yellow-400/30 shrink-0" />
          <div className="bg-neutral-900/60 border border-yellow-400/20 rounded-lg px-4 py-3 text-center">
            <div className="flex items-center gap-1.5">
              <LinkIcon className="w-3 h-3 text-yellow-400/60" />
              <p className="text-sm text-yellow-400">vista.design/swan</p>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Public documentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 4: Consolidation (Before/After)
 ═══════════════════════════════════════════════════ */

export function VistaprintConsolidation() {
  return (
    <div>
      <SectionHeader label="Before / After" heading="Consolidation" />

      <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl">
        Legacy components had accumulated over years of product work. Some were
        duplicates with slight variations. Others were orphaned, used in
        production but disconnected from any shared library. The first step was
        an honest audit.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        I mapped every component in active use across surfaces, identified
        overlap, and consolidated them into one source of truth. The goal was
        not to eliminate variation. The goal was to make the canonical version
        obvious and the migration path low-friction.
      </p>

      {/* Process steps */}
      <div className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 rounded-xl overflow-hidden">
          {[
            {
              step: "01",
              title: "Audit",
              body: "Catalogued every component in use across product surfaces, flagging duplicates, orphans, and drift.",
            },
            {
              step: "02",
              title: "Consolidate",
              body: "Merged overlapping components into canonical versions with clear variant coverage and token support.",
            },
            {
              step: "03",
              title: "Migrate",
              body: "Provided migration guides and pairing sessions so teams could switch to the source of truth with confidence.",
            },
          ].map((item, i) => (
            <div key={item.step} className="bg-neutral-950 px-6 py-8">
              <p className="text-xs text-yellow-400/50 mb-3 tracking-[0.15em]">
                {item.step}
              </p>
              <p className="text-white mb-3">{item.title}</p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
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
              <li>Legacy components scattered across surfaces</li>
              <li>Duplicates with slight variations</li>
              <li>Teams worked around the system, not with it</li>
              <li>No clear migration path or support</li>
            </ul>
          </div>
          <div className="bg-neutral-950 px-6 py-7">
            <p className="text-xs text-yellow-400/60 mb-3 uppercase tracking-[0.15em]">
              After
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>One canonical source of truth per component</li>
              <li>Clear variant coverage with token support</li>
              <li>System became the default path</li>
              <li>Migration guides and pairing sessions available</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-neutral-300 leading-relaxed max-w-2xl">
        The result was a library teams could adopt with confidence, knowing that
        what they pulled in was the current, maintained, supported version.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 5: Adoption & Communication
 ══════════════════════════════════════════════════ */

export function VistaprintAdoption() {
  return (
    <div>
      <SectionHeader
        label="Adoption Strategy"
        heading="Communication as Infrastructure"
      />

      {/* Opening narrative */}
      <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
        I treated communication like part of the product. I used Figma library
        metrics, standup updates, and patch notes to publish a bi-weekly
        newsletter for UX and engineering, keeping teams aligned on system
        health and changes.
      </p>

      {/* Paired layout: narrative left, Slack evidence right */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 items-start mb-20">
        <div className="flex flex-col gap-6">
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Newsletters & Patch Notes",
                description:
                  "Launched the initial communication rhythm: newsletters, patch notes, and demos to make the work visible across UX and engineering.",
              },
              {
                icon: BarChart3,
                title: "Impact-Framed Updates",
                description:
                  "I told teams what each update meant for them: faster work, fewer bugs, better access. Not just a list of changes.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-5 group hover:border-neutral-700 transition-colors duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-yellow-400/60" />
                  </div>
                  <div>
                    <p className="text-white mb-1.5">{item.title}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <LightboxImage
            src={slackUpdatesImg}
            alt="Slack channel feed showing design system updates: library changes, component patches, migration reminders, and feature announcements shared bi-weekly with the UX and engineering teams"
            caption="Bi-weekly Slack updates: patch notes, migrations, and feature callouts"
            maxHeight={340}
          />
        </div>
      </div>

      {/* Second narrative beat */}
      <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl">
        I onboarded new cohorts through a consistent walkthrough of the library,
        sticker sheet, documentation, and intake flow. Feedback from these
        touchpoints fed directly into the intake system, where I partnered with
        PM to scope and ship improvements on a weekly sprint cadence.
      </p>

      {/* Intake process cards - streamlined */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {[
          {
            icon: Users,
            title: "Onboarding & Share Outs",
            description:
              "Used share outs to onboard new cohorts, walk them through the library and docs, and reinforce how to work with the system instead of around it.",
          },
          {
            icon: MessageSquare,
            title: "Feedback as Input",
            description:
              "Collected feedback during these touchpoints to shape the next wave of work, turning communication into a feedback loop instead of a one-way broadcast.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-5 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
                <item.icon className="w-4 h-4 text-yellow-400/60" />
              </div>
              <div>
                <p className="text-white mb-1.5">{item.title}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Intake evidence images: full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
        <div>
          <LightboxImage
            src={intakeFormImg}
            alt="SWAN Design System Intake Form: report issues, request features, and share ideas"
            caption="Intake form: bugs, requests, and contributions"
            lightBg
            maxHeight={280}
          />
        </div>
        <div>
          <LightboxImage
            src={bugReportImg}
            alt="Slack bug report from a team member showing a responsive image scaling issue"
            caption="Bug reports fed directly into the pipeline"
            lightBg
            maxHeight={280}
          />
        </div>
      </div>

      {/* Survey results */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Measuring Understanding
        </p>
        <LightboxImage
          src={surveyResultsImg}
          alt="Survey results: I understand what a design system is and the value it provides. 4.2 average rating from 27 respondents, with 85.2% rating 4 or 5 out of 5"
          caption="85% of respondents rated their understanding of the system a 4 or 5 out of 5"
          lightBg
          maxHeight={280}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 6: Impact, Tradeoffs, Ownership
 ═══════════════════════════════════════════════════ */

export function VistaprintImpact() {
  return (
    <div>
      <SectionHeader
        label="Impact & Outcomes"
        heading="System Became Default Infrastructure"
      />

      {/* Adoption & Impact */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Adoption & Impact
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: TrendingUp,
              metric: "85%",
              label: "Understood system value (survey)",
            },
            {
              icon: Zap,
              metric: "Weekly",
              label: "Sprint cadence for system improvements",
            },
            {
              icon: Users,
              metric: "Cross-functional",
              label: "UX, Eng, PM adoption",
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

      {/* Card sort matrix */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Information Architecture Validation
        </p>
        <LightboxImage
          src={cardSortMatrixImg}
          alt="Card sort similarity matrix showing participant agreement on component categorization across the SWAN design system"
          caption="Card sort similarity matrix: validated component taxonomy"
          lightBg
        />
      </div>

      {/* Decision-Making & Tradeoffs */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Decision-Making & Tradeoffs
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4 max-w-2xl">
          I prioritized consolidation and clarity over speed. The system could
          have shipped faster if I skipped the component audit and migration
          guides, but that would have left teams without a clear path forward. I
          chose structure over velocity because the cost of rework is always
          higher than the cost of doing it right.
        </p>
        <p className="text-neutral-300 leading-relaxed max-w-2xl">
          The tradeoff: slower initial rollout. The payoff: teams trusted it because I fought for quality and showed up for them.
        </p>
      </div>

      {/* Role & Ownership */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
          Role & Ownership
        </p>
        <p className="text-neutral-300 leading-relaxed max-w-2xl">
          I owned the foundation of SWAN: structure, tokens, components,
          documentation standards, adoption workflows, and communication
          rhythms. I set the quality bar, defined the contribution process, and
          made it easier for teams to build with the system than to work around
          it.
        </p>
      </div>
    </div>
  );
}
