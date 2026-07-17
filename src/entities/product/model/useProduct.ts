import {create} from "zustand/react";
import type {ProductsType} from "@/entities/product/types/product.types.ts";

export const useProduct = create<ProductsType>((set) => ({
    products: [],

    getProducts: async () => {
        const response = await fetch('https://fakestoreapi.com/products')

        const data = await response.json()

        set({
            products: data
        })
    }
}))