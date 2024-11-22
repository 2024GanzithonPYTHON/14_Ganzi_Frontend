import React, { useState } from 'react';
import * as HHe from '../../styles/HomeHeaderStyle';
import * as LM from "../../styles/Modal/LoginStyle";
import ButtonIcon from '../../assets/icons/Button.svg';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleLoginIdChange = (e) => setLoginId(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleOpenClick = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsSignup(false);
        setStep(1);
    };

    const handleLoginClick = async () => {
        if (!loginId || !password) {
          window.alert('아이디와 비밀번호를 입력해주세요.');
          return;
        }

        console.log("로그인 요청 데이터:", { loginId, password });

        try {
          const response = await axios.post(
            '/api/auth/login', 
            {
              loginId: loginId, 
              password: password
            },
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            }
          );

          console.log("받은 데이터: ", response.data);

          const { accessToken } = response.data;
          if (accessToken) {
            console.log("받은 토큰:", accessToken);
            localStorage.setItem('accessToken', accessToken);
            window.alert('로그인 완료!');
            setIsModalOpen(false);
            navigate('/loginAfterHome'); 
          }
        } catch (error) {
          console.error("로그인 실패:", error);
          if (error.response) {
            console.error("서버 응답:", error.response.data);  
            console.error("상태 코드:", error.response.status);

            if (error.response.status === 401) {
              window.alert('아이디 또는 비밀번호가 잘못되었습니다.');
            } else if (error.response.status === 403) {
              window.alert('접근 권한이 없습니다.');
            } else {
              window.alert('로그인 중 오류가 발생했습니다.');
            }
          } else if (error.code === "ERR_NETWORK") {
            console.error("네트워크 오류 발생");
            window.alert('네트워크 오류가 발생했습니다.');
          }
        }
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
                                        value={loginId} 
                                        onChange={handleLoginIdChange} 
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
