import React from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import { useNavigate } from 'react-router-dom';
import * as SM from "../../styles/Modal/SignupStyle";
import { useState } from 'react';


const UserEdit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e) => setNickname(e.target.value);
  

  const handleEditClick = () => {
    navigate('/edit');
  };

  const handleNicknameClick = () => alert('사용 가능한 닉네임입니다.');
  

  return (
    <>
    <UI.Container>
      <UI.Title>마이페이지</UI.Title>
      <UI.InformationContainer>
        <UI.EditIconContainer>
          <UI.UserIcon src={ProfileIcon} alt="Profile Icon" />
        </UI.EditIconContainer>
        <SM.IdEditContainer>
        <SM.IdEditInput 
          type="text" 
          placeholder="일사천리" 
          value={nickname} 
          onChange={handleNicknameChange} 
        />
        <SM.IdEditButton onClick={handleNicknameClick}>중복 확인</SM.IdEditButton>
        </SM.IdEditContainer>
      </UI.InformationContainer>
    </UI.Container>
    </>
  );
};

export default UserEdit;
