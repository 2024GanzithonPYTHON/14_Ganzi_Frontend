import styled from "styled-components";

export const InputContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const Input = styled.input`
    color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 500;
    width: 100% 
    padding: 0 22px; 
    margin: 0 0 13px 60px;  
    border: none;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.gray1};
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    border-radius: 15px;
    border: none;
    height: 10%;

    @media (max-width: 1440px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0%" : "100px 60px 0")}; 
    }

    @media (max-width: 1024px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0" : "250px 60px 0%")}; 
    }

    @media (max-width: 768px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0" : "350px 60px 0")}; 
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }
`;

export const NButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    border-radius: 15px;
    border: none;
    height: 10%;

    @media (max-width: 1440px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0%" : "100px 60px 0")}; 
    }

    @media (max-width: 1024px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0" : "250px 60px 0%")}; 
    }

    @media (max-width: 768px) {
        margin: ${({ isWithdraw }) => (isWithdraw ? "0" : "350px 60px 0")}; 
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 0 70px 47px;
`;

export const Text = styled.div`
    color: var(--gray5, #767E84);   
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 15px 60px 15px;

`;

export const CategoryContainer = styled.div`
    margin-bottom: 10%;
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

// 탈퇴

export const WithdrawText = styled.div`
    color: ${({ theme }) => theme.color.gray5};   
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
