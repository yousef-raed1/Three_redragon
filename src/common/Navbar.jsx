import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoRedragon from "../assets/images/redragon-logo-Png.avif";
import { WishlistContext } from "../context/WishlistContext";
import { ImSpinner } from "react-icons/im";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { wishlistData, getWishList } = useContext(WishlistContext);
  const { currentUser, isLoadingCurrentUser, logOut } =
    useContext(AuthContext);
  const { clearSubdata } = useContext(CartContext);

  const navigate = useNavigate();

  const logOutHandler = async () => {
    await logOut();
    navigate("/Login");
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentUser) getWishList();
  }, [currentUser]);

  const navLinkStyle = ({ isActive }) =>
    `relative px-1 py-1 transition duration-300 ${
      isActive ? "text-red-500" : "text-white hover:text-red-400"
    }`;

  const underlineStyle = (isActive) =>
    `absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 origin-left transition-transform duration-300 ${
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <>
      {/* TOP BAR */}
      <nav
        className={`bg-red-500 flex items-center justify-center py-2 text-sm font-bold text-white transition-all duration-300 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <p>Upgrade Your Game, Slash Your Spend</p>
      </nav>

      {/* MAIN NAV */}
      <nav
        className={`bg-[var(--navbar)] text-white px-4 md:px-16 py-4 flex items-center justify-between border-b h-20 border-gray-800 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 w-full z-50 shadow-xl backdrop-blur-md"
            : "relative"
        }`}
      >
        <div className="flex items-center gap-6">
          <NavLink to="/Home" className="flex items-center gap-2">
            <img src={logoRedragon} alt="logo" className="w-24 md:w-30" />
          </NavLink>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            {[
              { name: "Home", path: "/Home" },
              { name: "Products", path: "/Products" },
              { name: "Our Story", path: "/Our" },
              { name: "Contact", path: "/Contact" },
            ].map((item, index) => (
              <li key={index} className="group relative">
                <NavLink to={item.path} className={navLinkStyle}>
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.name}</span>
                      <span className={underlineStyle(isActive)}></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-sm">

          {isLoadingCurrentUser ? (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-600/40 animate-pulse"></div>
              <div className="w-16 md:w-20 h-4 bg-gray-600/40 rounded animate-pulse"></div>
            </div>
          ) : currentUser ? (
            <p className="hidden sm:block font-medium">
              Welcome :{" "}
              <span className="text-red-400">{currentUser.firstname}</span>
            </p>
          ) : (
            <>
              <NavLink to="/Login">Login</NavLink>
              <NavLink to="/Register">Register</NavLink>
            </>
          )}

          <i className="hidden md:block fa-solid fa-magnifying-glass text-base cursor-pointer hover:text-red-400 transition"></i>

          <NavLink to="/Cart">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2 transition duration-300 ${
                  isActive ? "text-red-500 scale-105" : "hover:text-red-400"
                }`}
              >
                <i className="fa-solid fa-cart-shopping text-base"></i>
                <sub className="text-xs">({clearSubdata()})</sub>
              </div>
            )}
          </NavLink>

          {!currentUser ? (
            <div
              onClick={() =>
                alert("You need to login or register to access wishlist")
              }
              className="flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-regular fa-heart text-base"></i>
              <sub className="text-xs">(0)</sub>
            </div>
          ) : (
            <NavLink to="/Wishlist">
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-2 transition duration-300 ${
                    isActive ? "text-red-500 scale-105" : "hover:text-red-400"
                  }`}
                >
                  <i className="fa-regular fa-heart text-base"></i>
                  <sub className="text-xs">
                    {isLoadingCurrentUser ? (
                      <ImSpinner className="animate-spin" />
                    ) : (
                      wishlistData.length
                    )}
                  </sub>
                </div>
              )}
            </NavLink>
          )}

          {currentUser && (
            <button
              onClick={logOutHandler}
              className="relative px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-red-400 border border-red-500/40 rounded-lg backdrop-blur-md bg-red-500/10 overflow-hidden group transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>
          )}

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <i className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="md:hidden bg-[var(--navbar)] text-white px-6 py-4 border-t border-gray-800">
          <ul className="flex flex-col gap-4 text-sm font-medium">

            <NavLink to="/Home" onClick={() => setOpenMenu(false)}>
              Home
            </NavLink>

            <NavLink to="/Products" onClick={() => setOpenMenu(false)}>
              Products
            </NavLink>

            <NavLink to="/Our" onClick={() => setOpenMenu(false)}>
              Our Story
            </NavLink>

            <NavLink to="/Contact" onClick={() => setOpenMenu(false)}>
              Contact
            </NavLink>

            {currentUser && (
              <button
                onClick={logOutHandler}
                className="text-left text-red-400 mt-4"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}

      {scrolled && <div className="h-20"></div>}
    </>
  );
}