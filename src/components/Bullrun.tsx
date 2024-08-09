export default function Bullrun() {
  return (
    <div>
      <div className="w-[80%] mx-auto flex flex-col gap-12 border border-secondary-dark-gold rounded-xl py-16 bg-[#383838]">
        <div className="flex justify-center ">
          <div className="text-center text-5xl font-frijole">
            <div className="font-frijole text-white">Don't Miss Out On The</div>
            <div className="font-frijole text-secondary-dark-gold">
              Bull Run!
            </div>
          </div>
        </div>
        <div className="w-full flex items-center my-6">
          <div className="w-1/2 h-56 flex justify-center">
            <img src="/early_bird.png" alt="" className="h-full w-auto" />
          </div>
          <div className="w-1/2 text-white text-xl pr-12">
            With the market on the brink of an exciting bull run, now is the
            time to act! The potential for significant gains is immense, but
            without the right expertise and strategy, you risk missing out. Join
            my channel today and gain access to expert insights and strategies
            to help you navigate the market and maximize your profits! Don't let
            this bull run pass you by without making the most of it!
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-5xl bg-secondary-dark-gold px-20 py-6 rounded-full btn-metallic">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
