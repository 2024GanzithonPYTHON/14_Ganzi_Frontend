import React, { useState } from 'react';
import * as HHe from '../../styles/HomeHeaderStyle';
import * as LM from "../../styles/Modal/LoginStyle";
import ButtonIcon from '../../assets/icons/Button.svg';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [step, setStep] = useState(1); 
    const navigate = useNavigate();

    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleOpenClick = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsSignup(false);
        setStep(1);
    };

    const handleLoginClick = () => {
        window.alert('로그인 완료!');
        navigate('/loginAfterHome');
    };

    const handleSignupClick = () => setIsSignup(true);

    return (
        <>
            <HHe.Tab onClick={handleOpenClick}>로그인/회원가입</HHe.Tab>

            {isModalOpen && (
                <LM.ModalOverlay>
                    <LM.ModalContent $isSignup={!isSignup}>
                        <LM.TitleContainer>
                            <LM.TextTitle>
                                <LM.ModalTitle>{isSignup ? '회원가입' : '로그인'}</LM.ModalTitle>
                                <LM.SubTitle>{isSignup ? `${step}/2` : ''}</LM.SubTitle>
                            </LM.TextTitle>
                            <LM.CloseButton onClick={handleCloseModal}>
                                <LM.Img src={ButtonIcon} alt="Button Icon" />
                            </LM.CloseButton>
                        </LM.TitleContainer>

                        {!isSignup ? (
                            <>
                                <LM.InputContainer>
                                    <LM.Input 
                                        type="text" 
                                        placeholder="아이디" 
                                        value={id} 
                                        onChange={handleIdChange} 
                                    />
                                    <LM.Input 
                                        type="password" 
                                        placeholder="비밀번호"
                                        value={password} 
                                        onChange={handlePasswordChange} 
                                    />
                                </LM.InputContainer>
                                <LM.TextContainer>
                                    <LM.Text>계정이 필요한가요?</LM.Text>
                                    <LM.SignupText onClick={handleSignupClick}>회원가입하기</LM.SignupText>
                                </LM.TextContainer>
                                <LM.Button onClick={handleLoginClick}>로그인</LM.Button>
                            </>
                        ) : (
                            <Signup handleClose={handleCloseModal} step={step} setStep={setStep} />
                        )}
                    </LM.ModalContent>
                </LM.ModalOverlay>
            )}
        </>
    );
};

export default Login;
