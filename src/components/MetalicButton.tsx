export interface MetalicButtonInterface {
  text: string;
  onClick: () => void;
}
export default function MetalicButton(prop: MetalicButtonInterface) {
  return (
    <button onClick={prop.onClick} className="custom-btn btn-3 w-fit">
      {prop.text}
    </button>
  );
}
