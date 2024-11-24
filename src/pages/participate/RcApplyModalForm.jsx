import React from 'react';
import {
	ModalBodyTitle,
	ModalForm,
	FormSubmitBTN,
	ModalOverlay,
	ModalQuitButton,
} from '../../styles/Modal/ModalFormStyle';
import FormTypingURL from '../../components/Participate/FormTypingURL';
import FormTypingText from '../../components/Participate/FormTypingText';
import ButtonIcon from '../../assets/icons/Button.svg';

const RcApplyModalForm = ({ onClose }) => {
	return (
		<>
			<ModalOverlay>
				<ModalForm>
					<ModalBodyTitle>
						참가 신청하기
						<ModalQuitButton src={ButtonIcon} onClick={onClose} />
					</ModalBodyTitle>
					<FormTypingURL placeholder={'개인 경력 주소 (ex: LinkedIn)'} />
					<FormTypingText placeholder={'자기소개'} />
					<FormSubmitBTN>form 제출 신청하기</FormSubmitBTN>
				</ModalForm>
			</ModalOverlay>
		</>
	);
};

export default RcApplyModalForm;
