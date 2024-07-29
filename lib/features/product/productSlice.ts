import { Product } from '@/types/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '@/lib/hooks';

export interface Filters {
    category: string[],
    price: number[],
    brands: string[],
    availability: string[],
}

export interface ProductState {
    filters: Filters,
    products: Product[],
}

export interface Action {
    value: number[] | string,
    type: 'category' | 'price' | 'brands' | 'availability',
}

const initialState: ProductState = {

    filters: {
        category: [],
        price: [0, 1500],
        brands: [],
        availability: [],
    },
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFilter: (state: ProductState, action : PayloadAction<Action>) => {
            // Magic
            // Immer will handle the mutation
            if(action.payload.type == 'price'){
                state.filters.price = <number[]> action.payload.value;
            }else{
                state.filters[action.payload.type].push(<string> action.payload.value);
            }
        },
        deleteFilter: (state, action : PayloadAction<Action>) => {
            const filterType = action.payload.type as keyof Filters;
            if (filterType !== 'price') {
                state.filters[filterType] = state.filters[filterType].filter(
                    (item) => item !== action.payload.value
                );
            }   
        },
        setProducts: (state, action : PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addFilter, deleteFilter, setProducts } = productSlice.actions;

export const filteredData = useAppSelector

export default productSlice.reducer;