import ProductList from '@/containers/ProductListing/ProductList'
import Sidebar from '@/containers/ProductListing/SideBar'
import React from 'react'

const ProductListing = () => {
  return (
    <>
      <main className='container flex'>

      <Sidebar/>
      <ProductList/>
      </main>
    </>
  )
}

export default ProductListing