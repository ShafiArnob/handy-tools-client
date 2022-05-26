import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrderTable = ({email}) => {
  const [orders, setOrders] = useState([])
  console.log(email);
  useEffect(()=>{
    fetch(`http://localhost:5000/orders/${email}`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[])
      
  // console.log(orders);
  return (
    <div class="overflow-x-auto w-full m-6">
      <table class="table w-2/3 ">
        {/* <!-- head --> */}
        <thead>
          <tr className='text-center'>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            orders?.map(order => <MyOrdersRow key={order._id} order={order}></MyOrdersRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderTable;