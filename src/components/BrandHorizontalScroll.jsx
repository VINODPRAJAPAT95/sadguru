import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import brands from "../data/brands";

/* Tagline ko sentences me todta hai (har full stop ke baad nayi line) */
const splitSentences = (text = "") =>
  (text.match(/[^.!?]+[.!?]?/g) || [text]).map((s) => s.trim()).filter(Boolean);

/* Logo size (desktop): brand 02 aur 03 (index 1, 2) ke logo thode chhote, baaki bade.
   Size aur badhana ho to max-h / max-w values badha do. */
const logoSizeClass = (index) => {
  if (index === 0) {
    // Brand 01 (Mumma): sabse bada
    return "max-h-64 max-w-full sm:max-h-72 lg:max-h-96 xl:max-h-[28rem]";
  }
  return index === 1 || index === 2
    ? "max-h-40 max-w-[78%] sm:max-h-48 lg:max-h-60 xl:max-h-72"
    : "max-h-56 max-w-[90%] sm:max-h-64 lg:max-h-80 xl:max-h-96";
};

/* Logo size (mobile + tablet) */
const mobileLogoSizeClass = (index) => {
  if (index === 0) {
    // Brand 01 (Mumma): sabse bada
    return "max-h-60 max-w-full sm:max-h-72";
  }
  return index === 1 || index === 2
    ? "max-h-36 max-w-[78%] sm:max-h-44"
    : "max-h-52 max-w-[90%] sm:max-h-60";
};

function Tagline({ text, className = "" }) {
  return (
    <p className={className}>
      {splitSentences(text).map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

/* Chhote dots: kaun sa brand dikh raha hai */
function BrandDots({ index }) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {brands.map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all duration-500 ${
            i === index ? "w-8 bg-[#E2903F]" : "w-2 bg-[#E2903F]/25"
          }`}
        />
      ))}
    </div>
  );
}

/* Brand badge: "Brand 01 / 04" */
function BrandBadge({ number, index }) {
  return (
    <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#E2903F]/30 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-[#E2903F] shadow-sm backdrop-blur-sm sm:text-sm">
      <span className="h-2 w-2 rounded-full bg-[#E2903F]" />
      Brand {number ?? String(index + 1).padStart(2, "0")} / {String(brands.length).padStart(2, "0")}
    </span>
  );
}

/* Logo ke peeche modern glass card + dotted pattern + ghost number */
function LogoStage({ brand, index, children }) {
  const primary = brand.colors?.primary || "#E2903F";
  const ghost = brand.number ?? String(index + 1).padStart(2, "0");

  return (
    <div className="relative flex w-full max-w-lg items-center justify-center">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute h-80 w-80 rounded-full blur-3xl"
        style={{ background: `${primary}22` }}
      />

      {/* glass card */}
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 shadow-[0_30px_80px_-30px_rgba(226,144,63,0.45)] backdrop-blur-md">
        {/* dotted pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#E2903F55 1.4px, transparent 1.4px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(circle at center, transparent 30%, black 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, transparent 30%, black 100%)",
          }}
        />

        {/* ghost number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[10rem] font-black leading-none text-[#E2903F]/10 sm:text-[12rem]"
        >
          {ghost}
        </span>

        {/* rings */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border border-[#E2903F]/20" />
        <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full border border-[#E2903F]/15" />

        {children}
      </div>
    </div>
  );
}

function BrandPanel({ brand, index, progress }) {
  const total = brands.length;

  const start = index / total;
  const end = (index + 1) / total;
  const middle = (start + end) / 2;

  const scale = useTransform(
    progress,
    [start, middle, end],
    [0.95, 1, 0.95]
  );

  return (
    <motion.div
      style={{ scale }}
      className="relative h-full w-screen shrink-0 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto grid h-full max-w-[1400px] grid-cols-1 overflow-hidden rounded-3xl border border-[#E2903F]/10 bg-gradient-to-br from-[#FBF6ED] via-[#F7ECDA] to-[#F3E5CF] shadow-2xl lg:grid-cols-2">

        {/* TOP LEFT CIRCLE */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#E2903F]/10" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#E2903F]/10" />

        {/* BOTTOM RIGHT CIRCLE */}
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full border border-[#E2903F]/10" />

        {/* LEFT CONTENT */}
        <div className="relative z-10 order-2 flex flex-col justify-center px-6 py-10 sm:px-10 lg:order-1 lg:px-14 lg:py-12 xl:px-20">

          <BrandBadge number={brand.number} index={index} />

          {/* NAME */}
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-[#2A160C] sm:text-5xl lg:text-6xl xl:text-7xl">
            {brand.name}
          </h2>

          {/* accent line */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#E2903F] to-[#E2903F]/30" />
            <span className="h-[3px] w-3 rounded-full bg-[#E2903F]/40" />
          </div>

          {/* TAGLINE: har sentence nayi line me */}
          <Tagline
            text={brand.tagline}
            className="mt-6 max-w-xl space-y-1 text-base font-bold uppercase leading-snug tracking-[0.1em] text-[#E2903F] sm:text-lg lg:text-xl"
          />

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-base leading-8 text-[#4A3220] sm:text-lg lg:text-[1.15rem]">
            {brand.description}
          </p>

          {/* progress dots */}
          <div className="mt-8">
            <BrandDots index={index} />
          </div>
        </div>

        {/* RIGHT LOGO SECTION */}
        <div className="relative order-1 flex min-h-[280px] items-center justify-center px-6 py-10 sm:min-h-[340px] lg:order-2 lg:min-h-full lg:py-12">
          <LogoStage brand={brand} index={index}>
            {brand.logo ? (
              <motion.img
                src={brand.logo}
                alt={`${brand.name} logo`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative z-10 w-auto object-contain ${logoSizeClass(index)}`}
              />
            ) : (
              <h3 className="relative z-10 font-display text-4xl font-bold text-[#2A160C] sm:text-5xl">
                {brand.name}
              </h3>
            )}
          </LogoStage>
        </div>

      </div>
    </motion.div>
  );
}

