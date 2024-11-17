import styled from "styled-components";

export const ModalContent = styled.div`
    padding: 30px;
    border-radius: 60px;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 1440px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "100%")}; 
        margin-left: -5%;
    }

    @media (max-width: 1024px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "100%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "100%" : "100%")}; 
    }

    @media (max-width: 768px) {
        width: ${({ isWithdraw }) => (isWithdraw ? "100%" : "90%")}; 
        height: ${({ isWithdraw }) => (isWithdraw ? "90%" : "90%")}; 
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%; 
    max-width: 540px; 
    margin: 0 auto;
`;

export const Input = styled.input`
    color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 500;
    width: 90%; 
    height: 70px; 
    padding: 0 22px; 
    margin-bottom: 13px;
    border: none;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.gray1};
`;

export const IdContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    margin-bottom: 13px;
`;

export const IdInput = styled.input`
    color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 500;
    width: 100%;
    height: 70px; 
    padding: 0 22px; 
    border: none;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.gray1};
    margin-right: 8px;
`;

export const IdButton = styled.button`
    background-color: ${({ theme }) => theme.color.gray3};
    color: ${({ theme }) => theme.color.gray5};
    border: none;
    border-radius: 11px;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding: 0 15px;
    width: 30%;
    height: 70px; 
    cursor: pointer;
`;

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    border-radius: 15px;
    margin-top: 20px;
    border: none;
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
    font-weight: 500;
    border-radius: 15px;
    border: none;
    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }

    @media (max-width: 1440px) {
        width: 100%;
        font-size: 1.5rem;
        height: 70px;
        margin: 40px;
    }

    @media (max-width: 1024px) {
        width: 90%;
        font-size: 1.2rem;
        height: 55px;
        margin: 40px;
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 1.1rem;
        height: 55px;
        margin: 0;
    }
`;

export const PhoneText = styled.div`
    color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 11px 0 22px;
`;
