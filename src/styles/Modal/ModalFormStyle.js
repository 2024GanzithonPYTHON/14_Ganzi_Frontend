import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000; /* 화면 위로 올리기 */
`;
export const ModalForm = styled.div`
	width: 650px;
	height: 725px;
	margin: auto;
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 60px;
	margin-top: 11.5vh;
	display: block;
`;

export const ModalBodyTitle = styled.div`
	padding-top: 76px;
	padding-right: 76px;
	padding-left: 76px;
	padding-bottom: 26px;
	font-size: 32px;
	font-weight: 600;
	color: black;
	margin-bottom: 32px;
	display: flex;
	justify-content: space-between;
`;
export const FormTypeCompnt = styled.input`
	width: 468px;
	height: 70px;
	display: flex;
	justify-content: center;
	border: none;
	margin: auto;
	padding-left: 22px;
	border-radius: 15px;
	font-size: 22px;
	font-weight: 500;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
	margin-bottom: 24px;
`;
export const FormTypeCompntText = styled.input`
	width: 468px;
	height: 319px;
	display: flex;
	border: none;
	margin: auto;
	padding-left: 22px;
	border-radius: 15px;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 24px;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
`;
export const FormSubmitBTN = styled.button`
	width: 480px;
	height: 70px;
	background-color: ${({ theme }) => theme.color.primary};
	margin: auto;
	color: white;
	font-size: 20px;
	font-weight: 400;
	border: none;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ModalButton = styled.button`
	position: sticky;
	width: 480px;
	height: 70px;
	bottom: 36px;
	background-color: ${({ theme }) => theme.color.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	color: white;
	border: none;
	border-radius: 15px;
	font-size: 24px;
	font-weight: 600;
	cursor: pointer;
`;
export const ModalQuitButton = styled.img`
	font-size: 40px;
	line-height: 0px;
	border-style: none;
	background: transparent;
	cursor: pointer;
`;
