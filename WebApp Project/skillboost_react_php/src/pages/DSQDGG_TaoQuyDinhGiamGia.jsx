import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'


import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import DropDown from '../components/ui/placeholder/DropDown'
import ActionIcon from '../components/ui/button/ActionIcon'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import Check from '../components/icons/Interface/Check'
import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button'
import InformSuccess from '../components/ui/inform/InformSuccess'
import InformFailure from '../components/ui/inform/InformFailure'

import DSQuyDinhGiamGia from "./DSQuyDinhGiamGia";


const DSQDGG_TaoQuyDinhGiamGia = () => {
  const [inputs, setInputs] = useState({});
  
  //Tất cả Text Inputs
  const handleTextChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInputs(values => ({...values, [id]: value}));
  }

  //Nghề nghiệp Dropdown
  const [NgheNghieps, setNgheNghieps] = useState([]);
  const [selectNgheNghiepOption, setselectNgheNghiepOption] = useState(null);

  useEffect(() => {
    getNgheNghieps();
  }, []);

  const handleNgheNghiepChange = (event) => {
    const id = 'MaNgheNghiep';
    //const label = 'TenNgheNghiep';
    setInputs(values => ({...values, [id]: event.value}));
  }

  function getNgheNghieps() {
    axios.get('http://localhost:80/SkillBoost-API/api/NgheNghiep/read_all.php')
      .then(function(response) {
          setNgheNghieps(response.data);
      })
      .catch(function(error) {
          console.error('Error fetching courses:', error);
      });
  }

  //DatePicker
  
  const [startDate, setStartDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const formattedDate_start = startDate ? startDate.toLocaleDateString('en-CA') : undefined;
  const formattedDate_from = fromDate ? fromDate.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgayBatDau';
    setInputs(values => ({...values, [id]: formattedDate_start}))
  }, [formattedDate_start])

  useEffect(() => {
    const id = 'NgayKetThuc';
    setInputs(values => ({...values, [id]: formattedDate_from}))
  }, [formattedDate_from])

  //Xử lý ấn nút button Submit

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setshowFailure] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/SkillBoost-API/api/QuyDinhGiamGia/create.php', inputs).then(function(response){
        console.log(response.data);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/dsqdgg');
        }, 2000);
        })
        .catch(function(error) {
          console.error('Error occurred:', error);
          setShowFailure(true);
          setTimeout(() => {
            setshowFailure(false);
          }, 2000);
        })
    }; 

  return (
    <main id = "DSQDGG_TaoQuyDinhGiamGia">
    <div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4'>
        <div className='max-sm:hidden col-span-1'>
          <SidebarQL/>
        </div>
        <div id ="ContentContainer" className='flex flex-col h-fit sm:col-span-6 max-sm:col-span-7 bg-background-secondary px-[64px] max-sm:py-[15px] sm:py-[32px] space-y-[24px]' >
          <div className="max-sm:hidden">
            <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
          </div>
          <div className="sm:hidden max-sm:headline-medium max-sm:flex  max-sm:space-x-[65px]">
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
            <div className="max-sm:font-bold max-sm:text-center max-sm:pt-1">Tạo quy định giảm giá</div>
          </div>
          <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
            
              <div className='max-sm:hidden pb-5 flex justify-between'>
                <div id='Header' className=' flex items-center space-x-[16px]'>
                  <div className='cursor-pointer block'>
                    <Link to="/dsqdgg">
                    <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                    </Link>
                  </div>   
                  <div className='text-text-primary title-large '>Tạo quy định giảm giá</div>
                </div>
                {/* <div className="flex justify-between space-x-[10px]">
                  <ActionPersonDetail variant='Edit'/>
                  <ActionPersonDetail variant='Delete'/>
                </div> */}
              </div>

              <form onSubmit={handleSubmit} >
              <div className='flex-auto block pb-1 '>
            <div className='overflow-x-auto'>

              <div className='flex flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Mô tả loại giảm giá <text className='text-red-600'>*</text></div>
                <TextInput id='MoTaLoaiGiamGia' onChange={handleTextChange} previewText="Mô tả loại giảm giá" />
              </div>

                <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
                  <div className='sm:w-1/2 sm:flex-col max-sm:flex-row pb-2 '>
                    <TextInput id='SoLuongKhoaHocDangKy' onChange={handleTextChange} title="Số lượng khóa học đăng kí" showRedAsterisk previewText="Số lượng khóa học đăng kí" />
                  </div>

                  <div className='w-1/2 sm:flex-col max-sm:flex-row pb-2'>
                    <DropDown  
                      id="NgheNghiepLead"
                      title="Nghề nghiệp"
                      previewText="Chọn nghề nghiệp"
                      showRedAsterisk
                      options={NgheNghieps.map((NgheNghiep) => ({
                        label: NgheNghiep.TenNgheNghiep,
                        value: NgheNghiep.MaNgheNghiep,
                      }))}
                      onHandleChange={handleNgheNghiepChange}
                    >
                    </DropDown>
                  </div>
                </div>

                <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
                  <div className='sm:w-1/4 flex-col pb-2 '>
                    <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá mặc định <text className='text-red-600'>*</text></div>
                    <TextInput id='PhanTramGiamGiaMacDinh' onChange={handleTextChange} previewText="Phần trăm giảm giá mặc định (%)" />
                  </div>
                  <div className='sm:w-1/4 flex-col pb-2 '>
                    <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá tối đa <text className='text-red-600'>*</text></div>
                    <TextInput id='PhanTramGiamGiaToiDa' onChange={handleTextChange} previewText="Phần trăm giảm giá tối đa (%)" />
                  </div>
                  <div className='sm:w-1/4 flex-col pb-2 '>
                    <CustomDatePicker 
                          id='NgayBatDau'
                          title='Ngày bắt đầu'
                          previewText='Chọn ngày bắt đầu'
                          showRedAsterisk={true}
                          selectedDate={startDate}
                          setSelectedDate={setStartDate}
                        >
                    </CustomDatePicker>
                  </div>
                  <div className='sm:w-1/4 flex-col pb-2 '>
                    <CustomDatePicker 
                          id='NgayKetThuc'
                          title='Ngày kết thúc'
                          previewText='Chọn ngày kết thúc'
                          showRedAsterisk={true}
                          selectedDate={fromDate}
                          setSelectedDate={setFromDate}
                        >
                    </CustomDatePicker>
                  </div>
                </div>


            </div>

          </div>
          <div className="  display:flex text-right  w-full place-items-right rounded-lg p-3 lg:overflow-visible">
                  <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                    <Button size="Medium" variant="Primary" type='submit'>Xác nhận tạo</Button>
                    
                  </div>
                  <div className='relative bg-background-primary space-x-4 p-2 float-right'>
                    <div className='cursor-pointer block'>
                      <Link to="/dsqdgg">
                        <Button size="Medium" variant="Destructive-plain">Hủy tạo</Button>
                      </Link>
                    </div>
                  </div>
              </div>
              </form>
          </div>
          <div className="sm:left-1/3 absolute max-h-[calc(100vh-5em)] h-fit max-w-lg overflow-hidden
              overscroll-contain rounded-md bg-sematic-green p-3 text-white shadow-2xl transition-opacity hidden ">
              <Check width="1.5rem" height="1.5rem"/>
              <h3 className="pl-2 flex-col body-large">Chỉnh sửa quy định giảm giá thành công</h3>
          </div>
        </div>      
    </div>
    {showSuccess && <InformSuccess>Tạo quy định giảm giá thành công</InformSuccess>}
    {showFailure && <InformFailure>Tạo quy định giảm giá thất bại</InformFailure>}
    </main>
  )
}
export default DSQDGG_TaoQuyDinhGiamGia