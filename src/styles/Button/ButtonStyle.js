import styled, { keyframes } from 'styled-components';

const sparkleAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

export const Button = styled.div`
  width: 20%;
  border: none;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    transform: scale(1.05); // 클릭 시 살짝 확대
    transition: transform 0.3s ease-in-out;
  }
`;

export const SwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  &:hover {
    transform: scale(1.1); // 이미지 확대 효과
  }
`;
