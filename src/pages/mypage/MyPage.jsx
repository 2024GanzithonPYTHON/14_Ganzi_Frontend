import React from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import UserInformation from '../../components/user/UserInformation';
import UserCategory from '../../components/user/UserCategory';



const MyPage = ({ }) => {


  return (
    <>
        <LoginAfterHeader />
        <UserInformation />
        <UserCategory />
    </>
  )
}

export default MyPage;