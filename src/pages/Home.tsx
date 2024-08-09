import Hero from "../components/Hero";
import Header from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-accent-black">
      <Header />
      <Hero />
    </div>
  );
}
