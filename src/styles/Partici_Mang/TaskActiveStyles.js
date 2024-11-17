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
