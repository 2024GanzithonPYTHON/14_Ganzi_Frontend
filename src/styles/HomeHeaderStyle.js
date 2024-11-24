import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 clamp(10px, 5vw, 100px); 
	height: 80px;
`;

export const Logo = styled.h1`
	font-family: 'Pretendard', sans-serif;
	font-size: clamp(1.5vw, 2vw, 32px); 
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	color: ${({ theme }) => theme.color.primary};
	cursor: pointer;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	gap: clamp(20px, 5vw, 30px);
	flex-grow: 1;
	justify-content: flex-end;
`;

export const Tab = styled.div`
	font-family: 'Pretendard', sans-serif;
	font-size: clamp(14px, 1.5vw, 18px); 
	font-weight: 600;
	line-height: normal;
	cursor: pointer;
	color: ${({ theme, active }) =>
		active ? theme.color.primary : theme.color.text};
`;

