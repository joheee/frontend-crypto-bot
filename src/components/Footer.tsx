import HeaderText from "./HeaderText";
import PaddingLayout from "./layout/padding/PaddingLayout";
import MetalicButton from "./MetalicButton";

export default function Footer() {
  return (
    <PaddingLayout className="flex flex-col items-center">
      <HeaderText text="Request More Information" />
      <div className="text-white text-center mb-6">
        join our Telegram channel today and stay ahead of the market!
      </div>
      <MetalicButton onClick={() => {}} text="Join Now" />
      <div className="text-white text-center mt-16 mb-10 font-extralight">
        © 2024 Crypto Overseerx
      </div>
      <div className="bg-white h-[0.5px] w-full"></div>
    </PaddingLayout>
  );
}
