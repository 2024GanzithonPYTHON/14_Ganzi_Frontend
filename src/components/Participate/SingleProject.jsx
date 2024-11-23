import { useNavigate } from 'react-router-dom';
import {
	PprojectContents,
	Pprojectctrb,
	Pprojectctrpic,
	Pprojectdate,
	PprojectName,
	PprojectNickname,
	PprojectProfilephoto,
	PprojectTitle,
	ProjectRow,
	SingleProjectdiv,
} from '../../styles/Partici_Mang/ProjectStyles';
import ctrbutepic from './img/ctrbutepic.png';
import Profilephoto2 from './img/profilepic2.png';

const SingleProject = ({ projectData }) => {
	const navigate = useNavigate('');
	if (!projectData) {
		return <div>Loading...</div>;
	}

	return (
		<SingleProjectdiv
			onClick={() => {
				navigate(`/participate/${projectData.projectId}`);
			}}
		>
			<Pprojectdate>마감일| {projectData.end}</Pprojectdate>
			<ProjectRow>
				<PprojectName>{projectData.projectName}</PprojectName>
				<Pprojectctrb>
					<Pprojectctrpic src={ctrbutepic} alt='모집인원아이콘' />
					{projectData.nowConNum ?? 0} / {projectData.contributorNum}
				</Pprojectctrb>
			</ProjectRow>

			<PprojectTitle>{projectData.title}</PprojectTitle>
			<PprojectContents>{projectData.content}</PprojectContents>
			<PprojectNickname>
				<PprojectProfilephoto src={Profilephoto2} alt='프로필 사진' />
				{projectData.nickName}
			</PprojectNickname>
		</SingleProjectdiv>
	);
};

export default SingleProject;
