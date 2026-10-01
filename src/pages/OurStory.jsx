import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Lightbulb,
  Users2,
  Sprout,
  Settings2,
  ShieldCheck,
  Leaf,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import Seo from "../components/Seo";

/* Images: put files in src/assets/ourstory/ (change names/paths/extensions if yours differ) */
import heroMeal from "../assets/ourstory/hero-meal.jpg";
import vegetables from "../assets/ourstory/vegetables.jpg";
import grains from "../assets/ourstory/grains-spices.jpg";
import kidsImg from "../assets/ourstory/life-kids.jpg";
import childrenImg from "../assets/ourstory/life-children.jpg";
import adultsImg from "../assets/ourstory/life-adults.jpg";
import elderlyImg from "../assets/ourstory/life-elderly.jpg";
import traditionalSpices from "../assets/ourstory/traditional-spices.jpg";
import packagedFood from "../assets/ourstory/packaged-food.jpg";


const differentiators = [
  {
    num: "01",
    icon: HomeIcon,
    title: "A Multi-Brand Food House",
    desc: "Sadguru Foods is being built as a multi-brand food company, allowing us to operate across different food categories, consumer segments, and consumption occasions. Our brands have distinct identities and purposes, while sharing the larger vision of Sadguru Foods.",
    span: "lg:col-span-3",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Consumer-Led Product Development",
    desc: "Great products begin with understanding people. Our approach starts with identifying a consumer need and moving through research, formulation, development, testing, and refinement to create products that are relevant and purposeful.",
    span: "lg:col-span-2",
  },
  {
    num: "03",
    icon: Users2,
    title: "Health Across Generations",
    desc: "Our ambition goes beyond serving one age group. We aim to build a portfolio that addresses the evolving food and nutritional needs of consumers from childhood to the elderly years.",
    span: "lg:col-span-2",
  },
  {
    num: "04",
    icon: Sprout,
    title: "Traditional Knowledge Meets Innovation",
    desc: "India has a rich heritage of grains, ingredients, recipes, and food practices. We combine this heritage with nutrition, food science, modern processing, and contemporary formats to create products relevant to today's consumers.",
    span: "lg:col-span-3",
  },
  {
    num: "05",
    icon: Settings2,
    title: "Thoughtful Innovation",
    desc: "We do not innovate simply to create something different. We ask: can it be healthier, more nutritious, more convenient can a familiar food be made better? This mindset guides our product and brand development.",
    span: "lg:col-span-5",
    wide: true,
  },
];

/*
  LIFE STAGES
  To swap a photo, replace the image file (or its import) at the top of this file.
  If a URL fails to load, the card falls back to an orange gradient automatically.
*/
const lifeStages = [
  {
    title: "Kids",
    desc: "Gentle nutrition and tastes made for growing little ones.",
    img: kidsImg,
  },
  {
    title: "Children",
    desc: "Energy and balanced choices for school days and playtime.",
    img: childrenImg,
  },
  {
    title: "Adults",
    desc: "Convenience, energy, and balanced choices for busy routines.",
    img: adultsImg,
  },
  {
    title: "Elderly",
    desc: "Food designed around evolving nutritional needs.",
    img: elderlyImg,
  },
];

const commitments = [
  { icon: ShieldCheck, label: "Quality" },
  { icon: Leaf, label: "Nutrition" },
  { icon: ShieldCheck, label: "Safety" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users2, label: "Trust" },
  { icon: HeartHandshake, label: "Responsibility" },
];

/* -----------------------------------------
   SHARED STYLES
----------------------------------------- */

// Small orange label above headings (now larger)
const eyebrow =
  "text-lg font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xl";

// Main section headings (now larger)
const h2Big =
  "font-display text-4xl font-bold leading-[1.12] tracking-tight text-charcoal sm:text-5xl lg:text-[3.4rem]";

// Outlined pill button (used in hero + final CTA)
const outlineBtn =
  "rounded-full border-2 border-charcoal px-6 py-3 text-sm font-semibold text-charcoal transition-colors duration-200 hover:bg-charcoal hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";

