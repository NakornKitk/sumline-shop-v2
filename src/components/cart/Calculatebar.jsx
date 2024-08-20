import { useState } from "react";
import useStore from "@/store/store";
import Popup from "@/components/Popup";

function Calculatebar() {
  const { data } = useStore();
  const allPrice = [];

  data.map((item) => {
    allPrice.push(item.price * item.cartquantity);
  });

  const totalPrice = allPrice.reduce((partialSum, a) => partialSum + a, 0);
  // const allQuantity = []
  // data.map((item) => {
  //   allQuantity.push(item.quantity)
  // })
  // const totalQuantity = allQuantity.reduce((partialSum, a) => partialSum + a, 0);

  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <div className="">
      <p className="text-[16px] text-black font-bold py-[30px]">CART TOTALS</p>
      <table className="w-[100%]">
        <tbody>
          <tr>
            <td className="text-[14px] font-bold text-gray-500 border border-gray-300 w-[35%] px-[10px] py-[20px]">
              Subtotal
            </td>
            <td className="text-[14px] text-gray-500 border border-gray-300 w-[65%] px-[10px] py-[20px]">
              {totalPrice} ฿
            </td>
          </tr>
          <tr>
            <td className="text-[14px] font-bold text-gray-500 border border-gray-300 w-[35%] px-[10px] py-[20px]">
              Shipping
            </td>
            <td className="text-[14px] text-gray-500 border border-gray-300 w-[65%] px-[10px] py-[20px]">
              <form className="font-bold">
                <input
                  type="radio"
                  id="rate1"
                  name="rate"
                  value=""
                  onChange={() => setIsPopupActive(!isPopupActive)}
                />
                <label htmlFor="rate1">Free Shipping</label>
                <br />
                <input
                  type="radio"
                  id="rate2"
                  name="rate"
                  value=""
                  onChange={() => setIsPopupActive(!isPopupActive)}
                />
                <label htmlFor="rate2">Flat rate</label>
                <br />
              </form>
            </td>
          </tr>
          <tr>
            <td className="text-[14px] font-bold text-gray-500 border border-gray-300 w-[35%] px-[10px] py-[20px]">
              Total
            </td>
            <td className="text-[14px] text-gray-500 border border-gray-300 w-[65%] px-[10px] py-[20px]">
              {totalPrice} ฿
            </td>
          </tr>
        </tbody>
      </table>

      {isPopupActive && <Popup setpopup={setIsPopupActive} />}
    </div>
  );
}

export default Calculatebar;
