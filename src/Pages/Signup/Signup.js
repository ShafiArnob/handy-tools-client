import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
const Signup = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')

  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/');
  }

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col">
        <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <h1 className='text-4xl font-bold text-center p-6'>Signup</h1>
          
          <form onSubmit={handleRegister} class="card-body">

            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input ref={nameRef} type="text" placeholder="Name" class="input input-bordered" /> 
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input ref={emailRef} type="email" placeholder="Email" class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input ref={passwordRef} type="password" placeholder="password" class="input input-bordered" /> 
            </div>

            

            <div>
              <p>Already have account <Link className='text-blue-700 underline' to='/login'>Login</Link> now</p>
            </div>

            <div class="form-control mt-6">
              <button type='submit' class="btn btn-primary text-white font-bold">Sign up</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;