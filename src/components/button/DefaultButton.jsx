import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import * as DB from '../../styles/Button/DefaultButtonStyle';

const DefaultButton = ({
  projectName,
  title,
  grade,
  contributorNum,
  category,
  recruitmentPosition,
  content,
  deadLine,
  link,
}) => {
  const navigate = useNavigate();

  const handleButtonClick1 = async () => {
    const accessToken = localStorage.getItem('accessToken'); // accessToken 가져오기
    if (!accessToken) {
      window.alert('로그인이 필요합니다.');
      navigate('/login'); // 로그인 페이지로 이동
      return;
    }

    const requestBody = {
      projectName,
      title,
      grade,
      contributorNum,
      category,
      recruitmentPosition,
      content,
      deadLine,
      link,
    };

    try {
      const response = await axios.post('/api/project', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, // 헤더에 토큰 추가
        },
      });

      if (response.status === 200 || response.status === 201) {
        window.alert('등록되었습니다.');
        navigate('/participate');
      }
    } catch (error) {
      if (error.response) {
        console.error('등록 실패:', error.response.data);
        if (error.response.status === 401) {
          window.alert('로그인이 만료되었습니다. 다시 로그인 해주세요.');
          navigate('/');
        } else {
          window.alert('등록에 실패했습니다.');
        }
      } else {
        console.error('에러 발생:', error.message);
        window.alert('에러가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  return <DB.Button onClick={handleButtonClick1}>등록하기</DB.Button>;
};

export default DefaultButton;
