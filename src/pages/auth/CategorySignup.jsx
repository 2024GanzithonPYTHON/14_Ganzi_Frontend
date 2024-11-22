import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';
import axios from 'axios';

const CategorySignup = ({ handleClose, previousData }) => {
    const [selectedCategoriesLocal, setSelectedCategoriesLocal] = useState([]); 
    const navigate = useNavigate();

    const handleSignupClick = async () => {
        try {
            const requestData = {
                ...previousData,  
                category: selectedCategoriesLocal, 
            };
            
            console.log("Request Data: ", requestData); 
    
            const response = await axios.post(`/api/auth/signup`, requestData);
    
            if (response.status === 200) {
                console.log("회원가입 성공:", response.data);
                alert("회원가입이 완료되었습니다!");
                handleClose();
                navigate("/");
            }
        } catch (error) {
            console.error("에러 발생:", error.response);
            alert("회원가입에 실패하였습니다.");
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
