import React, { useEffect, useState } from 'react';
import AiList from './AiList';
import { Div4, FloatingIcon } from '../../../styles/Partici_Mang/AIstyles';
import GPTICON from '../Mpics/openai_flaoting_button.png';
import GptModal from '../../../pages/manage/GptModal';
import axios from 'axios';

const AIMeeting = () => {
	const [projectId, setProjectId] = useState(null); // 프로젝트 ID 상태
	const [meetingData, setMeetingData] = useState([]); // 회의 데이터 상태
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loading, setLoading] = useState(true); // 로딩 상태

	// 서버에서 projectId 가져오기
	const fetchProjectId = async () => {
		const token = localStorage.getItem('accessToken'); // LocalStorage에서 토큰 가져오기
		if (!token) {
			console.error('토큰이 없습니다. 다시 로그인 해주세요.');
			setLoading(false);
			return;
		}

		try {
			const response = await axios.get(
				`https://prolink123.store/api/project/active`,
				{
					headers: {
						Authorization: `Bearer ${token}`, // LocalStorage에서 가져온 토큰 사용
						'Content-Type': 'application/json',
					},
				}
			);

			const data = response.data; // JSON 응답 데이터
			console.log('프로젝트 데이터:', data);

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

	// 서버에서 회의 데이터를 가져오는 함수
	const fetchMeetingData = async () => {
		if (!projectId) return; // projectId가 없으면 실행하지 않음

		try {
			const response = await axios.get(`/api/project/${projectId}/meeting`, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log('받은 데이터:', response.data);
			setMeetingData(response.data); // 서버에서 가져온 데이터 설정
		} catch (error) {
			console.error('Error fetching meeting data:', error);
		}
	};

	// 초기 데이터 로드
	useEffect(() => {
		fetchProjectId(); // projectId를 가져옴
	}, []);

	useEffect(() => {
		if (projectId) {
			fetchMeetingData(); // projectId가 설정된 후 회의 데이터 가져옴
		}
	}, [projectId]);

	// 모달에서 데이터를 POST한 후 리스트 갱신
	const handleDataUpdate = () => {
		fetchMeetingData(); // 새 데이터를 가져옴
	};

	const handelOpenModal = () => {
		setIsModalOpen(true);
	};

	const handelCloseModal = () => {
		setIsModalOpen(false);
	};

	if (loading) {
		return <p>Loading...</p>; // 로딩 중 메시지
	}

	if (!projectId) {
		return <p>활성화된 프로젝트가 없습니다.</p>; // 활성 프로젝트가 없을 때 메시지
	}

	return (
		<>
			<Div4>
				{/* AiList에 meetingData 전달 */}
				<AiList meetingData={meetingData} />
			</Div4>

			{/* 플로팅 버튼 */}
			<FloatingIcon
				src={GPTICON}
				alt='GPT_floating_Icon'
				onClick={handelOpenModal}
			/>

			{/* 모달 */}
			{isModalOpen && (
				<GptModal
					onClose={handelCloseModal}
					projectId={projectId}
					onDataUpdate={handleDataUpdate} // 데이터 업데이트 핸들러 전달
				/>
			)}
		</>
	);
};

export default AIMeeting;
