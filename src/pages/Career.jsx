import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Briefcase, Clock, Send, ArrowRight,
  Lightbulb, GraduationCap, HandHeart, Users2, TrendingUp,
  FlaskConical, Factory, ShieldCheck, Settings2, Truck,
  LineChart, Megaphone, ShoppingCart, Wallet, UserCog, Laptop2,
  Sparkles, ShieldCheck as Integrity, Rocket, Handshake, RefreshCw,
  FileText,
} from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import jobs from "../data/jobs";

const ORANGE = "#EF7F1A";
const CHARCOAL = "#2B2A29";
const WHITE = "#FFFFFF";

/* ── WHY SADGURU FOODS ── */
const whySadguru = [
  { icon: Lightbulb, title: "Innovation", desc: "Encouraging new ideas, better processes, and continuous improvement." },
  { icon: GraduationCap, title: "Learning", desc: "Providing opportunities to develop knowledge, skills, and professional capabilities." },
  { icon: HandHeart, title: "Ownership", desc: "Empowering employees to take responsibility and make a difference through their work." },
  { icon: Users2, title: "Collaboration", desc: "Bringing together diverse teams and expertise to achieve common goals." },
  { icon: TrendingUp, title: "Growth", desc: "Creating opportunities for individuals to grow alongside the organisation." },
];

/* ── FROM IDEA TO CONSUMER ── */
const productJourney = [
  "Idea",
  "Research & Development",
  "Quality & Food Safety",
  "Manufacturing",
  "Supply Chain & Operations",
  "Marketing & Sales",
  "Consumer",
];

/* ── CAREER OPPORTUNITIES ── */
const categories = [
  { icon: FlaskConical, title: "Research & Development", roles: ["Food Technology", "New Product Development", "Product Formulation", "Clinical Nutrition", "Product Innovation"] },
  { icon: Factory, title: "Manufacturing & Production", roles: ["Production Management", "Manufacturing Operations", "Plant Operations", "Process Management", "Maintenance"] },
  { icon: ShieldCheck, title: "Quality & Food Safety", roles: ["Quality Assurance", "Quality Control", "Food Safety", "Regulatory Compliance", "Quality Management"] },
  { icon: Settings2, title: "Operations", roles: ["Business Operations", "Process Coordination", "Operational Planning", "Cross-Functional Coordination"] },
  { icon: Truck, title: "Supply Chain & Procurement", roles: ["Procurement", "Purchase Management", "Inventory & Stores", "Logistics", "Dispatch", "Supply Chain Management"] },
  { icon: LineChart, title: "Sales & Business Development", roles: ["Business Development", "Sales", "Customer Development", "Distribution", "Channel Management"] },
  { icon: Megaphone, title: "Marketing & Brand", roles: ["Brand Management", "Digital Marketing", "Graphic Design", "Content Development", "Creative Marketing"] },
  { icon: ShoppingCart, title: "E-Commerce & Digital", roles: ["E-Commerce Management", "Marketplace Management", "Online Sales", "Digital Operations"] },
  { icon: Wallet, title: "Finance & Accounts", roles: ["Financial Management", "Accounting", "Financial Reporting", "Accounts Operations"] },
  { icon: UserCog, title: "Human Resources & Administration", roles: ["Human Resources", "People Operations", "Employee Administration", "Office Administration"] },
  { icon: Laptop2, title: "IT & Systems", roles: ["IT Systems", "Systems Administration", "ERP & Business Systems", "Technical Support"] },
];

