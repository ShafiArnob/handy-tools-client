import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://mighty-spire-45637.herokuapp.com/products?size=3')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='p-10'>
      <h1 className='text-center text-6xl p-10 text-primary font-semibold'>Products</h1>
      {/* <h1>{products.length}</h1> */}
      <div className="flex justify-center gap-10">
        {
         products.map(product => <Product key={product._id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;