import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';

const CategorySignup = ({ handleClose }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSignupClick = () => {
        window.alert('회원가입 완료!');
        handleClose();
    };

    return (
        <>
            <CS.TextContainer>
                <CS.Text>선호하는 카테고리들을 골라주세요!</CS.Text>
            </CS.TextContainer>
            <CS.CategoryContainer>
                <Category />
            </CS.CategoryContainer>
            <CS.Button onClick={handleSignupClick}>가입하기</CS.Button>
        </>
    );
};

export default CategorySignup;
