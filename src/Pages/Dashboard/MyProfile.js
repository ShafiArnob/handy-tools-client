import React from 'react';

const MyProfile = () => {

  const handleUpdateProfile = () =>{

  }
  return (
    <div class="card w-1/2 flex flex-col items-center bg-base-100  p-4">
      <form onSubmit={handleUpdateProfile} class="card-body flex flex-col items-center w-full outline outline-1 outline-primary rounded-2xl">
        <h2 class="text-4xl text-center text-primary p-2">Profile</h2>
        <input type="text" name='name' value = 'Arob' class="input input-bordered w-full max-w-xs my-2" disabled/>
        <input type="text" name='email' value= 'a@gmail.com' class="input input-bordered w-full max-w-xs  my-2" disabled/>
        <textarea type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs my-2" />
        <input type="text" name='linkedin' placeholder="Linkedin Profile" class="input input-bordered w-full max-w-xs my-2" />

        <button type='submit' class="btn btn-outline btn-primary w-1/3">Update</button>
      </form>
    </div>
  );
};

export default MyProfile;