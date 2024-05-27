import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import ButtonFloat from "../../button/ButtonFloat.jsx"
import HamburgerMd from "../../../icons/Menu/HamburgerMd.jsx"
import CloseMd from "../../../icons/Menu/CloseMd.jsx"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <div className='max-sm:pl-2 max-sm:flex-row sm:px-40 py-4 text-text-secondary sm:space-x-auto flex w-full h-full justify-between items-center '>
        <div className='cursor-pointer flex'>
          <Link to="/trangchu">
            <img
              src={SkillboostLogo}
              alt="Logo"
            />
          </Link>
        </div>
        <div name="mobile_devices" className="hidden max-sm:flex relative pl-[50px]">
          <button className='hover:text-brand-default font-bold z-10' onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? (
              <div ><HamburgerMd width="30px" height="30px" /></div>
            ) : (
              <div><CloseMd width="30px" height="30px" className="text-indigo-500" /></div>
            )}
          </button><div>
            {isOpen && (
              <nav className="absolute top-8 right-[-12px] mt-2 p-5 max-sm:flex-col max-sm:gap-10 z-10 duration-150 rounded-lg h-[300px] w-[350px] justify-between bg-white">
                <div className=" pl-[110px] flex flex-col gap-5">
                  <ul className='py-2 px-2 pt-10'>
                    <li>
                      <Link to="/trangchu" className="hover:textbrand-default font-bold">Trang chủ</Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/khoahoc" className="hover:text-brand-default font-bold">Khóa học</Link>
                    </li>
                  </ul>
                  <ul className=' py-2 px-2 '>
                    <li>
                      <Link to="/dangnhap" className="hover:text-brand-default font-bold">Đăng nhập</Link>
                    </li>
                  </ul>
                </div>

              </nav>
            )}
          </div>
        </div>

        <nav className="title-medium text-text-secondary ">
          <nav name="desktop" className='max-sm:hidden sm:flex flex-row items-center gap-12'>
            <ul className='py-2 px-2 '>
              <li>
                <Link to="/trangchu" className="hover:text-brand-default font-bold">Trang chủ</Link>
              </li>
            </ul>
            <ul className=' py-2 px-2 '>
              <li>
                <Link to="/khoahoc" className="hover:text-brand-default font-bold">Khóa học</Link>
              </li>
            </ul>
            <ul className=' py-2 px-2 '>
              <li>
                <Link to="/dangnhap" className="hover:text-brand-default font-bold"><ButtonFloat>Đăng nhập</ButtonFloat></Link>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </main>


  )
}
export default Header