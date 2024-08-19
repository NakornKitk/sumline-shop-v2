import {useState, useEffect} from "react";
import ProductCard from "@/components/home/ProductCard";
import useStore from "@/store/store";

function RelateProductList() {
  const { data } = useStore();
  
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 5 - 1 ? 0 : prevIndex + 1
    );
};

const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? 5 - 1 : prevIndex - 1
    );
};



  return (
    <>
      <div className="flex justify-between">
        <p className="uppercase font-bold text-[35px] py-[20px] text-[#343434]">related products</p>
        <div className="flex justify-between py-[20px]">
            <span className="material-symbols-outlined text-[40px] cursor-pointer text-gray-500 hover:text-black my-[auto] transform -translate-y-1/2" onClick={prevSlide}>chevron_left</span>
            <span className="material-symbols-outlined text-[40px] cursor-pointer text-gray-500 hover:text-black my-[auto] transform -translate-y-1/2" onClick={nextSlide}>chevron_right</span>
        </div>
      </div>

      <div className="flex justify-between gap-x-[45px] pt-[10px] pb-[100px] bg-white transition-transform duration-500"  style={{ transform: `translateX(-${currentIndex * 305}px)` }}>
      {data
        .filter((item) => {
          if (item.id <= 8) {
            return item;
          }
        })
        .map((item) => {
          return (
            <ProductCard
              key={item.id}
              image={item.image}
              id={item.id}
              price={item.price}
              name={item.name}
              color={item.color}
              category={item.category}
              wishstatus={item.wishstatus}
            />
          );
        })}
    </div>
    
    </>
    
  );
}

export default RelateProductList;
