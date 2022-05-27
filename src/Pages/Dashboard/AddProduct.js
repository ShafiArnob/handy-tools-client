import React from 'react';

const AddProduct = () => {

  const handleAddProduct = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const link = e.target.link.value
    const description = e.target.des.value
    const price = e.target.price.value
    const quantity = (e.target.quantity.value).toString(10)
    const minQuantity = (e.target.minQuantity.value).toString(10)

    const body = {name:name, img:link, description:description,price:price, quantity:quantity, minQuantity:minQuantity}
    
    const url = "http://localhost:5000/products"
    fetch(url,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div class="card w-1/2 flex flex-col items-center bg-base-100  p-4">
      <form onSubmit={handleAddProduct} class="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 class="text-4xl text-center text-primary p-2">Add Product</h2>
        <input type="text" name='name' placeholder="Product Name" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='link' placeholder="Image Link" class="input input-bordered w-full max-w-xs  my-2" />
        <textarea type="text" name='des' placeholder="Product Description" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='price' placeholder="Price" class="input input-bordered w-full max-w-xs my-2" />
        <input type="number" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs my-2" />
        <input type="number" name='minQuantity' placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs my-2" />

        <button type='submit' class="btn btn-outline btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;