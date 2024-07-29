import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { Product } from '@/types/Product';

export const selectProducts = (state: RootState): Product[] => state.product.products;
export const selectFilters = (state: RootState) => state.product.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    return products.filter(product => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesPrice = product.price >= filters.price[0] && product.price <= filters.price[1];
      const matchesBrands = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const matchesAvailability = filters.availability.length === 0 || filters.availability.includes(product.availabilityStatus);

      return matchesCategory && matchesPrice && matchesBrands && matchesAvailability;
    });
  }
);
