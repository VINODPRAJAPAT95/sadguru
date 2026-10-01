import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Loader2,
  Leaf,
  Heart,
  Users,
} from "lucide-react";
import Seo from "../components/Seo";
import {
  CONTACT,
  WHATSAPP_NUMBER,
  WHATSAPP_DEFAULT_MESSAGE,
} from "../config";

const EASE = [0.22, 1, 0.36, 1];

const COMPANY_NAME = "Sadguru Foods Processing Pvt. Ltd.";

const enquiryOptions = [
  "General Enquiry",
  "Product Enquiry",
  "Distribution / Retail Partnership",
  "Careers",
  "Feedback",
  "Other",
];

const brandPoints = [
  { icon: Leaf, label: "Wholesome Ingredients" },
  { icon: Heart, label: "Better Nutrition" },
  { icon: Users, label: "Stronger Communities" },
];

const script = {
  fontFamily: '"Caveat", "Segoe Script", "Brush Script MT", cursive',
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const rise = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

/* ---------- WhatsApp Icon ---------- */
function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ---------- Decorative Leaf ---------- */
function LeafOutline({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M60 196 C60 150 62 90 66 16" />
      <path d="M66 16 C22 48 20 112 62 150 C104 112 108 48 66 16 Z" />
      <path d="M64 62 L40 82" />
      <path d="M64 62 L90 82" />
      <path d="M63 98 L38 118" />
      <path d="M63 98 L92 118" />
    </svg>
  );
}

/* ---------- Eyebrow ---------- */
function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
      {children}
      <span className="h-px w-8 bg-orange-500 sm:w-10" />
    </span>
  );
}

