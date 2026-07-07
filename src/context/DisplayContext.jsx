import { createContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const apiProduct = "http://localhost:5000/products";

  const [productsData, setProductsData] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
  });

  // ✅ fetch كل المنتجات مرة واحدة
  useEffect(() => {
    axios.get(apiProduct).then((res) => {
      const clean = res.data.map((p) => ({
        ...p,
        category: p.category.trim().toLowerCase(),
      }));
      setProductsData(clean);
    });
  }, []);

  // ✅ استخراج categories
  const categories = [...new Set(productsData.map((p) => p.category))];

  // ✅ الفلترة
  const filteredProducts =
    filters.category.length === 0
      ? productsData
      : productsData.filter((p) => filters.category.includes(p.category));

  return (
    <DisplayContext.Provider
      value={{
        productsData,
        filteredProducts,
        filters,
        setFilters,
        categories,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
