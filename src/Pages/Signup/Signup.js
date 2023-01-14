import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading'
const Signup = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')

  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  // console.log(user || gUser);
  
  const [token]  = useToken(user || gUser);

  if(token) {
    navigate('/');
  }
  if(loading){
    return <Loading></Loading>
  }
  let signInError
  if(error || gError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // navigate('/');
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100 p-6">
          <h1 className='text-4xl font-bold text-center p-6'>Signup</h1>
          
          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input ref={nameRef} type="text" placeholder="Name" className="input input-bordered" /> 
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" /> 
            </div>

            {signInError}         

            <div>
              <p>Already have account <Link className='text-blue-700 underline' to='/login'>Login</Link> now</p>
            </div>

            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary text-white font-bold">Sign up</button>
            </div>

          </form>

          <div className="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;