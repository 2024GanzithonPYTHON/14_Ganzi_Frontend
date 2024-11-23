// AiMeeting.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AiList from './AiList';

const AiMeeting = () => {
	const [projectData, setProjectData] = useState({
		projectName: '',
		title: '',
		summaries: [],
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAiSummaries = async () => {
			try {
				const response = await axios.get('/api/project/active', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						'Content-Type': 'application/json',
					},
				});

				const apiData = response.data;
				console.log('받은 데이터:', apiData);

				// 프로젝트 데이터 구조화
				setProjectData({
					projectName: apiData.projectName || '',
					title: apiData.title || '',
					summaries: apiData.userProjectResponses
						? apiData.userProjectResponses.map((item) => ({
								message: item.message, // 주제
								result: item.result, // 요약
						  }))
						: [],
				});
			} catch (error) {
				console.error('Error fetching AI summaries:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchAiSummaries();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			{projectData.projectName && <h1>프로젝트: {projectData.projectName}</h1>}
			{projectData.title && <h2>프로젝트 제목: {projectData.title}</h2>}
			<AiList aiSummaries={projectData.summaries} />
		</div>
	);
};

export default AiMeeting;
