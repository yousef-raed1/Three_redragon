import { useEffect, useState } from "react";
import "./Opjects.css";

import chat1 from "../../assets/images/keypordchat-1.png";
import combo from "../../assets/images/combo.png";
import headPhone from "../../assets/images/headPhone.png";
import mouth from "../../assets/images/mousechat.png";

export default function Opjects() {
  const texts = ["Empower your excellence."];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));

        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <div className="p-5 md:p-8 lg:p-10 min-h-screen">

      {/* HEADER */}
      <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start gap-2">

          <div className="flex items-center gap-2 opacity-50 text-white text-sm">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 6h16M4 12h16M4 18h16" />
            </svg>
            <p>Equip, Perform, Excel</p>
          </div>

          {/* نفس حجم اللاب زي ما هو */}
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-white leading-tight">
            {displayedText}
            <span className="cursor">|</span>
          </h1>

        </div>
      </div>

      {/* GRID */}
      <div className="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        lg:h-[400px]
      ">

        {/* BIG CARD */}
        <div className="
          relative rounded-xl overflow-hidden bg-black group
          h-[250px] sm:h-[300px]
          lg:h-auto lg:col-span-1 lg:row-span-2
        ">

          <img
            src={chat1}
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
            alt=""
          />

          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg lg:text-xl font-bold">Gaming Keyboard</h2>
            <p className="text-sm">Best performance gear</p>

            <button className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* COMBO */}
        <div className="
          relative rounded-xl overflow-hidden bg-black group
          h-[200px] sm:h-[250px]
          lg:h-auto lg:col-span-1
        ">

          <img
            src={combo}
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
            alt=""
          />

          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">Gaming Combo</h2>
            <p className="text-sm">Mechanical RGB</p>
          </div>
        </div>

        {/* SMALL CARDS */}
        <div className="
          flex flex-col gap-4
          sm:col-span-2
          lg:col-span-1
        ">

          <div className="
            relative rounded-xl overflow-hidden bg-black group
            h-[140px] sm:h-[160px] lg:h-[190px]
          ">

            <img
              src={headPhone}
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
              alt=""
            />

            <div className="absolute bottom-2 left-2 text-white text-sm">
              Headsets
            </div>
          </div>

          <div className="
            relative rounded-xl overflow-hidden bg-black group
            h-[140px] sm:h-[160px] lg:h-[190px]
          ">

            <img
              src={mouth}
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
              alt=""
            />

            <div className="absolute bottom-2 left-2 text-white text-sm">
              Mice
            </div>
          </div>

        </div>
      </div>

      <div className="mt-10 px-2 lg:px-10">
        <hr className="border-white opacity-80" />
      </div>

    </div>
  );
}