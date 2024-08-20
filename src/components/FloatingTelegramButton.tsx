import { FaTelegramPlane } from "react-icons/fa";
import { SCALE_HOVER } from "./config/TailwindEffect";

export default function FloatingTelegramButton() {
  return (
    <a
      href="https://t.me/CryptoOverseerXFree"
      target="_blank"
      className={`${SCALE_HOVER} bg-primary-gold w-fit h-fit p-4 fixed right-0 top-[200px] z-10 rounded-tl-lg rounded-bl-lg hover:bg-secondary-dark-gold transition-colors cursor-pointer`}
    >
      <FaTelegramPlane className="text-3xl" />
    </a>
  );
}
