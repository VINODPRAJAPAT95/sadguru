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
  ArrowRight,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";

/* -----------------------------------------
   DATA
----------------------------------------- */

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
    desc: "We do not innovate simply to create something different. We ask: can it be healthier, more nutritious, more convenient — can a familiar food be made better? This mindset guides our product and brand development.",
    span: "lg:col-span-5",
    wide: true,
  },
];

const lifeStages = [
  {
    stage: "01",
    title: "Childhood",
    desc: "Nutrition, taste, and everyday goodness.",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
  },
  {
    stage: "02",
    title: "Young Adults",
    desc: "Convenience, energy, and balanced choices.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    stage: "03",
    title: "Families",
    desc: "Quality, trust, and food everyone can enjoy.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
  },
  {
    stage: "04",
    title: "Health-Conscious",
    desc: "Thoughtful nutrition and better ingredients.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    stage: "05",
    title: "Elderly",
    desc: "Food designed around evolving nutritional needs.",
    img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=800&q=80",
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

export default function OurStory() {
  return (
    <>
      <Seo
        title="About Us | Sadguru Foods Processing Pvt. Ltd."
        description="Big dreams, thoughtful innovation, and better food for every generation — the story, vision, and values behind Sadguru Foods Processing Private Limited."
      />

      {/* ================= ABOUT HERO ================= */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              About Sadguru Foods
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-charcoal sm:text-5xl lg:text-[3.4rem]">
              Big Dreams. Thoughtful Innovation.{" "}
              <span className="text-orange-500">Better Food for Every Generation.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal-400 sm:text-lg">
              Sadguru Foods Processing Private Limited is a growing food processing
              startup built with the ambition to create a forward-thinking food
              company rooted in nutrition, innovation, and consumer needs.
            </p>

            <motion.a
              href="#our-story"
              whileHover={{ y: 3 }}
              className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-charcoal"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20">
                <ArrowRight size={15} className="rotate-90" />
              </span>
              Scroll to explore
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative orange blob behind image */}
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-orange-500/90 sm:h-36 sm:w-36" />

            <div className="relative overflow-hidden rounded-[3rem] rounded-tl-[6rem]">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
                alt="Child enjoying a wholesome, nutritious meal"
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[500px]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 right-4 rounded-full bg-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg sm:right-8 sm:text-sm">
              Food • Nutrition • Innovation
            </div>

            {/* Floating grain/leaf dot accents */}
            <div className="pointer-events-none absolute -right-3 top-10 hidden h-3 w-3 rounded-full bg-orange-300 sm:block" />
            <div className="pointer-events-none absolute -left-4 bottom-24 hidden h-2 w-2 rounded-full bg-orange-400 sm:block" />
          </motion.div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section id="our-story" className="section-py bg-white overflow-hidden">
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
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                alt="Indian grains and spices"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-52 w-52 overflow-hidden rounded-3xl border-4 border-white shadow-soft sm:h-60 sm:w-60">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                alt="Fresh vegetables"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-4 right-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
              <Leaf size={22} />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
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

      {/* ================= OUR VISION (dark) ================= */}
      <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
        {/* subtle floating grain dots */}
        <div className="pointer-events-none absolute right-10 top-14 h-2 w-2 rounded-full bg-orange-400/60" />
        <div className="pointer-events-none absolute right-24 top-28 h-1.5 w-1.5 rounded-full bg-orange-400/40" />
        <div className="pointer-events-none absolute right-16 bottom-20 h-2 w-2 rounded-full bg-orange-400/50" />

        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Our Vision
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Better Food for Better Living.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
              Our vision is to build a trusted and diversified food company that
              creates better food choices for people across every stage of life.
              We see an opportunity to create food solutions for children, young
              adults, families, health-conscious consumers, and the elderly,
              recognizing that every stage of life comes with different
              nutritional needs and preferences.
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
              We want to make healthier and more thoughtful food choices easier
              to find, easier to enjoy, and easier to make part of everyday life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center"
          >
            <p className="font-display text-3xl font-bold leading-tight text-orange-400 sm:text-4xl lg:text-5xl">
              Different needs.
              <br />
              Different journeys.
              <br />
              One purpose —
              <br />
              Better Food for Better Living.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              What Makes Us Different
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              Building food brands with purpose.
            </h2>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.num}
                variants={cardItem}
                whileHover={{ y: -6 }}
                className={`group rounded-[1.75rem] border border-orange-500/30 bg-white p-8 shadow-[0_6px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_15px_40px_rgba(239,127,26,0.1)] ${item.span} ${
                  item.wide ? "lg:flex lg:items-center lg:gap-10" : ""
                }`}
              >
                <div className={item.wide ? "lg:w-2/5" : ""}>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-orange-500/90">
                      {item.num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/40 text-orange-500">
                      <item.icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="mt-6 font-baloo text-xl font-bold text-charcoal">
                    {item.title}
                  </h3>
                </div>
                <p className={`mt-4 text-sm leading-relaxed text-charcoal-400 ${item.wide ? "lg:mt-0 lg:flex-1" : ""}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOOD FOR EVERY STAGE OF LIFE ================= */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-7xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block text-sm font-bold uppercase tracking-[0.25em] text-orange-500"
          >
            Food for Every Stage of Life
          </motion.span>

          <div className="mt-10 flex gap-5 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
            {lifeStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-soft sm:w-auto"
              >
                <img
                  src={stage.img}
                  alt={stage.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
                    {stage.stage} — {stage.title}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* progress indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {lifeStages.map((s, i) => (
              <span
                key={s.title}
                className={`h-1.5 rounded-full transition-all ${
                  i === 0 ? "w-8 bg-orange-500" : "w-1.5 bg-orange-500/20"
                }`}
              />
            ))}
          </div>
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
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Indian spices"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-48 w-48 overflow-hidden rounded-3xl border-4 border-white shadow-soft sm:h-56 sm:w-56">
              <img
                src="https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?auto=format&fit=crop&w=800&q=80"
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
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Tradition + Innovation
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              Where Tradition Meets Innovation
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-400">
              India has a rich heritage of grains, ingredients, recipes, and food
              practices. We see an opportunity to combine this heritage with
              nutrition, food science, modern processing, and contemporary
              formats to create products that are relevant to today's consumers
              — food that carries the past forward without asking anyone to
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
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                Our Commitment
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
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
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
              Our Big Dream
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
              We aspire to grow beyond the brands we have today, continuously
              exploring new ideas, new categories, new products, and new
              possibilities through thoughtful innovation. Our ambition is not
              simply to grow bigger — it is to grow with purpose, create with
              responsibility, and make a lasting difference through food.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
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
            className="font-display text-3xl font-bold text-charcoal sm:text-4xl"
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
            <Button to="/brands" variant="primary" className="bg-orange-500 hover:bg-orange-600">
              Explore Our Brands
            </Button>
            <Button to="/contact" variant="outline" icon={false}>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}