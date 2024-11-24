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
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TeamCrew = ({ projectData }) => {
	const [projectApplyMember, setProjectApplyMember] = useState([]);
	const [projectInfo, setProjectInfo] = useState({});
	const token = localStorage.getItem('accessToken');
	const { projectId } = useParams();

	const fetchData = async () => {
		if (!token) {
			console.error('토큰이 없습니다. 다시 로그인 해주세요.');
			return;
		}

		try {
			const baseURL = 'https://prolink123.store';
			const response = await axios.get(
				`${baseURL}/api/project/${projectId}/manage`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('받은 데이터:', response.data);

			if (response.data.userProjectResponses) {
				setProjectApplyMember(response.data.userProjectResponses);
				setProjectInfo({
					projectName: response.data.projectName,
					title: response.data.title,
					constructor: response.data.constructor,
				});
			} else {
				console.error('Invalid data structure:', response.data);
			}
		} catch (error) {
			console.error('Error fetching Project data:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [token, projectId]);

	const handleAccept = async (userProjectId) => {
		try {
			if (!token) {
				alert('토큰이 없습니다. 다시 로그인 해주세요.');
				return;
			}

			// Find the member with the matching userProjectId
			const member = projectApplyMember.find(
				(m) => m.userProjectId === userProjectId
			);

			if (!member) {
				console.error('멤버를 찾을 수 없습니다.');
				return;
			}

			const baseURL = 'https://prolink123.store';

			// Use the member's nickName for the API call
			const response = await axios.put(
				`${baseURL}/api/project/${projectId}/${member.nickName}/accept`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('수락 요청 성공:', response.data);

			// Update the member's status in the state
			setProjectApplyMember((prevMembers) =>
				prevMembers.map((m) =>
					m.userProjectId === userProjectId ? { ...m, isAccepted: true } : m
				)
			);

			alert('수락되었습니다!');
		} catch (error) {
			console.error('수락 요청 실패:', error);
			alert(
				`수락 요청에 실패했습니다. 사유: ${
					error.response?.data?.message || '알 수 없음'
				}`
			);
		}
	};

	const handleDelete = (userProjectId) => {
		alert('거절되었습니다!');
		setProjectApplyMember((prevMembers) =>
			prevMembers.filter((member) => member.userProjectId !== userProjectId)
		);
	};

	const actualData = projectData.projectData || projectData;

	return (
		<Div3>
			<TeamCrewdiv>
				<DMProjectRow>
					<LeaderPhoto src={LeaderPTO} alt='리더' />
					<PprojectName>{projectInfo.projectName}</PprojectName>
				</DMProjectRow>

				<DMprojectTitle>{projectInfo.title}</DMprojectTitle>

				<DMProjectNickname>
					<MprojectProfilephoto
						src={PhototeamLeader}
						alt='프로필 사진'
						style={{ width: '55px', height: '55px' }}
					/>
					<LeaderText>{projectInfo.constructor}</LeaderText>
				</DMProjectNickname>
			</TeamCrewdiv>

			<TCrewPMemberInfo
				projectApplyMember={projectApplyMember.filter(
					(member) => member.isAccepted
				)}
			/>

			<TCrewPWaitMemberInfo
				projectApplyMember={projectApplyMember.filter(
					(member) => !member.isAccepted
				)}
				onAccept={handleAccept}
				onDelete={handleDelete}
			/>
		</Div3>
	);
};

export default TeamCrew;
