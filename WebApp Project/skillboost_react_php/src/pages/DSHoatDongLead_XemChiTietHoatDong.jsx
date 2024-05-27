import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import AlertDanger from '../components/ui/inform/AlertDanger';

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import CloseMd from '../components/icons/Menu/CloseMd'

const DSHoatDongLead_XemChiTietHoatDong = () => {
  const [selectedActivityOption, setselectedActivityOption] = useState(null);

  //Xác nhận xóa Lead
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  
  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <main id='DSBaoGia' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen  max-sm:relative'>
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
          <div id='Header' className='flex justify-between items-center'>
                <div className='flex space-x-[16px] items-center'>
                <div className='cursor-pointer block'>
                  <Link to="/lead/dshoatdong">
                    <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                  </Link>
                </div>
                <div className='text-text-primary title-large'>Yêu cầu báo giá khóa học IT Business Analyst và Product Owner Master Class</div>
                </div>
                <div className="flex space-x-[12px]">
                    <div className='cursor-pointer block'>
                      <Link to="/lead/dshoatdong/chinhsuahoatdong">
                        <ActionPersonDetail variant="Edit" />
                      </Link>
                    </div>  
                    <ActionPersonDetail variant="Delete" onClick={handleDelete} />
                </div>
            </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div className='flex space-x-[16px]'>
              <TextInput variant="ReadOnly" title='Tên hoạt động' previewText='Nhập tên hoạt động' showRedAsterisk>Yêu cầu báo giá khóa học IT Business Analyst và Product Owner Master Class</TextInput>
              <DropDown
                title="Loại hoạt động"
                variant="ReadOnly"
                showRedAsterisk
                options={["Yêu cầu", "Tư vấn"]}
                selectedOption={selectedActivityOption}
                setSelectedOption={setselectedActivityOption}
              />
            </div>
          </div>
        </div>
      </div>
      {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative w-[535px] flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
              <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa hoạt động Lead</div>
              <div className='absolute top-[36px] right-[36px]'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete}/>} />
              </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[463px]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do xóa' previewText='Điền lý do'/>
                </div>
                <AlertDanger>Xóa hoạt động Lead sẽ không thể được khôi phục</AlertDanger>
              </div>
              <Button variant="Destructive" size='Big' onClick={handleDelete}>Xác nhận xóa</Button>
            </div>
          </div>
        )}
    </main>
  );
};

export default DSHoatDongLead_XemChiTietHoatDong;
