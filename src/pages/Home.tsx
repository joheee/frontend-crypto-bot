import Benefit from "../components/Benefit";
import Bullrun from "../components/Bullrun";
import ChooseUs from "../components/ChooseUs";
import Hero from "../components/Hero";
import Header from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-accent-black">
      <Header />
      <Hero />
      <Benefit />
      <Bullrun />
      <ChooseUs />
    </div>
  );
}
