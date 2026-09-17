import { motion } from "framer-motion";

export default function SectionTitle({
  label,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-3 rounded-full px-4 py-1.5 text-sm font-semibold ${
            light ? "bg-white/10 text-primary-200" : "bg-primary-50 text-primary-600"
          }`}
        >
          {label}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-semibold text-balance ${
            light ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-charcoal-400"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
