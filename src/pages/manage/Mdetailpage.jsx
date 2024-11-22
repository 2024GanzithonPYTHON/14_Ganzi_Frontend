import React, { useState, useEffect } from 'react';
import {
	MDAIMeeting,
	MDProject,
	MDTeam,
	MDContent,
	MDNAV,
} from '../../styles/Partici_Mang/DetailmanageStyles';
import TeamCrew from '../../components/Manage/Mdetail/TeamCrew';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';

import { useLocation, useParams } from 'react-router-dom';
//import MDProjectsetting from '../../components/Manage/Mdetail/MDProjectsetting';
import AIMeeting from '../../components/Manage/Mdetail/AIMeeting';
import { Titlecontent } from '../../styles/ContentStyles';
import { Managecontent } from '../../styles/Partici_Mang/TaskActiveStyles';
import Taskschedule from '../../components/Manage/Mdetail/taskschedule';

const Mdetailpage = () => {
	const [activeTab, setActiveTab] = useState('MDTeam');
	const [projectData, setProjectData] = useState(null);
	const location = useLocation();
	const { projectId } = useParams();

	useEffect(() => {
		if (location.state) {
			setProjectData(location.state);
		} else {
			// projectId를 사용하여 데이터를 가져오는 로직
			// 임시 데이터
			const tempData = {
				projectId: projectId,
				projectName: '프로젝트 이름',
				title: '프로젝트 제목',
				nickName: '프로젝트 리더',
				content: '프로젝트 내용',
				status: 'active',
			};
			setProjectData(tempData);
		}
	}, [location.state, projectId]);
	const getTitle = () => {
		switch (activeTab) {
			case 'MDTeam':
				return '팀원 관리 페이지';
			case 'MDProject':
				return '프로젝트 관리 페이지';
			case 'MDAIMeeting':
				return 'AI 회의록';
			default:
				return '팀원 관리 페이지';
		}
	};
	const renderContent = () => {
		if (!projectData) {
			return <div>로딩중...</div>;
		}
		switch (activeTab) {
			case 'MDTeam':
				return <TeamCrew projectData={projectData} />;
			case 'MDProject':
				return <Taskschedule />;
			case 'MDAIMeeting':
				return <AIMeeting projectData={projectData} />;
			default:
				return <TeamCrew projectData={projectData} />;
		}
	};

	return (
		<>
			<LoginAfterHeader />
			<Titlecontent>{getTitle()}</Titlecontent>
			<Managecontent>
				<MDNAV>
					<MDTeam
						onClick={() => setActiveTab('MDTeam')}
						$active={activeTab === 'MDTeam'}
					>
						팀원 관리
					</MDTeam>
					<MDProject
						onClick={() => setActiveTab('MDProject')}
						$active={activeTab === 'MDProject'}
					>
						프로젝트 관리
					</MDProject>
					<MDAIMeeting
						onClick={() => setActiveTab('MDAIMeeting')}
						$active={activeTab === 'MDAIMeeting'}
					>
						AI회의록
					</MDAIMeeting>
				</MDNAV>
				<MDContent>{renderContent()}</MDContent>
			</Managecontent>
		</>
	);
};

export default Mdetailpage;
