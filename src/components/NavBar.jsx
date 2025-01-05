import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";

function NavBar() {
  const { data, setSearchTerm, setCartQuantity, theme, setTheme } = useStore();
  const cartQuantity = [];
  const allPrice = [];

  data.map((item) => {
    cartQuantity.push(item.cartquantity);
    allPrice.push(item.price * item.cartquantity);
  });

  const totalcartQuantity = cartQuantity.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const totalPrice = allPrice.reduce((partialSum, a) => partialSum + a, 0);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav
      className={`w-full py-[20px] ${
        theme === "light" ? "bg-white text-black" : "bg-[#222222] text-white"
      }`}
    >
      <div className="h-[auto] md:px-[50px] px-[20px] 2xl:px-[175px] sm:flex sm:items-center sm:justify-between sm:mx-auto">
        <div className="text-center py-[20px] sm:my-[0px] ">
          <Link to="/sumline-shop-v2/" className="text-3xl font-extralight ">
            <p className="my-auto">Sumline Shop</p>
          </Link>
        </div>

        <div className="flex">
        <button
          id="theme-toggle"
          type="button"
          onClick={() => setTheme(theme)}
          className="mr-[12px] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
        >
          {theme === "light" ? (
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          )}
        </button>
          <div className="flex justify-end py-[20px] sm:py-[0px]">
            <div
              className=" mr-[20px] py-[auto] cursor-pointer "
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <div className="relative flex mt-[12px]">
                <span className="absolute top-[-22px] ml-[0px] bg-[#E6E6E6] text-[#969696] text-sm w-5 h-5 rounded-full flex justify-center items-center">
                  {totalcartQuantity}
                </span>
                <span
                  className={`material-symbols-outlined text-[20px] flex items-center ${
                    theme === "light" ? "" : "hover:text-white"
                  }`}
                >
                  shopping_bag
                </span>
                <p
                  className={`text-[#969696] text-[12px] items-center my-auto ${
                    theme === "light" ? "hover:text-black" : "hover:text-white"
                  }`}
                >
                  CART
                </p>
              </div>
            </div>

            <span
              className="material-symbols-outlined flex mr-[20px] text-[20px] mt-[12px] cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              search
            </span>

            <span
              className="material-symbols-outlined text-[20px] flex items-center pt-[2px] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              menu
            </span>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black opacity-60 flex items-center justify-center z-50">
          <span
            className="absolute right-[20px] top-[40px] material-symbols-outlined text-[50px] text-white cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            close
          </span>
          <form className="flex w-[90%] ">
            <input
              id="search"
              className="bg-transparent border-b-2 border-white text-[#FFFFFF] py-[10px] w-full  outline-0 "
              onChange={(event) => setSearchTerm(event)}
              placeholder="SEARCH"
            />
          </form>
        </div>
      )}

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black opacity-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></div>

          <div className="fixed right-[0px] top-[0px] h-[100%] bg-white w-[280px] z-50">
            <span
              className="material-symbols-outlined text-[#222222] text-center block cursor-pointer mt-[50px] mb-[110px] text-[24px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              close
            </span>
            <Link to="/sumline-shop-v2/">
              <p className=" text-[11px] mb-[20px] text-center text-gray-500 hover:text-black cursor-pointer">
                HOME
              </p>
            </Link>
            <Link to="/sumline-shop-v2/login">
              <p className=" text-[11px] mb-[20px] text-center text-gray-500 hover:text-black cursor-pointer">
                MY ACCOUNT
              </p>
            </Link>
            <Link to="/sumline-shop-v2/cart">
              <p className=" text-[11px] mb-[20px] text-center text-gray-500 hover:text-black cursor-pointer">
                CART
              </p>
            </Link>
            <Link to="/sumline-shop-v2/wish">
              <p className=" text-[11px] mb-[20px] text-center text-gray-500 hover:text-black cursor-pointer">
                WISHLIST
              </p>
            </Link>
          </div>
        </>
      )}

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black opacity-50"
            onClick={() => setIsCartOpen(!isCartOpen)}
          ></div>

          <div className="fixed right-[0px] top-[0px] h-[100%] w-[100%] bg-white w-[350px] sm:w-[380px] z-50 px-[25px] overflow-auto no-scrollbar">
            <span className="material-symbols-outlined text-[#222222] text-center block cursor-pointer mt-[50px] mb-[40px] text-[70px]">
              shopping_bag
            </span>

            {data
              .filter((item) => {
                if (item.cartquantity > 0) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-between w-[100%] mb-[30px]"
                  >
                    <div className="flex">
                      <img
                        src={item.image[0]}
                        alt=""
                        className="w-[70px] mr-[10px]"
                      ></img>
                      <div className="">
                        <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                          <p className="text-[14px] uppercase">{item.name}</p>
                        </Link>
                        <p className="text-[14px] capitalize text-gray-500">
                          color: {item.color}
                        </p>
                        <div className="flex">
                          <p className="text-[13px] flex items-center">
                            {item.cartquantity}
                          </p>
                          <p className="text-[13px] flex items-center">
                            &nbsp;x&nbsp;
                          </p>
                          <p className="text-[14px] flex items-center">
                            {item.price} ฿
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span
                        className="material-symbols-outlined text-[#222222] cursor-pointer h-[100%] text-[15px] flex justify-center"
                        onClick={() => {
                          setCartQuantity(item.id, 0);
                        }}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                );
              })}

            <div className={totalcartQuantity > 0 ? "" : "hidden"}>
              <div>
                <p className=" text-[14px] font-bold text-[#222222]">TOTAL:</p>
                <p className=" text-[24px] font-bold text-[#222222]">
                  {totalPrice} ฿
                </p>
              </div>

              <div className="flex mt-[10px] mb-[40px]">
                <Link to="/sumline-shop-v2/cart">
                  <div className="bg-[#222222] rounded-[20px] mr-[10px] cursor-pointer w-[120px] h-[35px]">
                    <p className=" text-[13px] text-white cursor-pointer h-[100%] flex items-center justify-center ">
                      VIEW CART
                    </p>
                  </div>
                </Link>
                <div className="bg-[#222222] rounded-[20px] cursor-pointer w-[120px] h-[35px]">
                  <span
                    className="material-symbols-outlined text-white cursor-pointer h-[100%] text-[24px] flex items-center justify-center"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                  >
                    close
                  </span>
                </div>
              </div>
            </div>

            <div className={totalcartQuantity > 0 ? "hidden" : ""}>
              <p className="uppercase text-center text-[12px] text-[#222222]">
                No product in the cart.
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
