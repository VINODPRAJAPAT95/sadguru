import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, ChevronUp } from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from "./SocialIcons";
import { COMPANY_NAME, CONTACT, SOCIAL } from "../config";
import logo from "../assets/logofooter.png";

const DARK = "#4A3220";
const CREAM = "#F7ECDA";
const ORANGE = "#E2903F";

const brandLinks = [
  { name: "Mumma", slug: "brand-1" },
  { name: "T2M", slug: "brand-2" },
  { name: "Milletveda", slug: "brand-3" },
  { name: "Ahaarsutra", slug: "brand-4" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about/our-story" },
  { label: "Our Team", to: "/about/our-team" },
  { label: "Brands", to: "/brands" },
  { label: "Services", to: "/services" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/about/privacy-policy" },
  { label: "Terms & Conditions", to: "/about/terms-and-conditions" },
];

const socials = [
  { Icon: FacebookIcon, href: SOCIAL.facebook, label: "Facebook" },
  { Icon: TwitterIcon, href: SOCIAL.twitter, label: "Twitter" },
  { Icon: YoutubeIcon, href: SOCIAL.youtube, label: "YouTube" },
  { Icon: InstagramIcon, href: SOCIAL.instagram, label: "Instagram" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ColumnHeading({ children }) {
  return (
    <p className="text-sm font-extrabold uppercase tracking-[0.1em]" style={{ color: CREAM }}>
      {children}
    </p>
  );
}

function FooterLink({ to, children }) {
  return (
    <li className="flex items-center gap-2">
      <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
      <Link to={to} className="text-[15px] transition-colors duration-200" style={{ color: `${CREAM}CC` }} onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)} onMouseLeave={(e) => (e.currentTarget.style.color = `${CREAM}CC`)}>
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative w-full overflow-hidden rounded-t-[1.25rem]" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E2903F] to-transparent" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#E2903F]/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-[#E2903F]/8 blur-3xl" />
        <div className="relative container-px mx-auto max-w-7xl px-5 pb-6 pt-8 sm:px-7 sm:pt-9 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center">
                <img src={logo} alt={COMPANY_NAME} className="h-14 w-auto object-contain sm:h-16 lg:h-20" />
              </Link>
              <div className="mt-5">
                <ColumnHeading>Contact</ColumnHeading>
                <div className="mt-2 flex flex-col gap-1 text-[15px]" style={{ color: `${CREAM}CC` }}>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex w-fit items-center gap-2 transition-colors duration-200 hover:text-[#E2903F]">
                    <Phone size={13} style={{ color: ORANGE }} />
                    {CONTACT.phone}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="inline-flex w-fit items-center gap-2 transition-colors duration-200 hover:text-[#E2903F]">
                    <Mail size={13} style={{ color: ORANGE }} />
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <ColumnHeading>Headquarters Address</ColumnHeading>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed" style={{ color: `${CREAM}CC` }}>
                  {CONTACT.address}
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="mt-2 flex flex-col gap-2">
                {quickLinks.map((l) => (
                  <FooterLink key={l.to} to={l.to}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
              <ColumnHeading>Brands</ColumnHeading>
              <ul className="mt-2 flex flex-col gap-2">
                {brandLinks.map((b) => (
                  <FooterLink key={b.slug} to={`/brands/${b.slug}`}>
                    {b.name}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}>
              <ColumnHeading>Legal</ColumnHeading>
              <ul className="mt-2 flex flex-col gap-2">
                {legalLinks.map((l) => (
                  <FooterLink key={l.to} to={l.to}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
              <div className="mt-5">
                <ColumnHeading>Social Media</ColumnHeading>
                <div className="mt-2 flex items-center gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.92 }} style={{ color: CREAM }} className="transition-colors duration-200 hover:text-[#E2903F]">
                      <Icon size={32} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 h-px w-full" style={{ backgroundColor: `${CREAM}1F` }} />
          <div className="mt-4 flex flex-col items-center justify-between gap-2 text-[12px] font-semibold uppercase tracking-[0.06em] sm:flex-row">
            <p style={{ color: `${CREAM}CC` }}>
              Copyright © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
            </p>
            <p style={{ color: `${CREAM}CC` }}>
              Developed by{" "}
              <a href="https://creadordesigns.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#E2903F]">
                Creador Designs
              </a>
            </p>
          </div>
        </div>
        <motion.button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }} className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg shadow-lg sm:bottom-5 sm:right-5" style={{ backgroundColor: ORANGE, color: DARK }}>
          <ChevronUp size={16} strokeWidth={2.5} />
        </motion.button>
      </motion.div>
    </footer>
  );
}