import { FaTelegramPlane } from "react-icons/fa";
import { SCALE_HOVER } from "./config/TailwindEffect";

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="bg-hero-background max-w-screen tablet:bg-cover tablet:mt-10 tablet:mb-40 bg-center bg-no-repeat h-[50rem] relative"
    >
      {/* <div className="w-full h-full bg-black/30  desktop:bg-transparent"> */}
      <div className="w-full h-full bg-gradient-to-t from-accent-black  desktop:bg-transparent">
        <div className="mx-auto w-[84%] h-full ">
          <div className="w flex items-center h-full ">
            <div className="flex flex-col w-full tablet:gap-12 tablet:-mt-16 tablet:items-start tablet:justify-start gap-8 justify-center items-center ">
              <div className="absolute desktop:h-[20rem] tablet:h-[15rem] w-[1px] bg-primary-gold desktop:top-8 desktop:left-12 tablet:top-[6rem] tablet:left-8 tablet:block hidden">
                {" "}
              </div>
              <div className="text-white font-black desktop:text-5xl table:text-4xl text-4xl tracking-widest tablet:w-[30rem] text-center mobile:text-start">
                Crypto Trading Signal
              </div>
              <div className="text-white tablet:w-[21rem] font-semibold desktop:text-lg tablet:text-base mobile:text-sm text-xs leading-6 text-center tablet:text-start">
                Follow Our Expertly Crafted Crypto Signals to Make Confident and
                Profitable Decisions in the Market!
              </div>
              <a href={"#price-section"}>
                <button
                  className={`flex items-center gap-4 bg-primary-gold text-xl font-bold text-secondary-black hover:bg-secondary-dark-gold transition-colors delay-75 relative w-fit rounded-2xl lg:px-12 lg:py-4 md:px-10 md:py-3 px-8 py-2 ${SCALE_HOVER}`}
                >
                  <FaTelegramPlane className="text-3xl" /> Join Now !
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
