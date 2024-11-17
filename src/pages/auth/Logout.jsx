import React from 'react';
import * as LAHe from '../../styles/LoginAfterHeaderStyle';
import { useNavigate } from 'react-router-dom';


const Logout = ({ }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    const confirmed = window.confirm('로그아웃하시겠습니까?')
		if (confirmed) {
      navigate('/');
    }
    
	};

  return (
    <>
        <LAHe.Tab2 onClick={handleLogoutClick}>로그아웃</LAHe.Tab2>
    </>
  )
}

export default Logout;