import { useMemo, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  CalendarDays, Search, ChevronDown, ChevronsUpDown, X,
  ClipboardList, Users, Target, ShieldCheck, HandHeart, Database,
  FileText, Briefcase, Cookie, Share2, Server, Globe, Clock, Lock,
  Baby, UserCheck, Scale, ExternalLink, Megaphone, RefreshCw, Gavel,
  Mail, Phone, MapPin, ShieldQuestion, ThumbsUp, Handshake, Eye,
} from "lucide-react";
import Seo from "../components/Seo";
import { CONTACT } from "../config";

/* Hero image: apni image yaha rakho -> src/assets/images/privacy-hero.png
   (best result ke liye transparent PNG: shield + nuts bowl) */
import privacyHero from "../assets/images/privacy-hero.png";

/* ───────── Edit here ───────── */
const LAST_UPDATED = "September 2026";
const EFFECTIVE_DATE = "September 2026";
const WEBSITE = "www.sadgurufoods.com";
const PRIVACY_EMAIL = CONTACT.email; // privacy ka alag email ho to yaha likho
const PRIVACY_PHONE = CONTACT.phone;
const OFFICE_ADDRESS = CONTACT.address;
/* ───────────────────────────── */

const sections = [
  {
    icon: ClipboardList,
    title: "Scope",
    summary: "Where this policy applies across our website and digital channels.",
    p: [
      "This Privacy Policy applies to personal data collected through the Sadguru Foods website, contact and enquiry forms, business/RFQ forms, vendor or partner forms, career applications, newsletter or communication subscriptions, cookies and similar technologies, and other online interactions with Sadguru Foods.",
      "It may also apply where we receive personal data in connection with a business relationship, subject to the terms of the relevant contract or notice.",
    ],
  },
  {
    icon: Users,
    title: "Personal Data We May Collect",
    summary: "The kinds of information we may collect, depending on how you interact with us.",
    p: ["Depending on how you interact with us, we may collect:"],
    list: [
      "Identity and contact information such as name, designation, company name, email address, telephone/mobile number and business address.",
      "Business information such as organisation details, enquiry details, product or manufacturing requirements, specifications and communications.",
      "Career information such as CV/resume, education, qualifications, employment history, skills and information voluntarily provided during recruitment.",
      "Communication information such as messages, feedback, enquiries and correspondence.",
      "Technical information such as IP address, browser type, device information, operating system, approximate location derived from technical data, access times and website usage information.",
      "Cookie and analytics information generated through website technologies.",
      "Other information that you voluntarily provide to us or that is lawfully provided to us by an authorised business contact.",
    ],
  },
  {
    icon: Target,
    title: "Purposes of Processing",
    summary: "Why we use personal data, from answering enquiries to meeting legal duties.",
    p: ["We may process personal data for purposes including:"],
    list: [
      "responding to enquiries and requests;",
      "evaluating and managing business opportunities;",
      "preparing quotations, proposals or commercial communications;",
      "communicating with customers, suppliers, vendors, partners and other business contacts;",
      "managing meetings, visits and business correspondence;",
      "processing and evaluating employment applications;",
      "providing requested services or information;",
      "maintaining business and administrative records;",
      "improving website functionality, security and user experience;",
      "analysing website performance and usage;",
      "preventing fraud, misuse and security incidents;",
      "complying with applicable legal, regulatory, tax, accounting and reporting obligations;",
      "establishing, exercising or defending legal rights and claims; and",
      "other purposes disclosed to you at or before the time of collection or otherwise permitted by applicable law.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Basis for Processing",
    summary: "The lawful grounds we rely on, including your consent where applicable.",
    p: [
      "Where applicable, Sadguru Foods may process personal data based on consent or other lawful grounds available under applicable law.",
      "Where consent is relied upon, we will seek consent in an appropriate manner and provide information about the purpose of processing. The Digital Personal Data Protection framework requires notices to be clear and understandable and, as applicable, to identify the personal data and purposes for processing. The implementation of provisions under the DPDP Act and Rules is subject to the applicable commencement dates notified by the Government of India.",
    ],
  },
  {
    icon: HandHeart,
    title: "Consent and Withdrawal",
    summary: "You can withdraw consent at any time, subject to applicable law.",
    p: [
      "Where processing is based on consent, you may withdraw consent through the method made available by Sadguru Foods, subject to applicable law and the consequences of withdrawal.",
      "Withdrawal of consent will not affect processing that was lawfully carried out before withdrawal or processing that may continue on another lawful basis.",
    ],
  },
  {
    icon: Database,
    title: "Data Minimisation",
    summary: "We aim to collect only what is relevant to the purpose.",
    p: [
      "Sadguru Foods seeks to collect personal data that is reasonably relevant for the stated purpose. You are encouraged not to provide unnecessary personal or confidential information through general website forms.",
    ],
  },
  {
    icon: FileText,
    title: "How We Use Business Enquiry Information",
    summary: "Who can access the details you send through contact, RFQ and partner forms.",
    p: [
      "Information submitted through contact, RFQ, vendor, partnership or business enquiry forms may be accessed by authorised personnel and relevant internal functions for evaluating and responding to the enquiry.",
      "Where required, information may be shared with relevant service providers or professional advisers subject to appropriate safeguards and applicable law.",
    ],
  },
  {
    icon: Briefcase,
    title: "Career and Recruitment Data",
    summary: "How CVs and job applications are used and kept.",
    p: [
      "If you submit a CV or application, we may use the information to assess your suitability for current or future opportunities, communicate with you regarding recruitment and maintain recruitment records.",
      "You should provide only information relevant to the recruitment process and should ensure that information relating to other individuals is submitted only where you are authorised to do so.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Analytics",
    summary: "Cookies and similar tools that keep the site working and help us improve it.",
    p: [
      "The website may use cookies, pixels, logs or similar technologies for essential website functionality, security, analytics, performance measurement and improving user experience.",
      "Third-party analytics or other technologies may be used where appropriate. Where consent is required, applicable consent mechanisms will be provided. Your browser may also provide controls for cookies, although disabling certain technologies may affect website functionality.",
    ],
  },
  {
    icon: Share2,
    title: "Sharing and Disclosure",
    summary: "When data may be shared, and our position on selling data.",
    p: [
      "Sadguru Foods may disclose personal data to authorised employees and internal teams, service providers, technology and hosting providers, analytics providers, professional advisers, auditors, legal advisers, government or regulatory authorities where required, and other parties where necessary for legitimate business purposes or as permitted by applicable law.",
      "We do not intend to sell personal data as a commercial product.",
    ],
  },
  {
    icon: Server,
    title: "Data Processors and Service Providers",
    summary: "Safeguards we seek when third parties handle data for us.",
    p: [
      "Where third-party service providers process personal data on behalf of Sadguru Foods, we seek to use appropriate contractual, organisational and technical safeguards consistent with applicable law and the nature of the processing.",
    ],
  },
  {
    icon: Globe,
    title: "Cross-Border Data Transfers",
    summary: "What we do if data is processed or stored outside India.",
    p: [
      "Where personal data is processed or stored outside India, Sadguru Foods will take steps required under applicable law, including applicable restrictions or conditions concerning transfers to jurisdictions outside India.",
    ],
  },
  {
    icon: Clock,
    title: "Data Retention",
    summary: "We keep data only as long as reasonably necessary.",
    p: [
      "We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, to comply with legal and regulatory requirements, to maintain appropriate business records, to resolve disputes, enforce agreements or protect legal rights, or for other lawful purposes.",
      "Retention periods may vary depending on the type of information and the relationship with Sadguru Foods.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    summary: "The measures we take to protect your data, and a note on online risk.",
    p: [
      "Sadguru Foods takes reasonable technical and organisational measures appropriate to the nature of personal data and the risks involved to protect personal data against unauthorised access, misuse, loss, alteration, disclosure or destruction.",
      "No electronic transmission or storage system can be guaranteed to be completely secure. Users should therefore avoid sending unnecessary confidential or sensitive information through general website forms.",
    ],
  },
  {
    icon: Baby,
    title: "Personal Data of Children",
    summary: "Our website is meant for business and general audiences.",
    p: [
      "The website is intended primarily for business and general audiences. We do not knowingly seek personal data from children through general website forms except where permitted and appropriately authorised under applicable law.",
      "If you believe that personal data of a child has been provided to us improperly, please contact us so that we can review the matter and take appropriate action.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights and Requests",
    summary: "Access, correction, erasure, withdrawal of consent and grievance redressal.",
    p: [
      "Subject to applicable law and the relevant implementation provisions, individuals may have rights relating to their personal data, which may include requesting access to information about processing, correction or updating of inaccurate information, erasure where applicable, withdrawal of consent where processing is based on consent, and grievance redressal.",
      "Requests may be submitted through the contact details provided in this Policy. We may need to verify the identity or authority of the requester before acting on a request.",
    ],
  },
  {
    icon: Scale,
    title: "Grievance Redressal",
    summary: "How to raise a question, concern or complaint about your data.",
    p: [
      "If you have a question, concern or complaint regarding our handling of personal data, please contact our designated privacy/grievance contact using the details in the Contact section below.",
      "We will review and respond to grievances in accordance with applicable law and our internal procedures.",
    ],
  },
  {
    icon: ExternalLink,
    title: "Third-Party Websites",
    summary: "Links to other sites are covered by their own privacy policies.",
    p: [
      "The website may contain links to third-party websites or platforms. This Privacy Policy does not govern the privacy practices of those third parties. Users should review the privacy policies of third-party websites before providing personal data to them.",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Communications",
    summary: "Promotional messages, opting out, and essential service messages.",
    p: [
      "Where permitted by applicable law, Sadguru Foods may send business or promotional communications where you have requested them or where another lawful basis applies.",
      "Where an unsubscribe or opt-out mechanism is provided, you may use it to stop receiving such communications. Operational, transactional or legally required communications may continue where permitted or required.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    summary: "How updates are published and communicated.",
    p: [
      "Sadguru Foods may update this Privacy Policy from time to time to reflect changes in our business, website, technologies, legal requirements or data practices.",
      "The updated version will be published on this page with a revised “Last Updated” date. Where required by law, appropriate notice or consent will be provided.",
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law",
    summary: "This policy is governed by the laws of India.",
    p: [
      "This Privacy Policy shall be governed by the laws of India, subject to applicable data-protection and other mandatory legal requirements.",
    ],
  },
];

const highlights = [
  { icon: ThumbsUp, title: "No sale of your data", desc: "We do not intend to sell personal data as a commercial product." },
  { icon: Eye, title: "You stay in control", desc: "Request access, correction or erasure, and withdraw consent where applicable." },
  { icon: Lock, title: "Reasonable safeguards", desc: "Technical and organisational measures protect your information." },
];

const commitments = [
  { icon: ShieldCheck, label: "Your Data Is Safe" },
  { icon: Lock, label: "Transparent Practices" },
  { icon: Handshake, label: "Built on Trust" },
];

const searchText = (s) =>
  [s.title, s.summary, ...(s.p || []), ...(s.list || [])].join(" ").toLowerCase();

/* ───────── Policy card ───────── */
function PolicyCard({ s, number, open, onToggle, index }) {
  const Icon = s.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col self-start overflow-hidden rounded-2xl border bg-white p-4 transition-shadow duration-300 sm:p-6 ${
        open
          ? "border-orange-300 shadow-[0_24px_48px_-20px_rgba(239,127,26,0.4)]"
          : "border-orange-100 shadow-[0_2px_16px_-6px_rgba(239,127,26,0.18)] hover:border-orange-300 hover:shadow-[0_20px_40px_-18px_rgba(239,127,26,0.35)]"
      }`}
    >
      {/* soft corner glow */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/30 sm:h-14 sm:w-14 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
          <Icon size={24} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <p className="font-baloo text-lg font-bold leading-none text-orange-500">
            {String(number).padStart(2, "0")}.
          </p>
          <h3 className="mt-1 text-sm font-bold leading-snug text-[#241209] sm:mt-1.5 sm:text-base">{s.title}</h3>
        </div>
      </div>

      <p className="relative mt-3 text-xs leading-relaxed text-charcoal-400 sm:mt-4 sm:text-sm">{s.summary}</p>

      {/* full text */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden"
        aria-hidden={!open}
      >
        <div className="mt-4 space-y-3 border-t border-orange-100 pt-4 text-xs leading-relaxed text-charcoal-400 sm:text-[13px]">
          {s.p?.map((t) => <p key={t}>{t}</p>)}
          {s.list && (
            <ul className="space-y-2">
              {s.list.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="relative mt-4 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-orange-600 transition-colors hover:text-orange-700 sm:mt-5 sm:text-sm"
      >
        {open ? "Show less" : "Read full details"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </motion.article>
  );
}

export default function PrivacyPolicy() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState(() => new Set());

  const numbered = useMemo(() => sections.map((s, i) => ({ ...s, number: i + 1 })), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? numbered.filter((s) => searchText(s).includes(q)) : numbered;
  }, [query, numbered]);

  const toggle = (n) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });

  const allOpen = filtered.length > 0 && filtered.every((s) => openIds.has(s.number));
  const toggleAll = () =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      filtered.forEach((s) => (allOpen ? next.delete(s.number) : next.add(s.number)));
      return next;
    });

  const contactTiles = [
    { icon: Mail, label: "Email", value: PRIVACY_EMAIL, href: `mailto:${PRIVACY_EMAIL}?subject=Privacy%20Request` },
    { icon: Phone, label: "Phone", value: PRIVACY_PHONE, href: `tel:${CONTACT.phoneRaw}` },
    { icon: MapPin, label: "Office", value: OFFICE_ADDRESS, href: null },
    { icon: Globe, label: "Website", value: WEBSITE, href: `https://${WEBSITE}` },
  ];

  return (
    <>
      <Seo
        title="Privacy Policy | Sadguru Foods Processing Pvt. Ltd."
        description="Read how Sadguru Foods Processing Pvt. Ltd. collects, uses, discloses, retains and protects your personal data."
      />

      {/* scroll progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-orange-400 to-orange-600"
      />

      {/* ───────── HERO (image as background) ───────── */}
      <section className="relative isolate flex items-center overflow-hidden bg-[#FFF9EF] pb-14 pt-28 sm:pt-32 lg:min-h-[580px] lg:pb-20">
        {/* background image: right side on desktop, faded behind text on mobile */}
        <div className="absolute inset-0 -z-10 lg:left-auto lg:w-[64%]">
          <motion.img
            src={privacyHero}
            alt="Shield with lock and a bowl of nuts representing data protection"
            initial={{ scale: reduce ? 1 : 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="h-full w-full object-cover object-[78%_center] opacity-40 mix-blend-multiply lg:opacity-100"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* fade into the left side so the text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #FFF9EF 0%, rgba(255,249,239,0.55) 18%, rgba(255,249,239,0) 48%)",
            }}
          />
          {/* soft fade into the next section */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0) 16%)",
            }}
          />
        </div>

        <div className="container-px relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500"
            >
              Legal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-baloo mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1c2430] sm:text-6xl lg:text-7xl"
            >
              Privacy <span className="text-orange-500">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-400 sm:text-xl"
            >
              We value your trust and are dedicated to protecting your personal information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-orange-400 bg-white/70 text-orange-500 backdrop-blur">
                <CalendarDays size={20} />
              </span>
              <p className="text-sm text-charcoal-400">
                Last Updated: <b className="font-semibold text-charcoal">{LAST_UPDATED}</b>
                <span className="mx-3 text-orange-300">|</span>
                Effective Date: <b className="font-semibold text-charcoal">{EFFECTIVE_DATE}</b>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── INTRO + HIGHLIGHTS ───────── */}
      <section className="relative bg-white pt-14">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-base leading-relaxed text-charcoal-400 sm:text-lg">
              Sadguru Foods Processing Pvt. Ltd. (“Sadguru Foods”, “Company”, “we”, “us” or
              “our”) respects your privacy and is committed to handling personal data
              responsibly. This Policy explains how we collect, use, disclose, retain and
              protect personal data when you visit or interact with{" "}
              <span className="font-semibold text-orange-600">{WEBSITE}</span> and related
              digital channels operated by us. It should be read together with our Website
              Terms &amp; Conditions.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-orange-50 to-[#FFF9EF] p-5 ring-1 ring-orange-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <h.icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-[#241209]">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-400">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── POLICY CARDS ───────── */}
      <section className="bg-white pb-16 pt-12">
        <div className="container-px mx-auto max-w-7xl">
          {/* toolbar */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search this policy (e.g. cookies, career, rights)"
                aria-label="Search privacy policy"
                className="w-full rounded-full border border-orange-200 bg-white py-3 pl-11 pr-11 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-charcoal-300 hover:bg-orange-50 hover:text-orange-600"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={toggleAll}
              disabled={!filtered.length}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white disabled:opacity-40"
            >
              <ChevronsUpDown size={16} />
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          {filtered.length ? (
            <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <PolicyCard
                  key={s.title}
                  s={s}
                  number={s.number}
                  index={i}
                  open={openIds.has(s.number)}
                  onToggle={() => toggle(s.number)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-orange-300 bg-orange-50/50 px-6 py-16 text-center">
              <ShieldQuestion size={36} className="mx-auto text-orange-500" />
              <p className="mt-4 font-semibold text-[#241209]">No sections match “{query}”.</p>
              <p className="mt-1 text-sm text-charcoal-400">Try a different keyword or clear the search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section className="bg-[#FFF9EF] py-16">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              </span>
              Contact Details
            </span>
            <h2 className="font-baloo mt-5 text-3xl font-bold text-[#241209] sm:text-4xl">
              Questions about your <span className="text-orange-500">data?</span>
            </h2>
            <p className="mt-4 text-charcoal-400">
              Reach our Privacy / Grievance contact at Sadguru Foods Processing Pvt. Ltd. Please
              use the subject line <b className="text-[#241209]">“Privacy Request”</b> or{" "}
              <b className="text-[#241209]">“Data Protection Grievance”</b> so we can route your
              message quickly.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {contactTiles.map((c, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/25">
                    <c.icon size={20} />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-orange-500">{c.label}</p>
                  <p className="mt-1 break-words text-xs font-medium text-[#241209] sm:text-sm">{c.value}</p>
                </>
              );
              const cls =
                "block h-full rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {c.href ? (
                    <a href={c.href} className={cls}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── COMMITMENT BANNER ───────── */}
      <section className="bg-white py-14">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-100 via-[#FFF1DC] to-orange-50 px-6 py-10 ring-1 ring-orange-200 sm:px-10 lg:px-14"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr_auto]">
              <div className="flex items-center gap-5">
                <motion.span
                  animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl shadow-orange-500/30"
                >
                  <ShieldCheck size={38} />
                </motion.span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600">
                    Our Commitment
                  </p>
                  <h2 className="font-baloo mt-1 text-3xl font-bold leading-tight text-[#241209] sm:text-4xl">
                    We're Committed to <span className="text-orange-500">Your Privacy</span>
                  </h2>
                </div>
              </div>

              <ul className="grid grid-cols-3 gap-3 border-orange-200 lg:border-l lg:pl-8">
                {commitments.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm ring-1 ring-orange-200">
                      <Icon size={22} />
                    </span>
                    <span className="text-xs font-semibold leading-tight text-charcoal-400">{label}</span>
                  </li>
                ))}
              </ul>

              <p className="font-baloo hidden -rotate-3 text-2xl font-bold italic leading-snug text-orange-500 lg:block">
                Good Food,
                <br />
                Better Tomorrow
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}