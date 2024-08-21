import { HeaderTextInterface } from "./config/interface";

export default function HeaderText(prop: HeaderTextInterface) {
  return (
    <div id={prop.id} className={`w-fit ${prop.className}`}>
      <div className="tracking-wide text-center flex justify-center text-3xl desktop:text-5xl font-bold text-primary-gold mb-8">
        {prop.text}
      </div>
      {prop.isLine ? null : (
        <div className="h-[1px] w-full bg-primary-gold mb-5"></div>
      )}
    </div>
  );
}
