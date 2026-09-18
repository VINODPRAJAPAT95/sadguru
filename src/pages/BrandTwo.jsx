import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet, Clock, Heart, Repeat, ShieldCheck, Store, Users, PackageCheck,
  ChevronDown, ChevronUp,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

// Product images
import product1 from "../assets/t2m/product1.png";
import product2 from "../assets/t2m/product2.png";
import product3 from "../assets/t2m/product3.png";
import product4 from "../assets/t2m/product4.png";
import product5 from "../assets/t2m/product5.png";
import product6 from "../assets/t2m/product6.png";
import product7 from "../assets/t2m/product7.png";
import product8 from "../assets/t2m/product8.png";
import product9 from "../assets/t2m/product9.png";
import product10 from "../assets/t2m/product10.png";
import product11 from "../assets/t2m/product11.png";
import product12 from "../assets/t2m/product12.png";
import product13 from "../assets/t2m/product13.png";
import product14 from "../assets/t2m/product14.png";
import product15 from "../assets/t2m/product15.png";
import product16 from "../assets/t2m/product16.png";
import product17 from "../assets/t2m/product17.png";
import product18 from "../assets/t2m/product18.png";
import product19 from "../assets/t2m/product19.png";

const brand = brands[1];

const PRIMARY = brand.colors.primary; // #5B2A9D — purple
const YELLOW = brand.colors.yellow;   // #FBBF09
const WHITE = brand.colors.white;     // #FEFEFE
const DARK = "#241A33";

const DIFF_ICONS = [Wallet, Clock, Heart, Repeat, ShieldCheck, Store, Users, PackageCheck];

// All 19 T2M products — edit name/desc to match your real product copy
const PRODUCTS = [
  { name: "Wheel Rings", image: product1, desc: "Crunchy gram-flour noodles with a peppery kick." },
  { name: "Onion Rings", image: product2, desc: "Roasted moong dal, lightly spiced and crisp." },
  { name: "Kara Boondi", image: product3, desc: "Crunchy peanuts coated in a tangy spice mix." },
  { name: "Murmura Mixture", image: product4, desc: "A bold, hearty namkeen mix with a Punjabi twist." },
  { name: "Vamapoosa", image: product5, desc: "The classic sweet-and-tangy party mix." },
  { name: "Madras Mixture", image: product6, desc: "Spicy, fine sev with an authentic Ratlami flavour." },
  { name: "Chekodi(Spicy)", image: product7, desc: "Light, crispy chivda made with roasted corn flakes." },
  { name: "Garlic Mixture", image: product8, desc: "Thin, crunchy bhujia in the traditional Bikaneri style." },
  { name: "Salted Peanuts", image: product9, desc: "Roasted chana dal, salted and mildly spiced." },
  { name: "Spiced Peanuts", image: product10, desc: "A festive nine-ingredient snack mix." },
  { name: "Chikodi(Salted)", image: product11, desc: "Crunchy, protein-rich soya sticks with a spicy coating." },
  { name: "Ribbon Pakoda", image: product12, desc: "Crispy banana chips tossed in classic masala." },
  { name: "Popcorn", image: product13, desc: "Potato chips with a bold Punjabi tadka seasoning." },
  { name: "Potato Chips(Salted)", image: product14, desc: "Traditional sesame and jaggery brittle." },
  { name: "Potato Chips(Magic Masala)", image: product15, desc: "Ready-to-cook, protein-packed chilla mix." },
  { name: "Potato Chips(Tomato)", image: product16, desc: "A tangy roasted chickpea street-food classic." },
  { name: "Makka Chura", image: product17, desc: "A rich mix of cashews and crunchy namkeen." },
  { name: "Murukku", image: product18, desc: "Sweet-and-tangy sun-dried mango fruit leather." },
  { name: "Star Murukku", image: product19, desc: "Crisp, spiced puris perfect for evening chai." },
];

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

