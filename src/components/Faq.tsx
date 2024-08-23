import FaqCard from "./card/FaqCard";
import { FaqCardInterface } from "./config/interface";
import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";

const faqData: FaqCardInterface[] = [
  {
    question: "Why Choose Our Trading Signals?",
    answer:
      "Our signals are the result of in-depth market research and years of trading experience. We combine real-time analysis with a deep understanding of market trends to deliver signals that are timely, accurate, and tailored to current conditions, helping you make informed and profitable trading decisions.",
  },
  {
    question: "How often will I receive trading signals?",
    answer:
      "Our priority is to deliver profitable trades, so while you may not receive signals every day, you can trust that each signal is backed by thorough market research and is designed to maximize your potential gains.",
  },
  {
    question: "What kind of market analysis do you provide?",
    answer:
      "Subscribers gain access to expert market analysis from seasoned traders with years of experience. Our analysis includes real-time market insights, adaptive strategies, and comprehensive reports to help you stay ahead of market trends.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a full refund if you don’t make a profit after following our signals for 3 months with a quarterly, annual, or lifetime subscription. However, refunds are not available for monthly subscriptions. For detailed terms and conditions, please refer to our Refund Policy (insert link).",
  },
  {
    question:
      "Why are your subscription plans more expensive than other services?",
    answer:
      "Our service is priced higher because we provide unparalleled quality, expertise, and proven results. We invest significant time and resources into ensuring that our signals are profitable, which reflects in our pricing. We believe in delivering value that justifies the investment.",
  },
  {
    question: "Do I need any prior trading experience to use your signals?",
    answer:
      "While prior trading experience can be helpful, our signals are designed to be straightforward and easy to follow. We also provide market insights and educational resources to help beginners understand the reasoning behind each trade.",
  },
  // {
  //   question: "What payment methods do you accept?",
  //   answer:
  //     "We accept cryptocurrency payments, specifically in the form of USDT (Tether), for a seamless and secure transaction experience.",
  // },
  {
    question: "Can I upgrade my subscription plan after signing up?",
    answer:
      "Yes, you can upgrade your subscription at any time. If you choose to upgrade before the end of your current plan, the remaining balance will be prorated towards your new subscription.",
  },
  {
    question:
      "Do you provide support if I have questions or issues with the signals?",
    answer:
      "Absolutely. We offer dedicated customer support to assist you with any questions or concerns. Our team is available to help you make the most of our trading signals and ensure you have a positive experience with our service.",
  },
  {
    question: "How do I get started with your trading signals?",
    answer:
      "Getting started is easy! Simply contact cryptooverseerx on Telegram, choose your preferred subscription plan, complete the payment process, and you’ll receive an invitation to join our exclusive Telegram channel. Once you’re in, you’ll start receiving our real-time trading signals and market analysis right away.",
  },
];

export default function Faq() {
  return (
    <PaddingLayout className="min-h-screen flex flex-col items-center">
      <HeaderText text="Frequently Asked Questions" />
      <div className="grid items-start gap-5">
        {faqData.map((item, i) => (
          <FaqCard key={i} {...item} />
        ))}
      </div>
    </PaddingLayout>
  );
}
