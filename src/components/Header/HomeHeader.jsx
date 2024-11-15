import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as HHe from '../../styles/HomeHeaderStyle';

const HomeHeader = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <HHe.Header>
            <HHe.Logo onClick={handleHomeClick}>
                ProLink
            </HHe.Logo>
            <HHe.NavMenu>
            <HHe.Tab onClick={handleAboutClick}>
                ABOUT
            </HHe.Tab>
            <HHe.Tab onClick={handleLoginClick}>
                로그인/회원가입
            </HHe.Tab>
            </HHe.NavMenu>
        </HHe.Header>
    );
}

export default HomeHeader;
