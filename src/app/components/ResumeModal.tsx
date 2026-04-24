import { motion, AnimatePresence } from "motion/react";
import { X, Download, ArrowUpRight } from "lucide-react";
import { useProjectModal } from "./ProjectModalContext";
import { useEffect } from "react";

const experiences = [
  {
    company: "Bee Studio",
    role: "Designer, Developer",
    period: "2023-Current",
    highlights: [
      "Principal designer for the entire product ecosystem, owning end-to-end design of physical game components, packaging, companion app UI, and brand system across all digital touchpoints.",
      "Sole mobile developer for both platforms, building and maintaining the companion apps for iOS (Swift) and Android (Flutter/Dart).",
      "Concepted, designed, and animated marketing creative: trailers, gameplay explainers, and social ads to support campaigns across Meta ads and Tiktok.",
      "Created 3D and motion assets in Blender and After Effects, producing polished product renders and animations.",
    ],
  },
  {
    company: "Vistaprint (Vista)",
    role: "UX/UI Designer, DS Manager",
    period: "2021-2023",
    highlights: [
      "Led the design and evolution of a system with a unified visual language, clear guidelines, a UX-led perspective, and accessibility at its core.",
      "Designed and tested components, patterns, templates, and prototypes that enabled designers and engineers to work more efficiently.",
      "Built and maintained a well-organized and comprehensive Figma UI kit.",
      "Participated in user research and usability testing.",
    ],
  },
  {
    company: "Gap",
    role: "UX/UI Designer, Design Systems",
    period: "2019-2021",
    highlights: [
      "Directed development and enhancement of 35 UI components and 6 non-UI components.",
      "Grew Sketch Library more than 400% (100 symbols to 450) to support 7 distinct in-store applications.",
      "Catalogued 58 distinct components or templates, including design, anatomy, and usage guidelines.",
      "Established contribution process to engage product designers and foster equity in the system.",
    ],
  },
  {
    company: "Metromile",
    role: "Product Designer",
    period: "2017-2019",
    highlights: [
      "Designed and championed the Help Center and Metromile Administrative Tools features.",
      "Mocked up wireframes, animations and hi-fi prototypes using Sketch, Invision, After Effects.",
      "Worked directly with product team and engineering to usability test and launch features for mobile and web.",
    ],
  },
  {
    company: "Tradecraft",
    role: "Product Designer",
    period: "2016-2017",
    highlights: [
      "Consulted clients to develop project scopes, timelines, and expectations.",
      "Conducted user and usability testing for product optimization.",
      "Designed wireframes into low-fi mockup into hi-fi prototypes.",
    ],
  },
  {
    company: "Opter Life",
    role: "UX+UI Designer",
    period: "October 2016-March 2017",
    highlights: [
      "Lead whiteboard sessions with stakeholders.",
      "Performed usability tests for product validation for Opter App.",
      "Designed wireframes, hi-fi screens and prototypes.",
    ],
  },
  {
    company: "PublicBNB",
    role: "Product Designer",
    period: "Sept 2016-Jan 2017",
    highlights: [
      "Collaborated on a team of 3 to conduct user research & in-person interviews.",
      "Lead wireframe UX design and UI visual direction.",
      "Designed information architecture, navigation, features, and branding.",
    ],
  },
  {
    company: "lucy Activewear",
    role: "UX + Visual Designer",
    period: "2014-2016",
    highlights: [
      "Developed wireframes and mocked up rapid prototypes for lucy.com and email concepts.",
      "Conceptualized and designed hundreds of emails and digital assets featured in Twitter, Facebook, Amazon, and POPSUGAR.",
      "Created videos, animations and presentation assets using Adobe Premiere and Keynote.",
    ],
  },
  {
    company: "Intel LANFEST",
    role: "Design Committee Chair",
    period: "2012–2015",
    highlights: [
      "Managed a design team of 4 volunteers to work on brand and marketing projects for LANFEST events.",
      "Collaborated on event assets with sponsorship, web development and other cross functional committees.",
    ],
  },
  {
    company: "Pro Unlimited",
    role: "UI Designer",
    period: "2013-2014",
    highlights: [
      "Created marketing portal product for Symantec, Nike, Sanofi, and EA Games.",
      "Produced screencasts for CW Analytics, YourSource, VMS Overview.",
      "Mocked prototypes in Omnigraffle for mobile apps.",
    ],
  },
  {
    company: "Snapfish (Hewlett Packard)",
    role: "Graphic Designer",
    period: "2012–2013",
    highlights: [
      "Designed photo compositions with Marvel and Disney assets under brand guidelines.",
      "Created vector backgrounds in Illustrator and Photoshop for photo templates.",
    ],
  },
  {
    company: "Response Capture",
    role: "Graphic Designer",
    period: "2011-2012",
    highlights: [
      "Developed web identity and optimized web experience for www.ResponseCapture.com.",
      "Wireframed and designed web UI for Lexchange mobile app.",
    ],
  },
  {
    company: "OSU Department of Forestry",
    role: "Web Designer",
    period: "2008–2010",
    highlights: [
      "Created web templates using Dreamweaver in CSS & HTML.",
      "Managed digital content on Drupal.",
      "Participated in user research and usability testing.",
    ],
  },
];

