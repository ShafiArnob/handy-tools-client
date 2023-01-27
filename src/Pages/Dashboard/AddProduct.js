import React from 'react';

const AddProduct = () => {

  const handleAddProduct = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const link = e.target.link.value
    const description = e.target.des.value
    const price = e.target.price.value
    const availableQuantity = (e.target.availableQuantity.value).toString(10)
    const minimumQuantity = (e.target.minimumQuantity.value).toString(10)

    const body = {name:name, img:link, description:description,price:price, availableQuantity:availableQuantity, minimumQuantity:minimumQuantity}
    
    const url = "https://tools-website-server.vercel.app/products"
    fetch(url,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="card w-1/2 flex flex-col items-center bg-base-100  p-4">
      <form onSubmit={handleAddProduct} className="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 className="text-4xl text-center text-primary p-2">Add Product</h2>
        <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='link' placeholder="Image Link" className="input input-bordered w-full max-w-xs  my-2" />
        <textarea type="text" name='des' placeholder="Product Description" className="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs my-2" />
        <input type="number" name='availableQuantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs my-2" />
        <input type="number" name='minimumQuantity' placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs my-2" />

        <button type='submit' className="btn btn-outline btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;