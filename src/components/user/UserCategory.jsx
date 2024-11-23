import React, { useState } from 'react';
import * as UC from "../../styles/user/UserCategory";
import CategoryConfirm from './CategoryConfirm';

const UserCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Define the handleCategoryChange function
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <UC.Container>
      <UC.TitleContainer>
        <UC.Title>카테고리</UC.Title>
      </UC.TitleContainer>
      <UC.CategoryContainer>
        <CategoryConfirm
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
      </UC.CategoryContainer>
    </UC.Container>
  );
};

export default UserCategory;
