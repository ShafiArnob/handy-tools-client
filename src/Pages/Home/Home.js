import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products'
const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;