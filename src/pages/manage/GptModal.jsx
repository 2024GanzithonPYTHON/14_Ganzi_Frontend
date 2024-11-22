import React from 'react';
import {
	ModalForm,
	ModalOverlay,
	ModalBodyTitle,
} from '../../styles/Modal/ModalFormStyle';
import {
	GptQuitButton,
	GptFormCompntText,
	GptinputChatText,
	SendingButton,
	ChatInput,
} from '../../styles/Partici_Mang/AIstyles';
import ButtonIcon from '../../assets/icons/Button.svg';

const GptModal = ({ onClose }) => {
	return (
		<ModalOverlay>
			<ModalForm>
				<ModalBodyTitle>
					GPT와 채팅하기
					<GptQuitButton src={ButtonIcon} onClick={onClose} />
				</ModalBodyTitle>
				<GptFormCompntText />
				<ChatInput>
					<GptinputChatText placeholder='채팅창 입력' />
					<SendingButton>전송</SendingButton>
				</ChatInput>
			</ModalForm>
		</ModalOverlay>
	);
};

export default GptModal;
