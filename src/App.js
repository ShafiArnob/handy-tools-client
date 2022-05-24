import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header';
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Blogs from './Pages/Blogs/Blogs'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
} 

export default App;
