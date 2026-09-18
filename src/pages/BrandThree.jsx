import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sprout, HeartPulse, Lightbulb, Clock, Brain, Recycle,
  Briefcase, Users, Dumbbell, Wheat,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[2];

const PRIMARY = brand.colors.primary;
const GREEN = brand.colors.green;
const GOLD = brand.colors.gold;
const WHITE = brand.colors.white;
const DARK = "#2E2013";

const STANDS_FOR_ICONS = { Sprout, HeartPulse, Lightbulb, Clock, Brain, Recycle };
const AUDIENCE_ICONS = [HeartPulse, Briefcase, Users, Dumbbell, Sprout, Wheat];

const CurveDivider = ({ fromColor, toColor }) => (
  <div className="relative h-16 overflow-hidden" style={{ backgroundColor: toColor }}>
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: fromColor,
        borderBottomLeftRadius: "50% 100%",
        borderBottomRightRadius: "50% 100%",
      }}
    />
  </div>
);

export default function BrandThree() {
  const aboutParagraphs = brand.about.split("\n\n");
  const philosophyParagraphs = brand.philosophy.split("\n\n");

  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: PRIMARY, minHeight: "62vh" }}
      >
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{ background: `linear-gradient(135deg, transparent 40%, ${GOLD}22 100%)` }}
        />
        <div
          className="absolute bottom-0 left-0 h-48 w-64 rounded-full opacity-10"
          style={{ background: GREEN, transform: "translate(-30%, 30%)" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white opacity-70">
              {brand.number}. {brand.name.toUpperCase()}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {brand.tagline.split(". ").map((line, i, arr) => (
                <span key={i}>
                  <span style={{ color: i === arr.length - 1 ? GOLD : WHITE }}>
                    {line}{i < arr.length - 1 ? "." : ""}
                  </span>
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white opacity-75">
              {brand.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="!rounded-full !font-extrabold !tracking-wider hover:!opacity-90"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                DISCOVER {brand.name.toUpperCase()}
              </Button>
              <Link
                to="/contact"
                className="rounded-full border-2 border-white px-7 py-3 text-sm font-extrabold tracking-wider text-white transition hover:bg-white"
                style={{ color: WHITE }}
                onMouseEnter={(e) => { e.currentTarget.style.color = PRIMARY; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = WHITE; }}
              >
                OUR PRODUCTS →
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE — single clean image, no clipping, no border, no overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center"
          >
            <img
              src={brand.heroImage}
              alt={brand.name}
              className="h-auto w-full max-w-[420px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 2: ABOUT ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] shadow-xl"
          >
            <motion.img
              src={brand.cardImage}
              alt={`${brand.name} grains`}
              className="h-[380px] w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: `linear-gradient(to top, ${GOLD}AA, transparent)` }}
            />
          </motion.div>

          <div className="border-l-4 pl-8" style={{ borderColor: GOLD }}>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
              ABOUT {brand.name.toUpperCase()}
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
              Goodness of Tradition.
              <br />
              <span style={{ color: PRIMARY }}>Reimagined for Today.</span>
            </h2>
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600 first:mt-5">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR PHILOSOPHY ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="pointer-events-none absolute inset-0 opacity-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                left: `${i * 18}%`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            OUR PHILOSOPHY
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            Better Food Choices.
            <br />
            <span style={{ color: GOLD }}>Made Simple.</span>
          </h2>
          {philosophyParagraphs.map((p, i) => (
            <p key={i} className="mx-auto mt-5 max-w-2xl leading-relaxed text-white opacity-80 first:mt-6">
              {p}
            </p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 4: WHAT [BRAND] REPRESENTS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            WHAT {brand.name.toUpperCase()} REPRESENTS
          </p>
          <h2 className="mt-3 text-4xl font-extrabold" style={{ color: DARK }}>
            Tradition. Nutrition. Innovation.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brand.standsFor.map(({ title, desc, icon }, i) => {
              const Icon = STANDS_FOR_ICONS[icon] || Sprout;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: `${PRIMARY}33` }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${GREEN}18`, color: GREEN }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold" style={{ color: PRIMARY }}>{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHO WE SERVE ── */}
      <section className="py-20" style={{ backgroundColor: `${PRIMARY}0A` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            WHO WE SERVE
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
            For Healthier People.
            <br />
            <span style={{ color: PRIMARY }}>For a Brighter Future.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
            {brand.whoWeServe} The brand can appeal to:
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {brand.audiences.map((label, i) => {
              const Icon = AUDIENCE_ICONS[i % AUDIENCE_ICONS.length];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? `${PRIMARY}15` : `${GOLD}18`,
                      color: i % 2 === 0 ? PRIMARY : GOLD,
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <p className="text-xs font-bold leading-snug text-slate-600">{label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PRODUCTS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            OUR PRODUCTS
          </p>
          <h2 className="mt-3 text-4xl font-extrabold" style={{ color: DARK }}>
            Millets, Made for Everyday Life.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(0,0,0,0.25)" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 20 }}
                className="overflow-hidden rounded-[1.75rem] shadow-md"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="h-48 w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <div className="p-5">
                  <p
                    className="text-[10px] font-extrabold uppercase tracking-widest"
                    style={{ color: GOLD }}
                  >
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold" style={{ color: PRIMARY }}>
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: OUR VISION ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: GOLD }}>
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                borderColor: PRIMARY,
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                right: `${5 + i * 8}%`,
                top: "50%",
                transform: `translateY(-50%) rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
            OUR VISION FOR {brand.name.toUpperCase()}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl" style={{ color: DARK }}>
            A Recognizable
            <br />
            Millet-Based Food Brand.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed" style={{ color: DARK }}>
            {brand.vision}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-full px-8 py-3 text-sm font-extrabold tracking-widest text-white transition hover:opacity-90"
              style={{ backgroundColor: PRIMARY }}
            >
              DISCOVER {brand.name.toUpperCase()} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: GALLERY ── */}
      <section className="py-16" style={{ backgroundColor: `${GREEN}0D` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: GREEN }}>
            GALLERY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold" style={{ color: DARK }}>
            A Closer Look at {brand.name}.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {brand.gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
                className="overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={src}
                  alt={`${brand.name} gallery ${i + 1}`}
                  className="h-40 w-full object-cover sm:h-48"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PROMISE ── */}
      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="absolute bottom-0 left-0 h-32 w-48 rounded-full opacity-30"
          style={{ backgroundColor: GOLD, transform: "translate(-30%, 30%)" }}
        />
        <div
          className="absolute right-0 top-0 h-32 w-48 rounded-full opacity-15"
          style={{ backgroundColor: PRIMARY, transform: "translate(30%, -30%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: GOLD }}
          >
            {brand.name.toUpperCase()} PROMISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl"
            style={{ color: DARK }}
          >
            "{brand.promise}"
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 16 }}
            className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg"
            style={{ border: `3px solid ${PRIMARY}` }}
          >
            <img src={brand.logo} alt={brand.name} className="h-14 w-14 object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <img
              src={brand.heroImage}
              alt={brand.name}
              className="h-[320px] w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}22, ${GOLD}22)` }}
            />
          </motion.div>
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Find our millet-based snacks and staples near you, or enquire about bulk orders."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}