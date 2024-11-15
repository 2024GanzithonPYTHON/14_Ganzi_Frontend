import React from 'react';
import * as B from '../../styles/ButtonStyle';

const Button = () => {

  const handleButtonClick1 = () => {
    alert("첫 번째 버튼이 클릭되었습니다!");
  };

  const handleButtonClick2 = () => {
    alert("두 번째 버튼이 클릭되었습니다!");
  };

  const handleButtonClick3 = () => {
    alert("세 번째 버튼이 클릭되었습니다!");
  };

  const handleButtonClick4 = () => {
    alert("네 번째 버튼이 클릭되었습니다!");
  };

  return (
    <>
      <B.Button onClick={handleButtonClick1}>Ad</B.Button>
      <B.Button2 onClick={handleButtonClick2}>공모전</B.Button2>
      <B.Button3 onClick={handleButtonClick3}>+</B.Button3>
      <B.Button4 onClick={handleButtonClick4}>+</B.Button4>
    </>
  );
};

export default Button;
