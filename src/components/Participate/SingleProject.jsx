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
} from '../../styles/ProjectStyle';
import ctrbutepic from './img/ctrbutepic.png';
import Profilephoto2 from './img/profilepic2.png';

const SingleProject = ({ projectData }) => {
	if (!projectData) {
		return <div>Loading...</div>;
	}

	return (
		<SingleProjectdiv>
			<Pprojectdate>마감일| {projectData.end}</Pprojectdate>
			<ProjectRow>
				<PprojectName>{projectData.projectName}</PprojectName>
				<Pprojectctrb>
					<Pprojectctrpic src={ctrbutepic} alt='프로필사진' />
					{projectData.contributrorNum}
				</Pprojectctrb>
			</ProjectRow>

			<PprojectTitle>{projectData.title}</PprojectTitle>
			<PprojectContents>{projectData.content}</PprojectContents>
			<PprojectNickname>
				<PprojectProfilephoto src={Profilephoto2} alt='프로필 사진' />
				{projectData.nickname}
			</PprojectNickname>
		</SingleProjectdiv>
	);
};

export default SingleProject;
