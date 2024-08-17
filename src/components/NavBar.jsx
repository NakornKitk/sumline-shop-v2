import React, {useState} from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";


function NavBar() {
  const { data, setSearchTerm } = useStore();
  const cartQuantity = [];

  data.map((item) => {
    cartQuantity.push(item.cartquantity);
  });

  const totalcartQuantity = cartQuantity.reduce(
    (partialSum, a) => partialSum + a,
    0
  );



  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  

  return (
    <nav className="bg-white w-full">
      <div className="h-[110px] 2xl:px-[175px] md:px-[50px] flex flex-wrap items-center justify-between mx-auto">
        <div className="flex ">
          <Link
          to="/sumline-shop-v2/"
          className="text-3xl font-extralight text-black "
          >
            <p className="my-auto mr-[50px]">Sumline Shop</p>
          </Link>
          <p className="my-auto px-[16px] font-semibold text-[14px] text-[#969696] hover:text-black">Home</p>
          <p className="my-auto px-[16px] font-semibold text-[14px] text-[#969696] hover:text-black">Shop</p>
          <p className="my-auto px-[16px] font-semibold text-[14px] text-[#969696] hover:text-black">Blog</p>
          <p className="my-auto px-[16px] font-semibold text-[14px] text-[#969696] hover:text-black">Contact</p>
        </div>


        <div className="flex">
          <div className="hover:text-black mr-[20px] py-[auto]">
            <Link to="/sumline-shop-v2/cart" className="text-white">
              
              <div className="relative flex">
                <span className="absolute top-[-20px] ml-[2px] bg-[#E6E6E6] text-[#969696] text-sm w-5 h-5 rounded-full flex justify-center items-center">
                  {totalcartQuantity}
                </span>
                <span className="material-symbols-outlined text-black text-[20px] flex items-center">shopping_bag</span>
                <p className="text-[#969696] text-[12px] hover:text-black items-center my-auto ">CART</p>
              </div>
            </Link>
          </div>
          
          
          
          <span className="material-symbols-outlined flex mr-[20px] text-[20px] pt-[2px] cursor-pointer" onClick={() => toggleSearch()}>
              search
          </span>
      


          <Link to="/sumline-shop-v2/wish" className="text-black">
            <span className="material-symbols-outlined text-[20px] flex items-center pt-[2px]">menu</span>
          </Link>

        </div>
      </div>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black opacity-60 flex items-center justify-center z-50">
            <span className="absolute right-[20px] top-[40px] material-symbols-outlined text-[50px] text-white cursor-pointer" onClick={toggleSearch}>close</span>
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
    </nav>
  );
}

export default NavBar;
