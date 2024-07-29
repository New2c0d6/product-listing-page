export interface Product {
    id: number,
    category: string,
    name: string,
    price: number,
    brand: string,
    availabilityStatus: string,
    [key: string]: any,
}