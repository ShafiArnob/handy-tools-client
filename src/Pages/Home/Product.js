import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const {name,price,img,description,quantity, minQuantity,_id} = props.product
  const navigate = useNavigate()

  const buyNow = (id) =>{
    const path = `/products/${id}`
    navigate(path)
  } 
  return (
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={img} class="rounded-xl"/>
    </figure>
    <div class="card-body">
      <h2 class="text-2xl">Name: {name}</h2>
      <h2 class="text-xl">Price: {price}</h2>
      <p className='text-xs'>Description: {description.slice(0,180)}</p>
      <p>Available: {quantity}</p>
      <p>Minimum Quantity: {minQuantity}</p>
      <div class="card-actions flex justify-center py-6">
        <button class="btn btn-primary w-80 text-white font-bold" onClick={()=>buyNow(_id)}>Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Product;