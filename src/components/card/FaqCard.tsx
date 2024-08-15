import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SCALE_HOVER } from "../config/TailwindEffect";
import { FaqCardInterface } from "../config/interface";


export default function FaqCard(prop: FaqCardInterface) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCard() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`${SCALE_HOVER} bg-secondary-black border border-secondary-dark-gold text-white p-6 rounded-lg shadow-lg cursor-pointer`}
      onClick={toggleCard}
    >
      <div className="flex justify-between items-center gap-4j">
        <div className="desktop:text-xl font-semibold">{prop.question}</div>
        <div className="desktop:text-2xl">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-4 text-base text-gray-300 bg-accent-black p-6 rounded-lg leading-relaxed">
          {prop.answer}
        </div>
      </div>
    </div>
  );
}
