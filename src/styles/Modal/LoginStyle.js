import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 60px;
    width: 80%;
    max-width: 650px;
    height: ${({ isSignup }) => (isSignup ? "517px" : "742px")}; 
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
        height: ${({ isSignup }) => (isSignup ? "auto" : "auto")}; 
    }
`;


export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px 75px 26px;
    @media (max-width: 768px) {
        margin: 40px 30px;
    }
`;

export const InputContainer = styled.div`
    align-items: center;
    width: 100%;
`;

export const TextTitle = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const ModalTitle = styled.div`
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const SubTitle = styled.div`
    color:  ${({ theme }) => theme.color.secondary2};
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 13px 10px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.gray4};
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 0 70px 47px;
    @media (max-width: 768px) {
        margin: 0 30px 30px;
    }
`;

export const Text = styled.div`
    color: var(--Gray-Scale-Gray-4, #A1A6A9);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
`;

export const SignupText = styled.div`
    color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Input = styled.input`
    display: flex;
    color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 500;
    width: 70%;
    height: 70px;
    margin: 0 0 13px 70px;  
    padding: 0 22px; 
    border: none;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.gray1};
    @media (max-width: 768px) {
        width: 80%;
        margin: 0 0 13px 10%;
        font-size: 18px;
    }
`;

export const Button = styled.button`
    display: flex;
    margin: 0 60px 76px;
    width: 80%;
    height: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    border-radius: 15px;
    border: none;
    &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
    }
    @media (max-width: 768px) {
        width: 80%;
        font-size: 16px;
        margin: 0 10% 30px;
    }
`;
