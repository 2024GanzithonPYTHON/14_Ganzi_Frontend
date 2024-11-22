import React from 'react';
import PhototeamLeader from '../../../components/Manage/Mpics/leaderprofile.png';
import LeadergrayPhoto from '../../../components/Manage/Mpics/leadergray.png';
import MemberPhoto from '../../../components/Manage/Mpics/membercheck.png';
import OpenLink from '../../../components/Manage/Mpics/openfile.png';

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
	return (
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
						/>
					</TCApplierRow>
				))}
			</TCprojectNickname>
		</TeamCrewdiv2>
	);
};

export default TCrewPMemberInfo;
