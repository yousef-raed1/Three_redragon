import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import useProduct from "../../hooks/useProducts";
import { CartContext } from "../../context/CartContext";

export default function ProductPage() {
  const { wishListHandler } = useProduct();
  const { addToCart } = useContext(CartContext);

  const {
    filteredProducts = [],
    filters,
    setFilters,
    categories = [],
    productsData = [],
  } = useContext(DisplayContext);

  return (
    <div className="bg-[var(--main-bg)] text-white min-h-screen">

      {/* HEADER */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src="/images/keypordchat-1.png"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Gaming Keyboard
          </h1>
        </div>
      </div>

      <div className="flex gap-6 px-4 md:px-10 py-10">

        {/* FILTER */}
        <div className="w-[260px] bg-[var(--cart-back)] p-5 rounded-2xl h-fit space-y-4 sticky top-24">

          <h2 className="text-lg font-bold border-b pb-2">
            Categories
          </h2>

          {categories.map((cat) => {
            const count = productsData.filter(
              (p) => p.category === cat
            ).length;

            return (
              <label key={cat} className="flex justify-between items-center cursor-pointer">

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={filters.category.includes(cat)}
                    onChange={() => {
                      setFilters((prev) => {
                        const exists = prev.category.includes(cat);

                        return {
                          ...prev,
                          category: exists
                            ? prev.category.filter((c) => c !== cat)
                            : [...prev.category, cat],
                        };
                      });
                    }}
                  />

                  <span className="capitalize text-gray-300">
                    {cat}
                  </span>
                </div>

                <span className="text-xs text-gray-400">
                  ({count})
                </span>

              </label>
            );
          })}

          <button
            onClick={() => setFilters({ category: [] })}
            className="w-full mt-4 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm"
          >
            Clear Filters
          </button>

        </div>

        <div className="flex-1">

          <h2 className="text-xl font-bold mb-6">
            Products ({filteredProducts.length})
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-[var(--cart-back)] p-3 rounded-xl transition group"
                >

                  <div className="h-52 overflow-hidden rounded-lg mb-3">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  <h2 className="font-bold text-lg">{item.name}</h2>

                  <p className="text-gray-400 text-sm">{item.desc}</p>

                  <p className="text-white mt-2 font-bold">
                    {item.price} EGP
                  </p>

                  <div className="mt-4 space-y-3">

<button
  onClick={() => addToCart(item, item.price)}
  className="w-full py-2 rounded-lg text-white relative overflow-hidden group"
>
  <span className="relative z-10">Add to Cart</span>
  <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff0000,#00ffcc,#0066ff,#ff0000)] bg-[length:600%_600%] animate-rgb"></span>
</button>

                    <button
                      onClick={() => wishListHandler(item)}
                      className="w-full py-2 rounded-lg text-white relative overflow-hidden group"
                    >
                      <span className="relative z-10">Add to WishList</span>
                      <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff00cc,#ff6600,#00ffcc,#ff00cc)] bg-[length:600%_600%] animate-rgb"></span>
                    </button>

                  </div>

                </div>
              ))}

            </div>
          ) : (
            <p className="text-gray-400">No products found</p>
          )}

        </div>
      </div>
    </div>
  );
}