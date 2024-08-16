import { FaTelegramPlane } from "react-icons/fa";
import handleJoinNow from "./config/handleJoinNow";

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="bg-hero-background max-w-screen tablet:bg-cover tablet:h-[40rem] bg-center bg-no-repeat h-[25rem] relative"
    >
      <div className="w-full h-full bg-black/30 desktop:bg-transparent">
        <div className="mx-auto w-[84%] h-full ">
          <div className="w flex items-center h-full ">
            <div className="flex flex-col w-full tablet:gap-12 tablet:-mt-16 tablet:items-start tablet:justify-start gap-8 justify-center items-center ">
              <div className="absolute desktop:h-[20rem] tablet:h-[15rem] w-[1px] bg-primary-gold desktop:top-8 desktop:left-12 tablet:top-[6rem] tablet:left-8 tablet:block hidden">
                {" "}
              </div>
              <div className="text-white font-black desktop:text-5xl table:text-4xl text-4xl tracking-widest tablet:w-[30rem] text-center mobile:text-start">
                Crypto Trading Signal
              </div>
              <div className="text-[#C0C0C0] tablet:w-[21rem] desktop:text-lg tablet:text-base mobile:text-sm text-xs leading-6 text-center tablet:text-start">
                Follow Our Expertly Crafted Crypto Signals to Make Confident and
                Profitable Decisions in the Market!
              </div>
              <button
                onClick={handleJoinNow}
                className="flex items-center gap-4 bg-secondary-dark-gold text-xl font-bold text-primary-gold hover:bg-primary-gold hover:text-secondary-dark-gold transition-colors delay-75 z-30 relative w-fit rounded-2xl lg:px-12 lg:py-4 md:px-10 md:py-3 px-8 py-2"
              >
                <FaTelegramPlane className="text-3xl" /> Join Now ! 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
