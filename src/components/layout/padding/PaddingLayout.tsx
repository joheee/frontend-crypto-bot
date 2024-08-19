import { PaddingLayoutInterface } from "../../config/interface";

export default function PaddingLayout(prop: PaddingLayoutInterface) {
  return (
    <div
      id={prop.id}
      onClick={prop.onClick}
      className={` ${prop.className} py-5 px-10 mobile:px-20 tablet:py-20 tablet:px-32 desktop:px-60`}
    >
      {prop.children}
    </div>
  );
}
