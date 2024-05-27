import axios from "axios"
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import Image_01 from '../components/icons/Media/Image01'
import AddPlus from '../components/icons/Edit/AddPlus.jsx'
import 'react-datepicker/dist/react-datepicker.css'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import DropDown from '../components/ui/placeholder/DropDown.jsx'


const DSKhoaHoc_ChinhSuaKhoaHoc = () => {

  const { id } = useParams();

  const [inputs, setInputs] = useState([{}]);
  const [counter, setCounter] = useState({});

  const handleWeekdayChange = (event, index) => {
    const id = "Weekday";
    const updatedInputs = [...inputs]
    updatedInputs[index] = {...updatedInputs[index], [id]: event.value}
    setInputs(updatedInputs);
  }

  const handleTimeStartChange = (event, index) => {
    const id = "TimeStart";
    const updatedInputs = [...inputs]
    updatedInputs[index] = {...updatedInputs[index], [id]: event.value}
    setInputs(updatedInputs);
  }

  const handleTimeEndChange = (event, index) => {
    const id = "TimeEnd";
    const updatedInputs = [...inputs]
    updatedInputs[index] = {...updatedInputs[index], [id]: event.value}
    setInputs(updatedInputs);
  };

  //Hiển thị data dưới BE lên
  useEffect(() => {
    getThongTinKhoaHocs();
  }, []);

  function getThongTinKhoaHocs() {
    axios.get(`http://localhost:80/SkillBoost-API/api/KhoaHoc/read_single.php?MaKhoaHoc=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  //Ngày khai giảng
  const [selectedNgayKhaiGiang, setSelectedNgayKhaiGiang] = useState(null);
  const formattedDate_Start = selectedNgayKhaiGiang ? selectedNgayKhaiGiang.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgayKhaiGiang';
    setInputs(values => ({...values, [id]: formattedDate_Start}))
  }, [formattedDate_Start])

  //Ngày bế giảng
  const [selectedNgayBeGiang, setSelectedNgayBeGiang] = useState(null);
  const formattedDate_End = selectedNgayBeGiang ? selectedNgayBeGiang.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgayBeGiang';
    setInputs(values => ({...values, [id]: formattedDate_End}))
  }, [formattedDate_End])

  //Tất cả Text Inputs 
  const handleTextChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInputs(values => ({...values, [id]: value}));
  }

  console.log('inputs:', inputs);

  return (
  <main id='DSKhoaHoc_ChinhSuaKhoaHoc' className='w-full bg-background-secondary relative grid grid-cols-7'>
    <div id='Sidebar'>
      <SidebarQL/>
    </div>
    <div id='ContentContainer' className='col-span-6 max-sm:col-span-7 bg-background-secondary px-16 py-8 space-y-6 max-sm:px-4'>
      <div id='Header' className='max-sm:pl-20'>
        <HeaderAdmin>Khóa học</HeaderAdmin>
      </div>

      <div id='CourseInfo' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] max-lg:flex-auto flex-col p-6 box-border gap-4 space-y-6">
        <div id='Header' className='flex items-center space-x-4'>
          <Link to={`/khoahocAdmin/ctkhoahoc/${id}`}>
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
          </Link>
        <div className='text-text-primary title-large relative flex items-center mr-6'>Thông tin khóa học</div>
            </div>

            <div id='Content' className='flex flex-col space-y-9 w-full h-full'>
                <div className='flex justify-between space-x-6 max-2xl:flex-wrap max-2xl:space-x-0'>
                    <div className='space-y-6 flex-auto '> {/* check lai width voi screen duoi 540px */}
                        <div> {/* từ khoảng 540px tất cả inputs bị tràn */}
                            <TextInput
                              id='TenKhoaHoc'
                              title='Tên khóa học'
                              value={inputs.TenKhoaHoc}
                              onChange={handleTextChange}
                            ></TextInput>
                        </div>
                        <div>
                        <TextInput
                              id='GiaTien'
                              title='Giá tiền hiển thị'
                              value={inputs.GiaTien}
                              onChange={handleTextChange}
                            ></TextInput>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-[40%] max-2xl:w-[100%] max-2xl:mt-6">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-[#BEBEBE]">
                                <Image_01
                                    alt="upload image"
                                    height={36}
                                    width={36}
                                    onClick={() => console.log("Choose image")}
                                />
                                <p class="mb-2 pt-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Chọn từ máy</span> hoặc kéo thả ảnh</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG hoặc GIF</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </div>

            <div className='flex max-sm:flex-col overflow-x-auto w-full space-x-4 max-sm:space-x-0 max-sm:space-y-6'>
                <CustomDatePicker
                  id='NgayKhaiGiang'
                  title='Ngày khai giảng'
                  value={inputs.NgayKhaiGiang}
                  selectedDate={selectedNgayKhaiGiang}
                  setSelectedDate={setSelectedNgayKhaiGiang}
                >
                </CustomDatePicker>

                <CustomDatePicker
                  id='NgayBeGiang'
                  title='Ngày bế giảng'
                  value={inputs.NgayBeGiang}
                  selectedDate={selectedNgayBeGiang}
                  setSelectedDate={setSelectedNgayBeGiang}
                >
                </CustomDatePicker>

                <TextInput  title='Số buổi học' previewText='Nhập số buổi học'></TextInput>
            </div>

            <div className='flex w-1/3 pr-4 max-sm:w-full max-sm:pr-0'>
              <TextInput  title='Số lượng học viên tối đa' previewText='Nhập số lượng tối đa'></TextInput>
            </div>

            

              {inputs.map((input, index) => (
               <div className='flex max-sm:flex-col overflow-x-auto w-full space-x-4 max-sm:space-x-0 max-sm:space-y-6'>

                  <DropDown    
                    title='Thứ' 
                    previewText='Chọn thứ' 
                    options={["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"
                  ].map(i => ({value: i, label: i
                  }))}
                    onHandleChange={(e) => handleWeekdayChange(e, index)}
                    className='flex'
                  />

                  <DropDown  
                    title='Thời gian bắt đầu' 
                    previewText='Chọn giờ' 
                    options={["09h00", "09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00"
                  ].map(i => ({value: i, label: i
                  }))}
                    onHandleChange={(e) => handleTimeStartChange(e, index)}
                  />

                  <DropDown 
                    title='Thời gian kết thúc' 
                    previewText='Chọn giờ'
                    options={["09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00", "23h30"
                  ].map(i => ({value: i, label: i
                  }))}
                    onHandleChange={(e) => handleTimeEndChange(e, index)}
                  />
                  
              </div>     
              ))}

            <div className='flex w-full space-x-3 items-center justify-end'>
              <div className='cursor-pointer block'>
                <Button 
                  variant='Neutral' 
                  size='Medium' 
                  leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}
                  onClick={() => setInputs([...inputs, {}])}
                >Thêm buổi học</Button>
              </div>

              <div>
                <Button 
                  size="Medium" 
                  variant="Destructive" 
                  // leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}
                  onClick={() => setInputs([{}])}
                >Khởi tạo lại</Button>
              </div>
            </div>

            <div>
              <TextArea title='Mô tả khóa học' previewText='Nhập mô tả' className="block w-full" variant="Editable"> {/* từ khoảng 680px sẽ bị tràn */}
                </TextArea>
            </div>

            <div className='flex w-full space-x-3 items-center justify-end'>
              <div className='cursor-pointer block'>
                <Link to="/khoahocAdmin">
                  <Button variant='Destructive-plain' size='Medium'>Hủy chỉnh sửa</Button>
                </Link>
              </div>
                <Link to="/khoahocAdmin/ctkhoahoc"> {/* phải đổ dữ liệu sang trang ctkhoahoc, full page refresh */}
                  <Button variant='Primary' size='Medium'>Lưu chỉnh sửa</Button> {/*nhảy noti thành công */}
                </Link>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default DSKhoaHoc_ChinhSuaKhoaHoc