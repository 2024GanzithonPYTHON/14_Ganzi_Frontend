import styled from 'styled-components';

export const IntroFormLinkText = styled.div`
	width: 468px;
	height: 70px;
	display: flex;
	border: none;
	margin: auto;
	padding-left: 22px;
	border-radius: 15px;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 24px;
	align-items: center;
	color: ${({ theme }) => theme.color.text};
	background-color: ${({ theme }) => theme.color.gray1};
`;
export const IntroFormCompntText = styled.div`
	width: 468px;
	height: 419px;
	display: flex;
	border: none;
	margin: auto;
	padding-left: 22px;
	border-radius: 15px;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 24px;
	padding-top: 20px;
	line-height: 50px;
	color: ${({ theme }) => theme.color.text};
	background-color: ${({ theme }) => theme.color.gray1};
`;

export const InfoQuitButton = styled.img`
	font-size: 40px;
	line-height: 0px;
	border-style: none;
	background: transparent;
	cursor: pointer;
	width: 40px;
	height: 40px;
`;
