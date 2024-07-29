'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '@/components/ProductItem';
import { selectFilteredProducts } from '@/lib/features/product/selector';
import { setProducts } from '@/lib/features/product/productSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useGetProductsQuery } from '@/lib/services/Product';

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products));
    }
  }, [data, dispatch]);

  const products = useSelector(selectFilteredProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 px-4 py-4 flex-[1_1_80%]">
      {products.map((product) => (
        <>
        {console.log(JSON.stringify( product), "here")}
        <ProductItem key={product.id} product={product} />
        </>
      ))}
    </div>
  );
};

export default ProductList;
