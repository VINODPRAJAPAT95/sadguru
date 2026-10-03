import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays, Scale, CheckCircle2, ChevronDown,
  ArrowUp, List, Mail, Phone, MapPin, Globe,
  ClipboardList, Users, Target, ShieldCheck, HandHeart, Database,
  FileText, Briefcase, Cookie, Share2, Server, Clock, Lock,
  Baby, UserCheck, ExternalLink, Megaphone, RefreshCw, Gavel,
  ThumbsUp, Eye,
} from "lucide-react";
import Seo from "../components/Seo";
import { CONTACT } from "../config";

/* ───────── Edit here ───────── */
const LAST_UPDATED = "September 2026";
const EFFECTIVE_DATE = "September 2026";
const WEBSITE = "www.sadgurufoods.com";
const PRIVACY_EMAIL = CONTACT.email; // privacy ka alag email ho to yaha likho
const PRIVACY_PHONE = CONTACT.phone;
const OFFICE_ADDRESS = CONTACT.address;
/* ───────────────────────────── */

/* blocks: string = paragraph, array = bullet list */
const sections = [
  {
    icon: ClipboardList,
    title: "Scope",
    blocks: [
      "This Privacy Policy applies to personal data collected through the Sadguru Foods website, contact and enquiry forms, business/RFQ forms, vendor or partner forms, career applications, newsletter or communication subscriptions, cookies and similar technologies, and other online interactions with Sadguru Foods.",
      "It may also apply where we receive personal data in connection with a business relationship, subject to the terms of the relevant contract or notice.",
    ],
  },
  {
    icon: Users,
    title: "Personal Data We May Collect",
    blocks: [
      "Depending on how you interact with us, we may collect:",
      [
        "Identity and contact information such as name, designation, company name, email address, telephone/mobile number and business address.",
        "Business information such as organisation details, enquiry details, product or manufacturing requirements, specifications and communications.",
        "Career information such as CV/resume, education, qualifications, employment history, skills and information voluntarily provided during recruitment.",
        "Communication information such as messages, feedback, enquiries and correspondence.",
        "Technical information such as IP address, browser type, device information, operating system, approximate location derived from technical data, access times and website usage information.",
        "Cookie and analytics information generated through website technologies.",
        "Other information that you voluntarily provide to us or that is lawfully provided to us by an authorised business contact.",
      ],
    ],
  },
  {
    icon: Target,
    title: "Purposes of Processing",
    blocks: [
      "We may process personal data for purposes including:",
      [
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
    ],
  },
  {
    icon: ShieldCheck,
    title: "Basis for Processing",
    blocks: [
      "Where applicable, Sadguru Foods may process personal data based on consent or other lawful grounds available under applicable law.",
      "Where consent is relied upon, we will seek consent in an appropriate manner and provide information about the purpose of processing. The Digital Personal Data Protection framework requires notices to be clear and understandable and, as applicable, to identify the personal data and purposes for processing. The implementation of provisions under the DPDP Act and Rules is subject to the applicable commencement dates notified by the Government of India.",
    ],
  },
  {
    icon: HandHeart,
    title: "Consent and Withdrawal",
    blocks: [
      "Where processing is based on consent, you may withdraw consent through the method made available by Sadguru Foods, subject to applicable law and the consequences of withdrawal.",
      "Withdrawal of consent will not affect processing that was lawfully carried out before withdrawal or processing that may continue on another lawful basis.",
    ],
  },
  {
    icon: Database,
    title: "Data Minimisation",
    blocks: [
      "Sadguru Foods seeks to collect personal data that is reasonably relevant for the stated purpose. You are encouraged not to provide unnecessary personal or confidential information through general website forms.",
    ],
  },
  {
    icon: FileText,
    title: "How We Use Business Enquiry Information",
    blocks: [
      "Information submitted through contact, RFQ, vendor, partnership or business enquiry forms may be accessed by authorised personnel and relevant internal functions for evaluating and responding to the enquiry.",
      "Where required, information may be shared with relevant service providers or professional advisers subject to appropriate safeguards and applicable law.",
    ],
  },
  {
    icon: Briefcase,
    title: "Career and Recruitment Data",
    blocks: [
      "If you submit a CV or application, we may use the information to assess your suitability for current or future opportunities, communicate with you regarding recruitment and maintain recruitment records.",
      "You should provide only information relevant to the recruitment process and should ensure that information relating to other individuals is submitted only where you are authorised to do so.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Analytics",
    blocks: [
      "The website may use cookies, pixels, logs or similar technologies for essential website functionality, security, analytics, performance measurement and improving user experience.",
      "Third-party analytics or other technologies may be used where appropriate. Where consent is required, applicable consent mechanisms will be provided. Your browser may also provide controls for cookies, although disabling certain technologies may affect website functionality.",
    ],
  },
  {
    icon: Share2,
    title: "Sharing and Disclosure",
    blocks: [
      "Sadguru Foods may disclose personal data to authorised employees and internal teams, service providers, technology and hosting providers, analytics providers, professional advisers, auditors, legal advisers, government or regulatory authorities where required, and other parties where necessary for legitimate business purposes or as permitted by applicable law.",
      "We do not intend to sell personal data as a commercial product.",
    ],
  },
  {
    icon: Server,
    title: "Data Processors and Service Providers",
    blocks: [
      "Where third-party service providers process personal data on behalf of Sadguru Foods, we seek to use appropriate contractual, organisational and technical safeguards consistent with applicable law and the nature of the processing.",
    ],
  },
  {
    icon: Globe,
    title: "Cross-Border Data Transfers",
    blocks: [
      "Where personal data is processed or stored outside India, Sadguru Foods will take steps required under applicable law, including applicable restrictions or conditions concerning transfers to jurisdictions outside India.",
    ],
  },
  {
    icon: Clock,
    title: "Data Retention",
    blocks: [
      "We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, to comply with legal and regulatory requirements, to maintain appropriate business records, to resolve disputes, enforce agreements or protect legal rights, or for other lawful purposes.",
      "Retention periods may vary depending on the type of information and the relationship with Sadguru Foods.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    blocks: [
      "Sadguru Foods takes reasonable technical and organisational measures appropriate to the nature of personal data and the risks involved to protect personal data against unauthorised access, misuse, loss, alteration, disclosure or destruction.",
      "No electronic transmission or storage system can be guaranteed to be completely secure. Users should therefore avoid sending unnecessary confidential or sensitive information through general website forms.",
    ],
  },
  {
    icon: Baby,
    title: "Personal Data of Children",
    blocks: [
      "The website is intended primarily for business and general audiences. We do not knowingly seek personal data from children through general website forms except where permitted and appropriately authorised under applicable law.",
      "If you believe that personal data of a child has been provided to us improperly, please contact us so that we can review the matter and take appropriate action.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights and Requests",
    blocks: [
      "Subject to applicable law and the relevant implementation provisions, individuals may have rights relating to their personal data, which may include requesting access to information about processing, correction or updating of inaccurate information, erasure where applicable, withdrawal of consent where processing is based on consent, and grievance redressal.",
      "Requests may be submitted through the contact details provided in this Policy. We may need to verify the identity or authority of the requester before acting on a request.",
    ],
  },
  {
    icon: Scale,
    title: "Grievance Redressal",
    blocks: [
      "If you have a question, concern or complaint regarding our handling of personal data, please contact our designated privacy/grievance contact using the details in the Contact section below.",
      "We will review and respond to grievances in accordance with applicable law and our internal procedures.",
    ],
  },
  {
    icon: ExternalLink,
    title: "Third-Party Websites",
    blocks: [
      "The website may contain links to third-party websites or platforms. This Privacy Policy does not govern the privacy practices of those third parties. Users should review the privacy policies of third-party websites before providing personal data to them.",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Communications",
    blocks: [
      "Where permitted by applicable law, Sadguru Foods may send business or promotional communications where you have requested them or where another lawful basis applies.",
      "Where an unsubscribe or opt-out mechanism is provided, you may use it to stop receiving such communications. Operational, transactional or legally required communications may continue where permitted or required.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    blocks: [
      "Sadguru Foods may update this Privacy Policy from time to time to reflect changes in our business, website, technologies, legal requirements or data practices.",
      "The updated version will be published on this page with a revised “Last Updated” date. Where required by law, appropriate notice or consent will be provided.",
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law",
    blocks: [
      "This Privacy Policy shall be governed by the laws of India, subject to applicable data-protection and other mandatory legal requirements.",
    ],
  },
  { icon: Mail, title: "Contact Details", type: "contact" },
].map((s, i) => ({ ...s, n: i + 1 }));

const glance = [
  { icon: ThumbsUp, title: "No sale of your data", desc: "We do not intend to sell personal data as a commercial product." },
  { icon: Eye, title: "You stay in control", desc: "Request access, correction or erasure, and withdraw consent where applicable." },
  { icon: Lock, title: "Reasonable safeguards", desc: "Technical and organisational measures protect your information." },
  { icon: Gavel, title: "Indian law applies", desc: "This Policy is governed by the laws of India." },
];

const pad = (n) => String(n).padStart(2, "0");

/* ───────── One section (timeline style) ───────── */
function SectionBlock({ s }) {
  const Icon = s.icon;

  const tiles = [
    { icon: MapPin, label: "Office address", value: OFFICE_ADDRESS, href: null, wide: true },
    { icon: Mail, label: "Email", value: PRIVACY_EMAIL, href: `mailto:${PRIVACY_EMAIL}?subject=Privacy%20Request` },
    { icon: Phone, label: "Phone", value: PRIVACY_PHONE, href: `tel:${CONTACT.phoneRaw}` },
    { icon: Globe, label: "Website", value: WEBSITE, href: `https://${WEBSITE}`, wide: true },
  ];

  return (
    <motion.article
      id={`privacy-${s.n}`}
      data-section={s.n}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-28"
    >
      <div className="flex gap-4 sm:gap-6">
        {/* rail */}
        <div className="flex flex-col items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/30 sm:h-12 sm:w-12">
            <Icon size={21} strokeWidth={1.8} />
          </span>
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-orange-300 to-transparent" />
        </div>

        <div className="min-w-0 flex-1 pb-10 sm:pb-12">
          <h2 className="font-baloo text-2xl font-bold leading-tight text-[#241209] sm:text-3xl">
            {s.title}
          </h2>

          {s.type === "contact" ? (
            <div className="mt-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <p className="font-semibold text-[#241209]">Sadguru Foods Processing Pvt. Ltd.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {tiles.map((t) => {
                  const inner = (
                    <>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        <t.icon size={18} />
                      </span>
                      <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-orange-500">{t.label}</p>
                      <p className="mt-0.5 break-words text-xs font-medium text-[#241209] sm:text-sm">{t.value}</p>
                    </>
                  );
                  const cls = `group block h-full rounded-xl border border-orange-100 bg-[#FFF9EF] p-4 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md ${
                    t.wide ? "col-span-2" : ""
                  }`;
                  return t.href ? (
                    <a key={t.label} href={t.href} className={cls}>{inner}</a>
                  ) : (
                    <div key={t.label} className={cls}>{inner}</div>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-charcoal-400">
                Reach our Privacy / Grievance contact at Sadguru Foods Processing Pvt. Ltd. Please
                use the subject line <b className="text-[#241209]">“Privacy Request”</b> or{" "}
                <b className="text-[#241209]">“Data Protection Grievance”</b> so we can route your
                message quickly.
              </p>
            </div>
          ) : (
            <div className="mt-4 space-y-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_2px_16px_-8px_rgba(239,127,26,0.2)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(239,127,26,0.35)] sm:p-7">
              {s.blocks.map((b, i) =>
                Array.isArray(b) ? (
                  <ul key={i} className="space-y-2.5">
                    {b.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-charcoal-400 sm:text-[15px]">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-sm leading-relaxed text-charcoal-400 sm:text-[15px]">{b}</p>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function PrivacyPolicy() {
  const [active, setActive] = useState(1);
  const [showTop, setShowTop] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const tocRef = useRef(null);

  const total = sections.length;
  const year = useMemo(() => new Date().getFullYear(), []);

  /* scrollspy */
  useEffect(() => {
    const els = document.querySelectorAll("[data-section]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.section));
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* back-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* keep active item visible inside the sidebar list */
  useEffect(() => {
    const box = tocRef.current;
    const item = box?.querySelector(`[data-toc="${active}"]`);
    if (box && item) {
      box.scrollTo({ top: item.offsetTop - box.clientHeight / 2 + item.clientHeight / 2, behavior: "smooth" });
    }
  }, [active]);

  const goTo = (n) => {
    document.getElementById(`privacy-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <>
      <Seo
        title="Privacy Policy | Sadguru Foods Processing Pvt. Ltd."
        description="Read how Sadguru Foods Processing Pvt. Ltd. collects, uses, discloses, retains and protects your personal data."
      />

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF9EF] to-orange-100/70 pb-16 pt-28 sm:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />

        <div className="container-px relative mx-auto max-w-7xl">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-600 shadow-sm backdrop-blur"
            >
              Legal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-baloo mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1c2430] sm:text-6xl lg:text-7xl"
            >
              Privacy <span className="text-orange-500">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-400 sm:text-xl"
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

      {/* ───────── AT A GLANCE ───────── */}
      <section className="relative z-10 -mt-8 bg-transparent">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {glance.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-orange-100 bg-white p-4 shadow-lg shadow-orange-500/5 sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white sm:h-11 sm:w-11">
                  <g.icon size={19} />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#241209] sm:text-base">{g.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-charcoal-400 sm:text-sm">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BODY ───────── */}
      <section className="bg-white pb-20 pt-14">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-orange-100 bg-white p-4 shadow-lg shadow-orange-500/5">
              <div className="flex items-center justify-between px-2">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-600">Contents</p>
                <p className="text-xs font-semibold text-charcoal-400">
                  {pad(active)} / {total}
                </p>
              </div>
              <div className="mx-2 mt-3 h-1.5 overflow-hidden rounded-full bg-orange-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                  animate={{ width: `${(active / total) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <nav
                ref={tocRef}
                aria-label="Privacy policy sections"
                className="relative mt-3 max-h-[calc(100vh-15rem)] overflow-y-auto pr-1"
              >
                <ul className="space-y-0.5">
                  {sections.map((s) => {
                    const on = active === s.n;
                    return (
                      <li key={s.n} data-toc={s.n}>
                        <button
                          type="button"
                          onClick={() => goTo(s.n)}
                          title={s.title}
                          className={`relative flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                            on ? "font-semibold text-orange-700" : "text-charcoal-400 hover:text-orange-600"
                          }`}
                        >
                          {on && (
                            <motion.span
                              layoutId="toc-active"
                              className="absolute inset-0 rounded-lg bg-orange-50 ring-1 ring-orange-200"
                              transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                          )}
                          <span className={`relative w-6 shrink-0 text-xs font-bold ${on ? "text-orange-500" : "text-charcoal-300"}`}>
                            {pad(s.n)}
                          </span>
                          <span className="relative truncate">{s.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0">
            {/* Mobile contents */}
            <div className="mb-8 lg:hidden">
              <button
                type="button"
                onClick={() => setTocOpen((o) => !o)}
                aria-expanded={tocOpen}
                className="flex w-full items-center justify-between rounded-2xl border border-orange-200 bg-orange-50/60 px-5 py-3.5 text-sm font-semibold text-orange-700"
              >
                <span className="flex items-center gap-2">
                  <List size={18} /> Jump to a section
                </span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: tocOpen ? "auto" : 0, opacity: tocOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-2 grid grid-cols-1 gap-1 rounded-2xl border border-orange-100 bg-white p-2 sm:grid-cols-2">
                  {sections.map((s) => (
                    <li key={s.n}>
                      <button
                        type="button"
                        onClick={() => goTo(s.n)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-charcoal-400 hover:bg-orange-50 hover:text-orange-700"
                      >
                        <span className="w-6 text-xs font-bold text-orange-500">{pad(s.n)}</span>
                        <span className="truncate">{s.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
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

            {/* Sections */}
            <div>
              {sections.map((s) => (
                <SectionBlock key={s.n} s={s} />
              ))}
            </div>

            <p className="border-t border-orange-100 pt-6 text-center text-sm text-charcoal-300">
              © {year} Sadguru Foods Processing Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20, pointerEvents: showTop ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/40 transition-colors hover:bg-orange-600"
      >
        <ArrowUp size={20} />
      </motion.button>
    </>
  );
}