import axios from "axios"
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import DropDown from '../components/ui/placeholder/DropDown'
import ActionIcon from '../components/ui/button/ActionIcon'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button'
import Check from '../components/icons/Interface/Check'

import InformSuccess from '../components/ui/inform/InformSuccess'
import InformFailure from '../components/ui/inform/InformFailure'

const DSQDGG_ChinhSuaQuyDinhGiamGia = () => {
  //Hiển thị data dưới BE lên
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getQuyDinhGiamGia();
  }, []);

  function getQuyDinhGiamGia() {
    axios.get(`http://localhost:80/SkillBoost-API/api/QuyDinhGiamGia/read_single.php?MaQuyDinhGiamGia=${id}`).then(function (response) {
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

  //Ngày bắt đầu
  const [selectedNgayBatDau, setselectedNgayBatDau] = useState(null);
  const formattedDate_Start = selectedNgayBatDau ? selectedNgayBatDau.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgayBatDau';
    setInputs(values => ({...values, [id]: formattedDate_Start}))
  }, [formattedDate_Start])

  //Ngày kết thúc
  const [selectedNgayKetThuc, setselectedNgayKetThuc] = useState(null);
  const formattedDate_End = selectedNgayKetThuc ? selectedNgayKetThuc.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgayKetThuc';
    setInputs(values => ({...values, [id]: formattedDate_End}))
  }, [formattedDate_End])

  //Xử lý ấn nút button Submit
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setshowFailure] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:80/SkillBoost-API/api/QuyDinhGiamGia/update.php', inputs).then(function(response){
        console.log(response.data);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate(`/dsqdgg/xemchitietdsqdgg/${id}`);
        }, 2000);
        })
        .catch(function(error) {
          console.error('Error occurred:', error);
          setShowFailure(true);
          setTimeout(() => {
            setShowFailure(false);
          }, 2000);
        });
    }

  console.log(inputs)

  return (
    <main id = "DSQDGG_TaoQuyDinhGiamGia">
      <div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4'>
          <div className='max-sm:hidden col-span-1'>
            <SidebarQL/>
          </div>
          <div id ="ContentContainer" className='flex flex-col h-fit sm:col-span-6 max-sm:col-span-7 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
            <div className="max-sm:hidden">
              <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
            </div>

            {/* mobile responsive */}
            <div className="sm:hidden max-sm:headline-medium max-sm:flex max-sm:space-x-[40px] ">
              <Link to="/dsqdgg/xemchitietdsqdgg/">
              <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              </Link>
              <div className="max-sm:font-bold max-sm:text-center max-sm:pt-1">Thông tin quy định giảm giá</div>
            </div>

            <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
              <form onSubmit={handleSubmit}>
                <div className='max-sm:hidden pb-5 flex justify-between'>
                  <div id='Header' className=' flex items-center space-x-[16px]'>
                    <div className='cursor-pointer block'>
                      <Link to={`/dsqdgg/xemchitietdsqdgg/${inputs.MaQuyDinhGiamGia}`}>
                      <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                      </Link>
                    </div>   
                    <div className='text-text-primary title-large '>Thông tin quy định giảm giá</div>
                  </div>
                </div>

              <div className='flex-auto block pb-1 '>
              <div className='overflow-x-auto pb-2'>
                  <TextInput
                    id='MoTaLoaiGiamGia'
                    title='Mô tả loại giảm giá'
                    value={inputs.MoTaLoaiGiamGia}
                    showRedAsterisk
                    onChange={handleTextChange}
                  />

                  <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
                    <div className='sm:w-1/2 sm:flex-col max-sm:flex-row pb-2 '>
                      <TextInput
                        id='SoLuongKhoaHocDangKy'
                        title='Số lượng khóa học đăng kí'
                        value={inputs.SoLuongKhoaHocDangKy}
                        showRedAsterisk
                        onChange={handleTextChange}
                      />
                    </div>

                    <div className='w-1/2 sm:flex-col max-sm:flex-row pb-2'>
                      <DropDown 
                        id='MaNgheNghiep'
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
                  </div>

                  <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
                    <div className='sm:w-1/4 flex-col pb-2 '>
                      <TextInput
                        id='PhanTramGiamGiaMacDinh'
                        title="Phần trăm giảm giá mặc định (%)" showRedAsterisk
                        value={inputs.PhanTramGiamGiaMacDinh}
                        onChange={handleTextChange}
                      />
                    </div>
                    <div className='sm:w-1/4 flex-col pb-2 '>
                      <TextInput
                        id='PhanTramGiamGiaToiDa'
                        title="Phần trăm giảm giá tối đa (%)" showRedAsterisk
                        value={inputs.PhanTramGiamGiaToiDa}
                        onChange={handleTextChange}
                      />
                    </div>
                    <div className='sm:w-1/4 flex-col pb-2 '>
                      <CustomDatePicker
                        title='Ngày bắt đầu'
                        value={inputs.NgayBatDau}
                        showRedAsterisk={true}
                        selectedDate={selectedNgayBatDau}
                        setSelectedDate={setselectedNgayBatDau}
                      >
                      </CustomDatePicker>
                    </div>
                    <div className='sm:w-1/4 flex-col pb-2 '>
                      <CustomDatePicker
                        title='Ngày kết thúc'
                        showRedAsterisk={true}
                        value={inputs.NgayKetThuc}
                        selectedDate={selectedNgayKetThuc}
                        setSelectedDate={setselectedNgayKetThuc}
                      >
                      </CustomDatePicker>
                    </div>
                  </div>
              </div>
            </div>
            <div className="display:flex text-right  w-full place-items-right rounded-lg p-3 lg:overflow-visible">
                    <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                      <Button type='submit' size="Medium" variant="Primary">Lưu thay đổi</Button>
                    </div>
                    <div className='relative bg-background-primary space-x-4 p-2 float-right'>
                      <div className='cursor-pointer block'>
                        <Link to={`/dsqdgg/xemchitietdsqdgg/${inputs.MaQuyDinhGiamGia}`}>
                          <Button type='submit' size="Medium" variant="Destructive-plain">Hủy thay đổi</Button>
                        </Link>
                      </div>
                    </div>
                </div>
                </form>
            </div>
            <div id="dialog" className="sm:left-1/3 flex absolute max-h-[calc(100vh-5em)] h-fit max-w-lg overflow-hidden
                overscroll-contain rounded-md bg-sematic-green p-3 text-white shadow-2xl transition-opacity hidden ">
                <Check width="1.5rem" height="1.5rem"/>
                <h3 className="pl-2 flex-col body-large">Chỉnh sửa quy định giảm giá thành công</h3>
            </div>
          </div>      
      </div>
      {showSuccess && <InformSuccess>Chỉnh sửa quy định giảm giá thành công</InformSuccess>}
      {showFailure && <InformFailure>Chỉnh sửa quy định giảm giá thất bại</InformFailure>}
    </main>
  )
}
export default DSQDGG_ChinhSuaQuyDinhGiamGia