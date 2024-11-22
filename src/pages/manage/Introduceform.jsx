import React from 'react';
import {
	ModalForm,
	ModalOverlay,
	ModalBodyTitle,
} from '../../styles/Modal/ModalFormStyle';
import {
	InfoQuitButton,
	IntroFormCompntText,
	IntroFormLinkText,
} from '../../styles/Partici_Mang/IntroFormStyles';
import ButtonIcon from '../../assets/icons/Button.svg';

const Introduceform = ({ onClose }) => {
	return (
		<ModalOverlay>
			<ModalForm>
				<ModalBodyTitle>
					자기소개서
					<InfoQuitButton src={ButtonIcon} onClick={onClose} />
				</ModalBodyTitle>
				<IntroFormLinkText>
					placeholder={'개인 경력 주소 (ex: LinkedIn)'}
				</IntroFormLinkText>
				<IntroFormCompntText />
			</ModalForm>
		</ModalOverlay>
	);
};

export default Introduceform;
