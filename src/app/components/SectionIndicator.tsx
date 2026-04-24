import { motion, AnimatePresence } from "motion/react";

interface SectionIndicatorProps {
  currentSection: number;
  sections: string[];
  onSectionClick: (index: number) => void;
}

export function SectionIndicator({ currentSection, sections, onSectionClick }: SectionIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
      {sections.map((sectionName, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className="group relative flex items-center justify-end gap-3"
          aria-label={`Go to ${sectionName}`}
        >
          <AnimatePresence>
            {currentSection === index && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="text-sm uppercase tracking-wider text-yellow-400 whitespace-nowrap"
              >
                {sectionName}
              </motion.span>
            )}
          </AnimatePresence>
          
          <motion.div
            className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-yellow-400/50 transition-colors"
            animate={{
              scale: currentSection === index ? 1.5 : 1,
              backgroundColor: currentSection === index ? "rgb(250, 204, 21)" : "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      ))}
    </div>
  );
}
