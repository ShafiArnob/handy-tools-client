import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrderTable = ({email}) => {
  const [reloadOrderTable, setReloadOrderTable] = useState(false)
  const [orders, setOrders] = useState([])
  console.log(email);
  useEffect(()=>{
    fetch(`https://tools-website-server.vercel.app/orders/${email}`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[reloadOrderTable, email])
  
  // console.log(orders);
  return (
    <div className="overflow-x-auto w-full m-6">
      <table className="table w-2/3 ">
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
            orders?.map(order => <MyOrdersRow key={order._id} order={order} setReloadOrderTable={setReloadOrderTable} reloadOrderTable={reloadOrderTable}></MyOrdersRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderTable;