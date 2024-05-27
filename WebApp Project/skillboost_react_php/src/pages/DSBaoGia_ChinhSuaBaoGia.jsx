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
import CourseSelector from '../components/ui/SelectItems/CourseSelector'

import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSBaoGia_ChinhSuaBaoGia = () => {
  const [showCourseSelector, setShowCourseSelector] = useState(false);
  const [showPromotionInputs, setShowPromotionInputs] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCourseSelectorClick = () => {
    setShowCourseSelector(!showCourseSelector);
  };  

  const handleAddPromotionClick = () => {
    setShowPromotionInputs(!showPromotionInputs);
  };

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
                <Link to="/lead/dsbaogia/xemchitietbaogia">
                <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                </Link>
            </div>
            <div className='text-text-primary title-large'>Báo giá khóa học IT Business Analyst</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div>
              <TextInput title='Tên báo giá' previewText='Nhập tên báo giá'>Báo giá khóa học IT Business Analyst</TextInput>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học</div>
              <div id='Table' className="overflow-x-auto rounded-lg border border-outline-table">
                <table className="table-auto w-full">
                  <thead className='title-small text-text-secondary text-left'>
                    <tr>
                      <th className="w-[649px] px-[16px] py-[24px]">Tên khóa học</th>
                      <th className="w-[649px] px-[16px] py-[24px]">Giảng viên</th>
                      <th className="w-[214px] px-[16px] py-[24px]">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody className='body-medium text-text-primary'>
                    <tr className="hover:bg-background-secondary border-b border-t">
                      <td className="px-[16px] py-[24px]">IT Business Analyst</td>
                      <td className="px-[16px] py-[24px]">Ryan Nguyễn</td>
                      <td className="w-[214px] px-[16px] py-[24px]">4.000.000đ</td>
                    </tr>
                    <tr className='border-b'>
                      <td colspan="2" className="px-[16px] py-[24px] label-medium text-text-primary">Tổng tiền:</td>
                      <td className="px-[16px] py-[24px] label-medium text-brand-default">4.000.000đ</td>
                    </tr>
                    <tr>
                      <td colspan="3" className='px-[16px] py-[16px]'>
                        <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>Thêm khóa học</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {showPromotionInputs ? (
              <>
                <div className='title-medium text-text-primary'>Khuyến mãi</div>
                <div className='flex overflow-x-auto w-full space-x-[16px] '>
                  <TextInput title="Số khóa học mua chung" previewText="Nhập số khóa học" />
                  <DropDown
                    title="Đối tượng ưu tiên"
                    previewText="Chọn đối tượng ưu tiên"
                    options={["Học sinh - Sinh Viên", "Giảng viên đại học", "Không có"]}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <DropDown
                    title="Dịp đặc biệt"
                    previewText="Chọn dịp đặc biệt"
                    options={["Ngày lễ", "Không có"]}
                  />
                </div>
                <div className='flex w-1/3 pr-[16px]'>
                  <TextInput title="Phần trăm giảm giá (%)" previewText="Nhập phần trăm giảm giá" />
                </div>
                <div className='flex'>
                  <Button variant='Neutral' size='Medium' onClick={handleAddPromotionClick}>Ẩn khuyến mãi</Button>
                </div>
              </>
            ) : (
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Khuyến mãi</div>
                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5} />} onClick={handleAddPromotionClick}>Thêm khuyến mãi</Button>
              </div>
            )}
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Email báo giá</div>
              <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Tạo email</Button>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
              <div className='cursor-pointer block'>
                  <Link to="/lead/dsbaogia/xemchitietbaogia">
                    <Button variant='Destructive-plain' size='Medium'>Hủy chỉnh sửa</Button>
                  </Link>
              </div>
              <Button variant='Primary' size='Medium'>Lưu thay đổi</Button>
            </div>
          </div>
        </div>
      </div>
      {showCourseSelector && 
          <div className="absolute top-[240px] left-[500px] z-50">
              <CourseSelector/>
          </div>
      }
    </main>
  );
};

export default DSBaoGia_ChinhSuaBaoGia;
