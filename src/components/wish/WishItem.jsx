import { useState } from "react";
import useStore from "@/store/store";
import { Link } from "react-router-dom";

function CartItem() {
  const { data, setCartQuantity, setWishStatus } = useStore();

  const wishQuantity = [];

  data
    .filter((item) => {
      if (item.wishstatus === true) {
        return item;
      }
    })
    .map((item) => {
      return wishQuantity.push(item.id);
    });

  const totalwishQuantity = wishQuantity.reduce(
    (partialSum) => partialSum + 1,
    0
  );

  return (
    <div className="bg-opacity-90 rounded-2xl  w-[100%] ">
      <table className="w-[100%] ">
        <thead>
          <tr className="w-[100%]">
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] w-{5%]"></td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px]  w-[10%] min-w-[100px] hidden md:table-cell"></td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px] w-[40%] text-center">
              Product name
            </td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px] w-[15%] text-center">
              Unit price
            </td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px] w-[15%] text-center">
              Color
            </td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px] w-[15%]"></td>
          </tr>
        </thead>
        {data
          .filter((item) => {
            if (item.wishstatus === true) {
              return item;
            }
          })
          .map((item) => {
            return (
              <tbody key={item.id}>
                <tr className="h-[150px]">
                  <td className="border border-gray-300">
                    <button className="flex w-[100%]">
                      <span
                        className="material-symbols-outlined mx-[auto]  hover:text-orange-600"
                        onClick={() => setWishStatus(item.id, item.wishstatus)}
                      >
                        close
                      </span>
                    </button>
                  </td>
                  <td className="border border-gray-300 px-[10px] py-[15px] hidden md:table-cell ">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <img src={item.image[0]} alt="" />
                    </Link>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <p className="text-[14px]  hover:text-[#C54C37]">
                        {item.name}
                      </p>
                    </Link>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p className="text-[14px] ">{item.price}</p>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p className="text-[14px] ">{item.color}</p>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p
                      className="text-[12px] hover:text-[#C54C37] cursor-pointer"
                      onClick={() =>
                        setCartQuantity(item.id, item.cartquantity + 1)
                      }
                    >
                      Add to Cart
                    </p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        {totalwishQuantity <= 0 && (
          <tfoot>
            <tr className="w-[100%]">
              <td
                colSpan="6"
                className="border border-gray-300 px-[20px] py-[20px] text-[12px]text-center"
              >
                No products added to the wishlist
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

export default CartItem;
