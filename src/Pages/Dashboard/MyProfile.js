import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading'
import { useForm } from "react-hook-form";


const MyProfile = () => {
  const [profile,setProfile] = useState({})
  const [user] = useAuthState(auth);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data)

  useEffect(()=>{
    fetch(`https://tools-website-server.vercel.app/profile/${user?.email}`)
    .then(res => res.json())
    .then(data => setProfile(data))
  },[user])

  if(!user){
    return <Loading></Loading>
  }

  const handleUpdateProfile = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const education = e.target.education.value
    const phone = e.target.phone.value
    const address = e.target.address.value
    const linkedin = e.target.linkedin.value

    const body = {name,email,education,phone, address,linkedin}

    if(email){
      fetch(`https://tools-website-server.vercel.app/profile/${email}`, {
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
      <form onSubmit={handleUpdateProfile} className="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 className="text-4xl text-center text-primary p-2">Profile</h2>
        <input  type="text" name='name' defaultValue = {user?.displayName} className="input input-bordered w-full max-w-xs my-2" disabled/>
        <input type="text" name='email' defaultValue = {user?.email} className="input input-bordered w-full max-w-xs  my-2" disabled/>
        <input defaultValue={profile?.education} type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='phone' defaultValue={profile?.phone} placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
        <textarea type="text" name='address' defaultValue={profile?.address} placeholder="Address" className="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='linkedin' defaultValue={profile?.linkedin} placeholder="Linkedin Profile" className="input input-bordered w-full max-w-xs my-2" />

        <button type='submit' className="btn btn-outline btn-primary w-1/3">Update</button>
      </form>
    </div>
  );
};

export default MyProfile;