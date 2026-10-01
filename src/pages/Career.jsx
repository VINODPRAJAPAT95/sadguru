import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin, Briefcase, Clock, Send, ArrowRight,
  Lightbulb, GraduationCap, HandHeart, Users2, TrendingUp,
  FlaskConical, Factory, ShieldCheck, Settings2, Truck,
  LineChart, Megaphone, ShoppingCart, Wallet, UserCog, Laptop2,
  Sparkles, ShieldCheck as Integrity, Rocket, Handshake, RefreshCw,
  FileText, UploadCloud, X, CheckCircle2, AlertCircle,
} from "lucide-react";
import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import jobs from "../data/jobs";

const ORANGE = "#EF7F1A";
const CHARCOAL = "#2B2A29";
const WHITE = "#FFFFFF";
const CREAM = "#FFF6E9";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXT = ["pdf", "doc", "docx"];

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
  { label: "Idea", icon: Lightbulb },
  { label: "Research & Development", icon: FlaskConical },
  { label: "Quality & Food Safety", icon: ShieldCheck },
  { label: "Manufacturing", icon: Factory },
  { label: "Supply Chain & Operations", icon: Truck },
  { label: "Marketing & Sales", icon: Megaphone },
  { label: "Consumer", icon: Users2 },
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

/* ── START YOUR JOURNEY: FRESHERS / EXPERIENCED (same UI) ── */
const journeyCards = [
  {
    icon: GraduationCap,
    title: "Freshers",
    desc: "Begin your professional journey with practical exposure and opportunities to learn from real business environments.",
  },
  {
    icon: Briefcase,
    title: "Experienced Professionals",
    desc: "Bring your expertise, take on new challenges, and contribute to building the next phase of Sadguru Foods.",
  },
];

