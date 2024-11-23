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
	const [title, setTitle] = useState(''); // 제목 상태
	const [inputText, setInputText] = useState('내용: '); // 기본값 설정
	const [chatResult, setChatResult] = useState(''); // 서버 응답 데이터
	const token = localStorage.getItem('accessToken');
	// 제목 입력 핸들러
	const handleTitleChange = (event) => {
		setTitle(event.target.value); // 입력값을 title로 설정
	};

	// 내용 입력 핸들러
	const handleInputChange = (event) => {
		const value = event.target.value;

		// 입력값이 "주제: "로 시작하지 않으면 다시 "주제: "로 설정
		setInputText(value.startsWith('주제: ') ? value : '주제: ');
	};

	// 전송 버튼 클릭 핸들러
	const handleSendClick = async () => {
		// 입력값 검사
		if (!title.trim()) {
			alert('제목을 입력해주세요.');
			return;
		}

		if (inputText.trim() === '주제:') {
			alert('내용을 입력해주세요.');
			return;
		}

		try {
			// API 요청 데이터 형식 준비
			const requestData = {
				title, // 사용자가 입력한 제목
				content: inputText.replace('주제: ', ''), // "주제: "를 제외한 내용으로 content 필드 설정
			};

			// API 요청 보내기
			const response = await axios.post(
				`/api/project/${projectId}/meeting`,
				requestData, // 요청 데이터
				{
					headers: {
						Authorization: `Bearer ${token}`, // 인증 토큰 추가
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('서버 응답:', response.data);

			// 응답 데이터 저장 및 표시
			const result = response.data.result || '결과 없음';
			setChatResult(result);
			setTitle(''); // 제목 초기화
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

				{/* 제목 입력창 */}
				<GptFormCompntText
					as='input' // input으로 변경
					type='text'
					placeholder='제목을 입력하세요'
					value={title} // 제목 상태와 연결
					onChange={handleTitleChange} // 제목 업데이트
				/>

				{/* 입력창 및 전송 버튼 */}
				<ChatInput>
					<GptinputChatText
						value={inputText}
						onChange={handleInputChange} // 내용 입력값 업데이트
					/>
					<SendingButton onClick={handleSendClick}>전송</SendingButton>
				</ChatInput>
			</ModalForm>
		</ModalOverlay>
	);
};

export default GptModal;
