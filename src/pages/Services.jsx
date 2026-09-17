import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ValueCard from "../components/ValueCard";
import CTASection from "../components/CTASection";
import services from "../data/services";

const whyOurServices = [
  "Certified food-safety and quality processes across every facility",
  "Dedicated account management for every partnership",
  "Flexible batch sizes for emerging and established brands",
  "End-to-end support, from formulation to final delivery",
];

export default function Services() {
  return (
    <>
      <Seo title="Services | Sadguru Food Processing Pvt. Ltd." description="Contract manufacturing, sourcing, product development and distribution services from Sadguru Food Processing Pvt. Ltd." />
      <PageHero
        eyebrow="Services"
        title="Built to Support Food Businesses at Scale"
        description="Beyond our own four brands, we partner with businesses across the food industry through manufacturing, sourcing and distribution services."
        image="https://images.unsplash.com/photo-1581093458791-9d09c6f6ea8b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            label="What We Offer"
            title="Our Services"
            description="A full suite of capabilities built on the same infrastructure that powers our own brands."
            align="center"
            className="mb-14 mx-auto"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ValueCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-cream">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <SectionTitle
            label="Why Partner With Us"
            title="Infrastructure You Can Trust"
            description="We built our own brands on this same infrastructure — so when you partner with us, you're working with a team that holds its own products to the same standard."
          />
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-4"
          >
            {whyOurServices.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 rounded-xl bg-white p-4"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-charcoal-500 sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <CTASection
        title="Let's discuss your requirements"
        description="Tell us about your product and volume needs — our team will get back within one business day."
      />
    </>
  );
}
