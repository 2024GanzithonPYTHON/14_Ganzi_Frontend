import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as HHe from '../../styles/HomeHeaderStyle';
import Login from '../../pages/auth/Login';

const HomeHeader = ({ onAboutClick }) => {
    const navigate = useNavigate();
  
    const handleHomeClick = () => {
      navigate('/');
    };
  
    return (
      <HHe.Header>
        <HHe.Logo onClick={handleHomeClick}>ProLink</HHe.Logo>
        <HHe.NavMenu>
          <HHe.Tab onClick={onAboutClick}>ABOUT</HHe.Tab>
          <Login />
        </HHe.NavMenu>
      </HHe.Header>
    );
  };
  

export default HomeHeader;