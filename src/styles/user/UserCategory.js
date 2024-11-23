import styled from "styled-components";

// 공통
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const TitleContainer = styled.div`
    display: flex;

    @media (max-width: 2560px) {
        margin-left: 36%;
        margin-top: 1%;
    }

    @media (max-width: 1440px) {
        margin-left: 26%;
        margin-top: 5%;
    }

    @media (max-width: 1024px) {
        margin-left: 15%;
        margin-top: 3%;
    }

    @media (max-width: 768px) {
        margin-left: 4%;
        margin-top: 5%;
    }
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 2560px) {
        font-size: 2rem;
    }

    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }

    @media (max-width: 1024px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
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
    margin: 3% auto;
`;

export const CategoryButton = styled.div`
    color: ${({ theme, isSelected }) => (isSelected ? '#fff' : theme.color.gray4)}; /* 선택된 버튼 텍스트 색 */
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
    background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.gray1)}; /* 선택된 버튼 배경 색 */
    transition: all 0.3s ease-in-out;
    &:hover {
        background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.primary)};
        transform: scale(1.1); 
        color: #fff;
    }
`;

export const CategoryButton2 = styled.div`
    color: ${({ theme, isSelected }) => (isSelected ? '#fff' : theme.color.secondary1)}; /* 선택된 버튼 텍스트 색 */
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
    background: ${({ theme, isSelected }) => (isSelected ? theme.color.primary : theme.color.secondary3)}; /* 선택된 버튼 배경 색 */
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

export const WithdrawTitle = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;

    @media (max-width: 2560px) {
        font-size: 2rem;
    }

    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }

    @media (max-width: 1024px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
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

