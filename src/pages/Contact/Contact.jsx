import "./Contact.css";
import bgKeyboard from "../../assets/images/keypordchat-1.png";

export default function Contact() {
  return (
    <div
      className="Contact min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url(${bgKeyboard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
  <div className="relative w-full max-w-5xl mx-auto grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl bg-white/5">

  {/* LEFT */}
  <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-black/80 via-red-900/60 to-black/80 text-white">

    <div>
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Let's Talk 👋
      </h1>

      <p className="text-gray-300 mb-8">
        Have something in mind? Whether it's a question, feedback, or business inquiry — we're ready.
      </p>
    </div>

    <div className="space-y-4 text-sm text-gray-300">
      <div className="flex items-center gap-3">
        <span className="text-red-400 text-lg">📍</span>
        <p>Egypt</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-red-400 text-lg">📧</span>
        <p>support@keyboardstore.com</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-red-400 text-lg">📞</span>
        <p>+20 111 222 333</p>
      </div>
    </div>

  </div>

  {/* RIGHT */}
  <div className="p-10 bg-white/90 backdrop-blur-xl">

    <form className="space-y-5">

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-red-500 outline-none transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-red-500 outline-none transition"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-red-500 outline-none transition"
      />

      <textarea
        rows="5"
        placeholder="Your Message..."
        className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-red-500 outline-none transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-red-500/40"
      >
        Send Message 🚀
      </button>

    </form>

  </div>

</div>



    </div>
  );
}