import React, { useState } from 'react';
import Searchbar from '../../components/SearchField/Searchbar';
import ProjectList from '../../components/Participate/ProjectList';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { Titlecontent } from '../../styles/ContentStyles';

const Participate = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [category, setCategory] = useState('카테고리별'); // 초기값: 전체 검색

	return (
		<>
			<LoginAfterHeader />
			<Titlecontent>프로젝트 참여하기</Titlecontent>
			<Searchbar setSearchTerm={setSearchTerm} setCategory={setCategory} />
			<ProjectList searchTerm={searchTerm} category={category} />
		</>
	);
};

export default Participate;
