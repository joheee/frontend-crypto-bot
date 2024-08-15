import HeaderText from "./HeaderText";

export default function ChooseUs() {
  return (
    <div className="w[90%] mx-auto flex flex-col gap-8 py-16">
      {/* <div className="text-center font-frijole text-4xl text-white">
        Why Choose{" "}
        <span className="text-secondary-dark-gold font-frijole text-4xl">
          Us
        </span>
      </div> */}
      <HeaderText text="Why Choose Us" />
      <div className="flex justify-center items-center gap-8">
        <div className="border border-secondary-dark-gold w-12 h-[1px]"></div>
        <div className="text-xl text-white text-[C0C0C0] tracking-wider my-4">
          The Best Crypto Signal for your Trading
        </div>
        <div className="border border-secondary-dark-gold w-12 h-[1px]"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2  h-[25rem] flex justify-center">
          <img src="/about-us.png" alt="" className="h-full w-auto" />
        </div>
        <div className="w-1/2 text-white">
          <div className="text-4xl font-black">We Are Crypto OverseerX</div>
          <div>
            <ul className="list-disc space-y-2 mt-8">
              <li>
                <span className="text-primary-gold">
                  Expertise You Can Trust:
                </span>{" "}
                Years if experience and a proven track record in crypto trading
              </li>
              <li>
                <span className="text-primary-gold">
                  High-Quality Signals:
                </span>{" "}
                Meticulously analyzed signals for profitable trades
              </li>
              <li>
                <span className="text-primary-gold">
                  Adaptive Strategies:
                </span>{" "}
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
                <span className="text-primary-gold">
                  Proven Results:
                </span>{" "}
                Join Successful traders who trust our service
              </li>
              <li>
                <span className="text-primary-gold">
                  Risk Management:
                </span>{" "}
                Strategies designed to maximize returns and protect your
                ivestment
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 ">
        <p className="text-primary-gold font-frijole">
          DON'T SETTLE FOR LESS
        </p>
        <p className="text-primary-gold font-frijole">
          INVEST IN THE BEST AND SEE THE DIFFERENCE
        </p>
      </div>
    </div>
  );
}
