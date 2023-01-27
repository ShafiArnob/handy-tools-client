import React from 'react';

const ManageProductsRow = ({product,refetch}) => {
  
  
  const handleProductDelete = ()=>{
      const proceed = window.confirm("Are You Sure?")
      if(proceed){
        const url = `https://tools-website-server.vercel.app/products/${product._id}`
        fetch(url,{
          method:'DELETE',
          headers:{'content-type':'application/json'}})
        .then(res => res.json())
        .then(data => console.log(data))
        refetch()
      }
    }
  
  return (
    <tr className='text-center'>
        <td>{product.name}</td> 
        <td>{product.price}</td> 
        <td>{product.availableQuantity}</td> 
        <td>{product.minimumQuantity}</td> 
        <td><button onClick={handleProductDelete} className="btn btn-sm btn-outline btn-error">x</button></td> 
      </tr>
  );
};

export default ManageProductsRow;