import React from 'react';

const ReviewCard = ({review}) => {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl mx-8">
  <div class="card-body">
    <h2 class="card-title p-0">Name: {review?.name}</h2>
    <h2 class="text-lg p-0">Rating: {review.rating}/5</h2>
    <p className='p-0'>{review.review}</p>
  </div>
</div>
  );
};

export default ReviewCard;