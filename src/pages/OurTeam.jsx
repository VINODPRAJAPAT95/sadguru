import { motion, useReducedMotion } from "framer-motion";
import { LinkedinIcon } from "../components/SocialIcons";
import Seo from "../components/Seo";
import CTASection from "../components/CTASection";
import team from "../data/team";

const ORANGE = "#EF7F1A";
const CHARCOAL = "#2B2A29";

const designationOf = (m) => m.designation || m.role || "";

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
        title="Our Team | Sadguru Foods Processing Pvt. Ltd."
        description="Meet the team behind Sadguru Foods Processing Pvt. Ltd. and our four food brands."
      />

      <section className="relative overflow-hidden bg-white pb-24 pt-28 sm:pb-32 sm:pt-36">
        {/* soft background glows */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full opacity-[0.10] blur-3xl"
          style={{ backgroundColor: ORANGE }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full opacity-[0.08] blur-3xl"
          style={{ backgroundColor: ORANGE }}
        />

        <div className="container-px relative mx-auto max-w-6xl">
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
            className="mt-16 grid grid-cols-1 items-start gap-x-8 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3"
          >
            {members.map((member) => (
              <motion.article
                key={member.name}
                variants={item}
                className="group relative mx-auto w-full max-w-[360px]"
              >
                {/* tilted orange backdrop that straightens + grows on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom-left rotate-[5deg] rounded-[2rem] opacity-90 transition-all duration-500 ease-out group-hover:rotate-[9deg] group-hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${ORANGE}, #F5A04C)` }}
                />

                {/* card */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-200 shadow-[0_24px_50px_-22px_rgba(43,42,41,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />

                  {/* bottom gradient for text legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#2B2A29]/85 via-[#2B2A29]/10 to-transparent"
                  />

                  {/* glass info panel */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/25">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold leading-snug text-white">
                        {member.name}
                      </h3>
                      {designationOf(member) && (
                        <p className="mt-0.5 flex items-center gap-2 text-xs font-semibold text-white/85 sm:text-sm">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: ORANGE }}
                          />
                          <span className="truncate">{designationOf(member)}</span>
                        </p>
                      )}
                    </div>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2A29] group-hover:bg-[#EF7F1A] group-hover:text-white"
                        style={{ color: CHARCOAL }}
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                  </div>
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