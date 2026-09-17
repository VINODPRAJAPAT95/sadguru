import { motion } from "framer-motion";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";

const timeline = [
  { year: "2013", title: "A Small Kitchen, A Big Idea", desc: "Sadguru Food Processing began as a small family kitchen, testing recipes that used less processing and more care." },
  { year: "2016", title: "First Facility", desc: "We opened our first dedicated processing facility in Hyderabad, formalising our quality and safety standards." },
  { year: "2019", title: "Crispo & Anaaj Launch", desc: "Our first two consumer brands launched, bringing clean snacking and traceable grains to households." },
  { year: "2022", title: "Meetha & Nashta Join the Family", desc: "We expanded into traditional sweets and ready breakfast staples, completing our four-brand portfolio." },
  { year: "Today", title: "A Trusted Multi-Brand Company", desc: "Four brands, one promise — food that nourishes without compromise, reaching households across the country." },
];

export default function OurStory() {
  return (
    <>
      <Seo title="Our Story | Sadguru Food Processing Pvt. Ltd." description="The journey of Sadguru Food Processing Pvt. Ltd., from a single kitchen to four trusted food brands." />
      <PageHero
        eyebrow="Our Story"
        title="A Journey Rooted in Tradition, Built for Today"
        description="From a single family kitchen to a multi-brand food company — this is how we got here."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-4xl">
          <SectionTitle
            label="How We Started"
            title="Food That Doesn't Cut Corners"
            description="We started Sadguru Foods because we couldn't find packaged food that matched what we grew up eating — food with real ingredients, honest processes, and no unnecessary shortcuts. So we decided to make it ourselves."
          />
        </div>
      </section>

      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-4xl">
          <SectionTitle label="Our Journey" title="Milestones Along the Way" align="center" className="mb-16 mx-auto" />
          <div className="relative pl-10 sm:pl-14">
            <div className="absolute left-[7px] top-1 h-full w-px bg-charcoal-100 sm:left-[11px]" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-4 border-cream bg-primary sm:-left-14" />
                  <span className="font-display text-2xl font-semibold text-primary">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="Our Commitment"
              title="Quality That Never Takes a Shortcut"
              description="Every brand under Sadguru Foods follows the same commitment — clean ingredients, honest processes, and food that respects both tradition and modern nutrition. That commitment doesn't change as we grow."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80"
              alt="Quality food preparation"
              className="h-80 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Want to know more about how we work?"
        description="Explore our brands or get in touch with our team directly."
      />
    </>
  );
}
