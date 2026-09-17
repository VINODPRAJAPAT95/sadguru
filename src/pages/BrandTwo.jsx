import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet, Clock, Heart, Repeat, ShieldCheck, Store, Users, PackageCheck, Quote,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import brands from "../data/brands";

const brand = brands[1];

const PURPLE = "#5B2A9D";
const YELLOW = "#FBBF09";

const DIFF_ICONS = [Wallet, Clock, Heart, Repeat, ShieldCheck, Store, Users, PackageCheck];

export default function BrandTwo() {
  return (
    <>
      <Seo title={`${brand.name} | ${brand.tagline}`} description={brand.description} />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#5B2A9D]">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          src={brand.heroImage}
          alt={brand.name}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5B2A9D] via-[#5B2A9D]/85 to-[#5B2A9D]/60" />

        {/* Decorative accent blobs */}
        <div className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-[#FBBF09]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="container-px relative mx-auto max-w-4xl pt-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex h-32 w-56 items-center justify-center rounded-3xl bg-white p-4 shadow-2xl shadow-black/20 sm:h-40 sm:w-72"
          >
            <img src={brand.logo} alt="T2M logo" className="h-full w-full object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-8 text-3xl font-bold leading-snug text-white sm:text-5xl"
          >
            {brand.tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button to="/contact" variant="primary" className="!bg-[#FBBF09] !text-[#5B2A9D] hover:!opacity-90">
              Explore Products
            </Button>
            <Link
              to="/contact"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#5B2A9D]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About T2M */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-4xl text-center">
          <SectionTitle
            label="About T2M"
            title="Traditional Taste, Modern Standards"
            align="center"
            className="mx-auto"
          />
          {brand.about.split("\n\n").map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="mx-auto mt-5 max-w-2xl leading-relaxed text-charcoal-400"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Our Purpose */}
      <section className="section-py bg-[#5B2A9D]/[0.05]">
        <div className="container-px mx-auto max-w-4xl text-center">
          <SectionTitle
            label="Our Purpose"
            title="Why T2M Exists"
            align="center"
            className="mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl leading-relaxed text-charcoal-400"
          >
            {brand.purpose}
          </motion.p>
        </div>
      </section>

      {/* What Makes T2M Different */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            label="Our Strengths"
            title="What Makes T2M Different"
            align="center"
            className="mb-14 mx-auto"
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {brand.differentiators.map((item, i) => {
              const Icon = DIFF_ICONS[i % DIFF_ICONS.length];
              const accent = i % 2 === 0 ? PURPLE : YELLOW;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-charcoal-100 bg-white p-6 text-center shadow-sm"
                >
                  <span
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: accent + "1A", color: accent }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-charcoal">{item}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-py bg-[#FBBF09]/[0.08]">
        <div className="container-px mx-auto max-w-7xl mb-10">
          <SectionTitle label="Featured Products" title="From Our Portfolio" />
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
                className="w-72 shrink-0 overflow-hidden rounded-3xl border border-charcoal-100 bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: PURPLE }}>
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-charcoal">{p.name}</h3>
                  <p className="mt-1 text-sm text-charcoal-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus / Who We Serve */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-4xl text-center">
          <SectionTitle label="Market Focus" title="Built for Every Indian Household" align="center" className="mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl leading-relaxed text-charcoal-400"
          >
            {brand.marketFocus}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {brand.distributionChain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className="rounded-full px-4 py-2 text-xs font-semibold"
                  style={{ backgroundColor: PURPLE + "0F", color: PURPLE }}
                >
                  {step}
                </span>
                {i < brand.distributionChain.length - 1 && (
                  <span className="text-charcoal-300">→</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision + Promise */}
      <section className="section-py relative overflow-hidden bg-[#5B2A9D]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FBBF09]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="container-px relative mx-auto max-w-3xl text-center">
          <SectionTitle label="Our Vision" title="Where We're Headed" light align="center" className="mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80"
          >
            {brand.vision}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-12 max-w-xl rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
          >
            <Quote className="mx-auto" size={28} style={{ color: YELLOW }} />
            <p className="font-baloo mt-4 text-2xl font-semibold italic text-white sm:text-3xl">
              "{brand.promise}"
            </p>
            <span className="mt-3 block text-xs font-semibold uppercase tracking-widest text-white/60">
              The T2M Promise
            </span>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Discover More About T2M"
        description="Get in touch to explore distribution and partnership opportunities."
        secondary={{ label: "All Brands", to: "/brands" }}
      />
    </>
  );
}