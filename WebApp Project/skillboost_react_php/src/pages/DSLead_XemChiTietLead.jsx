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
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus';
import AlertInfo from '../components/ui/inform/AlertInfo';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import InformSuccess from '../components/ui/inform/InformSuccess'
import InformFailure from '../components/ui/inform/InformFailure'


import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import CloseMd from '../components/icons/Menu/CloseMd'

const DSLead_XemChiTietLead = () => {

  //Xác nhận hủy theo dõi Lead
  const [showUnfollowConfirmation, setShowUnfollowConfirmation] = useState(false);

  const handleConfirmUnfollow = () => {
    setShowUnfollowConfirmation(true);
  };

  const handleCancelUnfollow = () => {
    setShowUnfollowConfirmation(false);
  };

  //Xác nhận xóa Lead
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
    getLead();
  }, []);

  function getLead() {
    axios.get(`http://localhost:80/SkillBoost-API/api/Lead/read_single.php?MaLead=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  //Xử lý xóa mềm
  const [deleteInputs, setDeleteInputs] = useState({ MaLead: id });

  const handleDeleteChange = (event) => {
    const value = event.target.value;
    setDeleteInputs(values => ({...values, 'LyDoTrangThaiLead': value}));
  }

  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  const [showFailureDelete, setshowFailureDelete] = useState(false);

  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:80/SkillBoost-API/api/Lead/delete.php', deleteInputs).then(function(response){
        console.log(response.data);
        setShowSuccessDelete(true);
        setTimeout(() => {
          setShowSuccessDelete(false);
          navigate(`/lead/thongtin`);
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

    //Xử lý hủy theo dõi
  const [unfollowInputs, setUnfollowInputs] = useState({ MaLead: id });

  const handleUnfollowChange = (event) => {
    const value = event.target.value;
    setUnfollowInputs(values => ({...values, 'LyDoTrangThaiLead': value}));
  }

  const [showSuccessUnfollow, setShowSuccessUnfollow] = useState(false);
  const [showFailureUnfollow, setshowFailureUnfollow] = useState(false);

  const handleUnfollow = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:80/SkillBoost-API/api/Lead/unfollow.php', unfollowInputs).then(function(response){
        console.log(response.data);
        setShowSuccessUnfollow(true);
        setTimeout(() => {
          setShowSuccessUnfollow(false);
          navigate(`/lead/thongtin/huytheodoilead/${id}`);
        }, 2000);
        })
        .catch(function(error) {
          console.error('Error occurred:', error);
          setshowFailureUnfollow(true);
          setTimeout(() => {
            setshowFailureUnfollow(false);
          }, 2000);
        })
    }

  function trangthaiLead(status) {
    switch (status) {
      case "Đang tư vấn":
        return <LeadProgressStatus variant="DangTuVan" />;
      case "Ngừng theo dõi":
        return <LeadProgressStatus variant="NgungTheoDoi" />;
      case "Đã thanh toán":
        return <LeadProgressStatus variant="DaThanhToan" />;
      default:
        return <LeadProgressStatus variant="DangTuVan"/>;
    }
  }
  //Lấy mã Lead bằng Local Storage
  useEffect(() => {
    getLeadID();
  }, []);
  
  function getLeadID() {
    axios.get(`http://localhost:80/SkillBoost-API/api/Lead/read_single.php?MaLead=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
      // Store MaLead in localStorage
      localStorage.setItem('MaLead', response.data.MaLead);
      localStorage.setItem('HoTenLead', response.data.HoTenLead);
    });
  }
    
  console.log(inputs)

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin progressBar={<Nhantuvan />}>{inputs.HoTenLead}</HeaderAdmin>
        </div>
        <div id="LeadInfoNavigation" className="flex space-x-[24px]">
          <div className="grow">
            <LeadInfoTab/>
          </div>
          {trangthaiLead(inputs.TrangThaiLead)}
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
          <div id='Header' className='flex justify-between items-center'>
            <div className='flex space-x-[16px] items-center'>
              <div className='cursor-pointer block'>
                <Link to="/lead/thongtin">
                  <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem" />} />
                </Link>
              </div>
              <div className='text-text-primary title-large'>Thông tin Lead</div>
            </div>
            <div className="flex space-x-[12px]">
              <div className='cursor-pointer block'>
                <Link to={`/lead/thongtin/chinhsuachitietlead/${inputs.MaLead}`}>
                  <ActionPersonDetail variant="Edit" />
                </Link>
              </div>
              <ActionPersonDetail variant="Unfollow" onClick={handleConfirmUnfollow} />
              <ActionPersonDetail variant="Delete" onClick={handleConfirmDelete} />
            </div>
          </div>

          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
              <div className='flex space-x-[24px]'>
                <TextInput variant='ReadOnly' title='Lead ID' showRedAsterisk value={inputs.MaLead} type="text" />
                <TextInput variant='ReadOnly' title='Họ tên' showRedAsterisk value={inputs.HoTenLead} type="text" />
                <DropDown
                  variant='ReadOnly'
                  title="Giới tính"
                  showRedAsterisk
                  value={inputs.GioiTinhLead}
                >
                </DropDown>
              </div>
              <div className='flex space-x-[24px]'>
                <CustomDatePicker
                  variant='ReadOnly'
                  title='Ngày sinh'
                  value={inputs.NgaySinhLead}
                >
                  {inputs.NgaySinhLead}
                </CustomDatePicker>
                <TextInput
                  variant='ReadOnly'
                  title='Số điện thoại'
                  showRedAsterisk
                  value={inputs.SoDienThoaiLead}
                  type="text"
                />
                <TextInput
                  variant='ReadOnly'
                  title='Email'
                  showRedAsterisk
                  value={inputs.EmailLead}
                  type="text"
                />
              </div>
              <div className='flex space-x-[24px]'>
                <DropDown
                  variant='ReadOnly'
                  title="Nghề nghiệp"
                  showRedAsterisk
                  value={inputs.TenNgheNghiep}
                >
                  
                </DropDown>
                <DropDown
                  variant='ReadOnly'
                  title="Nguồn Lead"
                  showRedAsterisk
                  value={inputs.NguonLead}
                >
                  Website
                </DropDown>
                <TextInput
                  variant='ReadOnly'
                  title='PIC (Người tiếp nhận)'
                  showRedAsterisk
                  value={inputs.HoTenNV}
                >
                </TextInput>
              </div>
              <div className='space-x-[24px]'>
                <TextArea
                  title='Ghi chú'
                  variant='ReadOnly'
                  value={inputs.GhiChuLead}
                  type="text"
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
        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative w-[535px] flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
                <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa Lead</div>
                <div className='absolute top-[36px] right-[36px]'>
                  <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete} />} />
                </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[463px]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do xóa' previewText='Điền lý do' onChange={handleDeleteChange}/>
                </div>
                <AlertInfo>Xóa Lead có thể được khôi phục, vui lòng liên hệ với bộ phận IT</AlertInfo>
              </div>
              <Button variant="Destructive" size='Big' onClick={handleDelete}>Xác nhận xóa</Button>
            </div>
          </div>
        )}
        {showUnfollowConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative w-[535px] flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
                <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận hủy theo dõi</div>
                <div className='absolute top-[36px] right-[36px]'>
                  <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelUnfollow} />} />
                </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[auto]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do hủy theo dõi' previewText='Điền lý do' onChange={handleUnfollowChange}/>
                </div>
                <AlertInfo>Hủy theo dõi Lead có thể được khôi phục, vui lòng liên hệ với bộ phận IT</AlertInfo>
              </div>
              <div className='cursor-pointer block'>
                <Link to="/lead/thongtin/huytheodoilead">
                  <Button variant="Destructive" size='Big' stretch='full' onClick={handleUnfollow}>Xác nhận hủy theo dõi</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {showSuccessUnfollow && <InformSuccess>Hủy theo dõi Lead thành công</InformSuccess>}
        {showFailureUnfollow && <InformFailure>Hủy theo dõi Lead thất bại</InformFailure>}
        {showSuccessDelete && <InformSuccess>Xóa Lead thành công</InformSuccess>}
        {showFailureDelete && <InformFailure>Xóa Lead thất bại</InformFailure>}
      </div>
    </main>
  );
};

export default DSLead_XemChiTietLead;
