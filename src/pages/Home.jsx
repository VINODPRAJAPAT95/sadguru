import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  ShowerHead,
  Sprout,
  ThumbsUp,
  ChefHat,
  Salad,
  BadgeCheck,
  Zap,
} from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ValueCard from "../components/ValueCard";
import BrandHorizontalScroll from "../components/BrandHorizontalScroll";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import StatCounter from "../components/StatCounter";
import values from "../data/values";
import faqs from "../data/faqs";
import { STATS } from "../config";

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
    desc: "Every recipe is built around wholesome ingredients that support everyday energy and wellbeing for the whole family.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "Rigorous checks at every stage ensure consistent taste, texture, and safety in every single pack we prepare.",
  },
  {
    icon: Zap,
    title: "Smart Convenience",
    desc: "Ready when you are — food that fits modern routines without compromising on freshness or nutrition.",
  },
];

const philosophyItems = [
  {
    Icon: ShowerHead,
    title: "Minimal Processing",
    desc: "We use traditional methods to limit over-processing and retain nutrients, keeping our food wholesome, balanced, and nourishing.",
  },
  {
    Icon: Sprout,
    title: "Clean Ingredients",
    desc: "We source ingredients responsibly and avoid additives or preservatives, making sure every product is pure, balanced, and trustworthy.",
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

const headlineLine = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.13, ease: "easeOut" },
  }),
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

const stackContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.1 },
  },
};

