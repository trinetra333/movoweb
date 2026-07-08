import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedBanner from "../components/FeaturedBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandValues from "../components/BrandValues";
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import SupportSection from "../components/SupportSection";
import WarrantySection from "../components/WarrantySection";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <FeaturedBanner />
      <FeaturedProducts />
      <BrandValues />
      <Stats />
      <AboutSection />
      <SupportSection />
      <WarrantySection />
      <ContactSection />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
