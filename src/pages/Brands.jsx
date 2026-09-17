import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

export default function Brands() {
  return (
    <>
      <Seo title="Our Brands | Sadguru Food Processing Pvt. Ltd." description="Explore the four food brands owned and operated by Sadguru Food Processing Pvt. Ltd." />
      <PageHero
        eyebrow="Our Brands"
        title="Four Brands. One Standard of Quality."
        description="Each brand serves a different part of the kitchen, but every one of them is held to the same promise: honest, wholesome food."
        image="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-6">
          {brands.map((brand, i) => {
            // Brands with their own defined palette (currently: Mumma) get
            // their real brand colors instead of the generic alternating
            // charcoal / primary-50 treatment used for the rest.
            const hasOwnColors = Boolean(brand.colors);
            const dark = hasOwnColors ? false : i % 2 === 0;

            const cardBg = hasOwnColors
              ? undefined
              : dark
              ? "bg-charcoal"
              : "bg-primary-50";

            const cardStyle = hasOwnColors
              ? { backgroundColor: brand.colors.primary }
              : undefined;

            const numberColor = hasOwnColors
              ? "text-white/30"
              : dark
              ? "text-primary/40"
              : "text-primary/50";

            const nameColor = hasOwnColors ? "text-white" : dark ? "text-white" : "text-charcoal";

            const taglineColor = hasOwnColors
              ? "text-[#FCE700]"
              : dark
              ? "text-primary-300"
              : "text-primary-600";

            const descColor = hasOwnColors ? "text-white/70" : dark ? "text-white/60" : "text-charcoal-500";

            const ctaClasses = hasOwnColors
              ? "text-[#DF1C51] hover:opacity-90"
              : dark
              ? "bg-primary text-white hover:bg-primary-600"
              : "bg-charcoal text-white hover:bg-primary";

            const ctaStyle = hasOwnColors ? { backgroundColor: brand.colors.blue, color: "#fff" } : undefined;

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={cardStyle}
                className={`grid grid-cols-1 items-center gap-0 overflow-hidden rounded-[2rem] lg:grid-cols-2 ${cardBg ?? ""}`}
              >
                <div className={`h-72 overflow-hidden lg:h-[420px] ${dark || hasOwnColors ? "lg:order-1" : "lg:order-2"}`}>
                  {hasOwnColors && brand.logo ? (
                    <div className="flex h-full w-full items-center justify-center bg-white p-10">
                      <img src={brand.logo} alt={brand.name} className="h-full w-full object-contain" />
                    </div>
                  ) : (
                    <img src={brand.cardImage} alt={brand.name} className="h-full w-full object-cover" />
                  )}
                </div>
                <div className={`p-8 sm:p-12 lg:p-16 ${dark || hasOwnColors ? "lg:order-2" : "lg:order-1"}`}>
                  <span className={`font-display text-5xl font-semibold ${numberColor}`}>
                    {brand.number}
                  </span>
                  <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${nameColor}`}>
                    {brand.name}
                  </h2>
                  <p className={`mt-1 font-medium ${taglineColor}`}>
                    {brand.tagline}
                  </p>
                  <p className={`mt-4 max-w-md leading-relaxed ${descColor}`}>
                    {brand.description}
                  </p>
                  <Link
                    to={`/brands/${brand.slug}`}
                    style={ctaStyle}
                    className={`group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      hasOwnColors ? "" : ctaClasses
                    } ${hasOwnColors ? "bg-white" : ""}`}
                  >
                    Explore Brand
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
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