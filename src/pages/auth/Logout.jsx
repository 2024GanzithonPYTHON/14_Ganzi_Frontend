import React from 'react';
import * as LAHe from '../../styles/LoginAfterHeaderStyle';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    if (window.confirm("로그아웃 하시겠어요?")) {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        window.alert("로그인이 필요합니다.");
        navigate("/");
        return;
      }

      try {
        await axios.post(
          "/api/logout",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("로그아웃 성공");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("세션이 만료되었습니다:", error); 
        } else {
          console.error("로그아웃 처리 중 오류 발생:", error);
          window.alert("로그아웃 처리 중 오류가 발생했습니다.");
        }
      } finally {
        localStorage.removeItem("accessToken");
        navigate("/");
      }
    }
  };

  return (
    <>
      <LAHe.Tab2 onClick={handleLogoutClick}>로그아웃</LAHe.Tab2>
    </>
  );
};

export default Logout;
