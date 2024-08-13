import MetalicButton from "../MetalicButton";

export default function PricingCard() {
  return (
    <div className="px-4 py-10 bg-secondary-black text-white min-w-[280px] rounded-2xl flex flex-col gap-10 items-center">
      <div className="text-[20px] font-bold">1 MONTH</div>

      <div className="text-[20px] font-extralight text-center">
        <div className="">$199 initially</div>
        <div className=""></div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[84px]">$99</div>
        <div className="">per month</div>
      </div>

      <ul className="list-disc text-[14px] ml-6">
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
