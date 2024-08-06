import {useEffect} from "react";
import ProductCard from "@/components/home/ProductCard";
import useStore from "@/store/store";

function ProductList() {
  const { data, fetchData, searchTerm, categoryTerm, colorTerm, sortTerm } = useStore();

  useEffect(() => {
    fetchData();
  }, []);

  function dynamicSort(property) {
    return function(a,b) {
      switch (property) {
        case 'lowest price':
            return a.price - b.price
        case 'highest price':
            return b.price - a.price
        case 'name':
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    }}

}


  return (
    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[60px] pb-10 bg-white">
      {data.sort(dynamicSort(sortTerm))
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
          }
        })
        .filter((item) => {
          if (categoryTerm == "all") {
            return item;
          } else if (item.category == categoryTerm) {
            return item;
          }
        })
        .filter((item) => {
          if (colorTerm == "all") {
            return item;
          } else if (item.color.toLowerCase() == colorTerm) {
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
            />
          );
        })}
    </div>
  );
}

export default ProductList;
