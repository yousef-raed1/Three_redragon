import "./ProductCart.css";
import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import { AuthContext } from "../../context/AuthContext";
import useProduct from "../../hooks/useProducts";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCart() {
  const { wishListHandler } = useProduct();
  const { productsData = [] } = useContext(DisplayContext);
  const { currentUser, isLoadingCurrentUser } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getDiscount = (price) => {
    if (price >= 2000) return 30;
    if (price >= 1500) return 25;
    if (price >= 1200) return 20;
    if (price >= 1000) return 15;
    return 10;
  };

  const handleAddToCart = (event, product, finalPrice) => {
    event.stopPropagation();

    if (!currentUser) {
      navigate("/logiin");
      return;
    }

    addToCart(product, finalPrice);
  };

  const handleAddToWishlist = (event, product) => {
    event.stopPropagation();

    if (!currentUser) {
      navigate("/logiin");
      return;
    }

    wishListHandler(product);
  };

  return (
    <div className="flex gap-6 flex-wrap">
      {productsData.length > 0 ? (
        productsData.map((value) => {
          const price = Number(value.price) || 0;
          const discount = getDiscount(price);
          const finalPrice = Math.floor(
            price - (price * discount) / 100
          );

          return (
            <div
              onClick={() => navigate(`/ProductCart/${value.id}`)}
              key={value.id}
              className="cart relative w-90 bg-[var(--cart-back)] p-3 rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">
                -{discount}%
              </div>

              <div className="w-full h-52 sm:h-60 overflow-hidden rounded-lg">
                <img
                  src={value.img}
                  alt={value.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-white text-lg font-bold">
                  {value.name}
                </h2>

                <span className="text-gray-300 text-sm capitalize">
                  {value.category}
                </span>

                <p className="text-gray-300 text-sm mt-2">
                  {value.desc}
                </p>

                <p className="mt-2 flex items-center gap-3">
                  <span className="text-green-400 text-xl font-bold">
                    ${finalPrice}
                  </span>

                  <del className="text-gray-500 text-sm">
                    ${price}
                  </del>
                </p>

                <p className="text-gray-300 text-sm mt-2">
                  Stock: {value.stock}
                </p>

                <button
                  onClick={(event) =>
                    handleAddToCart(event, value, finalPrice)
                  }
                  className="mt-4 w-full py-2 rounded-lg text-white transition relative overflow-hidden group"
                >
                  <span className="relative z-10">Add to Cart</span>
                  <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff0000,#00ffcc,#0066ff,#ff0000)] bg-[length:600%_600%] animate-rgb"></span>
                </button>

                <button
                  onClick={(event) =>
                    handleAddToWishlist(event, value)
                  }
                  className="mt-4 w-full py-2 rounded-lg text-white transition relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    Add to WishList
                  </span>
                  <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff00cc,#ff6600,#00ffcc,#ff00cc)] bg-[length:600%_600%] animate-rgb"></span>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400">
          {isLoadingCurrentUser
            ? "Loading products..."
            : "No products found"}
        </p>
      )}
    </div>
  );
}