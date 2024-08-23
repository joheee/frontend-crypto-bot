import { useState } from "react";
import MetalicButton from "../components/MetalicButton";
import { Link } from "react-router-dom";

export default function PopUpModal() {
  const [popUp, setPopUp] = useState<boolean>(() => {
    const storedPopUp = localStorage.getItem("popUp");
    return storedPopUp === "false" ? false : true;
  });

  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        style={{ zIndex: 1600 }}
        className={`delay-300 transition-opacity duration-500 ${
          popUp ? "opacity-100 fixed" : "opacity-0 hidden"
        } bg-opacity-90 bg-slate-950 top-0 left-0 right-0 z-50 p-4 overflow-x-scroll overflow-y-scroll md:inset-0 h-full max-h-full justify-center items-center flex w-screen`}
      >
        <div className="relative desktop:w-3/5 tablet:w-4/5 max-h-full">
          <div className="relative bg-accent-black rounded-lg shadow w-full">
            <div className="p-6 text-center gap-6 w-full flex flex-col">
              <svg
                className="my-2 mx-auto text-red-400 w-12 h-12 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-gray-400 tablet:text-base text-sm">
                <span className="text-gray-100">Important Risk Notice</span> -
                Trading cryptocurrencies is extremely volatile, carries a high
                level of risk, and is not suitable for everyone. Before deciding
                to invest or trade in cryptocurrencies, You should carefully
                consider your investment goals, level of experience, and risk
                tolerance. It is EXTREMELY LIKELY that You will sustain losses
                of some or all of your initial capital and therefore You should
                not invest money that You cannot afford to lose. Crypto
                OverseerX provides educational content and trading signals that
                should not be construed as investment or trading advice. Users
                of this Site or our Services should not expect to be profitable
                using the information provided. Any trading decision should ONLY
                be made by You according to your own opinion, knowledge, and
                experience.
              </p>
              <p className="text-gray-400 tablet:text-base text-sm">
                <span className="text-gray-100">Testimonials Disclaimer</span> -
                Testimonials found on this website and our social media channels
                are from real clients who have used our services. However, these
                testimonials do not represent the typical outcomes for all
                clients. Past performance may not be indicative of future
                results, and individual results may vary. We do not guarantee
                that You will achieve similar results, and You should perform
                Your own research and seek advice from an independent financial
                professional before making any trading decisions.
              </p>
              <p className="text-gray-400 tablet:text-base text-sm">
                Please also refer to the complete version of Our Terms &
                Conditions, Important Risk Notice, Privacy Policy, and
                Testimonial Disclaimer linked below.
              </p>
              <div className="text-gray-400 gap-6 my-2 tablet:text-base text-sm grid desktop:grid-cols-4 tablet:grid-cols-2 grid-cols-1">
                <Link
                  to="/terms-conditions/#terms-conditions"
                  className="underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/terms-conditions/#important-risk"
                  className="underline"
                >
                  Important Risk Notice
                </Link>
                <Link
                  to="/terms-conditions/#testimonials-disclaimer"
                  className="underline"
                >
                  Testimonials Disclaimer
                </Link>
                <Link
                  to="/terms-conditions/#acknowledgement"
                  className="underline"
                >
                  Acknowledgement
                </Link>
              </div>
              <div className="flex justify-center w-full my-3">
                <MetalicButton
                  className="py-2 px-16 rounded-3xl tracking-wide tablet:text-lg text-sm w-fit"
                  text="I Understand & Agree, Proceed to Site"
                  onClick={() => {
                    setPopUp(false);
                    localStorage.setItem("popUp", "false");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
