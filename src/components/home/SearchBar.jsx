import { useState } from "react";
// import { categories, sortBy, color } from "@/utils/optionList";
import useStore from "@/store/store";

function SearchBar() {
  const {
    setCategoryTerm,
    setColorTerm,
    setSortTerm,
    sortTerm,
    colorTerm,
    isCategoryAllActive,
    setIsCategoryAllActive,
    isCategorySingleActive,
    setIsCategorySingleActive,
    isCategoryDoubleActive,
    setIsCategoryDoubleActive,
    isCategoryMiniActive,
    setIsCategoryMiniActive,
    isCategoryYarnActive,
    setIsCategoryYarnActive,
  } = useStore();

  const handleToggleCategoryAll = () => {
    setCategoryTerm("all");
    setIsCategoryAllActive();
  };

  const handleToggleCategoryDouble = () => {
    setCategoryTerm("Giant Yarn Bag (รุ่นสายคู่)");
    setIsCategoryDoubleActive();
  };

  const handleToggleCategorySingle = () => {
    setCategoryTerm("Giant Yarn Bag (รุ่นสายถัก)");
    setIsCategorySingleActive();
  };

  const handleToggleCategoryMini = () => {
    setCategoryTerm("Mini Giant Yarn Bag");
    setIsCategoryMiniActive();
  };

  const handleToggleCategoryGiant = () => {
    setCategoryTerm("Giant Yarn");
    setIsCategoryYarnActive();
  };

  const [isSortActive, setIsSortActive] = useState(false);

  const handleToggleSort = () => {
    setIsColorActive(false);
    setIsSortActive(!isSortActive);
  };

  const handleSortbyName = () => {
    setSortTerm("name");
  };

  const handleSortbyHigh = () => {
    setSortTerm("highest price");
  };

  const handleSortbyLow = () => {
    setSortTerm("lowest price");
  };

  const [isColorActive, setIsColorActive] = useState(false);

  const handleToggleColor = () => {
    setIsColorActive(!isColorActive);
    setIsSortActive(false);
  };

  const handleColorTerm = (value) => {
    setColorTerm(value);
  };

  return (
    <div>
      <div className="lg:flex justify-between items-between pt-[25px]">
        <div className="lg:flex">
          <div className="flex">
            <p
              className={`text-[14px] mr-[40px] hover:text-black hover:border-b-2 border-black cursor-pointer ${
                isCategoryAllActive
                  ? "text-[#444444] border-b-2 border-black"
                  : "text-[#c6c6c6]"
              }`}
              onClick={() => handleToggleCategoryAll()}
            >
              All Category
            </p>
            <p
              className={`text-[14px] mr-[40px] hover:text-black hover:border-b-2 border-black cursor-pointer ${
                isCategoryDoubleActive
                  ? "text-[#444444] border-b-2 border-black"
                  : "text-[#c6c6c6]"
              }`}
              onClick={() => handleToggleCategoryDouble()}
            >
              Giant Yarn Bag (รุ่นสายคู่)
            </p>
            <p
              className={`text-[14px] mr-[40px] hover:text-black hover:border-b-2 border-black cursor-pointer ${
                isCategorySingleActive
                  ? "text-[#444444] border-b-2 border-black"
                  : "text-[#c6c6c6]"
              }`}
              onClick={() => handleToggleCategorySingle()}
            >
              Giant Yarn Bag (รุ่นสายถัก)
            </p>
          </div>
          <div className="flex mt-[10px] lg:mt-[0px]">
            <p
              className={`text-[14px] mr-[40px] hover:text-black hover:border-b-2 border-black cursor-pointer ${
                isCategoryMiniActive
                  ? "text-[#444444] border-b-2 border-black"
                  : "text-[#c6c6c6]"
              }`}
              onClick={() => handleToggleCategoryMini()}
            >
              Mini Giant Yan Bag
            </p>
            <p
              className={`text-[14px] hover:text-black hover:border-b-2 border-black cursor-pointer ${
                isCategoryYarnActive
                  ? "text-[#444444] border-b-2 border-black"
                  : "text-[#c6c6c6]"
              }`}
              onClick={() => handleToggleCategoryGiant()}
            >
              Giant Yarn
            </p>
          </div>
        </div>
        <div className="flex mt-[20px] lg:mt-[0px]">
          <div
            className="relative flex bg-[#222222] rounded-[20px] mr-[10px] cursor-pointer"
            onClick={() => handleToggleSort()}
          >
            <p className="text-[12px] text-white px-[20px] py-[10px] m-[auto] uppercase">
              SORT BY {sortTerm}
            </p>
            {isSortActive && (
              <div className="absolute top-[40px] lg:right-[0px] fixed shadow-2xl z-50 w-[250px] bg-white p-[10px]">
                <p
                  className="text-[14px] text-gray-600 py-[2px] cursor-pointer"
                  onClick={() => handleSortbyName()}
                >
                  Sort by Name (Default)
                </p>
                <p
                  className="text-[14px] text-gray-600 py-[2px] cursor-pointer"
                  onClick={() => handleSortbyLow()}
                >
                  Sort by price: low to high
                </p>
                <p
                  className="text-[14px] text-gray-600 py-[2px] cursor-pointer"
                  onClick={() => handleSortbyHigh()}
                >
                  Sort by price: high to low
                </p>
              </div>
            )}
          </div>
          <div
            className="relative flex bg-[#222222] rounded-[20px] cursor-pointer "
            onClick={() => handleToggleColor()}
          >
            <p className="text-[12px] text-white px-[20px] py-[10px] m-[auto] uppercase">
              COLOR: {colorTerm}
            </p>
            {isColorActive && (
              <div className="absolute top-[40px] lg:right-[0px] fixed shadow-2xl z-50 w-[120px] bg-white p-[10px]">
                <div className="flex mb-[5px]">
                  <div
                    className="bg-rose-950 w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("all")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("all")}
                  >
                    all
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#B7A58D] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("beige")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("beige")}
                  >
                    beige
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-black w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("black")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("black")}
                  >
                    black
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#798BA4] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("blue")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("blue")}
                  >
                    blue
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#3F343A] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("dark gray")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("dark gray")}
                  >
                    dark gray
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#A46A68] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("dark pink")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("dark pink")}
                  >
                    dark pink
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#9C9696] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("gray")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("gray")}
                  >
                    gray
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#647360] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("green")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("green")}
                  >
                    green
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#069DB3] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("light blue")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("light blue")}
                  >
                    light blue
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#B2C1B0] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("light green")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("light green")}
                  >
                    light green
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#CF8890] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("pink")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("pink")}
                  >
                    pink
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#E6DED1] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("white")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("white")}
                  >
                    white
                  </p>
                </div>
                <div className="flex mb-[5px]">
                  <div
                    className="bg-[#E86F2B] w-[12px] h-[12px] my-[auto] rounded-full mr-[10px]"
                    onClick={() => handleColorTerm("pre order")}
                  ></div>
                  <p
                    className="text-[12px] text-gray-400 hover:text-black cursor-pointer uppercase"
                    onClick={() => handleColorTerm("pre order")}
                  >
                    pre order
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
