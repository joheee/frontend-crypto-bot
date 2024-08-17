import AboutUs from "../components/AboutUs";
import Benefit from "../components/Benefit";
import Bullrun from "../components/Bullrun";
import ChooseUs from "../components/ChooseUs";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import FloatingTelegramButton from "../components/FloatingTelegramButton";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Navbar";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div className="bg-accent-black">
      <FloatingTelegramButton />
      <Header />
      <Hero />
      <Cta />
      <Benefit />
      <Bullrun />
      <AboutUs />
      <ChooseUs />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
