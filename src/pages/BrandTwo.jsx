import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet,
  Clock,
  Heart,
  Repeat,
  ShieldCheck,
  Store,
  Users,
  PackageCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

// About section image (left side)
// Change the file name to your real image. Put it in src/assets/t2m/
import aboutImage from "../assets/t2m/about.png";

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

const clean = (text = "") =>
  text.replace(/\s*[\u2014\u2013]\s*/g, ", ");

const PRIMARY = brand.colors.primary;
const YELLOW = brand.colors.yellow;
const WHITE = brand.colors.white;
const DARK = "#241A33";

const DIFF_ICONS = [
  Wallet,
  Clock,
  Heart,
  Repeat,
  ShieldCheck,
  Store,
  Users,
  PackageCheck,
];

const eyebrow =
  "text-base font-extrabold uppercase tracking-[0.25em] sm:text-xl";

const PRODUCTS = [
  { name: "Wheel Rings", image: product1 },
  { name: "Onion Rings", image: product2 },
  { name: "Kara Boondi", image: product3 },
  { name: "Murmura Mixture", image: product4 },
  { name: "Vamapoosa", image: product5 },
  { name: "Madras Mixture", image: product6 },
  { name: "Chekodi(Spicy)", image: product7 },
  { name: "Garlic Mixture", image: product8 },
  { name: "Salted Peanuts", image: product9 },
  { name: "Spiced Peanuts", image: product10 },
  { name: "Chikodi(Salted)", image: product11 },
  { name: "Ribbon Pakoda", image: product12 },
  { name: "Popcorn", image: product13 },
  { name: "Potato Chips(Salted)", image: product14 },
  { name: "Potato Chips(Magic Masala)", image: product15 },
  { name: "Potato Chips(Tomato)", image: product16 },
  { name: "Makka Chura", image: product17 },
  { name: "Murukku", image: product18 },
  { name: "Star Murukku", image: product19 },
];

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

