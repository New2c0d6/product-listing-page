"use client"
import { Slider } from '@mui/material';
import React from 'react';

const categories = ["Toys", "Curtains", "Bath & Shower", "Bedding", "Decoration", "Lighting", "Furniture"];
const brands = ["Poliform", "Molteni & C", "Minotti", "BoConcept", "Knoll"];
const availability = ["In Stock", "Out of Stock"];

const Sidebar: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number[]>([0, 1500]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 50;

    if (activeThumb === 0) {
      setSliderValue([Math.min(newValue[0], sliderValue[1] - minDistance), sliderValue[1]]);
    } else {
      setSliderValue([sliderValue[0], Math.max(newValue[1], sliderValue[0] + minDistance)]);
    }
  };
  return (
    <aside className="px-0 py-4 bg-gray-50 flex-[1_1_20%]">
      <div className="mb-4">
        <h2 className="font-semibold">Categories</h2>
        <ul className="list-none pl-0">
          {categories.map((category) =>(
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                name={category}
                value={category}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 w-10/12">
        <h2 className="font-semibold">Price Range</h2>
        <p>Price Range ${sliderValue[0]} - ${sliderValue[1]}</p>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={sliderValue}
          onChange={handleChange}
          disableSwap
          min={0}
          max={2000}
        />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Brands</h2>
        <ul className="list-none pl-0">
        {brands.map((brand) =>(
            <li key={brand}>
              <input
                type="checkbox"
                id={brand}
                name={brand}
                value={brand}
              />
              <label htmlFor={brand}>{brand}</label>
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