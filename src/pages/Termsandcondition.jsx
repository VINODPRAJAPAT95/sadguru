import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  CalendarDays, Scale, CheckCircle2, ChevronDown,
  ArrowUp, List, Mail, Phone, MapPin, Globe, Info,
  Building2, UserCheck, Package, HeartPulse, Send, ClipboardList, EyeOff,
  Copyright, BadgeCheck, ThumbsUp, Wifi, ExternalLink, MessageSquare,
  Lightbulb, Briefcase, ShieldAlert, Handshake, Eye, Cookie, RefreshCw,
  Pencil, CloudLightning, Gavel, Scissors, Ban, FileCheck, Lock,
} from "lucide-react";
import Seo from "../components/Seo";
import { CONTACT } from "../config";

/* ───────── Edit here ───────── */
const LAST_UPDATED = "September 2026";
const EFFECTIVE_DATE = "September 2026";
const WEBSITE = "www.sadgurufoods.com";
const JURISDICTION = "Hyderabad, Telangana, India"; // legal advisor se confirm kar lena
const OFFICE_ADDRESS = CONTACT.address;
const OFFICE_EMAIL = CONTACT.email;
const OFFICE_PHONE = CONTACT.phone;
const LEGAL_EMAIL = CONTACT.email; // legal/compliance ka alag email ho to yaha likho
/* ───────────────────────────── */

