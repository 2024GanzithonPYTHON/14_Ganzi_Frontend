import React, { useState } from 'react';
import axios from 'axios';
import * as SM from "../../styles/Modal/SignupStyle";
import CategorySignup from './CategorySignup';

const Signup = ({ handleClose, step, setStep }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [isIdAvailable, setIsIdAvailable] = useState(null);  // 아이디 중복 여부 상태 추가

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNicknameChange = (e) => setNickname(e.target.value);

    const handleNextStep = () => {
        if (step === 1) setStep(2); 
    };

    const handleIdClick = async () => {
        try {
            const response = await axios.post('/api/user/check/Id', {
                sentence: id,  // 요청 본문에 아이디 전달
            });
            if (response.status === 200) {
                setIsIdAvailable(true);  // 아이디 사용 가능
                alert('사용 가능한 아이디입니다.');
            }
        } catch (error) {
            setIsIdAvailable(false);  // 아이디 사용 불가
            alert('이미 사용 중인 아이디입니다.');
        }
    };

    return (
        <>
            {step === 2 ? (
                <CategorySignup handleClose={handleClose} />
            ) : (
                <>
                    <SM.ModalContent $isSignup={!isSignup}>
                        <SM.InputContainer>
                            <SM.Input 
                                type="text" 
                                placeholder="이름" 
                                value={name} 
                                onChange={handleNameChange} 
                            />
                            <SM.Input 
                                type="tel" 
                                placeholder="전화번호"
                                value={phone} 
                                onChange={handlePhoneChange} 
                            />
                            <SM.PhoneText>실제 사용중인 전화번호를 입력해주세요.</SM.PhoneText>
                            <SM.IdContainer>
                                <SM.IdInput 
                                    type="text" 
                                    placeholder="아이디" 
                                    value={id} 
                                    onChange={handleIdChange} 
                                />
                                <SM.IdButton onClick={handleIdClick}>중복확인</SM.IdButton>
                            </SM.IdContainer>
                            <SM.Input 
                                type="text" 
                                placeholder="비밀번호"
                                value={password} 
                                onChange={handlePasswordChange} 
                            />
                            <SM.Input 
                                type="text" 
                                placeholder="닉네임"
                                value={nickname} 
                                onChange={handleNicknameChange} 
                            />
                        </SM.InputContainer>
                        <SM.InputContainer>
                            <SM.Button onClick={handleNextStep}>다음</SM.Button>
                        </SM.InputContainer>
                    </SM.ModalContent>
                </>
            )}
        </>
    );
};

export default Signup;
