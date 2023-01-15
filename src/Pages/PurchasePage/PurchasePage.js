import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchasePage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [inputDisabled, setInputDisabled] = useState(true)
  const [user] = useAuthState(auth);
  useEffect(()=>{
    const url = `http://localhost:5000/products/${id}`
    fetch(url).then(res=>res.json()).then(data=>setProduct(data))
  },[])

  const handlePlaceOrder = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const address = e.target.address.value
    const phone = e.target.phone.value
    
    const productName = product.name
    const productId = product._id
    const availableQuantity = e.target.availableQuantity.value
    const status = "pending"
    const paymentStatus = false

    const body = {name,email,address,phone,productName,productId,availableQuantity,status,paymentStatus}

    const url = "http://localhost:5000/orders"
    fetch(url,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  function qty(e){
    const qty = parseInt(e.target.value)

    if(qty){
      if(parseInt(product.minimumQuantity)>qty || parseInt(product.availableQuantity)<qty){
        setInputDisabled(false)
      }
      else{
        setInputDisabled(true)
      }
    }
    else{
      setInputDisabled(false)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200 flex flex-row">
      <div className="hero-content flex lg:flex-row p-12 my-6 bg-white rounded-lg m-10">
        <img src={product.img} className="max-w-md w-72 rounded-lg shadow-2xl" />
        <div className='ml-10'>
          <h1 className="text-xl font-bold">Name: {product.name}</h1>
          <h1 className="text-xl font-bold">Price: {product.price}</h1>
          <p className="py-1">{product.description}</p>
          <p className="py-1"><span className='font-semibold'>Available:</span> {product.availableQuantity}</p>
          <p className="py-1"><span className='font-semibold'>Minimum Quantity:</span> {product.minimumQuantity}</p>
        </div>
      </div>
      <div className="hero-content p-12 bg-white rounded-lg w-100 mb-10 m-10">
        <form onSubmit={handlePlaceOrder} className='flex flex-col'>
          <input type="text" name='name' placeholder="Username" value={user?.displayName} className="input input-bordered w-full max-w-xs my-2" disabled/>
          <input type="text" name='email' placeholder="Email" value={user?.email} className="input input-bordered w-full max-w-xs my-2" disabled/>
          <textarea type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs my-2" />
          <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
          {inputDisabled ? 
          ''
          :
          <p className='p-0 m-0 text-xs text-red-600'>Minimum Quantity {product.minimumQuantity} and Maximum Quantity {product.availableQuantity}</p>}
          <input type="number" onChange={qty} name='availableQuantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs my-2" />
          {
            inputDisabled? 
            <button className="btn btn-primary w-80 text-white font-bold mt-6">Place Order</button>
            :
            <button className="btn btn-primary w-80 text-white font-bold mt-6" disabled>Place Order</button>
          }
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;