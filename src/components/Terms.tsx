import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import HeaderText from "./HeaderText";
import HeroTerms from "./HeroTerms";
import PaddingLayout from "./layout/padding/PaddingLayout";
import Header from "./Navbar";
import SubHeaderText from "./SubHeaderText";
import { useEffect } from "react";

export default function Terms() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="bg-accent-black relative overflow-hidden">
      <Header />
      <HeroTerms />
      <PaddingLayout className="min-h-screen text-white flex flex-col gap-20">
        <div id="refund-policy" className="flex flex-col items-center">
          <HeaderText text="Refund Policy" />
          <div className="flex flex-col gap-4">
            <div className="">
              At CryptoOverseerX, we are committed to providing you with
              high-quality trading signals and ensuring your satisfaction.
              However, if you do not achieve a profit after following our
              signals for three consecutive months with a quarterly, annual, or
              lifetime subscription, we offer a full refund under the following
              terms and conditions:
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Eligibility Period:</strong> The refund guarantee
                applies only to users who have maintained an active quarterly,
                annual, or lifetime subscription for at least three consecutive
                months.
              </li>
              <li>
                <strong>Active Participation:</strong> To qualify for a refund,
                subscribers must demonstrate active participation by following
                100% of the trading signals provided during the three-month
                period. This includes entering and exiting trades according to
                the signals and recommendations.
              </li>
              <li>
                <strong>Proof of Trading Activity:</strong> Subscribers
                requesting a refund must provide proof of trading activity for
                the three-month period, such as transaction history or trading
                logs, to verify that the signals were followed.
              </li>
              <li>
                <strong>No Profit:</strong> The refund applies only if the
                subscriber did not achieve a net profit after following the
                signals for the full three-month period. Net profit is defined
                as the total earnings from trades minus any losses and trading
                fees.
              </li>
              <li>
                <strong>Request Procedure:</strong> Refund requests must be
                submitted within 14 days after the end of the three-month
                period. Requests should be made by contacting cryptooverseerx{" "}
                <a href="INSERT LINK">on Telegram</a>, including the necessary
                proof of trading activity.
              </li>
              <li>
                <strong>Limitations:</strong> Refunds are not available for
                monthly subscriptions, nor for traders who deviate significantly
                from the signals provided, use excessive leverage, or engage in
                other high-risk trading behaviors that may impact the outcomes.
              </li>
              <li>
                <strong>One-Time Refund:</strong> Each subscriber is eligible
                for a one-time refund only. After receiving a refund, they will
                not be eligible for any future guarantees.
              </li>
              <li>
                <strong>Service Continuation:</strong> Upon receiving a refund,
                the subscriber's access to the trading signals service will be
                terminated immediately.
              </li>
            </ol>

            <div className="">
              We believe in the value of our service and stand by our commitment
              to your success. If you have any questions about this policy or
              need assistance, please contact our support team.
            </div>
          </div>
        </div>

        <div id="terms-conditions" className="flex flex-col items-center">
          <HeaderText text="Terms & Conditions" />
          <div className="">
            Crypto OverseerX (“Crypto OverseerX,” “We,” “Us,” or “Our”) provides
            cryptocurrency trading signals through our website and Telegram
            channel (the “Site”) and via email, text, or other delivery methods
            (“Services”). By using the Site and any Service provided by Us, You
            (“You” or “User” or “Your”) agree to the following Terms and
            Conditions (“Terms”).
          </div>
        </div>

        <div id="acknowledgement" className="flex flex-col items-center">
          <SubHeaderText
            isLine
            className="text-2xl desktop:text-3xl"
            text="Acknowledgement of Disclosures and Disclaimers"
          />
          <div className="flex flex-col gap-4">
            <div className="">You hereby acknowledge and agree that:</div>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Crypto OverseerX, including any of its owners, directors,
                officers, employees, agents, independent contractors, or
                affiliates, is not registered as an investment adviser or
                broker-dealer. The Site and Services are publications of general
                circulation offering impersonalized information to users.
              </li>
              <li>
                Any content published as part of the Site or Services, even if
                it appears to be investment advice, is impersonal and not
                tailored to the specific investment needs of any individual.
              </li>
              <li>
                We do not evaluate Your individual financial condition,
                investment portfolio, experience, age, income, tax bracket, risk
                tolerance, investment objectives, or any other similar factors
                (collectively referred to as “Individual Financial
                Requirements”).
              </li>
              <li>
                The Site and Services are limited to the dissemination of
                impersonal information pertaining to cryptocurrency market
                analysis and trading signals. These do not consider the user’s
                Individual Financial Requirements.
              </li>
              <li>
                The Site and Services do not provide personalized investment
                advice, ongoing investment reporting, supervisory, or management
                services. Users are encouraged to consult a licensed financial
                professional for personalized advice.
              </li>
              <li>
                You should independently evaluate any information provided
                through the Site or Services, including but not limited to
                individual “picks,” recommendations, or trends, based on Your
                own financial requirements, knowledge, and experience.
              </li>
              <li>
                Crypto OverseerX and its Affiliates will not advise You
                personally on the nature, potential, or suitability of any
                particular trend, transaction, investment strategy, or other
                similar matter.
              </li>
              <li>
                The information, news, and performance data available through
                the Site or Services are provided by sources believed to be
                reliable but are not verified by Crypto OverseerX. We accept no
                responsibility for the accuracy or completeness of such
                information.
              </li>
              <li>
                Past performance is not indicative of future results. Users
                should not assume that the future performance of any trend,
                pick, view, specific investment, investment strategy, product,
                or service will be profitable or achieve similar results.
              </li>
              <li>
                Trading cryptocurrencies carries a high level of risk and is not
                suitable for all investors. You should carefully consider your
                investment goals, level of experience, and risk tolerance before
                deciding to trade cryptocurrencies.
              </li>
              <li>
                The Site and Services may contain opinions, market analyses, or
                recommendations that are different from those obtained through
                other sources. Crypto OverseerX or its Affiliates may, from time
                to time, have long or short positions in cryptocurrencies
                mentioned on the Site or through the Services.
              </li>
              <li>
                The Site and Services do not establish a fiduciary relationship
                between Crypto OverseerX and the User. The publication of the
                Site or Services should not be construed as a solicitation to
                effect, or attempt to effect, transactions in cryptocurrencies
                by any person or entity.
              </li>
              <li>
                Any trading decisions should be made by You according to your
                own opinion, knowledge, and experience. You assume the sole risk
                of any trade or investment You elect to make based on
                information and signals provided by Crypto OverseerX.
              </li>
              <li>
                Crypto OverseerX and its Affiliates shall not be liable for any
                monetary losses or other damages that You incur from your use or
                reliance on any information or paid training materials we
                provide on this Site or through the Services generally.
              </li>
              <li>
                Crypto OverseerX is NOT a financial broker, dealer, or an
                investment advisor as defined under all applicable laws. The
                purchase, sale, or advice regarding cryptocurrencies can only be
                performed by a licensed broker.
              </li>
            </ul>
          </div>
        </div>

        <div id="important-risk" className="flex flex-col items-center">
          <SubHeaderText
            isLine
            className="text-2xl desktop:text-3xl"
            text="Important Risk Notice"
          />
          <div className="">
            Trading cryptocurrencies is extremely volatile, carries a high level
            of risk, and is not suitable for everyone. Before deciding to invest
            or trade in cryptocurrencies, You should carefully consider your
            investment goals, level of experience, and risk tolerance. It is
            EXTREMELY LIKELY that You will sustain losses of some or all of your
            initial capital and therefore You should not invest money that You
            cannot afford to lose.
            <br />
            <br />
            Crypto OverseerX provides educational content and trading signals
            that should not be construed as investment or trading advice. Users
            of this Site or our Services should not expect to be profitable
            using the information provided. Any trading decision should ONLY be
            made by You according to your own opinion, knowledge, and
            experience.
          </div>
        </div>

        <div
          id="testimonials-disclaimer"
          className="flex flex-col items-center"
        >
          <SubHeaderText
            isLine
            className="text-2xl desktop:text-3xl"
            text="Testimonials Disclaimer"
          />
          <div className="">
            Testimonials found on this website and our social media channels are
            from real clients who have used our services. However, these
            testimonials do not represent the typical outcomes for all clients.
            Past performance may not be indicative of future results, and
            individual results may vary. We do not guarantee that You will
            achieve similar results, and You should perform Your own research
            and seek advice from an independent financial professional before
            making any trading decisions.
          </div>
        </div>
      </PaddingLayout>
      <Footer />
    </div>
  );
}
