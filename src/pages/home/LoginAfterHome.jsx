import React from 'react';
import * as H from '../../styles/HomeStyle';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import Button from '../../components/button/Button';
import HomeIcon from "../../assets/icons/HomeIcon.svg";

const LoginAfterHome = ({ }) => {


  return (
    <>
      <H.Home>
          <LoginAfterHeader />
          <H.RowBox>
          <H.IconBox>
            <H.Icon src={HomeIcon} alt="Home Icon" />
          </H.IconBox>
          <H.ContentBox>
            <H.Content>ProLink</H.Content>
            <H.Introduction>프로젝트와 팀을 이어주는 “프로링크”</H.Introduction>
          </H.ContentBox>
        </H.RowBox>
          <H.ButtonBox>
          <Button />
        </H.ButtonBox>
      </H.Home>
    </>
  )
}

export default LoginAfterHome;