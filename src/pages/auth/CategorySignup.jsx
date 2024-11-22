import React, { useState } from 'react';
import axios from 'axios';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';

const CategorySignup = ({ handleClose, setSelectedCategories, signupData }) => {
    const [selectedCategoriesLocal, setSelectedCategoriesLocal] = useState([]); // 선택된 카테고리 상태
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        if (selectedCategoriesLocal.includes(category)) {
            setSelectedCategoriesLocal(selectedCategoriesLocal.filter((item) => item !== category));
        } else {
            setSelectedCategoriesLocal([...selectedCategoriesLocal, category]);
        }
    };

    const handleSignupClick = async () => {
        try {
            const requestData = {
                loginId: signupData.id,
                password: signupData.password,
                userName: signupData.name,
                nickName: signupData.nickname,
                number: signupData.phone,
                category: selectedCategoriesLocal,
            };
    
            const response = await axios.post('/api/auth/signup', requestData);
    
            if (response.status === 200) {
                alert("회원가입 완료!");
                handleClose();
            }
        } catch (error) {
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };
    

    return (
        <>
            <CS.TextContainer>
                <CS.Text>선호하는 카테고리들을 골라주세요!</CS.Text>
            </CS.TextContainer>
            <CS.CategoryContainer>
                <Category setSelectedCategories={setSelectedCategoriesLocal} />
            </CS.CategoryContainer>
            <CS.NButton onClick={handleSignupClick}>가입하기</CS.NButton>
        </>
    );
};

export default CategorySignup;