/* blocks: string = paragraph, array = bullet list */
const sections = [
  {
    icon: Building2,
    title: "About Sadguru Foods",
    blocks: [
      "Sadguru Foods Processing Pvt. Ltd. is a company engaged in food processing and related business activities.",
      "The information provided on this Website is intended primarily for general corporate, informational, business-development and communication purposes.",
      "Nothing contained on the Website shall automatically constitute a binding offer, quotation, purchase order, contract, representation, warranty or commitment by Sadguru Foods unless expressly confirmed by the Company in writing through an authorised representative.",
    ],
  },
  {
    icon: UserCheck,
    title: "Eligibility to Use the Website",
    blocks: [
      "You may use this Website only for lawful purposes and in accordance with these Terms.",
      "By using the Website, you represent that:",
      [
        "the information you provide is accurate and complete;",
        "you will use the Website in compliance with applicable laws and regulations;",
        "you will not use the Website for fraudulent, unlawful or unauthorised activities; and",
        "you will not interfere with the operation, security or integrity of the Website.",
      ],
    ],
  },
  {
    icon: Globe,
    title: "Website Content",
    blocks: [
      "The Website may contain information relating to Sadguru Foods, its business activities, products, manufacturing capabilities, facilities, quality and food-safety practices, certifications, regulatory information, partnerships, careers, news, enquiries and other corporate information.",
      "We make reasonable efforts to ensure that information published on the Website is accurate and current. However, information may change from time to time. Sadguru Foods does not guarantee that all Website content will always be complete, accurate, current, error-free or suitable for every particular purpose.",
    ],
  },
  {
    icon: Package,
    title: "Product Information",
    blocks: [
      "Product names, descriptions, photographs, specifications, packaging formats, ingredients, nutritional information, availability, production capabilities and other product-related information are provided for general information.",
      "Actual product characteristics may vary depending on formulation, raw materials, manufacturing batch, applicable specifications, packaging configuration, regulatory requirements and customer requirements.",
      "Where applicable, information printed on actual product packaging, labels, technical specifications, certificates or contractual documentation shall prevail over general Website information.",
    ],
  },
  {
    icon: HeartPulse,
    title: "No Medical or Nutritional Advice",
    blocks: [
      "Unless specifically stated otherwise, information appearing on the Website is not intended to constitute medical, clinical, dietary or professional advice. Any nutritional, ingredient, health-related or technical information is provided for general informational purposes only. Users should consult an appropriately qualified professional before making decisions based on specific dietary, medical, nutritional or health requirements.",
    ],
  },
  {
    icon: Send,
    title: "Business Enquiries and Requests for Quotation",
    blocks: [
      "The Website may provide enquiry forms, contact forms, request-for-quotation (RFQ) forms or other mechanisms through which users may submit business requirements.",
      "Submitting an enquiry does not create a customer relationship, supplier relationship, agency relationship, manufacturing agreement, purchase order, accepted quotation or other contractual relationship with Sadguru Foods.",
      "Any commercial engagement shall be subject to separate written documentation, which may include quotations, proposals, purchase orders, work orders, supply agreements, manufacturing agreements, service agreements, confidentiality agreements or other applicable contracts.",
      "Sadguru Foods reserves the right to accept, reject or request additional information regarding any enquiry at its discretion.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Information Provided by Users",
    blocks: [
      "Where you submit information through the Website, including enquiry, contact, career, vendor or business forms, you agree that:",
      [
        "the information provided is accurate and not misleading;",
        "you have the necessary authority to provide it;",
        "it does not knowingly infringe the rights of another person or organisation;",
        "you will not submit unlawful, defamatory, fraudulent, malicious or harmful material; and",
        "you will not knowingly submit viruses, malicious code or other harmful content.",
      ],
      "You remain responsible for the accuracy and legality of information submitted by you.",
    ],
  },
  {
    icon: EyeOff,
    title: "Confidential Information",
    blocks: [
      "Users should not submit confidential, proprietary, trade-secret or commercially sensitive information through general Website forms unless Sadguru Foods has expressly provided a suitable mechanism for such disclosure.",
      "Submission of information through a general enquiry form does not automatically create a confidentiality obligation. Where confidentiality is required, the parties should execute an appropriate Non-Disclosure Agreement (NDA) or other written confidentiality arrangement.",
    ],
  },
  {
    icon: Copyright,
    title: "Intellectual Property Rights",
    blocks: [
      "Unless otherwise stated, all content appearing on the Website is owned by or licensed to Sadguru Foods and may include:",
      [
        "company names and logos, and trademarks;",
        "text, photographs and product images;",
        "graphics, illustrations, videos and audio;",
        "brochures and downloadable documents;",
        "designs and Website layout; and",
        "icons, software and functionality.",
      ],
      "All such content is protected by applicable intellectual-property laws. No part of the Website may be copied, reproduced, modified, distributed, republished, transmitted, displayed, commercially exploited or otherwise used without prior written permission from Sadguru Foods, except where permitted by applicable law.",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Trademarks",
    blocks: [
      "The Sadguru Foods name, logo, brand identity, product names and other marks displayed on the Website may constitute trademarks or other proprietary marks of Sadguru Foods or their respective owners. Nothing on the Website grants any person a licence or right to use such trademarks without prior written authorisation.",
    ],
  },
  {
    icon: ThumbsUp,
    title: "Permitted Use",
    blocks: [
      "You may access and use the Website for legitimate purposes including:",
      [
        "learning about Sadguru Foods;",
        "understanding its products and capabilities;",
        "contacting the Company;",
        "submitting legitimate business enquiries;",
        "exploring employment opportunities; and",
        "reviewing publicly available company information.",
      ],
      "You must not use the Website to:",
      [
        "commit or facilitate fraud;",
        "impersonate another person or organisation;",
        "transmit malicious software;",
        "interfere with Website functionality;",
        "attempt unauthorised access;",
        "scrape or systematically collect Website data for unauthorised purposes;",
        "reverse engineer Website functionality where prohibited by law;",
        "reproduce proprietary content for commercial use without permission;",
        "upload unlawful or harmful material; or",
        "use the Website in a manner that may damage Sadguru Foods or its reputation.",
      ],
    ],
  },
  {
    icon: Wifi,
    title: "Website Availability",
    blocks: [
      "Sadguru Foods may modify, suspend, restrict or discontinue any part of the Website at any time without prior notice.",
      "We do not guarantee that the Website will:",
      [
        "always be available;",
        "operate without interruption;",
        "be free from errors;",
        "be free from viruses or other harmful components; or",
        "remain unchanged for any particular period.",
      ],
    ],
  },
  {
    icon: ExternalLink,
    title: "Third-Party Websites and Links",
    blocks: [
      "The Website may contain links to third-party websites, platforms or services. Such links are provided for convenience or informational purposes only.",
      "Sadguru Foods does not necessarily endorse, control or assume responsibility for the content, privacy practices, security, availability, products, services or transactions of third-party websites. Users should review the applicable terms and privacy policies of third-party websites before using them.",
    ],
  },
  {
    icon: MessageSquare,
    title: "User-Submitted Content",
    blocks: [
      "If the Website permits users to submit comments, testimonials, reviews, photographs, documents, suggestions or other content, the user remains responsible for the content submitted.",
      "By submitting content, you represent that:",
      [
        "you have the necessary rights and permissions to submit it;",
        "it does not infringe intellectual-property, privacy or other rights of third parties;",
        "it is not unlawful or misleading; and",
        "it does not contain malicious software or harmful material.",
      ],
      "To the extent permitted by law, you grant Sadguru Foods a non-exclusive right to use, reproduce, store and display such content for legitimate business and Website-related purposes, subject to applicable privacy and confidentiality obligations.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Feedback and Suggestions",
    blocks: [
      "If you voluntarily provide suggestions, ideas, feedback or recommendations concerning the Website, products, services or business operations of Sadguru Foods, we may use such feedback for business improvement purposes without creating any obligation to compensate the person providing the feedback, unless otherwise agreed in writing.",
    ],
  },
  {
    icon: Briefcase,
    title: "Career and Employment Information",
    blocks: [
      "Where the Website contains employment or career opportunities, such information is provided for recruitment purposes only.",
      "Submission of a CV, application or expression of interest does not guarantee an interview, selection, employment, compensation, a specific position or any employment relationship. Any employment shall be subject to applicable Company policies, employment documentation and applicable law.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Warranties and Disclaimers",
    blocks: [
      "To the maximum extent permitted by applicable law, the Website and its content are provided on an “as available” and “as is” basis.",
      "Sadguru Foods does not provide any express or implied warranty that the Website or its content will be uninterrupted, completely accurate, error-free, continuously available, suitable for a particular purpose, or free from technical defects or harmful components.",
      "Nothing in these Terms is intended to exclude any statutory right or protection that cannot lawfully be excluded.",
    ],
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    blocks: [
      "To the maximum extent permitted by applicable law, Sadguru Foods shall not be liable for any indirect, incidental, special, consequential or punitive loss arising from or relating to:",
      [
        "access to or use of the Website;",
        "inability to access the Website;",
        "reliance on Website information;",
        "Website interruptions or technical failures;",
        "third-party websites;",
        "unauthorised access or security incidents beyond the Company's reasonable control; or",
        "information submitted by users.",
      ],
      "Nothing in these Terms shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law.",
    ],
  },
  {
    icon: Handshake,
    title: "Indemnification",
    blocks: [
      "To the extent permitted by applicable law, you agree to indemnify and hold harmless Sadguru Foods, its directors, officers, employees and authorised representatives from claims, losses, liabilities, damages, costs or expenses arising from:",
      [
        "your unlawful use of the Website;",
        "breach of these Terms;",
        "violation of applicable law;",
        "infringement of third-party rights through information submitted by you; or",
        "misuse of Website content.",
      ],
    ],
  },
  {
    icon: Eye,
    title: "Privacy",
    blocks: [
      "Sadguru Foods may collect and process personal information submitted through the Website in accordance with its Privacy Policy and applicable data-protection laws.",
      "Users are encouraged to review the Company's Privacy Policy before submitting personal information. The Privacy Policy should be read together with these Terms and Conditions.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Website Technologies",
    blocks: [
      "The Website may use cookies or similar technologies for Website functionality, security, analytics, performance monitoring, improving user experience and understanding Website usage. Where required, applicable consent mechanisms and disclosures will be provided.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    blocks: [
      "Sadguru Foods takes reasonable measures to protect information submitted through the Website. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      "Users acknowledge that electronic communication involves inherent risks and should avoid submitting unnecessary confidential or sensitive information through unsecured channels.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changes to Website Content",
    blocks: [
      "Sadguru Foods may update, modify, add or remove Website content at any time. Product specifications, business capabilities, certifications, contact details, facilities, services, policies and other information may change without prior notice. The latest version published on the Website shall apply from the date specified in the relevant update.",
    ],
  },
  {
    icon: Pencil,
    title: "Changes to These Terms",
    blocks: [
      "Sadguru Foods may revise these Terms from time to time. The updated Terms will be published on this page with a revised “Last Updated” date. Your continued use of the Website after such changes are published constitutes acceptance of the revised Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    icon: CloudLightning,
    title: "Force Majeure",
    blocks: [
      "Sadguru Foods shall not be responsible for delay, interruption or failure arising from circumstances beyond its reasonable control, including:",
      [
        "natural disasters, fire or flood;",
        "epidemic or pandemic;",
        "war or civil disturbance;",
        "governmental restrictions or regulatory changes;",
        "strikes;",
        "infrastructure, power or telecommunications failure;",
        "cyber incidents;",
        "transportation disruptions; or",
        "other events beyond reasonable control.",
      ],
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law",
    blocks: [
      "These Terms shall be governed by and interpreted in accordance with the laws of India.",
      `Subject to applicable law, disputes relating to the Website or these Terms shall be subject to the jurisdiction of the competent courts at ${JURISDICTION}.`,
    ],
  },
  {
    icon: Scissors,
    title: "Severability",
    blocks: [
      "If any provision of these Terms is determined to be invalid, illegal or unenforceable, that provision shall be modified or severed to the extent necessary, and the remaining provisions shall continue in full force and effect.",
    ],
  },
  {
    icon: Ban,
    title: "Waiver",
    blocks: [
      "Failure by Sadguru Foods to enforce any provision of these Terms shall not constitute a waiver of its right to enforce that provision or any other provision in the future.",
    ],
  },
  {
    icon: FileCheck,
    title: "Entire Understanding",
    blocks: [
      "These Terms constitute the general terms governing use of the Website. They do not replace or override any specific written agreement entered into between Sadguru Foods and a customer, supplier, employee, vendor, consultant, business partner or other party.",
      "Where a separate written contract applies, the terms of that contract shall govern the relevant business relationship to the extent of any inconsistency.",
    ],
  },
  { icon: Mail, title: "Contact Information", type: "contact" },
  {
    icon: Info,
    title: "Important Notice",
    type: "notice",
    blocks: [
      "Information available on this Website is intended to provide general information about Sadguru Foods and its business activities.",
      "Specific commercial commitments, product specifications, pricing, supply terms, manufacturing arrangements, quality requirements, delivery conditions, warranties and other contractual obligations shall be governed by the applicable written agreement, quotation, purchase order, specification or other authorised contractual document between the relevant parties.",
    ],
  },
].map((s, i) => ({ ...s, n: i + 1 }));

const glance = [
  { icon: Info, title: "General information", desc: "Website content is for general corporate and informational purposes." },
  { icon: Send, title: "Enquiry ≠ contract", desc: "Submitting an enquiry does not create a binding agreement." },
  { icon: FileCheck, title: "Written confirmation", desc: "Commitments need written confirmation by an authorised representative." },
  { icon: Gavel, title: "Indian law applies", desc: "These Terms are governed by and interpreted under the laws of India." },
];

const pad = (n) => String(n).padStart(2, "0");

/* ───────── One section (timeline style) ───────── */
function SectionBlock({ s }) {
  const Icon = s.icon;
  const isNotice = s.type === "notice";

  const tiles = [
    { icon: MapPin, label: "Office address", value: OFFICE_ADDRESS, href: null, wide: true },
    { icon: Mail, label: "Email", value: OFFICE_EMAIL, href: `mailto:${OFFICE_EMAIL}` },
    { icon: Phone, label: "Phone", value: OFFICE_PHONE, href: `tel:${CONTACT.phoneRaw}` },
    { icon: Globe, label: "Website", value: WEBSITE, href: `https://${WEBSITE}` },
    { icon: Scale, label: "Legal / compliance", value: LEGAL_EMAIL, href: `mailto:${LEGAL_EMAIL}` },
  ];

  return (
    <motion.article
      id={`terms-${s.n}`}
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            Section {pad(s.n)}
          </p>
          <h2 className="font-baloo mt-1 text-2xl font-bold leading-tight text-[#241209] sm:text-3xl">
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
                For legal or compliance-related matters, please use the legal / compliance email above.
              </p>
            </div>
          ) : isNotice ? (
            <div className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl shadow-orange-500/25 sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <div className="relative space-y-4 leading-relaxed">
                {s.blocks.map((b) => (
                  <p key={b} className="text-sm sm:text-base">{b}</p>
                ))}
              </div>
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

export default function TermsAndConditions() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

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
    document.getElementById(`terms-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <>
      <Seo
        title="Terms & Conditions | Sadguru Foods Processing Pvt. Ltd."
        description="Read the website Terms & Conditions of Sadguru Foods Processing Pvt. Ltd."
      />

      {/* reading progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-orange-400 to-orange-600"
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
              className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-600 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              </span>
              Legal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-baloo mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1c2430] sm:text-6xl lg:text-7xl"
            >
              Terms &amp; <span className="text-orange-500">Conditions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-400 sm:text-xl"
            >
              Please read these terms carefully before using the Sadguru Foods website.
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
                aria-label="Terms sections"
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

            {/* Intro + acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-base leading-relaxed text-charcoal-400 sm:text-lg">
                Welcome to the official website of Sadguru Foods Processing Pvt. Ltd. (“Sadguru
                Foods”, “Company”, “we”, “us” or “our”). These Website Terms &amp; Conditions
                (“Terms”) govern your access to and use of the website{" "}
                <span className="font-semibold text-orange-600">{WEBSITE}</span>, including
                webpages, content, features, forms, documents, product information, images,
                videos and other services made available through the Website (collectively, the
                “Website”).
              </p>
              <div className="mt-6 flex gap-4 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-[#FFF9EF] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <CheckCircle2 size={22} />
                </span>
                <p className="text-sm leading-relaxed text-charcoal-400 sm:text-[15px]">
                  <b className="text-[#241209]">By accessing, browsing or using the Website,</b> you
                  acknowledge that you have read, understood and agreed to these Terms. If you do
                  not agree with any part of these Terms, please discontinue use of the Website.
                </p>
              </div>
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