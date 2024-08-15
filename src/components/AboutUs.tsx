import AboutUsCard from "./card/AboutUsCard";
import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";

export default function AboutUs() {
  return (
    <PaddingLayout className="min-h-screen">
      <HeaderText text="About Crypto Overseerx" />
      <AboutUsCard />
    </PaddingLayout>
  );
}
