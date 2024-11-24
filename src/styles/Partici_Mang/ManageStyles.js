import styled from 'styled-components';

export const MSingleProjectdiv = styled.div`
	border: 1px;
	/*background-color: red;*/
	background-color: ${({ theme }) => theme.color.gray1};
	width: 543px;
	height: 300px;
	max-height: 300px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding-top: 32px;
	padding-left: 37px;
	border: none;
	border-radius: 25px;
	position: relative;
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* hover 시 그림자 강화 */
	}
`;

export const ManageListRow = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 620px);
	column-gap: 5vw;
	row-gap: 3vw;
	justify-content: center;
	padding: 20px;
	margin: 0 auto;
	max-width: 1300px;
`;

export const MprojectName = styled.div`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	font-weight: 650;
	line-height: 29px;
`;

export const MprojectTitle = styled.div`
	color: ${({ theme }) => theme.color.gray6};
	line-height: 29px;
	font-size: 24px;
	font-weight: 600;
`;

export const MprojectContents = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 400;
	line-height: 32px;
	padding-right: 4rem;
	height: calc(1.5em * 2);
	overflow: hidden;
`;
export const MprojectNickname = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 600;
	display: flex;
	align-items: center;
`;

export const MprojectProfilephoto = styled.img`
	width: 56px;
	height: 56px;
	margin-right: 16px;
	overflow: hidden;
`;

export const ProjectRow = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 30px;
`;
