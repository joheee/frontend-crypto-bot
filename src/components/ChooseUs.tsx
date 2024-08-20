import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";

export default function ChooseUs() {
  return (
    <PaddingLayout className="flex flex-col gap-8 justify-center min-h-screen">
      <div className="text-center flex justify-center text-4xl text-white">
        <HeaderText text={"Why Choose Us"} />
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="border border-secondary-dark-gold w-12 h-[1px]"></div>
        <div className="tablet:text-xl text-white tracking-wider text-center my-4 text-lg">
          The Best Crypto Signal for your Trading
        </div>
        <div className="border border-secondary-dark-gold w-12 h-[1px]"></div>
      </div>
      <div className="flex tablet:flex-row flex-col justify-center items-center">
        <div className="tablet:w-1/2 tablet:h-[18rem] tablet:mr-8 desktop:mr-0 desktop:h-[25rem] w-4/12 h-auto  flex justify-center">
          <img src="/about-us.png" alt="" className="h-full w-auto" />
        </div>
        <div className="w-1/2 text-white text-center tablet:text-start">
          <div className="desktop:text-4xl tablet:text-3xl text-2xl font-black mt-12 tablet:mt-0">
            We Are{" "}
            <p className="text-primary-gold font-extrabold block">
              Crypto OverseerX
            </p>
          </div>
          {/* <div className="text-primary-gold font-extra bold block desktop:text-4xl tablet:text-3xl text-2xl font-black mt-12 tablet:mt-0">
            We Are Crypto OverseerX
          </div> */}
          <div>
            <ul className="list-disc space-y-2 mt-8 tablet:px-4 tablet:text-sm desktop:px-0 desktop:text-base text-sm">
              <li>
                <span className="text-primary-gold">
                  Expertise You Can Trust:
                </span>{" "}
                Years if experience and a proven track record in crypto trading
              </li>
              <li>
                <span className="text-primary-gold">High-Quality Signals:</span>{" "}
                Meticulously analyzed signals for profitable trades
              </li>
              <li>
                <span className="text-primary-gold">Adaptive Strategies:</span>{" "}
                Flexible trading strategies tailored to current market
                condiitons
              </li>
              <li>
                <span className="text-primary-gold">
                  Comprehensive Insights:
                </span>{" "}
                In-Depth market reports and exclusive tips
              </li>
              <li>
                <span className="text-primary-gold">Proven Results:</span> Join
                Successful traders who trust our service
              </li>
              <li>
                <span className="text-primary-gold">Risk Management:</span>{" "}
                Strategies designed to maximize returns and protect your
                ivestment
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 ">
        <p className="text-primary-gold tracking-wide  font-extrabold">
          DON'T SETTLE FOR LESS
        </p>
        <p className="text-primary-gold tracking-wide font-extrabold">
          INVEST IN THE BEST AND SEE THE DIFFERENCE
        </p>
      </div>
    </PaddingLayout>
  );
}
