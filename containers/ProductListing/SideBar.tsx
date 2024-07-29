"use client"
import { Slider } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { deleteFilter, addFilter } from '@/lib/features/product/productSlice';

const categories = ["Fragrances", "Beauty", "Furniture", "Groceries"];
const brands = ["Essence", "Chanel", "Calvin Klein", "Dior", "Gucci"];
const availability = ["In Stock", "Low Stock"];

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.product.filters);
  console.log(filters)
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 50;

    let newValArr;
    if (activeThumb === 0) {
      newValArr =[Math.min(newValue[0], filters.price[1] - minDistance), filters.price[1]];
    } else {
      newValArr =[filters.price[0], Math.max(newValue[1], filters.price[0] + minDistance)];
    }

    dispatch(addFilter({type:'price', value: newValArr}));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'category' | 'brands' | 'availability') => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(addFilter({ type, value }));
    } else {
      dispatch(deleteFilter({ type, value }));
    }
  };
  return (
    <aside className="px-0 py-4 bg-gray-50 flex-[1_1_20%]">
      <div className="mb-4">
        <h2 className="font-semibold">Categories</h2>
        <ul className="list-none pl-0">
          {categories.map((item) =>(
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item.toLowerCase()}
                checked={filters.category.includes(item.toLowerCase())}
                onChange={(e) => handleCheckboxChange(e, "category")}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 w-10/12">
        <h2 className="font-semibold">Price Range</h2>
        <p>Price Range ${filters.price[0]} - ${filters.price[1]}</p>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={filters.price}
          onChange={handleChange}
          disableSwap
          min={0}
          max={2000}
        />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Brands</h2>
        <ul className="list-none pl-0">
        {brands.map((item) =>(
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                checked={filters.brands.includes(item)}
                onChange={(e) => handleCheckboxChange(e, "brands")}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold">Availability</h2>
        <ul className="list-none pl-0">
        {availability.map((item) =>(
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                checked={filters.availability.includes(item)}
                onChange={(e) => handleCheckboxChange(e, "availability")}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;