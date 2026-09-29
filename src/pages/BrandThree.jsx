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

// About section image (left side)
// Change the folder and file name to your real image path.
import aboutImage from "../assets/miletveda/about.jpg";

const brand = brands[2];

const clean = (text = "") => text.replace(/\s*[\u2014\u2013]\s*/g, ", ");

const PRIMARY = brand.colors.primary;
const GREEN = brand.colors.green;
const GOLD = brand.colors.gold;
const WHITE = brand.colors.white;
const DARK = "#2E2013";
const HERO_BG = "#A8754F";
const CREAM = "#F7F1E8";

const STANDS_FOR_ICONS = { Sprout, HeartPulse, Lightbulb, Clock, Brain, Recycle };
const AUDIENCE_ICONS = [HeartPulse, Briefcase, Users, Dumbbell, Sprout, Wheat];

const eyebrow =
  "text-base font-extrabold uppercase tracking-[0.25em] sm:text-xl";

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
  const aboutParagraphs = clean(brand.about).split("\n\n");
  const philosophyParagraphs = clean(brand.philosophy).split("\n\n");

  return (
    <>
      <Seo
        title={`${brand.name} | ${brand.tagline}`}
        description={clean(brand.description)}
      />

      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: HERO_BG, minHeight: "62vh" }}
      >
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
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
              {clean(brand.description)}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = PRIMARY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = WHITE;
                }}
              >
                OUR PRODUCTS →
              </Link>
            </div>
          </motion.div>

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

      <CurveDivider fromColor={HERO_BG} toColor={WHITE} />

      {/* SECTION 2: ABOUT */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] shadow-xl"
          >
            <motion.img
              src={aboutImage}
              alt={`${brand.name} grains`}
              className="h-[380px] w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{
                background: `linear-gradient(to top, ${GOLD}AA, transparent)`,
              }}
            />
          </motion.div>

          <div className="border-l-4 pl-6 sm:pl-8" style={{ borderColor: GOLD }}>
            <p className={eyebrow} style={{ color: PRIMARY }}>
              ABOUT {brand.name.toUpperCase()}
            </p>

            <h2
              className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
              style={{ color: DARK }}
            >
              Goodness of Tradition.
              <br />
              <span style={{ color: PRIMARY }}>Reimagined for Today.</span>
            </h2>

            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-base leading-relaxed text-slate-600 first:mt-6 sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={eyebrow}
            style={{ color: GOLD }}
          >
            OUR PHILOSOPHY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl"
          >
            Better Food Choices.
            <br />
            <span style={{ color: GOLD }}>Made Simple.</span>
          </motion.h2>

          {philosophyParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white opacity-85 sm:text-lg"
              style={{ marginTop: i === 0 ? "2rem" : "1.25rem" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 4: WHAT THE BRAND REPRESENTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            WHAT {brand.name.toUpperCase()} REPRESENTS
          </p>

          <h2
            className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-6xl"
            style={{ color: DARK }}
          >
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
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="rounded-2xl border p-6 sm:p-7"
                  style={{ borderColor: `${PRIMARY}33` }}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${GREEN}18`, color: GREEN }}
                  >
                    <Icon size={22} />
                  </span>

                  <h3
                    className="mt-4 text-lg font-extrabold sm:text-xl"
                    style={{ color: PRIMARY }}
                  >
                    {title}
                  </h3>

                  <p className="mt-2 text-base leading-relaxed text-slate-500">
                    {clean(desc)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO WE SERVE */}
      <section className="py-20" style={{ backgroundColor: `${PRIMARY}0A` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            WHO WE SERVE
          </p>

          <h2
            className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl"
            style={{ color: DARK }}
          >
            For Healthier People.
            <br />
            <span style={{ color: PRIMARY }}>For a Brighter Future.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {clean(brand.whoWeServe)} The brand can appeal to:
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
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? `${PRIMARY}15` : `${GOLD}18`,
                      color: i % 2 === 0 ? PRIMARY : GOLD,
                    }}
                  >
                    <Icon size={22} />
                  </span>

                  <p className="text-sm font-bold leading-snug text-slate-600">
                    {label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRODUCTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            OUR PRODUCTS
          </p>

          <h2
            className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-6xl"
            style={{ color: PRIMARY }}
          >
            Millets, Made for Everyday Life.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 35px -10px rgba(0,0,0,0.25)",
                }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
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
                    className="text-xs font-extrabold uppercase tracking-widest"
                    style={{ color: GOLD }}
                  >
                    {p.category}
                  </p>

                  <h3
                    className="mt-1 text-lg font-extrabold sm:text-xl"
                    style={{ color: PRIMARY }}
                  >
                    {p.name}
                  </h3>

                  <p className="mt-2 text-base leading-relaxed text-slate-500">
                    {clean(p.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR VISION */}
      <section
        className="py-20 sm:py-24"
        style={{ backgroundColor: CREAM }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            OUR VISION FOR {brand.name.toUpperCase()}
          </p>

          <h2
            className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl"
            style={{ color: DARK }}
          >
            A Recognizable
            <br />
            Millet-Based Food Brand.
          </h2>

          <p
            className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed sm:text-xl"
            style={{ color: DARK }}
          >
            {clean(brand.vision)}
          </p>

          <div className="mt-9">
            <Link
              to="/contact"
              className="inline-block rounded-full px-8 py-3.5 text-sm font-extrabold tracking-widest text-white transition hover:opacity-90 sm:text-base"
              style={{ backgroundColor: PRIMARY }}
            >
              DISCOVER {brand.name.toUpperCase()} →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: GALLERY */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: `${GREEN}0D` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            GALLERY
          </p>

          <h2
            className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl"
            style={{ color: DARK }}
          >
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
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
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

      {/* SECTION 9: PROMISE */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={eyebrow}
            style={{ color: PRIMARY }}
          >
            {brand.name.toUpperCase()} PROMISE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-6xl"
            style={{ color: DARK }}
          >
            "{clean(brand.promise)}"
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 16,
            }}
            className="mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg sm:h-36 sm:w-36"
            style={{ border: `3px solid ${PRIMARY}` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
          </motion.div>
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Find our millet-based snacks and staples near you, or enquire about bulk orders."
        secondary={{
          label: "All Brands",
          to: "/brands",
        }}
      />
    </>
  );
}