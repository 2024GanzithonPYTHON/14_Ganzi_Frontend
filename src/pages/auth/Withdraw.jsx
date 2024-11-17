import React, { useState } from 'react';
import * as SM from "../../styles/Modal/SignupStyle";
import CategorySignup from './CategorySignup';
import WithdrawConfirm from './WithdrawConfirm';
import * as C from '../../styles/CreatContentsStyle';

const Withdraw = ({ handleClose, step, setStep }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

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
                <WithdrawConfirm handleClose={handleClose} />
            ) : (
                <>
                 <C.WithdrawRadioGroup>
                    <label>
                    <input type="radio" name="type" value="초급" />
                        다른 계정이 있음
                    </label>
                    <label>
                    <input type="radio" name="type" value="중급" />
                        더이상 사용하지 않음
                    </label>
                    <label>
                    <input type="radio" name="type" value="고급" />
                        혜택이 별로 없음
                    </label>
                    <label>
                    <input type="radio" name="type" value="고급" />
                        개인정보를 보호하고 싶음
                    </label>
                    <label>
                    <input type="radio" name="type" value="고급" />
                        모르는 사람의 연락을 받고 싶지 않음
                    </label>
                    <label>
                    <input type="radio" name="type" value="고급" />
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
