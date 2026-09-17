import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Sparkles,
  Smile,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Quote,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[0];

const ICONS = {
  Leaf,
  Sparkles,
  Smile,
  Clock,
  ShieldCheck,
  HeartHandshake,
};

// Mumma brand palette
const PINK = "#DF1C51";
const BLUE = "#3CA9E0";
const YELLOW = "#FCE700";
const NAVY = "#233B50";
const SKY = "#F4FBFE";
const SOFT_PINK = "#FFF1F6";

const values = [
  { title: "Nutritious", desc: "Packed with essential vitamins and minerals.", icon: Leaf },
  { title: "Tasty", desc: "Kids love the natural taste.", icon: Smile },
  { title: "Safe", desc: "No harmful additives or preservatives.", icon: ShieldCheck },
  { title: "Convenient", desc: "Easy for busy parents.", icon: Clock },
  { title: "Trusted", desc: "Loved by families across the country.", icon: HeartHandshake },
  { title: "Growing", desc: "Supports healthy growth and development.", icon: Sparkles },
];

const audiences = [
  { title: "Toddlers", age: "1–3 years", image: "/images/mumma/toddler.jpg" },
  { title: "Growing Kids", age: "4–10 years", image: "/images/mumma/growing-kids.jpg" },
  { title: "School Going", age: "10+ years", image: "/images/mumma/school-going.jpg" },
  { title: "Health-Conscious", age: "Parents", image: "/images/mumma/parents.jpg" },
];

export default function BrandOne() {
  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFF1F6]">
        <div className="absolute -left-10 top-24 h-28 w-28 rounded-full bg-[#FCE700] sm:h-40 sm:w-40" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-[100px] bg-[#3CA9E0]/20" />
        <div className="container-px relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-8 py-28 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-xl"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: PINK }}>
              Nutrition for a brighter tomorrow
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] sm:text-7xl" style={{ color: PINK }}>
              Healthy Bites
              <br />
              <span style={{ color: BLUE }}>for Happy Kids</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              Nutritious, tasty and trusted — because every child deserves the best start in life.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" className="!rounded-full !bg-[#3CA9E0] px-7 hover:!bg-[#258dbf]">
                Explore Products
              </Button>
              <Link
                to="/contact"
                className="rounded-full border-2 px-7 py-3 text-sm font-bold transition hover:bg-white"
                style={{ borderColor: PINK, color: PINK }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[390px] lg:min-h-[520px]"
          >
            <div className="absolute right-5 top-5 h-64 w-64 rounded-full bg-[#FCE700] sm:h-80 sm:w-80" />
            <div className="absolute bottom-5 left-0 h-36 w-36 rounded-full bg-[#3CA9E0]" />
            <img
              src={brand.heroImage}
              alt={brand.name}
              className="relative z-10 mx-auto h-full min-h-[390px] w-full object-contain object-center"
            />
            <div className="absolute right-0 top-0 z-20 hidden h-28 w-28 rounded-full bg-[#FCE700] p-5 text-center sm:block">
              <span className="text-4xl">☀</span>
              <span className="block text-xs font-bold" style={{ color: PINK }}>Good Food<br />Happy Kids</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr_0.8fr]">
          <div>
            <SectionTitle label="About Mumma" title={<>The Brand Parents <span style={{ color: PINK }}>Trust</span></>} />
            {brand.about.split("\n\n").slice(0, 1).map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 leading-relaxed text-slate-500"
              >
                {para}
              </motion.p>
            ))}
            <div className="mt-7 h-1 w-10 rounded-full bg-[#FCE700]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img src={brand.heroImage} alt="Mumma nutrition" className="h-[310px] w-full object-cover" />
          </motion.div>

          <div className="space-y-7">
            {[
              ["Natural Ingredients", "Pure, wholesome and carefully sourced.", Leaf, "#E8F7E9"],
              ["Great Taste", "Because kids love what's good for them.", HeartHandshake, "#FFF0F6"],
              ["Trusted Quality", "Safety and nutrition in every bite.", ShieldCheck, "#EAF7FF"],
            ].map(([title, desc, Icon, bg], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: bg, color: i === 1 ? PINK : BLUE }}>
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold" style={{ color: NAVY }}>{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-py overflow-hidden bg-[#F4FBFE]">
        <div className="container-px mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-4 h-72 w-72 rounded-full bg-[#FCE700]/70" />
            <img src={brand.heroImage} alt="Happy child enjoying nutrition" className="relative z-10 h-[350px] w-full rounded-3xl object-cover" />
          </motion.div>
          <div>
            <SectionTitle label="Our Philosophy" title={<>Every Bite Matters During <span style={{ color: BLUE }}>Childhood</span></>} />
            {brand.philosophy.split("\n\n").map((para, i) => (
              <p key={i} className="mt-5 leading-relaxed text-slate-600">{para}</p>
            ))}
            <div className="mt-7 h-1 w-10 rounded-full bg-[#FCE700]" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle label="What Makes Mumma Special" title="Goodness in Every Bite" align="center" className="mx-auto mb-12" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {values.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: [SOFT_PINK, "#FFF8DB", "#EAF7FF"][i % 3], color: [PINK, "#E4B600", BLUE][i % 3] }}>
                  <Icon size={23} />
                </span>
                <h3 className="mt-4 font-bold" style={{ color: NAVY }}>{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-py bg-[#FFFDF8]">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.4fr]">
          <div>
            <SectionTitle label="Who We Serve" title={<>Made for Every Stage of <span style={{ color: PINK }}>Childhood</span></>} />
            <p className="mt-6 leading-relaxed text-slate-500">
              Mumma is for every parent who wants the best for their child — whether it's their first bite or their next big milestone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {audiences.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <img src={item.image || brand.heroImage} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-sm font-bold" style={{ color: NAVY }}>{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.age}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / CTA */}
      <section className="relative overflow-hidden bg-[#DF1C51] py-12">
        <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full border-8 border-[#FCE700]/40" />
        <div className="absolute right-8 top-5 text-4xl text-white">♡</div>
        <div className="container-px relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold text-white/80">Healthy Kids, Brighter Futures</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Let's Build a Healthier<br />Tomorrow <span style={{ color: YELLOW }}>Together</span></h2>
          </div>
          <Button to="/contact" variant="primary" className="!rounded-full !bg-[#FCE700] !text-[#233B50] hover:!bg-white">
            Explore Products →
          </Button>
        </div>
      </section>

      <CTASection
        title="Discover More About Mumma"
        description="Get in touch to find a stockist near you or explore partnership opportunities."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}
