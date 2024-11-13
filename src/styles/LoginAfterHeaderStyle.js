import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.h1`
    font-family: "Pretendard", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${({ theme }) => theme.color.primary};
    margin: 27px 332px 27px 200px;
    cursor: pointer;
`;

export const Tab = styled.div`
    color: ${({ theme }) => theme.color.text}; 
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 63px;
    cursor: pointer;
`;

export const Tab2 = styled.div`
    color: ${({ theme }) => theme.color.gray4}; 
    ffont-family: "Pretendard", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;
