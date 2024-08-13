import MetalicButton from "../MetalicButton";

interface PricingCardInterface {
  is_first_member?: boolean;
}

export default function PricingCard(prop: PricingCardInterface) {
  const earlyBird = "/early_bird.png";
  return (
    <div className="relative px-4 py-10 bg-secondary-black text-white min-w-[280px] rounded-2xl flex flex-col items-center">
      {!prop.is_first_member ? null : (
        <MetalicButton
          className="absolute top-[-12.5px] px-10 rounded-3xl tracking-wide text-lg"
          text="limited promo!"
          onClick={() => {}}
        />
      )}
      <div className="text-[20px] font-bold mb-5">1 MONTH</div>

      <div className="text-[20px] font-extralight text-center">
        <div className="">$199 initially</div>
        <div className="mt-4">$49</div>
      </div>

      <div className="flex flex-col items-center mb-7 relative">
        <div className="text-[84px]">$99</div>
        <div className="">per month</div>
        <img
          src={earlyBird}
          alt="early bird"
          className="w-10 absolute top-2 right-[-10px]"
        />
      </div>

      <ul className="list-disc text-[14px] ml-6 mb-10">
        <li>First 10 members only!</li>
        <li className="font-extralight">
          Access to all real-time trading signals
        </li>
        <li className="font-extralight">Expert market analysis</li>
        <li className="font-extralight">Adaptive strategies</li>
        <li className="font-extralight">Comprehensive report</li>
        <li className="font-extralight">Exclusive tips and strategies</li>
        <li className="font-extralight">Risk management</li>
      </ul>

      <MetalicButton
        className="py-2 px-16 rounded-3xl tracking-wide text-lg"
        text="Enroll"
        onClick={() => {}}
      />
    </div>
  );
}
