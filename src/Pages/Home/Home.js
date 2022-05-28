import React from 'react';
import About from './About';
import Banner from './Banner/Banner';
import Footer from './Footer';
import Products from './Products'
import Reviews from './Reviews';
const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;