import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import brands from "../data/brands";

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
      <div className="relative mx-auto grid h-full max-w-[1400px] grid-cols-1 overflow-visible rounded-3xl border border-[#E2903F]/10 bg-gradient-to-br from-[#FBF6ED] via-[#F7ECDA] to-[#F3E5CF] lg:grid-cols-2 shadow-2xl">

        {/* TOP LEFT CIRCLE */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#E2903F]/10" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#E2903F]/8" />

        {/* BOTTOM RIGHT CIRCLE */}
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full border border-[#E2903F]/8" />

        {/* DECORATIVE GOLD LINE */}
        <div className="pointer-events-none absolute left-[25%] top-[15%] h-[3px] w-20 bg-gradient-to-r from-[#E2903F] to-[#E2903F]/30" />

        {/* LEFT CONTENT */}
        <div className="relative z-10 order-2 flex flex-col justify-center bg-transparent px-6 py-12 sm:px-10 sm:py-14 lg:order-1 lg:px-14 lg:py-16 xl:px-20">

          {/* NUMBER */}
          <div className="flex items-start">
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-[#E2903F] tracking-tighter">
              {brand.number}
            </span>
          </div>

          {/* TAGLINE */}
          <p className="mt-6 sm:mt-8 max-w-lg text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E2903F]">
            {brand.tagline}
          </p>

          {/* BRAND NAME */}
          <h2 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#2A160C]">
            {brand.name}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-7 max-w-lg text-sm sm:text-base leading-7 sm:leading-8 text-[#4A3220]">
            {brand.description}
          </p>

        </div>

        {/* RIGHT LOGO SECTION */}
        <div className="relative order-1 flex min-h-[280px] items-center justify-center overflow-visible bg-transparent px-6 py-12 sm:min-h-[340px] lg:order-2 lg:min-h-full lg:py-16">

          {/* LOGO GLOW */}
          <div
            className="pointer-events-none absolute h-96 w-96 rounded-full blur-3xl"
            style={{
              background: `${brand.colors?.primary || "#E2903F"}12`,
            }}
          />

          {/* DECORATIVE ARC */}
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#E2903F]/10" />

          {/* LOGO */}
          {brand.logo ? (
            <motion.img
              src={brand.logo}
              alt={`${brand.name} logo`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-10 max-h-48 w-auto max-w-[75%] object-contain sm:max-h-56 lg:max-h-72 xl:max-h-80"
            />
          ) : (
            <h3 className="relative z-10 font-display text-4xl sm:text-5xl font-bold text-[#2A160C]">
              {brand.name}
            </h3>
          )}

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

        <div ref={containerRef} className="mx-auto w-full max-w-full space-y-6 sm:space-y-8 px-4 sm:px-6 py-8 sm:py-12">

          {brands.map((brand) => (

            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2903F]/10 bg-gradient-to-br from-[#FBF6ED] via-[#F7ECDA] to-[#F3E5CF] shadow-xl"
            >

              {/* DECORATIVE CIRCLES */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#E2903F]/10" />
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#E2903F]/8" />

              {/* LOGO SECTION */}
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FBF6ED] to-[#F3E5CF] px-6 py-12 sm:min-h-[320px]">

                <div
                  className="absolute h-80 w-80 rounded-full blur-3xl"
                  style={{
                    background: `${brand.colors?.primary || "#E2903F"}14`,
                  }}
                />

                {brand.logo ? (
                  <motion.img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-h-48 w-auto max-w-[80%] object-contain sm:max-h-56"
                  />
                ) : (
                  <h3 className="relative z-10 font-display text-4xl sm:text-5xl font-bold text-[#2A160C]">
                    {brand.name}
                  </h3>
                )}

              </div>

              {/* CONTENT SECTION */}
              <div className="relative z-10 space-y-4 p-6 sm:p-8">

                {/* NUMBER */}
                <div>
                  <span className="block font-display text-5xl sm:text-6xl font-bold leading-none text-[#E2903F] tracking-tighter">
                    {brand.number}
                  </span>
                </div>

                {/* TAGLINE */}
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#E2903F]">
                  {brand.tagline}
                </p>

                {/* NAME */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#2A160C]">
                  {brand.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base leading-6 sm:leading-7 text-[#4A3220]">
                  {brand.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}