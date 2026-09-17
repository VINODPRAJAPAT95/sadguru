import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[2];

export default function BrandThree() {
  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* Rounded-image hero */}
      <section className="section-py bg-cream pt-32 lg:pt-40">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700"
            >
              Brand {brand.number} — Millets & Ancient Grains
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
              className="mt-4 max-w-md text-lg leading-relaxed text-charcoal-400"
            >
              {brand.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button to="/contact" variant="primary">Explore Products</Button>
              <Button to="/brands" variant="outlineDark" icon={false}>All Brands</Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-[3rem]"
          >
            <img src={brand.heroImage} alt={brand.name} className="h-[420px] w-full object-cover sm:h-[500px]" />
          </motion.div>
        </div>
      </section>

      {/* Story two-column */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={brand.gallery[1]}
            alt={`${brand.name} preparation`}
            className="h-80 w-full rounded-3xl object-cover"
          />
          <SectionTitle label="Our Story" title={`Why We Started ${brand.name}`} description={brand.about} />
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-4xl text-center">
          <SectionTitle label="Our Philosophy" title="What We Believe" align="center" className="mb-6 mx-auto" />
          <p className="text-lg leading-relaxed text-charcoal-400 whitespace-pre-line">{brand.philosophy}</p>
        </div>
      </section>

      {/* What We Stand For — as chips/cards */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-5xl text-center">
          <SectionTitle label="What We Stand For" title="Our Principles" align="center" className="mb-10 mx-auto" />
          <div className="flex flex-wrap justify-center gap-4">
            {brand.standsFor.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="w-72 rounded-2xl bg-cream px-6 py-5 text-left shadow-soft"
              >
                <h3 className="font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-1 text-sm text-charcoal-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products carousel */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-7xl mb-10">
          <SectionTitle label="Featured Products" title="Goodness, Freshly Made" />
        </div>
        <div className="container-px">
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
            {brand.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="w-80 shrink-0 overflow-hidden rounded-[2rem] bg-white"
              >
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal">{p.name}</h3>
                  <p className="mt-1 text-sm text-charcoal-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve — as audience chips */}
      <section className="section-py bg-charcoal">
        <div className="container-px mx-auto max-w-6xl">
          <SectionTitle label="Who We Serve" title={`Who ${brand.name} Is For`} light align="center" className="mb-10 mx-auto" />
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-white/60">{brand.whoWeServe}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {brand.audiences.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/80"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery scrolling strip */}
      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-7xl mb-10">
          <SectionTitle label="Gallery" title={`A Taste of ${brand.name}`} />
        </div>
        <div className="container-px">
          <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar">
            {brand.gallery.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`${brand.name} gallery ${i + 1}`}
                className="h-72 w-56 shrink-0 rounded-2xl object-cover sm:w-64"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Discover More About ${brand.name}`}
        description="Find our millet-based snacks and staples near you, or enquire about bulk orders."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}