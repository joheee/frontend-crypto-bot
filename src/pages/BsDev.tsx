import AboutUs from "../components/AboutUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export default function BsDev() {
  return (
    <div className="bg-accent-black">
      <AboutUs/>
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
