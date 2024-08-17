import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductList from "@/components/home/ProductList";
import SearchBar from "@/components/home/SearchBar";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="h-[460px] py-[20px] flex bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/bg.jpg')] bg-cover bg-fixed ">
        <div className="w-[50%] pl-[7%] m-auto">
          <p className="text-white text-2xl md:text-4xl font-bold">
            Looking for your favorite Yarn bag?
          </p>
          <p className="text-white text-1xl md:text-3xl">
            Order it at sumline shop...
          </p>
          <div className="pr-[10px] pt-[10px] flex">
            <a
              href={"https://shopee.co.th/sumline.shop"}
              className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
            >
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/shopee-icon.png"
                alt=""
              />
            </a>
            <a
              href={"https://www.instagram.com/sumline.shop"}
              className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
            >
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/ig-instagram-icon.png"
                alt=""
              />
            </a>
            <a
              href={"https://line.me/R/ti/p/@719ojtgk"}
              className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
            >
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/LINE_Brand_icon.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="pt-[20px] md:pt-[0px] min-w-[50%] m-auto">
          <img
            src="https://nakornkitk.github.io/sumline-shop-v2/images/logo.png"
            alt=""
            className="h-40 md:h-60 mx-auto rounded-full hover:scale-110 transform transition duration-2"
          />
        </div>
      </div>

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
            </p>{" "}
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
        <div className="w-[49.5%] bg-black">
          <img
            className="bg-red-200 w-[100%] h-[200px] hover:opacity-75"
            src=""
          ></img>
        </div>
        <div className="w-[49.5%] bg-black">
          <img
            className="bg-red-200 w-[100%] h-[200px] hover:opacity-75"
            src=""
          ></img>
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
          <div className="bg-black w-[225px] h-[200px] overflow-hidden">
            <img
              className=" bg-red-200 w-[225px] h-[200px] hover:scale-110 hover:opacity-75 transform transition duration-2"
              src=""
              alt="instagrampic1"
            />
          </div>
          <div className="bg-black w-[225px] h-[200px] overflow-hidden">
            <img
              className=" bg-red-200 w-[225px] h-[200px] hover:scale-110 hover:opacity-75 transform transition duration-2"
              src=""
              alt="instagrampic1"
            />
          </div>
          <div className="bg-black w-[225px] h-[200px] overflow-hidden">
            <img
              className=" bg-red-200 w-[225px] h-[200px] hover:scale-110 hover:opacity-75 transform transition duration-2"
              src=""
              alt="instagrampic1"
            />
          </div>
          <div className="bg-black w-[225px] h-[200px] overflow-hidden">
            <img
              className=" bg-red-200 w-[225px] h-[200px] hover:scale-110 hover:opacity-75 transform transition duration-2"
              src=""
              alt="instagrampic1"
            />
          </div>
          <div className="bg-black w-[225px] h-[200px] overflow-hidden">
            <img
              className=" bg-red-200 w-[225px] h-[200px] hover:scale-110 hover:opacity-75 transform transition duration-2"
              src=""
              alt="instagrampic1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
