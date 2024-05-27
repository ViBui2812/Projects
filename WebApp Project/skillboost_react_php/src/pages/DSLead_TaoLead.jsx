import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CourseSelectorNew from '../components/ui/SelectItems/CourseSelectorNew'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'

import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSLead_TaoLead = () => {
  const [showCourseSelector, setShowCourseSelector] = useState(false);

  //Họ tên
  const [inputs, setInputs] = useState({});
  const [inputYCTVs, setinputYCTVs] = useState({});
  const [leadID, setLeadID] = useState({});
  const [tuVanID, setTuVanID] = useState({});

  const [selectedNguon, setselectedNguon] = useState(null);

  //Tất cả Text Inputs
  const handleTextChange = (event) => {
      const id = event.target.id;
      const id_YCTV = event.target.dataset.yctv;
      const value = event.target.value;
      setInputs(values => ({...values, [id]: value}));
      setinputYCTVs(values => ({...values, [id_YCTV]: value}));
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
  const [selectedNgaySinh, setselectedNgaySinh] = useState(null);
  const formattedDate = selectedNgaySinh ? selectedNgaySinh.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgaySinhLead';
    const id_YCTV = 'NgaySinhLeadYeuCau';

    setInputs(values => ({...values, [id]: formattedDate}))
    setinputYCTVs(values => ({...values, [id_YCTV]: formattedDate}));
  }, [formattedDate])

  //Giới tính Dropdown
  const handleGioiTinhChange = (event) => {
    const id = 'GioiTinhLead';
    setInputs(values => ({...values, [id]: event.value}));
  }

  //Nguồn Dropdown
  const handleNguonChange = (event) => {
    const id = 'NguonLead';
    setInputs(values => ({...values, [id]: event.value}));
  }

  //Xử lý ấn nút button Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.get(`http://localhost:80/SkillBoost-API/api/Lead/read_new.php`)
  .then(function (response2) {
    console.log('get lead ID', response2.data);
    //setLeadID(response2.data);

    // Now that you have the lead ID, set TaoBoiLead and then create YeuCauTuVan
    const updatedInputYCTVs = {...inputYCTVs, 'TaoBoiLead': response2.data.MaLead};
    setinputYCTVs(updatedInputYCTVs); // Update inputYCTVs with TaoBoiLead

    console.log('InputYCTV', updatedInputYCTVs); // Log updatedInputYCTVs

    // Create YeuCauTuVan after setting TaoBoiL ead
    axios.post('http://localhost:80/SkillBoost-API/api/YeuCauTuVan/create.php', updatedInputYCTVs)
      .then(function(response3){
        console.log('Post YCTV', response3.data);
        // navigate('/');

        axios.get(`http://localhost:80/SkillBoost-API/api/YeuCauTuVan/read_new.php`)
          .then(function (response4) {
            console.log('Tư Vấn ID', response4.data);
            //setTuVanID(response4.data);

            selectedCourses.forEach(item => {
              axios.post('http://localhost:80/SkillBoost-API/api/ChiTietKhoaHocThuocYCTV/create.php', item)
                .then(function(response5){
                  console.log('Khóa học thuộc YCTV', response5.data);

                  axios.patch('http://localhost:80/SkillBoost-API/api/ChiTietKhoaHocThuocYCTV/update_matuvan.php', response4.data)
                    .then(function(response6){
                  console.log('Đổi Mã tư vấn', response6.data);
                  
                });
                });
            });
          });
      });
  });
};

  // useEffect(() => {
  //   setInputs(values => ({...values,'ChinhSuaLanCuoiBoi': localStorage.getItem('MaNV'),'TaoBoi': localStorage.getItem('MaNV')}));
  // }, [])
  
  const handleCourseSelectorClick = () => {
    setShowCourseSelector(!showCourseSelector);
  };

  //Tạo mảng chứa khóa học đc chọn
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (selectedCourses) => {
    console.log("Khóa học được chọn:", selectedCourses); // Check if this logs the selected courses array
    setSelectedCourses(selectedCourses);
  };

  //console.log(inputs);
  //console.log('Kết quả KH plssssss',selectedCourses);

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>Lead</HeaderAdmin>
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] ">
        <form onSubmit={handleSubmit} className="space-y-[24px]">
          <div id='Header' className='flex items-center space-x-[16px]'>
            <div className='cursor-pointer block'>
              <Link to="/lead/thongtin">
                <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              </Link>
            </div>
            <div className='text-text-primary title-large'>Tạo Lead mới</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='HoTenLead'
                      data-yctv='TenLeadYeuCau'
                      title='Họ tên'
                      previewText='Nhập họ tên'
                      showRedAsterisk
                      onChange={handleTextChange}
                      >

                      </TextInput>
                    <DropDown
                        id="GioiTinhLead"
                        title="Giới tính"
                        previewText="Chọn giới tính"
                        showRedAsterisk
                        options={["Nam", "Nữ"].map(i => ({
                          value: i,label:i
                        }))}
                        onHandleChange={handleGioiTinhChange}
                    />
                    <CustomDatePicker 
                      id='NgaySinhLead'
                      data-yctv='NgaySinhLeadYeuCau'
                      title='Ngày sinh'
                      previewText='Chọn ngày sinh'
                      showRedAsterisk={true}
                      selectedDate={selectedNgaySinh}
                      setSelectedDate={setselectedNgaySinh}
                    />
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='SoDienThoaiLead'
                      data-yctv='SDTLeadYeuCau'
                      title='Số điện thoại'
                      previewText='Nhập số điện thoại'
                      onChange={handleTextChange}showRedAsterisk
                    >

                    </TextInput>
                    <TextInput
                      id='EmailLead'
                      data-yctv='EmailLeadYeuCau'
                      title='Email'
                      previewText='Nhập email'
                      showRedAsterisk
                      onChange={handleTextChange}
                      >
                        
                      </TextInput>  
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
                    />
                </div>
                <div className='w-1/3 space-x-[24px]'>
                    <DropDown
                        id='NguonLead'
                        title="Nguồn"
                        previewText="Chọn nguồn"
                        showRedAsterisk
                        options={["Website", "Người thân", "Facebook", "Instagram", "Khác"].map(i => ({
                          value: i,label:i
                        }))}
                        onHandleChange={handleNguonChange}
                    />
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        id='GhiChuLead'
                        data-yctv='GhiChuYCTV'
                        title='Ghi chú'
                        previewText='Nhập ghi chú'
                        onChange={handleTextChange}
                    />
                </div>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học đã mua</div>
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
                      {selectedCourses.map((course, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-[16px] py-[24px]">{course.TenKhoaHoc}</td>
                          <td className="px-[16px] py-[24px]">{course.GiangVien}</td>
                          <td className="px-[16px] py-[24px]">{course.GiaTien}</td>
                        </tr>
                      ))}
                </tbody>
                </table>
              </div>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-between'>
              <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>
                Thêm khóa học
              </Button>
              <div className="flex space-x-[24px]">
                <div className='cursor-pointer block'>
                  <Link to="/lead/thongtin">
                    <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                  </Link>
                </div>
                  <Button type='submit' variant='Primary' size='Medium'>Xác nhận tạo</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
        {showCourseSelector && (
        <div className="absolute top-[396px] left-[500px] z-50">
          <CourseSelectorNew
            onSubmit={handleCourseSelection}
            onCancel={setShowCourseSelector}
          />
        </div>
        )}
    </main>
  );
};

export default DSLead_TaoLead;
