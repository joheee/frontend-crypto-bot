import { AboutUsInterface } from "../config/interface";
import { SCALE_HOVER } from "../config/TailwindEffect";

export default function AboutUsCard(data:AboutUsInterface) {
  const formattedText = data.text.split("@").map((item, index) => (
    <p key={index} className="mb-4 text-center tablet:text-start">
      {item}
    </p>
  ));

  return (
    <div
      className={`${SCALE_HOVER} bg-secondary-black border border-secondary-dark-gold text-white p-6 rounded-lg shadow-lg`}
    >
      <div className="flex flex-col items-center tablet:items-start tablet:flex-row tablet:justify-start gap-6">
        <img
          className="tablet:w-[150px] desktop:w-[150px] w-5/12" 
          src={data.image}
          alt={data.image}
        />
        <div>{formattedText}</div>
      </div>
    </div>
  );
}
