import React, { useState } from 'react';
//import { FormSubmitBTN } from '../../styles/ModalFormStyle';
import RcApplyModalForm from '../../../pages/participate/RcApplyModalForm';
import { ModalButton } from '../../../styles/Modal/ModalFormStyle';

export default function FormApplyBTN() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handelOpenModal = () => {
		setIsModalOpen(true);
	};
	const handelCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<ModalButton onClick={handelOpenModal}>지원 신청하기</ModalButton>
			{isModalOpen && <RcApplyModalForm onClose={handelCloseModal} />}
		</>
	);
}
