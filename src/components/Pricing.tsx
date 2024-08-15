import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";
import PricingCard, { PricingCardInterface } from "./card/PricingCard";

export default function Pricing() {
  const pricingData: PricingCardInterface[] = [
    {
      is_per: true,
      current_price_alt_text: "month",
      current_price_text: "$99",
      initial_price_text: "$199 Initially",
      month_text: "1 MONTHS",
      is_first_member: true,
    },
    {
      is_per: true,
      current_price_alt_text: "3 months",
      current_price_text: "$250",
      after_price_text: "$499",
      initial_price_text: "$597 Initially",
      month_text: "2 MONTHS",
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
    <PaddingLayout className="min-h-screen">
      <HeaderText text="Choose Your Subscription Plan" />
      <div id="price-section" className="flex flex-col items-center gap-[80px]">
        <div className="text-white text-center max-w-[600px]">
          We offer premium subscription plans tailored to fit your needs. Our
          service is more expensive than most other VIP offerings, and for good
          reason. Enjoy unparalleled quality and expertise, with different
          timelines to suit your trading goals. If you don't see the results,
          we'll give you your money back. We stand by our service 100%
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
