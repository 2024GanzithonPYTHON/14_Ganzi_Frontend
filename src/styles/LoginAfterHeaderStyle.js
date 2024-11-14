import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 200px;
	height: 80px;
`;

export const Logo = styled.h1`
	font-family: 'Pretendard', sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	color: ${({ theme }) => theme.color.primary};

	cursor: pointer;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const Tab = styled.div`
	color: ${({ theme, active }) =>
		active ? theme.color.primary : theme.color.text};
	font-family: 'Pretendard', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	margin-right: 63px;
	cursor: pointer;
`;

export const Tab2 = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-family: 'Pretendard', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	cursor: pointer;
`;
