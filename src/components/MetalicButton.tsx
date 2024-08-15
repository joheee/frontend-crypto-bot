import { MetalicButtonInterface } from "./config/interface";

export default function MetalicButton(prop: MetalicButtonInterface) {
  return (
    <button onClick={prop.onClick} className={`custom-btn btn-3 ${prop.className}`}>
      {prop.text}
    </button>
  );
}
