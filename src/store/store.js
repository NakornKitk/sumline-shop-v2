import {create} from 'zustand'
import {persist} from 'zustand/middleware'


let store = (set) => ({
        data: [],
        fetchData: async () => {
            const response = await fetch('https://nakornkitk.github.io/sumline-shop-v2/allproduct.json')
            // const response = await fetch('allproduct.json')
            const data = await response.json()
            console.log("fetch")
            set({ data: data });
        },
        searchTerm: "",
        setSearchTerm: (event) => set({searchTerm: event.target.value}),
        categoryTerm: "all",
        setCategoryTerm: (event) => set({categoryTerm: event.target.value}),
        colorTerm: "all",
        setColorTerm: (event) => set({colorTerm: event.target.value}),
        sortTerm:"name",
        setSortTerm: (event) => set({sortTerm: event.target.value}),
        setCartQuantity: (id, newValue) => set((state) => ({
            data: state.data.map(product =>
                product.id === id ? { ...product, cartquantity: newValue } : product
              )
        })),
        setWishStatus: (id, oldstatus) => set((state) => ({
            data: state.data.map(product =>
                product.id === id ? { ...product, wishstatus: !oldstatus } : product
              )
        }))
    })



store = persist(store, {name: "Sumline_Shop_Cart_V2"})
let useStore = create(store)

export default useStore;