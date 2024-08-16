import {useEffect} from "react";
import ProductCard from "@/components/home/ProductCard";
import useStore from "@/store/store";

function RelateProductList() {
  const { data } = useStore();


  return (
    <div className="flex justify-center gap-[20px] pt-[10px]  pb-[100px] bg-white">
      {data
        .filter((item) => {
          if (item.id <= 5) {
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
  );
}

export default RelateProductList;
