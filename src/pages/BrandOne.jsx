import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Sparkles,
  Smile,
  Clock,
  ShieldCheck,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

// About section image: replace the path below with wherever your image lives
import aboutImg from "../assets/images/mumma-about.jpg";

// Product images: replace the path below with wherever your product photos live
import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";
import product5 from "../assets/products/product5.jpg";
import product6 from "../assets/products/product6.jpg";
import product7 from "../assets/products/product7.jpg";
import product8 from "../assets/products/product8.jpg";
import product9 from "../assets/products/product9.jpg";
import product10 from "../assets/products/product10.jpg";
import product11 from "../assets/products/product11.jpg";
import product12 from "../assets/products/product12.jpg";

const brand = brands[0];

// Removes em dashes / en dashes from any text and replaces them with a comma
const clean = (text = "") => text.replace(/\s*[\u2014\u2013]\s*/g, ", ");

// All 12 Mumma products
const PRODUCTS = [
  { name: "Ragi Cookies", image: product1 },
  { name: "Multigrain Puffs", image: product2 },
  { name: "Fruit & Nut Bars", image: product3 },
  { name: "Veggie Crackers", image: product4 },
  { name: "Millet Bites", image: product5 },
  { name: "Protein Balls", image: product6 },
  { name: "Oats Cookies", image: product7 },
  { name: "Banana Chips", image: product8 },
  { name: "Quinoa Puffs", image: product9 },
  { name: "Almond Bars", image: product10 },
  { name: "Sprouted Mix", image: product11 },
  { name: "Wholegrain Rusks", image: product12 },
];

// Mumma brand palette, pulled from data
const PRIMARY = brand.colors.primary; // #DF1C51
const YELLOW = brand.colors.yellow;   // #FCE700
const WHITE = brand.colors.white;     // #FEFEFE
const DARK = "#233B50";

const STANDS_FOR_ICONS = { Leaf, Sparkles, Smile, Clock, ShieldCheck, HeartHandshake };

// Shared eyebrow (small label above headings)
const eyebrow =
  "text-base font-extrabold uppercase tracking-[0.25em] sm:text-xl";

