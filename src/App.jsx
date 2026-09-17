import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Brands from "./pages/Brands";
import BrandOne from "./pages/BrandOne";
import BrandTwo from "./pages/BrandTwo";
import BrandThree from "./pages/BrandThree";
import BrandFour from "./pages/BrandFour";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed background pattern - sabse peeche rahega */}
      <div className="fixed inset-0 -z-10 bg-pattern" />

      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/brand-1" element={<BrandOne />} />
          <Route path="/brands/brand-2" element={<BrandTwo />} />
          <Route path="/brands/brand-3" element={<BrandThree />} />
          <Route path="/brands/brand-4" element={<BrandFour />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}