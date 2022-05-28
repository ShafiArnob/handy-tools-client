import React from 'react';

const ManageAllOrdersRow = ({order}) => {
  
  return (
      <tr className='text-center'>
            <td>{order._id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.quantity}</td>
            <td>{order.address}</td>
            
            <td><button class="btn btn-sm btn-outline btn-error">shipped</button></td>
    </tr>

  );
};

export default ManageAllOrdersRow;