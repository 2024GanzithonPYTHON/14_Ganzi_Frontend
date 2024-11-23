import React from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import UserInformation from '../../components/user/UserInformation';
import UserWithdraw from '../../components/user/UserWithdraw';
import UserEdit from '../../pages/mypage/Edit';



const MyPage = ({ }) => {


  return (
    <>
        <LoginAfterHeader />
        <UserInformation />
        <UserWithdraw />
    </>
  )
}

export default MyPage;