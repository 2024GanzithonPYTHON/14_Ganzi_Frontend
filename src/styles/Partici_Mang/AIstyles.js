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
	width: 468px;
	height: 419px;
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

export const GptQuitButton = styled.img`
	font-size: 40px;
	line-height: 0px;
	border-style: none;
	background: transparent;
	cursor: pointer;
	width: 40px;
	height: 40px;
`;

export const GptinputChatText = styled.input`
	width: 468px;
	height: 70px;
	display: flex;
	border: none;
	margin: auto;
	padding-left: 22px;
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
`;
export const SendingButton = styled.button`
	margin: auto;
`;
