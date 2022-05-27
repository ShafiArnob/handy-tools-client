import React from 'react';

const MyOrdersRow = ({order,setReloadOrderTable,reloadOrderTable}) => {
  const handleOrderDelete = ()=>{
    const proceed = window.confirm("Are You Sure?")
    if(proceed){
      const url = `http://localhost:5000/orders/${order._id}`
      fetch(url,{
        method:'DELETE',
        headers:{'content-type':'application/json'}})
      .then(res => res.json())
      .then(data => console.log(data))
      setReloadOrderTable(!reloadOrderTable)
    }
  }
  return (
    <tr className='text-center'>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td><button onClick={handleOrderDelete} class="btn btn-sm btn-outline btn-error">x</button></td>
    </tr>
  );
};

export default MyOrdersRow;