const skills = {
  mastery: "Figma, Sketch, After Effects, Webflow, Photoshop, Illustrator, Indesign, Omnigraffle, DaVinci Resolve",
  extensive: "Blender, Visual Studio, Xcode, CAD, MS Office programs, Dreamweaver",
  experienced: "CSS, HTML, Flash, Java, Whiteboarding",
};

export function ResumeModal() {
  const { resumeOpen, closeResume } = useProjectModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResume();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeResume]);

  return (
    <AnimatePresence>
      {resumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          onClick={closeResume}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 w-full max-w-4xl mx-4 my-16 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeResume}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 text-neutral-400 hover:text-white hover:border-yellow-400/40 transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header area with gradient */}
            <div className="relative px-8 md:px-12 pt-12 pb-8">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-yellow-400" />
                    <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">Experience</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                    Over a Decade of
                    <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent pb-2">
                      Design Excellence
                    </span>
                  </h2>
                  <p className="text-neutral-400 max-w-2xl">
                    Specializing in Design Systems, UX Strategy, and A11y Compliance
                  </p>
                </div>
                <motion.a
                  href="https://gofile.me/5ZHwK/WTbJM93Zd"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full hover:from-yellow-300 hover:to-amber-400 transition-colors font-bold text-sm shadow-lg shadow-yellow-400/20 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 pb-12">
              {/* Experience Timeline */}
              <div className="space-y-10 mb-16">
                {experiences.map((exp) => (
                  <div key={exp.company} className="relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent" />

                    <div className="pl-8 border-l-2 border-transparent hover:border-yellow-400/30 transition-colors duration-300">
                      <div className="flex flex-wrap items-baseline gap-4 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {exp.company}
                        </h3>
                        <span className="text-yellow-400 font-medium text-sm">{exp.role}</span>
                        <span className="text-neutral-500 text-xs">{exp.period}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                            <ArrowUpRight className="w-3.5 h-3.5 text-yellow-400/60 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-yellow-400">Skills & Tools</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 hover:border-yellow-400/30 transition-colors">
                    <h4 className="text-yellow-400 font-bold mb-2 uppercase text-xs tracking-wider">Mastery</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{skills.mastery}</p>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 hover:border-yellow-400/30 transition-colors">
                    <h4 className="text-yellow-400 font-bold mb-2 uppercase text-xs tracking-wider">Extensive</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{skills.extensive}</p>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 hover:border-yellow-400/30 transition-colors">
                    <h4 className="text-yellow-400 font-bold mb-2 uppercase text-xs tracking-wider">Experienced</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{skills.experienced}</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Education</h3>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-yellow-400/30 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-1">Oregon State University</h4>
                  <p className="text-yellow-400 mb-1">BFA Liberal Arts - Graphic Design Emphasis</p>
                  <p className="text-neutral-500 text-sm">2007-2011</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}