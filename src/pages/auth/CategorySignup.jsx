import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';

const CategorySignup = ({ handleClose, setSelectedCategories }) => {
    const [selectedCategoriesLocal, setSelectedCategoriesLocal] = useState([]); // 선택된 카테고리 상태
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        if (selectedCategoriesLocal.includes(category)) {
            setSelectedCategoriesLocal(selectedCategoriesLocal.filter((item) => item !== category));
        } else {
            setSelectedCategoriesLocal([...selectedCategoriesLocal, category]);
        }
    };

    const handleSignupClick = () => {
        setSelectedCategories(selectedCategoriesLocal);

        window.alert('회원가입 완료!');
        handleClose(); 
    };

    return (
        <>
            <CS.TextContainer>
                <CS.Text>선호하는 카테고리들을 골라주세요!</CS.Text>
            </CS.TextContainer>
            <CS.CategoryContainer>
                <Category toggleCategory={toggleCategory} />
            </CS.CategoryContainer>
            <CS.NButton onClick={handleSignupClick}>가입하기</CS.NButton>
        </>
    );
};

export default CategorySignup;
