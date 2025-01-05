import { useState, useEffect } from "react";
import RelateProductCard from "@/components/detail/RelateProductCard";
import useStore from "@/store/store";

function RelateProductList() {
  const { data, theme } = useStore();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 6 - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 6 - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <p className="uppercase font-bold text-[35px] py-[20px]">
          related products
        </p>
        <div className="flex justify-between py-[20px]">
          <span
            className="material-symbols-outlined text-[40px] cursor-pointer hover:text-[#C54C37] my-[auto] transform -translate-y-1/2"
            onClick={prevSlide}
          >
            chevron_left
          </span>
          <span
            className="material-symbols-outlined text-[40px] cursor-pointer hover:text-[#C54C37] my-[auto] transform -translate-y-1/2"
            onClick={nextSlide}
          >
            chevron_right
          </span>
        </div>
      </div>

      <div
        className="flex justify-between gap-x-[55px] pt-[10px] pb-[100px] transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 390}px)` }}
      >
        {data
          .filter((item) => {
            if (item.id <= 8) {
              return item;
            }
          })
          .map((item) => {
            return (
              <RelateProductCard
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
