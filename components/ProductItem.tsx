import { Product } from '@/types/Product';
import React, { useState } from 'react';


interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className='flex flex-col py-1'>
      <div className="border p-4 w-[350px]">
        <img className='w-[150px] h-[150px] mx-auto' src={product.thumbnail} alt={product.title}/>
      </div>
      <h3 className="font-semibold">{product.category}</h3>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;