import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CourseSelector from '../components/ui/SelectItems/CourseSelector'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'

import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSKhachHang_TaoKH = () => {
  const [showCourseSelector, setShowCourseSelector] = useState(false);

  //Họ tên
  const [inputs, setInputs] = useState({});

  const [selectedNguon, setselectedNguon] = useState(null);

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
    const label = 'TenNgheNghiep';
    setInputs(values => ({...values, [id]: event.value, [label]:event.label}));
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
    const id = 'NgaySinhKH';
    setInputs(values => ({...values, [id]: formattedDate}))
  }, [formattedDate])

  //Giới tính Dropdown
  const handleGioiTinhChange = (event) => {
    const id = 'GioiTinhKH';
    setInputs(values => ({...values, [id]: event.value}));
  }

  const handleCourseSelectorClick = () => {
    setShowCourseSelector(!showCourseSelector);
  };

  console.log(inputs);

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>Khách hàng</HeaderAdmin>
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
          <div id='Header' className='flex items-center space-x-[16px]'>
            <div className='cursor-pointer block'>
                <Link to="/khachhang">
                  <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                </Link>
            </div>
            <div className='text-text-primary title-large'>Tạo khách hàng mới</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='HoTenKH'
                      title='Họ tên'
                      previewText='Họ tên'
                      onChange={handleTextChange}
                      showRedAsterisk
                      >

                      </TextInput>
                    <DropDown
                      id="GioiTinhKH"
                      title="Giới tính"
                      previewText="Giới tính"
                      showRedAsterisk
                      options={["Nam", "Nữ"].map(i => ({
                        value: i,label:i
                      }))}
                      onHandleChange={handleGioiTinhChange}
                    />
                    <CustomDatePicker 
                      id='NgaySinhKH'
                      title='Ngày sinh'
                      previewText='Ngày sinh'
                      showRedAsterisk={true}
                      selectedDate={selectedNgaySinh}
                      setSelectedDate={setselectedNgaySinh}
                    />
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='SoDienThoaiKH'
                      title='Số điện thoại'
                      previewText='Số điện thoại'
                      onChange={handleTextChange}showRedAsterisk
                      >

                    </TextInput>
                    <TextInput
                      id='EmailKH'
                      title='Email'
                      previewText='Email'
                      showRedAsterisk
                      onChange={handleTextChange} ></TextInput>  
                    <DropDown
                        id="NgheNghiepKH"
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
                      title="Nguồn"
                      previewText="Nguồn"
                      showRedAsterisk
                      options={["Website", "Người thân", "Facebook", "Instagram", "Khác"]}
                      selectedOption={selectedNguon}
                      setSelectedOption={setselectedNguon}
                    />
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                      id='GhiChuKH'
                      title='Ghi chú'
                      previewText='Ghi chú'
                      onChange={handleTextChange}
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
                      <td colspan="3" className='px-[16px] py-[16px]'>
                        <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>Thêm khóa học</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
                <div className='cursor-pointer block'>
                    <Link to="/khachhang">
                      <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                    </Link>
                </div>
                <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
            </div>
            </div>
        </div>
        </div>
        {showCourseSelector && 
            <div className="absolute top-[396px] left-[500px] z-50">
                <CourseSelector/>
            </div>
        }
    </main>
  );
};

export default DSKhachHang_TaoKH;
