import React from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import UserEditIcon from '../../assets/icons/UserEdit.svg';
import PointIcon from '../../assets/icons/Point.svg';
import { useNavigate } from 'react-router-dom';

const UserInformation = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit');
  };

  return (
    <UI.Container>
      <UI.Title>마이페이지</UI.Title>
      <UI.InformationContainer>
        <UI.IconContainer>
          <UI.UserIcon src={ProfileIcon} alt="Profile Icon" />
        </UI.IconContainer>
        <UI.PointAndEditContainer>
          <UI.UserName>일사천리조</UI.UserName>
          <UI.PointContainer>
            <UI.PointIcon src={PointIcon} alt="Point Icon" />
            <UI.UserPoint>보유 포인트 : </UI.UserPoint>
            <UI.PointScore>10</UI.PointScore>
            <UI.PointScore2>P</UI.PointScore2>
          </UI.PointContainer>
        </UI.PointAndEditContainer>
        <UI.UserEditIcon src={UserEditIcon} alt="User Edit Icon" onClick={handleEditClick} />
      </UI.InformationContainer>
    </UI.Container>
  );
};

export default UserInformation;
