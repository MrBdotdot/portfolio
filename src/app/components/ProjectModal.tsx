import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
import { useProjectModal } from "./ProjectModalContext";
import { useEffect } from "react";
import { GapIncChallenge, GapIncLoyalty, GapIncLibrary } from "./GapIncContent";
import {
  VistaprintStartingPoint,
  VistaprintFoundation,
  VistaprintGuidelines,
  VistaprintConsolidation,
  VistaprintAdoption,
  VistaprintImpact,
} from "./VistaprintContent";
import {
  UglyPickleVision,
  UglyPickleClarity,
  UglyPickleSystem,
  UglyPickleEcosystem,
  UglyPickleResearch,
  UglyPickleShipped,
} from "./UglyPickleContent";
import {
  SherpaVision,
  SherpaProblem,
  SherpaApproach,
  SherpaStatus,
} from "./SherpaContent";

export function ProjectModal() {
  const { activeProject, closeProject } = useProjectModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeProject]);

  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          onClick={closeProject}
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
              onClick={closeProject}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 text-neutral-400 hover:text-white hover:border-yellow-400/40 transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

              {/* Year badge */}
              <div className="absolute top-5 left-5 px-3 py-1 bg-black/70 backdrop-blur-sm border border-neutral-700 rounded-full text-xs text-neutral-300">
                {activeProject.year}
              </div>
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 pb-20 -mt-16 relative z-10">
              <span className="text-xs uppercase tracking-[0.15em] text-yellow-400/70 mb-2 block">
                {activeProject.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                {activeProject.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-yellow-400/20 rounded-full text-yellow-400/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rich content sections */}
              <div className="space-y-14">
                {/* Overview */}
                {activeProject.overview ? (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-3">
                      Overview
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {activeProject.overview}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-3">
                      Overview
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                )}

                {/* Role Progression + Skill Tags */}
                {activeProject.roleProgression && (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-4">
                      Role & Skills
                    </h3>
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      {activeProject.roleProgression.map((role, i) => (
                        <span key={role} className="flex items-center gap-3">
                          <span className="text-white">{role}</span>
                          {i < activeProject.roleProgression!.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-yellow-400/60" />
                          )}
                        </span>
                      ))}
                    </div>
                    {activeProject.skillTags && (
                      <div className="flex flex-wrap gap-2">
                        {activeProject.skillTags.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Team Info */}
                {activeProject.teamInfo && (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-4">
                      Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {activeProject.teamInfo.map((info) => (
                        <div
                          key={info.label}
                          className="bg-neutral-900/60 border border-neutral-800 rounded-xl px-5 py-4"
                        >
                          <span className="text-xs uppercase tracking-[0.1em] text-neutral-500 block mb-1">
                            {info.label}
                          </span>
                          <span className="text-neutral-300 text-sm">
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary Impact */}
                {activeProject.primaryImpact && (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-3">
                      Primary Impact
                    </h3>
                    <p className="text-neutral-300 leading-relaxed border-l-2 border-yellow-400/30 pl-5">
                      {activeProject.primaryImpact}
                    </p>
                  </div>
                )}

                {/* Impact Bullets */}
                {activeProject.impactBullets &&
                  activeProject.impactBullets.length > 0 && (
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.15em] text-neutral-500 mb-3">
                        Key Contributions
                      </h3>
                      <ul className="space-y-3">
                        {activeProject.impactBullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-neutral-400"
                          >
                            <ArrowUpRight className="w-4 h-4 text-yellow-400/60 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* === Project-specific content sections === */}
                {activeProject.id === 1 && (
                  <>
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <GapIncChallenge />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <GapIncLoyalty />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <GapIncLibrary />
                  </>
                )}

                {activeProject.id === 2 && (
                  <>
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintStartingPoint />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintFoundation />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintGuidelines />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintConsolidation />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintAdoption />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <VistaprintImpact />
                  </>
                )}

                {activeProject.id === 3 && (
                  <>
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <UglyPickleVision />
                    <UglyPickleClarity />
                    <UglyPickleSystem />
                    <UglyPickleEcosystem />
                    <UglyPickleResearch />
                    <UglyPickleShipped />
                  </>
                )}

                {activeProject.id === 4 && (
                  <>
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <SherpaVision />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <SherpaProblem />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <SherpaApproach />
                    <div className="mt-6 pt-14 border-t border-neutral-800" />
                    <SherpaStatus />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}