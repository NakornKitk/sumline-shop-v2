import useStore from "@/store/store";
import { Link } from 'react-router-dom'

function CartItem() {
  const { data, setWishStatus } = useStore();

  return (
    <div className=" bg-zinc-200 bg-opacity-90 rounded-2xl px-[10px] min-w-[100%] ">
      <div className="flow-root">
        <ul
            role="list"
            className="divide-y divide-black"
        >
        {data
        .filter((item) => {
          if (item.wishstatus === true) {
            return item;
          }
        })
        .map((item) => {
          return (
              <li className="py-3" key={item.id}>
                <div className="flex items-center">
                  <div className="w-[100px] h-[100px]">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <img src={item.image[0]} alt=""/>
                    </Link>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <Link to={`/sumline-shop-v2/detail/${item.id}`}>
                      <p className="font-medium text-gray-900 hover:text-orange-600" >{item.name}</p>
                      <p className="text-gray-500">
                        Color: {item.color}
                      </p>
                    </Link>
                  </div>

                <div>
                  <button>
                    <span className="material-symbols-outlined" onClick={()=>setWishStatus(item.id,item.wishstatus)}>close</span>
                  </button>
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