const valuesCardVariant = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stackedCardVariant = {
  hidden: { opacity: 0, x: -100, scale: 0.85 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Seo
        title="Sadguru Food Processing Pvt. Ltd. | Wholesome Food, Thoughtfully Prepared"
        description="A multi-brand food company crafting wholesome, minimally processed food rooted in tradition and modern nutrition."
      />

     {/* HERO */}
<section
  ref={heroRef}
  className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
>
  <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
    <img
      src={heroBg}
      alt="Freshly prepared wholesome snacks and food"
      className="h-full w-full object-cover"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
    <div className="absolute inset-0 bg-charcoal/45" />
  </motion.div>

  <motion.div
    style={{ y: textY, opacity: textOpacity }}
    className="container-px relative mx-auto w-full max-w-6xl py-28 text-center"
  >
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm sm:tracking-[0.35em]"
    >
      Premium Food Processing
    </motion.span>

    <h1 className="mx-auto mt-6 max-w-5xl text-balance break-words font-display text-4xl font-black uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
      {["Wholesome Food,", "Thoughtfully Prepared", "for Healthier Living"].map((line, i) => (
        <motion.span
          key={line}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={headlineLine}
          className={`block ${i === 1 ? "text-orange-500" : "text-white"}`}
        >
          {line}
        </motion.span>
      ))}
    </h1>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-4"
    >
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Button to="/brands" variant="primary" className="bg-orange-500 hover:bg-orange-600">
          Explore Our Brands
        </Button>
      </motion.div>
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
</section>

      {/* SHORT ABOUT — overflow-hidden safe rakha, koi sticky/scroll animation nahi hai */}
      <section className="section-py overflow-hidden">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -bottom-6 -left-6 h-32 w-32 border-2 border-orange-200/60" />
            <div className="absolute -right-5 -top-5 h-24 w-24 bg-orange-500/10" />

            <div className="group relative overflow-hidden">
              <img
                src="https://industry-ai.com/wp-content/uploads/2025/07/FMCG-Blogs-1-Home.jpg"
                alt="Preparing wholesome food"
                className="relative z-10 h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[460px]"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 left-8 z-20 h-1 w-24 bg-orange-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <SectionTitle
              label="Who We Are"
              title="A Family of Food Brands Built on Trust"
              description="Sadguru Food Processing Pvt. Ltd. produces wholesome, minimally processed foods rooted in tradition and aligned with modern nutritional needs. We believe food should nourish the body, be made with care, and maintain its flavor without extra processing or shortcuts."
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

      {/* WHAT WE DO — original overflow-hidden already tha, safe hai */}
      <section className="section-py relative overflow-hidden bg-charcoal">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="container-px relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
              What We Do
            </span>
            <h2 className="font-baloo mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Simple, Nourishing Food{" "}
              <span className="text-orange-500">for Everyday Life</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              We prepare a broad selection of food products designed to fit today's lifestyle
              while keeping traditional values in mind. Our foods support everyday nourishment,
              are suitable for the entire family, and are made with careful attention to
              quality, taste, and consistency.
            </p>
          </motion.div>

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
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-orange-500/60 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <item.icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-baloo mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES / VISION / MISSION — overflow-hidden safe hai, isme sticky nahi, sirf whileInView hai */}
      <section className="section-py bg-orange-50/40 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            label="What Drives Us"
            title="Values, Vision & Mission"
            description="These principles shape every decision — from sourcing an ingredient to sealing a pack."
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={stackContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -10% 0px" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-stretch"
          >
            <motion.div
              variants={valuesCardVariant}
              className="relative z-30 min-h-[300px] overflow-hidden rounded-3xl shadow-soft lg:col-span-3"
            >
              <img
                src="https://i.pinimg.com/736x/bc/37/09/bc3709bd42e05ff5bfe5e99dd3cfce4b.jpg"
                alt="Freshly made snacks and chips"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/15" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                  <Gem size={26} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-baloo text-4xl font-bold text-white">Values</h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-white/90">
                    We believe in making food with integrity, attention, and consistency. By
                    combining time-tested techniques with mindful processing, we deliver
                    products that nourish, delight, and earn family trust.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={stackedCardVariant}
              whileHover={{ y: -6 }}
              className="relative z-20 min-h-[300px] rounded-3xl bg-gradient-to-br from-[#3a2418] to-[#241209] p-6 shadow-soft lg:col-span-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/25 text-white">
                <Eye size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-baloo mt-5 text-2xl font-bold text-white">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Our goal is to make clean, wholesome food an easy choice for every household
                while bringing the goodness of tradition into modern life.
              </p>
            </motion.div>

            <motion.div
              variants={stackedCardVariant}
              whileHover={{ y: -6 }}
              className="relative z-10 min-h-[300px] rounded-3xl bg-gradient-to-br from-[#3a2418] to-[#241209] p-6 shadow-soft lg:col-span-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/25 text-white">
                <Crosshair size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-baloo mt-5 text-2xl font-bold text-white">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                To make wholesome, carefully crafted foods part of your daily life. We focus on
                quality, taste, and your family's health in every bite.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY — overflow-hidden safe hai, sirf whileInView, koi sticky nahi */}
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
                <h3 className="font-baloo mt-5 text-xl font-bold leading-snug text-charcoal">
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

      {/* BRANDS STICKY SCROLL — NO overflow-hidden yahan! isme sticky + useScroll dono hain */}
      <section className="bg-white">

        <div className="section-py container-px mx-auto max-w-7xl">
          <SectionTitle
            label="Our Brands"
            title="Four Brands, Every Kitchen Covered"
            description="Scroll to explore each brand and the story behind it."
            align="center"
            className="mx-auto"
          />
        </div>

        <BrandHorizontalScroll />

      </section>

      {/* WHY CHOOSE US — NO overflow-hidden yahan! isme sticky cards hain (position: sticky) */}
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
                <SectionTitle
                  label="Why Choose Us"
                  title="Why Choose Sadguru Food Processing Pvt. Ltd."
                  description="Every product from Sadguru Food Processing Pvt. Ltd. follows a transparent and disciplined process. From sourcing quality ingredients to delivering consistent products, we focus on trust, care, and excellence at every stage."
                />

                <div className="mt-10 flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-orange-500" />
                  <span className="text-sm font-medium tracking-wide text-charcoal-400">
                    Quality • Trust • Care
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
                  <div
                    className="mb-8 flex min-h-[360px] flex-col justify-between rounded-[2rem] border-2 border-orange-500 bg-[#FFF9EF] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_15px_50px_rgba(239,127,26,0.12)] sm:p-10"
                  >

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-12 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* FAQ — overflow-hidden safe hai, koi sticky/scroll animation nahi */}
      <section className="section-py bg-white overflow-hidden">
        <div className="container-px mx-auto max-w-4xl">
          <SectionTitle
            label="At Sadguru Food Processing Pvt. Ltd., consistency and care guide every step:"
            title="Our Approach to Quality Food Production"
            align="center"
            className="mb-14 mx-auto"
          />
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}