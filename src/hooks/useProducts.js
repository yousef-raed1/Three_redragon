import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";

export default function useProduct() {
  const { addRemoveWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const wishListHandler = async (product) => {
    const res = await addRemoveWishlist(product);

    if (!res) return;

    if (res.status === "add") {
      Swal.fire({
        title: "Added to Wishlist",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Removed from Wishlist",
        icon: "success",
      });
    }
  };

const addToCartHandler = async (product) => {
  const result = await Swal.fire({
    title: "Add to cart?",
    text: "Do you want to add this product to your cart?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, add it",
    cancelButtonText: "No",
  });

  if (result.isConfirmed) {
    addToCart(product); // دي دالتك اللي بتضيف فعليًا

    Swal.fire({
      title: "Added!",
      text: "Product added to cart successfully",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  }
};

  return { wishListHandler, addToCartHandler };
}
