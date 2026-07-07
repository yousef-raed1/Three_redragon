import headerimg from "../assets/images/gaming-room.png";
import carttrain1 from "../assets/images/cart-train-1.avif";
import carttrain2 from "../assets/images/train-cart-2.svg";
import colo from "../assets/images/colouronwhite.svg";
import lastcarttrain from "../assets/images/GameGavel_logo_guide__-04.png";
import cresmas from "../assets/images/cresmas.avif";

export default function Header() {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={headerimg}
          alt="header"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold">
              Upgrade Your Gaming Setup
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-200">
              High performance gear for serious gamers
            </p>

            <button className="mt-5 px-6 py-2 bg-red-500 hover:bg-red-600 transition rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <br /><br /><br />

      <p className="text-center text-white mb-6">Featured On</p>

      <div className="overflow-hidden w-full">
        <div className="flex w-max animate-scroll gap-4">

          <div className="flex gap-4">
            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)] p-4">
              <img src={carttrain1} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={carttrain2} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={colo} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={lastcarttrain} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={cresmas} className="w-full object-contain" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)] p-4">
              <img src={carttrain1} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={carttrain2} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={colo} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={lastcarttrain} className="w-full object-contain" />
            </div>

            <div className="w-52 h-28 flex items-center justify-center rounded-2xl bg-[var(--navbar)]">
              <img src={cresmas} className="w-full object-contain" />
            </div>
          </div>

        </div>
      </div>

      <div className="mt-10 px-10">
        <hr className="border-white opacity-80" />
      </div>

 
      
    </>
  );
}