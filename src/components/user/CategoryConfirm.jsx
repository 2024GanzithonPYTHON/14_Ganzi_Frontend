import React from 'react';
import * as UC from "../../styles/user/UserCategory";

const CategoryConfirm = ({ selectedCategories, handleCategoryChange }) => {
  return (
    <>
      <UC.ButtonContainer>
        <UC.CategoryButton2 
          $isSelected={selectedCategories.includes('웹/모바일/IT')} 
          onClick={() => handleCategoryChange('웹/모바일/IT')}>
          웹/모바일/IT
        </UC.CategoryButton2>
        <UC.CategoryButton 
          $isSelected={selectedCategories.includes('광고/마케팅')} 
          onClick={() => handleCategoryChange('광고/마케팅')}>
          광고/마케팅
        </UC.CategoryButton>
      </UC.ButtonContainer>
      <UC.ButtonContainer>
        <UC.CategoryButton 
          $isSelected={selectedCategories.includes('취업/창업')} 
          onClick={() => handleCategoryChange('취업/창업')}>
          취업/창업
        </UC.CategoryButton>
        <UC.CategoryButton2 
          $isSelected={selectedCategories.includes('기획/아이디어')} 
          onClick={() => handleCategoryChange('기획/아이디어')}>
          기획/아이디어
        </UC.CategoryButton2>
      </UC.ButtonContainer>
      <UC.ButtonContainer>
        <UC.CategoryButton2 
          $isSelected={selectedCategories.includes('게임/소프트웨어')} 
          onClick={() => handleCategoryChange('게임/소프트웨어')}>
          게임/소프트웨어
        </UC.CategoryButton2>
        <UC.CategoryButton 
          $isSelected={selectedCategories.includes('디자인')} 
          onClick={() => handleCategoryChange('디자인')}>
          디자인
        </UC.CategoryButton>
      </UC.ButtonContainer>
    </>
  );
};

export default CategoryConfirm;
