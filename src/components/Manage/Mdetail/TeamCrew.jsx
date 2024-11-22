import React from 'react';
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
	console.log('TeamCrew received projectData:', projectData);
	console.log('TeamCrew received projectData:', projectData.projectName);

	if (!projectData) {
		console.log('projectData없음', { projectData });
		return <div>프로젝트 데이터를 불러오는 중입니다...</div>;
	}
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

			<TCrewPMemberInfo projectId={projectData.projectId} />
			<TCrewPWaitMemberInfo projectId={projectData.projectId} />
		</Div3>
	);
};
export default TeamCrew;
