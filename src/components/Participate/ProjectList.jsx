import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { ProjectListRow } from '../../styles/ProjectStyle';

const ProjectList = () => {
	const mockData = [
		{
			projectName: '[사이드 프로젝트] 팀원 모집!',
			title: '프로젝트 구인, 관리 서비스 개발',
			grade: '초보',
			contributrorNum: '6',
			category: '웹/모바일/IT',
			content:
				'안녕하세요. 저희는 Selftrip이라는 여행 경로 추천 서비스를 개발하고 있습니다. 여행지 경로를 만들어주고 customizing...',
			start: '2024-11-10',
			end: '2024-11-23',
			nickname: '일사천리',
			index: 1,
		},
		{
			projectName: '2[사이드 프로젝트] 팀원 모집!',
			title: '프로젝트 구인, 관리 서비스 개발',
			grade: '초보',
			contributrorNum: '6',
			category: '웹/모바일/IT',
			content:
				'안녕하세요. 저희는 Selftrip이라는 여행 경로 추천 서비스를 개발하고 있습니다. 여행지 경로를 만들어주고 customizing...',
			start: '2024-11-10',
			end: '2024-11-23',
			nickname: '일사천리',
			index: 2,
		},
	];
	const [projectData, setProjectData] = useState(mockData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('API_ENDPOINT', {
					headers: {
						Accept: 'application/json',
					},
				});
				const data = await response.json();
				setProjectData(data);
			} catch (error) {
				console.error('Error fetching Project data: ', error);
			}
		};
		fetchData();
	}, []);

	return (
		<ProjectListRow>
			{projectData.map((project, index) => (
				<SingleProject key={index} projectData={project} />
			))}
		</ProjectListRow>
	);
};

export default ProjectList;
