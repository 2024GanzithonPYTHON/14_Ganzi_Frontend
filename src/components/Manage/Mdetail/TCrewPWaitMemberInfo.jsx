import React from 'react';
import profilepic from '../../../components/Participate/img/profilepic2.png';
import {
	ApplyButton,
	Buttondiv,
	MprojectProfilephoto,
	TCApplierRow,
	TCApplierRow0,
	TCApplierRow1,
	TCprojectTitle,
	TeamCrewdiv2,
	TeamMemberText,
} from '../../../styles/Partici_Mang/TaskActiveStyles';

const TCrewPWaitMemberInfo = ({ projectApplyMember, onAccept, onDelete }) => {
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
		</TeamCrewdiv2>
	);
};

export default TCrewPWaitMemberInfo;
