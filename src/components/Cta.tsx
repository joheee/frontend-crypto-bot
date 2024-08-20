import { FaTelegramPlane } from "react-icons/fa";
import PaddingLayout from "./layout/padding/PaddingLayout";
import { SCALE_HOVER } from "./config/TailwindEffect";

export default function Cta() {
  return (
    <PaddingLayout
      className={`flex gap-10 items-center justify-center cursor-pointer`}
    >
      <div
        className={`${SCALE_HOVER} bg-primary-gold hover:bg-secondary-dark-gold p-4 rounded-full w-fit h-fit`}
      >
        <FaTelegramPlane className="text-3xl ${SCALE_HOVER}" />
      </div>
      <div className="text-white text-3xl font-bold hidden mobile:block">
        Join Our Telegram Channel Now
      </div>
    </PaddingLayout>
  );
}
