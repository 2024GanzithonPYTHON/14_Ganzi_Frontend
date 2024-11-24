import React from 'react';
import * as B from '../../styles/Button/ButtonStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import LetSwiftImg from '../../assets/img/LetSwift.png';
import LetSwift2Img from '../../assets/img/LetSwift2.png';
import LetSwift3Img from '../../assets/img/LetSwift3.png';

import FestaImg from '../../assets/img/Festa.png';
import Festa2Img from '../../assets/img/Festa2.png';
import Festa3Img from '../../assets/img/Festa3.png';

import SSAImg from '../../assets/img/SSA.png';
import SSA2Img from '../../assets/img/SSA2.png';
import SSA3Img from '../../assets/img/SSA3.png';

import SprintImg from '../../assets/img/Sprint.png'
import Sprint2Img from '../../assets/img/Sprint2.png'
import Sprint3Img from '../../assets/img/Sprint3.png'


const Button = () => {

  const handleButtonClick = () => {
    window.location.href = "https://letswift.kr/2024/";
  };

  const handleButtonClick2 = () => {
    window.location.href = "https://festa.io/events/6342";
  };

  const handleButtonClick3 = () => {
    window.location.href = "https://sesac.seoul.kr/common/greeting.do";
  };

  const handleButtonClick4 = () => {
    window.location.href = "https://sprint.codeit.kr/track/data?utm_source=hola&utm_medium=community&utm_content=data";
  };

  return (
    <>
      <B.Button>
        <Swiper 
          onClick={handleButtonClick}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <B.SwiperImage src={LetSwiftImg} alt="LetSwift 1" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={LetSwift2Img} alt="LetSwift 2" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={LetSwift3Img} alt="LetSwift 3" />
          </SwiperSlide>
        </Swiper>
      </B.Button>
      <B.Button>
        <Swiper
          onClick={handleButtonClick2}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <B.SwiperImage src={FestaImg} alt="Festa 2" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={Festa2Img} alt="Festa 2" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={Festa3Img} alt="Festa 3" />
          </SwiperSlide>
        </Swiper>
      </B.Button>
      <B.Button>
        <Swiper
          onClick={handleButtonClick3}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <B.SwiperImage src={SSAImg} alt="SSA 1" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={SSA2Img} alt="SSA 2" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={SSA3Img} alt="SSA 3" />
          </SwiperSlide>
        </Swiper>
      </B.Button>
      <B.Button>
        <Swiper
          onClick={handleButtonClick4}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <B.SwiperImage src={SprintImg} alt="Sprint 1" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={Sprint2Img} alt="Sprint 2" />
          </SwiperSlide>
          <SwiperSlide>
            <B.SwiperImage src={Sprint3Img} alt="Sprint 3" />
          </SwiperSlide>
        </Swiper>
      </B.Button>
    </>
  );
};

export default Button;
