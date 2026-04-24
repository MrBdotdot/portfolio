import { ArrowUpRight } from "lucide-react";
import { useProjectModal, type ProjectData } from "./ProjectModalContext";
import { ScrollLoopImageHorizontal } from "./ScrollLoopImageHorizontal";
import uglyPickleImg from "figma:asset/d6a65d188d942a944a4695c8dc33a2d00bca918b.png";
import visageSwanImg from "figma:asset/3c5327293301d0fe1c77702df45a12aeded5250f.png";
import swanAnnouncementImg from "figma:asset/f45c1cce1af889b90f09f3d4dd3f46b066c88df8.png";
import gapIncImg from "figma:asset/4bb80abe6d41a8ad762fe153d73d7a6cc8e19ed8.png";
import sherpaImg from "figma:asset/d4feb7c97e069988e00182b9612e1bf326c811b3.png";

export const caseStudies: ProjectData[] = [
  {
    id: 1,
    title: "From Mobile to Multi-Brand Systems",
    subtitle: "Gap Inc. / BRONGA Stitch Design System",
    description:
      "Moved from mobile UX into design systems leadership for the BRONGA Stitch design system at Gap Inc. Built a unified component architecture that scaled across multiple brands and platforms.",
    imageUrl: gapIncImg,
    scrollLoopHorizontal: true,
    tags: ["Design Systems", "Multi-Brand", "Mobile", "Enterprise"],
    year: "2018–2021",
    overview:
      "Four brands. Eight platforms. Zero consistency. Gap Inc. was pushing hard on contactless and mobile growth, but each team was solving the same problems differently. I built Stitch to bring order to chaos: a design system that unified experiences across Gap, Old Navy, Banana Republic, and Athleta while preserving what made each brand distinct.",
    roleProgression: ["UX Designer", "Design Systems Manager"],
    skillTags: [
      "Product Design",
      "iOS / Android Design",
      "Accessibility",
      "Hardware Prototyping",
      "User Research",
      "React Native",
      "After Effects Animations · BodyMovin",
    ],
    teamInfo: [
      { label: "Team", value: "12 designers, 16 engineers, partners" },
      { label: "Surface Area", value: "Mobile, web, in-store, internal" },
      { label: "Timeframe", value: "2018–2021" },
    ],
    primaryImpact:
      "Built and managed 5 libraries across 8 brands. Tokenized core components, motion, and typography across four brands. This foundation enabled consistency while preserving each brand's personality.",
    impactBullets: [
      "Shipped seasonal and holiday animation patterns for mobile apps.",
      "Tokenized core components, motion, and taxonomy across four brands.",
      "Connected loyalty touchpoints across in-store and digital experiences.",
      "Built and maintained a shared Sketch and Figma library to align product teams.",
      "Ran a monthly pattern shareout and a bi-weekly newsletter to scale adoption and system thinking.",
    ],
    details: [
      "Directed development and enhancement of 35 UI components and 6 non-UI components",
      "Grew Sketch Library more than 400% (100 symbols to 450) to support 7 distinct in-store applications",
      "Catalogued 58 distinct components or templates, including design, anatomy, and usage guidelines",
      "Established contribution process to engage product designers and foster equity in the system",
    ],
  },
  {
    id: 2,
    title: "Visage to SWAN",
    subtitle: "Vistaprint / Design System Evolution",
    description:
      "First design systems hire. I rebuilt SWAN's foundation. Structure, clarity, and adoption workflows that made it easier for teams to build with the system instead of around it.",
    imageUrl: swanAnnouncementImg,
    scrollLoop: false,
    tags: ["Design Systems", "Component Libraries", "Documentation", "Adoption"],
    year: "2021–2023",
    overview:
      "Vistaprint helps small businesses design and order marketing materials at scale, which means the UI has to stay consistent across a large ecosystem of tools and product surfaces. I joined as the first design systems hire to reset the foundation of SWAN and make it usable in day-to-day product work. My focus was component quality, clear rules, and adoption workflows that made it easier for teams to build with the system instead of around it.",
    roleProgression: ["Product Designer", "Design Systems Manager"],
    skillTags: [
      "Design Systems",
      "Component Architecture",
      "Documentation",
      "Figma Libraries",
      "Token Systems",
      "Adoption Strategy",
      "Cross-Functional Collaboration",
    ],
    teamInfo: [
      { label: "Team", value: "4 DS designers, 1 OPs Manager, 1 engineer" },
      { label: "Surface Area", value: "Mobile, web, internal, 99 Designs" },
      { label: "Timeframe", value: "2021–2023" },
    ],
    primaryImpact:
      "First DS Hire: led the migration from Visage to SWAN, establishing the structural and operational foundation that enabled the system to scale across Vistaprint's product ecosystem.",
    impactBullets: [
      "Established the structure for Vistaprint's Figma libraries, including component hierarchy, tokens, variants, and naming conventions.",
      "Consolidated legacy and duplicate components into one source of truth that teams could adopt with confidence.",
      "Built documentation standards and templates so usage, states, and do's and don'ts were clear from day one.",
      "Set up an intake funnel and prioritization workflow with PM to keep the system focused on the highest-impact needs.",
      "Created a communication rhythm across UX and engineering using newsletters, patch notes, and demos to drive adoption and reduce surprises.",
    ],
  },
  {
    id: 3,
    title: "It feels like pickleball.",
    subtitle: "Ugly Pickle / Full-Stack Product",
    description:
      "A tabletop game that captures the pace and pressure of pickleball in 15 minutes. Took it from concept to live apps, physical production, and real players. Solo.",
    imageUrl: uglyPickleImg,
    tags: ["Product Design", "iOS / Android", "3D Modeling", "Hardware", "Web", "Research"],
    year: "2023–Present",
    overview:
      "Ugly Pickle is a high-intensity tabletop game that captures the pace and pressure of pickleball in under 15 minutes. I took it from concept to live apps, physical production, and real players (solo). Every decision, from card layout to app architecture to PCB prototyping, was driven by one question: does this make the game feel faster, clearer, and more fun?",
    roleProgression: ["Creator", "Designer", "Developer"],
    skillTags: [
      "Product Design",
      "iOS / Android Development",
      "3D Modeling",
      "Hardware Prototyping",
      "Web Design",
      "User Research",
      "Animation",
      "Arduino",
    ],
    teamInfo: [
      { label: "Team", value: "Solo (all disciplines)" },
      { label: "Surface Area", value: "Physical game, iOS, Android, web" },
      { label: "Timeframe", value: "2023–Present" },
    ],
    primaryImpact:
      "Designed, developed, and shipped a connected tabletop game with live companion apps, a marketing site, structured playtesting research, and a custom hardware prototype as a solo creator across every discipline.",
    impactBullets: [
      "Product vision, gameplay goals, and player experience design",
      "Rules, onboarding flow, and clarity-first instructional structure",
      "Component design, layout systems, and production-ready specs",
      "Companion apps for iOS and Android currently live on both app stores",
      "Web design for discovery and conversion",
      "Structured playtesting research to iterate on observed confusion",
      "3D modeling and animation in Blender for prototypes and marketing assets",
      "Meta ad creative and iteration for paid acquisition",
      "Coordinated custom ATmega328P PCB prototype with Arduino code and integration planning",
    ],
  },
  {
    id: 4,
    title: "Making Complex Ideas Accessible",
    subtitle: "Sherpa / Interactive Learning Platform",
    description:
      "Hard ideas are easier to learn when you can play with them. Sherpa lets you do that. Built from the ground up using Next.js and React, with a headless CMS powering the content architecture.",
    imageUrl: sherpaImg,
    scrollLoop: false,
    tags: ["Product Design", "Next.js", "React", "CMS", "Interactive Learning"],
    year: "2025–Present",
    overview:
      "Sherpa makes hard ideas easier to learn by letting you play with them. Instead of static documentation or linear videos, learners engage with content that responds to their choices and adapts to their understanding. I'm building this from the ground up using Next.js and React, with a headless CMS powering the content architecture.",
    roleProgression: ["Creator", "Designer", "Developer"],
    skillTags: [
      "Product Design",
      "Next.js",
      "React",
      "CMS Architecture",
      "Interaction Design",
      "Content Strategy",
      "Front-End Development",
    ],
    teamInfo: [
      { label: "Team", value: "Solo (all disciplines)" },
      { label: "Surface Area", value: "Web platform, CMS integration" },
      { label: "Timeframe", value: "2025–Present" },
    ],
    primaryImpact:
      "Building an interactive learning platform from first principles, solving problems I've encountered repeatedly in design systems and learning platforms. Currently in development.",
    impactBullets: [
      "Platform architecture and component library development",
      "CMS integration and content structure design",
      "Interactive module prototypes for real-world validation",
      "Modular interaction patterns for composable experiences",
      "Guided discovery workflows with immediate feedback loops",
    ],
  },
];

