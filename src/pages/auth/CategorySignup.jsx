import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';
import axios from 'axios';

const CategorySignup = ({ handleClose, previousData }) => {
    const [selectedCategoriesLocal, setSelectedCategoriesLocal] = useState([]); // 선택된 카테고리 상태
    const navigate = useNavigate();

    const handleSignupClick = async () => {
        try {
            const requestData = {
                ...previousData,  // 이전 데이터(이름, 전화번호, 아이디 등)
                category: selectedCategoriesLocal,  // 선택한 카테고리 배열
            };
            
            console.log("Request Data: ", requestData);  // 요청 데이터 출력하여 확인
    
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
                {/* setSelectedCategoriesLocal을 Category 컴포넌트에 전달 */}
                <Category setSelectedCategories={setSelectedCategoriesLocal} />
            </CS.CategoryContainer>
            <CS.NButton onClick={handleSignupClick}>가입하기</CS.NButton>
        </>
    );
};

export default CategorySignup;
