import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";
import PricingCard from "./card/PricingCard";
import { PricingCardInterface } from "./config/interface";

export default function Pricing() {
  const pricingData: PricingCardInterface[] = [
    {
      is_per: true,
      current_price_alt_text: "month",
      current_price_text: "$99",
      initial_price_text: "$199 Initially",
      month_text: "1 MONTH",
      is_first_member: true,
    },
    {
      is_per: true,
      current_price_alt_text: "3 months",
      current_price_text: "$250",
      after_price_text: "$499",
      initial_price_text: "$597 Initially",
      month_text: "3 MONTHS",
      is_first_member: true,
      top_text: "save $47",
    },
    {
      is_per: true,
      current_price_alt_text: "12 months",
      current_price_text: "$500",
      after_price_text: "$999",
      initial_price_text: "$2388 Initially",
      month_text: "12 MONTHS",
      is_first_member: true,
      top_text: "save $688",
    },
    {
      is_lifetime: true,
      current_price_alt_text: "Lifetime access with one payment",
      current_price_text: "$1999",
      initial_price_text: "$500",
      month_text: "LIFETIME",
      top_text: "limited promo!",
    },
  ];
  return (
    <PaddingLayout
      id="price-section"
      className="min-h-screen flex flex-col items-center"
    >
      <HeaderText text="Choose Your Subscription Plan" />
      <div className="flex flex-col items-center gap-[40px]">
        <div className="text-white text-center max-w-[600px]">
          We offer premium subscription plans tailored to fit your needs. Our
          service is more expensive than most other VIP offerings, and for good
          reason. Enjoy unparalleled quality and expertise, with different
          timelines to suit your trading goals. If you don't see the results,
          we'll give you your money back. We stand by our service 100%
        </div>
        <div className="text-white text-center max-w-[600px] mb-[40px]">
          Money-Back Guarantee: Our service is priced higher than most, and we
          make no apologies for it. You get what you pay for. If you don’t make
          money from following our signals within the first 3 months of a
          quarterly, annual, or lifetime subscription, we offer a full refund.
          Your success is our priority
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {pricingData.map((item, i) => (
            <PricingCard key={i} {...item} />
          ))}
        </div>
      </div>
    </PaddingLayout>
  );
}
