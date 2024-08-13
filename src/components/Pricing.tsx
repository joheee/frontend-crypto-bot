import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";
import PricingCard from "./card/PricingCard";

export default function Pricing() {
  return (
    <PaddingLayout className="min-h-screen">
      <HeaderText text="Choose Your Subscription Plan" />
      <div className="flex flex-col items-center gap-[80px]">
        <div className="text-white text-center max-w-[600px]">
          We offer premium subscription plans tailored to fit your needs. Our
          service is more expensive than most other VIP offerings, and for good
          reason. Enjoy unparalleled quality and expertise, with different
          timelines to suit your trading goals. If you don't see the results,
          we'll give you your money back. We stand by our service 100%
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </PaddingLayout>
  );
}
