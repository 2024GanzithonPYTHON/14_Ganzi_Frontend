import styled from 'styled-components';

export const Home = styled.div`
  background: #FFF;
  width: 1536px;
  height: 940px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 79px 48px 157px;
  gap: 79px;

  @media (max-width: 2560px) {
    padding: 30px 79px 48px 10%;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 2560px) {
    padding: 238px 238px 138px 0;
  }

  @media (max-width: 1440px) {
    padding: 238px 238px 138px 0;
  }

  @media (max-width: 1024) {
    padding: 238px 238px 138px 0;
  }

  @media (max-width: 768) {
    padding: 238px 238px 138px 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29px;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Introduction = styled.div`
  color: ${({ theme }) => theme.color.secondary2};
  text-align: center;
  font-family: Pretendard;
  font-size: 31px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Icon = styled.img`
  width: 585px;
  height: 402px;
`;

export const AboutSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
`;

