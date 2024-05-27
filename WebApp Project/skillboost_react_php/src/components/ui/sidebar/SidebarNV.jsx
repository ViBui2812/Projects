import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg';

import ChartLine from '../../icons/Interface/ChartLine';
import Users from '../../icons/User/Users';
import User03 from '../../icons/User/User03';
import Notebook from '../../icons/File/Notebook';

const SidebarContainer = styled.div`
  background-color: transparent;
  width: 232px;
  height: 100vh;
  border-right: 1px solid #dee2e6;
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 16px;
  gap: 16px;
  color: #5E6A6E;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #1A1F23; /* Reset color */
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #5200FF; /* Stroke color */
  }

  &.active {
    color: #5200FF;
    font-weight: regular;
  }
`;

const SidebarNV = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={SkillboostLogo} alt="Logo" />
      </LogoContainer>
      <nav>
        <StyledNavLink to="/dashboard" activeClassName="active" className="flex space-x-[16px]">
          <ChartLine strokeWidth={1.5}/>
          Số liệu
        </StyledNavLink>
        <StyledNavLink to="/lead/thongtin" activeClassName="active" className="flex space-x-[16px]">
          <Users strokeWidth={1.5}/>
          Lead
        </StyledNavLink>
        <StyledNavLink to="/khachhang" activeClassName="active" className="flex space-x-[16px]">
          <User03 strokeWidth={1.5}/>
          Khách hàng
        </StyledNavLink>
        <StyledNavLink to="/khoahocAdmin" activeClassName="active" className="flex space-x-[16px]">
          <Notebook strokeWidth={1.5}/>
          Khóa học
        </StyledNavLink>
      </nav>
    </SidebarContainer>
  );
};

export default SidebarNV;
