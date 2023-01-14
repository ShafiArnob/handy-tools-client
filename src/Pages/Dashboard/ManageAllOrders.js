import React, { useEffect, useState } from 'react';
import ManageAllOrdersRow from './ManageAllOrdersRow';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    fetch(`https://mighty-spire-45637.herokuapp.com/orders`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[])
  
  return (
    <div className="overflow-x-auto mt-4 w-2/3">
  <table className="table table-compact w-full">
    <thead className='text-center'>
      <tr>
        <th>Order Id</th> 
        <th>User Name</th> 
        <th>Email</th> 
        <th>Quantity</th> 
        <th>Address</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      {
        orders.map(order=><ManageAllOrdersRow key={order._id} order={order}></ManageAllOrdersRow>)
      }
    </tbody> 
  </table>
</div>
  );
};

export default ManageAllOrders;