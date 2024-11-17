import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import * as SM from "../../styles/Modal/SignupStyle";
import { useNavigate } from 'react-router-dom';
import Category from '../../components/user/Category';

const WithdrawConfirm = ({ handleClose }) => {
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

    const handleSignupClick = () => {
        window.alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
    };

    return (
        <>
            <CS.TextContainer>
                <CS.WithdrawText>회원 탈퇴를 위해 비밀번호를 입력해 주세요.</CS.WithdrawText>
            </CS.TextContainer>
            <SM.InputContainer>
                        <SM.Input 
                            type="text" 
                            placeholder="비밀번호" 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                    </SM.InputContainer>
            <CS.NButton onClick={handleSignupClick}>다음으로</CS.NButton>
        </>
    );
};

export default WithdrawConfirm;
