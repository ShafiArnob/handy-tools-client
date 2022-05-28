import React, { useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading'
const MyProfile = () => {
  const [profile,setProfile] = useState({})
  const [user] = useAuthState(auth);
  useEffect(()=>{
    fetch(`http://localhost:5000/profile/${user?.email}`)
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
      fetch(`http://localhost:5000/profile/${email}`, {
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
    <div class="card w-1/2 flex flex-col items-center bg-base-100  p-4">
      <form onSubmit={handleUpdateProfile} class="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 class="text-4xl text-center text-primary p-2">Profile</h2>
        <input type="text" name='name' value = {user?.displayName} class="input input-bordered w-full max-w-xs my-2" disabled/>
        <input type="text" name='email' value= {user?.email} class="input input-bordered w-full max-w-xs  my-2" disabled/>
        <input type="text" name='education' value={profile.education} placeholder="Education" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='phone' value={profile.phone} placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-2" />
        <textarea type="text" name='address' value={profile.address} placeholder="Address" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='linkedin' value={profile.linkedin} placeholder="Linkedin Profile" class="input input-bordered w-full max-w-xs my-2" />

        <button type='submit' class="btn btn-outline btn-primary w-1/3">Update</button>
      </form>
    </div>
  );
};

export default MyProfile;