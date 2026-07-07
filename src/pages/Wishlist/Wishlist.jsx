import "./Wishlist.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import useProduct from "../../hooks/useProducts";

export default function Wishlist() {
  const {  wishlistData } = useContext(WishlistContext);
  const { wishListHandler } = useProduct();


  return (
    <div className="min-h-screen bg-[var(--main-bg)] px-6 md:px-16 py-10">
      <h1 className="text-3xl text-white flex justify-center font-bold mb-8">
        Your Wishlist
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {wishlistData.length > 0 ? (
          wishlistData.map((item) => {
            const product = item.product;

            return (
              <div
                key={product.id}
                className="cart w-90 bg-[var(--cart-back)] p-3 rounded-xl overflow-hidden group"
              >
                <div className="w-full h-52 sm:h-60 overflow-hidden rounded-lg">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="text-white text-lg font-bold">
                    {product.name}
                  </h2>

                  <p className="text-gray-300 text-sm mt-2">{product.desc}</p>

                  <p className="text-white mt-2 text-lg font-semibold">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => wishListHandler(product)}
                    className="mt-4 w-full py-2 rounded-lg text-white transition relative overflow-hidden group"
                  >
                    <span className="relative z-10">Remove From WishList</span>
                    <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff00cc,#ff6600,#00ffcc,#ff00cc)] bg-[length:600%_600%] animate-rgb"></span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-xl">Wishlist is empty</p>
        )}
      </div>
    </div>
  );
}
