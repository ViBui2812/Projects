import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSHoatDongLead_ChinhSuaHoatDong = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <main id='DSBaoGia' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
        </div>
        <div id='LeadInfoNavigation' className='flex space-x-[24px]'>
          <div className='grow'><LeadInfoTab/></div>
          <LeadProgressStatus variant='DangTuVan' />
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
          <div id='Header' className='flex items-center space-x-[16px]'>
            <div className='cursor-pointer block'>
              <Link to="/lead/dshoatdong/xemchitiethoatdong">
                <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              </Link>
            </div>
            <div className='text-text-primary title-large'>Yêu cầu báo giá khóa học IT Business Analyst và Product Owner Master Class</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div className='flex space-x-[16px]'>
              <TextInput title='Tên hoạt động' previewText='Nhập tên hoạt động' showRedAsterisk>Yêu cầu báo giá khóa học IT Business Analyst và Product Owner Master Class</TextInput>
              <DropDown
                title="Loại hoạt động"
                previewText="Tư vấn"
                showRedAsterisk
                options={["Yêu cầu", "Tư vấn"]}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
              <div className='cursor-pointer block'>
                <Link to="/lead/dshoatdong/xemchitiethoatdong">
                  <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                </Link>
              </div>
              <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DSHoatDongLead_ChinhSuaHoatDong;
