import React from 'react';

const AddProduct = () => {
  return (
    <div class="card w-1/2 flex flex-col items-center bg-base-100  p-6 mt-4">
      <div class="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 class="text-4xl text-center text-primary p-2">Add Product</h2>
        <input type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" placeholder="Image Link" class="input input-bordered w-full max-w-xs  my-2" />
        <input type="text" placeholder="Product Description" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" placeholder="Quantity" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs my-2" />

        <button class="btn btn-outline btn-primary w-full">Success</button>
      </div>
    </div>
  );
};

export default AddProduct;