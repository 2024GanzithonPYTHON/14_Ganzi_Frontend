import React, { useState } from 'react';
import PhototeamLeader from '../../../components/Manage/Mpics/leaderprofile.png';
import LeadergrayPhoto from '../../../components/Manage/Mpics/leadergray.png';
import MemberPhoto from '../../../components/Manage/Mpics/membercheck.png';
import OpenLink from '../../../components/Manage/Mpics/openfile.png';
import Introduceform from '../../../pages/manage/Introduceform';

import {
	MprojectProfilelink,
	MprojectProfilephoto,
	TCApplierRow,
	TCprojectNickname,
	TCprojectTitle,
	TeamCrewdiv2,
	TeamMemberText,
} from '../../../styles/Partici_Mang/TaskActiveStyles';

const TCrewPMemberInfo = ({ projectApplyMember }) => {
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
		<>
			<TeamCrewdiv2 $color='transparent'>
				<TCprojectTitle $marginBottom='20px'>팀원 리스트</TCprojectTitle>
				<TCprojectNickname>
					{projectApplyMember.map((member, index) => (
						<TCApplierRow key={member.userProjectId}>
							<MprojectProfilephoto
								src={PhototeamLeader}
								alt='프로필 사진'
								$width='70px'
								$height='70px'
							/>
							<MprojectProfilephoto
								src={index === 0 ? LeadergrayPhoto : MemberPhoto}
								$width='2.252vh'
								$height='2.252vh'
								$leftMargin='5px'
							/>
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
						</TCApplierRow>
					))}
				</TCprojectNickname>
			</TeamCrewdiv2>

			{/* 모달 컴포넌트 렌더링 */}
			{isModalOpen && (
				<Introduceform
					careerUrl={selectedUser.careerUrl}
					content={selectedUser.content}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
};

export default TCrewPMemberInfo;
