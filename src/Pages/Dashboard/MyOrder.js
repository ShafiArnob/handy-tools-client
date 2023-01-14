import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading'
import MyOrdersRow from './MyOrdersRow';
import MyOrderTable from './MyOrderTable';
const MyOrder = () => {
  const [user] = useAuthState(auth)
  
  // console.log(user?.email);
  return (
    <>
    {user?<MyOrderTable email={user.email}></MyOrderTable>:<Loading></Loading>}
    </>
  );
};

export default MyOrder;