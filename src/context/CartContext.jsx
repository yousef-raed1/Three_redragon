import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ تحميل من localStorage
  const [cartData, setCartData] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // ✅ حفظ تلقائي
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  // ✅ إضافة للكارت
  const addToCart = (pro, price) => {
    const { id, img, name, stock } = pro;

    const objectForCart = {
      id,
      img,
      name,
      price,
      stock,
      amount: 1,
    };

    const findedProduct = cartData.find((el) => el.id === id);

    if (!findedProduct) {
      setCartData([...cartData, objectForCart]);
      return "first Add";
    } else {
      if (findedProduct.amount < findedProduct.stock) {
        findedProduct.amount++;
        setCartData([...cartData]);
        return "increment";
      } else {
        return "MAX";
      }
    }
  };

  // ✅ عدد العناصر
  const clearSubdata = () => {
    return cartData.reduce((a, b) => a + b.amount, 0);
  };

  // ✅ حذف منتج
  const removeSubCart = (pro) => {
    const filterCart = cartData.filter((el) => el.id !== pro.id);
    setCartData(filterCart);
  };

  // ✅ زيادة / تقليل
  const bausMines = (id, status) => {
    const item = cartData.find((el) => el.id === id);
    if (!item) return;

    if (status === "inc") {
      if (item.amount < item.stock) {
        item.amount++;
      }
    } else {
      if (item.amount > 1) {
        item.amount--;
      }
    }

    setCartData([...cartData]);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCart,
        clearSubdata,
        removeSubCart,
        bausMines,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};