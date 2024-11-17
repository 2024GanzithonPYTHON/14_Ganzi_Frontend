import styled from 'styled-components';
import SearchIcon from '../components/Participate/img/search.png';

export const Titlecontent = styled.div`
	font-family: 'Pretendard', sans-serif;
	font-size: 32px;
	font-weight: 400;
	line-height: normal;
	margin-top: 100px;
	cursor: pointer;
	text-align: center;
`;

export const Searchgroup = styled.div`
	display: flex;
	align-items: center;
	color: red;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 67px;
	gap: 22px;
`;

export const Searchinput = styled.input`
	width: 611px;
	height: 67px;
	border: none;
	border-radius: 33.5px;
	background-color: ${({ theme }) => theme.color.gray1};
	color: ${({ theme }) => theme.color.gray5};
	font-size: 1.5rem;
	font-weight: 400;
	background-image: url(${SearchIcon});
	background-repeat: no-repeat;
	background-position: left 20px center;
	text-align: center;
	text-indent: -55px;
	margin-left: 30px;
	&::placeholder {
		color: ${({ theme }) => theme.color.gray4};
		font-weight: 600;
	}
`;

export const Searchbutton = styled.button`
	height: 67px;
	width: 67px;
	border: none;
	border-radius: 33.5px;
	background-color: ${({ theme }) => theme.color.gray1};
	cursor: pointer;
`;

export const Dropdown = styled.div`
	position: relative;
	width: 184px;
`;

export const SelectedItem = styled.div`
	height: 67px;
	width: 184px;
	border-radius: 33.5px;
	font-size: 1.3rem;
	text-align: center;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 10px;
	cursor: pointer;
`;

export const DropdownList = styled.ul`
	position: absolute;
	width: 184px;
	background-color: ${({ theme }) => theme.color.gray1};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	list-style: none;
	padding: 10px;
	top: 2px;
	margin: 0;
	z-index: 10;
	overflow: hidden;
	border-radius: 33.5px;
	&:first-child {
		border-top-right-radius: 33.5px;
		border-top-left-radius: 33.5px;
	}
	&:last-child {
		border-bottom-right-radius: 33.5px;
		border-bottom-left-radius: 33.5px;
	}
`;

export const DropdownItem = styled.li`
	padding: 15px;
	text-align: center;
	line-height: 27px;
	cursor: pointer;
	color: ${({ theme }) => theme.color.gray4};
	font-size: 1.2rem;

	&:hover {
		padding-bottom: 12px;
		font-weight: 500;
		background-color: ${({ theme }) => theme.color.gray2};
		&:first-child {
			border-top-right-radius: 33.5px;
			border-top-left-radius: 33.5px;
		}
		&:last-child {
			border-bottom-right-radius: 33.5px;
			border-bottom-left-radius: 33.5px;
		}
	}
`;
