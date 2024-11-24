import React, { useEffect, useState } from 'react';
import { TeamCrewdiv } from '../../../styles/Partici_Mang/DetailmanageStyles';
import profilepic from '../../../components/Participate/img/profilepic2.png';
import {
	ApplyButton,
	Buttondiv,
	MprojectProfilelink,
	MprojectProfilephoto,
	TCApplierRow,
	TCApplierRow0,
	TCApplierRow1,
	TCprojectTitle,
	TeamMemberText,
} from '../../../styles/Partici_Mang/TaskActiveStyles';
import OpenLink from '../../../components/Manage/Mpics/openfile.png';
import Introduceform from '../../../pages/manage/Introduceform';

// api patch 되는걸로 수정
const TCrewPWaitMemberInfo2 = () => {
	const [projectApplyMember, setProjectApplyMember] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState({}); // 선택된 사용자 정보 저장

	// Modal 핸들러
	const handelOpenModal = (careerUrl, content) => {
		setSelectedUser({ careerUrl, content }); // careerUrl과 content 저장
		setIsModalOpen(true);
	};
	const handelCloseModal = () => {
		setSelectedUser({}); // 선택된 사용자 초기화
		setIsModalOpen(false);
	};

	// 데이터 가져오기
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://run.mocky.io/v3/d2ad19f4-b3fe-482a-9315-5acc4f44ba6e',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);
				let data = await response.text();
				data = data.replace(/[\x00-\x1F\x7F-\x9F]/g, ''); // 제어 문자 제거
				const jsonData = JSON.parse(data);

				if (jsonData.application && Array.isArray(jsonData.application)) {
					setProjectApplyMember(jsonData.application);
				} else {
					console.error('Invalid data structure:', jsonData);
				}
			} catch (error) {
				console.error('Error fetching Project data:', error);
			}
		};
		fetchData();
	}, []);

	// 수락 핸들러
	const handleAccept = async (userProjectId) => {
		try {
			const response = await fetch(
				`https://example.com/api/project/member/${userProjectId}`, // 실제 API 엔드포인트 사용
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ isAccepted: true }),
				}
			);
			if (response.ok) {
				alert('수락되었습니다!');
				setProjectApplyMember((prevMembers) =>
					prevMembers.map((member) =>
						member.userProjectId === userProjectId
							? { ...member, isAccepted: true }
							: member
					)
				);
			} else {
				console.error('Error accepting member:', response.statusText);
			}
		} catch (error) {
			console.error('Error accepting member:', error);
		}
	};

	// 삭제 핸들러
	const handleDelete = async (userProjectId) => {
		try {
			const response = await fetch(
				`https://example.com/api/project/member/${userProjectId}`, // 실제 API 엔드포인트 사용
				{
					method: 'DELETE',
				}
			);
			if (response.ok) {
				alert('거절되었습니다!');
				setProjectApplyMember((prevMembers) =>
					prevMembers.filter((member) => member.userProjectId !== userProjectId)
				);
			} else {
				console.error('Error deleting member:', response.statusText);
			}
		} catch (error) {
			console.error('Error deleting member:', error);
		}
	};

	return (
		<>
			<TeamCrewdiv $color='white'>
				<TCprojectTitle $marginTop='10px' $marginBottom='20px'>
					신청 리스트
				</TCprojectTitle>
				<>
					{projectApplyMember
						.filter((member) => !member.isAccepted) // isAccepted가 false인 사람만 필터링
						.map((member) => (
							<TCApplierRow key={member.userProjectId}>
								<MprojectProfilephoto
									src={profilepic}
									alt='대기자프로필 사진'
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
											$leftMargin='8px'
											onClick={() =>
												handelOpenModal(member.careerUrl, member.content)
											} // careerUrl과 content 전달
											cursor='pointer'
										/>
									</TCApplierRow0>
									<Buttondiv>
										<ApplyButton
											$bcolor='primary'
											$textColor='white'
											onClick={() => handleAccept(member.userProjectId)} // 수락 동작
										>
											수락
										</ApplyButton>
										<ApplyButton
											$bcolor='secondary'
											$textColor='white'
											onClick={() => handleDelete(member.userProjectId)} // 삭제 동작
										>
											거절
										</ApplyButton>
									</Buttondiv>
								</TCApplierRow1>
							</TCApplierRow>
						))}
				</>
			</TeamCrewdiv>
			{/* 모달 렌더링 */}
			{isModalOpen && (
				<Introduceform
					careerUrl={selectedUser.careerUrl}
					content={selectedUser.content}
					onClose={handelCloseModal}
				/>
			)}
		</>
	);
};

export default TCrewPWaitMemberInfo2;
