function Popup({ popup, setpopup }) {
  const togglePopup = () => {
    setpopup(!popup);
  };

  return (
    <div className="">
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 ">
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Sorry :(</h2>
            <p className="mb-4">This function is not available</p>
            <button
              className="px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-700"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