export default function BrandTwo() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const visibleProducts = showAllProducts ? PRODUCTS : PRODUCTS.slice(0, 4);
  const aboutParagraphs = brand.about.split("\n\n");
  const offerParagraphs = brand.whatWeOffer.split("\n\n");
  const taglineParts = brand.tagline.split(". ").map((s) => s.replace(/\.$/, ""));

  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* ── SECTION 1: HERO (shortened, matches BrandOne) ── */}
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
                  <span style={{ color: i === 1 ? YELLOW : WHITE }}>{part}.</span>
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
                EXPLORE {brand.name.toUpperCase()}
              </Button>
              <Link
                to="/contact"
                className="rounded-full border-2 border-white px-7 py-3 text-sm font-extrabold tracking-wider text-white transition hover:bg-white"
                style={{ color: WHITE }}
                onMouseEnter={(e) => { e.currentTarget.style.color = PRIMARY; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = WHITE; }}
              >
                OUR SNACKS →
              </Link>
            </div>
          </motion.div>

          {/* Right image — smaller, with a subtle floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              src={brand.heroImage}
              alt={`${brand.name} Indian Snacks`}
              className="h-auto w-full max-w-[260px] max-h-[28vh] object-contain sm:max-w-[320px] sm:max-h-[32vh]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 2: ABOUT T2M ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Left */}
          <div>
            <h2 className="text-6xl font-extrabold leading-[1.0]" style={{ color: DARK }}>
              India Loves Its{" "}
              <br />
              <span style={{ color: PRIMARY }}>Snacks.</span>
              <span style={{ color: YELLOW }}>—</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl"
            >
              <motion.img
                src={brand.cardImage}
                alt="Indian snacks collage"
                className="h-[320px] w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: `linear-gradient(to top, ${YELLOW}AA, transparent)` }}
              />
            </motion.div>
          </div>

          {/* Right */}
          <div className="border-l-4 pl-8" style={{ borderColor: YELLOW }}>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
              ABOUT {brand.name.toUpperCase()}
            </p>
            <h3 className="mt-4 text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
              Familiar Flavours.
              <br />
              Modern Standards.
            </h3>
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600 first:mt-5">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE OFFER ── */}
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
            WHAT WE OFFER
          </p>
          <h2 className="mb-6 mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Snacking Made for Everyday Life.
          </h2>
          {offerParagraphs.map((p, i) => (
            <p key={i} className="max-w-2xl leading-relaxed text-white opacity-75" style={{ marginTop: i === 0 ? 0 : "1rem" }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 4: OUR PURPOSE ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
            OUR PURPOSE
          </p>
          <div className="mt-4 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
                Good Snacking.
                <br />
                Made Accessible.
              </h2>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: `${PRIMARY}0A` }}
            >
              <p className="leading-relaxed text-slate-600">
                {brand.purpose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MARKET FOCUS ── */}
      <section className="py-20" style={{ backgroundColor: `${PRIMARY}0A` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: YELLOW }}>
                MARKET FOCUS
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05]" style={{ color: DARK }}>
                Built for the
                <br />
                Everyday Indian Market.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                {brand.marketFocus}
              </p>
            </div>

            {/* Right distribution flow */}
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: PRIMARY }}>
                OUR DISTRIBUTION ECOSYSTEM
              </p>
              <div className="flex flex-col gap-2">
                {brand.distributionChain.map((step, i) => (
                  <motion.div
                    key={step}
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
                      {step.toUpperCase()}
                    </div>
                    {i < brand.distributionChain.length - 1 && (
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

      {/* ── SECTION 6: WHAT MAKES T2M DIFFERENT ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Left heading */}
            <div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                What Makes {brand.name} Different
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full" style={{ backgroundColor: YELLOW }} />
              <p className="mt-5 text-white opacity-70">
                Traditional Indian taste.
                <br />
                Modern manufacturing standards.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative mt-8 overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <img
                  src={brand.cardImage}
                  alt={`${brand.name} Snacks`}
                  className="h-52 w-full object-cover opacity-80"
                />
              </motion.div>
            </div>

            {/* Right keyword grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {brand.differentiators.map((word, i) => {
                const styles = [
                  { bg: WHITE, color: PRIMARY },
                  { bg: "transparent", color: YELLOW, border: `2px solid ${YELLOW}` },
                  { bg: YELLOW, color: DARK },
                  { bg: "transparent", color: WHITE, border: `2px solid ${WHITE}` },
                  { bg: WHITE, color: PRIMARY },
                  { bg: YELLOW, color: DARK },
                  { bg: "transparent", color: YELLOW, border: `2px solid ${YELLOW}` },
                  { bg: WHITE, color: PRIMARY },
                ];
                const s = styles[i % styles.length];
                const Icon = DIFF_ICONS[i % DIFF_ICONS.length];
                return (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 220, damping: 18 }}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl px-4 py-5 text-center text-xs font-extrabold tracking-widest shadow-md"
                    style={{
                      backgroundColor: s.bg,
                      color: s.color,
                      border: s.border || "none",
                    }}
                  >
                    <Icon size={18} />
                    {word.toUpperCase()}
                  </motion.div>
                );
              })}
            </div>
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
                Snacks India Trusts, Bite After Bite.
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
                Millions of Consumers.
                <br />
                One Trusted Snacking Brand.
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

      {/* ── SECTION 9: T2M PROMISE (no image) ── */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: PRIMARY }}
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

          {/* Logo mark */}
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
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Get in touch to explore distribution and partnership opportunities."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}