import { motion } from "framer-motion";
import { LinkedinIcon } from "../components/SocialIcons";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import team from "../data/team";

export default function OurTeam() {
  return (
    <>
      <Seo title="Our Team | Sadguru Food Processing Pvt. Ltd." description="Meet the team behind Sadguru Food Processing Pvt. Ltd. and our four food brands." />
      <PageHero
        eyebrow="Our Team"
        title="The People Behind Every Brand"
        description="A team of food scientists, operators and brand builders working together across all four brands."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            label="Leadership"
            title="Meet the Team"
            description="A group united by one goal — food that families can trust, made without shortcuts."
            align="center"
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-charcoal-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <a
                    href="#"
                    className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-400">{member.bio}</p>
                </div>
              </motion.div>
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
