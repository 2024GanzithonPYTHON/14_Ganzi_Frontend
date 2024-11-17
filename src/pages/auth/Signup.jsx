import React, { useState } from 'react';
import * as SM from "../../styles/Modal/SignupStyle";
import CategorySignup from './CategorySignup';

const Signup = ({ handleClose, step, setStep }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNicknameChange = (e) => setNickname(e.target.value);

    const handleNextStep = () => {
        if (step === 1) setStep(2); 
    };
    

    const handleIdClick = () => alert('사용 가능한 아이디입니다.');

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
