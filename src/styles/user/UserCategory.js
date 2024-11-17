import styled from "styled-components";

// 공통

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px;
`;

export const TitleContainer = styled.div`
    display: flex;
`;


export const Title = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

// 카테고리 부분

export const ButtonContainer = styled.div`
    display: flex;
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 20px; 
    width: 100%;
    margin: 32px;
`;

export const CategoryButton = styled.div`
    color: ${({ theme, isSelected }) => (isSelected ? '#fff' : theme.color.gray4)};
    text-align: center;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    width: 30%;
    height: 60%;
    padding: 19px 37px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 59px;
    cursor: pointer;
    background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.gray1)};
    transition: all 0.3s ease-in-out; 
    &:hover {
        background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.primary)};
        transform: scale(1.1); 
        color: #fff;
    }
`;

export const CategoryButton2 = styled.div`
    color: ${({ theme, isSelected }) => (isSelected ? '#fff' : theme.color.secondary1)};
    text-align: center;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    width: 45%;
    height: 60%;
    padding: 19px 37px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 59px;
    cursor: pointer;
    background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.secondary3)};
    transition: all 0.3s ease-in-out; 
    &:hover {
        background: ${({ theme }) => theme.color.primary};
        color: #fff;
        transform: scale(1.1); 
    }
`;

// 회원탈퇴 부분

export const WithdrawContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 20px; 
    width: 100%;
    margin: 32px;
`;

export const SubTitle = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const WithdrawButton = styled.button`
    width: 100px;
    height: 40px;
    color: #FFF;
    border: none;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.primary};
`;