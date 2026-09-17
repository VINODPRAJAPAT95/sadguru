import { motion } from "framer-motion";
import { BookOpen, Users, ShieldCheck } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

const links = [
  {
    icon: BookOpen,
    title: "Our Story",
    desc: "How Sadguru Foods grew from a single idea into four trusted brands.",
    to: "/about/our-story",
  },
  {
    icon: Users,
    title: "Our Team",
    desc: "Meet the people building and running our brands every day.",
    to: "/about/our-team",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    desc: "How we collect, use and protect your information.",
    to: "/about/privacy-policy",
  },
];

export default function About() {
  return (
    <>
      <Seo title="About Us | Sadguru Food Processing Pvt. Ltd." description="Learn about Sadguru Food Processing Pvt. Ltd. — our story, our team and our policies." />
      <PageHero
        eyebrow="About Us"
        title="Wholesome Food, Thoughtfully Prepared"
        description="Learn more about who we are, the people behind our brands, and how we handle your information."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {links.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-charcoal-100 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <l.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-charcoal">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{l.desc}</p>
              <Button to={l.to} variant="ghost" className="mt-5 px-0">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
