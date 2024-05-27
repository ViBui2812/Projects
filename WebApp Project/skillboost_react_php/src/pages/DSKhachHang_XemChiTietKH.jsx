import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail'
import DropDown from '../components/ui/placeholder/DropDown'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import AlertInfo from '../components/ui/inform/AlertInfo';

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import CloseMd from '../components/icons/Menu/CloseMd'


const DSKhachHang_XemChiTietKH = () => {

  //Xác nhận xóa Khách Hàng
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  
  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
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

  //Xử lý delete Khách hàng
  const [deleteInputs, setDeleteInputs] = useState({ MaKH: id });

  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  const [showFailureDelete, setshowFailureDelete] = useState(false);

  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:80/SkillBoost-API/api/KhachHang/delete.php', deleteInputs).then(function(response){
        console.log(response.data);
        setShowSuccessDelete(true);
        setTimeout(() => {
          setShowSuccessDelete(false);
          navigate(`/dsqdgg`);
        }, 2000);
        })
        .catch(function(error) {
          console.error('Error occurred:', error);
          setshowFailureDelete(true);
          setTimeout(() => {
            setshowFailureDelete(false);
          }, 2000);
        })
    }

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
                        <Link to="/khachhang">
                          <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                        </Link>
                    </div>
                    <div className='text-text-primary title-large'>Thông tin khách hàng</div>
                </div>
                <div className="flex space-x-[12px]">
                    <div className='cursor-pointer block'>
                        <Link to={`/khachhang/chinhsuakhachhang/${inputs.MaKH}`}>
                          <ActionPersonDetail variant="Edit" />
                        </Link>
                    </div>
                    <ActionPersonDetail variant="Delete" onClick={handleConfirmDelete} />
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput 
                      variant='ReadOnly'
                      title='ID khách hàng' 
                      showRedAsterisk
                      value={inputs.MaKH}
                      >
                      </TextInput>
                    <TextInput 
                      variant='ReadOnly' 
                      title='ID chuyển đổi từ Lead'
                      value={inputs.ChuyenDoiTuMaLead}
                      >
                      </TextInput>
                    <TextInput 
                      variant='ReadOnly' 
                      title='Họ tên' 
                      showRedAsterisk
                      value={inputs.HoTenKH}
                      >
                      </TextInput>
                </div>
                <div className='flex space-x-[24px]'>
                    <DropDown
                        variant='ReadOnly'
                        title="Giới tính"
                        showRedAsterisk
                        value={inputs.GioiTinhKH}
                    >
                    </DropDown>
                    <CustomDatePicker 
                      variant='ReadOnly'
                      title='Ngày sinh'
                      showRedAsterisk={true}

                    >
                      {inputs.NgaySinhKH}
                    </CustomDatePicker>
                    <TextInput 
                      variant='ReadOnly' 
                      title='Số điện thoại'
                      showRedAsterisk
                      value={inputs.SoDienThoaiKH}
                    >

                    </TextInput>
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput 
                      variant='ReadOnly' 
                      title='Email'
                      showRedAsterisk
                      value={inputs.EmailKH}
                    >
                    </TextInput>  
                    <DropDown
                      variant='ReadOnly'
                      title="Nghề nghiệp"
                      showRedAsterisk
                      value={inputs.TenNgheNghiep}

                    >
                    </DropDown>
                    <TextInput
                      variant='ReadOnly'
                      title='PIC (Người tiếp nhận)'
                      showRedAsterisk
                      value={inputs.TenNVPhuTrachKH}
                      >
                      </TextInput> 
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        title='Ghi chú'
                        variant='ReadOnly'
                        value={inputs.GhiChuKH}
                    />
                </div>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học đã mua</div>
              <div id='Table' className="overflow-x-auto rounded-lg border border-outline-table">
                <table className="table-auto w-full">
                  <thead className='title-small text-text-secondary text-left'>
                    <tr className='border-b'>
                      <th className="w-[649px] px-[16px] py-[24px]">Tên khóa học</th>
                      <th className="w-[649px] px-[16px] py-[24px]">Giảng viên</th>
                      <th className="w-[214px] px-[16px] py-[24px]">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody className='body-medium text-text-primary'>
                    <tr>
                      <td className="w-[649px] px-[16px] py-[24px]">IT Business Analyst</td>
                      <td className="w-[649px] px-[16px] py-[24px]">Ryan Nguyễn</td>
                      <td className="w-[214px] px-[16px] py-[24px]">4.000.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>
        </div>
        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative w-[535px] flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
              <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa khách hàng</div>
              <div className='absolute top-[36px] right-[36px]'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete}/>} />
              </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[463px]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do xóa' previewText='Điền lý do' onChange={setDeleteInputs}/>
                </div>
                <AlertInfo>Xóa khách hàng có thể được khôi phục, vui lòng liên hệ bộ phận IT</AlertInfo>
              </div>
              <Button variant="Destructive" size='Big' onClick={handleDelete}>Xác nhận xóa</Button>
            </div>
          </div>
        )}
        {showSuccessDelete && <InformSuccess>Xóa khách hàng thành công</InformSuccess>}
        {showFailureDelete && <InformFailure>Xóa khách hàng thất bại</InformFailure>}
    </main>
  );
};

export default DSKhachHang_XemChiTietKH;
