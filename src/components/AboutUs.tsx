import AboutUsCard from "./card/AboutUsCard";
import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";

export default function AboutUs() {
  return (
    <PaddingLayout
      id="aboutus-section"
      className="min-h-screen flex flex-col items-center"
    >
      <HeaderText text="About Crypto OverseerX" />
      <div className="flex flex-col gap-8">
        <AboutUsCard
          image="/bitcoin_coin.png"
          text="Welcome to our crypto trading signals channel! My mission is to empower traders with reliable, high-quality signals and expert market analysis to help you achieve consistent profits.
          @
          For the past seven years, I have been trading the crypto market on my own, developing and refining my strategies. I understand the complexities and nuances of the market, and have consistently achieved profitable results. Now, I am eager to share my knowledge and help others transform their trading journeys, especially as we approach this exciting bull run"
        />
        <AboutUsCard
          image="/ethereum_coin.png"
          text="What sets my service apart is my unique approach to trading. Instead of using the same set of rules and indicators for every ticker—which I believe is ineffective—I always adjust my strategy to fit the specific ticker we’re trading. My method is more flexible and adaptive to market conditions. Every signal I share is the result of thorough market research, leveraging both technical and fundamental analysis. I focus on delivering high-probability trades, ensuring that you can make informed decisions with confidence. 
          @
          I firmly believe in and quality over quantity. Unlike many services that flood you with numerous signals, I prioritize the quality and potential profitability of each trade. My goal is to help you maximize your gains while managing risks effectively"
        />
        <AboutUsCard
          image="/usdt_coin.png"
          text="Join my community and benefit from my proven trading strategies, real-time alerts, and exclusive tips. Experience the difference that expert insights and carefully crafted signals can make in your trading journey. 
          @
          Trust in my expertise, and let me guide you towards consistent trading success"
        />
      </div>
    </PaddingLayout>
  );
}
