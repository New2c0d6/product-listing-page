import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="px-0 py-4 bg-gray-50 flex-[1_1_20%]">
      <div className="mb-4">
        <h2 className="font-semibold">Categories</h2>
        <ul className="list-disc list-inside">
          <li>Furniture</li>
          <li>Lighting</li>
          <li>Decoration</li>
          <li>Bedding</li>
          <li>Bath & Shower</li>
          <li>Curtains</li>
          <li>Toys</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Price Range</h2>
        <input type="range" min="0" max="500" className="w-full" />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Brands</h2>
        <ul className="list-disc list-inside">
          <li>Poliform</li>
          <li>Molteni & C</li>
          <li>Minotti</li>
          <li>BoConcept</li>
          <li>Knoll</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold">Availability</h2>
        <ul className="list-disc list-inside">
          <li>In Stock</li>
          <li>Out of Stock</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;