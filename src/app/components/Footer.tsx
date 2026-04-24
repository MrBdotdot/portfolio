import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "will@wbeestudio.com";
    // Fallback for environments where Clipboard API is blocked
    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email:", email);
    }
  };

  return (
    <footer className="relative bg-black border-t border-yellow-500/10 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-400 text-lg mb-4">
          Thanks for stopping by! Like what you see? Send me a message!
        </p>

        <div className="relative inline-block">
          <button
            onClick={handleCopyEmail}
            className="relative text-yellow-400 hover:text-yellow-300 transition-colors text-lg cursor-pointer group"
          >
            will@wbeestudio.com

            {/* Tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-yellow-400 text-black px-2.5 py-1 rounded-md whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </footer>
  );
}