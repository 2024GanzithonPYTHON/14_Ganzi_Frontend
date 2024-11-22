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
	const [inputText, setInputText] = useState(''); // 사용자가 입력한 값
	const [chatResult, setChatResult] = useState(''); // 서버 응답 데이터

	const handleInputChange = (event) => {
		setInputText(event.target.value); // 입력값 업데이트
	};

	const handleSendClick = async () => {
		if (!inputText.trim()) {
			alert('입력값이 비어 있습니다.');
			return;
		}

		try {
			// API 요청 보내기
			const response = await axios.post(
				`/api/project/${projectId}/meeting/chat`,
				{
					message: inputText,
				}
			);

			console.log('서버 응답:', response.data);

			// 응답 데이터 저장 및 표시
			setChatResult(response.data.result || '결과 없음');
			setInputText(''); // 입력창 비우기
		} catch (error) {
			console.error('Error sending chat:', error);
			alert('채팅 전송에 실패했습니다.');
		}
	};

	return (
		<ModalOverlay>
			<ModalForm>
				<ModalBodyTitle>
					참가 신청하기
					<GptQuitButton src={ButtonIcon} onClick={onClose} />
				</ModalBodyTitle>

				{/* 상단에 입력값 또는 서버 결과 표시 */}
				<GptFormCompntText>
					{chatResult || inputText || '여기에 결과가 표시됩니다.'}
				</GptFormCompntText>

				{/* 입력창 및 전송 버튼 */}
				<ChatInput>
					<GptinputChatText
						placeholder='채팅창 입력'
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