// Small decorative heart, used in place of a logo mark
const Heart = ({ color = PRIMARY, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
  </svg>
);

// Soft rounded divider between sections
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

export default function BrandOne() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const visibleProducts = showAllProducts ? PRODUCTS : PRODUCTS.slice(0, 4);
  const aboutParagraphs = clean(brand.about).split("\n\n");
  const philosophyParagraphs = clean(brand.philosophy).split("\n\n");
  const whoWeServeParagraphs = clean(brand.whoWeServe).split("\n\n");
  const taglineParts = brand.tagline.split(". ").map((s) => s.replace(/\.$/, ""));

  // Hero tagline:
  // White part: everything except the last 2 words (e.g. "Love.")
  const taglineWhite = taglineParts.slice(0, -2).map((s) => s + ".");
  // Yellow part: the last 2 words, each on its own line (e.g. "Care." / "Nourishment.")
  const taglineYellow = taglineParts.slice(-2).map((s) => s + ".");

  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={clean(brand.description)} />

      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: PRIMARY, minHeight: "60vh" }}
      >
        <div className="relative mx-auto grid min-h-[60vh] max-w-7xl items-center gap-8 px-6 pb-10 pt-10 lg:grid-cols-2 lg:px-12 lg:pb-12 lg:pt-14">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-2xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {taglineWhite.map((line) => (
                <span key={line}>
                  <span style={{ color: WHITE }}>{line}</span>
                  <br />
                </span>
              ))}
              {taglineYellow.map((line, i) => (
                <span key={line}>
                  <span style={{ color: YELLOW }}>{line}</span>
                  {i < taglineYellow.length - 1 && <br />}
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
                style={{ backgroundColor: YELLOW, color: DARK }}
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

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <img
              src={brand.heroImage}
              alt={`${brand.name} mother and child`}
              className="h-auto w-full max-h-[46vh] object-contain"
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 2: ABOUT MUMMA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
          {/* Left */}
          <div>
            <h2
              className="text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl lg:leading-[1.0]"
              style={{ color: DARK }}
            >
              Love. Care.{" "}
              <br />
              <span style={{ color: PRIMARY }}>Nourishment.</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src={aboutImg}
                alt="Wholesome nutrition ingredients"
                className="h-[220px] w-full object-cover sm:h-[320px]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: `linear-gradient(to top, ${YELLOW}AA, transparent)` }}
              />
            </motion.div>
          </div>

          {/* Right */}
          <div className="border-l-4 pl-6 sm:pl-8" style={{ borderColor: YELLOW }}>
            <p className={eyebrow} style={{ color: PRIMARY }}>
              ABOUT {brand.name.toUpperCase()}
            </p>
            <h3
              className="mt-4 text-2xl font-extrabold leading-[1.15] sm:text-4xl sm:leading-[1.05]"
              style={{ color: DARK }}
            >
              Wholesome Ingredients.
              <br />
              Grown-Up Standards.
            </h3>
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600 first:mt-5">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY (fully centered) */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={eyebrow}
            style={{ color: YELLOW }}
          >
            OUR PHILOSOPHY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mb-8 mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl"
          >
            Every Bite Matters.
          </motion.h2>
          {philosophyParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white opacity-85 sm:text-lg"
              style={{ marginTop: i === 0 ? 0 : "1.25rem" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 4: WHO WE SERVE */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            WHO WE SERVE
          </p>
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.1] sm:text-6xl sm:leading-[1.05] lg:text-7xl"
                style={{ color: DARK }}
              >
                For Growing Kids.
                <br />
                For Caring Parents.
              </h2>
            </div>
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: `${PRIMARY}0A` }}>
              {whoWeServeParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-slate-600 sm:text-lg"
                  style={{ marginTop: i === 0 ? 0 : "1rem" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR DIFFERENCE */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className={eyebrow} style={{ color: YELLOW }}>
              OUR DIFFERENCE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">
              What Makes {brand.name} Different
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full" style={{ backgroundColor: WHITE }} />
            <p className="mt-5 text-base text-white opacity-80 sm:text-lg">
              Thoughtful nutrition, made for growing children.
            </p>
          </motion.div>

          {/* Keyword grid: all boxes share the same white style */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {brand.standsFor.map(({ title, icon }, i) => {
              const Icon = STANDS_FOR_ICONS[icon] || Leaf;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-5 text-center text-[11px] font-extrabold tracking-widest shadow-lg sm:gap-3 sm:px-4 sm:py-7 sm:text-sm"
                  style={{ backgroundColor: WHITE, color: PRIMARY }}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full sm:h-11 sm:w-11"
                    style={{ backgroundColor: `${PRIMARY}14` }}
                  >
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={22} className="hidden sm:block" />
                  </span>
                  {title.toUpperCase()}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 7: PRODUCTS */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className={eyebrow} style={{ color: PRIMARY }}>
                OUR PRODUCTS
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl" style={{ color: PRIMARY }}>
                Snacks Kids Love. Parents Trust.
              </h2>
            </div>
            <span
              className="rounded-full px-5 py-2 text-xs font-extrabold tracking-widest sm:text-sm"
              style={{ backgroundColor: `${PRIMARY}0F`, color: PRIMARY }}
            >
              {PRODUCTS.length} PRODUCTS
            </span>
          </div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-6"
          >
            <AnimatePresence initial={false}>
              {visibleProducts.map((p, i) => (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, delay: i < 4 ? i * 0.08 : (i - 4) * 0.06 }}
                >
                  <img src={p.image} alt={p.name} className="h-auto w-full" />
                  <h3
                    className="mt-2 text-center text-sm font-extrabold leading-tight sm:mt-3 sm:text-lg"
                    style={{ color: PRIMARY }}
                  >
                    {p.name}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {PRODUCTS.length > 4 && (
            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAllProducts((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold tracking-wider text-white shadow-md transition hover:opacity-90 sm:px-8 sm:text-sm"
                style={{ backgroundColor: PRIMARY }}
              >
                {showAllProducts ? (
                  <>
                    VIEW LESS PRODUCTS <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    VIEW MORE PRODUCTS <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 8: VISION */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: YELLOW }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={eyebrow} style={{ color: PRIMARY }}>
                OUR VISION
              </p>
              <h2
                className="mt-4 text-3xl font-extrabold leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-6xl"
                style={{ color: PRIMARY }}
              >
                A Trusted Household Name
                <br />
                in Children's Nutrition.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed sm:text-xl" style={{ color: PRIMARY }}>
                {clean(brand.vision)}
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block rounded-full px-8 py-3.5 text-sm font-extrabold tracking-widest text-white transition hover:opacity-90 sm:text-base"
                  style={{ backgroundColor: PRIMARY }}
                >
                  DISCOVER {brand.name.toUpperCase()} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MUMMA PROMISE */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            {brand.name.toUpperCase()} PROMISE
          </p>
          <h2
            className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-6xl"
            style={{ color: DARK }}
          >
            "{clean(brand.promise)}"
          </h2>

          {/* Mark, in place of a logo */}
          <div
            className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg"
            style={{ border: `3px solid ${PRIMARY}` }}
          >
            <Heart color={PRIMARY} size={48} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Get in touch to find a stockist near you or explore partnership opportunities."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}