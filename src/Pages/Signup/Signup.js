import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col">
        <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <h1 className='text-4xl font-bold text-center p-6'>Signup</h1>
          <div class="card-body">

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" /> 
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" /> 
            </div>

            <div>
              <p>Already have account <Link className='text-blue-700 underline' to='/login'>Login</Link> now</p>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary text-white font-bold">Sign up</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;