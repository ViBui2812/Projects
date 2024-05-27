import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import BackgroundGradient from '../assets/img/BackgroundGradient.svg';
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg';

import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button';

import Hide from '../components/icons/Edit/Hide';

const DangNhap = () => {

    //var _MaNV = '3';
    // localStorage.setItem('MaNV',_MaNV);
    // console.log(localStorage.getItem('MaNV'));

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')] relative">
      <div className="relative mb-[56px] w-auto cursor-pointer">
        <Link to="/trangchu">
          <img
            src={SkillboostLogo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="relative z-10 bg-background-primary w-[540px] p-[36px] rounded-2xl shadow-md flex flex-col items-center justify-center space-y-[36px]">
        <div className="flex flex-col space-y-8 w-full">
          <div className="flex w-full justify-center headline-small text-text-primary">
            Đăng nhập
          </div>
          <form className="w-full space-y-[36px]">
            <div className="flex flex-col space-y-8">
              <TextInput title="Email" previewText="Email" />
              <TextInput
                title="Mật khẩu"
                previewText="Mật khẩu"
                rightIcon={
                  <Hide
                    width="1.25rem"
                    height="1.25rem"
                    strokeWidth={1.5}
                    stroke="#5E6A6E"
                  />
                }
                onClickRightIcon={togglePasswordVisibility}
                type={passwordVisible ? 'text' : 'password'}
              />
            </div>
            <div className="flex w-full justify-center">
              <Button size="Big" stretch="full">
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DangNhap;
