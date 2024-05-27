import React, { useState } from 'react';

import Header from '../components/ui/header_footer/customer/Header.jsx'
import Footer from '../components/ui/header_footer/customer/Footer.jsx'
import BA_course from '../assets/logo/BA_course.svg'
import Timer from '../components/icons/Calendar/Timer.jsx'
import Globe from '../components/icons/Navigation/Globe.jsx'
import FeedbackCard from '../components/ui/card/FeedbackCard.jsx'
import BookOpen from '../components/icons/Interface/BookOpen.jsx'
import PlayCircle from '../components/icons/Media/PlayCircle.jsx'
import FileDownload from '../components/icons/File/FileDownload.jsx'
import Notebook from '../components/icons/File/Notebook.jsx'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import Button from '../components/ui/button/Button.jsx'
import AddPlus from '../components/icons/Edit/AddPlus.jsx'
import CourseSelector from '../components/ui/SelectItems/CourseSelector'


const Chitietkhoahoc = () => {
    const [showCourseSelector, setShowCourseSelector] = useState(false);

    const handleCourseSelectorClick = () => {
        setShowCourseSelector(!showCourseSelector);
      };  

    return (
        <main className="bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')]">
            <div name="Header">
                <Header />
            </div>
            <div className='px-40 pb-16'>

                <div className='flex flex-row pt-[64px]'>

                    <div className='pr-[64px] '>
                        <img
                            src={BA_course}
                            alt=""
                            width={600}
                            height={300}
                        />
                    </div>
                    <div className='space-y-[16px]'>
                        <div className='display-small text-text-primary '>
                            IT Business Analysis
                        </div>
                        <div className='title-large text-text-primary space-y-[24px]'>
                            Chuẩn bị sẵn sàng để thành công và tìm hiểu các khái niệm phân tích kinh doanh chính để phát triển mạnh trong sự nghiệp Chuyên viên phân tích kinh doanh của bạn!
                        </div>
                        <div className='title-medium'>
                            Giảng viên: <span className='text-text-blue'>Ryan Nguyễn</span>
                        </div>
                        <div className='flex flex-row gap-[36px] text-text-primary'>
                            <div className='flex flex-row body-large gap-[16px]'>
                                <Timer width="24px" height="24px" />
                                Lần cuối cập nhật: 01/08/2023
                            </div>
                            <div className='flex flex-row body-large gap-[16px]'>
                                <Globe width="24px" height="24px" />
                                Ngôn ngữ: Tiếng Việt
                            </div>
                        </div>
                    </div>


                </div>

                <div className='flex flex-row pt-16 gap-[24px]'>

                    <div className='flex flex-col gap-[24px] w-2/3'>
                        <div className=' bg-white p-[36px] rounded-lg shadow-md  flex flex-col gap-6	'>
                            <div className='headline-small'>
                                Mô tả khóa học
                            </div>
                            <div className='body-large'>
                                Nội dung mô tả khóa học Nội dung mô tả khóa học Nội dung mô tả khóa học 
                            </div>
                        </div>
                        <div className=' bg-white p-[36px] rounded-lg shadow-md  flex flex-col space-y-[24px]'>
                            <div className='headline-small'>
                                Bình luận
                            </div>
                            <div className='body-large flex flex-row gap-[24px]'>
                                <FeedbackCard
                                    cusname={"Nguyễn Văn An"}
                                    starrate={"5"}
                                    content={"Khóa học rất hữu ích khi tôi tìm kiếm chính xác thông tin này và tôi đã có được thứ mình muốn, thật may mắn :) Ryan là một giáo viên xuất sắc, hiểu rất rõ về chủ đề này và đưa ra những lời giải thích có cấu trúc rõ ràng."}
                                    likecount={"22"}
                                />
                                <FeedbackCard
                                    cusname={"Trần Duy Hưng"}
                                    starrate={"5"}
                                    content={"Tôi đã tham gia một khóa học online về IT Business Analysis (BA) và tôi rất hài lòng với trải nghiệm của mình. Đây là một khóa học tuyệt vời để bắt đầu hoặc nâng cao kiến thức về BA trong lĩnh vực Công nghệ thông tin."}
                                    likecount={"23"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[24px] '>
                        <div className='bg-white p-[24px] rounded-lg shadow-md  flex flex-col '>
                            <div className='headline-small text-brand-default'>
                                4.000.000đ
                            </div>
                            <div className='py-5'><hr /></div>
                            <div className='title-medium text-text-secondary mb-3'>
                                Khóa học này bao gồm:
                            </div>
                            <div className='body-medium text-text-secondary space-y-3'>
                                <div className='flex flex-row gap-2'>
                                    <Timer width="20px" height="20px"/>
                                    10,5 giờ video theo yêu cầu
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <Notebook width="20px" height="20px"/>
                                    10 bài viết
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <FileDownload width="20px" height="20px"/>
                                    94 file có thể tải xuống
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <PlayCircle width="20px" height="20px"/>
                                    Truy cập mọi lúc
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <BookOpen width="20px" height="20px"/>
                                    Cấp chứng chỉ
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-[24px] rounded-lg shadow-md  flex flex-col '>
                            <div className='title-large pb-5'>
                                Thông tin nhận tư vấn
                            </div>
                            <div className='space-y-3'>
                                <div className='text-text-secondary'>
                                    <TextInput title="Họ tên" showRedAsterisk previewText='Nhập họ tên'></TextInput>
                                </div>
                                <div className='text-text-secondary'>
                                    <CustomDatePicker title='Ngày sinh'previewText='Chọn ngày sinh'showRedAsterisk={true}> </CustomDatePicker>
                                </div>
                                <div className='text-text-secondary'>
                                    <TextInput title="Số điện thoại" showRedAsterisk previewText='Nhập số điện thoại'></TextInput>
                                </div>
                                <div className='text-text-secondary'>
                                    <TextInput title="Email" showRedAsterisk previewText='Nhập email'></TextInput>
                                </div>
                                <div className='text-text-secondary'>
                                    <TextArea title="Ghi chú"  previewText='Nhập ghi chú'></TextArea>
                                </div>
                                <div >
                                    <Button variant='Neutral' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>} onClick={handleCourseSelectorClick}>Thêm khóa học quan tâm </Button>
                                </div>
                                <div className='flex justify-end'>
                                    <Button variant='Plain' size='Medium' state='disabled' >Gửi yêu cầu tư vấn </Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div name="Footer">
                <Footer />
            </div>
            {showCourseSelector && 
            <div className="absolute top-[942px] right-[150px] z-50">
                <CourseSelector/>
            </div>
            }
        </main>
    )
}

export default Chitietkhoahoc