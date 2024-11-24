import React, { useState } from 'react';
import { Managenav, Div2 } from '../../styles/Partici_Mang/TaskActiveStyles';
import styled from 'styled-components';
import ManageList from './ManageList';

const TaskActiveproject = styled.button``;
const TaskEndproject = styled.button``;

const ManageNav = () => {
	const [activeProject, setActiveProject] = useState(true);
	const activeprojectlist = () => {
		setActiveProject(true);
	};
	const endprojectlist = () => {
		setActiveProject(false);
	};

	return (
		<>
			<Managenav>
				<TaskActiveproject onClick={activeprojectlist}>
					참여 중인 프로젝트
				</TaskActiveproject>
				<TaskEndproject onClick={endprojectlist}>
					참여 끝난 프로젝트
				</TaskEndproject>
			</Managenav>
			<Div2>
				<ManageList></ManageList>
			</Div2>
		</>
	);
};

export default ManageNav;
