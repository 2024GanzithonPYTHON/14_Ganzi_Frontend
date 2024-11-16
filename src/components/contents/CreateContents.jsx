import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from '../../styles/CreatContentsStyle';
import LeftArrowIcon from "../../assets/icons/LeftArrow.svg";
import LinkIcon from "../../assets/icons/LinkIcon.svg";
import DefaultButton from '../../components/button/DefaultButton';

const CreateContents = () => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [idea, setIdea] = useState('');
  const [date, setDate] = useState(null);
  const [position, setPosition] = useState('');  
  const [personnel, setPersonnel] = useState(''); 
  const [category, setCategory] = useState('');
  const [introduce, setIntroduce] = useState(''); 

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value); 
  };

  const handleIdeaChange = (e) => {
    setIdea(e.target.value); 
  };

  const handleDateChange = (e) => {
    setDate(e.target.value); 
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value); 
  };

  const handlePersonnelChange = (e) => {
    setPersonnel(e.target.value); 
  };

  const handleCategoryChange = (e) => {  
    setCategory(e.target.value);
  };


  const handleIntroduceChange = (e) => {
    setIntroduce(e.target.value); 
  };
  

  const handleClickLogin = () => {
    navigate('/');
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <>
      <C.TitleBox>
        <C.Icon 
          src={LeftArrowIcon} 
          alt="LeftArrow Icon" 
          onClick={handleClickLogin} 
        />
        <C.Title>프로젝트 생성하기</C.Title>
      </C.TitleBox>
      <C.ContentBox>
        <C.Input type="text" placeholder="제목" 
            value={title} onChange={handleTitleChange}/>
        <C.Input2 type="text" placeholder="아이디어 한 줄 요약/주제" 
            value={idea} onChange={handleIdeaChange}/>
      </C.ContentBox>
      <C.DetailBox>
        <C.DetailInput type="text" placeholder="모집 포지션"
            value={position} onChange={handlePositionChange} />
        <C.DetailInput2 type="number" placeholder="모집 인원" 
            value={personnel} onChange={handlePersonnelChange}/>
      </C.DetailBox>
      <C.DetailBox>
        <C.SelectInput value={category} onChange={handleCategoryChange}>
          <option value="">프로젝트 분야</option>
          <option value="기획/아이디어">기획/아이디어</option>
          <option value="광고/아이디어">광고/아이디어</option>
          <option value="광고/마케팅">광고/마케팅</option>
          <option value="디자인">디자인</option>
          <option value="웹/모바일/IT">웹/모바일/IT</option>
          <option value="게임/소프트웨어">게임/소프트웨어</option>
          <option value="취업/창업">취업/창업</option>
        </C.SelectInput>
        <C.DetailInput2 type="date" placeholder="모집 마감일" 
            value={date} onChange={handleDateChange}/>
      </C.DetailBox>
      <C.DetailBox2>
        <C.RadioGroup>
          <label>
            <input type="radio" name="type" value="초급" />
            초급
          </label>
          <label>
            <input type="radio" name="type" value="중급" />
            중급
          </label>
          <label>
            <input type="radio" name="type" value="고급" />
            고급
          </label>
        </C.RadioGroup>
        <C.InputLink>
          <C.Icon className="icon" src={LinkIcon} alt="LinkIcon" />
          <input
            type="text"
            placeholder="링크 첨부"
            value={link}
            onChange={handleLinkChange}
          />
        </C.InputLink>
      </C.DetailBox2>
      <C.DetailBox>
        <C.IntroduceInput type="text" placeholder="프로젝트에 진행에 대한 상세한 설명을 적어주세요!" 
            value={introduce} onChange={handleIntroduceChange} />
      </C.DetailBox>
      <DefaultButton/>
    </>
  );
};

export default CreateContents;
