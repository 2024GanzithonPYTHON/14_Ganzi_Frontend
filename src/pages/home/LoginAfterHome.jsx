import React from 'react';
import * as H from '../../styles/HomeStyle';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import Button from '../../components/button/Button';

const LoginAfterHome = ({ }) => {


  return (
    <>
      <H.Home>
          <LoginAfterHeader />
          <H.RowBox>
            <H.Content>ProLink</H.Content>
            <Button/>
          </H.RowBox>
      </H.Home>
    </>
  )
}

export default LoginAfterHome;