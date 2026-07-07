import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const { cartData, removeSubCart, bausMines } = useContext(CartContext);

  const removeSubCartHandler = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeSubCart(product);

        Swal.fire({
          title: "Deleted!",
          text: "Item has been removed.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[var(--main-bg)] px-4 sm:px-6 md:px-16 py-10">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl text-white flex justify-center font-bold mb-8">
        Your Cart
      </h1>

      {cartData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {cartData.map((val) => (
            <div
              key={val.id}
              className="w-full bg-[var(--cart-back)] p-3 rounded-xl overflow-hidden group"
            >

              {/* IMAGE */}
              <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden rounded-lg">
                <img
                  src={val.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="mt-4">

                <h2 className="text-white text-base sm:text-lg font-bold">
                  {val.name}
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                  {val.desc}
                </p>

                <p className="text-white mt-2 text-base sm:text-lg font-semibold">
                  ${val.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3">

                  <button
                    onClick={() => bausMines(val.id, "dec")}
                    disabled={val.amount === 1}
                    className="px-2 sm:px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
                  >
                    -
                  </button>

                  <span className="text-white text-base sm:text-lg">
                    {val.amount}
                  </span>

                  <button
                    onClick={() => bausMines(val.id, "inc")}
                    disabled={val.amount === val.stock}
                    className="px-2 sm:px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeSubCartHandler(val)}
                  className="mt-4 w-full py-2 text-sm sm:text-base rounded-lg text-white relative overflow-hidden group"
                >
                  <span className="relative z-10">Remove</span>
                  <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff0000,#ff0066,#990000,#ff0000)] bg-[length:600%_600%] animate-rgb"></span>
                </button>

              </div>
            </div>
          ))}

        </div>
      ) : (
        <>
          <p className="text-gray-400 text-center w-full text-sm sm:text-base">
            Cart is empty
          </p>

          <div className="flex justify-center mt-6">
            <Link
              to="/products"
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-lg font-semibold rounded-xl shadow-lg transition"
            >
              🛒 Go to Shop
            </Link>
          </div>
        </>
      )}
    </div>
  );
}