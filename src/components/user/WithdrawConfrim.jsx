import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LM from "../../styles/Modal/LoginStyle";
import * as UC from "../../styles/user/UserCategory";
import ButtonIcon from '../../assets/icons/Button.svg';
import Withdraw from '../../pages/auth//Withdraw';

const WithdrawConfrim = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWithdraw, setIsWithdraw] = useState(false);
    const [step, setStep] = useState(1); 

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsWithdraw(false);
        setStep(1);
    };

    const handleButtonClick = () => {
        setIsModalOpen(true); 
        setIsWithdraw(true); 
    };

    const handleLoginClick = () => {
        window.alert('로그인 완료!'); 
        navigate('/loginAfterHome');
    };

    return (
        <>
            <UC.SubTitle>탈퇴하시겠습니까?</UC.SubTitle>
            <UC.WithdrawButton onClick={handleButtonClick}>계속</UC.WithdrawButton>
        
            {isModalOpen && (
                <LM.ModalOverlay>
                    <LM.ModalContent $isWithdraw={!isWithdraw}>
                        <LM.TitleContainer>
                            <LM.TextTitle>
                                <LM.ModalTitle>{isWithdraw ? '회원탈퇴' : '회원탈퇴'}</LM.ModalTitle>
                                <LM.SubTitle>{isWithdraw ? `${step}/2` : ''}</LM.SubTitle>
                            </LM.TextTitle>
                            <LM.CloseButton onClick={handleCloseModal}>
                                <LM.Img src={ButtonIcon} alt="Button Icon" />
                            </LM.CloseButton>
                        </LM.TitleContainer>

                        {!isWithdraw ? (
                            <>
                                <LM.Button onClick={handleLoginClick}>다음으로</LM.Button>
                            </>
                        ) : (
                            <Withdraw handleClose={handleCloseModal} step={step} setStep={setStep} />
                        )}
                    </LM.ModalContent>
                </LM.ModalOverlay>
            )}
        </>
    );
};


export default WithdrawConfrim;
