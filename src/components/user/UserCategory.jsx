import React from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import UserEditIcon from '../..//assets/icons/UserEdit.svg';
import * as UC from "../../styles/user/UserCategory";
import Category from '../user/Category';

const UserCategory = ({ }) => {


  return (
    <>
      <UC.TitleContainer>
        <UC.Title>카테고리</UC.Title>
      </UC.TitleContainer>
      <UC.CategoryContainer>
        <Category />
      </UC.CategoryContainer>
      <UC.TitleContainer>
        <UC.Title>회원탈퇴</UC.Title>
      </UC.TitleContainer>
    </>
  )
}

export default UserCategory;