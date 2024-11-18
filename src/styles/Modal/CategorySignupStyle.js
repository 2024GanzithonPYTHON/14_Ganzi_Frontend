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

// 회원가입 2/3 가입하기 버튼 

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
    width: 80%;

    @media (max-width: 2560px) {
        font-size: 1.5rem;
        height: 10%;
        margin-left: 10%;
        margin-top: 5%;
    }
       

    @media (max-width: 1440px) {
        font-size: 1.5rem;
        height: 10%;
        margin-left: 9%;
        margin-top: 20%;
    }

    @media (max-width: 1024px) {
        font-size: 1.5rem;
        height: 23%;
        margin-left: 9%;
        margin: 10%;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
        height: 15%;
        margin-left: 9%;
        margin: 10%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }
`;

// 회원가입 3/3 가입하기 버튼 

export const SButton = styled.button`
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

    @media (max-width: 2560px) {
        font-size: 1.5rem;
        height: 15%;
        width: 75%;
        margin-left: 12%;
        margin-top: 5%;
       

    @media (max-width: 1440px) {
        font-size: 1.5rem;
        height: 18%;
        width: 75%;
        margin-left: 12%;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
        height: 16%;
        width: 72%;
        margin-left: 13%;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
        height: 15%;
        width: 70%;
        margin-left: 13%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 0 70px 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 15px 60px 15px;

`;

// 회원가입 2/3 카테고리 

export const Text = styled.div`
    color: var(--gray5, #767E84);   
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 2560px) {
        font-size: 1.5rem;
        margin-left: 5%;
        margin-top: 15%;
    }

    @media (max-width: 1440px) {
        font-size: 1.8rem;
        margin-left: 5%;
        margin-top: 10%;
    }
`;

export const CategoryContainer = styled.div`
    margin-bottom: 10%;

    @media (max-width: 2560px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "50%")}; 
        margin-left: -3%;
    }

    @media (max-width: 1440px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "45%")}; 
        margin-left: 3%; 
    }

    @media (max-width: 1024px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "50%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "100%")}; 
    }

    @media (max-width: 768px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "90%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "90%" : "90%")}; 
    }
`;


export const CategoryButton = styled.div`
    color: ${({ theme, isSelected }) => (isSelected ? '#fff' : theme.color.gray4)};
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
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

    @media (max-width: 2560px) {
        font-size: 1rem;
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "75%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "20%")}; 
    }

    @media (max-width: 1440px) {
        font-size: 1rem;
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "75%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "40%")}; 
    }

    @media (max-width: 1024px) {
        font-size: 1rem;
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "35%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "40%")}; 
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

    @media (max-width: 2560px) {
        font-size: 1.3rem;
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "100%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "40%")}; 
    }
`;

// 탈퇴

export const WithdrawText = styled.div`
    color: ${({ theme }) => theme.color.gray5};   
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 2560px) {
        font-size: 1.5rem;
        margin-left: 1%;
        margin-bottom: 5%;
    }

    @media (max-width: 1440px) {
        font-size: 1.5rem;
        margin-left: -3%;
        margin-bottom: 5%;
    }

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        margin-left: -7%;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: -8%;
    }
`;

export const WithdrawSuccessText = styled.div`
    color: ${({ theme }) => theme.color.text};   
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (max-width: 2560px) {
        font-size: 1.5rem;
        margin-left: 25%;
        margin-top: 10%;
    }

    @media (max-width: 1440px) {
        font-size: 1.5rem;
        margin-left: 20%;
        margin-top: 10%;
    }

    @media (max-width: 1024px) {
        font-size: 1.5rem;
        margin-left: 15%;
        margin-top: 10%;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
        margin-left: 10%;
        margin-top: 10%;
    }
`;
