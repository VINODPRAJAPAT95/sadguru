import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gem,
  Eye,
  Crosshair,
  Compass,
  ShieldCheck,
  Factory,
  Sparkles,
  Users2,
  Leaf,
  Target,
  Cog,
  Sprout,
  ThumbsUp,
  ChefHat,
  Salad,
  BadgeCheck,
  Zap,
  Star,
} from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import aboutImg from "../assets/images/about-food.jpg";
import valuesImg from "../assets/images/values-snacks.jpg";
import visionImg from "../assets/images/vision-bg.jpg";
import missionImg from "../assets/images/mission-bg.jpg";
import Seo from "../components/Seo";
import Button from "../components/Button";
import ValueCard from "../components/ValueCard";
import BrandHorizontalScroll from "../components/BrandHorizontalScroll";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import values from "../data/values";
import faqs from "../data/faqs";

/* ------------------------------------------------------------------
   SectionHeading: bigger + modern heading used across the Home page.
   - label     : pill badge above the title
   - title     : main heading
   - highlight : part of the title shown in orange (optional)
   - compact   : for long sentence-style labels (e.g. FAQ), no pill
------------------------------------------------------------------- */
function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "left",
  compact = false,
  className = "",
}) {
  const center = align === "center";
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {label &&
        (compact ? (
          <span className="block text-base font-semibold text-orange-600 sm:text-lg">
            {label}
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.28em] text-orange-600 shadow-sm sm:px-6 sm:text-base">
            {label}
          </span>
        ))}

      <h2 className="font-baloo mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#241209] sm:text-5xl">
        {parts ? (
          <>
            {parts[0]}
            <span className="text-orange-500">{highlight}</span>
            {parts.slice(1).join(highlight)}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-relaxed text-charcoal-400 sm:text-lg ${
            center ? "mx-auto max-w-4xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

const whyChooseUs = [
  { icon: Leaf, title: "Clean Ingredients", desc: "Carefully selected, clean ingredients in every formulation." },
  { icon: Users2, title: "Customer-Centric", desc: "A customer-centric approach to product development, built around real needs." },
  { icon: Factory, title: "Transparent Process", desc: "A transparent and disciplined production process, every step of the way." },
  { icon: ShieldCheck, title: "Quality & Safety", desc: "A strong commitment to quality and safety across every product." },
  { icon: Target, title: "Balanced Nutrition", desc: "A focus on balanced nutrition designed for all ages." },
];

const whatWeDoItems = [
  {
    icon: Salad,
    title: "Balanced Nutrition",
    desc: "Every formulation is built around wholesome ingredients that support everyday energy and wellbeing for the whole family.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "Rigorous checks at every stage ensure consistent taste, texture, and safety in every single pack we prepare.",
  },
  {
    icon: Zap,
    title: "Smart Convenience",
    desc: "Ready when you are. Thoughtfully crafted food that fits seamlessly into modern routines while keeping freshness and nutrition at the forefront",
  },
];

const philosophyItems = [
  {
    Icon: Cog,
    title: "Minimal Processing",
    desc: "We use traditional methods to limit over-processing and retain nutrients, keeping our food wholesome, balanced, and nourishing.",
  },
  {
    Icon: Sprout,
    title: "Wholesome Ingredients",
    desc: "We source ingredients responsibly and avoid additives or preservatives, making sure every product is balanced and trustworthy.",
  },
  {
    Icon: ThumbsUp,
    title: "Honest Practices",
    desc: "From sourcing to preparation, we follow transparent processes, so our food is reliable, balanced, and dependable.",
  },
  {
    Icon: ChefHat,
    title: "Natural Tastes",
    desc: "We use careful methods to bring out full flavors, ensuring every bite is balanced, satisfying, and enjoyable.",
  },
];

/* Values / Vision / Mission panels (background images top par import hain) */
const driveItems = [
  {
    title: "Values",
    icon: Gem,
    img: valuesImg,
    desc: "We believe in making food with integrity, attention, and consistency. By combining time-tested techniques with mindful processing, we deliver products that nourish, delight, and earn family trust.",
  },
  {
    title: "Vision",
    icon: Eye,
    img: visionImg,
    desc: "To inspire better everyday eating by making nourishing, thoughtfully made food accessible to families, while preserving the wisdom of traditional food practices for today’s way of life.",
  },
  {
    title: "Mission",
    icon: Crosshair,
    img: missionImg,
    desc: "We create food that brings together honest ingredients, great taste, and thoughtful nutrition. Every product is developed to fit effortlessly into everyday routines and support healthier choices for the whole family.",
  },
];

/* ------------------------------------------------------------------
   HERO ANIMATION VARIANTS
   - Each headline line slides up from behind a mask (overflow-hidden)
   - Buttons and scroll cue fade in after the headline
------------------------------------------------------------------- */
const EASE_OUT = [0.22, 1, 0.36, 1];

// Hero headline: accent = orange, otherwise white
const HERO_LINES = [
  [{ text: "Wholesome Food,", accent: true }],
  [{ text: "Thoughtfully Prepared", accent: false }],
  [
    { text: "for ", accent: false },
    { text: "Healthier Living", accent: true },
  ],
];

// Tiny glowing embers that drift upward in the hero (fixed values, no randomness)
const PARTICLES = [
  { left: "6%", size: 6, dur: 12, delay: 0 },
  { left: "14%", size: 4, dur: 15, delay: 3 },
  { left: "22%", size: 8, dur: 13, delay: 6 },
  { left: "31%", size: 5, dur: 16, delay: 1.5 },
  { left: "40%", size: 4, dur: 14, delay: 8 },
  { left: "49%", size: 7, dur: 17, delay: 4 },
  { left: "58%", size: 5, dur: 12, delay: 9 },
  { left: "66%", size: 6, dur: 15, delay: 2 },
  { left: "74%", size: 4, dur: 13, delay: 7 },
  { left: "82%", size: 8, dur: 16, delay: 5 },
  { left: "90%", size: 5, dur: 14, delay: 10 },
  { left: "95%", size: 4, dur: 18, delay: 3.5 },
];

const headlineLine = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.5 + i * 0.18, ease: EASE_OUT },
  }),
};

