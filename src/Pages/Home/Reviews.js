import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews`)
      .then(res=>res.json())
      .then(data=>setReviews(data))
  },[])
  return (
    <>
    <h1 className='text-center text-6xl p-10 text-primary font-semibold'>Reviews</h1>
    <div className='grid grid-cols-3  gap-x-44 bg-green-100 w-100 p-10'>

      {
        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }     
    </div>
    </>
  );
};

export default Reviews;