import styled from 'styled-components';
import ArrowIcon from '../components/Participate/img/arrow.png';
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
	color: ${({ theme }) => theme.color.gray4};
	font-size: 1.5rem;
	font-weight: 600;
	background-image: url(${SearchIcon});
	background-repeat: no-repeat;
	background-position: left 20px center;
`;

export const Searchbutton = styled.button`
	height: 44px;
	width: 2vw;
`;

export const Typeselect = styled.select`
	height: 67px;
	width: 184px;
	border: none;
	border-radius: 33.5px;
	font-size: 1.3rem;
	text-align: center;
	color: ${({ theme }) => theme.color.gray4};
	background-color: ${({ theme }) => theme.color.gray1};
	-webkit-appearance: none;
	appearance: none;
	background-image: url(${ArrowIcon});
	background-repeat: no-repeat;
	background-position: right 20px center;
	padding-right: 12px;
`;
