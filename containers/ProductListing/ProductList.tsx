'use client'
import React from 'react';
import { Product } from '@/types/Product';
import ProductItem from '@/components/ProductItem';



const products: Product[] = [
  { id: 1, category: 'Lighting', name: 'Awesome Lamp', price: 40 },
  { id: 2, category: 'Decoration', name: 'Cool Flower', price: 25 },
  { id: 3, category: 'Furniture', name: 'Cozy Sofa', price: 500 },
  { id: 4, category: 'Lighting', name: 'Awesome Candle', price: 15 },
  { id: 5, category: 'Furniture', name: 'Fancy Chair', price: 70 },
  { id: 6, category: 'Decoration', name: 'Chinese Teapot', price: 150 },
];

const ProductList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 px-0 py-4 flex-[1_1_80%]">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;