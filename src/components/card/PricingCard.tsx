import { PricingCardInterface } from "../config/interface";
import { SCALE_HOVER } from "../config/TailwindEffect";
import MetalicButton from "../MetalicButton";

export default function PricingCard(prop: PricingCardInterface) {
  const earlyBird = "/early_bird.png";
  return (
    <div
      className={`${SCALE_HOVER} relative border border-secondary-dark-gold px-4 py-10 bg-secondary-black text-white mobile:min-w-[315px] tablet:min-w-[400px] desktop:min-w-[280px] rounded-2xl flex flex-col items-center`}
    >
      {!prop.top_text ? null : (
        <MetalicButton
          className="absolute top-[-17px] text-sm px-10 rounded-3xl tracking-wide py-1"
          text={prop.top_text}
          onClick={() => {}}
        />
      )}
      <div className="text-[20px] font-bold mb-5">{prop.month_text}</div>

      <div className="text-[18px] font-extralight text-center">
        <div className="line-through">{prop.initial_price_text}</div>
        {!prop.after_price_text ? (
          <div className="text-secondary-black mt-4">johe</div>
        ) : (
          <div className="line-through mt-4">{prop.after_price_text}</div>
        )}
      </div>

      <div className="flex flex-col items-center mb-7 relative">
        <div className="text-[84px] font-semibold">
          {prop.current_price_text}
        </div>
        {!prop.is_lifetime ? (
          <div className="">
            {!prop.is_per ? null : <span>per </span>}
            <span className="font-bold">{prop.current_price_alt_text}</span>
          </div>
        ) : (
          <div className="">
            <span className="font-bold">Lifetime</span> access with{" "}
            <span className="font-bold">one payment</span>
          </div>
        )}

        {!prop.is_first_member ? null : (
          <img
            src={earlyBird}
            alt="early bird"
            className="w-10 absolute top-2 right-[-10px]"
          />
        )}
      </div>

      <ul className="list-disc text-[14px] ml-6 mb-10">
        {prop.is_lifetime ? null : <li>First 10 members only!</li>}
        <li className="font-extralight">
          Access to all real-time trading signals
        </li>
        <li className="font-extralight">Expert market analysis</li>
        <li className="font-extralight">Adaptive strategies</li>
        <li className="font-extralight">Comprehensive report</li>
        <li className="font-extralight">Exclusive tips and strategies</li>
        <li className="font-extralight">Risk management</li>
        {prop.is_lifetime ? (
          <div className="text-secondary-black">johe</div>
        ) : null}
      </ul>

      <a href="https://t.me/CryptoOverseerX" target="_blank">
        <MetalicButton
          className="py-2 px-16 rounded-3xl tracking-wide text-lg"
          text="Join Now"
          onClick={() => {}}
        />
      </a>
    </div>
  );
}
