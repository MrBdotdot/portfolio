import { motion, AnimatePresence } from "motion/react";
import { Instagram, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import LogoSvg from "../../imports/Asset_1.svg";
import { useProjectModal } from "./ProjectModalContext";
import { caseStudies } from "./CaseStudies";

const portfolioItems = [
  { label: "Gap Inc.", studyId: 1 },
  { label: "Vistaprint", studyId: 2 },
  { label: "Ugly Pickle", studyId: 3 },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openProject, openResume, resumeOpen } = useProjectModal();

  const handleCopyEmail = () => {
    const email = "will@wbeestudio.com";
    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.prompt("Copy this email:", email);
    }
  };

  const handleScroll = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (!target || target === document) return;

    const currentScrollY = target.scrollTop;

    if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    // Use capture phase to detect scroll events from any scrollable container
    document.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => document.removeEventListener("scroll", handleScroll, { capture: true });
  }, [handleScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePortfolioClick = (studyId: number) => {
    const study = caseStudies.find((s) => s.id === studyId);
    if (study) openProject(study);
    setPortfolioOpen(false);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      {/* Centered nav pill with logo inside */}
      <div className="flex items-center justify-center">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-5 px-5 py-2 bg-black/60 backdrop-blur-md rounded-full border border-yellow-500/20"
        >
          {/* Bee logo inside the pill */}
          <a href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <img src={LogoSvg} alt="Logo" className="h-7 w-auto" />
            </motion.div>
          </a>

          {/* Divider after logo */}
          <div className="w-px h-4 bg-yellow-500/20" />

          {/* Portfolio dropdown */}
          <div ref={dropdownRef} className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setPortfolioOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm text-neutral-300 hover:text-yellow-400 transition-colors"
            >
              Portfolio
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  portfolioOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {portfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 min-w-[160px] bg-black/90 backdrop-blur-md border border-yellow-500/20 rounded-xl overflow-hidden"
                >
                  {portfolioItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handlePortfolioClick(item.studyId)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-neutral-300 hover:text-yellow-400 hover:bg-yellow-400/5 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={openResume}
            className={`text-sm transition-colors cursor-pointer ${
              resumeOpen
                ? "bg-yellow-400/15 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/30"
                : "text-neutral-300 hover:text-yellow-400"
            }`}
          >
            Resume
          </motion.button>

          {/* Divider */}
          <div className="w-px h-4 bg-yellow-500/20" />

          {/* Social Icons */}
          <motion.a
            href="https://www.instagram.com/willyumbee/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-neutral-400 hover:text-yellow-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </motion.a>
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.1, y: -2 }}
            className="relative text-neutral-400 hover:text-yellow-400 transition-colors cursor-pointer"
            aria-label="Copy email"
          >
            <Mail className="w-4 h-4" />
            <AnimatePresence>
              {emailCopied && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-yellow-400 text-black px-2.5 py-1 rounded-md whitespace-nowrap"
                >
                  Email copied to clipboard
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.nav>
      </div>
    </motion.header>
  );
}