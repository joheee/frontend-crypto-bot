import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { SCALE_HOVER } from "./config/TailwindEffect";
import { Link } from "react-router-dom";

export default function Header() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const hamburgerToggle = () => {
    setHamburger((prevHamburger) => !prevHamburger);
  };

  return (
    <div className="absolute top-0 z-10 w-screen">
      <div
        className={`transform ${
          !hamburger ? "-translate-x-full" : "translate-x-0"
        } transition-transform ease-in duration-150 fixed flex flex-col font-Merienda w-full h-screen items-center justify-center gap-24 bg-accent-black z-50 desktop:hidden`}
      >
        <div
          className="absolute top-0 left-0 text-white z-50 p-6 "
          onClick={hamburgerToggle}
        >
          <IoMdClose className="text-4xl text-primary-gold" />
        </div>
        <a
          href="#hero-section"
          onClick={hamburgerToggle}
          className={
            "hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Home
        </a>
        <a
          onClick={hamburgerToggle}
          href={"#benefit-section"}
          className={
            "hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Benefit
        </a>
        <a
          onClick={hamburgerToggle}
          href={"#aboutus-section"}
          className={
            "hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          About Us
        </a>
        <a
          onClick={hamburgerToggle}
          href={"#price-section"}
          className={
            "hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Price
        </a>
        <a
          onClick={hamburgerToggle}
          href={"#contact-section"}
          className={
            "hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Contact Us
        </a>
      </div>
      <div className="bg-transparent py-4">
        <div className="flex justify-between desktop:w-[80%] w-[90%] mx-auto">
          <div className="flex min-h-full items-center gap-6">
            <div>
              <RxHamburgerMenu
                className="tablet:text-3xl text-2xl desktop:hidden inline-block text-primary-gold"
                onClick={hamburgerToggle}
              />
            </div>
            <Link
              to="/"
              className={`flex items-center gap-4 w-fit cursor-pointer ${SCALE_HOVER}`}
            >
              <img src="/logo.png" alt="" className="w-[40px] h-[40px]" />
              <p className="hover:text-secondary-dark-gold transition-colors text-primary-gold font-extrabold tablet:text-2xl text-xl tablet:tracking-wider tracking-normal">
                Crypto OverseerX
              </p>
            </Link>
          </div>

          <div className="desktop:flex hidden items-center gap-10 text-md text-primary-gold font-semibold">
            <a
              href="#hero-section"
              className="cursor-pointer hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer"
            >
              Home
            </a>
            <a
              href={"#benefit-section"}
              className="cursor-pointer hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer"
            >
              Benefit
            </a>
            <a
              href={"#aboutus-section"}
              className="cursor-pointer hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer"
            >
              About Us
            </a>
            <a
              href={"#price-section"}
              className="cursor-pointer hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer"
            >
              Price
            </a>
            <a
              href={"#contact-section"}
              className="cursor-pointer hover:text-secondary-dark-gold transition-colors text-primary-gold hover:cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          {/* <div className="flex items-center border tablet:px-6 px-3 rounded-full border-primary-gold text-primary-gold tracking-wide tablet:text-base text-sm hover:bg-secondary-dark-gold hover:text-primary-gold hover:border-secondary-dark-gold cursor-pointer transition-colors delay-75">
            Get Started
          </div> */}
        </div>
      </div>
    </div>
  );
}
