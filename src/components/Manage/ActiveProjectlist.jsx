import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ManageListRow } from '../../styles/Partici_Mang/ManageStyles';
import MSingleProject from './MSingleProject';

const ActiveProjectlist = () => {
	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('accessToken'); // LocalStorage에서 토큰 가져오기

			if (!token) {
				console.error('토큰이 없습니다. 다시 로그인 해주세요.');
				return;
			}

			try {
				const baseURL = 'https://prolink123.store';
				const response = await axios.get(`${baseURL}/api/project/active`, {
					headers: {
						Authorization: `Bearer ${token}`, // LocalStorage에서 가져온 토큰 사용
						'Content-Type': 'application/json',
					},
				});

				console.log('받은 데이터:', response.data);

				// 데이터 상태 업데이트
				if (Array.isArray(response.data)) {
					setProjectData(response.data);
				} else {
					console.error('Unexpected data format:', response.data);
				}
			} catch (error) {
				console.error('Error fetching Project data: ', error);
			}
		};

		fetchData();
	}, []);

	return (
		<ManageListRow>
			{projectData.map((project) => (
				<MSingleProject key={project.projectId} projectData={project} />
			))}
		</ManageListRow>
	);
};

export default ActiveProjectlist;
