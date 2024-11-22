import styled from 'styled-components';

export const Managecontent = styled.div`
	/*background-color: blue;*/
	font-size: 22px;
	display: flex;
	margin-top: 88px;
`;
export const Managenav = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: green;*/
	margin-left: 200px;
	gap: 88px;
	padding-top: 66px;
	align-content: center;
`;
export const Div2 = styled.div`
	display: flex;
	flex-direction: column;
	/*background-color: green;*/
	margin-top: 50px;
	margin-left: 157px;
	margin-right: 10px;
`;

export const TaskActiveproject = styled.button`
	width: 10ch;
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
		$active ? `${theme.color.primary}` : 'none'}; // 활성화된 탭에 밑줄 표시
`;
export const TaskEndproject = styled.button`
	width: 10ch;
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

export const MprojectProfilephoto = styled.img`
	width: ${({ $width }) => ($width ? $width : `60px`)};
	height: ${({ $height }) => ($height ? $height : `60px`)};
	object-fit: cover;
	box-sizing: border-box;
	margin-left: ${({ $leftMargin }) => ($leftMargin ? $leftMargin : `0px`)};
`;

export const MprojectProfilephoto2 = styled.img`
	width: ${({ $width }) => ($width ? $width : `56px`)};
	height: ${({ $height }) => ($height ? $height : `56px`)};
	overflow: auto;
	object-fit: cover;
	box-sizing: border-box;
	padding: 0;
	margin-right: 16px;
	margin-left: ${({ $leftMargin }) => ($leftMargin ? $leftMargin : `0px`)};
`;
export const MprojectProfilelink = styled.img`
	width: ${({ $width }) => ($width ? $width : `56px`)};
	height: ${({ $height }) => ($height ? $height : `56px`)};
	overflow: auto;
	object-fit: cover;
	box-sizing: border-box;
	padding: 0;
	margin-right: 16px;
	margin-left: ${({ $leftMargin }) => ($leftMargin ? $leftMargin : `0px`)};
	cursor: pointer;
	&:hover {
		filter: brightness(0.8);
	}
`;

export const TCApplierRow = styled.div`
	display: flex;
	gap: 12px;
	object-fit: cover;
	margin-bottom: 5px;
	align-items: center; /* 세로 가운데 정렬*/
`;

export const TCApplierRow0 = styled.div`
	display: flex;
	line-height: 1.5;
	width: 100%;
`;
export const TCApplierRow1 = styled.div`
	display: flex;
	align-items: center;
	line-height: 1.5;
	/*background-color: blueviolet;*/
	width: 100%;
	justify-content: space-between;
`;

export const TCprojectNickname = styled.div``;
export const TCprojectTitle = styled.div`
	font-size: 26px;
	font-weight: 600;
	margin-top: ${({ $marginTop, theme }) => ($marginTop ? [$marginTop] : '0px')};
	margin-bottom: ${({ $marginBottom, theme }) =>
		$marginBottom ? [$marginBottom] : '0px'};
`;

export const TeamMemberText = styled.span`
	display: inline-block;
	vertical-align: middle; /* 세로 가운데 정렬 */
	line-height: 2.252vh; /* 아이콘 높이에 맞춤 */
	font-size: 2.162vh;
	color: ${({ theme }) => theme.color.gray6};
	justify-content: flex-start;
`;

export const TeamCrewdiv2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 985px;
	height: auto;
	padding: 20px;
	border: none;
	border-radius: 25px;
	background-color: ${({ $color, theme }) =>
		$color ? [$color] : theme.color.gray1};
	margin-top: 15px;
	margin-left: 37px;
	margin-right: 37px;
`;

export const TeamMember2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	right: 0;
	width: 985px;
	height: auto;
	padding: 20px;
	border: none;
	border-radius: 25px;
	background-color: ${({ $color, theme }) =>
		$color ? [$color] : theme.color.gray1};
	margin-left: 28px;
	margin-bottom: 56px;
`;

export const Buttondiv = styled.div`
	display: flex;
	justify-content: right; // [변경] justify-items를 justify-content로 수정
	gap: 10px; // [추가] 버튼 사이 간격
`;

export const ApplyButton = styled.button`
	width: 12.162vh;
	height: 4.505vh;
	display: flex;
	justify-content: center;
	text-align: center;
	gap: 10px;
	font-size: 20px;
	line-height: 44px;
	background-color: ${({ $bcolor, theme }) =>
		$bcolor ? theme.color[$bcolor] : theme.color.gray2};
	color: ${({ $textColor, theme }) =>
		$textColor === 'white' ? 'white' : theme.color.text};
	padding: 4px 12px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		filter: brightness(0.9);
	}
`;
