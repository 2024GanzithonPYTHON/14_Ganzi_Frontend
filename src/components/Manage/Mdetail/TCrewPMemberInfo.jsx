import React, { useEffect, useState } from 'react';
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
import Introduceform from '../../../pages/manage/Introduceform';

const TCrewPMemberInfo = () => {
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
					'https://run.mocky.io/v3/eca642a0-62f0-48fd-af27-195244c626c0',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);

				// JSON 응답 데이터 파싱
				let data = await response.text(); // JSON 파싱 전에 텍스트로 읽음
				// eslint-disable-next-line no-control-regex
				data = data.replace(/[\x00-\x1F\x7F-\x9F]/g, ''); // 모든 제어 문자 제거

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
		return (
			<div>
				<strong>{member.nickname}</strong>
			</div>
		);
	};
	return (
		<>
			<TeamCrewdiv2 $color='transparent'>
				<TCprojectTitle $marginBottom='20px'>팀원 리스트</TCprojectTitle>
				<TCprojectNickname>
					{projectApplyMember.map((member, index) => (
						<TCApplierRow key={member.userProjectId}>
							{' '}
							<MprojectProfilephoto
								src={PhototeamLeader}
								alt='프로필 사진'
								$width='70px'
								$height='70px'
							/>
							<MprojectProfilephoto
								src={index === 0 ? LeadergrayPhoto : MemberPhoto}
								$width='2.252vh' //25px의 vh
								$height='2.252vh'
								$leftMargin='5px'
							/>
							<TeamMemberText>{member.nickname}</TeamMemberText>{' '}
							<MprojectProfilelink
								src={OpenLink}
								alt='url 체인'
								$width='2.252vh'
								$height='2.252vh'
								onClick={handelOpenModal}
								cursor='pointer'
							/>
							{isModalOpen && <Introduceform onClose={handelCloseModal} />}
						</TCApplierRow>
					))}
				</TCprojectNickname>
			</TeamCrewdiv2>
		</>
	);
};

export default TCrewPMemberInfo;
