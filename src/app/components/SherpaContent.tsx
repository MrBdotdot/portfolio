import { LightboxImage } from "./Lightbox";
import {
  BookOpen,
  Compass,
  Code,
  Layout,
  Zap,
  Layers,
  Database,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react";

// Sherpa logo/icon
import sherpaIcon from "figma:asset/d4feb7c97e069988e00182b9612e1bf326c811b3.png";

/** Section label + heading pair */
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
    <header className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/60 mb-3">
        {label}
      </p>
      <h3 id={id} className="text-xl md:text-2xl text-white">
        {heading}
      </h3>
    </header>
  );
}

/* ═══════════════════════════════════════════════════
 Section 1: The Vision
 ═══════════════════════════════════════════════════ */

export function SherpaVision() {
  return (
    <section aria-labelledby="sherpa-vision-heading">
      {/* Sherpa brand mark */}
      <div className="flex items-center gap-4 mb-12">
        <img
          src={sherpaIcon}
          alt="Sherpa logo"
          className="w-16 h-16 object-contain rounded-xl"
        />
        <div>
          <p className="text-lg text-white tracking-wide">Sherpa</p>
          <p className="text-xs text-neutral-500 tracking-[0.1em]">
            Interactive Learning Platform
          </p>
        </div>
      </div>

      <SectionHeader
        id="sherpa-vision-heading"
        label="The Vision"
        heading="Making Complex Ideas Accessible Through Interaction"
      />

      <div className="max-w-2xl space-y-6 mb-14">
        <p className="text-neutral-300 leading-relaxed">
          Sherpa lets you learn complex ideas by playing with them. Instead of static
          documentation or linear videos, learners engage with content that
          responds to their choices and adapts to their understanding.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          I'm building this end-to-end with Next.js and React, with a
          headless CMS powering the content architecture. The goal is to create
          a system where educators and subject matter experts can create
          interactive experiences without needing to code.
        </p>
      </div>

      {/* Status badge */}
      <div className="inline-flex items-center gap-2 bg-neutral-900/60 border border-yellow-400/20 rounded-lg px-4 py-3 mb-14">
        <Zap className="w-4 h-4 text-yellow-400/60" />
        <span className="text-sm text-neutral-300">
          Currently in Development
        </span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 2: The Problem
 ═══════════════════════════════════════════════════ */

export function SherpaProblem() {
  return (
    <section aria-labelledby="sherpa-problem-heading">
      <SectionHeader
        id="sherpa-problem-heading"
        label="The Problem"
        heading="Why Static Docs Don't Stick"
      />

      <div className="max-w-2xl space-y-6 mb-14">
        <p className="text-neutral-300 leading-relaxed">
          Design systems, code architecture, technical processes: all taught through static docs and videos. You read, you guess, you hope it sticks.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          With Sherpa, you interact instead of read. You control the variables instead of watching someone else play. The platform guides you through discovery, not memorization.
        </p>
      </div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {[
          {
            icon: BookOpen,
            title: "Static Documentation",
            description:
              "Long-form articles don't show how systems behave under different conditions.",
          },
          {
            icon: Target,
            title: "Passive Learning",
            description:
              "Watching demos or reading guides creates gaps between understanding and application.",
          },
          {
            icon: Lightbulb,
            title: "No Feedback Loop",
            description:
              "Learners can't test their assumptions or see immediate results of their decisions.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6"
          >
            <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-3">
              <item.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <p className="text-white mb-2">{item.title}</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 3: The Approach
 ═══════════════════════════════════════════════════ */

export function SherpaApproach() {
  return (
    <section aria-labelledby="sherpa-approach-heading">
      <SectionHeader
        id="sherpa-approach-heading"
        label="The Approach"
        heading="Interactive Experiences Powered by Structured Content"
      />

      <div className="max-w-2xl space-y-6 mb-14">
        <p className="text-neutral-300 leading-relaxed">
          The platform is built on a separation between content structure and
          interactive presentation. Educators define the concepts,
          relationships, and decision trees through a CMS. The front-end
          translates that structure into dynamic, interactive modules.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Each learning experience is composed of modular interactions:
          explorable diagrams, branching scenarios, variable sliders, and
          feedback loops. Learners control the pace, test hypotheses, and see
          the consequences of their choices in real time.
        </p>
      </div>

      {/* Tech stack */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-5">
          Tech Stack
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "Next.js", icon: Code },
            { label: "React", icon: Layout },
            { label: "Headless CMS", icon: Database },
            { label: "Interactive Modules", icon: Layers },
          ].map((tech, i) => (
            <div key={tech.label} className="flex items-center gap-2">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg px-4 py-3 flex items-center gap-2">
                <tech.icon className="w-4 h-4 text-yellow-400/60" />
                <p className="text-sm text-white">{tech.label}</p>
              </div>
              {i < 3 && (
                <ArrowRight className="w-4 h-4 text-yellow-400/30 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Design principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {[
          {
            icon: Compass,
            title: "Guided Discovery",
            description:
              "Learners explore concepts at their own pace, with the platform providing context and feedback as they go.",
          },
          {
            icon: Layers,
            title: "Modular Interactions",
            description:
              "Each learning experience is built from composable interaction patterns that can be reused and remixed.",
          },
          {
            icon: Database,
            title: "Content-Driven",
            description:
              "Educators define the structure through a CMS. The front-end handles the interactive presentation layer.",
          },
          {
            icon: Zap,
            title: "Immediate Feedback",
            description:
              "Learners see the results of their decisions instantly, reinforcing understanding through interaction.",
          },
        ].map((principle, i) => (
          <div
            key={principle.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-6 py-7 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
                <principle.icon className="w-4 h-4 text-yellow-400/60" />
              </div>
              <div>
                <p className="text-white mb-2">{principle.title}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 4: Current Status
 ═══════════════════════════════════════════════════ */

export function SherpaStatus() {
  return (
    <section aria-labelledby="sherpa-status-heading">
      <SectionHeader
        id="sherpa-status-heading"
        label="Current Status"
        heading="Building the Foundation"
      />

      <div className="max-w-2xl space-y-6 mb-14">
        <p className="text-neutral-300 leading-relaxed">
          I'm currently developing the front-end platform architecture, focusing
          on the component library, interaction patterns, and CMS integration.
          The goal is to establish a flexible system that can support a wide
          range of interactive learning experiences without requiring custom
          code for each new module.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          This is a solo project, which means I'm owning everything from system
          design to component development to content architecture. It's an
          opportunity to build something from first principles and solve
          problems I've encountered repeatedly in design systems and learning
          platforms.
        </p>
      </div>

      {/* Development focus areas */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-5">
          Current Focus
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 rounded-xl overflow-hidden">
          {[
            {
              step: "01",
              title: "Component Architecture",
              body: "Building the foundational UI components and interaction patterns that will power all learning modules.",
            },
            {
              step: "02",
              title: "CMS Integration",
              body: "Establishing the content structure and API layer that connects structured content to interactive components.",
            },
            {
              step: "03",
              title: "Module Prototypes",
              body: "Testing interaction patterns with real-world examples to validate the learning experience and technical approach.",
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
    </section>
  );
}
