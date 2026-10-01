import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

export default function Brands() {
  return (
    <>
      <Seo
        title="Our Brands | Sadguru Food Processing Pvt. Ltd."
        description="Explore the four food brands owned and operated by Sadguru Food Processing Pvt. Ltd."
      />

      {/* top padding clears the fixed navbar (no hero on this page) */}
      <section className="bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
          {brands.map((brand, i) => {
            // Brands with their own palette (currently: Mumma) use their real
            // brand colors; the rest alternate charcoal / primary-50.
            const hasOwnColors = Boolean(brand.colors);
            const dark = hasOwnColors ? false : i % 2 === 0;
            // true  -> image on the left (desktop), false -> image on the right
            const imageFirst = dark || hasOwnColors;

            const cardBg = hasOwnColors ? "" : dark ? "bg-charcoal" : "bg-primary-50";
            const cardStyle = hasOwnColors ? { backgroundColor: brand.colors.primary } : undefined;

            const numberColor = hasOwnColors ? "text-white/30" : dark ? "text-primary/40" : "text-primary/50";
            const nameColor = hasOwnColors || dark ? "text-white" : "text-charcoal";
            const taglineColor = hasOwnColors ? "text-[#FCE700]" : dark ? "text-primary-300" : "text-primary-600";
            const descColor = hasOwnColors ? "text-white/70" : dark ? "text-white/60" : "text-charcoal-500";

            const ctaClasses = hasOwnColors
              ? "hover:opacity-90"
              : dark
              ? "bg-primary text-white hover:bg-primary-600"
              : "bg-charcoal text-white hover:bg-primary";
            const ctaStyle = hasOwnColors ? { backgroundColor: brand.colors.blue, color: "#fff" } : undefined;

            return (
              <motion.article
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={cardStyle}
                className={`group/card grid grid-cols-1 items-stretch overflow-hidden rounded-3xl sm:rounded-[2rem] lg:grid-cols-2 ${cardBg}`}
              >
                {/* IMAGE / LOGO */}
                <div
                  className={`relative min-h-[15rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[420px] ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {hasOwnColors && brand.logo ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white p-8 sm:p-10">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={brand.cardImage}
                      alt={brand.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div
                  className={`flex min-w-0 flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className={`font-display text-4xl font-semibold sm:text-5xl ${numberColor}`}>
                    {brand.number}
                  </span>
                  <h2 className={`mt-2 break-words text-2xl font-semibold sm:mt-3 sm:text-3xl lg:text-4xl ${nameColor}`}>
                    {brand.name}
                  </h2>
                  <p className={`mt-1 text-sm font-medium sm:text-base ${taglineColor}`}>{brand.tagline}</p>
                  <p className={`mt-4 max-w-md text-sm leading-relaxed sm:text-base ${descColor}`}>
                    {brand.description}
                  </p>
                  <Link
                    to={`/brands/${brand.slug}`}
                    style={ctaStyle}
                    className={`group mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:mt-7 ${ctaClasses}`}
                  >
                    Explore Brand
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Interested in stocking or partnering with our brands?"
        description="Get in touch and our team will walk you through partnership and distribution options."
      />
    </>
  );
}