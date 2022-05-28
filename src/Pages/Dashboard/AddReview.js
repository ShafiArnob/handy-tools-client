import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.config';
import Loading from '../../Shared/Loading';
const AddReview = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [user] = useAuthState(auth);
  if(!user){
    return <Loading></Loading>
  }

  const onSubmit = data => {
    const email = user?.email
    const body = {review:data.review, rating:data.rating, email:email,name:user.displayName}
    if(email){
      fetch(`http://localhost:5000/reviews/${email}`, {
          method:'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body:JSON.stringify(body)
      })
      .then(res=>res.json())
      .then(data => console.log(data))
  }
  }

  return (
    <div className="card w-1/2 flex flex-col items-center bg-base-100  p-4">
      <form className='card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl' onSubmit={handleSubmit(onSubmit)}>
        <input className='input input-bordered w-full max-w-xs my-2' placeholder='Review'{...register("review", { required: true})} />
        {errors.review?.type === 'required' && <p className='text-red-600 text-xs text-left'>Review is required</p>}
        <input className='input input-bordered w-full max-w-xs my-2' placeholder='Ratings' type="number" {...register("rating", { 
          min: 1,
          max: 5,
          required:true
          })} />
        {errors.rating?.type === "max" && <p className='text-red-600 text-xs text-left'>Maximum Value is 5</p>}
        {errors.rating?.type === "min" && <p className='text-red-600 text-xs text-left'>Minimum Value is 5</p>}
        <button type='submit' className="btn btn-outline btn-primary w-1/3">Add Review</button>
      </form>
      </div>

  );
};

export default AddReview;