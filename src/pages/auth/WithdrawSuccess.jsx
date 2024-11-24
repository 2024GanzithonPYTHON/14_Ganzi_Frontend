import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import { useNavigate } from 'react-router-dom';

const WithdrawSuccess = ({ handleClose }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSuccessClick = () => {
        window.alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
    };

    return (
        <>
            <CS.TextContainer>
                <CS.WithdrawSuccessText>회원 탈퇴가 완료되었습니다.</CS.WithdrawSuccessText>
            </CS.TextContainer>
            <CS.SButton onClick={handleSuccessClick}>메인 홈으로 가기</CS.SButton>
        </>
    );
};

export default WithdrawSuccess;