/* -----------------------------------------
   MOTION VARIANTS
----------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const premiumCardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.15 } },
};

const quoteLine = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurStory() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      <Seo
        title="About Us | Sadguru Foods Processing Pvt. Ltd."
        description="Big dreams, thoughtful innovation, and better food for every generation the story, vision, and values behind Sadguru Foods Processing Private Limited."
      />

      {/* ================= ABOUT HERO ================= */}
      <section className="relative bg-white px-4 pb-14 pt-6 sm:px-6 lg:pb-20 lg:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* background rings */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] text-orange-500"
            viewBox="0 0 520 520"
            fill="none"
            stroke="currentColor"
          >
            {[80, 140, 200, 250].map((r) => (
              <circle key={r} cx="260" cy="260" r={r} strokeOpacity="0.18" strokeWidth="1.5" />
            ))}
          </svg>

          <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Clearly visible label: solid pill instead of thin orange text */}
              <span className="inline-flex items-center gap-3 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md sm:text-base">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                About Sadguru Foods
              </span>

              <h1 className="mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-[3.6rem]">
                <span className="block">Big Dreams.</span>
                <span className="block">Thoughtful Innovation.</span>
                <span className="block text-orange-500">
                  Better Food for Every Generation.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal-400 sm:text-lg">
                Sadguru Foods Processing Private Limited is a growing food processing
                startup built with the ambition to create a forward thinking food
                company rooted in nutrition, innovation, and consumer needs.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/brands" className={outlineBtn}>
                  Explore Our Brands
                </Link>
              </div>
            </motion.div>

            {/* RIGHT VISUAL: arch photo + rotating badge + round inset photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* offset outline */}
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[2.5rem] border-2 border-charcoal"
              />
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem]">
                <img
                  src={heroMeal}
                  alt="Child enjoying a wholesome, nutritious meal"
                  className="h-[400px] w-full object-cover sm:h-[500px]"
                />
              </div>

              {/* rotating text badge */}
              <div className="absolute -right-3 top-8 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg sm:-right-8 sm:h-32 sm:w-32">
                <svg
                  viewBox="0 0 120 120"
                  className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="hero-badge-path"
                      d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                    />
                  </defs>
                  <text fontSize="9.5" fontWeight="700" fill="#2B2A29" textLength="270" lengthAdjust="spacing">
                    <textPath href="#hero-badge-path">
                      FOOD • NUTRITION • INNOVATION •
                    </textPath>
                  </text>
                </svg>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Leaf size={20} strokeWidth={1.75} />
                </div>
              </div>

              {/* round inset photo */}
              <div className="absolute -bottom-6 -left-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg sm:-left-10 sm:h-36 sm:w-36">
                <img
                  src={vegetables}
                  alt="Fresh vegetables"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section id="our-story" className="bg-white overflow-hidden pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto h-[420px] w-full max-w-md"
          >
            <div className="absolute left-0 top-0 h-64 w-64 overflow-hidden rounded-3xl shadow-soft sm:h-72 sm:w-72">
              <img
                src={grains}
                alt="Indian grains and spices"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-52 w-52 overflow-hidden rounded-3xl border-4 border-white shadow-soft sm:h-60 sm:w-60">
              <img
                src={vegetables}
                alt="Fresh vegetables"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={eyebrow}>Our Story</span>
            <h2 className={`mt-4 ${h2Big}`}>
              How Can We Make{" "}
              <span className="text-orange-500">Everyday Food Better?</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-400">
              We believe the future of food is not about choosing between health
              and taste, tradition and innovation, or convenience and quality. It
              is about bringing these elements together to create food that fits
              naturally into people's lives.
            </p>

            <p className="mt-5 text-base font-semibold text-orange-500">
              Our journey is driven by a simple question: how can we make
              everyday food better?
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-400">
              With this thought at the heart of our business, we focus on
              understanding changing lifestyles, nutritional requirements, food
              preferences, and emerging consumer needs. We transform these
              insights into products and brands that are thoughtfully developed,
              purposeful, accessible, and enjoyable.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR VISION (cream) ================= */}
      <section className="relative overflow-hidden bg-[#FFF9EF] py-24 lg:py-32">
        {/* subtle floating grain dots */}
        <div className="pointer-events-none absolute right-10 top-14 h-2 w-2 rounded-full bg-orange-400/60" />
        <div className="pointer-events-none absolute right-24 top-28 h-1.5 w-1.5 rounded-full bg-orange-400/40" />
        <div className="pointer-events-none absolute right-16 bottom-20 h-2 w-2 rounded-full bg-orange-400/50" />

        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={eyebrow}>Our Vision</span>
            <h2 className={`mt-4 ${h2Big}`}>
              Better Food for Better Living.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal-400">
              Our vision is to build a trusted and diversified food company that
              creates better food choices for people across every stage of life.
              We see an opportunity to create food solutions for children, young
              adults, families, health-conscious consumers, and the elderly,
              recognizing that every stage of life comes with different
              nutritional needs and preferences.
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-400">
              We want to make healthier and more thoughtful food choices easier
              to find, easier to enjoy, and easier to make part of everyday life.
            </p>
          </motion.div>

          {/* RIGHT: PREMIUM 3-LINE STATEMENT (exactly 3 lines on sm and up) */}
          <motion.div
            variants={quoteContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex min-w-0 flex-col justify-center lg:pl-6"
          >
            {/* Line 1 */}
            <motion.p
              variants={quoteLine}
              className="font-display text-4xl font-black leading-[1.1] tracking-tight text-charcoal sm:whitespace-nowrap sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Different needs.
            </motion.p>

            {/* Line 2 */}
            <motion.p
              variants={quoteLine}
              className="mt-2 font-display text-4xl font-black leading-[1.1] tracking-tight text-charcoal sm:whitespace-nowrap sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Different journeys.
            </motion.p>

            {/* Line 3 */}
            <motion.div variants={quoteLine} className="mt-7 flex items-center gap-4">
              <span className="hidden h-[3px] w-10 shrink-0 rounded-full bg-orange-500 sm:block" />
              <p className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text font-display text-xl font-bold leading-snug text-transparent sm:whitespace-nowrap sm:text-2xl lg:text-[1.4rem] xl:text-[1.65rem]">
                One purpose Better Food for Better Living.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT (premium) ================= */}
      <section className="section-py relative overflow-hidden bg-white">
        {/* soft ambient glows */}
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-[#FFF1D6]/70 blur-3xl" />

        <div className="container-px relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center justify-center gap-4 text-xl font-bold uppercase tracking-[0.18em] text-orange-500 sm:text-2xl sm:tracking-[0.2em]">
              <span className="hidden h-[2px] w-10 bg-orange-500 sm:block" />
              What Makes Us Different
              <span className="hidden h-[2px] w-10 bg-orange-500 sm:block" />
            </span>
            <h2 className={`mt-6 ${h2Big} lg:text-[3.8rem]`}>
              Building food brands{" "}
              <span className="text-orange-500">with purpose.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.num}
                variants={premiumCardItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-white via-white to-[#FFF6E5] p-8 shadow-[0_10px_40px_-15px_rgba(36,18,9,0.12)] transition-all duration-500 hover:border-orange-300 hover:shadow-[0_25px_60px_-20px_rgba(239,127,26,0.35)] sm:p-10 ${item.span} ${
                  item.wide ? "lg:flex lg:items-center lg:gap-14" : ""
                }`}
              >
                {/* corner glow on hover */}
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orange-500/0 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

                <div className={`relative ${item.wide ? "lg:w-2/5" : ""}`}>
                  {/* icon tile */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/30 ring-4 ring-orange-500/10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <item.icon size={26} strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-7 max-w-sm font-display text-2xl font-bold leading-snug text-charcoal sm:text-[1.7rem]">
                    {item.title}
                  </h3>

                  {/* animated divider */}
                  <div className="mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 group-hover:w-24" />
                </div>

                <p
                  className={`relative mt-5 text-[0.95rem] leading-relaxed text-charcoal-400 ${
                    item.wide ? "lg:mt-0 lg:flex-1 lg:text-base" : ""
                  }`}
                >
                  {item.desc}
                </p>

                {/* bottom accent line that sweeps in on hover */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-200 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOOD FOR EVERY STAGE OF LIFE (expanding panels) ================= */}
      <section className="section-py overflow-hidden bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <h2 className={`max-w-2xl ${h2Big}`}>
              Food for Every{" "}
              <span className="text-orange-500">Stage of Life</span>
            </h2>
            <p className="hidden text-sm font-medium text-charcoal-400 lg:block">
              Hover over a panel to explore
            </p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 flex flex-col gap-4 lg:h-[560px] lg:flex-row"
          >
            {lifeStages.map((stage, i) => {
              const active = activeStage === i;
              return (
                <motion.div
                  key={stage.title}
                  variants={premiumCardItem}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active}
                  aria-label={stage.title}
                  onMouseEnter={() => setActiveStage(i)}
                  onFocus={() => setActiveStage(i)}
                  onClick={() => setActiveStage(i)}
                  className={`group relative h-80 min-w-0 cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-400 to-orange-600 outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-4 focus-visible:ring-orange-500 focus-visible:ring-offset-2 lg:h-auto lg:basis-0 ${
                    active ? "lg:grow-[3.4]" : "lg:grow-[1]"
                  }`}
                >
                  <img
                    src={stage.img}
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
                    className={`absolute inset-0 bg-gradient-to-t from-[#241209]/85 via-[#241209]/20 to-transparent transition-opacity duration-500 ${
                      active ? "lg:opacity-100" : "lg:opacity-90"
                    }`}
                  />

                  {/* collapsed label (desktop only): vertical title */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap font-display text-2xl font-bold text-white transition-opacity duration-300 [writing-mode:vertical-rl] lg:block ${
                      active ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {stage.title}
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
                    <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-white/85">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= TRADITION MEETS INNOVATION ================= */}
      <section className="section-py bg-white overflow-hidden">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 mx-auto h-[380px] w-full max-w-md lg:order-1"
          >
            <div className="absolute left-4 top-0 h-56 w-56 overflow-hidden rounded-3xl shadow-soft sm:h-64 sm:w-64">
              <img
                src={traditionalSpices}
                alt="Traditional Indian spices"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-48 w-48 overflow-hidden rounded-3xl border-4 border-white shadow-soft sm:h-56 sm:w-56">
              <img
                src={packagedFood}
                alt="Modern packaged food products"
                className="h-full w-full object-cover"
              />
            </div>
            {/* connecting curved line */}
            <svg
              className="pointer-events-none absolute -bottom-6 left-24 h-24 w-24 text-orange-400/60"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M10 10 Q 50 90 90 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className={eyebrow}>Tradition + Innovation</span>
            <h2 className={`mt-4 ${h2Big}`}>
              Where Tradition Meets Innovation
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-400">
              India has a rich heritage of grains, ingredients, recipes, and food
              practices. We see an opportunity to combine this heritage with
              nutrition, food science, modern processing, and contemporary
              formats to create products that are relevant to today's consumers
              food that carries the past forward without asking anyone to
              compromise on how they live now.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR COMMITMENT ================= */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={eyebrow}>Our Commitment</span>
              <h2 className={`mt-4 ${h2Big}`}>
                Built on Strong Foundations.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-400">
                Every product we create becomes part of a child's everyday life.
                That responsibility guides how we build our company. We are
                committed to maintaining strong foundations in the six pillars
                below.
              </p>
            </motion.div>

            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {commitments.map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardItem}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-orange-500/25 bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors duration-300 hover:border-orange-500"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/40 text-orange-500">
                    <item.icon size={19} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-charcoal">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR BIG DREAM (orange) ================= */}
      <section className="relative overflow-hidden bg-orange-500 py-24 lg:py-28">
        {/* subtle background leaf lines */}
        <svg
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-white/10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M20 100 Q 100 20 180 100 Q 100 180 20 100 Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lg font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xl">
              Our Big Dream
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
              We aspire to grow beyond the brands we have today, continuously
              exploring new ideas, new categories, new products, and new
              possibilities through thoughtful innovation. Our ambition is not
              simply to grow bigger it is to grow with purpose, create with
              responsibility, and make a lasting difference through food.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Today, we are building the foundation.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Tomorrow, we aim to build a food ecosystem trusted by generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-24">
        <div className="container-px mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-5xl"
          >
            Building Better Food, Together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-charcoal-400"
          >
            Thoughtful innovation today. Better food for generations tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className={outlineBtn}>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}