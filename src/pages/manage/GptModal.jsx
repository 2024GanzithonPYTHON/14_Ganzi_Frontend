import React, { useState } from 'react';
import {
	ModalForm,
	ModalOverlay,
	ModalBodyTitle,
	GptQuitButton,
	GptFormCompntText,
	GptinputChatText,
	SendingButton,
	ChatInput,
} from '../../styles/Partici_Mang/AIstyles';
import axios from 'axios';
import ButtonIcon from '../../assets/icons/Button.svg';

const GptModal = ({ onClose, projectId }) => {
	const [inputText, setInputText] = useState('주제: '); // 기본값 설정
	const [chatResult, setChatResult] = useState(''); // 서버 응답 데이터
	const [data, setData] = useState([]); // 전달된 값을 저장할 데이터 상태

	const handleInputChange = (event) => {
		const value = event.target.value;

		// 입력값이 "주제: "로 시작하지 않으면 다시 "주제: "로 설정
		setInputText(value.startsWith('주제: ') ? value : '주제: ');
	};

	const handleSendClick = async () => {
		// 입력값 검사
		if (inputText.trim() === '주제:') {
			alert('내용을 입력해주세요.');
			return;
		}

		try {
			// API 요청 보내기
			const response = await axios.post(
				`/api/project/${projectId}/meeting/chat`,
				{
					message: inputText.replace('주제: ', ''), // "주제: "를 제외하고 전송
				}
			);

			console.log('서버 응답:', response.data);

			// 응답 데이터 저장 및 표시
			const result = response.data.result || '결과 없음';
			setChatResult(result);
			setData((prevData) => [...prevData, { input: inputText, result }]); // 전달된 값 저장
			setInputText('주제: '); // 입력창 초기화

			// 모달창 자동 닫기
			alert('전송 완료!');
			onClose();
		} catch (error) {
			console.error('Error sending chat:', error);
			alert('채팅 전송에 실패했습니다.');
			onClose();
		}
	};

	return (
		<ModalOverlay>
			<ModalForm>
				<ModalBodyTitle>
					<GptQuitButton src={ButtonIcon} onClick={onClose} />
				</ModalBodyTitle>

				{/* 상단에 입력값 또는 서버 결과 표시 */}
				<GptFormCompntText>
					{chatResult || '여기에 결과가 표시됩니다.'}
				</GptFormCompntText>

				{/* 입력창 및 전송 버튼 */}
				<ChatInput>
					<GptinputChatText
						value={inputText}
						onChange={handleInputChange} // 입력값 업데이트
					/>
					<SendingButton onClick={handleSendClick}>전송</SendingButton>
				</ChatInput>
			</ModalForm>
		</ModalOverlay>
	);
};

export default GptModal;