/* ---------- Info Row ---------- */
function InfoRow({ icon: Icon, title, children, last = false }) {
  return (
    <motion.div
      variants={rise}
      className={`flex items-start gap-4 py-5 ${
        last ? "" : "border-b border-orange-100"
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/25 transition-transform duration-300 hover:scale-110">
        <Icon size={19} strokeWidth={1.9} />
      </span>

      <div className="min-w-0 text-sm leading-relaxed text-charcoal-500">
        <p className="font-bold text-charcoal">{title}</p>
        {children}
      </div>
    </motion.div>
  );
}

/* ---------- Form Field ---------- */
function Field({
  id,
  label,
  error,
  children,
  className = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-charcoal"
      >
        {label} <span className="text-orange-500">*</span>
      </label>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{
              opacity: 0,
              y: -6,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -6,
              height: 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pt-1.5 text-xs font-medium text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Input Classes ---------- */
const inputCls = (err) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-all duration-200 placeholder:text-charcoal-300 focus:ring-4 ${
    err
      ? "border-red-400 focus:ring-red-100"
      : "border-charcoal-100 focus:border-orange-500 focus:ring-orange-100"
  }`;

/* ---------- Page ---------- */
export default function Contact() {
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  /* ---------- Validation ---------- */
  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Please enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Please enter a valid email.";
    }

    if (!/^[\d+\-\s]{7,}$/.test(form.phone)) {
      e.phone = "Please enter a valid phone number.";
    }

    if (!form.subject) {
      e.subject = "Please select an option.";
    }

    if (form.message.trim().length < 10) {
      e.message = "Message should be at least 10 characters.";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  /* ---------- FormSubmit ---------- */
  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    setSending(true);
  };

  /* ---------- Input Change ---------- */
  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });

    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`;

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.address
  )}`;

  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.address
  )}&output=embed`;

  return (
    <>
      <Seo
        title="Contact Us | Sadguru Foods Processing Pvt. Ltd."
        description="Get in touch with Sadguru Foods Processing Pvt. Ltd. phone, email, address and contact form."
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF1DC] via-[#FFF8EE] to-white pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-40">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-orange-200/60 to-orange-100/0 sm:h-96 sm:w-96"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-orange-100/60"
        />

        <LeafOutline className="pointer-events-none absolute left-2 top-28 hidden h-40 w-20 -rotate-12 text-orange-300/70 sm:block lg:left-10 lg:top-32 lg:h-52 lg:w-28" />

        <LeafOutline className="pointer-events-none absolute bottom-4 right-3 hidden h-40 w-20 rotate-12 text-orange-300/70 sm:block lg:right-10 lg:h-48 lg:w-24" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container-px relative mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs"
          >
            <span className="h-px w-8 bg-orange-500 sm:w-10" />
            Get in Touch
            <span className="h-px w-8 bg-orange-500 sm:w-10" />
          </motion.span>

          <motion.h1
            variants={rise}
            className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
          >
            Let's Start a{" "}
            <span className="text-orange-500">Conversation</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-sm leading-relaxed text-charcoal-500 sm:text-base lg:text-lg"
          >
            We'd love to hear from you. Whether you have a question, feedback,
            or want to collaborate our team at Sadguru Foods is here to help.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-7 text-orange-500"
            style={script}
          >
            <p className="-rotate-2 text-2xl sm:text-3xl">
              Good Food Builds a Better Tomorrow
            </p>

            <svg
              viewBox="0 0 120 12"
              className="mx-auto mt-1 h-3 w-28 sm:w-36"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M2 8 Q 40 2 80 6 T 118 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= LOCATION + FORM ================= */}
      <section className="bg-white pb-10 pt-12 lg:pb-14 lg:pt-16">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-8">

          {/* LEFT: LOCATION */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="relative overflow-hidden rounded-3xl border border-orange-100/70 bg-gradient-to-br from-[#FFF2DE] to-[#FFFAF2] p-7 shadow-[0_18px_50px_-28px_rgba(239,127,26,0.35)] sm:p-9"
          >
            <motion.div variants={rise}>
              <Eyebrow>Visit Sadguru Foods</Eyebrow>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-[2rem]">
                Our Location
              </h2>

              <p className="mt-1 text-sm text-charcoal-500">
                Head Office &amp; Manufacturing Unit
              </p>
            </motion.div>

            <div className="mt-6">
              <InfoRow icon={MapPin} title={COMPANY_NAME}>
                <p>{CONTACT.address}</p>
              </InfoRow>

              <InfoRow icon={Phone} title="Phone">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="transition-colors hover:text-orange-600"
                >
                  {CONTACT.phone}
                </a>

                <p className="text-xs text-charcoal-300">
                  ({CONTACT.hours})
                </p>
              </InfoRow>

              <InfoRow icon={Mail} title="Email">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-orange-600"
                >
                  {CONTACT.email}
                </a>

                <p className="text-xs text-charcoal-300">
                  We'll respond within 24 hours.
                </p>
              </InfoRow>

              <InfoRow icon={Clock} title="Business Hours" last>
                <p>{CONTACT.hours}</p>
              </InfoRow>
            </div>

            <motion.div
              variants={rise}
              className="mt-4 flex items-end gap-3 text-orange-500"
              style={script}
            >
            </motion.div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: EASE,
            }}
            className="rounded-3xl border border-charcoal-100/70 bg-white p-7 shadow-[0_20px_60px_-28px_rgba(43,42,41,0.25)] sm:p-10"
          >
            <Eyebrow>Send Us a Message</Eyebrow>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Get in Touch
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-charcoal-500 sm:text-[0.95rem]">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="mt-8">
              <motion.form
                key="form"
                action="https://formsubmit.co/support@sadgurufoods.com"
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
              >
                {/* FormSubmit Settings */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry - Sadguru Foods Website"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                {/* Redirect after submission */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://sadgurufoods.com/contact"
                />

                {/* NAME */}
                <motion.div variants={rise}>
                  <Field
                    id="name"
                    label="Full Name"
                    error={errors.name}
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange("name")}
                      aria-invalid={!!errors.name}
                      className={inputCls(errors.name)}
                      required
                    />
                  </Field>
                </motion.div>

                {/* EMAIL */}
                <motion.div variants={rise}>
                  <Field
                    id="email"
                    label="Email Address"
                    error={errors.email}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      aria-invalid={!!errors.email}
                      className={inputCls(errors.email)}
                      required
                    />
                  </Field>
                </motion.div>

                {/* PHONE */}
                <motion.div variants={rise}>
                  <Field
                    id="phone"
                    label="Phone Number"
                    error={errors.phone}
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      aria-invalid={!!errors.phone}
                      className={inputCls(errors.phone)}
                      required
                    />
                  </Field>
                </motion.div>

                {/* SUBJECT */}
                <motion.div variants={rise}>
                  <Field
                    id="subject"
                    label="Subject / Enquiry Type"
                    error={errors.subject}
                  >
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange("subject")}
                        aria-invalid={!!errors.subject}
                        className={`${inputCls(
                          errors.subject
                        )} appearance-none pr-10 ${
                          form.subject
                            ? ""
                            : "text-charcoal-300"
                        }`}
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>

                        {enquiryOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="text-charcoal"
                          >
                            {option}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-500"
                      />
                    </div>
                  </Field>
                </motion.div>

                {/* MESSAGE */}
                <motion.div
                  variants={rise}
                  className="sm:col-span-2"
                >
                  <Field
                    id="message"
                    label="Message"
                    error={errors.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange("message")}
                      aria-invalid={!!errors.message}
                      className={`${inputCls(
                        errors.message
                      )} min-h-[140px] resize-y`}
                      required
                    />
                  </Field>
                </motion.div>

                {/* SUBMIT */}
                <motion.div
                  variants={rise}
                  className="flex flex-wrap items-center gap-4 sm:col-span-2"
                >
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-shadow duration-300 hover:shadow-[0_14px_30px_-10px] hover:shadow-orange-500 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-orange-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />

                    <span className="relative z-10 inline-flex items-center gap-2">
                      {sending ? (
                        <>
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message

                          <Send
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* WHATSAPP */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-3 text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon size={20} />
                Chat With Us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FULL WIDTH MAP ================= */}
      <section className="bg-white pb-14 lg:pb-20">
        <div className="container-px mx-auto max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="relative overflow-hidden rounded-3xl border border-charcoal-100/70 bg-white shadow-[0_20px_60px_-30px_rgba(43,42,41,0.3)]"
          >
            <div className="relative z-10 border-b border-charcoal-100/70 bg-white p-5 sm:absolute sm:left-6 sm:top-6 sm:w-[22rem] sm:rounded-2xl sm:border-0 sm:p-6 sm:shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                  <MapPin size={18} />
                </span>

                <h3 className="font-display text-lg font-bold text-charcoal">
                  Our Location
                </h3>
              </div>

              <p className="mt-4 text-sm font-bold text-charcoal">
                {COMPANY_NAME}
              </p>

              <p className="mt-1 text-sm leading-relaxed text-charcoal-500">
                {CONTACT.address}
              </p>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition-colors duration-300 hover:bg-orange-600"
              >
                Open in Google Maps

                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <iframe
              title="Sadguru Foods Processing location map"
              src={mapsEmbed}
              className="block h-[320px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= BRAND STRIP ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF4E3] py-14 lg:py-16">
        <LeafOutline className="pointer-events-none absolute -left-2 bottom-0 h-32 w-16 text-orange-300/70 sm:h-44 sm:w-24" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-orange-200/50 sm:h-72 sm:w-72"
        />

        <LeafOutline className="pointer-events-none absolute -right-2 bottom-2 h-32 w-16 rotate-12 text-orange-400/70 sm:h-44 sm:w-24" />

        <div className="container-px relative mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="font-display text-xl font-medium text-charcoal sm:text-2xl"
          >
            Good Food. A Brighter Future.
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mt-8 flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-center sm:gap-0"
          >
            {brandPoints.map((point, index) => (
              <motion.div
                key={point.label}
                variants={rise}
                className={`flex items-center justify-center gap-3 sm:px-8 ${
                  index > 0
                    ? "sm:border-l sm:border-orange-200"
                    : ""
                }`}
              >
                <point.icon
                  size={26}
                  strokeWidth={1.4}
                  className="text-orange-500"
                />

                <span className="text-xs font-medium text-charcoal-500 sm:text-sm">
                  {point.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}