import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg';
import HamburgerMd from '../../icons/Menu/HamburgerMd';
import HeaderAdmin from "../../../components/ui/header_footer/admin/headerad/HeaderAdmin";

import ChartLine from '../../icons/Interface/ChartLine';
import Users from '../../icons/User/Users';
import User03 from '../../icons/User/User03';
import Tag from '../../icons/Interface/Tag';
import Notebook from '../../icons/File/Notebook';
import CloseMd from "../../icons/Menu/CloseMd";

const SidebarContainer = styled.div`
position: sticky;
top: 0px;
height: 100vh;
background-color: transparent;
  width: 100% !important;
  height: 100vh;
  border-right: 1px solid #dee2e6;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '232px' : '72px')};
    overflow: hidden;
  }
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 16px;
  gap: 16px;
  color: #5e6a6e;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #1a1f23;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #5200ff;
  }

  &.active {
    color: #5200ff;
    font-weight: regular;
  }
`;

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const SidebarQL = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main >
      <div name="desktop" className='max-sm:hidden'>
        <SidebarContainer isOpen={isOpen} >
          <LogoContainer>
            <img src={SkillboostLogo} alt="Logo" />
          </LogoContainer>
          <nav>
            <StyledNavLink to="/dashboard" activeClassName="active" className="flex space-x-[16px]">
              <ChartLine strokeWidth={1.5} />
              Dashboard
            </StyledNavLink>
            <StyledNavLink to="/lead/thongtin" activeClassName="active" className="flex space-x-[16px]">
              <Users strokeWidth={1.5} />
              Lead
            </StyledNavLink>
            <StyledNavLink to="/khachhang" activeClassName="active" className="flex space-x-[16px]">
              <User03 strokeWidth={1.5} />
              Khách hàng
            </StyledNavLink>
            <StyledNavLink to="/dsqdgg" activeClassName="active" className="flex space-x-[16px]">
              <Tag strokeWidth={1.5} />
              Quy định giảm giá
            </StyledNavLink>
            <StyledNavLink to="/khoahocAdmin" activeClassName="active" className="flex space-x-[16px]">
              <Notebook strokeWidth={1.5} />
              Khóa học
            </StyledNavLink>
          </nav>
        </SidebarContainer>
      </div>


      <div name="mobile" className="hidden max-sm:flex absolute items-center z-10">
        <nav className="absolute z-10 top-8 left-6 mt-2 max-sm:flex-col max-sm:gap-10 rounded-lg h-max w-max justify-between">
          <button className='hover:text-brand-default font-bold absolute z-10' onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? (
              <div ><HamburgerMd width="30px" height="30px" /></div>
            ) : (
              <div><CloseMd width="30px" height="30px" className="text-indigo-500" /></div>
            )}
          </button><div>
            {isOpen && (
              <nav className="absolute top-10 left-[-4px] mt-2 p-5 pt-0 max-sm:flex-col max-sm:gap-10 z-10 duration-150 rounded-lg h-max w-max justify-between bg-white border-2 border-indigo-500">
                <div className=" pl-3 flex flex-col gap-5">
                  <ul className='py-2 px-2 pt-10'>
                    <li>
                      <Link to="/dashboard" className="hover:textbrand-default font-bold flex gap-3">
                        <ChartLine strokeWidth={1.5} />
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/lead/thongtin" className="hover:text-brand-default font-bold flex gap-3">
                        <Users strokeWidth={1.5} />
                        Lead
                      </Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/khachhang" className="hover:text-brand-default font-bold flex gap-3">
                        <User03 strokeWidth={1.5} />
                        Khách hàng
                      </Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/dsqdgg" className="hover:text-brand-default font-bold flex gap-3">
                        <Tag strokeWidth={1.5} />
                        Quy định giảm giá
                      </Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/khoahocAdmin" className="hover:text-brand-default font-bold flex gap-3">
                        <Notebook strokeWidth={1.5} />
                        Khóa học
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            )}
          </div>
        </nav>
      </div>



    </main>
  );
};

export default SidebarQL;
