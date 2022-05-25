import React from 'react';

const Login = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col">
        <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <h1 className='text-4xl font-bold text-center p-6'>Login</h1>
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
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary text-white font-bold">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;