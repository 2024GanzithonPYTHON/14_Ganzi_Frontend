import React, { useState, useEffect } from 'react';
import * as UI from '../../styles/user/UserInformation';
import ProfileIcon from '../../assets/icons/Profile.svg';
import { useNavigate } from 'react-router-dom';
import * as SM from '../../styles/Modal/SignupStyle';
import axios from 'axios';
import UserEdit from '../../components/user/UserEdit';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';

const Edit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [originalNickname, setOriginalNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]); // 카테고리 상태 추가

  const accessToken = localStorage.getItem('accessToken');

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
      const response = await axios.put(
        '/api/user/update',
        {
          nickName: nickname,
          category: selectedCategories, // 카테고리와 함께 전송
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        alert('닉네임과 카테고리가 변경되었습니다.');
        navigate('/mypage');
      }
    } catch (error) {
      console.error('에러 메시지:', error);
      alert('수정에 실패했습니다.');
    }
  };

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
      } catch (error) {
        console.error('에러 메시지', error);
      }
    };
    fetchUserData();
  }, [accessToken]);

  const handleNicknameChange = (e) => setNickname(e.target.value);

  const handleNicknameCheck = async () => {
    try {
      const response = await axios.post('/api/user/check/name', {
        sentence: nickname,
      });
      if (response.status === 200) {
        setIsNicknameAvailable(true);
        setErrorMessage('');
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      setIsNicknameAvailable(false);
      setErrorMessage('이미 존재하는 닉네임입니다.');
    }
  };

  return (
    <>
    <LoginAfterHeader />
      <UI.Container>
        <UserEdit />
      </UI.Container>
    </>
  );
};

export default Edit;
