import { PaddingLayoutInterface } from "../../config/interface";

export default function PaddingLayout(prop: PaddingLayoutInterface) {
  return (
    <div
      className={` ${prop.className} py-20 px-10 mobile:px-20 tablet:px-32 desktop:px-60`}
    >
      {prop.children}
    </div>
  );
}
