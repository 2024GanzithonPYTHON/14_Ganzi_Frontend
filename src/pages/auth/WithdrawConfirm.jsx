import React, { useState } from 'react';
import * as CS from "../../styles/Modal/CategorySignupStyle";
import * as SM from "../../styles/Modal/SignupStyle";
import WithdrawSuccess from './WithdrawSuccess';

const WithdrawConfirm = ({ step, setStep }) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleNextStep = () => {
        if (step === 2) setStep(3);
    };

    return (
        <>
            {step === 3 ? (
                <WithdrawSuccess />
            ) : (
                <>
                    <CS.TextContainer>
                        <CS.WithdrawText>
                            회원 탈퇴를 위해 비밀번호를 입력해 주세요.
                        </CS.WithdrawText>
                    </CS.TextContainer>
                    <SM.PInputContainer>
                        <SM.PInput
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </SM.PInputContainer>
                    <CS.NButton onClick={handleNextStep}>다음으로</CS.NButton>
                </>
            )}
        </>
    );
};

export default WithdrawConfirm;
