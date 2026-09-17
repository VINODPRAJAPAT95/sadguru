import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { CONTACT, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "../config";

const contactCards = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Headquarters", value: CONTACT.address, href: null },
  { icon: Clock, label: "Working Hours", value: CONTACT.hours, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!/^[\d+\-\s]{7,}$/.test(form.phone)) e.phone = "Please enter a valid phone number.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <>
      <Seo title="Contact Us | Sadguru Food Processing Pvt. Ltd." description="Get in touch with Sadguru Food Processing Pvt. Ltd. — phone, email, address and contact form." />
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        description="Whether you're a customer, retailer or future partner, our team is ready to help."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-charcoal-100 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <c.icon size={20} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-charcoal-300">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-1 block text-sm font-medium text-charcoal hover:text-primary">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-charcoal">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-cream">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle label="Send a Message" title="We'd Love to Hear From You" className="mb-8" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-2xl bg-primary-50 p-6"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={22} />
                <div>
                  <p className="font-semibold text-primary-700">Message sent successfully!</p>
                  <p className="mt-1 text-sm text-charcoal-400">We'll get back to you within one business day.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal">Full Name</label>
                  <input
                    value={form.name}
                    onChange={handleChange("name")}
                    type="text"
                    className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.name ? "border-red-400" : "border-charcoal-100"
                    }`}
                  />
                  {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal">Email</label>
                  <input
                    value={form.email}
                    onChange={handleChange("email")}
                    type="email"
                    className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.email ? "border-red-400" : "border-charcoal-100"
                    }`}
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal">Phone</label>
                  <input
                    value={form.phone}
                    onChange={handleChange("phone")}
                    type="tel"
                    className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.phone ? "border-red-400" : "border-charcoal-100"
                    }`}
                  />
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal">Subject</label>
                  <input
                    value={form.subject}
                    onChange={handleChange("subject")}
                    type="text"
                    className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.subject ? "border-red-400" : "border-charcoal-100"
                    }`}
                  />
                  {errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
                </div>
                <div className="col-span-full flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal">Message</label>
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    rows={5}
                    className={`resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.message ? "border-red-400" : "border-charcoal-100"
                    }`}
                  />
                  {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  className="col-span-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-3 text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={17} />
              Chat With Us on WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl"
          >
            <iframe
              title="Sadguru Food Processing location map"
              src="https://www.google.com/maps?q=Hafeezpet%2C%20Serilingampalli%2C%20Hyderabad%2C%20Telangana&output=embed"
              className="h-[420px] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
