import React, { useEffect, useState } from 'react';
import { PprojectName } from '../../../styles/Partici_Mang/ProjectStyles';
import PhototeamLeader from '../../../components/Manage/Mpics/leaderprofile.png';
import {
	TeamCrewdiv,
	DMProjectRow,
	LeaderPhoto,
	DMprojectTitle,
	DMProjectNickname,
	LeaderText,
	Div3,
} from '../../../styles/Partici_Mang/DetailmanageStyles';
import LeaderPTO from '../Mpics/leader.png';
import { MprojectProfilephoto } from '../../../styles/Partici_Mang/TaskActiveStyles';
import TCrewPMemberInfo from './TCrewPMemberInfo';
import TCrewPWaitMemberInfo from './TCrewPWaitMemberInfo';

const TeamCrew = ({ projectData }) => {
	const [projectApplyMember, setProjectApplyMember] = useState([]); // 상태 관리

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
					setProjectApplyMember(jsonData.application); // 데이터 설정
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
	const handleAccept = (userProjectId) => {
		alert('수락되었습니다!');
		setProjectApplyMember((prevMembers) =>
			prevMembers.map((member) =>
				member.userProjectId === userProjectId
					? { ...member, isAccepted: true } // isAccepted를 true로 업데이트
					: member
			)
		);
	};

	// 거절 핸들러
	const handleDelete = (userProjectId) => {
		alert('거절되었습니다!');
		setProjectApplyMember(
			(prevMembers) =>
				prevMembers.filter((member) => member.userProjectId !== userProjectId) // 해당 항목 제거
		);
	};

	const actualData = projectData.projectData || projectData;

	return (
		<Div3>
			<TeamCrewdiv>
				<DMProjectRow>
					<LeaderPhoto src={LeaderPTO} alt='리더' />
					<PprojectName>{actualData.projectName}</PprojectName>
				</DMProjectRow>

				<DMprojectTitle>{actualData.title}</DMprojectTitle>

				<DMProjectNickname>
					<MprojectProfilephoto
						src={PhototeamLeader}
						alt='프로필 사진'
						style={{ width: '55px', height: '55px' }}
					/>
					<LeaderText>{actualData.nickName}</LeaderText>
				</DMProjectNickname>
			</TeamCrewdiv>

			{/* 팀원 리스트 */}
			<TCrewPMemberInfo
				projectApplyMember={projectApplyMember.filter(
					(member) => member.isAccepted
				)} // isAccepted가 true인 멤버만 전달
			/>

			{/* 대기 리스트 */}
			<TCrewPWaitMemberInfo
				projectApplyMember={projectApplyMember.filter(
					(member) => !member.isAccepted
				)} // isAccepted가 false인 멤버만 전달
				onAccept={handleAccept} // 수락 핸들러 전달
				onDelete={handleDelete} // 거절 핸들러 전달
			/>
		</Div3>
	);
};

export default TeamCrew;
