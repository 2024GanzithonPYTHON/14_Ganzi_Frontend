import React from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import UserInformation from '../../components/user/UserInformation';
import UserCategory from '../../components/user/UserCategory';
import UserWithdraw from '../../components/user/UserWithdraw';



const MyPage = ({ }) => {


  return (
    <>
        <LoginAfterHeader />
        <UserInformation />
        <UserCategory />
        <UserWithdraw />
    </>
  )
}

export default MyPage;