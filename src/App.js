import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Home from './Pages/Home/Home'

import Dashboard from './Pages/Dashboard/Dashboard'
import MyProfile from './Pages/Dashboard/MyProfile'
import AddReview from './Pages/Dashboard/AddReview'
import MyOrder from './Pages/Dashboard/MyOrder'
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders'
import AddProduct from './Pages/Dashboard/AddProduct'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import ManageProducts from './Pages/Dashboard/ManageProducts'

import Blogs from './Pages/Blogs/Blogs'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import RequireAuth from './Shared/RequireAuth';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
          }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/products/:id' element={<PurchasePage></PurchasePage>}></Route>
      </Routes>
    </div>
  );
} 

export default App;
