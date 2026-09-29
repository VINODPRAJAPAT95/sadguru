import { motion, useReducedMotion } from "framer-motion";
import { LinkedinIcon } from "../components/SocialIcons";
import Seo from "../components/Seo";
import CTASection from "../components/CTASection";
import team from "../data/team";

const ORANGE = "#EF7F1A";
const CHARCOAL = "#2B2A29";

const designationOf = (m) => m.designation || m.role || "";

// Arch shape: fully rounded top, softly rounded bottom
const ARCH = "rounded-t-[999px] rounded-b-3xl";

export default function OurTeam() {
  const reduce = useReducedMotion();
  const members = team.slice(0, 6); // total 6 members

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <Seo
        title="Our Team | Sadguru Food Processing Pvt. Ltd."
        description="Meet the team behind Sadguru Food Processing Pvt. Ltd. and our four food brands."
      />

      <section className="bg-white pb-24 pt-28 sm:pb-32 sm:pt-36">
        <div className="container-px mx-auto max-w-6xl">
          <h2
            className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ color: CHARCOAL }}
          >
            {/* Line 1: "Team" + pill with overlapping member photos */}
            <span className="flex flex-wrap items-center gap-x-5">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: reduce ? 0 : "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Team
                </motion.span>
              </span>

              <motion.span
                aria-hidden="true"
                initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex h-[0.7em] items-center rounded-full pl-[0.1em] pr-[0.14em]"
                style={{ backgroundColor: ORANGE }}
              >
                {members.slice(0, 3).map((m, idx) => (
                  <img
                    key={m.name}
                    src={m.image}
                    alt=""
                    className={`h-[0.5em] w-[0.5em] rounded-full border-[3px] border-white object-cover ${
                      idx ? "-ml-[0.14em]" : ""
                    }`}
                  />
                ))}
              </motion.span>
            </span>

            {/* Line 2: outlined "Members" with a hand-drawn orange underline */}
            <span className="relative mt-1 inline-block">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: reduce ? 0 : "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{ WebkitTextStroke: `2px ${CHARCOAL}`, color: "transparent" }}
                >
                  Members
                </motion.span>
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-[0.16em] min-h-[10px] w-full"
                fill="none"
              >
                <motion.path
                  d="M2 12 Q 20 2 38 12 T 74 12 T 110 12 T 146 12 T 182 12 T 218 12 T 254 12 T 298 12"
                  stroke={ORANGE}
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </h2>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 items-start gap-x-10 gap-y-16 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3"
          >
            {members.map((member, i) => (
              <motion.article
                key={member.name}
                variants={item}
                className={`group mx-auto w-full max-w-[340px] ${
                  i % 2 === 1 ? "sm:mt-14" : ""
                } ${i % 3 === 1 ? "lg:mt-20" : "lg:mt-0"}`}
              >
                <div className="relative">
                  {/* offset outline that snaps into place on hover */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 translate-x-3 translate-y-3 border-2 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 ${ARCH}`}
                    style={{ borderColor: CHARCOAL }}
                  />
                  <div className={`relative aspect-[3/4] overflow-hidden bg-slate-200 ${ARCH}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-200 hover:bg-[#2B2A29] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF7F1A] focus-visible:ring-offset-2"
                      style={{ color: CHARCOAL }}
                    >
                      <LinkedinIcon size={17} />
                    </a>
                  )}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold leading-snug" style={{ color: CHARCOAL }}>
                    {member.name}
                  </h3>
                  {designationOf(member) && (
                    <p
                      className="mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold"
                      style={{ backgroundColor: "rgba(239,127,26,0.12)", color: "#B85E08" }}
                    >
                      {designationOf(member)}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
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