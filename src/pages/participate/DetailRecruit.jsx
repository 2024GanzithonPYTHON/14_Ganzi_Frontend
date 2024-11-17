import React, { useEffect, useState } from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { useParams } from 'react-router-dom';
import mockData from '../../components/data/mock.json';
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
	const { projectID } = useParams();
	const [recruite, setRecruite] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				const project = mockData.projectData.find(
					(item) => item.projectId === parseInt(projectID)
				);
				if (project) {
					setRecruite(project);
				} else {
					console.error(`해당 데이터 없음 ${projectID}`);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchData();
	}, [projectID]);

	if (!recruite) {
		return <div>Loading...</div>;
	}

	// * 프로젝트 정보를 표시하는 내부 컴포넌트
	// * @param {Object} props - 컴포넌트 props
	// * @param {string} props.title - 정보의 제목
	// * @param {string} props.result - 정보의 내용

	const Recruitinfo = ({ title, result }) => {
		return (
			<div>
				<Rprojectcontent>{title} </Rprojectcontent>
				<Rapicontent>{result} </Rapicontent>
			</div>
		);
	};
	Recruitinfo.deafultProps = {
		result: '',
	};

	const RemainMembNum = recruite.contributorNum - recruite.nowConNum;

	return (
		<>
			<LoginAfterHeader />

			<Rcontent>
				<RprojectName>{recruite.projectName}</RprojectName>
				<div>
					<RprojectTitle>{recruite.title}</RprojectTitle>
					<RprojectCategory>{recruite.category}</RprojectCategory>
					<br />
					<RprojectnickName>
						<LargeProfilePhoto src={profilepic2} alt='모집인원아이콘' />
						{recruite.nickName}
					</RprojectnickName>
					<Recruitdiv>
						<Recruitinfo title='모집포지션' result={recruite.nickName} />
						<Recruitinfo title='모집 인원' result={`${RemainMembNum}명`} />
						<Recruitinfo title='프로젝트 분야' result={recruite.project} />
						<Recruitinfo title='모집 마감일' result={recruite.end} />
					</Recruitdiv>
					링크
					<Recruitlinkinfo>
						<Rincontentphoto src={urllink} alt='url-link' />
						https://www.holaworld.io/study/6731965b3aab3f00137c7dc4
					</Recruitlinkinfo>
					<RecruitInfoContent>
						📌 안녕하세요. 저희는 Selftrip이라는 여행 경로 추천 서비스를
						개발하고 있습니다. 여행지 경로를 만들어주고
						customizing할수있는서비스를 하고자 합니다. 첫번째 목표는 서울을
						방문하는 외국인을 대상으로 하는 여행경로추천 서비스입니다. 현재는
						mvp 버전을 만들고 있습니다. mvp 버전이 잘 된다면 다음에는 AI, LLM 을
						결합한 추천을 추가할 생각중입니다.
						<br />
						<br />
						📍진행방식 : 현재는 온라인 전체미팅은 가끔하고 대부분 파트별 온라인
						미팅으로 일을 진행하고 있습니다.
						<br />
						<br />
						📅 계획 mvp 기획: 반응협 웹으로 mvp 를 생각중입니다. 현재 기획이
						어느정도되어서 디자이너 분께서 UI UX 디자인을 진행중입니다.
						참여하시게되면 필수 페이지부터 참여하시게됩니다. 경로 만들기 기능,
						추천장소 필터기능(여행시간 및 카테고리), 여행지 상세페이지, 지도상의
						인터렉티브한 여행지 표시 🛠️팀 전체기술스택 Docker, fast-api, python,
						React, postgre, figma, nodejs
						<br />
						<br />
						💡기타: 혹시라도 사이드 프로젝트로 끝나지 않고 수익화나 사업화가
						되는경우 기여도많큼 지분을 드리거나 수익을 분배해 드리겠습니다.
						포트폴리오를 위해서 하시던, 서비스의 성공을 위해서 하시던, 공부를
						위하여 하시던 크게 상관은 없습니다만 프로젝트를 같이 하기위해서는
						무엇보다 주제와 내용에 흥미가 있고 공감이 되야 한다고 생각합니다.
						어떤 서비스를 만들고 있는지 자세히 설명을 들으시고 참여할지
						결정하셔도 됩니다. 구글 meet을 통해 자세히 설명드리겠으니 들어보시고
						결정하셔도 됩니다
					</RecruitInfoContent>
					<FormApplyBTN></FormApplyBTN>
				</div>
			</Rcontent>
		</>
	);
};

export default DetailRecruit;
