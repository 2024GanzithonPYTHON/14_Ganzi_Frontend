import React from 'react';

const Button = () => {

  const handleButtonClick1 = () => {
    alert("첫 번째 버튼이 클릭되었습니다!");
  };

  const handleButtonClick2 = () => {
    alert("두 번째 버튼이 클릭되었습니다!");
  };

  return (
    <>
      <button onClick={handleButtonClick1}>Button 1</button>
      <button onClick={handleButtonClick2}>Button 2</button>
    </>
  );
};

export default Button;
