import React, { useState } from "react";
import { categories, sortBy, color } from "@/utils/optionList";
import useStore from "@/store/store";

function SearchBar() {
    const { setSearchTerm, setCategoryTerm, setColorTerm, setSortTerm} = useStore();

    return (
        <form className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px] bg-white">
            <div className="">
                <label
                    htmlFor="categories"
                    className="lg:max-w-[300px] mx-[auto] block mb-2 text-md font-medium text-black"
                >
                    Categories
                </label>
                <select
                    id="categories"
                    className="lg:max-w-[300px] mx-[auto] bg-zinc-100 capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
                    onChange={(event) => setCategoryTerm(event)}
                >
                    {categories.map((item, index) => {
                        return (
                            <option
                                className="capitalize"
                                key={`catagories-key-${index}`}
                                value={item}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="">
                <label
                    htmlFor="color"
                    className="lg:max-w-[300px] mx-[auto] block mb-2 text-md font-medium text-black"
                >
                    Color
                </label>
                <select
                    id="color"
                    className="lg:max-w-[300px] mx-[auto] bg-zinc-100  capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
                    onChange={(event) => setColorTerm(event)}
                >
                    {color.map((item, index) => {
                        return (
                            <option
                                className="capitalize"
                                key={`color-key-${index}`}
                                value={item}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="lg:justify-center">
                <label
                    htmlFor="sortby"
                    className="lg:max-w-[300px] mx-[auto] block mb-2 text-md font-medium text-black"
                >
                    Sort by
                </label>
                <select
                    id="sortby"
                    className="lg:max-w-[300px] mx-[auto] bg-zinc-100 capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
                    onChange={(event) => setSortTerm(event)}
                >
                    {sortBy.map((item, index) => {
                        return (
                            <option
                                className="capitalize"
                                key={`sortby-key-${index}`}
                                value={item}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="lg:justify-center">
                <label
                    htmlFor="search"
                    className="lg:max-w-[300px] mx-[auto] block mb-2 text-md font-medium text-black"
                >
                    Search
                </label>
                <input
                    id="search"
                    className="lg:max-w-[300px] mx-[auto] bg-zinc-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
                    onChange={(event) => setSearchTerm(event)}
                />
            </div>
        </form>
    );
}

export default SearchBar;
