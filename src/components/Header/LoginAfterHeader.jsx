import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as LAHe from '../../styles/LoginAfterHeaderStyle';

const LoginAfterHeader = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('');

	useEffect(() => {
		setActiveTab(location.pathname);
	}, [location]);

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
			<LAHe.Logo onClick={handleHomeClick}>ProLink</LAHe.Logo>
			<LAHe.NavMenu>
				<LAHe.Tab onClick={handleCreateClick} $active={activeTab === '/create'}>
					프로젝트 생성
				</LAHe.Tab>
				<LAHe.Tab
					onClick={handleParticipateClick}
					$active={activeTab === '/participate'}
				>
					프로젝트 참여
				</LAHe.Tab>
				<LAHe.Tab onClick={handleManageClick} $active={activeTab === '/manage'}>
					프로젝트 관리
				</LAHe.Tab>
				<LAHe.Tab onClick={handleMyPageClick} $active={activeTab === '/mypage'}>
					마이페이지
				</LAHe.Tab>
				<LAHe.Tab2 onClick={handleLogoutClick}>로그아웃</LAHe.Tab2>
			</LAHe.NavMenu>
		</LAHe.Header>
	);
};

export default LoginAfterHeader;
