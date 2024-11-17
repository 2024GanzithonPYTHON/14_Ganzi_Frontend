import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 73px 460px;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 25%;
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
    width: 40%;
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