export default function BrandTwo() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const visibleProducts = showAllProducts
    ? PRODUCTS
    : PRODUCTS.slice(0, 4);

  const aboutParagraphs = clean(brand.about).split("\n\n");
  const offerParagraphs = clean(brand.whatWeOffer).split("\n\n");

  const taglineParts = brand.tagline
    .split(". ")
    .map((s) => s.replace(/\.$/, ""));

  return (
    <>
      <Seo
        title={`${brand.name} | ${brand.tagline}`}
        description={clean(brand.description)}
      />

      {/* =====================================================
          SECTION 1: HERO
      ===================================================== */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: PRIMARY,
          minHeight: "62vh",
        }}
      >
        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-8
            px-6
            py-16
            lg:grid-cols-2
            lg:px-12
            lg:py-20
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white opacity-70">
              {brand.number}. {brand.name.toUpperCase()}
            </p>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {taglineParts.map((part, i) => (
                <span key={i}>
                  <span
                    style={{
                      color: i === 1 ? YELLOW : WHITE,
                    }}
                  >
                    {part}.
                  </span>

                  {i < taglineParts.length - 1 && <br />}
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
                style={{
                  backgroundColor: YELLOW,
                  color: DARK,
                }}
              >
                EXPLORE {brand.name.toUpperCase()}
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
                OUR SNACKS →
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — HERO LOGO (smaller, sits lower so the top never gets cut)
              ================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="relative flex items-center justify-center pt-8 lg:min-h-[480px] lg:translate-y-6 lg:pt-16"
          >
            <motion.img
              src={brand.heroImage}
              alt={`${brand.name} Indian Snacks`}
              className="
                h-auto
                w-full
                max-w-[260px]
                max-h-[32vh]
                object-contain

                sm:max-w-[340px]
                sm:max-h-[38vh]

                lg:max-w-[420px]
                lg:max-h-[44vh]
              "
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      <CurveDivider
        fromColor={PRIMARY}
        toColor={WHITE}
      />

      {/* =====================================================
          SECTION 2: ABOUT T2M
      ===================================================== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div>
            <h2
              className="text-4xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl lg:leading-[1.0]"
              style={{ color: DARK }}
            >
              India Loves Its
              <br />
              <span style={{ color: PRIMARY }}>
                Snacks.
              </span>
            </h2>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.35)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl"
            >
              <motion.img
                src={aboutImage}
                alt="Indian snacks collage"
                className="h-[220px] w-full object-cover sm:h-[320px]"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: `linear-gradient(to top, ${YELLOW}AA, transparent)`,
                }}
              />
            </motion.div>
          </div>

          <div
            className="border-l-4 pl-6 sm:pl-8"
            style={{
              borderColor: YELLOW,
            }}
          >
            <p
              className={eyebrow}
              style={{
                color: PRIMARY,
              }}
            >
              ABOUT {brand.name.toUpperCase()}
            </p>

            <h3
              className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-5xl sm:leading-[1.05]"
              style={{
                color: DARK,
              }}
            >
              Familiar Flavours.
              <br />
              Modern Standards.
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

      {/* =====================================================
          SECTION 3: WHAT WE OFFER
      ===================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: PRIMARY,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className={eyebrow}
            style={{
              color: YELLOW,
            }}
          >
            WHAT WE OFFER
          </motion.p>

          <motion.h2
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
              delay: 0.08,
            }}
            className="mx-auto mb-8 mt-4 max-w-4xl text-3xl font-extrabold text-white sm:text-5xl"
          >
            Snacking Made for Everyday Life.
          </motion.h2>

          {offerParagraphs.map((p, i) => (
            <motion.p
              key={i}
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
                delay: 0.15 + i * 0.1,
              }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white opacity-85 sm:text-lg"
              style={{
                marginTop:
                  i === 0 ? 0 : "1.25rem",
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      <CurveDivider
        fromColor={PRIMARY}
        toColor={WHITE}
      />

      {/* =====================================================
          SECTION 4: OUR PURPOSE
      ===================================================== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p
            className={eyebrow}
            style={{
              color: PRIMARY,
            }}
          >
            OUR PURPOSE
          </p>

          <div className="mt-5 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.1] sm:text-6xl sm:leading-[1.05] lg:text-7xl"
                style={{
                  color: DARK,
                }}
              >
                Good Snacking.
                <br />
                Made Accessible.
              </h2>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: `${PRIMARY}0A`,
              }}
            >
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {clean(brand.purpose)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5: MARKET FOCUS
      ===================================================== */}
      <section
        className="py-14 sm:py-20"
        style={{
          backgroundColor: `${PRIMARY}0A`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p
                className={eyebrow}
                style={{
                  color: PRIMARY,
                }}
              >
                MARKET FOCUS
              </p>

              <h2
                className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-5xl sm:leading-[1.05]"
                style={{
                  color: DARK,
                }}
              >
                Built for the
                <br />
                Everyday Indian Market.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {clean(brand.marketFocus)}
              </p>
            </div>

            <div>
              <p
                className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] sm:text-base"
                style={{
                  color: PRIMARY,
                }}
              >
                OUR DISTRIBUTION ECOSYSTEM
              </p>

              <div className="flex flex-col gap-2">
                {brand.distributionChain.map(
                  (step, i) => (
                    <motion.div
                      key={step}
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
                        delay: i * 0.1,
                      }}
                      className="flex flex-col items-start"
                    >
                      <div
                        className="w-full rounded-full px-4 py-3 text-center text-sm font-extrabold tracking-widest text-white sm:px-6 sm:py-4 sm:text-base"
                        style={{
                          backgroundColor: PRIMARY,
                        }}
                      >
                        {step.toUpperCase()}
                      </div>

                      {i <
                        brand.distributionChain.length -
                          1 && (
                        <div className="flex w-full justify-center py-1">
                          <span
                            className="text-2xl font-extrabold"
                            style={{
                              color: YELLOW,
                            }}
                          >
                            ↓
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6: WHAT MAKES T2M DIFFERENT
      ===================================================== */}
      <section
        className="py-14 sm:py-20"
        style={{
          backgroundColor: PRIMARY,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
            <div>
              <h2 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl">
                What Makes {brand.name} Different
              </h2>

              <div
                className="mt-4 h-1 w-14 rounded-full"
                style={{
                  backgroundColor: YELLOW,
                }}
              />

              <p className="mt-5 text-base text-white opacity-80 sm:text-lg">
                Traditional Indian taste.
                <br />
                Modern manufacturing standards.
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="relative mt-8 overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <img
                  src={brand.cardImage}
                  alt={`${brand.name} Snacks`}
                  className="h-40 w-full object-cover opacity-80 sm:h-52"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {brand.differentiators.map(
                (word, i) => {
                  const Icon =
                    DIFF_ICONS[
                      i % DIFF_ICONS.length
                    ];

                  return (
                    <motion.div
                      key={word}
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
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      transition={{
                        delay: i * 0.07,
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-5 text-center text-[11px] font-extrabold tracking-widest shadow-md sm:gap-3 sm:px-4 sm:py-7 sm:text-sm"
                      style={{
                        backgroundColor: WHITE,
                        color: PRIMARY,
                      }}
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full sm:h-11 sm:w-11"
                        style={{
                          backgroundColor: `${PRIMARY}14`,
                        }}
                      >
                        <Icon size={20} />
                      </span>

                      {word.toUpperCase()}
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      <CurveDivider
        fromColor={PRIMARY}
        toColor={WHITE}
      />

      {/* =====================================================
          SECTION 7: PRODUCTS
      ===================================================== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p
                className={eyebrow}
                style={{
                  color: PRIMARY,
                }}
              >
                OUR PRODUCTS
              </p>

              <h2
                className="mt-3 text-3xl font-extrabold sm:text-5xl"
                style={{
                  color: PRIMARY,
                }}
              >
                Snacks India Trusts, Bite After Bite.
              </h2>
            </div>

            <span
              className="rounded-full px-5 py-2 text-xs font-extrabold tracking-widest sm:text-sm"
              style={{
                backgroundColor: `${PRIMARY}0F`,
                color: PRIMARY,
              }}
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
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      i < 4
                        ? i * 0.08
                        : (i - 4) * 0.06,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-auto w-full"
                  />

                  <h3
                    className="mt-2 text-center text-sm font-extrabold leading-tight sm:mt-3 sm:text-lg"
                    style={{
                      color: PRIMARY,
                    }}
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
                onClick={() =>
                  setShowAllProducts((v) => !v)
                }
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-extrabold tracking-wider text-white shadow-md transition hover:opacity-90 sm:px-8 sm:text-sm"
                style={{
                  backgroundColor: PRIMARY,
                }}
              >
                {showAllProducts ? (
                  <>
                    VIEW LESS PRODUCTS
                    <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    VIEW MORE PRODUCTS
                    <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          SECTION 8: VISION
      ===================================================== */}
      <section
        className="py-16 sm:py-24"
        style={{
          backgroundColor: YELLOW,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p
                className={eyebrow}
                style={{
                  color: PRIMARY,
                }}
              >
                OUR VISION
              </p>

              <h2
                className="mt-4 text-3xl font-extrabold leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-6xl"
                style={{
                  color: PRIMARY,
                }}
              >
                Millions of Consumers.
                <br />
                One Trusted Snacking Brand.
              </h2>
            </div>

            <div>
              <p
                className="text-lg leading-relaxed sm:text-xl"
                style={{
                  color: PRIMARY,
                }}
              >
                {clean(brand.vision)}
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block rounded-full px-8 py-3.5 text-sm font-extrabold tracking-widest text-white transition hover:opacity-90 sm:text-base"
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

      {/* =====================================================
          SECTION 9: T2M PROMISE
      ===================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className={eyebrow}
            style={{
              color: PRIMARY,
            }}
          >
            {brand.name.toUpperCase()} PROMISE
          </motion.p>

          <motion.h2
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
              delay: 0.1,
            }}
            className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-6xl"
            style={{
              color: DARK,
            }}
          >
            "{clean(brand.promise)}"
          </motion.h2>

          <motion.div
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
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 16,
            }}
            className="mx-auto mt-10 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-lg"
            style={{
              border: `3px solid ${PRIMARY}`,
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-36 w-36 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Get in touch to explore distribution and partnership opportunities."
        secondary={{
          label: "All Brands",
          to: "/brands",
        }}
      />
    </>
  );
}