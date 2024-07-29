import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from '@/types/Product';

export interface ProductResponse {
    products: Product[],
    [key: string]: any,
}

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => 'products',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productsApi