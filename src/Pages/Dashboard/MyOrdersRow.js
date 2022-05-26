import React from 'react';

const MyOrdersRow = ({order}) => {
  
  return (
    <tr>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>Blue</td>
    </tr>
  );
};

export default MyOrdersRow;