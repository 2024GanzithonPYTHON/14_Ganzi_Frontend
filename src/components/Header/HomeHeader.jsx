import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as HHe from '../../styles/HomeHeaderStyle';
import Login from '../../pages/auth/Login';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleAboutClick = () => {
        navigate('/about');
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
                <Login />
            </HHe.NavMenu>
        </HHe.Header>
    );
}

export default HomeHeader;
