import styled from 'styled-components';

export const Div4 = styled.div`
	height: fit-content;
`;
export const AiListstyle = styled.div`
	background-color: gray;
	width: 1;
	height: fit-content;
	margin-bottom: 30px;
	padding: 0px 30px;
	padding-bottom: 50px;
	font-size: 24px;
	font-weight: 600;
	color: ${({ theme }) => theme.color.text};
	overflow: scroll;
`;

export const AiListContainer = styled.div`
	padding: 20px;
	width: 50vw;
	margin-left: 150px;
	margin-right: 100px;
`;

export const MeetingItem = styled.div`
	padding: 10px 0;
	margin-bottom: 54px;
	align-items: center;
`;

export const MeetingTitle = styled.div`
	font-size: 24px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 74px;

	span {
		color: #888;
		font-size: 0.9rem;
	}
`;

export const MeetingDetails = styled.div`
	margin-top: 10px;
	padding-left: 20px;
	color: #555;
`;

export const FloatingIcon = styled.img`
	height: 90px;
	width: 90px;
	bottom: 50px;
	right: 40px;
	position: fixed;
	cursor: pointer;
`;
export const GptComment = styled.div`
	margin-top: 5px;
	color: #444;
	bottom: 50px;
	font-size: 24px;
`;

export const GptFormCompntText = styled.div`
	width: 540px;
	height: 419px;
	display: flex;
	border: none;
	margin: auto;
	padding: 22px;
	border-radius: 15px;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 24px;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
`;

export const GptQuitButton = styled.img`
	font-size: 40px;
	line-height: 0px;
	border-style: none;
	background: transparent;
	cursor: pointer;
	width: 40px;
	height: 40px;
	display: grid;
	justify-content: flex-end;
`;

export const GptinputChatText = styled.input`
	width: 460px;
	height: 70px;
	display: flex;
	border: none;
	margin: auto;
	padding-left: 24px;
	border-radius: 15px;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 24px;
	align-items: center;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
`;

export const ChatInput = styled.div`
	display: flex;
	width: 568px;
`;
export const SendingButton = styled.button`
	width: 78px;
	height: 68px;
	align-content: center;
	align-items: center;
	margin: auto;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 24px;
	border: none;
	border-radius: 15px;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};

	&:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: #fff;
	}
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalForm = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalBodyTitle = styled.div`
	display: flex;
	justify-content: right; /* 왼쪽과 오른쪽으로 배치 */
	align-items: center; /* 세로 가운데 정렬 */
	padding: 20px 16px; /* 좌우 여백 추가 */
`;
