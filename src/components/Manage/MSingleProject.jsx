import { useNavigate } from 'react-router-dom';
import {
	MprojectContents,
	MprojectName,
	MprojectNickname,
	MprojectProfilephoto,
	MprojectTitle,
	ProjectRow,
	MSingleProjectdiv,
} from '../../styles/Partici_Mang/ManageStyles';
import Profilephoto2 from '../Participate/img/profilepic2.png';
import { useState } from 'react';

const MSingleProject = ({ projectData }) => {
	const navigate = useNavigate();

	if (!projectData) {
		return <div>Loading...</div>;
	}

	const handleProjectClick = () => {
		navigate(`/managedetail/${projectData.projectId}`, {
			state: {
				projectName: projectData.projectName,
				title: projectData.title,
				nickName: projectData.nickName,
				content: projectData.content,
				projectId: projectData.projectId,
				status: projectData.status,
			},
		});
	};

	return (
		<MSingleProjectdiv onClick={handleProjectClick}>
			<ProjectRow>
				<MprojectName>{projectData.projectName}</MprojectName>
			</ProjectRow>
			<MprojectTitle>{projectData.title}</MprojectTitle>
			<MprojectContents>{projectData.content}</MprojectContents>
			<MprojectNickname>
				<MprojectProfilephoto src={Profilephoto2} alt='프로필 사진' />
				{projectData.nickName}
			</MprojectNickname>
		</MSingleProjectdiv>
	);
};

export default MSingleProject;
