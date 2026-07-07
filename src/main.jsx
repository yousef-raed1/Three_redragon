import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DisplayProvider } from "./context/DisplayContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <DisplayProvider>
    <AuthProvider>
      <WishlistProvider>
      <CartProvider>

      <App />
        
      </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </DisplayProvider>,
);
