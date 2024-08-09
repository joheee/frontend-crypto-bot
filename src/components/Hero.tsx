import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-hero-background max-w-screen bg-cover bg-left bg-no-repeat h-[40rem] relative mt-4">
      <div className="mx-auto w-[84%] h-full ">
        <div className="w flex items-center h-full ">
          <div className="flex flex-col w-full gap-12 -mt-16 ">
            <div className="absolute h-[20rem] w-[1px] bg-primary-gold top-8 left-12">
              {" "}
            </div>
            <div className="text-white font-black text-5xl tracking-widest w-[30rem]">
              The Crypto Trading Signal
            </div>
            <div className="text-[#C0C0C0] w-[20rem] text-lg leading-6">
              Follow our crypto trading signal and make better decisions in the
              <br />
              market!
            </div>
            <button className="flex items-center gap-4 bg-secondary-dark-gold text-xl font-bold text-primary-gold z-30 relative w-fit before:top-1.5 before:-left-1.5 before:w-full before:h-full before:absolute before:border-2 before:-z-50 before:border-secondary-dark-gold lg:px-12 lg:py-4 md:px-10 md:py-3 px-8 py-2">
              <FaTelegramPlane className="text-3xl" /> Join Now !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
