import { motion } from "motion/react";

interface ColorPalette {
  name: string;
  colors: string[];
}

interface DesignSystemGridProps {
  palettes: ColorPalette[];
}

export function DesignSystemGrid({ palettes }: DesignSystemGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {palettes.map((palette, paletteIndex) => (
        <motion.div
          key={palette.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: paletteIndex * 0.1 }}
          className="space-y-3"
        >
          <h4 className="text-sm uppercase tracking-wider text-neutral-400">{palette.name}</h4>
          <div className="flex gap-2">
            {palette.colors.map((color, colorIndex) => (
              <motion.div
                key={colorIndex}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex-1 aspect-square rounded-lg shadow-lg cursor-pointer border border-yellow-500/10"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface TypographyScale {
  name: string;
  size: string;
  className: string;
}

interface TypographyShowcaseProps {
  scales: TypographyScale[];
}

export function TypographyShowcase({ scales }: TypographyShowcaseProps) {
  return (
    <div className="space-y-8">
      {scales.map((scale, index) => (
        <motion.div
          key={scale.name}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-l-2 border-yellow-500/30 pl-6 py-2"
        >
          <div className="flex items-baseline gap-6">
            <span className="text-xs text-neutral-500 w-20 uppercase tracking-wider">{scale.name}</span>
            <span className="text-xs text-neutral-600 w-16">{scale.size}</span>
            <p className={scale.className}>The quick brown fox</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
