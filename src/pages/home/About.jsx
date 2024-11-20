import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from '../../styles/About';

import HomeMemberIcon from '../../assets/icons/HomeMember.svg';
import HomeProjectIcon from '../../assets/icons/HomeProject.svg';
import HomeAIIcon from '../../assets/icons/HomeAI.svg';

const About = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleHomeClick = () => {
        navigate('/');
    };
    
    return (
      <>
        <A.Container>
          <A.Title>ProLink</A.Title>
          <A.SubTitle>"Prolink, 연결이 곧 가능성입니다."</A.SubTitle>
          <A.Content>팀워크와 효율성을 재정의하다.</A.Content>
          <A.SubContent>
            우리 서비스는 프로젝트 관리, 팀원 협업, 그리고 효율적인 업무 분담을 지원하는 올인원 플랫폼입니다.<br />
            사용자는 참여 중인 프로젝트와 완료된 프로젝트를 한눈에 관리하고, 팀원들과 효과적으로 소통할 수 있습니다.<br />
            AI 기반 회의록 작성 도구까지 제공하여 회의의 생산성을 극대화하며, 시간과 노력을 절약할 수 있습니다.<br />
          </A.SubContent>
          </A.Container>
          <A.FeatContainer>
            <A.SubTitle2>“ProLink” 흠 뭐라고 쓰지</A.SubTitle2>
            <A.HomeContainer>
            <A.HomeMember>
              <A.MemberIcon src={HomeMemberIcon} alt="HomeMember Icon" />
              <A.HomeTitle>
                팀원 관리
              </A.HomeTitle>
              <A.MemberContent>
                각 팀원의 역할과 진행 상황을<br />
                손쉽게 파악할 수 있는<br />
                직관적인 인터페이스를 제공합니다.<br />
              </A.MemberContent>
            </A.HomeMember>
            <A.HomeProject>
              <A.ProjectIcon src={HomeProjectIcon} alt="HomeProject Icon" />
              <A.HomeTitle>
                프로젝트 관리
              </A.HomeTitle>
              <A.ProjectContent>
                프로젝트 진행 상황을 체계적으로<br />
                관리하고, 협업을 위한<br />
                최적의 도구를 제공합니다.<br />
              </A.ProjectContent>
            </A.HomeProject>
            <A.HomeAI>
              <A.AIIcon src={HomeAIIcon} alt="HomeAI Icon" />
              <A.HomeTitle>
                AI 회의록
              </A.HomeTitle>
              <A.AIContent>
                실시간 회의록 작성 및 요약을 통해<br />
                중요한 정보를 놓치지 않도록<br />
                지원합니다.<br />
              </A.AIContent>
            </A.HomeAI>
            </A.HomeContainer>
          </A.FeatContainer>
          <A.Footer>
            <A.SubContent3>
              Ⓒ일사천리, ALL RIGHTS RESERVED. <br />
              강정민 고은빈 김유나 곽현민 오수경 이유빈 <br />
            </A.SubContent3>
          </A.Footer>
      </>
    );
}

export default About;