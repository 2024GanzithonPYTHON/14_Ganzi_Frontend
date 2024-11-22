import React, { useState } from 'react';
import AiList from './AiList';
import { Div4, FloatingIcon } from '../../../styles/Partici_Mang/AIstyles';
import GPTICON from '../Mpics/openai_flaoting_button.png';
import GptModal from '../../../pages/manage/GptModal';

const AIMeeting = () => {
	const meetingData = [
		{
			meetingId: 1,
			userId: 1,
			projectId: 1,
			title: '아이디어 회의',
			content: '오늘 아이디어 회의는 어떻게 진행이 됬냐면...',
			gptComment: 'GPT가 오늘의 회의를 요약했습니다.',
			meetingDate: '2024.12.23',
		},
		{
			meetingId: 2,
			userId: 1,
			projectId: 1,
			title: '기능 회의',
			content: '오늘 기능 회의는 어떻게 진행이 됬냐면...',
			gptComment: 'GPT가 오늘의 회의를 요약했습니다.',
			meetingDate: '2024.12.23',
		},
		{
			meetingId: 3,
			userId: 1,
			projectId: 1,
			title: '기능 명세서',
			content: '오늘 기능 명세서는 어떻게 작성하려고 하냐면...',
			gptComment: 'GPT가 오늘의 회의를 요약했습니다.',
			meetingDate: '2024.12.23',
		},
		{
			meetingId: 4,
			userId: 1,
			projectId: 1,
			title: 'ERD',
			content: 'ERD의 내용은...',
			gptComment: 'GPT가 오늘의 회의를 요약했습니다.',
			meetingDate: '2024.12.23',
		},
	];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handelOpenModal = () => {
		setIsModalOpen(true);
	};
	const handelCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Div4>
				<AiList meetingData={meetingData} />
			</Div4>
			{/*<GptComment>{meetingId.gptComment}</GptComment>*/}
			<FloatingIcon
				src={GPTICON}
				alt='GPT_floating_Icon'
				onClick={handelOpenModal}
			/>
			{isModalOpen && <GptModal onClose={handelCloseModal} />}
		</>
	);
};

export default AIMeeting;
