import React from 'react';

const MakeAdminRow = ({user,refetch}) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
        method: 'PUT'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    refetch()
}
  return (
    <tr className='text-center'>
            <td>{user.email}</td>
            <td>{user?.role? user.role : ''}</td>
            <td>{user?.role=="admin"? "" : <button onClick={makeAdmin} className="btn btn-outline">Make Admin</button>}</td>
    </tr>
  );
};

export default MakeAdminRow;