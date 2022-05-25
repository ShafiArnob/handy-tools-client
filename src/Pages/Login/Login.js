import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    navigate('/')
  }

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col">
        <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <h1 className='text-4xl font-bold text-center p-6'>Login</h1>
          
          <form onSubmit={handleSubmit} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input ref={passwordRef} type="password" placeholder="password" class="input input-bordered" />
              
            </div>
            <div>
              <p>Dont have any account <Link className='text-blue-700 underline' to='/signup'>Signup</Link> now</p>
            </div>
            <div class="form-control mt-6">
              <button type='submit' class="btn btn-primary text-white font-bold">Login</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;