import { createContext, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [wishlistData, setWishlistData] = useState([]);

  const wishlistApi = "http://localhost:5000/wishlist";

  const addRemoveWishlist = async (product) => {
    if (!currentUser || !product) return { status: "error" };

    try {
      const { data } = await axios.get(
        `${wishlistApi}?userId=${currentUser.id}`,
      );

      const exists = data.find((item) => item.productsId === product.id);

      // ADD
      if (!exists) {
        await axios.post(wishlistApi, {
          userId: currentUser.id,
          productsId: product.id,
          payload: { product },
        });

        setWishlistData((prev) => [...prev, product]);

        return { status: "add" };
      }

      // REMOVE
      await axios.delete(`${wishlistApi}/${exists.id}`);

      setWishlistData((prev) => prev.filter((item) => item.id !== product.id));

      return { status: "remove" };
    } catch (error) {
      console.error(error);
      return { status: "error" };
    }
  };

  const getWishList = async () => {
    if (!currentUser) return;

    const { data } = await axios.get(`${wishlistApi}?userId=${currentUser.id}`);

    const wishlistPayload = data.map((el) => el.payload);

    setWishlistData(wishlistPayload);
  };

  const clearSubData = ()=> setWishlistData([])

  return (
    <WishlistContext.Provider
      value={{ addRemoveWishlist, getWishList, wishlistData , clearSubData }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
