import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Dashboard = () => {
  const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
        {/* <!-- Page content here --> */}
          <Outlet></Outlet>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Profile</Link></li>
          {
            !admin && <>
              <li><Link to='/dashboard/addreview'>Add Review</Link></li>
              <li><Link to='/dashboard/myorders'>My Orders</Link></li>
            </>
          }
          
          {
            admin && <>
              <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link></li>
              <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
              <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
              <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
            </>
          }
          
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;