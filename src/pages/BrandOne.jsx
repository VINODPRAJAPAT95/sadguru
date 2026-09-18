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
  Package,
  Eye,
  Sprout,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

// Product images — replace the path below with wherever your product photos live
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

// All 12 Mumma products — edit name/category/desc to match your real product copy
const PRODUCTS = [
  { name: "Ragi Cookies", category: "Cookies", image: product1, desc: "Wholesome ragi-based cookies, lightly sweetened for growing kids." },
  { name: "Multigrain Puffs", category: "Puffs", image: product2, desc: "Crunchy multigrain puffs made with real grains, no maida." },
  { name: "Fruit & Nut Bars", category: "Bars", image: product3, desc: "Chewy bars packed with dried fruits and nuts, no refined sugar." },
  { name: "Veggie Crackers", category: "Crackers", image: product4, desc: "Baked, not fried — crackers made with real vegetables." },
  { name: "Millet Bites", category: "Bites", image: product5, desc: "Bite-sized millet snacks for an energy-packed tiffin box." },
  { name: "Protein Balls", category: "Energy Bites", image: product6, desc: "No-bake protein balls made with nuts, seeds and jaggery." },
  { name: "Oats Cookies", category: "Cookies", image: product7, desc: "Soft-baked oats cookies with a touch of honey." },
  { name: "Banana Chips", category: "Chips", image: product8, desc: "Baked banana chips, a wholesome alternative to fried snacks." },
  { name: "Quinoa Puffs", category: "Puffs", image: product9, desc: "Light, airy quinoa puffs for a protein-rich crunch." },
  { name: "Almond Bars", category: "Bars", image: product10, desc: "Roasted almond bars bound with dates, no added sugar." },
  { name: "Sprouted Mix", category: "Trail Mix", image: product11, desc: "A crunchy mix of sprouted grains, nuts and seeds." },
  { name: "Wholegrain Rusks", category: "Rusks", image: product12, desc: "Crisp wholegrain rusks, perfect with a glass of milk." },
];

// Mumma brand palette — pulled from data
const PRIMARY = brand.colors.primary; // #DF1C51
const BLUE = brand.colors.blue;       // #3CA9E0
const YELLOW = brand.colors.yellow;   // #FCE700
const WHITE = brand.colors.white;     // #FEFEFE
const DARK = "#233B50";