export function CaseStudies() {
  const { openProject } = useProjectModal();

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-yellow-400 mb-4 block">
          Selected Work
        </span>
        <h2 className="text-4xl md:text-5xl mb-4">Case Studies</h2>
        <p className="text-lg text-neutral-500 max-w-xl">
          Real problems I've worked on, and how I solved them.
        </p>
      </div>

      <div className="space-y-24">
        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          const isSherpa = study.id === 4;
          return (
            <div
              key={study.id}
              className={isSherpa ? "" : "group cursor-pointer"}
              onClick={() => !isSherpa && openProject(study)}
            >
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-3/5 relative overflow-visible">
                  {study.scrollLoopHorizontal ? (
                    <ScrollLoopImageHorizontal
                      src={study.imageUrl}
                      alt={study.title}
                    />
                  ) : (
                    <div className={`aspect-[16/10] overflow-hidden rounded-lg border border-neutral-800 ${!isSherpa && "group-hover:border-yellow-400/30"} transition-colors duration-500`}>
                      <img
                        src={study.imageUrl}
                        alt={study.title}
                        className={`w-full h-full object-cover ${!isSherpa && "transition-transform duration-700 group-hover:scale-105"}`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${!isSherpa && "opacity-0 group-hover:opacity-100"} transition-opacity duration-500`} />
                    </div>
                  )}

                  {/* Year badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-sm border border-neutral-700 rounded-full text-xs text-neutral-300">
                    {study.year}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.15em] text-yellow-400/70 mb-2">
                    {study.subtitle}
                  </span>
                  <h3 className={`text-2xl md:text-3xl mb-4 ${!isSherpa && "group-hover:text-yellow-400"} transition-colors duration-300`}>
                    {study.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs border border-neutral-700 rounded-full text-neutral-400 ${!isSherpa && "group-hover:border-yellow-400/20 group-hover:text-yellow-400/70"} transition-colors duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {isSherpa ? (
                    <div className="inline-flex items-center gap-2 bg-neutral-900/60 border border-yellow-400/20 rounded-lg px-4 py-3 w-fit">
                      <span className="text-sm text-yellow-400/70">Coming Soon</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}