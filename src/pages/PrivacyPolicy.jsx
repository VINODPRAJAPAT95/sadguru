import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { COMPANY_NAME, CONTACT } from "../config";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We may collect information you provide directly to us, such as your name, email address, phone number and message content when you fill out a contact form, apply for a job, or communicate with us via WhatsApp or email.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to respond to your enquiries, process job applications, improve our products and services, and communicate with you about our brands where relevant.",
  },
  {
    title: "3. Information Sharing",
    body: "We do not sell your personal information. We may share information with trusted service providers who help us operate our business, and only to the extent necessary for them to perform their services.",
  },
  {
    title: "4. Cookies & Tracking",
    body: "Our website may use cookies and similar technologies to understand how visitors use our site and to improve your browsing experience. You can control cookie preferences through your browser settings.",
  },
  {
    title: "5. Data Security",
    body: "We take reasonable technical and organisational measures to protect your information from unauthorised access, alteration, disclosure or destruction.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information by contacting us using the details below.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "8. Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at ${CONTACT.email} or ${CONTACT.phone}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy | Sadguru Food Processing Pvt. Ltd." description="Read the privacy policy of Sadguru Food Processing Pvt. Ltd." />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${COMPANY_NAME} collects, uses and protects your information.`}
      />
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl">
          <p className="text-sm text-charcoal-300">Last updated: September 2026</p>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-charcoal">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-charcoal-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
