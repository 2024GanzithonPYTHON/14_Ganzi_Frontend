import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import LoginAfterHome from './pages/home/LoginAfterHome';
import Create from './pages/create/Create';
import Participate from './pages/participate/Participate';
import Manage from './pages/manage/Manage';
import MyPage from './pages/mypage/MyPage';
import Logout from './pages/auth/Logout';
import DetailRecruit from './pages/participate/DetailRecruit';
import Signup from './pages/auth/Signup';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/loginAfterHome' element={<LoginAfterHome />} />
			<Route path='/login' element={<Login />} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/create' element={<Create />} />
			<Route path='/participate' element={<Participate />} />
			<Route path='/participate/:projectID' element={<DetailRecruit />} />
			<Route path='/manage' element={<Manage />} />
			<Route path='/mypage' element={<MyPage />} />
		</Routes>
	);
};

export default AppRouter;
