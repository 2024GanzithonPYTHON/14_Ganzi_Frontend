import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const EditIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10%;
  margin-right: 20px;
`;

export const PointAndEditContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  gap: 10px; 
`;

export const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
  gap: 3%;
  position: relative; 
  white-space: nowrap;
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
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.color.gray6};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 35%;
`;

export const UserPoint = styled.div`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PointScore = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PointScore2 = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const UserIcon = styled.img`
  width: 90px;
  height: 90px;
`;

export const PointIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 3%;
`;

export const UserEditIcon = styled.img`
  width: 44px;
  height: 44px;
  margin-left: 100%;
  cursor: pointer;
`;