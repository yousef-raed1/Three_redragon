import "./Our.css";
import { useEffect, useRef, useState } from "react";

import bgggvvvv from "../../assets/images/keypordchat-1.png";
import redragonour from "../../assets/images/redragon-logo-Png.avif";
import combo from "../../assets/images/combo.png";
import keyboard from "../../assets/images/mousechat.png";

export default function Our() {
  const text = "Our Core Values";

  const [displayedText, setDisplayedText] = useState("");
  const [start, setStart] = useState(false);

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    setStart(true);

    let i = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting) {
        setDisplayedText(text.slice(0, i + 1));
        i++;

        if (i === text.length) deleting = true;
      } else {
        setDisplayedText(text.slice(0, i - 1));
        i--;

        if (i === 0) deleting = false;
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Our">

      <div className="section-1 relative h-[600px] overflow-hidden">
        <img src={bgggvvvv} className="w-full h-full object-cover" />
        <p className="khat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white z-10">
          Our Story
        </p>
        <div className="absolute inset-0 bg-[var(--bg-opacity)]"></div>
      </div>

      <div className="section-2 mt-20 flex flex-col lg:flex-row justify-center gap-10">

        <div className="left flex justify-center">
          <div className="w-full max-w-[500px] lg:w-[500px] lg:h-[350px] bg-(--redlogoragon-back) flex items-center justify-center">
            <img src={redragonour} className="w-[70%]" alt="" />
          </div>
        </div>

        <div className="right flex flex-col justify-center text-white max-w-[600px] space-y-5 text-center lg:text-left px-5">

          <h2 className="text-3xl lg:text-5xl font-bold">
            Redragon
          </h2>

          <p className="text-gray-300">
            In Eastern culture, dragons hold a position of great reverence, being seen as mighty and sacred beings.
          </p>

          <p>
            The color red, representing nobility and prosperity, further enhances their significance.
          </p>

          <p>
            Redragon strives to embody this esteemed status within the gaming peripherals industry.
          </p>

          <p>
            We are Hong Kong Geekbuying Information Technology Limited, an officially certified distributor of Redragon®.
          </p>

        </div>

      </div>

      <div className="section-3 mt-20 space-y-10">

        <div className="flex justify-center text-white">
          <p className={`text-4xl font-bold transition-all duration-700 ${start ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 text-white">

          <div className="bg-[var(--card-back)] p-6 rounded-xl text-center space-y-3">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
              1
            </div>
            <div className="text-2xl font-bold">Affordable Excellence</div>
            <p className="text-sm text-gray-300">Unleash your gaming potential with our affordable excellence.</p>
            <p className="text-sm text-gray-400">Excellence matters</p>
          </div>

          <div className="bg-[var(--card-back)] p-6 rounded-xl text-center space-y-3">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-300 text-black font-bold">
              2
            </div>
            <div className="text-2xl font-bold">Customer-first Innovation</div>
            <p className="text-sm text-gray-300">Cutting-edge technology with customer-first focus always.</p>
            <p className="text-sm text-gray-400">Always priority</p>
          </div>

          <div className="bg-[var(--card-back)] p-6 rounded-xl text-center space-y-3">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-orange-400 text-black font-bold">
              3
            </div>
            <div className="text-2xl font-bold">Quality Redefined</div>
            <p className="text-sm text-gray-300">Performance that exceeds expectations every time.</p>
            <p className="text-sm text-gray-400">Built to last</p>
          </div>

        </div>
      </div>

      <div className="section-4 mt-20 px-5 space-y-10">

        <p className="text-2xl lg:text-4xl font-bold text-white text-center">
          Empower Your Excellence
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="relative rounded-xl overflow-hidden group h-[300px]">
            <img src={keyboard} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-5 left-5 text-white space-y-2">
              <h2 className="text-xl font-bold">Gaming mouse</h2>
              <p className="text-sm">Game-Changing <br /> Responsiveness</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group h-[300px]">
            <img src={combo} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-5 left-5 text-white space-y-2">
              <h2 className="text-xl font-bold">Gaming combo</h2>
              <p className="text-sm">Instantaneous Key Feedback</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}