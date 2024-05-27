import { Link } from 'react-router-dom'

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
import DatePicker from '../components/ui/placeholder/DatePicker'
import DropDown from '../components/ui/placeholder/DropDown.jsx'
import { useEffect, useState } from 'react'


const DSKhoaHoc_TaoKhoaHoc = () => {

  const [inputs, setInputs] = useState({});
  const [counter, setCounter] = useState({});

  const handleWeekdayChange = (event) => {
    const id = "Weekday";
    setInputs(values => ({...values, [id]: event.value}));
  }

  const handleTimeStartChange = (event) => {
    const id = "TimeStart";
    setInputs(values => ({...values, [id]: event.value}));
  }

  const handleTimeEndChange = () => {
    const id = "TimeEnd";
    setInputs(values => ({...values, [id]: event.value}));
  }

  const handleDuplicate = () => {
    const id ="Duplucator"
    const originalElement = document.getElementById('Duplicated');
    const clone = originalElement.cloneNode(true);
    clone.id = `Duplicator${counter + 1}`;
    setCounter(counter + 1);
    originalElement.parentNode.appendChild(clone);
  };

  return (
  <main id='DSKhoaHoc_TaoKhoaHoc' className='w-full bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div id='Sidebar' className='col-span-1 max-2xl:hidden'>
      <SidebarQL/>
    </div>
        
    <div id='ContentContainer' className='col-span-6 max-2xl:col-span-7 bg-background-secondary px-16 max-2xl:px-10 max-lg:px-4 py-8 space-y-6'>
      <div id='Header' >
        <HeaderAdmin>Khóa học</HeaderAdmin>
      </div>

      <div id='CourseInfo' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] max-lg:flex-auto flex-col p-6 box-border gap-4 space-y-6">
        <div id='Header' className='flex items-center space-x-4'>
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
        <div className='text-text-primary title-large relative flex items-center mr-6'>Tạo khóa học</div>
            </div>

            <div id='Content' className='flex flex-col space-y-9 w-full h-full'>
                <div className='flex justify-between space-x-6 max-2xl:flex-wrap max-2xl:space-x-0'>
                    <div className='space-y-6 flex-auto '> {/* check lai width voi screen duoi 540px */}
                        <div> {/* từ khoảng 540px tất cả inputs bị tràn */}
                            <TextInput  title='Tên khóa học' previewText='Nhập tên khóa học'></TextInput>
                        </div>
                        
                        <div>
                            <TextInput  title='Giá tiền hiển thị' previewText='Nhập giá tiền hiển thị'></TextInput>
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

                


            <div className='justify-between flex flex-wrap space-x-6 max-2xl:space-x-1 flex-auto'>
              <div>
                <DatePicker  title='Ngày khai giảng' previewText='Chọn ngày khai giảng'></DatePicker>
              </div>

              <div>
                <DatePicker title='Ngày bế giảng' previewText='Chọn ngày bế giảng'></DatePicker>
              </div>

              <div>
                <TextInput  title='Số buổi học' previewText='Nhập số buổi học'></TextInput>
              </div>

              <div>
                <TextInput  title='Số lượng học viên tối đa' previewText='Nhập số lượng tối đa'></TextInput>
              </div>
            </div>

            <div id="Duplicated" className='justify-between flex flex-wrap space-x-6 max-2xl:space-x-1 flex-auto'>
              <div className='flex'>
                <DropDown  
                  title='Thứ' 
                  previewText='Chọn thứ' 
                  options={["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"
                ].map(i => ({value: i, label: i
                }))}
                  onHandleChange={handleWeekdayChange}
                  className='flex'
                />
              </div>

              <div className='flex'>
                <DropDown  
                  title='Thời gian bắt đầu' 
                  previewText='Chọn giờ' 
                  options={["09h00", "09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00"
                ].map(i => ({value: i, label: i
                }))}
                  onHandleChange={handleTimeStartChange}

                />
              </div>


              <div className='flex'>
                <DropDown 
                  title='Thời gian kết thúc' 
                  previewText='Chọn giờ'
                  options={["09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00", "23h30"
                ].map(i => ({value: i, label: i
                }))}
                  onHandleChange={handleTimeEndChange}
                  
                />
              </div>
            </div>     

            <div id='Duplicator' className=''>
              <Button 
                variant='Neutral' 
                size='Medium' 
                leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}
                onClick={handleDuplicate}
                  
              >Thêm buổi học</Button>
            </div>

            <div>
              <TextArea title='Mô tả khóa học' previewText='Nhập mô tả' className="block w-full" variant="Editable"> {/* từ khoảng 680px sẽ bị tràn */}
                </TextArea>
            </div>

            <div className='flex w-full space-x-3 items-center justify-end'>
              <div className='cursor-pointer block'>
                <Link to="/khoahocAdmin">
                  <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                </Link>
              </div>
                <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default DSKhoaHoc_TaoKhoaHoc