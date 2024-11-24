import React, { useState } from 'react';
import axios from 'axios';
import * as SM from "../../styles/Modal/SignupStyle";

const Signup = ({ handleClose, setStep }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [isIdAvailable, setIsIdAvailable] = useState(false);
    const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleIdChange = (e) => {
        setId(e.target.value);
        setIsIdAvailable(false);  
    };
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setIsNicknameAvailable(false);  
    };

    const validateForm = () => {
        if (!name || !phone || !id || !password || !nickname) {
            alert("모든 필드를 채워주세요.");
            return false;
        }
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(phone)) {
            alert("유효한 전화번호를 입력해주세요.");
            return false;
        }
        if (password.length < 8) {
            alert("비밀번호는 8자 이상이어야 합니다.");
            return false;
        }
        return true;
    };

    const handleNextStep = async () => {
        if (!isIdAvailable) {
            alert("아이디 중복 확인을 해주세요.");
            return;
        }
        if (!isNicknameAvailable) {
            alert("닉네임 중복 확인을 해주세요.");
            return;
        }

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(`/api/auth/signup`, {
                loginId: id,
                password: password,
                userName: name,
                nickName: nickname,
                number: phone,
                category: [],  // 빈 배열로 카테고리 없이 요청
            });

            if (response.status === 200) {
                console.log("회원가입 성공", response.data);
                alert("회원가입이 완료되었습니다.");
                handleClose();  // 모달 닫기
            }
        } catch (error) {
            console.error("회원가입 실패", error);
            alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
        }
    };

    const handleIdClick = async () => {
        try {
            const response = await axios.post(`/api/user/check/Id`, {
                sentence: id,
            });
            if (response.status === 200) {
                setIsIdAvailable(true);
                alert("사용 가능한 아이디입니다.");
            }
        } catch (error) {
            setIsIdAvailable(false);
            alert("이미 사용 중인 아이디입니다.");
        }
    };

    const handleNicknameClick = async () => {
        try {
            const response = await axios.post(`/api/user/check/name`, {
                sentence: nickname,
            });
            if (response.status === 200) {
                setIsNicknameAvailable(true);
                alert("사용 가능한 닉네임입니다.");
            }
        } catch (error) {
            setIsNicknameAvailable(false);
            alert("이미 사용 중인 닉네임입니다.");
        }
    };

    return (
        <SM.ModalContent $isSignup={true}>
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
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <SM.NicknameContainer>
                    <SM.Input
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                    <SM.NicknameButton onClick={handleNicknameClick}>중복확인</SM.NicknameButton>
                </SM.NicknameContainer>
            </SM.InputContainer>
            <SM.Button onClick={handleNextStep}>가입하기</SM.Button>
        </SM.ModalContent>
    );
};

export default Signup;
