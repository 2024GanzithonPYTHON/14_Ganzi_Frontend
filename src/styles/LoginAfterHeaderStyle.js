import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	width: 100vw;
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
	left: clamp(10px, 2vw, 50px);
	color: ${({ theme }) => theme.color.primary};
	cursor: pointer;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const Tab = styled.div`
	color: ${({ theme, $active }) =>
		$active ? theme.color.primary : theme.color.text};
	font-family: 'Pretendard', sans-serif;
	font-size: clamp(14px, 1.5vw, 18px); /* 최소 14px, 기본 1.5vw, 최대 18px */
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-right: clamp(20px, 4vw, 63px);
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
`;

export const Tab2 = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-family: 'Pretendard', sans-serif;
	font-size: clamp(14px, 1.5vw, 18px);
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
`;
