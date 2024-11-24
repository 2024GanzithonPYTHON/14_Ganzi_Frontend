import React, { useState, useEffect } from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import UserEditIcon from '../../assets/icons/UserEdit.svg';
import PointIcon from '../../assets/icons/Point.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserInformation = () => {
  const [userData, setUserData] = useState(null); 
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data); 
      } catch (error) {
        console.error('에러 메시지:', error);
      }
    };

    fetchUserData();
  }, []); 

  const handleEditClick = () => {
    navigate('/edit');
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <UI.Container>
      <UI.Title>마이페이지</UI.Title>
      <UI.InformationContainer>
        <UI.IconContainer>
          <UI.UserIcon src={ProfileIcon} alt="Profile Icon" />
        </UI.IconContainer>
        <UI.PointAndEditContainer>
          <UI.UserName>{userData.nickName}</UI.UserName> 
          <UI.PointContainer>
            <UI.PointIcon src={PointIcon} alt="Point Icon" />
            <UI.UserPoint>보유 포인트 : </UI.UserPoint>
            <UI.PointScore>{userData.point}</UI.PointScore>
            <UI.PointScore2>P</UI.PointScore2>
          </UI.PointContainer>
        </UI.PointAndEditContainer>
        <UI.UserEditIcon src={UserEditIcon} alt="User Edit Icon" onClick={handleEditClick} />
      </UI.InformationContainer>
    </UI.Container>
  );
};

export default UserInformation;
