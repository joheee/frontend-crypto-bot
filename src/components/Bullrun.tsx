import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";

export default function Bullrun() {
  return (
    <PaddingLayout>
      <div className="mx-auto flex flex-col desktop:gap-12 tablet:gap-8 gap-3 border border-secondary-dark-gold rounded-xl py-16 bg-secondary-black">
        <div className="flex justify-center">
          <div className="text-center desktop:text-5xl tablet:text-3xl font-frijole">
            <HeaderText text={"Don't Miss Out On The Bull Run!"} />
            {/* <HeaderText text={""} /> */}
          </div>
        </div>
        <div className="w-full flex tablet:flex-row flex-col items-center tablet:justify-start desktop:my-6 tablet:my-1 gap-8 tablet:gap-0">
          <div className="tablet:w-1/2 w-full desktop:h-56 tablet:h-40 h-28 flex justify-center">
            <img src="/early_bird.png" alt="" className="h-full w-auto" />
          </div>
          <div className="tablet:w-1/2 w-full text-white desktop:text-xl tablet:text-base tablet:text-start text-center text-sm tablet:pr-12 tablet:px-0 px-8">
            With the market on the brink of an exciting bull run, now is the
            time to act! The potential for significant gains is immense, but
            without the right expertise and strategy, you risk missing out. Join
            my channel today and gain access to expert insights and strategies
            to help you navigate the market and maximize your profits! Don't let
            this bull run pass you by without making the most of it!
          </div>
        </div>

        <div className="flex justify-center tablet:mt-0 mt-4">
          <a href={"#price-section"}>
            <button
              className="custom-btn btn-3 desktop:h-16 desktop:w-72 tablet:h-14 tablet:w-56 h-12 w-48 rounded-full text-xl"
            >
              Join Now
            </button>
          </a>
        </div>
      </div>
    </PaddingLayout>
  );
}
