import React, { useState } from 'react';
import profilepic from '../../../components/Participate/img/profilepic2.png';
import OpenLink from '../../../components/Manage/Mpics/openfile.png'; // OpenLink 경로 확인 필요
import Introduceform from '../../../pages/manage/Introduceform';
import {
	ApplyButton,
	Buttondiv,
	MprojectProfilephoto,
	MprojectProfilelink,
	TCApplierRow,
	TCApplierRow0,
	TCApplierRow1,
	TCprojectTitle,
	TeamCrewdiv2,
	TeamMemberText,
} from '../../../styles/Partici_Mang/TaskActiveStyles';

const TCrewPWaitMemberInfo = ({ projectApplyMember, onAccept, onDelete }) => {
	const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리
	const [selectedUser, setSelectedUser] = useState({}); // 선택된 사용자 정보 저장

	// 체인 클릭 시 모달 열기
	const handleOpenModal = (careerUrl, content) => {
		setSelectedUser({ careerUrl, content }); // 사용자 데이터 저장
		setIsModalOpen(true); // 모달 열기
	};

	// 모달 닫기
	const handleCloseModal = () => {
		setSelectedUser({}); // 사용자 데이터 초기화
		setIsModalOpen(false); // 모달 닫기
	};

	return (
		<TeamCrewdiv2 $color='white'>
			<TCprojectTitle $marginTop='10px' $marginBottom='20px'>
				대기 리스트
			</TCprojectTitle>
			<>
				{projectApplyMember.map((member) => (
					<TCApplierRow key={member.userProjectId}>
						<MprojectProfilephoto
							src={profilepic}
							alt='대기자 프로필 사진'
							$width='66px'
							$height='66px'
							$opacity='0.6'
						/>
						<TCApplierRow1>
							<TCApplierRow0>
								<TeamMemberText>{member.nickName}</TeamMemberText>
								<MprojectProfilelink
									src={OpenLink}
									alt='url 체인'
									$width='2.252vh'
									$height='2.252vh'
									cursor='pointer'
									onClick={() =>
										handleOpenModal(member.careerUrl, member.content)
									} // 클릭 시 careerUrl과 content 전달
								/>
							</TCApplierRow0>
							<Buttondiv>
								<ApplyButton
									$bcolor='primary'
									$textColor='white'
									onClick={() => onAccept(member.userProjectId)} // 수락 동작
								>
									수락
								</ApplyButton>
								<ApplyButton
									$bcolor='secondary'
									$textColor='white'
									onClick={() => onDelete(member.userProjectId)} // 거절 동작
								>
									거절
								</ApplyButton>
							</Buttondiv>
						</TCApplierRow1>
					</TCApplierRow>
				))}
			</>
			{/* 모달 컴포넌트 렌더링 */}
			{isModalOpen && (
				<Introduceform
					careerUrl={selectedUser.careerUrl}
					content={selectedUser.content}
					onClose={handleCloseModal}
				/>
			)}
		</TeamCrewdiv2>
	);
};

export default TCrewPWaitMemberInfo;
