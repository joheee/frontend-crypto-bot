import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";
import MetalicButton from "./MetalicButton";

export default function Footer() {
  return (
    <PaddingLayout className="flex flex-col items-center">
      <HeaderText isLine text="Request More Information" />
      <div id="contact-section" className="text-white text-center mb-6">
        join our Telegram channel today and stay ahead of the market!
      </div>
      <a href={"#price-section"}>
        <MetalicButton
          onClick={() => {}}
          className="py-2 px-16 rounded-3xl tracking-wide text-lg"
          text="Join Now"
        />
      </a>
      <div className="text-white text-center mt-16 mb-10 font-extralight">
        © 2024 Crypto OverseerX
      </div>
      <div className="bg-white h-[0.5px] w-full"></div>
    </PaddingLayout>
  );
}
