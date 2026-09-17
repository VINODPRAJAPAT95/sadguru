import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

const DARK = "#2A160C";
const CREAM = "#F7ECDA";
const ORANGE = "#E2903F";

export default function GetInTouchBar({
  title = "Get in Touch with Us Today",
  to = "/contact",
  label = "Contact Us",
}) {
  return (
    <section className="mb-10 w-full px-3 sm:mb-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-start justify-between gap-6 rounded-3xl px-8 py-10 sm:flex-row sm:items-center sm:px-12"
        style={{ backgroundColor: DARK }}
      >
        <h3
          className="max-w-lg text-balance text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl"
          style={{ color: CREAM }}
        >
          {title}
        </h3>

        <Link to={to} className="group inline-flex shrink-0">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300"
            style={{ backgroundColor: ORANGE, color: DARK }}
          >
            {label}
            <ChevronsRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}