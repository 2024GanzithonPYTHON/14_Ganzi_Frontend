import React from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { useLocation, useParams } from 'react-router-dom';

const DetailRecruit = () => {
	const { projectID } = useParams();
	const location = useLocation();
	const projectData = location.state?.projectData;

	return (
		<>
			<LoginAfterHeader />
			<div>
				<h1>PROJECT PAGE</h1>
				<p>작성자: {projectData.nickname}</p>
				<p>projectID: {projectID}</p>
			</div>
		</>
	);
};

export default DetailRecruit;
