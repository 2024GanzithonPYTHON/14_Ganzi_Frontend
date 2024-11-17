import React from 'react';
import * as UC from "../../styles/user/UserCategory";
import CategoryConfirm from './CategoryConfirm';
import WithdrawConfrim from './WithdrawConfrim';

const UserCategory = ({ }) => {


  return (
    <>
      <UC.Container>
      <UC.TitleContainer>
        <UC.Title>카테고리</UC.Title>
      </UC.TitleContainer>
      <UC.CategoryContainer>
        <CategoryConfirm />
      </UC.CategoryContainer>
      </UC.Container>
      <UC.Container>
      <UC.TitleContainer>
        <UC.Title>회원탈퇴</UC.Title>
      </UC.TitleContainer>
      <UC.WithdrawContainer>
        <WithdrawConfrim />
      </UC.WithdrawContainer>
      </UC.Container>
    </>
  )
}

export default UserCategory;