const STANDS_FOR_ICONS = { Leaf, Sparkles, Smile, Clock, ShieldCheck, HeartHandshake };
const VALUE_ICONS = [Package, Eye, Sprout];

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
  const aboutParagraphs = brand.about.split("\n\n");
  const philosophyParagraphs = brand.philosophy.split("\n\n");
  const whoWeServeParagraphs = brand.whoWeServe.split("\n\n");
  const taglineParts = brand.tagline.split(". ").map((s) => s.replace(/\.$/, ""));

  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* ── SECTION 1: HERO (shortened) ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: PRIMARY, minHeight: "62vh" }}
      >
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{ background: `linear-gradient(135deg, transparent 40%, ${YELLOW}22 100%)` }}
        />
        <div
          className="absolute bottom-0 left-0 h-48 w-64 rounded-full opacity-10"
          style={{ background: YELLOW, transform: "translate(-30%, 30%)" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white opacity-70">
              {brand.number}. {brand.name.toUpperCase()}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {taglineParts.map((part, i) => (
                <span key={i}>
                  <span style={{ color: i === taglineParts.length - 1 ? YELLOW : WHITE }}>
                    {part}.
                  </span>
                  {i < taglineParts.length - 1 && <br />}
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
              alt={`${brand.name} — mother and child`}
              className="h-auto w-full max-h-[46vh] object-contain"
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 2: ABOUT MUMMA ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Left */}
          <div>
            <h2 className="text-6xl font-extrabold leading-[1.0]" style={{ color: DARK }}>
              Love. Care.{" "}
              <br />
              <span style={{ color: PRIMARY }}>Nourishment.</span>
              <span style={{ color: YELLOW }}>—</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src={brand.cardImage}
                alt="Wholesome nutrition ingredients"
                className="h-[320px] w-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: `linear-gradient(to top, ${YELLOW}AA, transparent)` }}
              />
            </motion.div>
          </div>

          {/* Right */}
          <div className="border-l-4 pl-8" style={{ borderColor: YELLOW }}>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
              ABOUT {brand.name.toUpperCase()}
            </p>
            <h3 className="mt-4 text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
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

      {/* ── SECTION 3: OUR PHILOSOPHY ── */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: PRIMARY }}>
        <div className="pointer-events-none absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                left: `${i * 15}%`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
            OUR PHILOSOPHY
          </p>
          <h2 className="mb-6 mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Every Bite Matters.
          </h2>
          {philosophyParagraphs.map((p, i) => (
            <p
              key={i}
              className="max-w-2xl leading-relaxed text-white opacity-75"
              style={{ marginTop: i === 0 ? 0 : "1rem" }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 4: WHO WE SERVE ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
            WHO WE SERVE
          </p>
          <div className="mt-4 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
                For Growing Kids.
                <br />
                For Caring Parents.
              </h2>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: `${PRIMARY}0A` }}>
              {whoWeServeParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-600" style={{ marginTop: i === 0 ? 0 : "1rem" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW WE MAKE IT (flow) ── */}
      <section className="py-20" style={{ backgroundColor: `${PRIMARY}0A` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
                HOW WE MAKE IT
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
                Small Batches.
                <br />
                Real Ingredients. No Shortcuts.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Because when kids eat well, they dream bigger, learn better and grow stronger.
              </p>
            </div>

            {/* Right process flow */}
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
                OUR PROCESS
              </p>
              <div className="flex flex-col gap-2">
                {brand.values.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div
                      className="w-full rounded-full px-6 py-4 text-center font-extrabold tracking-widest text-white"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      {step.title.toUpperCase()}
                    </div>
                    {i < brand.values.length - 1 && (
                      <div className="flex w-full justify-center py-1">
                        <span className="text-2xl font-extrabold" style={{ color: YELLOW }}>↓</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHAT MAKES MUMMA DIFFERENT (no image, redesigned) ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: PRIMARY }}>
        {/* decorative background rings instead of a photo */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: `${100 + i * 70}px`,
                height: `${100 + i * 70}px`,
                right: `${-5 + i * 4}%`,
                top: `${10 + i * 6}%`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
              OUR DIFFERENCE
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
              What Makes {brand.name} Different
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full" style={{ backgroundColor: YELLOW }} />
            <p className="mt-5 text-white opacity-70">
              Thoughtful nutrition, made for growing children.
            </p>
          </motion.div>

          {/* Keyword grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brand.standsFor.map(({ title, icon }, i) => {
              const styles = [
                { bg: WHITE, color: PRIMARY },
                { bg: "transparent", color: YELLOW, border: `2px solid ${YELLOW}` },
                { bg: YELLOW, color: DARK },
                { bg: "transparent", color: WHITE, border: `2px solid ${WHITE}` },
                { bg: WHITE, color: PRIMARY },
                { bg: YELLOW, color: DARK },
              ];
              const s = styles[i % styles.length];
              const Icon = STANDS_FOR_ICONS[icon] || Leaf;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-7 text-center text-xs font-extrabold tracking-widest shadow-lg"
                  style={{
                    backgroundColor: s.bg,
                    color: s.color,
                    border: s.border || "none",
                  }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: s.color === WHITE || s.color === YELLOW ? `${s.color}22` : `${PRIMARY}14`,
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  {title.toUpperCase()}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 7: PRODUCTS ── */}
      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.06]"
          style={{ backgroundColor: PRIMARY }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full opacity-[0.08]"
          style={{ backgroundColor: YELLOW }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
                OUR PRODUCTS
              </p>
              <h2 className="mt-3 text-4xl font-extrabold" style={{ color: DARK }}>
                Snacks Kids Love. Parents Trust.
              </h2>
            </div>
            <span
              className="rounded-full px-4 py-1.5 text-xs font-extrabold tracking-widest"
              style={{ backgroundColor: `${PRIMARY}0F`, color: PRIMARY }}
            >
              {PRODUCTS.length} PRODUCTS
            </span>
          </div>

          <motion.div
            layout
            className="mt-12 grid grid-cols-4 gap-3 sm:gap-6"
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
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-auto"
                  />
                  <h3 className="mt-2 text-center text-[11px] font-extrabold leading-tight sm:mt-3 sm:text-base" style={{ color: PRIMARY }}>
                    {p.name}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {PRODUCTS.length > 4 && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProducts((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-extrabold tracking-wider text-white shadow-md transition hover:opacity-90"
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

      {/* ── SECTION 8: VISION ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: YELLOW }}>
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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
                OUR VISION
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl" style={{ color: PRIMARY }}>
                A Trusted Household Name
                <br />
                in Children's Nutrition.
              </h2>
            </div>
            <div>
              <p className="leading-relaxed" style={{ color: PRIMARY }}>
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
          </div>
        </div>
      </section>

      {/* ── SECTION 9: MUMMA PROMISE ── */}
      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="absolute bottom-0 left-0 h-32 w-48 rounded-full opacity-30"
          style={{ backgroundColor: YELLOW, transform: "translate(-30%, 30%)" }}
        />
        <div
          className="absolute right-0 top-0 h-32 w-48 rounded-full opacity-15"
          style={{ backgroundColor: PRIMARY, transform: "translate(30%, -30%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
            {brand.name.toUpperCase()} PROMISE
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl" style={{ color: DARK }}>
            "{brand.promise}"
          </h2>

          {/* Mark, in place of a logo */}
          <div
            className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg"
            style={{ border: `3px solid ${PRIMARY}` }}
          >
            <Heart color={PRIMARY} size={40} />
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