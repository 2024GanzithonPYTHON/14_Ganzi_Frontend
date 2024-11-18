import React from 'react';
import * as UC from "../../styles/user/UserCategory";
import CategoryConfirm from './CategoryConfirm';

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
    </>
  )
}

export default UserCategory;