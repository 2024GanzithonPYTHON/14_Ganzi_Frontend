import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as LAHe from '../../styles/LoginAfterHeaderStyle';

const LoginAfterHeader = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleCreateClick = () => {
        navigate('/create');
    };

    const handleParticipateClick = () => {
        navigate('/participate');
    };

    const handleManageClick = () => {
        navigate('/manage');
    };

    const handleMyPageClick = () => {
        navigate('/mypage');
    };

    const handleLogoutClick = () => {
        navigate('/logout');
    };

    return (
        <LAHe.Header>
            <LAHe.Logo onClick={handleHomeClick}>
                ProLink
            </LAHe.Logo>
            <LAHe.Tab onClick={handleCreateClick}>
                프로젝트 생성
            </LAHe.Tab>
            <LAHe.Tab onClick={handleParticipateClick}>
                프로젝트 참여
            </LAHe.Tab>
            <LAHe.Tab onClick={handleManageClick}>
                프로젝트 관리
            </LAHe.Tab>
            <LAHe.Tab onClick={handleMyPageClick}>
                마이페이지
            </LAHe.Tab>
            <LAHe.Tab2 onClick={handleLogoutClick}>
                로그아웃
            </LAHe.Tab2>
        </LAHe.Header>
    );
}

export default LoginAfterHeader;
