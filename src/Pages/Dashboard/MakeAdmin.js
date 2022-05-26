import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const { data:users, isLoading, refetch } = useQuery(
    'users', () => fetch('http://localhost:5000/user')
    .then(res => res.json()));
    
    if (isLoading) {
        return <Loading></Loading>
    }
  return (
    <div class="overflow-x-auto w-full m-6">
      <table class="table w-2/3 ">
        {/* <!-- head --> */}
        <thead>
          <tr className='text-center'>
            
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            users.map(user => <MakeAdminRow key={user._id} user={user} refetch={refetch}></MakeAdminRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;