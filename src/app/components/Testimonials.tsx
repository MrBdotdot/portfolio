import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative"
        >
          {/* Large quotation mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
            className="absolute -top-8 -left-4 text-[120px] leading-none text-yellow-400 font-serif"
          >
            "
          </motion.span>

          <div className="relative z-10">
            {/* Quote */}
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-neutral-200">
              {testimonial.quote}
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-transparent" />
              <div>
                <p className="text-sm font-medium text-white">{testimonial.author}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl"
          />
        </motion.div>
      ))}
    </div>
  );
}
