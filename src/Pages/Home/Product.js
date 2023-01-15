import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const {name,price,img,description,availableQuantity, minimumQuantity,_id} = props.product
  const navigate = useNavigate()

  const buyNow = (id) =>{
    const path = `/products/${id}`
    navigate(path)
  } 
  return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} className="rounded-xl"/>
    </figure>
    <div className="card-body">
      <h2 className="text-2xl">Name: {name}</h2>
      <h2 className="text-xl">Price: {price}</h2>
      <p className='text-xs'>Description: {description.slice(0,180)}</p>
      <p>Available: {availableQuantity}</p>
      <p>Minimum Quantity: {minimumQuantity}</p>
      <div className="card-actions flex justify-center py-6">
        <button className="btn btn-primary w-80 text-white font-bold" onClick={()=>buyNow(_id)}>Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Product;