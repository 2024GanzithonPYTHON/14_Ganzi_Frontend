import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.h1`
    font-family: "Pretendard", sans-serif;  
    font-size: 32px;
    font-weight: 800;
    line-height: normal;
    margin: 27px 776px 27px 200px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
`;

export const Tab = styled.div`
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    margin-right: 65px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.text};
`;
