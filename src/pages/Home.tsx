import AboutUs from "../components/AboutUs";
import Benefit from "../components/Benefit";
import Bullrun from "../components/Bullrun";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import FloatingTelegramButton from "../components/FloatingTelegramButton";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MetalicButton from "../components/MetalicButton";
import Header from "../components/Navbar";
import Pricing from "../components/Pricing";
import PopUpModal from "./PopUpModal";

export default function Home() {
  return (
    <div className="bg-accent-black relative overflow-hidden">
      <PopUpModal />
      <FloatingTelegramButton />
      <Header />
      <Hero />
      <Benefit />
      <Bullrun />
      <AboutUs />
      <a
        href="https://t.me/CryptoOverseerXFree"
        target="_blank"
        className="flex justify-center"
      >
        <MetalicButton
          className="py-2 px-16 rounded-3xl tracking-wide text-lg"
          text="Free Telegram"
          onClick={() => {}}
        />
      </a>
      <ChooseUs />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
