import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductList from "@/components/home/ProductList";
import SearchBar from "@/components/home/SearchBar";
import ImageSlider from "@/components/home/ImageSlider";

function HomePage() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavBar />
      <ImageSlider />
      

      <div className="2xl:min-px-[175px] md:min-px-[50px] flex justify-between w-[70%] mx-auto py-[80px]">
        <div className="w-[30%]">
          <div className="relative bg-[#F1F1F1] w-[70px] h-[70px] rounded-full mx-auto ">
            <a href={"https://shopee.co.th/sumline.shop"}>
              <img
                className="w-[30px] absolute right-[27.5%] top-[25%] hover:opacity-75"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/shopee-icon.png"
                alt=""
              />
            </a>
          </div>
          <a href={"https://shopee.co.th/sumline.shop"}>
            <p className="text-center text-[#383838] uppercase font-semibold py-[12px] hover:text-black">
              Shopee
            </p>
          </a>
          <p className="text-center text-sm text-[#909090]">
            Order now on shopee
          </p>
        </div>
        <div className="w-[30%]">
          <div className="relative bg-[#F1F1F1] w-[70px] h-[70px] rounded-full mx-auto">
            <a href={"https://www.instagram.com/sumline.shop"}>
              <img
                className="w-[30px] absolute right-[27.5%] top-[30%] hover:opacity-75"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/ig-instagram-icon.png"
                alt=""
              />
            </a>
          </div>
          <a href={"https://www.instagram.com/sumline.shop"}>
            <p className="text-center text-[#383838] uppercase font-semibold py-[12px] hover:text-black">
              Instagram
            </p>
          </a>
          <p className="text-center text-sm text-[#909090]">View our product</p>
        </div>
        <div className="w-[30%]">
          <div className="relative bg-[#F1F1F1] w-[70px] h-[70px] rounded-full mx-auto">
            <a href={"https://line.me/R/ti/p/@719ojtgk"}>
              <img
                className="w-[30px] absolute right-[27.5%] top-[30%] hover:opacity-75"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/LINE_Brand_icon.png"
                alt=""
              />
            </a>
          </div>
          <a href={"https://line.me/R/ti/p/@719ojtgk"}>
            <p className="text-center text-[#383838] uppercase font-semibold py-[12px] hover:text-black">
              Line
            </p>
          </a>
          <p className="text-center text-sm text-[#909090]">Contact us</p>
        </div>
      </div>

      <div className="2xl:px-[175px] md:px-[50px] flex justify-between mb-[40px]">
        <div className="w-[49.5%]  h-[250px] bg-black overflow-hidden relative">
            <a href="https://www.instagram.com/p/CtwSg4MPp-6/">
              <p className="border border-white-[2px] w-[90%] h-[80%] top-[10%] right-[5%] absolute"></p>
              <img
                className=" w-[100%] hover:opacity-60 transform transition duration-3"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/post1.png"
                alt=""
              />
            </a>
        </div>

        <div className="w-[49.5%] h-[250px] bg-black overflow-hidden relative">
          <a href="https://www.instagram.com/p/CtbgsVSP25L/">
              <p className="border border-white-[2px] w-[90%] h-[80%] top-[10%] right-[5%] absolute"></p>
              <img
                className=" w-[100%] hover:opacity-60 transform transition duration-3"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/post2.png"
                alt=""
              />
          </a>
        </div>
      </div>

      <div className="p-4 mb-auto bg-white 2xl:px-[175px] md:px-[50px]">
        <SearchBar />
        <ProductList />
      </div>


      <div className="2xl:px-[175px] md:px-[50px]">
        <div className="border-t-[1px] border-[#E6E6E6] pt-[70px] pb-[30px]">
          <p className="text-center text-[#222222] text-3xl font-bold">
            INSTAGRAM
          </p>
          <p className="text-center text-[12px] text-[#909090] pt-[10px] uppercase">
            visit sumline shop on instagram
          </p>
        </div>
        <div className="flex justify-between pb-[70px]">
          <div className="bg-black w-[220px] h-[220px] overflow-hidden relative">
            <a href="https://www.instagram.com/p/CscoP28SFd2/?img_index=2">
              <img src="https://nakornkitk.github.io/sumline-shop-v2/images/instagram-white-icon.svg" className="w-[30px] bg-transparent absolute top-[95px] left-[95px]"></img>
              <img
                className="w-[220px] h-[220px] hover:scale-110 hover:opacity-50 transform transition duration-3"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/black.jpg"
                alt="instagrampic1"
              />
            </a>
          </div>
          <div className="bg-black w-[220px] h-[220px] overflow-hidden relative">
            <a href="https://www.instagram.com/p/Csf_srCSIgx/?img_index=2">
              <img src="https://nakornkitk.github.io/sumline-shop-v2/images/instagram-white-icon.svg" className="w-[30px] bg-transparent absolute top-[95px] left-[95px]"></img>
              <img
                className="w-[220px] h-[220px] hover:scale-110 hover:opacity-50 transform transition duration-3"
                src="https://nakornkitk.github.io/sumline-shop-v2/images/blue.jpg"
                alt="instagrampic2"
              />
            </a>
          </div>
          <div className="bg-black w-[220px] h-[220px] overflow-hidden relative">
            <a href="https://www.instagram.com/p/Csd89YSyq3V/?img_index=2">
                <img src="https://nakornkitk.github.io/sumline-shop-v2/images/instagram-white-icon.svg" className="w-[30px] bg-transparent absolute top-[95px] left-[95px]"></img>
                <img
                  className="w-[220px] h-[220px] hover:scale-110 hover:opacity-50 transform transition duration-3"
                  src="https://nakornkitk.github.io/sumline-shop-v2/images/green.jpg"
                  alt="instagrampic3"
                />
            </a>
          </div>
          <div className="bg-black w-[220px] h-[220px] overflow-hidden relative">
            <a href="https://www.instagram.com/p/CscofchS9Cs/?img_index=2">
                <img src="https://nakornkitk.github.io/sumline-shop-v2/images/instagram-white-icon.svg" className="w-[30px] bg-transparent absolute top-[95px] left-[95px]"></img>
                <img
                  className="w-[220px] h-[220px] hover:scale-110 hover:opacity-50 transform transition duration-3"
                  src="https://nakornkitk.github.io/sumline-shop-v2/images/red.jpg"
                  alt="instagrampic4"
                />
            </a>
          </div>
          <div className="bg-black w-[220px] h-[220px] overflow-hidden relative">
            <a href="https://www.instagram.com/p/CscoXLYyAhQ/?img_index=2">
                <img src="https://nakornkitk.github.io/sumline-shop-v2/images/instagram-white-icon.svg" className="w-[30px] bg-transparent absolute top-[95px] left-[95px]"></img>
                <img
                  className="w-[220px] h-[220px] hover:scale-110 hover:opacity-50 transform transition duration-3"
                  src="https://nakornkitk.github.io/sumline-shop-v2/images/white.jpg"
                  alt="instagrampic5"
                />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
