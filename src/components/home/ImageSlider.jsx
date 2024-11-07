import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-[47%] w-[100%] z-[5]">
        <div className="flex justify-between">
          <span
            className="material-symbols-outlined text-[40px] cursor-pointer text-black hover:text-white"
            onClick={prevSlide}
          >
            chevron_left
          </span>
          <span
            className="material-symbols-outlined text-[40px] cursor-pointer text-black hover:text-white"
            onClick={nextSlide}
          >
            chevron_right
          </span>
        </div>
      </div>

      <div
        className="flex flex-row overflow-auto w-[200%] transition-transform duration-500 "
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        <div className=" h-[460px] bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/bg1.jpg')] bg-cover bg-center w-[100%]">
          <div className="h-[100%] py-[20px] flex items-start pl-[50px] md:pl-[175px]">
            <div className="my-auto md:w-[40%]">
              <p className="text-black text-3xl md:text-4xl font-light">
                Looking for your favorite Yarn bag?
              </p>
              <p className="text-[#BB6154] text-1xl font-light md:text-2xl">
                Order it at sumline shop...
              </p>
              <div className="mt-[40px] py-[10px] px-[30px] flex bg-[#222222] w-[170px] md:w-[310px] items-center rounded-full">
                <p className="text-white text-[20px] font-light w-[100%]">
                  Order now{" "}
                </p>
                <div className="gap-x-[10px] hidden md:flex">
                  <a
                    href={"https://shopee.co.th/sumline.shop"}
                    className="w-[35px] hover:scale-110 transform transition duration-2"
                  >
                    <img
                      src="https://nakornkitk.github.io/sumline-shop-v2/images/shopee-icon.png"
                      alt=""
                    />
                  </a>
                  <a
                    href={"https://www.instagram.com/sumline.shop"}
                    className="w-[35px] pt-[5px] hover:scale-110 transform transition duration-2"
                  >
                    <img
                      src="https://nakornkitk.github.io/sumline-shop-v2/images/ig-instagram-icon.png"
                      alt=""
                    />
                  </a>
                  <a
                    href={"https://line.me/R/ti/p/@719ojtgk"}
                    className="w-[35px] pt-[5px] hover:scale-110 transform transition duration-2"
                  >
                    <img
                      src="https://nakornkitk.github.io/sumline-shop-v2/images/LINE_Brand_icon.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[460px] bg-[#418B8A] bg-cover bg-center w-[100%]">
          <div className="h-[100%] py-[20px] flex px-[10px] md:px-[50px] 2xl:px-[175px]">
            <div className=" w-[40%] mx-auto ">
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/bg2.jpg"
                alt=""
                className="h-[440px] mx-auto"
              />
            </div>
            <div className="w-[60%] m-auto">
              <p className="text-white text-2xl md:text-4xl font-light">
                Our new product is coming soon...
              </p>
              <p className="text-[#F0CD90] text-1xl md:text-2xl font-light">
                dont forget to subscribe to get the latest new.
              </p>
              <div className="pt-[10px] flex">
                <a
                  href={"https://shopee.co.th/sumline.shop"}
                  className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