/* ── OUR VALUES ── */
const values = [
  { icon: Sparkles, title: "Quality", desc: "We strive for consistency and excellence in our products and processes." },
  { icon: Integrity, title: "Integrity", desc: "We believe in responsible, transparent, and accountable ways of working." },
  { icon: Rocket, title: "Innovation", desc: "We continuously explore better ideas, products, and processes." },
  { icon: Handshake, title: "Teamwork", desc: "We believe that strong collaboration creates stronger outcomes." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We learn from every experience and continuously look for ways to do better." },
];

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToPositions = () => {
    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEnquiry = () => {
    document.getElementById("career-enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Careers | Sadguru Foods Processing Pvt. Ltd."
        description="Explore career opportunities at Sadguru Foods Processing Pvt. Ltd. across manufacturing, quality, R&D, marketing, sales and more."
      />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="CAREERS"
        title="Grow With Sadguru Foods"
        description="Building Great Food. Growing Great People. At Sadguru Foods Processing Private Limited, our journey is driven by innovation, quality, technology, operational excellence, and most importantly, our people."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Hero CTAs (in case PageHero doesn't render buttons) */}
      <div className="flex flex-wrap justify-center gap-4 bg-white py-8">
        <button
          onClick={scrollToPositions}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition hover:opacity-90"
          style={{ backgroundColor: ORANGE }}
        >
          VIEW OPEN POSITIONS <ArrowRight size={16} />
        </button>
        <button
          onClick={scrollToEnquiry}
          className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold tracking-wide transition hover:bg-charcoal hover:text-white"
          style={{ borderColor: CHARCOAL, color: CHARCOAL }}
        >
          SUBMIT YOUR RESUME
        </button>
      </div>

      {/* ── WHY SADGURU FOODS ── */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
                WHY SADGURU FOODS?
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl" style={{ color: CHARCOAL }}>
                A Place to Learn.
                <br />
                A Place to Contribute.
                <br />
                <span style={{ color: ORANGE }}>A Place to Grow.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-slate-600">
                At Sadguru Foods Processing Private Limited, we strive to create an
                environment where individuals can develop their capabilities, take
                ownership, and make a meaningful contribution to the organisation.
              </p>
            </motion.div>

            {/* Right: feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whySadguru.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl border border-slate-100 p-6 shadow-sm transition hover:shadow-lg ${
                    i === whySadguru.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                  >
                    <c.icon size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold" style={{ color: CHARCOAL }}>
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BEHIND EVERY PRODUCT IS A TEAM ── */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div
            className="overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 lg:px-16"
            style={{ backgroundColor: CHARCOAL }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
              BEHIND EVERY PRODUCT IS A TEAM
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
              From Idea to Consumer
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">
              Every food product has a journey. At Sadguru Foods, people across every
              stage work together to transform ideas into products that reach consumers.
            </p>

            {/* Flow — desktop horizontal, mobile vertical */}
            <div className="mt-12 flex flex-col items-stretch gap-0 lg:flex-row lg:items-center">
              {productJourney.map((step, i) => (
                <div key={step} className="flex flex-1 flex-col items-center lg:flex-row">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex w-full flex-col items-center gap-3 py-3 text-center lg:py-0"
                  >
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-[110px] text-xs font-bold uppercase leading-tight tracking-wide text-white">
                      {step}
                    </span>
                  </motion.div>
                  {i < productJourney.length - 1 && (
                    <div
                      className="my-2 h-8 w-px shrink-0 opacity-30 lg:my-0 lg:h-px lg:w-8"
                      style={{ backgroundColor: WHITE }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES ── */}
      <section className="py-20" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionTitle
            label="Career Opportunities"
            title="We Offer Opportunities Across a Wide Range of Functions"
            align="center"
            className="mb-14 mx-auto"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: ORANGE }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                >
                  <cat.icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-bold" style={{ color: CHARCOAL }}>
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.roles.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-slate-500">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: ORANGE }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── START YOUR JOURNEY WITH US ── */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Sadguru Foods team collaborating"
                className="h-[380px] w-full object-cover"
              />
            </motion.div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
                START YOUR JOURNEY WITH US
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl" style={{ color: CHARCOAL }}>
                Whatever Stage You're At, There's a Place for You
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Whether you are beginning your career or bringing years of experience,
                we value individuals who are willing to learn, take initiative, solve
                problems, and contribute to a growing organisation.
              </p>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 rounded-2xl p-6"
                  style={{ backgroundColor: `${ORANGE}0F` }}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: ORANGE }}>
                    Freshers
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Begin your professional journey with practical exposure and
                    opportunities to learn from real business environments.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 rounded-2xl p-6 text-white"
                  style={{ backgroundColor: CHARCOAL }}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: ORANGE }}>
                    Experienced Professionals
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Bring your expertise, take on new challenges, and contribute to
                    building the next phase of Sadguru Foods.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-20" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionTitle label="Our Values" title="What We Stand For" align="center" className="mb-14 mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                >
                  <v.icon size={24} />
                </span>
                <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide" style={{ color: CHARCOAL }}>
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="open-positions" className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <SectionTitle label="Open Positions" title="Current Openings" align="center" className="mb-14 mx-auto" />
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, borderColor: ORANGE }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-bold" style={{ color: CHARCOAL }}>{job.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm text-slate-500">{job.desc}</p>
                </div>
                <button
                  onClick={() => { setSelectedJob(job.title); scrollToEnquiry(); }}
                  className="shrink-0 rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND YOUR OPPORTUNITY CTA ── */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 lg:px-16"
            style={{ backgroundColor: CHARCOAL }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-10"
              style={{ backgroundColor: ORANGE }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full opacity-10"
              style={{ backgroundColor: ORANGE }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
                  FIND YOUR OPPORTUNITY
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
                  Your next career opportunity could be the beginning of something meaningful.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                  Explore our current openings and discover where your skills and
                  aspirations can contribute to the journey of Sadguru Foods
                  Processing Private Limited.
                </p>
                <button
                  onClick={scrollToPositions}
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  VIEW OPEN POSITIONS <ArrowRight size={16} />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl bg-white p-7"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                >
                  <FileText size={20} />
                </span>
                <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide" style={{ color: CHARCOAL }}>
                  Don't See a Suitable Opening?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  We are always interested in connecting with talented individuals
                  who are passionate about food, innovation, business, and growth.
                </p>
                <button
                  onClick={scrollToEnquiry}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: CHARCOAL }}
                >
                  Submit Your Resume
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER ENQUIRY / APPLICATION FORM ── */}
      <section id="career-enquiry" className="py-20" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <SectionTitle
            label="Get In Touch"
            title={selectedJob ? `Apply for ${selectedJob}` : "Career Enquiry"}
            description="Don't see a role that fits? Send us your details and we'll reach out when something opens up."
            align="center"
            className="mb-10 mx-auto"
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: `${ORANGE}0F` }}
            >
              <p className="text-lg font-bold" style={{ color: ORANGE }}>Thank you for reaching out!</p>
              <p className="mt-2 text-sm text-slate-500">Our HR team will review your application and get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl bg-white p-8 shadow-sm sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: CHARCOAL }}>Full Name</label>
                <input
                  required
                  type="text"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#EF7F1A]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: CHARCOAL }}>Email</label>
                <input
                  required
                  type="email"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#EF7F1A]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: CHARCOAL }}>Phone</label>
                <input
                  required
                  type="tel"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#EF7F1A]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: CHARCOAL }}>Position Interested In</label>
                <input
                  type="text"
                  defaultValue={selectedJob || ""}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#EF7F1A]"
                />
              </div>
              <div className="col-span-full flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: CHARCOAL }}>Message</label>
                <textarea
                  rows={4}
                  className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#EF7F1A]"
                />
              </div>
              <button
                type="submit"
                className="col-span-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: CHARCOAL }}
              >
                Submit Application
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: WHITE }}>
        <div
          className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full opacity-[0.06]"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full opacity-[0.06]"
          style={{ backgroundColor: ORANGE }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold leading-[1.2] sm:text-4xl"
            style={{ color: CHARCOAL }}
          >
            Be part of the people behind the food.
            <br />
            <span style={{ color: ORANGE }}>Be part of our growth.</span>
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            onClick={scrollToPositions}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            VIEW OPEN POSITIONS <ArrowRight size={16} />
          </motion.button>
        </div>
      </section>
    </>
  );
}