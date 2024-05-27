import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import ActionIcon from '../components/ui/button/ActionIcon'
import DropDown from '../components/ui/placeholder/DropDown'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 
import CourseSelector from '../components/ui/SelectItems/CourseSelector'
import InformSuccess from '../components/ui/inform/InformSuccess'
import InformFailure from '../components/ui/inform/InformFailure'

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import AddPlus from '../components/icons/Edit/AddPlus'


const DSKhachHang_ChinhSuaKhachHang = () => {

  const [showCourseSelector, setShowCourseSelector] = useState(false);

    const handleCourseSelectorClick = () => {
        setShowCourseSelector(!showCourseSelector);
      };

  //Hiển thị data dưới BE lên
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    getKH();
  }, []);

  function getKH() {
    axios.get(`http://localhost:80/SkillBoost-API/api/KhachHang/read_single.php?MaKH=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

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

  //Nhân viên phụ trách PIC Dropdown
  const [NhanViens, setNhanViens] = useState([]);
  const [selectNhanVienOption, setselectNhanVienOption] = useState(null);

  useEffect(() => {
    getNhanViens();
  }, []);

  const handleNhanVienChange = (event) => {
    const id = 'MaNV';
    setInputs(values => ({...values, [id]: event.value}));
  }
  
  function getNhanViens() {
    axios.get('http://localhost:80/SkillBoost-API/api/NhanVien/read_all.php')
      .then(function(response) {
          setNhanViens(response.data);
      })
      .catch(function(error) {
          console.error('Error fetching courses:', error);
      });
  }

  //Giới tính Dropdown
  const handleGioiTinhChange = (event) => {
    const id = 'GioiTinhLead';
    setInputs(values => ({...values, [id]: event.value}));
  }

  //DatePicker
  const [selectedNgaySinh, setselectedNgaySinh] = useState(null);
  const formattedDate = selectedNgaySinh ? selectedNgaySinh.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgaySinhLead';
    setInputs(values => ({...values, [id]: formattedDate}))
  }, [formattedDate])

  //Xử lý ấn nút button Submit
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setshowFailure] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put('http://localhost:80/SkillBoost-API/api/Lead/update.php', inputs).then(function(response){
        console.log(response.data);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate(`/khachhang`);
        }, 2000);
        })
        .catch(function(error) {
          console.error('Error occurred:', error);
          setShowFailure(true);
          setTimeout(() => {
            setShowFailure(false);
          }, 2000);
        })
    }

    console.log(id);

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen  max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>{inputs.HoTenKH}</HeaderAdmin>
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
            <div id='Header' className='flex justify-between items-center'>
                <div className='flex space-x-[16px] items-center'>
                  <div className='cursor-pointer block'>
                    <Link to={`/khachhang/xemchitietkhachhang/${inputs.MaKH}`}>
                      <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                    </Link>
                  </div>
                  <div className='text-text-primary title-large'>Thông tin khách hàng</div>
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='HoTenKH'
                      title='Họ tên'
                      showRedAsterisk
                      value={inputs.HoTenKH}
                      onChange={handleTextChange}
                    ></TextInput>
                    <DropDown
                        id='GioiTinhKH'
                        title="Giới tính"
                        showRedAsterisk
                        value={inputs.GioiTinhKH}
                        options={["Nam", "Nữ"].map(i => ({
                          value: i,label:i
                        }))}
                        onHandleChange={handleGioiTinhChange}
                    >
                    </DropDown>
                    <CustomDatePicker 
                      id='NgaySinhKH'
                      title='Ngày sinh'
                      value={inputs.NgaySinhKH}
                      showRedAsterisk={true}
                      selectedDate={selectedNgaySinh}
                      setSelectedDate={setselectedNgaySinh}
                    >
                    </CustomDatePicker>
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput 
                      id='SoDienThoaiKH'
                      title='Số điện thoại'
                      value={inputs.SoDienThoaiKH}showRedAsterisk
                      onChange={handleTextChange}
                    ></TextInput>
                    <TextInput 
                      id='EmailKH'
                      title='Email'
                      value={inputs.EmailKH}
                      showRedAsterisk
                      onChange={handleTextChange}
                    ></TextInput>
                    <DropDown
                        id="TenNgheNghiep"
                        title="Nghề nghiệp"
                        value={inputs.TenNgheNghiep}
                        showRedAsterisk
                        options={NgheNghieps.map((NgheNghiep) => ({
                          label: NgheNghiep.TenNgheNghiep,
                          value: NgheNghiep.MaNgheNghiep,
                        }))}
                        onHandleChange={handleNgheNghiepChange}
                    >
                    </DropDown>
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        id='GhiChuKH'
                        title='Ghi chú'
                        previewText={inputs.GhiChuKH}
                        onChange={handleTextChange}
                    />
                </div>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
                <div className='cursor-pointer block'>
                  <Link to={`/khachhang/xemchitietkhachhang/${inputs.MaKH}`}>
                    <Button variant='Destructive-plain' size='Medium'>Hủy thay đổi</Button>
                  </Link>
                </div>   
                <Button variant='Primary' size='Medium'>Lưu thay đổi</Button>
            </div>
            </div>
        </div>
        </div>
        {showCourseSelector && 
          <div className="absolute top-[480px] left-[500px] z-50">
              <CourseSelector/>
          </div>
        }
        {showSuccess && <InformSuccess>Chỉnh sửa thông tin khách hàng thành công</InformSuccess>}
        {showFailure && <InformFailure>Chỉnh sửa thông tin khách hàng thất bại</InformFailure>}
    </main>
  );
};

export default DSKhachHang_ChinhSuaKhachHang;
