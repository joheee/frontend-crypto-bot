import { SCALE_HOVER } from "../config/TailwindEffect";

interface HomeTrustAttribute {
  Icon: string;
  title: string;
  children: React.ReactNode;
}

export default function BenefitCard({
  Icon,
  title,
  children,
}: HomeTrustAttribute) {
  return (
    <div
      className={`${SCALE_HOVER} flex flex-col items-center md:gap-6 gap-2 border border-secondary-dark-gold py-10 bg-secondary-black text-white`}
    >
      <div className="px-12 tablet:w-4/6 desktop:w-full w-8/12">
        <img src={Icon} alt="" />
      </div>
      <p className="tablet:text-lg text-sm font-Merienda flex justify-center font-bold text-center">
        {title}
      </p>
      <p className="text-center tablet:text-base text-xs flex justify-center px-4 text-[#C0C0C0]">
        {children}
      </p>
    </div>
  );
}
