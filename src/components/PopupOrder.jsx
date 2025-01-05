

function PopupOrder({ popup }) {

  return (
    <div className="">
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 ">
          <div className="bg-[#2C9678] p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-white">Thank you</h2>
            <p className="mb-4 text-white">Your order is successfully placed</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupOrder;
