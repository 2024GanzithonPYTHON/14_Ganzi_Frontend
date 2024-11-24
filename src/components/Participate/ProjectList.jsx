import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
import { ProjectListRow } from '../../styles/Partici_Mang/ProjectStyles';

const ProjectList = ({ searchTerm, category }) => {
	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					//'https://run.mocky.io/v3/f0f0261a-e077-4c98-95b0-b1ad96153cf7',
					'https://prolink123.store/api/all/project',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);
				const data = await response.json();
				if (Array.isArray(data)) {
					setProjectData(data);
				} else if (data.projectData && Array.isArray(data.projectData)) {
					setProjectData(data.projectData);
				} else {
					console.error('Unexpected data format:', data);
				}
			} catch (error) {
				console.error('Error fetching Project data: ', error);
			}
		};
		fetchData();
	}, []);

	// 검색어와 카테고리 필터링
	const filteredProjects = projectData.filter((project) => {
		const matchesSearchTerm =
			project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			category === '카테고리별' || project.category === category;

		return matchesSearchTerm && matchesCategory;
	});

	return (
		<ProjectListRow>
			{filteredProjects.length > 0 ? (
				filteredProjects.map((project, index) => (
					<SingleProject key={index} projectData={project} />
				))
			) : (
				<p>검색 결과가 없습니다.</p>
			)}
		</ProjectListRow>
	);
};

export default ProjectList;
