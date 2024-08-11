export interface HeaderTextInterface {
  text: string;
}
export default function HeaderText(prop: HeaderTextInterface) {
  return (
    <div className="text-center flex justify-center text-3xl desktop:text-5xl font-bold text-secondary-dark-gold mb-8">
      {prop.text}
    </div>
  );
}
