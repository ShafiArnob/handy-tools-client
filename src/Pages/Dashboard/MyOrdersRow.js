import React from 'react';

const MyOrdersRow = ({order}) => {
  
  return (
    <tr className='text-center'>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>Blue</td>
    </tr>
  );
};

export default MyOrdersRow;