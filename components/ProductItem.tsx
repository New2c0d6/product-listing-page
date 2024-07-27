import { Product } from '@/types/Product';
import React from 'react';


interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="border p-4">
      <h3 className="font-semibold">{product.category}</h3>
      <p>{product.name}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;