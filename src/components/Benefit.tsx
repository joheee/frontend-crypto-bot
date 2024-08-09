import BenefitCard from "./card/BenefitCard";

const BenefitVariable = {
  Icon: ["/ethereum_ring.png", "/globe.png", "/globeV.png", "/shield_idk.png"],
  title: [
    "High-Quality Trade Alerts",
    "Expert Market Analysis",
    "Exsclusive Tips and Strategies",
    "Quality Assurance",
  ],
  description: [
    `Receive meticulously analyzed buy and sell signals, focusing on profitable opportunities`,
    `Gain access to in-depth analysis from seasoned traders who understand the nuances of the crypto market`,
    `Benefit from proven strategies to enhance your trading performance`,
    `Don't fall for cheap offers from low-quality VIP services that are not profitable. Our service ensures high-quality, profitable signals`,
  ],
};

export default function Benefit() {
  return (
    <div className="flex justify-between w-[90%] mx-auto flex-col items-center gap-12 py-24">
      <div className="flex justify-center text-5xl font-frijole text-secondary-dark-gold">
        Benefit
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
        <BenefitCard
          Icon={BenefitVariable.Icon[0]}
          title={BenefitVariable.title[0]}
        >
          {BenefitVariable.description[0]}
        </BenefitCard>

        <BenefitCard
          Icon={BenefitVariable.Icon[1]}
          title={BenefitVariable.title[1]}
        >
          {BenefitVariable.description[1]}
        </BenefitCard>

        <BenefitCard
          Icon={BenefitVariable.Icon[2]}
          title={BenefitVariable.title[2]}
        >
          {BenefitVariable.description[2]}
        </BenefitCard>

        <BenefitCard
          Icon={BenefitVariable.Icon[3]}
          title={BenefitVariable.title[3]}
        >
          {BenefitVariable.description[3]}
        </BenefitCard>
      </div>
    </div>
  );
}
