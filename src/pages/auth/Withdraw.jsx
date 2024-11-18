import React from 'react';
import * as SM from "../../styles/Modal/SignupStyle";
import WithdrawConfirm from './WithdrawConfirm';
import * as C from '../../styles/CreatContentsStyle';

const Withdraw = ({ step, setStep }) => {
    const handleNextStep = () => {
        if (step === 1) setStep(2); // 다음 단계로 진행
    };

    return (
        <>
            {step === 2 || step === 3 ? (
                <WithdrawConfirm step={step} setStep={setStep} />
            ) : (
                <>
                    <C.WithdrawRadioGroup>
                        <label>
                            <input type="radio" name="reason" value="다른 계정이 있음" />
                            다른 계정이 있음
                        </label>
                        <label>
                            <input type="radio" name="reason" value="더이상 사용하지 않음" />
                            더이상 사용하지 않음
                        </label>
                        <label>
                            <input type="radio" name="reason" value="혜택이 별로 없음" />
                            혜택이 별로 없음
                        </label>
                        <label>
                            <input type="radio" name="reason" value="개인정보를 보호하고 싶음" />
                            개인정보를 보호하고 싶음
                        </label>
                        <label>
                            <input type="radio" name="reason" value="모르는 사람의 연락을 받고 싶지 않음" />
                            모르는 사람의 연락을 받고 싶지 않음
                        </label>
                        <label>
                            <input type="radio" name="reason" value="기타" />
                            기타
                        </label>
                    </C.WithdrawRadioGroup>
                    <SM.InputContainer>
                        <SM.NButton onClick={handleNextStep}>다음으로</SM.NButton>
                    </SM.InputContainer>
                </>
            )}
        </>
    );
};

export default Withdraw;
