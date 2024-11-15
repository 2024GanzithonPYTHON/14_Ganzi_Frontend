import React from 'react';
import { Titlecontent } from '../../styles/ContentStyles';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import Searchbar from '../../components/SearchField/Searchbar';
import ProjectList from '../../components/Participate/ProjectList';

const Participate = ({ none }) => {
	return (
		<>
			<LoginAfterHeader />
			<Titlecontent>프로젝트 참여하기</Titlecontent>
			<Searchbar />

			<ProjectList />
		</>
	);
};

export default Participate;
