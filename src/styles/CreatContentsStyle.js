import styled from "styled-components";

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 25px 130px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: start;
  justify-content: start;
  margin: 78px 200px 38px;
`;

export const DetailBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 14px 200px;
`;

export const DetailBox2 = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin: 14px 200px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.text};
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin-left: 12px; 
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 1135px;
  height: 70px;
  margin-bottom: 14px;  
  padding: 0 25px; 
  border: none;
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
  background: ${({ theme }) => theme.color.gray1};
`;

export const Input2 = styled.input`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 1135px;
  height: 70px;
  padding: 0 25px; 
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
  border: 1px solid ${({ theme }) => theme.color.gray4};
`;

export const DetailInput = styled.input`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 554px;
  height: 60px;
  padding: 0 25px; 
  margin: 0 28px 0 0;
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
  border: 1px solid ${({ theme }) => theme.color.gray4};
`;

export const DetailInput2 = styled.input`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 554px;
  height: 60px;
  padding: 0 25px;
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
  border: 1px solid ${({ theme }) => theme.color.gray4};
`;

export const IntroduceInput = styled.input`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 1136px;
  height: 250px;
  padding: 0 25px; 
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)}; 
  border: 1px solid ${({ theme }) => theme.color.gray4};
`;

export const SelectInput = styled.select`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 610px;
  height: 60px;
  margin: 0 28px 0 0;
  padding: 0 20px;
  border-radius: 12px;
  color: ${({ theme, value }) => (value ? theme.color.text : theme.color.gray4)};
  border: 1px solid ${({ theme }) => theme.color.gray4};
`;

export const RadioGroup = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;

  label {
    margin-left: 50px;
    margin-right: 90px;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
      &:checked {
        accent-color: ${({ theme }) => theme.color.primary}; /* 체크 색상 */
      }
    }
  }
`;

export const InputLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  width: 554px; 
  height: 60px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.secondary3};

  input {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    width: 554px; 
    padding-left: 10px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.secondary2};
  }

  .icon {
    width: 28px;
    height: 28px;
  }
`;
