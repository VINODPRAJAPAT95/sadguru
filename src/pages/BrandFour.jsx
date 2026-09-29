import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Target, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[3];

// Removes em dashes / en dashes from any text and replaces them with a comma
const clean = (text = "") => text.replace(/\s*[\u2014\u2013]\s*/g, ", ");

// Ahaarsutra palette, pulled straight from the logo
const PRIMARY = "#6C2EB5";
const ORANGE = "#F0871E";
const WHITE = "#FFFFFF";
const DARK = "#241A33";

const VALUE_ICONS = [Stethoscope, Target, Sparkles];

// Shared eyebrow (small label above headings)
const eyebrow =
  "text-base font-extrabold uppercase tracking-[0.25em] sm:text-xl";

const approachParagraphs = brand.approach.split("\n\n");
const approachIntro = clean(approachParagraphs[0]);

const approachFlow = approachParagraphs[1]
  .replace(/^.*?:\s*/, "")
  .split("→")
  .map((s) => s.trim());

const philosophyParagraphs = clean(brand.philosophy).split("\n\n");
const whoWeServeParagraphs = clean(brand.whoWeServe).split("\n\n");

// Soft rounded divider between sections
const CurveDivider = ({ fromColor, toColor }) => (
  <div
    className="relative h-16 overflow-hidden"
    style={{ backgroundColor: toColor }}
  >
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

export default function BrandFour() {
  const aboutParagraphs = clean(brand.about).split("\n\n");

  return (
    <>
      <Seo
        title={`${brand.name} | ${brand.tagline}`}
        description={clean(brand.description)}
      />

      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden border-y-4"
        style={{
          backgroundColor: WHITE,
          borderColor: PRIMARY,
          minHeight: "62vh",
        }}
      >
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: PRIMARY }}
            >
              {brand.number}. {brand.name.toUpperCase()}
            </p>

            <h1
              className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
              style={{ color: DARK }}
            >
              Food with{" "}
              <span style={{ color: ORANGE }}>Purpose.</span>
              <br />
              Wellness in Every Bite.
            </h1>

            <p
              className="mt-5 max-w-md text-base leading-relaxed"
              style={{ color: DARK, opacity: 0.7 }}
            >
              {clean(brand.description)}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="!rounded-full !font-extrabold !tracking-wider hover:!opacity-90"
                style={{ backgroundColor: ORANGE, color: WHITE }}
              >
                DISCOVER {brand.name.toUpperCase()}
              </Button>

              <Link
                to="/contact"
                className="rounded-full border-2 px-7 py-3 text-sm font-extrabold tracking-wider transition hover:bg-purple-50"
                style={{ color: PRIMARY, borderColor: PRIMARY }}
              >
                OUR PRODUCTS →
              </Link>
            </div>
          </motion.div>

          {/* Right image (plain image only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center"
          >
            <img
              src={brand.heroImage}
              alt={brand.name}
              className="h-auto w-full max-h-[46vh] object-contain lg:max-h-[52vh]"
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 2: ABOUT */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div>
            <h2
              className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
              style={{ color: DARK }}
            >
              "Ahaar" + "Sutra"{" "}
              <br className="hidden sm:block" />
              <span style={{ color: PRIMARY }}>
                Food with a Guiding Principle.
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src={brand.cardImage}
                alt="Ahaarsutra purposeful nutrition"
                className="h-[200px] w-full object-cover sm:h-[260px] lg:h-[300px]"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: `linear-gradient(to top, ${ORANGE}AA, transparent)`,
                }}
              />
            </motion.div>
          </div>

          <div
            className="border-l-4 pl-6 sm:pl-8"
            style={{ borderColor: ORANGE }}
          >
            <p className={eyebrow} style={{ color: PRIMARY }}>
              ABOUT {brand.name.toUpperCase()}
            </p>

            <h3
              className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-5xl sm:leading-[1.05]"
              style={{ color: DARK }}
            >
              Nutrition Science.
              <br />
              Mindful Eating.
            </h3>

            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-base leading-relaxed text-slate-600 first:mt-5 sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={eyebrow}
            style={{ color: ORANGE }}
          >
            OUR PHILOSOPHY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mb-8 mt-4 max-w-4xl text-3xl font-extrabold text-white sm:text-5xl"
          >
            Nutrition Is Not One-Size-Fits-All.
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

      {/* SECTION 4: OUR CONSUMER */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            OUR CONSUMER
          </p>

          <div className="mt-5 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.1] sm:text-6xl sm:leading-[1.05] lg:text-7xl"
                style={{ color: DARK }}
              >
                Eat with Awareness.
                <br />
                Choose with Purpose.
              </h2>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: `${PRIMARY}0A` }}
            >
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

      {/* SECTION 5: OUR APPROACH */}
      <section
        className="relative py-14 sm:py-20"
        style={{ backgroundColor: `${PRIMARY}0A` }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* LEFT SIDE: STICKY */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className={eyebrow} style={{ color: PRIMARY }}>
                OUR APPROACH
              </p>

              <h2
                className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-6xl sm:leading-[1.05]"
                style={{ color: DARK }}
              >
                Purpose First.
                <br />
                Formulated with Expertise.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                {approachIntro}
              </p>

              <div
                className="mt-8 h-1 w-16 rounded-full"
                style={{ backgroundColor: ORANGE }}
              />

              <p
                className="mt-5 text-sm font-extrabold uppercase tracking-[0.2em] sm:text-base"
                style={{ color: PRIMARY }}
              >
                THE {brand.name.toUpperCase()} APPROACH
              </p>
            </div>

            {/* RIGHT SIDE: STACKING CARDS */}
            <div className="relative">
              {approachFlow.map((step, i) => (
                <div
                  key={step}
                  className="relative"
                  style={{ height: "300px" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="sticky top-28 flex min-h-[220px] flex-col justify-center overflow-hidden rounded-[2rem] px-8 py-10 shadow-2xl sm:px-10"
                    style={{
                      zIndex: i + 1,
                      backgroundColor: PRIMARY,
                      border: `3px solid ${WHITE}`,
                    }}
                  >
                    {/* Large background number */}
                    <span
                      className="pointer-events-none absolute right-5 top-0 text-[110px] font-black leading-none"
                      style={{ color: WHITE, opacity: 0.07 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Step label */}
                    <span
                      className="relative text-sm font-extrabold uppercase tracking-[0.25em]"
                      style={{ color: ORANGE }}
                    >
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Step title */}
                    <p
                      className="relative mt-4 max-w-md text-2xl font-extrabold leading-tight tracking-wide sm:text-3xl"
                      style={{ color: WHITE }}
                    >
                      {step}
                    </p>

                    {/* Accent */}
                    <div
                      className="mt-7 h-1 w-14 rounded-full"
                      style={{ backgroundColor: ORANGE }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALUES */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            WHAT MAKES {brand.name.toUpperCase()} DIFFERENT
          </p>

          <h2
            className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-6xl"
            style={{ color: DARK }}
          >
            Food and Nutrition Thinking, Together.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {brand.values.map(({ title, desc }, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-7 shadow-sm sm:p-8"
                  style={{ backgroundColor: `${PRIMARY}0A` }}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ORANGE}1A`, color: ORANGE }}
                  >
                    <Icon size={22} />
                  </span>

                  <h3
                    className="mt-4 text-xl font-extrabold sm:text-2xl"
                    style={{ color: DARK }}
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

      {/* SECTION 7: AREAS OF FOCUS */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={eyebrow} style={{ color: ORANGE }}>
              AREAS OF FOCUS
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl">
              Purposeful Food Solutions
            </h2>

            <div
              className="mx-auto mt-4 h-1 w-14 rounded-full"
              style={{ backgroundColor: ORANGE }}
            />

            <p className="mt-5 text-base text-white opacity-80 sm:text-lg">
              Across multiple wellness categories.
            </p>
          </motion.div>

          {/* Category grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-5">
            {brand.categories.map(({ name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="flex min-h-[110px] items-center justify-center rounded-2xl px-4 py-6 text-center text-xs font-extrabold leading-snug tracking-wide shadow-lg sm:min-h-[130px] sm:text-sm"
                style={{ backgroundColor: WHITE, color: PRIMARY }}
              >
                {name.toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* SECTION 8: VISION */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: ORANGE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={eyebrow} style={{ color: PRIMARY }}>
                OUR VISION
              </p>

              <h2
                className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-6xl sm:leading-[1.05]"
                style={{ color: PRIMARY }}
              >
                A Trusted Bridge to
                <br />
                Meaningful Nutrition.
              </h2>
            </div>

            <div>
              <p
                className="text-lg leading-relaxed sm:text-xl"
                style={{ color: PRIMARY }}
              >
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

      {/* SECTION 9: PROMISE */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className={eyebrow} style={{ color: PRIMARY }}>
            {brand.name.toUpperCase()} PROMISE
          </p>

          <h2
            className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-6xl"
            style={{ color: DARK }}
          >
            "{clean(brand.promise)}"
          </h2>

          <div
            className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg"
            style={{ border: `3px solid ${PRIMARY}` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Get in touch to explore partnership and wellness formulation opportunities."
        secondary={{
          label: "All Brands",
          to: "/brands",
        }}
      />
    </>
  );
}