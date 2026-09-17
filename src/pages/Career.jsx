import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, Send } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ValueCard from "../components/ValueCard";
import jobs from "../data/jobs";
import { HeartHandshake, TrendingUp, Users, Coffee } from "lucide-react";

const culture = [
  { icon: HeartHandshake, title: "People First", desc: "We invest in growth, wellbeing and a genuinely supportive team culture." },
  { icon: TrendingUp, title: "Room to Grow", desc: "Cross-brand exposure means faster learning and real career movement." },
  { icon: Users, title: "Collaborative Teams", desc: "Small, focused teams where every voice is heard." },
  { icon: Coffee, title: "Balanced Culture", desc: "We take food, and the people who make it, seriously — without burning out." },
];

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo title="Careers | Sadguru Food Processing Pvt. Ltd." description="Explore career opportunities at Sadguru Food Processing Pvt. Ltd. across manufacturing, quality, marketing and more." />
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With Us"
        description="We're growing four brands at once — and we're looking for people who want to grow with them."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle label="Why Work With Us" title="Our Culture" align="center" className="mb-14 mx-auto" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((c, i) => (
              <ValueCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-5xl">
          <SectionTitle label="Open Positions" title="Current Openings" align="center" className="mb-14 mx-auto" />
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-charcoal-400">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm text-charcoal-400">{job.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-2xl">
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
              className="rounded-2xl bg-primary-50 p-8 text-center"
            >
              <p className="text-lg font-semibold text-primary-700">Thank you for reaching out!</p>
              <p className="mt-2 text-sm text-charcoal-400">Our HR team will review your application and get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-charcoal">Full Name</label>
                <input required type="text" className="rounded-xl border border-charcoal-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-charcoal">Email</label>
                <input required type="email" className="rounded-xl border border-charcoal-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-charcoal">Phone</label>
                <input required type="tel" className="rounded-xl border border-charcoal-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-charcoal">Position Interested In</label>
                <input
                  type="text"
                  defaultValue={selectedJob || ""}
                  className="rounded-xl border border-charcoal-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="col-span-full flex flex-col gap-1.5">
                <label className="text-sm font-medium text-charcoal">Message</label>
                <textarea rows={4} className="resize-none rounded-xl border border-charcoal-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <button
                type="submit"
                className="col-span-full inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
              >
                Submit Application
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
