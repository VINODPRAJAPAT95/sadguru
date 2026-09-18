import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Target, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[3];

// Ahaarsutra palette — pulled straight from the logo
const PRIMARY = "#6C2EB5";
const ORANGE = "#F0871E";
const WHITE = "#FFFFFF";
const DARK = "#241A33";

const VALUE_ICONS = [Stethoscope, Target, Sparkles];

const approachParagraphs = brand.approach.split("\n\n");
const approachIntro = approachParagraphs[0];

const approachFlow = approachParagraphs[1]
  .replace(/^.*?:\s*/, "")
  .split("→")
  .map((s) => s.trim());

const philosophyParagraphs = brand.philosophy.split("\n\n");
const whoWeServeParagraphs = brand.whoWeServe.split("\n\n");

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
  const aboutParagraphs = brand.about.split("\n\n");

  return (
    <>
      <Seo
        title={`${brand.name} | ${brand.tagline}`}
        description={brand.description}
      />

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative overflow-hidden border-y-4"
        style={{
          backgroundColor: WHITE,
          borderColor: PRIMARY,
          minHeight: "62vh",
        }}
      >
        {/* Soft background gradient */}
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{
            background: `linear-gradient(
              135deg,
              transparent 40%,
              ${ORANGE}12 100%
            )`,
          }}
        />

        {/* Decorative orange shape */}
        <div
          className="absolute bottom-0 left-0 h-48 w-64 rounded-full opacity-10"
          style={{
            background: ORANGE,
            transform: "translate(-30%, 30%)",
          }}
        />

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
              style={{
                color: DARK,
                opacity: 0.7,
              }}
            >
              {brand.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="!rounded-full !font-extrabold !tracking-wider hover:!opacity-90"
                style={{
                  backgroundColor: ORANGE,
                  color: WHITE,
                }}
              >
                DISCOVER {brand.name.toUpperCase()}
              </Button>

              <Link
                to="/contact"
                className="rounded-full border-2 px-7 py-3 text-sm font-extrabold tracking-wider transition hover:bg-purple-50"
                style={{
                  color: PRIMARY,
                  borderColor: PRIMARY,
                }}
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
            <div
              className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl"
              style={{
                border: `2px solid ${PRIMARY}20`,
              }}
            >
              <img
                src={brand.heroImage}
                alt={brand.name}
                className="h-auto w-full max-h-[46vh] object-cover"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: `linear-gradient(
                    to top,
                    ${PRIMARY}55,
                    transparent
                  )`,
                }}
              />
            </div>

            {/* Logo badge */}
            <div
              className="absolute -left-4 -top-4 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg"
              style={{
                border: `2px solid ${PRIMARY}30`,
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-12 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 2: ABOUT ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <h2
              className="text-6xl font-extrabold leading-[1.0]"
              style={{ color: DARK }}
            >
              "Ahaar" + "Sutra"{" "}
              <br />
              <span style={{ color: PRIMARY }}>
                Food with a Guiding Principle.
              </span>
              <span style={{ color: ORANGE }}>—</span>
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
                className="h-[320px] w-full object-cover"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: `linear-gradient(
                    to top,
                    ${ORANGE}AA,
                    transparent
                  )`,
                }}
              />
            </motion.div>
          </div>

          <div
            className="border-l-4 pl-8"
            style={{ borderColor: ORANGE }}
          >
            <p
              className="text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: PRIMARY }}
            >
              ABOUT {brand.name.toUpperCase()}
            </p>

            <h3
              className="mt-4 text-4xl font-extrabold leading-[1.05]"
              style={{ color: DARK }}
            >
              Nutrition Science.
              <br />
              Mindful Eating.
            </h3>

            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 leading-relaxed text-slate-600 first:mt-5"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PHILOSOPHY ── */}
      <section
        className="relative overflow-hidden py-16"
        style={{ backgroundColor: PRIMARY }}
      >
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
          <p
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: ORANGE }}
          >
            OUR PHILOSOPHY
          </p>

          <h2 className="mb-6 mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Nutrition Is Not One-Size-Fits-All.
          </h2>

          {philosophyParagraphs.map((p, i) => (
            <p
              key={i}
              className="max-w-2xl leading-relaxed text-white opacity-75"
              style={{
                marginTop: i === 0 ? 0 : "1rem",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 4: OUR CONSUMER ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: PRIMARY }}
          >
            OUR CONSUMER
          </p>

          <div className="mt-4 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="text-5xl font-extrabold leading-[1.05]"
                style={{ color: DARK }}
              >
                Eat with Awareness.
                <br />
                Choose with Purpose.
              </h2>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: `${PRIMARY}0A`,
              }}
            >
              {whoWeServeParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-slate-600"
                  style={{
                    marginTop: i === 0 ? 0 : "1rem",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR APPROACH ── */}
      <section
        className="relative py-20"
        style={{
          backgroundColor: `${PRIMARY}0A`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">

            {/* LEFT SIDE — STICKY */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p
                className="text-xs font-extrabold uppercase tracking-[0.25em]"
                style={{ color: ORANGE }}
              >
                OUR APPROACH
              </p>

              <h2
                className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl"
                style={{ color: DARK }}
              >
                Purpose First.
                <br />
                Formulated with Expertise.
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-slate-600">
                {approachIntro}
              </p>

              <div
                className="mt-8 h-1 w-16 rounded-full"
                style={{
                  backgroundColor: ORANGE,
                }}
              />

              <p
                className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em]"
                style={{ color: PRIMARY }}
              >
                THE {brand.name.toUpperCase()} APPROACH
              </p>
            </div>

            {/* RIGHT SIDE — STACKING CARDS */}
            <div className="relative">
              {approachFlow.map((step, i) => (
                <div
                  key={step}
                  className="relative"
                  style={{
                    height: "300px",
                  }}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                    }}
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
                      style={{
                        color: WHITE,
                        opacity: 0.07,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Step label */}
                    <span
                      className="relative text-xs font-extrabold uppercase tracking-[0.25em]"
                      style={{
                        color: ORANGE,
                      }}
                    >
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Step title */}
                    <p
                      className="relative mt-4 max-w-md text-2xl font-extrabold leading-tight tracking-wide sm:text-3xl"
                      style={{
                        color: WHITE,
                      }}
                    >
                      {step}
                    </p>

                    {/* Accent */}
                    <div
                      className="mt-7 h-1 w-14 rounded-full"
                      style={{
                        backgroundColor: ORANGE,
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: VALUES ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: PRIMARY }}
          >
            WHAT MAKES {brand.name.toUpperCase()} DIFFERENT
          </p>

          <h2
            className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.1]"
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
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  className="rounded-2xl p-7 shadow-sm"
                  style={{
                    backgroundColor: `${PRIMARY}0A`,
                  }}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${ORANGE}1A`,
                      color: ORANGE,
                    }}
                  >
                    <Icon size={22} />
                  </span>

                  <h3
                    className="mt-4 text-lg font-extrabold"
                    style={{ color: DARK }}
                  >
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AREAS OF FOCUS ── */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundColor: PRIMARY,
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
              }}
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
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <p
              className="text-xs font-extrabold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
            >
              AREAS OF FOCUS
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
              Purposeful Food Solutions
            </h2>

            <div
              className="mx-auto mt-3 h-1 w-12 rounded-full"
              style={{
                backgroundColor: ORANGE,
              }}
            />

            <p className="mt-5 text-white opacity-70">
              Across multiple wellness categories.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brand.categories.map(({ name }, i) => {
              const styles = [
                {
                  bg: WHITE,
                  color: PRIMARY,
                },
                {
                  bg: "transparent",
                  color: ORANGE,
                  border: `2px solid ${ORANGE}`,
                },
                {
                  bg: ORANGE,
                  color: WHITE,
                },
                {
                  bg: "transparent",
                  color: WHITE,
                  border: `2px solid ${WHITE}`,
                },
                {
                  bg: WHITE,
                  color: PRIMARY,
                },
                {
                  bg: ORANGE,
                  color: WHITE,
                },
              ];

              const s = styles[i % styles.length];

              return (
                <motion.div
                  key={name}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.04,
                  }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="flex flex-col items-center justify-center gap-1 rounded-2xl px-3 py-7 text-center text-[11px] font-extrabold leading-tight tracking-wide shadow-lg"
                  style={{
                    backgroundColor: s.bg,
                    color: s.color,
                    border: s.border || "none",
                  }}
                >
                  {name.toUpperCase()}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CurveDivider fromColor={PRIMARY} toColor={WHITE} />

      {/* ── SECTION 8: VISION ── */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundColor: ORANGE,
        }}
      >
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
              <p
                className="text-xs font-extrabold uppercase tracking-[0.25em]"
                style={{ color: PRIMARY }}
              >
                OUR VISION
              </p>

              <h2
                className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl"
                style={{ color: PRIMARY }}
              >
                A Trusted Bridge to
                <br />
                Meaningful Nutrition.
              </h2>
            </div>

            <div>
              <p
                className="leading-relaxed"
                style={{ color: PRIMARY }}
              >
                {brand.vision}
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block rounded-full px-8 py-3 text-sm font-extrabold tracking-widest text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: PRIMARY,
                  }}
                >
                  DISCOVER {brand.name.toUpperCase()} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PROMISE ── */}
      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="absolute bottom-0 left-0 h-32 w-48 rounded-full opacity-30"
          style={{
            backgroundColor: ORANGE,
            transform: "translate(-30%, 30%)",
          }}
        />

        <div
          className="absolute right-0 top-0 h-32 w-48 rounded-full opacity-15"
          style={{
            backgroundColor: PRIMARY,
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.25em]"
            style={{ color: PRIMARY }}
          >
            {brand.name.toUpperCase()} PROMISE
          </p>

          <h2
            className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl"
            style={{ color: DARK }}
          >
            "{brand.promise}"
          </h2>

          <div
            className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg"
            style={{
              border: `3px solid ${PRIMARY}`,
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-14 w-14 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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