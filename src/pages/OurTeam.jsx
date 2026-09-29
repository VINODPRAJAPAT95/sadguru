import { motion } from "framer-motion";
import { LinkedinIcon } from "../components/SocialIcons";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import team from "../data/team";

const ORANGE = "#EF7F1A";
const CHARCOAL = "#2B2A29";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function OurTeam() {
  return (
    <>
      <Seo
        title="Our Team | Sadguru Food Processing Pvt. Ltd."
        description="Meet the team behind Sadguru Food Processing Pvt. Ltd. and our four food brands."
      />
      <PageHero
        eyebrow="Our Team"
        title="The People Behind Every Brand"
        description="A team of food scientists, operators and brand builders working together across all four brands."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py relative overflow-hidden bg-[#FAF9F7]">
        {/* Background decoration */}
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-[0.07] blur-2xl"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full opacity-[0.06] blur-2xl"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#d9d6d1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="container-px relative mx-auto max-w-5xl">
          {/* ── PREMIUM HEADER ── */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.p
              {...fadeUp(0)}
              className="inline-flex items-center gap-4 text-base font-extrabold uppercase tracking-[0.3em] sm:text-lg"
              style={{ color: ORANGE }}
            >
              <span className="h-[2px] w-10 rounded-full" style={{ backgroundColor: ORANGE }} />
              Leadership
              <span className="h-[2px] w-10 rounded-full" style={{ backgroundColor: ORANGE }} />
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
              style={{ color: CHARCOAL }}
            >
              Meet the <span style={{ color: ORANGE }}>Team</span>
            </motion.h2>

            {/* divider */}
            <motion.div
              {...fadeUp(0.2)}
              className="mt-6 flex items-center justify-center gap-2"
            >
              <span className="h-[3px] w-12 rounded-full" style={{ backgroundColor: ORANGE }} />
              <span className="h-2 w-2 rotate-45" style={{ backgroundColor: ORANGE }} />
              <span className="h-[3px] w-12 rounded-full" style={{ backgroundColor: ORANGE }} />
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
            >
              A group united by one goal food that families can trust, made without shortcuts.
            </motion.p>
          </div>

          {/* ── TEAM CARDS ── */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group flex h-full flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-3xl bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating info panel */}
                <div className="relative z-10 -mt-10 mx-3 flex flex-1 flex-col rounded-2xl border border-slate-100 bg-white px-6 pb-6 pt-7 shadow-[0_10px_30px_-12px_rgba(43,42,41,0.25)] transition-shadow duration-300 group-hover:shadow-[0_24px_50px_-16px_rgba(43,42,41,0.35)]">
                  {/* LinkedIn button */}
                  <a
                    href={member.linkedin || "#"}
                    target={member.linkedin ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="absolute -top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <LinkedinIcon size={16} />
                  </a>

                  <h3 className="pr-8 text-lg font-bold leading-snug" style={{ color: CHARCOAL }}>
                    {member.name}
                  </h3>
                  <div
                    className="mt-3 h-[3px] w-9 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: ORANGE }}
                  />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be part of our team?"
        description="We're always looking for people who care about food as much as we do."
        primary={{ label: "View Careers", to: "/career" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}