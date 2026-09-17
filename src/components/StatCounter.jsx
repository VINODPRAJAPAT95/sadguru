import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function StatCounter({ value, suffix = "", label, dark = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`font-display text-4xl font-semibold sm:text-5xl ${dark ? "text-white" : "text-charcoal"}`}>
        {display}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className={`mt-2 text-sm font-medium ${dark ? "text-white/60" : "text-charcoal-400"}`}>{label}</p>
    </div>
  );
}
