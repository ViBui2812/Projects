import React from 'react'
import Header from '../components/ui/header_footer/customer/Header.jsx'
import Footer from '../components/ui/header_footer/customer/Footer.jsx'
import Banner from '../assets/logo/Banner.svg'
import ArrowRightMd from '../components/icons/Arrow/ArrowRightMd.jsx'
import BrandCard from '../components/ui/card/BrandCard.jsx'
import CommentCard from '../components/ui/card/CommentCard.jsx'
import Fullstack_logo from '../assets/logo/Fullstack_logo.svg'
import Google_logo from '../assets/logo/Google_logo.svg'
import UEH_logo from '../assets/logo/UEH_logo.svg'
import Illustration from '../assets/img/Illustration.svg'


const TrangChu = () => (

    <main className="bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')]">
        <div name="Header" className="sticky top-0 z-10 bg-cover bg-[url('./assets/logo/Background.svg')]">
            <Header />
        </div>
        <div name="body" className="px-40 max-sm:px-5">
            <div className='relative flex max-sm:flex-col sm:flex-row sm:w-full justify-center items-start w-full pt-28 max-sm:pt-2'>
                <div className='hidden max-sm:block w-auto h-auto rounded-xl self-center'>
                    <img
                        src={Banner}
                        alt="Banner"
                        className=''
                        width={350}
                        height={202}
                    />
                </div>
                <div className='flex flex-col  max-sm:py-5 max-sm:text-center'>
                    <div className='display-large text-text-secondary max-sm:font-semibold max-sm:text-3xl'>Khám phá tri thức - </div>
                    <div className='display-large text-text-secondary max-sm:text-text-secondary max-sm:text-3xl max-sm:pt-[-5px]'>Vươn tới thành công</div>
                    <div className='headline-small text-text-third pt-10 sm:w-2/3 max-sm:text-xl'>Một nền tảng giúp bạn khám phá tiềm năng vô tận trong thế giới IT thông qua các khoá trực tuyến tùy chỉnh</div>
                </div>
                <div className='max-sm:hidden sm:flex w-max p-2 relative max-w-max h-auto flex-row rounded-xl '>
                    <img
                        src={Banner}
                        alt="Banner"
                        className='duration-500 ease-in-out hover:scale-110'
                        width={1100}

                    />
                </div>
            </div>

            <div name="Partner container" className='relative flex flex-col xl:w-full justify-center max-sm:text-center items-start w-full py-28 max-sm:pt-0 max-sm:pb-7'>
                <div className='flex self-center display-small max-sm:text-text-secondary max-sm:text-3xl'>
                    Chúng tôi hợp tác với nhiều đối tác đặc biệt
                </div>
                <div className='flex flex-row self-center pt-10 gap-20 max-sm:flex-col max-sm:gap-3'>
                    <div><BrandCard brandname={Google_logo} /></div>
                    <div><BrandCard brandname={UEH_logo} /></div>
                    <div><BrandCard brandname={Fullstack_logo} /></div>
                </div>
            </div>


            <div className='relative flex flex-row xl:w-full justify-center items-start w-full'>
                <div className='flex w-max p-2 relative max-w-max h-auto flex-row rounded-xl max-sm:hidden'>
                    <img
                        src={Illustration}
                        alt="Illustration"
                        className='duration-500 ease-in-out hover:scale-110'
                        width={1100}
                    />
                </div>
                <div name="Reason To Choose Container max-sm:text-center">
                    <div className='display-small max-sm:text-text-secondary max-sm:text-3xl max-sm:text-center max-sm:pt-0'>Vì sao nền tảng học trực tuyến của chúng tôi là lựa chọn tốt nhất cho khóa học IT của bạn?</div>
                    <div className='relative flex flex-col gap-5 sm:pl-40 pt-10 self-center max-sm:pl-[80px] max-sm:flex-left'>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd /> Chất lượng đáng tin cậy</p>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd />Đa dạng chủ đề</p>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd />Học tập linh hoạt</p>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd />Hỗ trợ cá nhân</p>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd />Học theo tiến độ của bạn</p>
                        <p className='flex items-center duration-300 ease-in-out hover:scale-105'> <ArrowRightMd />Chứng chỉ hoàn thành</p>
                    </div>
                    <div className='hidden max-sm:block w-auto h-auto rounded-xl self-center'>
                        <img
                            src={Illustration}
                            alt="Illustration"
                            className='duration-500 ease-in-out hover:scale-110'
                        />
                    </div>
                </div>
            </div>
            <div name="Comments Container" className='relative flex flex-col xl:w-full justify-center items-start w-full py-28 max-sm:pt-0'>
                <div className='flex self-center display-small max-sm:text-text-secondary max-sm:text-3xl max-sm:text-center'>
                    Học viên nói gì về chúng tôi
                </div>
                <div className='flex flex-row self-center pt-10 gap-20 max-sm:flex-col max-sm:gap-2'>
                    <div>
                        <CommentCard
                            content={"Tôi thực sự ấn tượng với nền tảng học IT này! Các khóa học rất chi tiết và dễ hiểu, đồng thời có nhiều bài thực hành giúp tăng cường kiến thức. Cộng đồng hỗ trợ cũng rất tích cực."}
                            cus_name={"Hữu Anh Trần"}
                            cus_course={"IT Business Analyst"}
                        />
                    </div>
                    <div>
                        <CommentCard
                            content={"Website cung cấp nhiều tài nguyên học tập chất lượng. Tôi đã học nhiều từ các bài giảng và dự án thực tế. Giao diện người dùng thân thiện và dễ dàng tìm kiếm thông tin mình cần."}
                            cus_name={"Phạm Như Ngọc"}
                            cus_course={"IT Business Analyst"}
                        />
                    </div>
                    <div>
                        <CommentCard
                            content={"Cộng đồng học viên rất tích cực và hỗ trợ. Tôi thích cách mà các mentor và giáo viên tương tác với sinh viên. Điều này thực sự tạo ra một môi trường học tập tích cực."}
                            cus_name={"Phan Hữu Như"}
                            cus_course={"Product Owner Master Class "}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div name="Footer">
            <Footer />
        </div>
    </main>
)

export default TrangChu