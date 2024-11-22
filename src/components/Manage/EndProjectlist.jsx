import React, { useEffect, useState } from 'react';

import { ManageListRow } from '../../styles/Partici_Mang/ManageStyles';
import MSingleProject from './MSingleProject';

const EndProjectlist = () => {
	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://run.mocky.io/v3/4bf56b00-4f6b-4de1-9410-ae3936a4984d',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);
				const data = await response.json();
				console.log('받은 데이터:', data);
				//데이터 구조 확인
				// 데이터 형식에 따른 조건 확인
				// 데이터 형식에 따른 조건 확인
				if (Array.isArray(data)) {
					// data 자체가 배열일 경우
					setProjectData(data);
				} else if (data.projectData && Array.isArray(data.projectData)) {
					// projectData 속성이 배열일 경우
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

	return (
		<ManageListRow>
			{projectData.map((project, index) => (
				<MSingleProject key={index} projectData={project} />
			))}
		</ManageListRow>
	);
};

export default EndProjectlist;