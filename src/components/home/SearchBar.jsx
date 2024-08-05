import React, { useState } from "react";
import { categories, sortBy, color } from "@/utils/optionList";
import useStore from "@/store/store";

function SearchBar() {
    const { setSearchTerm, setCategoryTerm, setColorTerm, setSortTerm} = useStore();

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-5">
            <div>
                <label
                    htmlFor="categories"
                    className="block mb-2 text-md font-medium text-black"
                >
                    Categories
                </label>
                <select
                    id="categories"
                    className="bg-zinc-100 capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
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
            <div>
                <label
                    htmlFor="color"
                    className="block mb-2 text-md font-medium text-black"
                >
                    Color
                </label>
                <select
                    id="color"
                    className="bg-zinc-100  capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
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
            <div>
                <label
                    htmlFor="sortby"
                    className="block mb-2 text-md font-medium text-black"
                >
                    Sort by
                </label>
                <select
                    id="sortby"
                    className="bg-zinc-100 capitalize border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
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
            <div>
                <label
                    htmlFor="search"
                    className="block mb-2 text-md font-medium text-black"
                >
                    Search
                </label>
                <input
                    id="search"
                    className="bg-zinc-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 "
                    onChange={(event) => setSearchTerm(event)}
                />
            </div>
        </form>
    );
}

export default SearchBar;
