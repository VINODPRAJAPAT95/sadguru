import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Sadguru Food Processing Pvt. Ltd." description="The page you're looking for could not be found." />
      <section className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-8xl font-semibold text-primary sm:text-9xl"
        >
          404
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-2xl font-semibold text-charcoal sm:text-3xl"
        >
          This page seems to have wandered off the menu.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-md text-charcoal-400"
        >
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Button to="/" variant="primary">Back to Home</Button>
        </motion.div>
      </section>
    </>
  );
}
