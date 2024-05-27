import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL.jsx'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin.jsx'
import ActionIcon from '../components/ui/button/ActionIcon.jsx'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail.jsx'
import TextArea from '../components/ui/placeholder/TextArea.jsx'
import AlertInfo from '../components/ui/inform/AlertInfo.jsx'
import Button from '../components/ui/button/Button.jsx'

import ITBA_course from '../assets/img/ITBA_course.svg'

import EditPencil01 from '../components/icons/Edit/EditPencil01.jsx'
import TrashFull from '../components/icons/Interface/TrashFull.jsx'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft.jsx'
import Star from '../components/icons/Interface/Star.jsx'
import UserCheck from '../components/icons/User/UserCheck.jsx'
import UserGroup from '../components/icons/User/UsersGroup.jsx'
import CalendarCheck from '../components/icons/Calendar/CalendarCheck.jsx'
import CalendarClose from '../components/icons/Calendar/CalendarClose.jsx'
import Clock from '../components/icons/Calendar/Clock.jsx'
import CloseMd from '../components/icons/Menu/CloseMd.jsx'
import InformSuccess from '../components/ui/inform/InformSuccess'
import InformFailure from '../components/ui/inform/InformFailure'


const DSKhoaHoc_XemChiTietKhoaHoc = () => {

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const formatAmountToVND = (amount) => {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    return new Intl.NumberFormat('vi-VN', config).format(amount);
  };
  
  //Hiển thị data dưới BE lên
  const [thongTinKhoaHocs, setThongTinKhoaHocs] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    getThongTinKhoaHocs();
  }, []);

  function getThongTinKhoaHocs() {
    axios.get(`http://localhost:80/SkillBoost-API/api/KhoaHoc/read_single.php?MaKhoaHoc=${id}`).then(function (response) {
      console.log(response.data);
      setThongTinKhoaHocs(response.data);
    });
  }


    console.log(thongTinKhoaHocs);
  
  return (
  <main id='DSKhoaHoc_XemChiTietKhoaHoc' className='w-full bg-background-secondary relative grid grid-cols-7'>
    <div id='Sidebar'>
      <SidebarQL/>
    </div>
        
    <div id='ContentContainer' className='col-span-6 max-sm:col-span-7 bg-background-secondary px-16 max-sm:px-4 py-8 space-y-6'>
      <div id='Header' className='max-sm:pl-20'>
        <HeaderAdmin>Khóa học</HeaderAdmin>
      </div>

      <div id='CourseInfo' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col p-6 box-border gap-4 space-y-6 justify-between">
        <div id='Header' className='flex items-center space-x-4'>
          <Link to="/khoahocAdmin">
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
          </Link>
            <div className='text-text-primary headline-small relative flex items-center mr-6 w-[90%]'>
              {thongTinKhoaHocs.TenKhoaHoc}
            </div>
            <div className='space-x-4 flex max-sm:w-fit'>
              <Link to={`/khoahocAdmin/ctkhoahoc/chinhsua/${id}`}>
                <ActionPersonDetail variant="Edit" icon={<EditPencil01 width="1.5rem" height="1.5rem"/>}/>
              </Link>
                <ActionPersonDetail variant="Delete" icon={<TrashFull width="1.5rem" height="1.5rem"/>}
                  onClick={handleConfirmDelete}/>
            </div>
        </div>
      </div>
  
      <div id='Content' className='flex max-sm:flex-col gap-6 col-span-6 max-sm:col-span-7'>        
        <div className='flex flex-col w-full h-fit relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-6 max-sm:w-full max-sm:flex-none max-sm:mb-6 max-sm:order-2'>
          <div className='headline-small text-text-primary'>
            Mô tả khóa học
          </div>
      
          <div className='body-large text-text-secondary mt-6 text-justify'>
            {thongTinKhoaHocs.MoTaDai}
          </div>
        </div>

        <div className='max-sm:order-1'>
          <div>
            <img
              className="w-[424px] max-sm:w-auto h-auto rounded-lg object-cover object-center relative flex"
              src={ITBA_course}
              alt="course image"
            />
          </div>

          <div className='w-[418px] max-sm:w-auto h-auto relative bg-background-primary mt-6 rounded-lg p-6'>
            <div className='headline-small text-brand-default'>
              {formatAmountToVND(thongTinKhoaHocs.GiaTien)}
            </div>
            <div className='w-full relative border-t-[0.5px] border-[#e6e6e6] h-[0.5px] my-7'>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <Star className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Đánh giá</p>
              </div>

              <div className='flex'>
                <p className='text-text-secondary pr-1'>{thongTinKhoaHocs.DanhGiaKhoaHoc}</p>
                <Star className='text-sematic-yellow fill-sematic-yellow w-[20px] h-[20px] relative'/>
              </div>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <UserCheck className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Lượt đánh giá</p>
              </div>

                <p className='text-text-secondary pr-1'>{thongTinKhoaHocs.LuotDanhGia}</p>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <UserGroup className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Học viên tối đa</p>
              </div>

                <p className='text-text-secondary pr-1'>{thongTinKhoaHocs.SoLuongHocVienToiDa}</p>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <CalendarCheck className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Ngày khai giảng</p>
              </div>

                <p className='text-text-secondary pr-1'>{thongTinKhoaHocs.NgayKhaiGiang}</p> {/*gọi ngày ra*/}
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <CalendarClose className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Ngày bế giảng</p>
              </div>

                <p className='text-text-secondary pr-1'>{thongTinKhoaHocs.NgayBeGiang}</p>{/*gọi ngày ra*/}
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <Clock className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Thời gian</p>
              </div>

                <p className='text-text-secondary pr-1'>Thứ 2, 17h00 - 20h00</p> {/*gọi weekday, Timestart ra*/}
            </div>

            <div className='w-full relative flex flex-row items-start justify-end text-right'>
              <p className='text-text-secondary pr-1 inline-block'>Thứ 6, 17h00 - 20h00</p> {/*gọi weekday, Timeend ra*/}              
            </div>
          </div>
        </div>
      </div>      
    </div>  
    {showDeleteConfirmation && (
      <div className="fixed w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
        <div className="relative w-[535px] flex flex-col space-y-6 bg-white rounded-lg shadow-lg p-8">
          <div>
            <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa khóa học</div>
            <div className='absolute top-6 right-6'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete}/>} />
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='h-[316px]'>
              <TextArea title='Lý do xóa' previewText='Điền lý do'/>
            </div>
              <AlertInfo>Khóa học đã xóa có thể khôi phục, vui lòng liên hệ đội ngũ IT</AlertInfo>
          </div>
          <Button variant="Destructive" size='Big' onClick={abc}>Xác nhận xóa</Button>
        </div>
      </div>
    )}    
  </main>
)
}

export default DSKhoaHoc_XemChiTietKhoaHoc