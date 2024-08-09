import FaqCard, { FaqCardInterface } from "./card/FaqCard";

const faqData: FaqCardInterface[] = [
  {
    question: "How do I start trading on your platform?",
    answer:
      "To start trading, you need to sign up on our website and link your Telegram account. Once linked, you can access trading signals, market analysis, and execute trades directly from Telegram.",
  },
  {
    question: "What cryptocurrencies can I trade?",
    answer:
      "Our platform supports a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Solana (SOL), and many others. The full list is available on our platform.",
  },
  {
    question: "Is my trading data secure?",
    answer:
      "Yes, your trading data is fully encrypted and stored securely. We use advanced security measures to protect your information and ensure safe transactions.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "To withdraw your earnings, go to the 'Withdraw' section on your profile, select the cryptocurrency you wish to withdraw, enter the amount, and provide your wallet address. The withdrawal process usually takes a few minutes.",
  },
  {
    question: "Can I access real-time trading signals?",
    answer:
      "Yes, our platform provides real-time trading signals directly to your Telegram account. These signals include market trends, entry and exit points, and risk management advice to help you make informed trading decisions.",
  },
];

export default function Faq() {
  return (
    <div className="h-screen py-20 px-60">
      <div className="flex justify-center text-5xl font-frijole text-secondary-dark-gold mb-8">
        Frequently Asked Questions
      </div>
      <div className="grid items-start gap-5">
        {faqData.map((item, i) => (
          <FaqCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
