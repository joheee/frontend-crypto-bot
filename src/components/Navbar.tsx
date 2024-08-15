import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const hamburgerToggle = () => {
    setHamburger((prevHamburger) => !prevHamburger);
  };

  return (
    <div>
      <div
        className={`transform ${
          !hamburger ? "-translate-x-full" : "translate-x-0"
        } transition-transform ease-in duration-150 fixed flex flex-col font-Merienda w-full h-screen items-center justify-center gap-24 bg-accent-black z-40 desktop:hidden`}
      >
        <div
          className="absolute top-0 left-0 text-white z-50 p-6 "
          onClick={hamburgerToggle}
        >
          <IoMdClose className="text-4xl text-primary-gold" />
        </div>
        <p
          className={
            "hover:text-secondary-dark-gold text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Home
        </p>
        <p
          className={
            "hover:text-secondary-dark-gold text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Menu
        </p>
        <p
          className={
            "hover:text-secondary-dark-gold text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          About
        </p>
        <p
          className={
            "hover:text-secondary-dark-gold text-primary-gold hover:cursor-pointer text-3xl z-50"
          }
        >
          Sessions
        </p>
      </div>
      <div className=" bg-accent-black py-4 shadow-lg">
        <div className="flex justify-between desktop:w-[80%] w-[90%] mx-auto">
          <div className="flex min-h-full items-center gap-6">
            <div>
              <RxHamburgerMenu
                className="tablet:text-3xl text-2xl desktop:hidden inline-block text-primary-gold"
                onClick={hamburgerToggle}
              />
            </div>
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="" className="w-auto h-[3rem]" />
              <p className=" text-primary-gold font-extrabold tablet:text-2xl text-xl tablet:tracking-wider tracking-normal">
                CRYPTO OVERSEERX
              </p>
            </div>
          </div>

          <div className="desktop:flex hidden items-center gap-10 text-md text-primary-gold font-semibold">
            <a className="cursor-pointer" href={"#hero-section"}>
              Home
            </a>
            <a href={"#benefit-section"} className="cursor-pointer">
              Benefit
            </a>
            <a href={"#aboutus-section"} className="cursor-pointer">
              About Us
            </a>
            <a href={"#price-section"} className="cursor-pointer">
              Price
            </a>
            <a href={"#contact-section"} className="cursor-pointer">
              Contact Us
            </a>
          </div>
          <div className="flex items-center border tablet:px-6 px-3 rounded-full border-primary-gold text-primary-gold tracking-wide tablet:text-base text-sm hover:bg-secondary-dark-gold hover:text-primary-gold hover:border-secondary-dark-gold cursor-pointer transition-colors delay-75">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
}
