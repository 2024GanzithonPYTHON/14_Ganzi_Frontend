import React from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import UserEditIcon from '../..//assets/icons/UserEdit.svg';


const UserInformation = ({ }) => {


  return (
    <>
      <UI.Container>
        <UI.Title>마이페이지</UI.Title>
        <UI.IconContainer>
          <UI.UserIcon src={ProfileIcon} alt="Profile Icon" />
          <UI.UserEditIcon src={UserEditIcon} alt="UserEdit Icon" />
        </UI.IconContainer>
        <UI.TemperatureContainer>
            <UI.Temperature>
              <UI.Present></UI.Present>
            </UI.Temperature>
          </UI.TemperatureContainer>
      </UI.Container>
    </>
  )
}

export default UserInformation;