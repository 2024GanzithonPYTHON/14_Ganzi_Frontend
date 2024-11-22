import React, { useEffect, useState } from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { useParams } from 'react-router-dom';
import {
	Rcontent,
	RprojectName,
	RprojectTitle,
	RprojectCategory,
	LargeProfilePhoto,
	RprojectnickName,
	Rprojectcontent,
	Rapicontent,
	Recruitdiv,
	Recruitlinkinfo,
	Rincontentphoto,
	RecruitInfoContent,
} from '../../styles/Partici_Mang/RecruiteStyles';
import profilepic2 from '../../components/Participate/img/profilepic2.png';
import urllink from '../../components/Participate/img/url-link.png';
import FormApplyBTN from '../../components/Participate/Button/FormApplyBTN';

const DetailRecruit = () => {
	const { projectId } = useParams();
	const [recruite, setRecruite] = useState({});

	useEffect(() => {
		const TOKEN =
			'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWRldzExMTIiLCJsb2dpbklkIjoic2FkZXcxMTEyIiwiaWF0IjoxNzMyMTkwMDc0LCJleHAiOjE3MzIxOTcyNzR9.ol-zLg91Iwufo-1SZ3VuO22X2k-20D6N2__IM9pZa30';

		async function fetchData() {
			if (!projectId) {
				console.error('No projectId available');
				return;
			}

			try {
				const response = await fetch('https://prolink123.store/api/project/4', {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
					mode: 'no-cors',
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				console.log('받은 데이터:', data);
				//데이터 구조 확인
				// 데이터 형식에 따른 조건 확인
				// 데이터 형식에 따른 조건 확인
				if (Array.isArray(data)) {
					// data 자체가 배열일 경우
					setRecruite(data);
				} else if (data.projectData && Array.isArray(data.projectData)) {
					// projectData 속성이 배열일 경우
					setRecruite(data.projectData);
				} else {
					console.error('Unexpected data format:', data);
				}
			} catch (error) {
				console.error('Error fetching Project data: ', error);
			}
		}
		fetchData();
	}, []);

	// * 프로젝트 정보를 표시하는 내부 컴포넌트
	// * @param {Object} props - 컴포넌트 props
	// * @param {string} props.title - 정보의 제목
	// * @param {string} props.result - 정보의 내용

	const Recruitinfo = ({ title, result }) => {
		return (
			<div>
				<Rprojectcontent>{title} </Rprojectcontent>
				<Rapicontent>{result || '정보 없음'} </Rapicontent>
			</div>
		);
	};

	const RemainMembNum = recruite.contributorNum - recruite.nowConNum;

	return (
		<>
			<LoginAfterHeader />

			<Rcontent>
				<RprojectName>{recruite.projectDataprojectName}</RprojectName>
				<div>
					<RprojectTitle>{recruite.title}</RprojectTitle>
					<RprojectCategory>{recruite.category}</RprojectCategory>
					<br />
					<RprojectnickName>
						<LargeProfilePhoto src={profilepic2} alt='모집인원아이콘' />
						{recruite.nickName}
					</RprojectnickName>
					<Recruitdiv>
						<Recruitinfo
							title='모집포지션'
							result={recruite.recruitmentPosition}
						/>
						<Recruitinfo title='모집 인원' result={`${RemainMembNum}명`} />
						<Recruitinfo title='프로젝트 분야' result={recruite.category} />
						<Recruitinfo title='모집 마감일' result={recruite.deadLine} />
					</Recruitdiv>
					링크
					<Recruitlinkinfo>
						<Rincontentphoto src={urllink} alt='url-link' />
						{recruite.link}
					</Recruitlinkinfo>
					<RecruitInfoContent>{recruite.content}</RecruitInfoContent>
					<FormApplyBTN></FormApplyBTN>
				</div>
			</Rcontent>
		</>
	);
};

export default DetailRecruit;
