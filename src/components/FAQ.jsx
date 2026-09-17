import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

function FaqItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        isOpen
          ? "border-primary/30 bg-white shadow-xl shadow-primary/10"
          : "border-charcoal-100 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      }`}
    >
      {/* Active Left Border */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "100%" : "0%",
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute left-0 top-0 w-1 rounded-l-full bg-primary"
      />

      <button
        onClick={onClick}
        className="relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">

          {/* Number */}
          <span
            className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 sm:flex ${
              isOpen
                ? "bg-primary text-white"
                : "bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span
            className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
              isOpen ? "text-primary" : "text-charcoal group-hover:text-primary"
            }`}
          >
            {item.question}
          </span>
        </div>

        {/* Plus Icon */}
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#EF7F1A" : "#FFF4EB",
            color: isOpen ? "#FFFFFF" : "#EF7F1A",
          }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        >
          <Plus size={19} strokeWidth={2.2} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.25 },
            }}
          >
            <div className="px-6 pb-6 pl-6 sm:px-7 sm:pb-7 sm:pl-[86px]">
              {/* Divider */}
              <div className="mb-5 h-px bg-charcoal-100" />

              <p className="max-w-2xl text-sm leading-relaxed text-charcoal-400 sm:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -inset-10 -z-10 opacity-40">
        <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <FaqItem
            key={item.question}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onClick={() =>
              setOpenIndex(openIndex === i ? -1 : i)
            }
          />
        ))}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center justify-center gap-2 text-sm text-charcoal-400"
      >
        <Sparkles size={15} className="text-primary" />
        <span>Still have questions? We're here to help.</span>
      </motion.div>
    </div>
  );
}