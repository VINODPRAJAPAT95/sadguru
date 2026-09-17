import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import brands from "../data/brands";
import { COMPANY_SHORT_NAME } from "../config";
import logo from "../assets/logo.svg";

const aboutLinks = [
  { label: "Our Story", to: "/about/our-story" },
  { label: "Our Team", to: "/about/our-team" },
  { label: "Privacy Policy", to: "/about/privacy-policy" },
];

function DesktopDropdown({ label, items, isBrands = false }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const onEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  const active = items.some((i) => location.pathname === i.to);

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-1 py-2 text-sm font-bold transition-colors ${
          active ? "text-primary" : "text-charcoal hover:text-primary"
        }`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown size={15} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 rounded-2xl border border-charcoal-100 bg-white p-3 shadow-soft ${
              isBrands ? "w-72" : "w-56"
            }`}
          >
            {isBrands && (
              <p className="px-3 pt-1 pb-2 text-xs font-semibold uppercase tracking-wide text-charcoal-300">
                Our Brands
              </p>
            )}
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-charcoal-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                  >
                    <span>{item.label}</span>
                    {item.tag && (
                      <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-500">
                        {item.tag}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileBrands, setMobileBrands] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const brandLinks = brands.map((b) => ({ label: b.name, to: `/brands/${b.slug}` }));

  const navLinkClass = ({ isActive }) =>
    `text-sm font-bold transition-colors py-2 ${
      isActive ? "text-primary" : "text-charcoal hover:text-primary"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(43,42,41,0.08)]" : ""
      }`}
    >
      <div className="container-px mx-auto flex h-24 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt={COMPANY_SHORT_NAME}
            className="h-16 w-auto object-contain sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <DesktopDropdown label="About" items={aboutLinks} />
          <DesktopDropdown label="Brands" items={brandLinks} isBrands />
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/career" className={navLinkClass}>
            Career
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-600"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-100 text-charcoal lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-charcoal-100 bg-white lg:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              <Link to="/" className="rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50">
                Home
              </Link>

              <button
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50"
                onClick={() => setMobileAbout((o) => !o)}
              >
                About
                <ChevronDown size={18} className={`transition-transform ${mobileAbout ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileAbout && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-charcoal-500 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50"
                onClick={() => setMobileBrands((o) => !o)}
              >
                Brands
                <ChevronDown size={18} className={`transition-transform ${mobileBrands ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileBrands && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {brandLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-charcoal-500 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/services" className="rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50">
                Services
              </Link>
              <Link to="/career" className="rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50">
                Career
              </Link>
              <Link to="/contact" className="rounded-xl px-3 py-3 text-base font-bold text-charcoal hover:bg-primary-50">
                Contact
              </Link>

              <Link
                to="/contact"
                className="mt-2 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-white hover:bg-primary-600"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}