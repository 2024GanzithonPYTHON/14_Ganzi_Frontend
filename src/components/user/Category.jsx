import React, { useState, useEffect } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";

const Category = ({ setSelectedCategories }) => {
    const [selectedCategoriesLocal, setSelectedCategoriesLocal] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategoriesLocal.includes(category)) {
            setSelectedCategoriesLocal(selectedCategoriesLocal.filter((item) => item !== category));
        } else {
            setSelectedCategoriesLocal([...selectedCategoriesLocal, category]);
        }
    };

    // 선택된 카테고리를 부모 컴포넌트로 전달
    useEffect(() => {
        setSelectedCategories(selectedCategoriesLocal);
    }, [selectedCategoriesLocal, setSelectedCategories]);

    return (
        <>
            <CS.ButtonContainer>
                <CS.CategoryButton2 
                    $isSelected={selectedCategoriesLocal.includes('웹/모바일/IT')} 
                    onClick={() => toggleCategory('웹/모바일/IT')}>
                    웹/모바일/IT
                </CS.CategoryButton2>
                <CS.CategoryButton 
                    $isSelected={selectedCategoriesLocal.includes('광고/마케팅')} 
                    onClick={() => toggleCategory('광고/마케팅')}>
                    광고/마케팅
                </CS.CategoryButton>
            </CS.ButtonContainer>
            <CS.ButtonContainer>
                <CS.CategoryButton 
                    $isSelected={selectedCategoriesLocal.includes('취업/창업')} 
                    onClick={() => toggleCategory('취업/창업')}>
                    취업/창업
                </CS.CategoryButton>
                <CS.CategoryButton2 
                    $isSelected={selectedCategoriesLocal.includes('기획/아이디어')} 
                    onClick={() => toggleCategory('기획/아이디어')}>
                    기획/아이디어
                </CS.CategoryButton2>
            </CS.ButtonContainer>
            <CS.ButtonContainer>
                <CS.CategoryButton2 
                    $isSelected={selectedCategoriesLocal.includes('게임/소프트웨어')} 
                    onClick={() => toggleCategory('게임/소프트웨어')}>
                    게임/소프트웨어
                </CS.CategoryButton2>
                <CS.CategoryButton 
                    $isSelected={selectedCategoriesLocal.includes('디자인')} 
                    onClick={() => toggleCategory('디자인')}>
                    디자인
                </CS.CategoryButton>
            </CS.ButtonContainer>
        </>
    );
};

export default Category;
