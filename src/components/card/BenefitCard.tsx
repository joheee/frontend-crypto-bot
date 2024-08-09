import { IconType } from "react-icons";

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
    <div className="flex flex-col items-center md:gap-6 gap-2 border border-secondary-dark-gold py-10 bg-[#383838] text-white">
      <div className="px-12">
        <img src={Icon} alt="" className="" />
      </div>
      <p className="lg:text-lg text-base font-Merienda flex justify-center font-bold text-center">
        {title}
      </p>
      <p className="text-center lg:text-base text-xs flex justify-center px-4 text-[#C0C0C0]">
        {children}
      </p>
    </div>
  );
}
