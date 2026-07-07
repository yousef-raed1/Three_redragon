import "animate.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const ApiProdctDetails = "http://localhost:5000/products";
  const { id } = useParams();

  const getProductData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${ApiProdctDetails}/${id}`);
      setDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProductData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto bg-gray-900/50 border border-gray-700 rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-10 animate-pulse">

          {/* Image Skeleton */}
          <div className="h-[420px] bg-gray-700 rounded-2xl"></div>

          {/* Content Skeleton */}
          <div className="space-y-6">

            <div className="h-10 bg-gray-700 rounded w-3/4"></div>

            <div className="h-6 bg-gray-700 rounded w-1/3"></div>

            <div className="h-20 bg-gray-700 rounded"></div>

            <div className="h-10 bg-gray-700 rounded w-1/2"></div>

            <div className="h-12 bg-gray-700 rounded w-2/3"></div>

            <div className="h-10 bg-gray-700 rounded w-full"></div>

          </div>

        </div>
      </div>
    );
  }

  // 🔥 MAIN UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 text-white">

      <div className="max-w-6xl mx-auto bg-gray-900/50 border border-gray-700 rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="animate__animated animate__fadeIn">
          <div className="overflow-hidden rounded-2xl border border-gray-700">
            <img
              src={details.img}
              alt={details.name}
              className="w-full h-[420px] object-cover rounded-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center animate__animated animate__fadeIn">

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {details.name}
          </h1>

          <span className="text-3xl font-bold text-indigo-400 mb-4">
            Price: {details.price}
          </span>

          <p className="text-gray-300 leading-relaxed mb-6">
            {details.desc}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span>Quantity:</span>
            <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
              <button className="px-4 py-1 hover:bg-gray-700">-</button>
              <span className="px-5">1</span>
              <button className="px-4 py-1 hover:bg-gray-700">+</button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition">
              Add to Cart
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800">
              ❤️ Wishlist
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400 space-y-2 border-t border-gray-700 pt-4">
            <p>🚚 Free shipping</p>
            <p>🔄 30-day return</p>
            <p>⭐ 4.8 rating</p>
          </div>

        </div>
      </div>
    </div>
  );
}