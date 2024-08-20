import { useState } from "react";
import useStore from "@/store/store";
import { Link } from "react-router-dom";
import Popup from "@/components/Popup";

function CartItem() {
  const { data, setCartQuantity } = useStore();

  const cartQuantity = [];

  data.map((item) => {
    cartQuantity.push(item.cartquantity);
  });

  const totalcartQuantity = cartQuantity.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <div className="bg-opacity-90 rounded-2xl  w-[100%] ">
      <table className="w-[100%] ">
        <thead>
          <tr className="">
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-{5%]"></td>
            <td className="border border-gray-300 px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[10%] min-w-[100px] hidden md:table-cell"></td>
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[30%] text-center">
              Product
            </td>
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[10%] text-center">
              Price
            </td>
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[10%] text-center">
              Color
            </td>
            <td className="border border-gray-300 md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[20%] text-center">
              Quantity
            </td>
            <td className="border border-gray-300  md:px-[20px] py-[20px] font-semibold text-[14px] text-gray-500 w-[15%] text-center">
              Subtotal
            </td>
          </tr>
        </thead>
        {data
          .filter((item) => {
            if (item.cartquantity > 0) {
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
                        className="material-symbols-outlined mx-[auto] text-gray-500 hover:text-orange-600"
                        onClick={() => setCartQuantity(item.id, 0)}
                      >
                        close
                      </span>
                    </button>
                  </td>
                  <td className="border border-gray-300 px-[10px]  py-[15px] hidden md:table-cell">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <img src={item.image[0]} alt="" />
                    </Link>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <p className="text-[14px] text-gray-500 hover:text-black">
                        {item.name}
                      </p>
                    </Link>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p className="text-[14px] text-gray-500">{item.price} ฿</p>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p className="text-[14px] text-gray-500">{item.color}</p>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <div className="md:flex justify-center">
                      <p
                        className="text-[14px] text-gray-500 border border-gray-300 md:px-[18px] py-[8px] cursor-pointer "
                        onClick={() =>
                          setCartQuantity(item.id, item.cartquantity - 1)
                        }
                      >
                        -
                      </p>
                      <p className="text-[14px] text-gray-500 border border-gray-300 md:px-[18px] py-[8px] ">
                        {item.cartquantity}
                      </p>
                      <p
                        className="text-[14px] text-gray-500 border border-gray-300 md:px-[18px] py-[8px] cursor-pointer"
                        onClick={() =>
                          setCartQuantity(item.id, item.cartquantity + 1)
                        }
                      >
                        +
                      </p>
                    </div>
                  </td>
                  <td className="border border-gray-300 text-center">
                    <p className="text-[14px] text-gray-500">
                      {item.cartquantity * item.price} ฿
                    </p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        {totalcartQuantity <= 0 && (
          <tfoot>
            <tr className="w-[100%]">
              <td
                colSpan="7"
                className="border border-gray-300 px-[20px] py-[20px] text-[12px] text-gray-500 text-center"
              >
                No products added to the cart
              </td>
            </tr>
          </tfoot>
        )}
        {totalcartQuantity > 0 && (
          <tfoot>
            <tr className="w-[100%]">
              <td
                colSpan="7"
                className="border border-gray-300 px-[20px] py-[15px] text-[12px] text-gray-500 text-center"
              >
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border border-1px text-[14px] p-[8px] mb-[10px] md:mb-[0px] mr-[10px] outline-0"
                ></input>
                <button
                  className="text-white bg-black p-[8px] text-[12px] font-bold uppercase mr-[5px]"
                  onClick={() => setIsPopupActive(!isPopupActive)}
                >
                  Apply coupon
                </button>
                <button
                  className="text-white bg-black p-[8px] text-[12px] font-bold uppercase"
                  onClick={() => setIsPopupActive(!isPopupActive)}
                >
                  update cart
                </button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>

      {isPopupActive && <Popup setpopup={setIsPopupActive} />}
    </div>
  );
}

export default CartItem;
