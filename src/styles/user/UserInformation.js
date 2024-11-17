import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;


export const Title = styled.div`
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 29px 0 66px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 20px 0 50px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 15px 0 40px;
  }
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.color.gray6};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
`;

export const UserIcon = styled.img`
  width: 90px;
  height: 90px;
  color: ${({ theme }) => theme.color.secondary1};

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const UserEditIcon = styled.img`
  position: absolute;
  bottom: -5px;
  right: -10px;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.gray3};

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    bottom: 3px;
    right: 3px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    bottom: 2px;
    right: 2px;
  }
`;
