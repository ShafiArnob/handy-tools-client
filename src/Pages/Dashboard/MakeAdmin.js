import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const { data:users, isLoading, refetch } = useQuery(
    'users', () => fetch('https://tools-website-server.vercel.app/user')
    .then(res => res.json()));
    
    if (isLoading) {
        return <Loading></Loading>
    }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center justify-center  overflow-x-auto w-full m-6">
      <table className="table w-2/3 ">
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
    </div>
  );
};

export default MakeAdmin;