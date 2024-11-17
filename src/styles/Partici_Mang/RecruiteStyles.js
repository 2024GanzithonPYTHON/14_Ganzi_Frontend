import styled from 'styled-components';
import { PprojectProfilephoto } from './ProjectStyles';

export const LargeProfilePhoto = styled(PprojectProfilephoto)`
	width: 60px;
	height: 60px;
	margin-right: 10px;
`;

export const Rcontent = styled.div`
	width: 1050px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	/*background-color: lightgreen;*/
	margin: 0 auto;
	font-size: 24px;
	font-weight: 600;
`;

export const RprojectName = styled.div`
	color: ${({ theme }) => theme.color.primary};
	margin-top: 100px;
	font-size: 36px;
	font-weight: 700;
	margin-bottom: 17px;
`;
export const RprojectTitle = styled.span`
	color: ${({ theme }) => theme.color.text};
	font-size: 24px;
	font-weight: 600;
	gap: 20px;
`;
export const RprojectCategory = styled.span`
	color: ${({ theme }) => theme.color.gray5};
	margin-left: 19px;
	padding: 13px;
	font-size: 15px;
	font-weight: 600;
	line-height: 43px;
	border-radius: 33.5px;
	background-color: ${({ theme }) => theme.color.gray2};
`;

export const RprojectnickName = styled.div`
	color: ${({ theme }) => theme.color.text};
	display: flex;
	margin-top: 30px;
	font-size: 24px;
	font-weight: 600;
	line-height: 60px;
	align-content: center;
`;
export const Rprojectcontent = styled.div`
	color: ${({ theme }) => theme.color.text};
	display: flex;
	margin-top: 20px;
	align-content: center;
`;
export const Rapicontent = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	display: flex;
	margin-top: 10px;
	font-size: 20px;
	font-weight: 600;
	line-height: 32px; /* 160% */
`;

export const Recruitdiv = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 3vw;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content: center;
`;

export const Recruitlinkinfo = styled.div`
	display: flex;
	margin-top: 20px;
	color: ${({ theme }) => theme.color.secondary2};
`;

export const Rincontentphoto = styled.img`
	width: 28px;
	height: 28px;
	margin-right: 16px;
	overflow: hidden;
`;
export const ApplyBtn = styled.button`
	width: 749px;
	height: 79px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 12px;
	border: none;
	color: white;
	font-size: 24px;
	font-weight: 600;
	position: fixed;
	bottom: 60px; /* 화면 하단에서 60px 위에 배치 */
	left: 50%; /* 화면의 가로 중앙 */
	transform: translateX(-50%); /* 가로 중앙 정렬 */
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); /* 버튼에 그림자 추가 (선택 사항) */
	cursor: pointer;
	&:hover {
		transform: translateX(-50%) scale(1.02);
	}
`;

export const RecruitInfoContent = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	display: flex;
	margin-top: 50px;
	font-size: 20px;
	font-weight: 600;
	line-height: 32px;
	margin-bottom: 10vh;
`;
