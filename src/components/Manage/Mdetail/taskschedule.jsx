import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './Schedule/calendar';

const Taskschedule = () => {
	const [projectId, setProjectId] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// API 호출 및 projectId 가져오기
		const fetchProjectId = async () => {
			const token = localStorage.getItem('accessToken'); // LocalStorage에서 토큰 가져오기

			if (!token) {
				console.error('토큰이 없습니다. 다시 로그인 해주세요.');
				setLoading(false);
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

				const data = response.data; // JSON 응답 데이터
				console.log('Fetched data:', data);

				// 첫 번째 활성 프로젝트의 projectId를 선택
				if (data.length > 0) {
					setProjectId(data[0].projectId); // 첫 번째 프로젝트 ID 사용
				} else {
					console.error('활성화된 프로젝트가 없습니다.');
				}
			} catch (error) {
				console.error('프로젝트 데이터를 가져오는 중 오류 발생:', error);
			} finally {
				setLoading(false); // 로딩 상태 업데이트
			}
		};

		fetchProjectId();
	}, []);

	if (loading) {
		return <p>Loading...</p>; // 로딩 중 메시지
	}

	if (!projectId) {
		return <p>활성화된 프로젝트가 없습니다.</p>; // 활성 프로젝트가 없을 때 메시지
	}

	return <Calendar projectId={projectId} />;
};

export default Taskschedule;
