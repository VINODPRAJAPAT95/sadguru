import { motion } from "framer-motion";

export default function ValueCard({ icon: Icon, title, desc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-charcoal-100 bg-white p-7 transition-colors duration-300 hover:border-primary-200"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{desc}</p>
    </motion.div>
  );
}