export default function BrandHorizontalScroll() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const totalBrands = brands.length;

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const calculateDistance = () => {
      if (!trackRef.current) return;
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = totalWidth - viewportWidth;
      setScrollDistance(Math.max(distance, 0));
    };

    setTimeout(calculateDistance, 100);
    const observer = new ResizeObserver(calculateDistance);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", calculateDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, [isDesktop, totalBrands]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.35,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    [0, -scrollDistance]
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FBF6ED] to-[#F7ECDA]">

      {/* DESKTOP HORIZONTAL SCROLL */}
      <div
        ref={targetRef}
        className="relative hidden bg-gradient-to-b from-white via-[#FBF6ED] to-[#F7ECDA] lg:block"
        style={{
          height: `${Math.max((totalBrands - 0.5) * 100 + 50, 120)}vh`,
        }}
      >

        <div className="sticky top-0 z-50 flex h-screen items-center overflow-hidden bg-gradient-to-b from-white via-[#FBF6ED] to-[#F7ECDA]">

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-[85vh] w-max items-center gap-8 px-0"
          >

            {brands.map((brand, index) => (
              <BrandPanel
                key={brand.id}
                brand={brand}
                index={index}
                progress={smoothProgress}
              />
            ))}

          </motion.div>

        </div>

      </div>

      {/* MOBILE + TABLET */}
      <div className="block bg-gradient-to-b from-white via-[#FBF6ED] to-[#F7ECDA] lg:hidden">

        <div ref={containerRef} className="mx-auto w-full max-w-full space-y-6 px-4 py-8 sm:space-y-8 sm:px-6 sm:py-12">

          {brands.map((brand, index) => (

            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full overflow-hidden rounded-2xl border border-[#E2903F]/10 bg-gradient-to-br from-[#FBF6ED] via-[#F7ECDA] to-[#F3E5CF] shadow-xl sm:rounded-3xl"
            >

              {/* DECORATIVE CIRCLES */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#E2903F]/10" />
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#E2903F]/10" />

              {/* LOGO SECTION */}
              <div className="relative flex items-center justify-center px-6 pb-4 pt-10">
                <div className="w-full max-w-[280px] sm:max-w-xs">
                  <LogoStage brand={brand} index={index}>
                    {brand.logo ? (
                      <motion.img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`relative z-10 w-auto object-contain ${mobileLogoSizeClass(index)}`}
                      />
                    ) : (
                      <h3 className="relative z-10 font-display text-4xl font-bold text-[#2A160C] sm:text-5xl">
                        {brand.name}
                      </h3>
                    )}
                  </LogoStage>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="relative z-10 space-y-4 p-6 sm:p-8">

                <BrandBadge number={brand.number} index={index} />

                {/* NAME */}
                <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#2A160C] sm:text-4xl">
                  {brand.name}
                </h3>

                <span className="block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#E2903F] to-[#E2903F]/30" />

                {/* TAGLINE */}
                <Tagline
                  text={brand.tagline}
                  className="space-y-1 text-sm font-bold uppercase leading-snug tracking-[0.1em] text-[#E2903F] sm:text-base"
                />

                {/* DESCRIPTION */}
                <p className="text-base leading-7 text-[#4A3220] sm:text-lg sm:leading-8">
                  {brand.description}
                </p>

                <div className="pt-2">
                  <BrandDots index={index} />
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}