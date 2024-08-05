import useStore from "@/store/store";
import { Link } from 'react-router-dom'

function CartItem() {
  const { cartItems } = useStore();

  return (
    <div className=" bg-white bg-opacity-90 rounded-2xl px-[10px] min-w-[70%]">
      <div className="flow-root">
        <ul
            role="list"
            className="divide-y divide-black"
        >
        {cartItems
        .filter((item) => {
          if (item.quantity !== 0) {
            return item;
          }
        })
        .map((item) => {
          return (
              <li className="py-3" key={item.id}>
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ms-4">
                    <Link to={`/detail/${item.id}`}>
                    <p className="font-medium text-gray-900 hover:text-orange-600" >{item.name}</p>
                    <p className="text-gray-500">
                      Color: {item.color}
                    </p>
                    <p className="font-medium text-gray-900">
                      Quantity: {item.quantity}
                    </p>
                    </Link>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {item.price*item.quantity} ฿
                  </div>
              
                </div>
              </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}

export default CartItem;
