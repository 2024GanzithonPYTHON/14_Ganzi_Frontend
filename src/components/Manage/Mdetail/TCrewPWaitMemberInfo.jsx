import React, { useEffect, useState } from 'react';
import { TeamCrewdiv } from '../../../styles/Partici_Mang/DetailmanageStyles';
import profilepic from '../../../components/Participate/img/profilepic2.png';
import {
	ApplyButton,
	Buttondiv,
	MprojectProfilelink,
	MprojectProfilephoto,
	//MprojectProfilephoto2,
	TCApplierRow,
	TCApplierRow0,
	TCApplierRow1,
	//TCprojectNickname,
	TCprojectTitle,
	TeamMember2,
	TeamMemberText,
} from '../../../styles/Partici_Mang/TaskActiveStyles';
import OpenLink from '../../../components/Manage/Mpics/openfile.png';
import Introduceform from '../../../pages/manage/Introduceform';

const TCrewPWaitMemberInfo = () => {
	const [projectApplyMember, setProjectApplyMember] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handelOpenModal = () => {
		setIsModalOpen(true);
	};
	const handelCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://run.mocky.io/v3/941a5d3d-84c7-4f7d-9c47-559a713aa649',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);

				// JSON 응답 데이터 파싱
				let data = await response.text(); // JSON 파싱 전에 텍스트로 읽음
				// eslint-disable-next-line no-control-regex
				data = data.replace(/[\x00-\x1F\x7F-\x9F]/g, ''); // 모든 제어 문자 제거어 문자 제거

				// 텍스트를 JSON으로 변환
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
	console.log({ projectApplyMember });

	const TeamMember = ({ member }) => {
		return <TeamMember2>{member.nickname}</TeamMember2>;
	};
	return (
		<>
			<TeamCrewdiv $color='white'>
				<TCprojectTitle $marginTop='10px' $marginBottom='20px'>
					신청 리스트
				</TCprojectTitle>
				<>
					{/*TCprojectNickname*/}
					{projectApplyMember.map((member) => (
						<TCApplierRow key={member.nickname}>
							{' '}
							<MprojectProfilephoto
								src={profilepic}
								alt='대기자프로필 사진'
								$width='66px'
								$height='66px'
								$opacity='0.6'
							/>
							<TCApplierRow1>
								<TCApplierRow0>
									<TeamMemberText>{member.nickname}</TeamMemberText>
									<MprojectProfilelink
										src={OpenLink}
										alt='url 체인'
										$width='2.252vh'
										$height='2.252vh'
										$leftMargin='8px'
										onClick={handelOpenModal}
										cursor='pointer'
									/>
									{isModalOpen && <Introduceform onClose={handelCloseModal} />}
								</TCApplierRow0>
								<Buttondiv>
									<ApplyButton
										$bcolor='primary'
										$textColor='white'
										onClick={() => alert('수락되었습니다!')}
									>
										수락
									</ApplyButton>
									<ApplyButton onClick={() => alert('거절되었습니다!')}>
										거절
									</ApplyButton>
								</Buttondiv>
							</TCApplierRow1>
						</TCApplierRow>
					))}
				</>
			</TeamCrewdiv>
		</>
	);
};

export default TCrewPWaitMemberInfo;
