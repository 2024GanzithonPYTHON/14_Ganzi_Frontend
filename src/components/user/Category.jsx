import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";

const Category = ({ handleClose }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };


    return (
        <>
                <CS.ButtonContainer>
                    <CS.CategoryButton2 
                        isSelected={selectedCategories.includes('웹/모바일/IT')} 
                        onClick={() => toggleCategory('웹/모바일/IT')}>
                        웹/모바일/IT
                    </CS.CategoryButton2>
                    <CS.CategoryButton 
                        isSelected={selectedCategories.includes('광고/마케팅')} 
                        onClick={() => toggleCategory('광고/마케팅')}>
                        광고/마케팅
                    </CS.CategoryButton>
                </CS.ButtonContainer>
                <CS.ButtonContainer>
                    <CS.CategoryButton 
                        isSelected={selectedCategories.includes('취업/창업')} 
                        onClick={() => toggleCategory('취업/창업')}>
                        취업/창업
                    </CS.CategoryButton>
                    <CS.CategoryButton2 
                        isSelected={selectedCategories.includes('기획/아이디어')} 
                        onClick={() => toggleCategory('기획/아이디어')}>
                        기획/아이디어
                    </CS.CategoryButton2>
                </CS.ButtonContainer>
                <CS.ButtonContainer>
                    <CS.CategoryButton2 
                        isSelected={selectedCategories.includes('게임/소프트웨어')} 
                        onClick={() => toggleCategory('게임/소프트웨어')}>
                        게임/소프트웨어
                    </CS.CategoryButton2>
                    <CS.CategoryButton 
                        isSelected={selectedCategories.includes('디자인')} 
                        onClick={() => toggleCategory('디자인')}>
                        디자인
                    </CS.CategoryButton>
                </CS.ButtonContainer>
        </>
    );
};

export default Category;
