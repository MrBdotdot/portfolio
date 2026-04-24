import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function ProjectCard({ title, category, description, imageUrl, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
            className="text-xs uppercase tracking-wider text-yellow-400"
          >
            {category}
          </motion.span>
          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-neutral-400" />
          </motion.div>
        </div>
        <h3 className="text-xl mb-2 text-white">{title}</h3>
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="text-sm text-neutral-400 overflow-hidden"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
