import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import brands from "../data/brands";


/* =========================================
   DESKTOP BRAND PANEL
========================================= */

function BrandPanel({ brand, index, progress }) {
  const total = brands.length;

  const start = index / total;
  const end = (index + 1) / total;
  const middle = (start + end) / 2;

  const scale = useTransform(
    progress,
    [start, middle, end],
    [0.96, 1, 0.96]
  );

  return (
    <motion.div
      style={{ scale }}
      className="relative h-full w-screen shrink-0 px-4 sm:px-8 lg:px-12"
    >
      {/* MAIN BLACK CARD */}
      <div className="relative mx-auto grid h-full max-w-[1440px] grid-cols-1 overflow-hidden rounded-[2rem] border border-black/10 bg-[#181818] lg:grid-cols-2">

        {/* =====================================
            DECORATIVE BACKGROUND
        ===================================== */}

        {/* Top Left Circle */}
        <div className="pointer-events-none absolute -left-32 -top-40 h-[390px] w-[390px] rounded-full border border-[#EFAB00]/20" />

        <div className="pointer-events-none absolute -left-20 -top-28 h-[280px] w-[280px] rounded-full border border-[#EFAB00]/10" />

        {/* Bottom Right Circle */}
        <div className="pointer-events-none absolute -bottom-64 -right-48 h-[520px] w-[520px] rounded-full border border-[#EFAB00]/10" />

        {/* Small Decorative Gold Line */}
        <div className="pointer-events-none absolute left-[32%] top-[18%] h-[2px] w-16 bg-[#E88818]" />

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="relative z-10 order-2 flex flex-col justify-center bg-[#181818] px-8 py-14 sm:px-12 lg:order-1 lg:px-20 xl:px-24">

          {/* NUMBER */}
          <span className="font-display text-6xl font-bold leading-none text-[#E88818] sm:text-7xl lg:text-8xl">
            {brand.number}
          </span>

          {/* TAGLINE */}
          <p className="mt-8 max-w-xl text-xs font-semibold uppercase tracking-[0.22em] text-[#E88818] sm:text-sm">
            {brand.tagline}
          </p>

          {/* BRAND NAME */}
          <h2 className="mt-5 font-display text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {brand.name}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
            {brand.description}
          </p>

          {/* BUTTON */}
          <Link
            to={`/brands/${brand.slug}`}
            className="group mt-10 inline-flex w-fit items-center gap-4 rounded-full border border-[#E88818] px-7 py-4 text-sm font-semibold text-[#E88818] transition-all duration-300 hover:bg-[#E88818] hover:text-black"
          >
            Explore Brand

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>


        {/* =====================================
            RIGHT LOGO SECTION
        ===================================== */}

        <div className="relative order-1 flex min-h-[280px] items-center justify-center overflow-hidden bg-[#181818] sm:min-h-[360px] lg:order-2 lg:min-h-full">

          {/* Soft Logo Glow */}
          <div
            className="pointer-events-none absolute h-[300px] w-[300px] rounded-full blur-3xl"
            style={{
              background: `${brand.colors?.primary || "#EFAB00"}12`,
            }}
          />

          {/* Decorative Gold Arc */}
          <div className="pointer-events-none absolute -bottom-52 -right-48 h-[500px] w-[500px] rounded-full border border-[#EFAB00]/10" />

          {/* LOGO */}
          {brand.logo ? (
            <motion.img
              src={brand.logo}
              alt={`${brand.name} logo`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-10 max-h-48 w-auto max-w-[75%] object-contain sm:max-h-64 lg:max-h-80 xl:max-h-96"
            />
          ) : (
            <h3 className="relative z-10 font-display text-5xl font-bold text-white">
              {brand.name}
            </h3>
          )}

        </div>

      </div>
    </motion.div>
  );
}


/* =========================================
   MAIN COMPONENT
========================================= */

export default function BrandHorizontalScroll() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const totalBrands = brands.length;

  /* -----------------------------------------
     CHECK SCREEN SIZE
  ----------------------------------------- */

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);


  /* -----------------------------------------
     CALCULATE HORIZONTAL DISTANCE
  ----------------------------------------- */

  useEffect(() => {
    if (!isDesktop) return;

    const calculateDistance = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const distance = totalWidth - viewportWidth;

      setScrollDistance(Math.max(distance, 0));
    };

    calculateDistance();

    const observer = new ResizeObserver(calculateDistance);

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, [isDesktop]);


  /* -----------------------------------------
     SCROLL PROGRESS
  ----------------------------------------- */

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
    <section className="relative w-full bg-white">

      {/* =====================================
          DESKTOP HORIZONTAL SCROLL
      ===================================== */}

      <div
        ref={targetRef}
        className="relative hidden bg-white lg:block"
        style={{
          height: `${Math.max((totalBrands - 1) * 100, 100)}vh`,
        }}
      >

        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white">

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-[78vh] w-max items-center"
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


      {/* =====================================
          MOBILE + TABLET
      ===================================== */}

      <div className="block bg-white lg:hidden">

        <div className="container-px mx-auto space-y-6 sm:space-y-8">

          {brands.map((brand, index) => (

            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#181818] sm:rounded-[2rem]"
            >

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full border border-[#EFAB00]/15" />

              <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#EFAB00]/10" />


              {/* LOGO SECTION */}

              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#181818] px-6 py-12 sm:min-h-[340px]">

                <div
                  className="absolute h-64 w-64 rounded-full blur-3xl"
                  style={{
                    background: `${brand.colors?.primary || "#EFAB00"}12`,
                  }}
                />

                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="relative z-10 max-h-48 w-auto max-w-[80%] object-contain sm:max-h-60"
                  />
                ) : (
                  <h3 className="relative z-10 font-display text-5xl font-bold text-white">
                    {brand.name}
                  </h3>
                )}

              </div>


              {/* CONTENT SECTION */}

              <div className="relative z-10 p-7 sm:p-10">

                {/* NUMBER */}
                <span className="font-display text-5xl font-bold leading-none text-[#EFAB00] sm:text-6xl">
                  {brand.number}
                </span>

                {/* TAGLINE */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EFAB00] sm:text-xs">
                  {brand.tagline}
                </p>

                {/* NAME */}
                <h3 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {brand.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  {brand.description}
                </p>

                {/* BUTTON */}
                <Link
                  to={`/brands/${brand.slug}`}
                  className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[#EFAB00] px-6 py-3 text-sm font-semibold text-[#EFAB00] transition-all duration-300 hover:bg-[#EFAB00] hover:text-black"
                >
                  Explore Brand

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}