/* ── OUR VALUES ── */
const values = [
  { icon: Sparkles, title: "Quality", desc: "We strive for consistency and excellence in our products and processes." },
  { icon: Integrity, title: "Integrity", desc: "We believe in responsible, transparent, and accountable ways of working." },
  { icon: Rocket, title: "Innovation", desc: "We continuously explore better ideas, products, and processes." },
  { icon: Handshake, title: "Teamwork", desc: "We believe that strong collaboration creates stronger outcomes." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We learn from every experience and continuously look for ways to do better." },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#EF7F1A] focus:bg-white focus:ring-4 focus:ring-[#EF7F1A]/10";

const formatSize = (bytes) =>
  bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

/* Big eyebrow label (orange line removed) */
const Eyebrow = ({ children }) => (
  <p
    className="text-base font-extrabold uppercase tracking-[0.25em] sm:text-lg"
    style={{ color: ORANGE }}
  >
    {children}
  </p>
);

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);
  const reduce = useReducedMotion();

  const validateAndSetFile = (file) => {
    if (!file) return;
    const ext = file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setResume(null);
      setResumeError("Only PDF, DOC or DOCX files are allowed.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setResume(null);
      setResumeError("File size must be 5 MB or less.");
      return;
    }
    setResumeError("");
    setResume(file);
  };

  const removeFile = () => {
    setResume(null);
    setResumeError("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    validateAndSetFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume) {
      setResumeError("Please upload your resume to continue.");
      return;
    }
    // TODO: send to your backend / email service:
    // const fd = new FormData(e.target); fd.set("resume", resume);
    // await fetch("/api/career", { method: "POST", body: fd });
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

      {/* ── TOP: ONLY TWO BUTTONS ──
          pt-28 / sm:pt-32 navbar ke neeche jagah dene ke liye hai.
          Agar navbar fixed nahi hai to pt-10 kar dena. */}
      <section
        className="relative overflow-hidden pb-6 pt-28 sm:pt-32"
        style={{ backgroundColor: WHITE }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full opacity-[0.08] blur-3xl"
          style={{ backgroundColor: ORANGE }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto flex max-w-3xl flex-col items-stretch justify-center gap-4 px-6 sm:flex-row sm:items-center"
        >
          <button
            onClick={scrollToPositions}
            className="group inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 text-sm font-extrabold tracking-[0.12em] text-white shadow-[0_14px_30px_-10px_rgba(239,127,26,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(239,127,26,0.8)]"
            style={{ background: `linear-gradient(135deg, ${ORANGE}, #F5A04C)` }}
          >
            VIEW OPEN POSITIONS
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={scrollToEnquiry}
            className="inline-flex items-center justify-center gap-3 rounded-full border-2 px-9 py-4 text-sm font-extrabold tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_14px_30px_-10px_rgba(43,42,41,0.5)]"
            style={{ borderColor: CHARCOAL, color: CHARCOAL }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CHARCOAL)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            SUBMIT YOUR RESUME
          </button>
        </motion.div>
      </section>

      {/* ── WHY SADGURU FOODS ── */}
      <section className="py-16" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>WHY SADGURU FOODS?</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl" style={{ color: CHARCOAL }}>
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
      <section className="pb-16" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-[2rem] border px-6 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-14 lg:px-16"
            style={{
              borderColor: `${ORANGE}33`,
              background: `linear-gradient(135deg, ${CREAM} 0%, #FFE9CC 55%, #FFD9A8 100%)`,
            }}
          >
            {/* floating orange blobs */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ backgroundColor: ORANGE }}
              animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 24, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#F5A04C" }}
              animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* dotted texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `radial-gradient(${ORANGE}33 1.2px, transparent 1.2px)`,
                backgroundSize: "22px 22px",
                maskImage: "linear-gradient(to bottom, black, transparent 70%)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
              }}
            />

            <div className="relative">
              {/* heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <p
                  className="text-xs font-extrabold uppercase tracking-[0.25em] sm:text-sm"
                  style={{ color: ORANGE }}
                >
                  Behind every product is a team
                </p>
                <h2
                  className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl"
                  style={{ color: CHARCOAL }}
                >
                  From Idea to{" "}
                  <span className="relative inline-block" style={{ color: ORANGE }}>
                    Consumer
                    <motion.svg
                      aria-hidden
                      viewBox="0 0 200 12"
                      className="absolute -bottom-2 left-0 w-full"
                      fill="none"
                    >
                      <motion.path
                        d="M2 8 Q 50 0, 100 6 T 198 4"
                        stroke={ORANGE}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </span>
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
                  Every food product has a journey. At Sadguru Foods, people across every
                  stage work together to transform ideas into products that reach consumers.
                </p>
              </motion.div>

              {/* journey */}
              <div className="relative mt-14 lg:mt-16">
                {/* ── Desktop: horizontal track ── */}
                <div className="pointer-events-none absolute left-[7.14%] right-[7.14%] top-10 hidden lg:block">
                  <div className="h-[3px] w-full rounded-full" style={{ backgroundColor: `${ORANGE}26` }} />
                  <motion.div
                    className="absolute left-0 top-0 h-[3px] w-full origin-left rounded-full"
                    style={{ background: `linear-gradient(90deg, ${ORANGE}, #F5A04C)` }}
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                  {/* travelling spark */}
                  {!reduce && (
                    <motion.span
                      className="absolute -top-[5px] h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-white"
                      style={{ boxShadow: `0 0 0 3px ${ORANGE}, 0 0 16px 4px ${ORANGE}99` }}
                      animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2 }}
                    />
                  )}
                </div>

                {/* ── Mobile / tablet: vertical track ── */}
                <div className="pointer-events-none absolute bottom-8 left-[31px] top-8 w-[3px] lg:hidden">
                  <div className="h-full w-full rounded-full" style={{ backgroundColor: `${ORANGE}26` }} />
                  <motion.div
                    className="absolute left-0 top-0 h-full w-full origin-top rounded-full"
                    style={{ background: `linear-gradient(180deg, ${ORANGE}, #F5A04C)` }}
                    initial={{ scaleY: reduce ? 1 : 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                </div>

                {/* steps */}
                <ol className="relative grid grid-cols-1 gap-7 lg:grid-cols-7 lg:gap-2">
                  {productJourney.map((step, i) => {
                    const isLast = i === productJourney.length - 1;
                    const Icon = step.icon;
                    return (
                      <motion.li
                        key={step.label}
                        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: reduce ? 0 : 0.15 + i * 0.22 }}
                        className="group flex items-center gap-5 lg:flex-col lg:gap-5 lg:text-center"
                      >
                        {/* node (number badge removed) */}
                        <div className="relative shrink-0">
                          {isLast && !reduce && (
                            <motion.span
                              aria-hidden
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: ORANGE }}
                              animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                            />
                          )}
                          <motion.span
                            whileHover={{ scale: 1.08, rotate: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 16 }}
                            className={`relative flex h-16 w-16 items-center justify-center rounded-full border-[3px] shadow-[0_10px_24px_-10px_rgba(239,127,26,0.6)] transition-colors duration-300 lg:h-20 lg:w-20 ${
                              isLast
                                ? "text-white"
                                : "bg-white group-hover:bg-[#EF7F1A] group-hover:text-white"
                            }`}
                            style={{
                              borderColor: ORANGE,
                              backgroundColor: isLast ? ORANGE : undefined,
                              color: isLast ? WHITE : ORANGE,
                            }}
                          >
                            <Icon size={26} strokeWidth={1.8} />
                          </motion.span>
                        </div>

                        {/* label */}
                        <span
                          className="text-sm font-bold leading-snug lg:max-w-[120px] lg:text-[13px]"
                          style={{ color: CHARCOAL }}
                        >
                          {step.label}
                        </span>
                      </motion.li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES (simple + premium) ── */}
      <section className="py-16" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionTitle
            label="Career Opportunities"
            title="We Offer Opportunities Across a Wide Range of Functions"
            align="center"
            className="mb-12 mx-auto"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-16px_rgba(43,42,41,0.25)]"
              >
                {/* top accent line on hover */}
                <span
                  className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: ORANGE }}
                />

                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[#EF7F1A] group-hover:text-white"
                  style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                >
                  <cat.icon size={22} strokeWidth={1.8} />
                </span>

                <h3 className="mt-6 text-lg font-bold leading-snug" style={{ color: CHARCOAL }}>
                  {cat.title}
                </h3>
                <div className="mt-3 h-[2px] w-8 rounded-full" style={{ backgroundColor: ORANGE }} />

                <ul className="mt-5 space-y-2.5">
                  {cat.roles.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm text-slate-600">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
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
      <section className="py-16" style={{ backgroundColor: WHITE }}>
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
              <Eyebrow>START YOUR JOURNEY WITH US</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:text-4xl" style={{ color: CHARCOAL }}>
                Whatever Stage You're At, There's a Place for You
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Whether you are beginning your career or bringing years of experience,
                we value individuals who are willing to learn, take initiative, solve
                problems, and contribute to a growing organisation.
              </p>

              {/* Freshers + Experienced: same UI */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {journeyCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-16px_rgba(43,42,41,0.25)]"
                  >
                    <span
                      className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: ORANGE }}
                    />
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[#EF7F1A] group-hover:text-white"
                      style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                    >
                      <card.icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-base font-extrabold" style={{ color: CHARCOAL }}>
                      {card.title}
                    </h3>
                    <div className="mt-2.5 h-[2px] w-8 rounded-full" style={{ backgroundColor: ORANGE }} />
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-16" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionTitle label="Our Values" title="What We Stand For" align="center" className="mb-12 mx-auto" />
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
      <section id="open-positions" className="py-16" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <SectionTitle label="Open Positions" title="Current Openings" align="center" className="mb-12 mx-auto" />
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
      <section className="pb-16" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 lg:px-16"
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
                <Eyebrow>FIND YOUR OPPORTUNITY</Eyebrow>
                <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
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

      {/* ── CAREER ENQUIRY / APPLICATION FORM (last section) ── */}
      <section id="career-enquiry" className="py-16" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
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
              className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-xl"
            >
              <span
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
              >
                <CheckCircle2 size={32} />
              </span>
              <p className="mt-5 text-xl font-extrabold" style={{ color: CHARCOAL }}>
                Thank you for reaching out!
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Our HR team will review your application and get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(43,42,41,0.2)] sm:p-10"
            >
              <span className="absolute left-0 top-0 h-1.5 w-full" style={{ backgroundColor: ORANGE }} />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>Full Name</label>
                  <input required name="name" type="text" placeholder="Your full name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>Email</label>
                  <input required name="email" type="email" placeholder="you@example.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>Phone</label>
                  <input required name="phone" type="tel" placeholder="+91 00000 00000" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>Position Interested In</label>
                  <input
                    key={selectedJob || "none"}
                    name="position"
                    type="text"
                    defaultValue={selectedJob || ""}
                    placeholder="e.g. Quality Executive"
                    className={inputClass}
                  />
                </div>

                {/* Resume upload */}
                <div className="col-span-full flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>
                    Upload Resume <span style={{ color: ORANGE }}>*</span>
                  </label>

                  <input
                    ref={fileRef}
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => validateAndSetFile(e.target.files?.[0])}
                  />

                  {resume ? (
                    <div
                      className="flex items-center justify-between gap-4 rounded-2xl border p-4"
                      style={{ borderColor: `${ORANGE}66`, backgroundColor: `${ORANGE}0D` }}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{ backgroundColor: ORANGE }}
                        >
                          <FileText size={20} />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold" style={{ color: CHARCOAL }}>
                            {resume.name}
                          </p>
                          <p className="text-xs text-slate-500">{formatSize(resume.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        aria-label="Remove file"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:bg-red-50 hover:text-red-500"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => fileRef.current?.click()}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && fileRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-9 text-center transition-all ${
                        dragging
                          ? "border-[#EF7F1A] bg-[#EF7F1A]/10"
                          : "border-slate-300 bg-slate-50/60 hover:border-[#EF7F1A] hover:bg-[#EF7F1A]/5"
                      }`}
                    >
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${ORANGE}14`, color: ORANGE }}
                      >
                        <UploadCloud size={26} />
                      </span>
                      <p className="text-sm font-semibold" style={{ color: CHARCOAL }}>
                        Drag & drop your resume here, or{" "}
                        <span style={{ color: ORANGE }} className="underline underline-offset-2">browse</span>
                      </p>
                      <p className="text-xs text-slate-400">PDF, DOC or DOCX · Max 5 MB</p>
                    </div>
                  )}

                  {resumeError && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-red-500">
                      <AlertCircle size={14} /> {resumeError}
                    </p>
                  )}
                </div>

                <div className="col-span-full flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: CHARCOAL }}>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about yourself..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="col-span-full mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  Submit Application
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}