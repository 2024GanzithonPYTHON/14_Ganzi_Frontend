import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LM from "../../styles/Modal/LoginStyle";
import * as UC from "../../styles/user/UserCategory";
import ButtonIcon from '../../assets/icons/Button.svg';
import Withdraw from '../../pages/auth/Withdraw';

const UserWithdraw = () => {
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

    return (
        <>
            <UC.Container>
                <UC.TitleContainer>
                    <UC.WithdrawTitle onClick={handleButtonClick}>회원탈퇴</UC.WithdrawTitle>
                </UC.TitleContainer>
            </UC.Container>

            {isModalOpen && (
                <LM.ModalOverlay>
                    <LM.ModalContent $isWithdraw={!isWithdraw} $isSmall={step === 3}>
                        <LM.TitleContainer>
                            <LM.TextTitle>
                                <LM.ModalTitle>{isWithdraw ? '회원탈퇴' : '로그인'}</LM.ModalTitle>
                                <LM.SubTitle>{isWithdraw ? `${step}/3` : `1/3`}</LM.SubTitle>
                            </LM.TextTitle>
                            <LM.CloseButton onClick={handleCloseModal}>
                                <LM.Img src={ButtonIcon} alt="Button Icon" />
                            </LM.CloseButton>
                        </LM.TitleContainer>

                        {isWithdraw ? (
                            <Withdraw step={step} setStep={setStep} />
                        ) : (
                            <LM.NButton onClick={() => navigate('/loginAfterHome')}>다음으로</LM.NButton>
                        )}
                    </LM.ModalContent>
                </LM.ModalOverlay>
            )}
        </>
    );
};

export default UserWithdraw;
