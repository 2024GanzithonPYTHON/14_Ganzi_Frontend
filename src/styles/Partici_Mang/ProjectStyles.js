import styled from 'styled-components';

export const SingleProjectdiv = styled.div`
	border: 1px;
	background-color: ${({ theme }) => theme.color.gray1};
	width: 620px;
	height: 320px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding-top: 32px;
	padding-left: 37px;
	border: none;
	border-radius: 25px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

	cursor: pointer;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* hover 시 그림자 강화 */
	}
`;

export const ProjectListRow = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 620px);
	column-gap: 5vw;
	row-gap: 3vw;
	justify-content: center;
	padding: 20px;
	margin: 0 auto;
	max-width: 1300px;
`;

export const Pprojectdate = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0.5px; /* 글자 간격 추가로 가독성 향상 */
`;

export const PprojectName = styled.div`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
	overflow: hidden; /* 텍스트가 넘칠 때 숨김 처리 */
	text-overflow: ellipsis; /* 넘친 텍스트를 ...으로 표시 */
	white-space: nowrap; /* 텍스트를 한 줄로 유지 */
	width: 20ch; /* 12글자만 표시 */
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* 가벼운 텍스트 그림자 추가 */
`;

export const PprojectTitle = styled.div`
	color: ${({ theme }) => theme.color.gray6};
	line-height: 29px;
	font-size: 24px;
	font-weight: 600;
	text-transform: capitalize;
`;

export const PprojectContents = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 400;
	line-height: 32px;
	padding-right: 4rem;
	min-height: 40px;
	max-height: 50px;
	white-space: nowrap; /* 텍스트 한 줄로 유지 */
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const PprojectNickname = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 600;
	line-height: 60px;
	display: flex;
`;

export const PprojectProfilephoto = styled.img`
	width: 56px;
	height: 56px;
	margin-right: 16px;
	overflow: hidden;
`;
export const Pprojectctrpic = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 11px;
	overflow: hidden;
`;

export const Pprojectctrb = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-size: 20px;
	justify-content: right;
	margin-right: 76px;
`;
export const ProjectRow = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 29px;
	align-items: center;
`;
