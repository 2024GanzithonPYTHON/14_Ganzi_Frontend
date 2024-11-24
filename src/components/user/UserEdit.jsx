import React, { useState, useEffect } from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import { useNavigate } from 'react-router-dom';
import * as SM from "../../styles/Modal/SignupStyle";
import * as DB from '../../styles/Button/DefaultButtonStyle';
import * as UC from '../../styles/user/UserCategory';
import axios from 'axios';

const UserEdit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [originalNickname, setOriginalNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  // 사용자 정보 저장
  const handleSave = async () => {
    if (!isNicknameAvailable) {
      alert('닉네임을 먼저 확인해주세요.');
      return;
    }

    if (selectedCategories.length === 0) {
      alert('카테고리를 선택해주세요.');
      return;
    }

    try {
      // 닉네임과 카테고리 정보 업데이트
      const response = await axios.put(`/api/user/${nickname}/update`, {
        nickName: nickname,
        categories: selectedCategories,  // 카테고리를 리스트로 전달
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        alert('닉네임과 카테고리가 변경되었습니다.');
        navigate('/mypage');
      }
    } catch (error) {
      console.error('에러 메시지:', error);
      alert('수정에 실패했습니다.');
    }
  };

  // 유저 정보 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOriginalNickname(response.data.nickName);
        setNickname(response.data.nickName);
        setSelectedCategories(response.data.categories || []);  // 기존 카테고리 정보 불러오기
      } catch (error) {
        console.error('에러 메시지', error);
      }
    };
    fetchUserData();
  }, []);

  const handleNicknameChange = (e) => setNickname(e.target.value);

  // 닉네임 중복 확인
  const handleNicknameCheck = async () => {
    try {
      const response = await axios.post('/api/user/check/name', {
        sentence: nickname,
      });
      if (response.status === 200) {
        setIsNicknameAvailable(true);
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      setIsNicknameAvailable(false);
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <UI.Container>
      <UI.Title>마이페이지</UI.Title>
      <UI.InformationContainer>
        <UI.EditIconContainer>
          <UI.UserIcon src={ProfileIcon} alt="Profile Icon" />
        </UI.EditIconContainer>
        <SM.IdEditContainer>
          <SM.IdEditInput
            type="text"
            placeholder={originalNickname}
            value={nickname}
            onChange={handleNicknameChange}
          />
          <SM.IdEditButton onClick={handleNicknameCheck}>중복 확인</SM.IdEditButton>
        </SM.IdEditContainer>
      </UI.InformationContainer>
      
      <UC.Container>
        <UC.TitleContainer>
          <UC.Title>카테고리</UC.Title>
        </UC.TitleContainer>
        <UC.CategoryContainer>
          <UC.ButtonContainer>
            <UC.CategoryButton2
              $isSelected={selectedCategories.includes('웹/모바일/IT')}
              onClick={() => handleCategoryChange('웹/모바일/IT')}
            >
              웹/모바일/IT
            </UC.CategoryButton2>
            <UC.CategoryButton
              $isSelected={selectedCategories.includes('광고/마케팅')}
              onClick={() => handleCategoryChange('광고/마케팅')}
            >
              광고/마케팅
            </UC.CategoryButton>
          </UC.ButtonContainer>
          <UC.ButtonContainer>
            <UC.CategoryButton
              $isSelected={selectedCategories.includes('취업/창업')}
              onClick={() => handleCategoryChange('취업/창업')}
            >
              취업/창업
            </UC.CategoryButton>
            <UC.CategoryButton2
              $isSelected={selectedCategories.includes('기획/아이디어')}
              onClick={() => handleCategoryChange('기획/아이디어')}
            >
              기획/아이디어
            </UC.CategoryButton2>
          </UC.ButtonContainer>
          <UC.ButtonContainer>
            <UC.CategoryButton2
              $isSelected={selectedCategories.includes('게임/소프트웨어')}
              onClick={() => handleCategoryChange('게임/소프트웨어')}
            >
              게임/소프트웨어
            </UC.CategoryButton2>
            <UC.CategoryButton
              $isSelected={selectedCategories.includes('디자인')}
              onClick={() => handleCategoryChange('디자인')}
            >
              디자인
            </UC.CategoryButton>
          </UC.ButtonContainer>
        </UC.CategoryContainer>
      </UC.Container>

      <DB.Button onClick={handleSave}>저장하기</DB.Button>
    </UI.Container>
  );
};

export default UserEdit;
