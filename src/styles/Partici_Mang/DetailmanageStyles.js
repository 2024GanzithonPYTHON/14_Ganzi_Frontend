import styled from 'styled-components';

export const ManageDetailnav = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: green;*/
	margin-left: 200px;
	gap: 88px;
	padding-top: 66px;
	align-content: center;
`;

export const MDNAV = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	/*background-color: red;*/
	gap: 88px;
	margin-left: 200px;
	padding-top: 66px;
	align-content: center;
`;

export const MDTeam = styled.button`
	align-items: center;
	padding: 0px;
	text-align: center;
	/*background-color: red;*/
	background-color: transparent;
	cursor: pointer;
	border: none;
	font-size: 21px;
	line-height: 125%;
	font-weight: 700;
	color: ${({ theme, $active }) =>
		$active ? theme.color.primary : theme.color.text}; // 활성화된 탭의 색상
	font-weight: ${({ $active }) =>
		$active ? '700' : '400'}; // 활성화된 탭은 굵은 글씨
	cursor: pointer;
	padding: 10px 20px;
	white-space: nowrap;
	border-bottom: ${({ $active, theme }) =>
		$active ? ` ${theme.color.primary}` : 'none'}; // 활성화된 탭에 밑줄 표시
`;

export const MDProject = styled.button`
	align-items: center;
	padding: 0px;
	text-align: center;
	/*background-color: red;*/
	background-color: transparent;
	cursor: pointer;
	border: none;
	font-size: 21px;
	line-height: 125%;
	font-weight: 700;
	color: ${({ theme, $active }) =>
		$active ? theme.color.primary : theme.color.text}; // 활성화된 탭의 색상
	font-weight: ${({ $active }) =>
		$active ? '700' : '400'}; // 활성화된 탭은 굵은 글씨
	cursor: pointer;
	padding: 10px 20px;
	white-space: nowrap;
	border-bottom: ${({ $active, theme }) =>
		$active ? ` ${theme.color.primary}` : 'none'}; // 활성화된 탭에 밑줄 표시
`;

export const MDAIMeeting = styled.button`
	align-items: center;
	padding: 0px;
	text-align: center;
	/*background-color: red;*/
	background-color: transparent;
	cursor: pointer;
	border: none;
	font-size: 21px;
	line-height: 125%;
	font-weight: 700;
	color: ${({ theme, $active }) =>
		$active ? theme.color.primary : theme.color.text}; // 활성화된 탭의 색상
	font-weight: ${({ $active }) =>
		$active ? '700' : '400'}; // 활성화된 탭은 굵은 글씨
	cursor: pointer;
	padding: 10px 20px;
	border-bottom: ${({ $active, theme }) =>
		$active ? ` ${theme.color.primary}` : 'none'}; // 활성화된 탭에 밑줄 표시
`;

export const MDContent = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: green;*/
	margin-right: 10px;
`;
export const Div3 = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: green;*/
	margin-top: 45px;
	margin-left: 157px;
`;

export const TeamCrewdiv = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: red;*/
	gap: 10px;
	right: 0;
	width: 60vw;
	height: auto;
	padding: 20px;
	border: none;
	border-radius: 25px;
	background-color: ${({ $color, theme }) =>
		$color ? theme.color[$color] : theme.color.gray1};
	margin-top: 19px;
	margin-left: 37px;
	margin-right: 37px;
	margin-bottom: 37px;
`;

export const DMProjectRow = styled.div`
	display: flex;
	align-items: center;
	padding-top: 20px;
	gap: 10px;
	line-height: 29px;
`;

export const LeaderPhoto = styled.img`
	width: 28px;
	height: 28px;
	margin-left: 28px;
	overflow: hidden;
`;

export const DMprojectTitle = styled.div`
	color: ${({ theme }) => theme.color.gray6};
	line-height: 29px;
	font-size: 24px;
	font-weight: 600;
	padding: 20px;
`;
export const DMProjectNickname = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 600;
	line-height: 60px;
	display: flex;
	padding-left: 10px;
	/*vertical-align: middle;*/
`;

export const LeaderText = styled.span`
	display: inline-block;
	line-height: 20px;
	color: ${({ theme }) => theme.color.gray6}; // 활성화된 탭의 색
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	align-self: center;
	margin-left: 8px;
`;
