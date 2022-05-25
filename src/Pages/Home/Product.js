import React from 'react';

const Product = (props) => {
  const {name,img,description,quantity, minQuantity} = props.product
  console.log(props.product);
  return (
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={img} class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="text-2xl">Name: {name}</h2>
      <p className='text-xs'>Description: {description}</p>
      <p>Available: {quantity}</p>
      <p>Minimum Quantity: {minQuantity}</p>
      <div class="card-actions flex justify-center py-6">
        <button class="btn btn-primary w-80 text-white font-bold">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Product;