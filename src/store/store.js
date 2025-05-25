import { create } from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  data: [],
  fetchData: async () => {
    const response = await fetch(
      "https://nakornkitk.github.io/sumline-shop-v2/allproduct.json"
    );
    // const response = await fetch('allproduct.json')
    const data = await response.json();
    console.log("fetch");
    set({ data: data });
  },

  theme: "light",
  setTheme: (theme) => set({ theme: theme === "light" ? "dark" : "light" }),

  searchTerm: "",
  setSearchTerm: (event) => set({ searchTerm: event.target.value }),


  colorTerm: "all",
  setColorTerm: (newvalue) => set({ colorTerm: newvalue }),

  sortTerm: "name",
  setSortTerm: (newvalue) => set({ sortTerm: newvalue }),

  setCartQuantity: (id, newValue) =>
    set((state) => ({
      data: state.data.map((product) =>
        product.id === id ? { ...product, cartquantity: newValue } : product
      ),
    })),
  setWishStatus: (id, oldstatus) =>
    set((state) => ({
      data: state.data.map((product) =>
        product.id === id ? { ...product, wishstatus: !oldstatus } : product
      ),
    })),



  activeCategory: 'all',

  setActiveCategory: (category) =>
    set({
      activeCategory: category,
    })

});

store = persist(store, { name: "Sumline_Shop_Cart_V2" });
let useStore = create(store);

export default useStore;