const heroButtons = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 1.3 },
  },
};

const heroButtonItem = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const whatWeDoContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const whatWeDoCardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Expanding panels (Values / Vision / Mission) */
const panelContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const panelItem = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const reduce = useReducedMotion();
  const [activeDrive, setActiveDrive] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax: image drifts opposite to the cursor, text moves slightly with it
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 18, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 18, mass: 0.6 });
  const textMouseX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleHeroMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleHeroLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <Seo
        title="Sadguru Foods Processing Pvt. Ltd. | Wholesome Food, Thoughtfully Prepared"
        description="A multi-brand food company crafting wholesome, minimally processed food rooted in tradition and modern nutrition."
      />

      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMove}
        onMouseLeave={handleHeroLeave}
        className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
      >
        {/* BACKGROUND IMAGE
            Layers (outside to inside):
            1. scroll parallax
            2. mouse parallax (desktop)
            3. cinematic reveal: image opens from a rounded window to full screen
            4. slow Ken Burns drift that keeps going after the reveal */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <motion.div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              initial={
                reduce
                  ? false
                  : { clipPath: "inset(14% 10% 14% 10% round 40px)", opacity: 0 }
              }
              animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)", opacity: 1 }}
              transition={{
                clipPath: { duration: 1.7, ease: EASE_OUT },
                opacity: { duration: 0.8, ease: "easeOut" },
              }}
            >
              <motion.div
                className="h-full w-full"
                animate={reduce ? undefined : { scale: [1, 1.08], x: [0, -14] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={heroBg}
                  alt="Freshly prepared wholesome snacks and food"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  initial={reduce ? false : { scale: 1.4 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.2, ease: EASE_OUT }}
                />
              </motion.div>

              {/* dark overlay + bottom fade for text contrast */}
              <div className="absolute inset-0 bg-charcoal/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Light sweep: a soft diagonal shine glides across the image, then repeats every few seconds */}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-full"
            style={{
              background:
                "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.16) 50%, transparent 62%)",
            }}
            initial={{ x: "-110%" }}
            animate={{ x: "110%" }}
            transition={{
              duration: 1.6,
              delay: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 9,
            }}
          />
        )}

        {/* Glowing embers drifting upward */}
        {!reduce &&
          PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 rounded-full bg-orange-400/80 blur-[1px]"
              style={{ left: p.left, width: p.size, height: p.size }}
              initial={{ y: "0vh", opacity: 0 }}
              animate={{ y: ["0vh", "-95vh"], opacity: [0, 0.9, 0] }}
              transition={{
                duration: p.dur,
                delay: 1.8 + p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

        {/* Soft orange glows that slowly breathe behind the text */}
        {!reduce && (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5], x: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.8, 0.4], x: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <motion.div
          style={{ x: textMouseX, y: textY, opacity: textOpacity }}
          className="container-px relative mx-auto w-full max-w-6xl py-28 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm sm:tracking-[0.35em]"
          >
         
          </motion.span>

          <h1 className="mx-auto mt-6 max-w-5xl text-balance break-words font-display text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {HERO_LINES.map((segments, i) => (
              <span key={i} className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  custom={i}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                  variants={headlineLine}
                  className="block"
                >
                  {segments.map((seg) => (
                    <span
                      key={seg.text}
                      className={seg.accent ? "text-orange-500" : "text-white"}
                    >
                      {seg.text}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Accent line that draws itself under the headline */}
          <motion.div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-24 origin-center rounded-full bg-orange-500"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15, ease: EASE_OUT }}
          />

          <motion.div
            variants={heroButtons}
            initial={reduce ? false : "hidden"}
            animate="visible"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div variants={heroButtonItem}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button to="/brands" variant="primary" className="bg-orange-500 hover:bg-orange-600">
                  Explore Our Brands
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={heroButtonItem}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  to="/about/our-story"
                  variant="outline"
                  icon={false}
                  className="border-white/40 text-white hover:border-orange-400 hover:text-orange-300"
                >
                  Discover Our Story
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </section>

      {/* SHORT ABOUT / WHO WE ARE */}
      <section className="section-py overflow-hidden">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Simple modern image layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 mx-auto w-full max-w-md pb-10 pt-4 sm:max-w-lg lg:order-1 lg:max-w-none"
          >
            {/* offset orange block behind the photo */}
            <div className="absolute bottom-0 left-0 right-6 top-8 rounded-[2rem] bg-gradient-to-br from-orange-400 to-orange-600 sm:right-10" />

            {/* dotted accent */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-24 w-24 opacity-60 sm:h-32 sm:w-32"
              style={{
                backgroundImage: "radial-gradient(#f97316 1.6px, transparent 1.6px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* main photo */}
            <div className="group relative ml-6 overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-white sm:ml-10">
              <img
                src={aboutImg}
                alt="Preparing wholesome food"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/4.2]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
            </div>

            {/* Star badge (bottom left) */}
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-2 left-0 z-10 h-28 w-28 sm:h-32 sm:w-32"
              initial={reduce ? false : { scale: 0, rotate: -90, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
            >
              {/* 12-point starburst seal, slowly rotating */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full drop-shadow-xl"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <polygon
                  fill="#f97316"
                  points="50,2 58,15 72,7 74,23 90,22 85,37 99,43 88,55 97,68 82,72 82,88 67,84 61,98 50,89 39,98 33,84 18,88 18,72 3,68 12,55 1,43 15,37 10,22 26,23 28,7 42,15"
                />
              </motion.svg>

              {/* Inner ring + 5-point star */}
              <div className="absolute inset-[22%] flex items-center justify-center rounded-full border-2 border-dashed border-white/70">
                <Star size={34} strokeWidth={1.5} className="fill-white text-white" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              label="Who We Are"
              title="A Family of Food Brands Built on Trust"
              highlight="Built on Trust"
              description="Sadguru Foods Processing Pvt. Ltd. produces wholesome, minimally processed foods rooted in tradition and aligned with modern nutritional needs. We believe food should nourish the body, be made with care, and maintain its flavor without extra processing or shortcuts."
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Button
                to="/about/our-story"
                variant="dark"
                className="bg-orange-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
              >
                Know Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO — cream background */}
      <section className="section-py relative overflow-hidden bg-[#FFF9EF]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            label="What We Do"
            title="Simple, Nourishing Food for Everyday Life"
            highlight="for Everyday Life"
            description="We prepare a broad selection of food products designed to fit today's lifestyle while keeping traditional values in mind. Our foods support everyday nourishment, are suitable for the entire family, and are made with careful attention to quality, taste, and consistency."
            className="max-w-3xl"
          />

          <motion.div
            variants={whatWeDoContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whatWeDoItems.map((item) => (
              <motion.div
                key={item.title}
                variants={whatWeDoCardVariant}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-2xl border border-orange-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <item.icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-baloo mt-6 text-xl font-bold text-[#241209]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES / VISION / MISSION (expanding panels) */}
      <section className="section-py overflow-hidden bg-orange-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            label="What Drives Us"
            title="Values, Vision & Mission"
            highlight="Vision & Mission"
            description="These principles shape every decision from sourcing an ingredient to sealing a pack."
            align="center"
            className="mb-14 [&_p]:whitespace-nowrap max-md:[&_p]:whitespace-normal"
          />

          <motion.div
            variants={panelContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 lg:h-[560px] lg:flex-row"
          >
            {driveItems.map((item, i) => {
              const active = activeDrive === i;
              return (
                <motion.div
                  key={item.title}
                  variants={panelItem}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active}
                  aria-label={item.title}
                  onMouseEnter={() => setActiveDrive(i)}
                  onFocus={() => setActiveDrive(i)}
                  onClick={() => setActiveDrive(i)}
                  className={`group relative min-h-[380px] min-w-0 cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-400 to-orange-600 outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-4 focus-visible:ring-orange-500 focus-visible:ring-offset-2 lg:min-h-0 lg:basis-0 ${
                    active ? "lg:grow-[3.4]" : "lg:grow-[1]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out ${
                      active ? "lg:scale-100" : "lg:scale-110"
                    }`}
                  />

                  {/* shade */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#241209]/90 via-[#241209]/35 to-[#241209]/10 transition-opacity duration-500 ${
                      active ? "lg:opacity-100" : "lg:opacity-90"
                    }`}
                  />

                  {/* icon (top) */}
                  <div className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm sm:left-9 sm:top-9">
                    <item.icon size={26} strokeWidth={1.75} />
                  </div>

                  {/* collapsed vertical title (desktop only) */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap font-baloo text-3xl font-bold text-white transition-opacity duration-300 [writing-mode:vertical-rl] lg:block ${
                      active ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* expanded content (always visible on mobile) */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-500 sm:p-9 ${
                      active
                        ? "opacity-100 lg:translate-y-0 lg:delay-200"
                        : "opacity-100 lg:translate-y-4 lg:opacity-0"
                    }`}
                  >
                    <div className="h-[3px] w-12 rounded-full bg-orange-400" />
                    <h3 className="font-baloo mt-4 text-4xl font-bold text-white sm:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/90">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-py bg-[#f6e7c9] overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-baloo mb-14 text-center text-4xl font-bold text-[#241209] sm:text-5xl"
          >
            Our Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, borderColor: "#f97316" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border-2 border-orange-400/70 bg-white p-7 shadow-sm transition-colors duration-300"
              >
                <item.Icon size={40} strokeWidth={1.5} className="text-orange-500" />
                <h3 className="font-baloo mt-5 whitespace-nowrap text-xl font-bold leading-snug text-charcoal lg:text-lg xl:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS HORIZONTAL SCROLL */}
      <section className="bg-white">
        <div className="container-px mx-auto max-w-7xl pb-2 pt-16 lg:pb-4 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: heading in 4 lines */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.28em] text-orange-600 shadow-sm sm:px-6 sm:text-base">
                Our Brands
              </span>

              <h2 className="font-baloo mt-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
                <span className="block text-[#241209] sm:whitespace-nowrap">Four Brands</span>
                <span className="block text-orange-500 sm:whitespace-nowrap">Different Consumers,</span>
                <span className="block text-orange-500 sm:whitespace-nowrap">Different Needs,</span>
                <span className="block text-orange-500 sm:whitespace-nowrap">Different Journeys.</span>
              </h2>
            </motion.div>

            {/* RIGHT: description (single paragraph) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="border-l-4 border-orange-500 pl-6 sm:pl-8"
            >
              <p className="text-base leading-relaxed text-charcoal-400 sm:text-lg">
                At Sadguru Foods, we believe that nutrition is not one size fits all.
                That’s why we’ve created four distinctive brands. Every consumer has a
                unique nutritional journey. Four brands, each created with distinct
                purpose, audience and story.
              </p>
            </motion.div>
          </div>
        </div>

        <BrandHorizontalScroll />
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <SectionHeading
                  label="Why Choose Us"
                  title="Why Choose Sadguru Foods Processing Pvt. Ltd."
                  highlight="Sadguru Foods Processing Pvt. Ltd."
                  description="Every product from Sadguru Foods Processing Pvt. Ltd. follows a transparent and disciplined process. From sourcing quality ingredients to delivering consistent products, we focus on trust, care, and excellence at every stage."
                />

                <div className="mt-10 flex justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-sm font-semibold tracking-wide text-orange-600 sm:text-base">
                    <span>Quality</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>Trust</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>Care</span>
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                  }}
                  className="sticky"
                  style={{
                    top: `${110 + i * 20}px`,
                    zIndex: i + 1,
                  }}
                >
                  <div className="mb-8 flex min-h-[360px] flex-col justify-between rounded-[2rem] border-2 border-orange-500 bg-[#FFF9EF] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_15px_50px_rgba(239,127,26,0.12)] sm:p-10">
                    <div>
                      <div className="mb-8 flex h-16 w-16 items-center justify-center bg-orange-500 text-white">
                        <item.icon size={30} strokeWidth={1.8} />
                      </div>

                      <h3 className="max-w-md font-display text-3xl font-semibold leading-tight text-[#2B1608] sm:text-4xl">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-6">
                      <p className="max-w-md text-base leading-relaxed text-charcoal-400 sm:text-lg">
                        {item.desc}
                      </p>

                      <span className="hidden text-5xl font-bold text-orange-500/30 sm:block">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white overflow-hidden">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading
            compact
            label="At Sadguru Foods Processing Pvt. Ltd., consistency and care guide every step:"
            title="Our Approach to Quality Food Production"
            highlight="Quality Food Production"
            align="center"
            className="mb-14"
          />
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}