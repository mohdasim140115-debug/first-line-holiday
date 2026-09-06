import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import WhyChoose from "@/components/WhyChoose";
import FeaturedDeal from "@/components/FeaturedDeal";
import Itinerary from "@/components/Itinerary";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryModal from "@/components/EnquiryModal";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <About />
        <Offers />
        <Reviews />
        <WhyChoose />
        <FeaturedDeal />
        <Itinerary />
        <Contact />
        <FAQ />
        <SeoContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquiryModal />
    </>
  );
}
