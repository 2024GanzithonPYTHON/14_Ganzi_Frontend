import React, { useState } from 'react';
import AiList from './AiList';
import { Div4, FloatingIcon } from '../../../styles/Partici_Mang/AIstyles';
import GPTICON from '../Mpics/openai_flaoting_button.png';
import GptModal from '../../../pages/manage/GptModal';

const AIMeeting = () => {
	const meetingData = [
		{
			userId: 1,
			projectId: 1,
			content:
				'안녕하세요 안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
			gptComment:
				'글 내용이 너무 짧아서 어떤 내용인지 파악하기 어려워요. 좀 더 긴 글을 입력해주시면 내용을 요약해드릴게요.',
			summarizeTime: '2024-11-21T08:00:57.982999786',
		},
		{
			userId: 2,
			projectId: 1,
			content:
				'2번쨰 회의 감사합니다 안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
			gptComment:
				'글 내용이 너무 짧아서 어떤 내용인지 파악하기 어려워요. 좀 더 긴 글을 입력해주시면 내용을 요약해드릴게요.',
			summarizeTime: '2024-11-21T08:00:57.982999786',
		},
		{
			userId: 3,
			projectId: 1,
			content:
				'3번쨰 회의 안녕하세요 안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
			gptComment:
				'글 내용이 너무 짧아서 어떤 내용인지 파악하기 어려워요. 좀 더 긴 글을 입력해주시면 내용을 요약해드릴게요.',
			summarizeTime: '2024-11-21T08:00:57.982999786',
		},
		{
			userId: 4,
			projectId: 1,
			content: '4번쨰 정말 안녕하세요안녕하세요',
			gptComment:
				'글 내용이 너무 짧아서 어떤 내용인지 파악하기 어려워요. 좀 더 긴 글을 입력해주시면 내용을 요약해드릴게요.',
			summarizeTime: '2024-11-21T08:00:57.982999786',
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
