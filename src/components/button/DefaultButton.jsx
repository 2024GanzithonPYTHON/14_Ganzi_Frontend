import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as DB from '../../styles/Button/DefaultButtonStyle';

const DefaultButton = () => {
    const navigate = useNavigate();

    const handleButtonClick1 = () => {
      window.alert('등록되었습니다.');
      navigate('/participate');
    };

  return (
    <>
      <DB.Button onClick={handleButtonClick1}>등록하기</DB.Button>
    </>
  );
};

export default DefaultButton;
