import SidebarNV from '../components/ui/sidebar/SidebarNV.jsx'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin.jsx'
import ActionIcon from '../components/ui/button/ActionIcon.jsx'
import Button from '../components/ui/button/Button.jsx'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft.jsx'
import TextInput from '../components/ui/placeholder/TextInput.jsx'
import TextArea from '../components/ui/placeholder/TextArea.jsx'
import Image_01 from '../components/icons/Media/Image01.jsx'
import React, { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from '../components/ui/placeholder/DatePicker.jsx'
import DropDown from '../components/ui/placeholder/DropDown.jsx'
import { Link } from "react-router-dom";

const CTKhoaHocAdmin = () => (
  <main id='CTKhoaHocAdmin' className='w-full bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div id='Sidebar' className='col-span-1'>
      <SidebarNV/>
    </div>
        
    <div id='ContentContainer' className='col-span-6 bg-background-secondary px-16 py-8 space-y-6'>
      <div id='Header' >
        <HeaderAdmin>Khóa học</HeaderAdmin>
      </div>

      <div id='CourseInfo' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col p-6 box-border gap-4 space-y-6">
        <div id='Header' className='flex items-center space-x-4'>
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
        <div className='text-text-primary title-large relative flex items-center mr-6'>Tạo khóa học</div>
            </div>

            <div id='Content' className='flex flex-col space-y-9 w-full h-full'>
                <div className='flex justify-between space-x-6'>
                    <div className='space-y-6 flex-auto '>
                        <div>
                            <TextInput  title='Tên khóa học' previewText='Nhập tên khóa học'></TextInput>
                        </div>
                        
                        <div>
                            <TextInput  title='Giá tiền hiển thị' previewText='Nhập giá tiền hiển thị'></TextInput>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-[40%]">
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

                


            <div className='justify-between flex flex-wrap space-x-6'>
              <div>
                <DatePicker  title='Ngày khai giảng' previewText='Chọn ngày khai giảng'></DatePicker>
              </div>

              <div>
                <DatePicker title='Ngày bế giảng' previewText='Chọn ngày bế giảng'></DatePicker>
              </div>

              <div>
                <TextInput  title='Số buổi học' previewText='Nhập số buổi'></TextInput>
              </div>

             

            </div>

            <div className='justify-between flex space-x-6'>
              <div>
                <DropDown  
                  title='Thời gian bắt đầu' 
                  previewText='Chọn giờ' 
                  options={["09h00", "09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00"
                ]}
                  selectedOption={selectedTime}
                  setSelectedOption={setselectedTime}
                />
              </div>


              <div>
                <DropDown 
                  title='Thời gian kết thúc' 
                  previewText='Chọn giờ'
                  options={["09h00", "09h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00"
                ]}
                  selectedOption={selectedTime}
                  setSelectedOption={setselectedTime}
                />
              </div>
              
              <div>
                <TextInput  title='Số lượng học viên tối đa' previewText='Nhập số lượng'></TextInput>
              </div>
            </div>     

              <div>
                <TextArea title='Mô tả khóa học' previewText='Nhập mô tả' className="block" variant="Editable">
                  </TextArea>
              </div>

              <div className='flex w-full space-x-[12px] items-center justify-end'>
                <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
              </div>
            </div>
          </div>
        </div>

    
    </main>
)

export default CTKhoaHocAdmin