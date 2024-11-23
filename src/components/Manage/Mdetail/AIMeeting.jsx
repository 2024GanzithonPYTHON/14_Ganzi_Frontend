import React, { useEffect, useState } from 'react';
import AiList from './AiList';
import { Div4, FloatingIcon } from '../../../styles/Partici_Mang/AIstyles';
import GPTICON from '../Mpics/openai_flaoting_button.png';
import GptModal from '../../../pages/manage/GptModal';
import axios from 'axios';

const AIMeeting = ({ projectId }) => {
	const [meetingData, setMeetingData] = useState([]); // 회의 데이터 상태
	const [isModalOpen, setIsModalOpen] = useState(false);

	// 서버에서 회의 데이터를 가져오는 함수
	const fetchMeetingData = async () => {
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

	// 모달에서 데이터를 POST한 후 리스트 갱신
	const handleDataUpdate = () => {
		fetchMeetingData(); // 새 데이터를 가져옴
	};

	// 초기 데이터 로드
	useEffect(() => {
		fetchMeetingData();
	}, [projectId]);

	const handelOpenModal = () => {
		setIsModalOpen(true);
	};

	const handelCloseModal = () => {
		setIsModalOpen(false);
	};

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
