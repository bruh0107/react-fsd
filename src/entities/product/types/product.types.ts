export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

export interface ProductsType {
    products: Product[]
    getProducts: () => void
}