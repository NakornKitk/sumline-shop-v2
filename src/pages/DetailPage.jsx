import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/detail/ProductDetail";
import { useParams } from "react-router-dom";
import useStore from "@/store/store";

function DetailPage() {
  const { id } = useParams();

  const { data, fetchData} = useStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="mb-auto">
        {data.filter((item) => {
          if (item.id == id) {
            return item
          }}).map((item) => {
            return <ProductDetail key = {item.id}
            image = {item.image}
            description = {item.description}
            id = {item.id}
            price = {item.price}
            name = {item.name}
            category = {item.category}
            color = {item.color}
            />;
          
        })}
      
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
