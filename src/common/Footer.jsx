import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBox,
  faCheckCircle,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-white mt-10">

      {/* TOP FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20 py-12 border-b border-white/10">

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <p className="text-sm font-medium">Expert Support</p>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500">
            <FontAwesomeIcon icon={faBox} />
          </div>
          <p className="text-sm font-medium">Free Shipping Over $39</p>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm font-medium">One Year Warranty</p>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <p className="text-sm font-medium">Secured Payments</p>
        </div>

      </div>

      {/* MAIN FOOTER */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20 py-14">

        <div>
          <h3 className="text-lg font-bold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Gaming Keyboards</li>
            <li className="hover:text-white cursor-pointer">Gaming Mouse</li>
            <li className="hover:text-white cursor-pointer">Headsets</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Delivery Info</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Warranty</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Us</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates about new gaming gear & offers.
          </p>

          <div className="flex overflow-hidden rounded-lg border border-white/10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-white bg-white/5 outline-none"
            />
            <button className="px-4 bg-gradient-to-r from-purple-600 to-blue-500">
              Join
            </button>
          </div>

          <div className="flex gap-2 mt-5 text-gray-400 text-sm">
            <span className="px-2 py-1 bg-white/5 rounded">Visa</span>
            <span className="px-2 py-1 bg-white/5 rounded">MasterCard</span>
            <span className="px-2 py-1 bg-white/5 rounded">PayPal</span>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm py-5 border-t border-white/10">
        © 2026 Gaming Store. All rights reserved.
      </div>

    </footer>
  );
}