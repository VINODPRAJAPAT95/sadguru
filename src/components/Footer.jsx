import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, ChevronUp } from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from "./SocialIcons";
import { COMPANY_NAME, CONTACT, SOCIAL } from "../config";
import logo from "../assets/logo.svg";

// Same palette as GetInTouchBar, so the two sit together as one visual family.
const DARK = "#2A160C";
const CREAM = "#F7ECDA";
const ORANGE = "#E2903F";

// Brand links are defined here directly since each brand page now owns its
// own content (see pages/BrandOne.jsx, BrandTwo.jsx, BrandThree.jsx, BrandFour.jsx).
const brandLinks = [
  { name: "Mumma", slug: "brand-1" },
  { name: "T2M", slug: "brand-2" },
  { name: "Milletveda", slug: "brand-3" },
  { name: "Nashta", slug: "brand-4" },
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
    <p
      className="text-sm font-extrabold uppercase tracking-[0.1em]"
      style={{ color: CREAM }}
    >
      {children}
    </p>
  );
}

function FooterLink({ to, children }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: ORANGE }}
      />
      <Link
        to={to}
        className="text-[15px] transition-colors duration-200"
        style={{ color: `${CREAM}CC` }}
        onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
        onMouseLeave={(e) => (e.currentTarget.style.color = `${CREAM}CC`)}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full overflow-hidden rounded-t-[2rem]"
        style={{ backgroundColor: DARK }}
      >
        {/* Gradient seam along the top edge, matching the CTA bar's accent */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#E2903F] to-transparent" />

        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#E2903F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#E2903F]/10 blur-3xl" />

        <div className="relative container-px mx-auto max-w-7xl px-6 pb-10 pt-12 sm:px-10 sm:pt-14 lg:px-14">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Contact column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="lg:col-span-2"
            >
              <Link to="/" className="inline-flex items-center">
                <img src={logo} alt={COMPANY_NAME} className="h-20 w-auto object-contain sm:h-24 lg:h-28" />
              </Link>

              <div className="mt-8">
                <ColumnHeading>Contact</ColumnHeading>
                <div className="mt-4 flex flex-col gap-2 text-[15px]" style={{ color: `${CREAM}CC` }}>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="inline-flex w-fit items-center gap-2 transition-colors duration-200 hover:!text-[#E2903F]"
                  >
                    <Phone size={14} style={{ color: ORANGE }} />
                    {CONTACT.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex w-fit items-center gap-2 transition-colors duration-200 hover:!text-[#E2903F]"
                  >
                    <Mail size={14} style={{ color: ORANGE }} />
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <ColumnHeading>Headquarters Address</ColumnHeading>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed" style={{ color: `${CREAM}CC` }}>
                  {CONTACT.address}
                </p>
              </div>

              <div className="mt-8">
                <ColumnHeading>Social Media</ColumnHeading>
                <div className="mt-4 flex items-center gap-5">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      style={{ color: CREAM }}
                      className="transition-colors duration-200 hover:!text-[#E2903F]"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
            >
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="mt-5 flex flex-col gap-3.5">
                {quickLinks.map((l) => (
                  <FooterLink key={l.to} to={l.to}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>

            {/* Brands */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
            >
              <ColumnHeading>Brands</ColumnHeading>
              <ul className="mt-5 flex flex-col gap-3.5">
                {brandLinks.map((b) => (
                  <FooterLink key={b.slug} to={`/brands/${b.slug}`}>
                    {b.name}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
            >
              <ColumnHeading>Legal</ColumnHeading>
              <ul className="mt-5 flex flex-col gap-3.5">
                {legalLinks.map((l) => (
                  <FooterLink key={l.to} to={l.to}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full" style={{ backgroundColor: `${CREAM}1F` }} />

          {/* Bottom bar */}
          <div className="mt-7 flex flex-col items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.06em] sm:flex-row">
            <p style={{ color: `${CREAM}CC` }}>
              Copyright © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
            </p>
            <p style={{ color: `${CREAM}CC` }}>
              Developed by{" "}
              <a
                href="https://creadordesigns.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:!text-[#E2903F]"
              >
                Creador Designs
              </a>
            </p>
          </div>
        </div>

        {/* Scroll to top */}
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg sm:bottom-8 sm:right-8"
          style={{ backgroundColor: ORANGE, color: DARK }}
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </motion.button>
      </motion.div>
    </footer>
  );
}