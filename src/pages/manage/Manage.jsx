import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { Titlecontent } from '../../styles/ContentStyles';
import {
	TaskActiveproject,
	Managecontent,
	Managenav,
	Div2,
	TaskEndproject,
} from '../../styles/Partici_Mang/TaskActiveStyles';

import { useState } from 'react';
import ActiveProjectlist from '../../components/Manage/ActiveProjectlist';
import EndProjectlist from '../../components/Manage/EndProjectlist';

const Manage = () => {
	const [activeProject, setActiveProject] = useState(true);
	const [activeTab, setActiveTab] = useState('active');

	const activeprojectlist = () => {
		setActiveProject(true);
		setActiveTab('active');
	};
	const endprojectlist = () => {
		setActiveProject(false);
		setActiveTab('end');
	};

	return (
		<>
			<LoginAfterHeader />
			<Titlecontent>프로젝트 관리</Titlecontent>
			<Managecontent>
				<Managenav>
					<TaskActiveproject
						onClick={activeprojectlist}
						$active={activeTab === 'active'}
					>
						참여중인 프로젝트
					</TaskActiveproject>
					<TaskEndproject
						onClick={endprojectlist}
						$active={activeTab === 'end'}
					>
						참여끝난 프로젝트
					</TaskEndproject>{' '}
				</Managenav>
				<Div2>
					{activeProject ? (
						<ActiveProjectlist /> // state값 true일 때
					) : (
						<EndProjectlist /> // state값 false일 때
					)}
				</Div2>
			</Managecontent>
		</>
	);
};

export default Manage;
