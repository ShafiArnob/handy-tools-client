import React from 'react';
import { useNavigate } from "react-router-dom";
const ManageAllOrdersRow = ({order}) => {
  let navigate = useNavigate()
  const handleOrderDelete = ()=>{
    const proceed = window.confirm("Are You Sure?")
    if(proceed){
      const url = `https://tools-website-server.vercel.app/orders/${order._id}`
      fetch(url,{
        method:'DELETE',
        headers:{'content-type':'application/json'}})
      .then(res => res.json())
      .then(data => console.log(data))
    }
    // navigate('manageallorders')
  }
  return (
      <tr className='text-center'>
            <td>{order._id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.availableQuantity}</td>
            <td>{order.address}</td>
            
            <td><button onClick={handleOrderDelete} className="btn btn-sm btn-outline btn-error">shipped</button></td>
    </tr>

  );
};

export default ManageAllOrdersRow;