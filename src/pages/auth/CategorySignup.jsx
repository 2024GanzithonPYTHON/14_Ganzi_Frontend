import React, { useState } from 'react';
import * as CM from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';

const CategorySignup = ({ handleClose }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            // 이미 선택된 경우 선택 해제
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            // 선택되지 않은 경우 추가
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSignupClick = () => {
        window.alert('회원가입 완료!');
        console.log("선택된 카테고리:", selectedCategories);
        handleClose();
    };

    return (
        <>
            <CM.TextContainer>
                <CM.Text>선호하는 카테고리들을 골라주세요!</CM.Text>
            </CM.TextContainer>
            <CM.CategoryContainer>
                <CM.ButtonContainer>
                    <CM.CategoryButton2 
                        isSelected={selectedCategories.includes('웹/모바일/IT')} 
                        onClick={() => toggleCategory('웹/모바일/IT')}>
                        웹/모바일/IT
                    </CM.CategoryButton2>
                    <CM.CategoryButton 
                        isSelected={selectedCategories.includes('광고/마케팅')} 
                        onClick={() => toggleCategory('광고/마케팅')}>
                        광고/마케팅
                    </CM.CategoryButton>
                </CM.ButtonContainer>
                <CM.ButtonContainer>
                    <CM.CategoryButton 
                        isSelected={selectedCategories.includes('취업/창업')} 
                        onClick={() => toggleCategory('취업/창업')}>
                        취업/창업
                    </CM.CategoryButton>
                    <CM.CategoryButton2 
                        isSelected={selectedCategories.includes('기획/아이디어')} 
                        onClick={() => toggleCategory('기획/아이디어')}>
                        기획/아이디어
                    </CM.CategoryButton2>
                </CM.ButtonContainer>
                <CM.ButtonContainer>
                    <CM.CategoryButton2 
                        isSelected={selectedCategories.includes('게임/소프트웨어')} 
                        onClick={() => toggleCategory('게임/소프트웨어')}>
                        게임/소프트웨어
                    </CM.CategoryButton2>
                    <CM.CategoryButton 
                        isSelected={selectedCategories.includes('디자인')} 
                        onClick={() => toggleCategory('디자인')}>
                        디자인
                    </CM.CategoryButton>
                </CM.ButtonContainer>
            </CM.CategoryContainer>
            <CM.Button onClick={handleSignupClick}>가입하기</CM.Button>
        </>
    );
};

export default CategorySignup;
