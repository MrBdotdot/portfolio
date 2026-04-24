import { motion } from "motion/react";
import { Download, Briefcase, GraduationCap, Code } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      company: "Amazon",
      role: "Product Designer",
      period: "2026-Current",
      highlights: [
        "Enhancing the Bookmark Design Language documentation site with improved visual samples, guidelines, and overall documentation quality.",
      ],
    },
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
        "Built SWAN: unified visual language, clear rules, UX-first, accessibility throughout.",
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
        "Designed and prototyped mobile and web features in Sketch, InVision, and After Effects.",
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
      company: "lucy Activewear",
      role: "UX + Visual Designer",
      period: "2014-2016",
      highlights: [
        "Developed wireframes and mocked up rapid prototypes for lucy.com and email concepts.",
        "Conceptualized and designed hundreds of emails and digital assets featured in Twitter, Facebook, Amazon, and POPSUGAR.",
        "Created videos, animations and presentation assets using Adobe Premiere and Keynote.",
      ],
    },
  ];

  const skills = {
    mastery: "Figma, Sketch, After Effects, Webflow, Photoshop, Illustrator, Indesign, Omnigraffle, DaVinci Resolve",
    extensive: "Blender, Visual Studio, Xcode, CAD, MS Office programs, Dreamweaver",
    experienced: "CSS, HTML, Flash, Java, Whiteboarding",
  };

  return (
    <section id="resume" className="section snap-start min-h-screen bg-black text-white relative overflow-hidden py-24 px-6">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-yellow-400" />
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Over a Decade of
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Design Excellence
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl">
            Specializing in Design Systems, UX Strategy, and A11y Compliance
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent" />
              
              <div className="pl-8 border-l-2 border-transparent hover:border-yellow-400/30 transition-colors duration-300">
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-yellow-400 font-medium">{exp.role}</span>
                  <span className="text-neutral-500 text-sm">{exp.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-neutral-300">
                      <span className="text-yellow-400 mt-1.5 shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <Code className="w-6 h-6 text-yellow-400" />
            <h3 className="text-3xl font-bold">Skills & Tools</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-yellow-400/30 transition-colors">
              <h4 className="text-yellow-400 font-bold mb-3 uppercase text-sm tracking-wider">Mastery</h4>
              <p className="text-neutral-300 text-sm leading-relaxed">{skills.mastery}</p>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-yellow-400/30 transition-colors">
              <h4 className="text-yellow-400 font-bold mb-3 uppercase text-sm tracking-wider">Extensive</h4>
              <p className="text-neutral-300 text-sm leading-relaxed">{skills.extensive}</p>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-yellow-400/30 transition-colors">
              <h4 className="text-yellow-400 font-bold mb-3 uppercase text-sm tracking-wider">Experienced</h4>
              <p className="text-neutral-300 text-sm leading-relaxed">{skills.experienced}</p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-6 h-6 text-yellow-400" />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:border-yellow-400/30 transition-colors">
            <h4 className="text-2xl font-bold text-white mb-2">Oregon State University</h4>
            <p className="text-yellow-400 mb-2">BFA Liberal Arts - Graphic Design Emphasis</p>
            <p className="text-neutral-500">2007-2011</p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://gofile.me/5ZHwK/WTbJM93Zd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full hover:from-yellow-300 hover:to-amber-400 transition-colors font-bold text-lg shadow-lg shadow-yellow-400/20"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}