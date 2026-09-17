import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[3];

export default function BrandFour() {
  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* Minimal centered hero */}
      <section className="bg-white pt-36 pb-16 lg:pt-44">
        <div className="container-px mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-charcoal/5 px-4 py-1.5 text-sm font-semibold text-charcoal-500"
          >
            Brand {brand.number} — Breakfast, Ready
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-5xl font-semibold text-charcoal sm:text-6xl"
          >
            {brand.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-primary"
          >
            {brand.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button to="/contact" variant="primary">Explore Products</Button>
            <Button to="/brands" variant="ghost" icon={false}>All Brands</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="container-px mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl"
        >
          <img src={brand.heroImage} alt={brand.name} className="h-[340px] w-full object-cover sm:h-[460px]" />
        </motion.div>
      </section>

      {/* Story asymmetric */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle label="Our Story" title={`The ${brand.name} Idea`} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-lg leading-relaxed text-charcoal-500"
          >
            {brand.story}
          </motion.p>
        </div>
      </section>

      {/* Categories icon-style cards */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle label="What We Make" title="Product Categories" align="center" className="mb-14 mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-charcoal-100 p-7"
              >
                <span className="font-display text-2xl font-semibold text-primary-200">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-charcoal">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products with hover overlay */}
      <section className="section-py bg-charcoal">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle label="Featured Products" title="Mornings, Sorted" light align="center" className="mb-14 mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-300">{p.category}</span>
                  <h3 className="mt-1 text-base font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values three column */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <SectionTitle label="Brand Values" title={`What Makes ${brand.name} Different`} align="center" className="mb-14 mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {brand.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-cream p-7"
              >
                <h3 className="text-lg font-semibold text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery: large + thumbnails */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-6xl">
          <SectionTitle label="Gallery" title={`Life Inside ${brand.name}`} align="center" className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl lg:col-span-2">
              <img src={brand.gallery[0]} alt={`${brand.name} gallery main`} className="h-72 w-full object-cover lg:h-full" />
            </div>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {brand.gallery.slice(1).map((img, i) => (
                <div key={img} className="overflow-hidden rounded-2xl">
                  <img src={img} alt={`${brand.name} gallery ${i + 2}`} className="h-24 w-full object-cover lg:h-[7.5rem]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Get in touch to find our breakfast range near you."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}