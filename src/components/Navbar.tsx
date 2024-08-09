export default function Header() {
  return (
    <div className=" bg-accent-black py-4 shadow-lg">
      <div className="flex justify-between w-[80%] mx-auto">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="" className="w-auto h-[3rem]" />
          <p className="text-xl font-frijole text-secondary-dark-gold">
            CRYPTO{" "}
            <span className="text-primary-gold font-frijole">OVERSEERX</span>
          </p>
        </div>
        <div className="flex items-center gap-10 text-md text-secondary-dark-gold font-semibold">
          <p>Home</p>
          <p>Benefit</p>
          <p>About Us</p>
          <p>Price</p>
          <p>Contact Us</p>
        </div>
        <div className="flex items-center border px-6 rounded-full border-primary-gold text-primary-gold tracking-wide">
          Get Started
        </div>
      </div>
    </div>
  );
}
