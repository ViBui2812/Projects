import React from 'react'
import Header from '../components/ui/header_footer/customer/Header.jsx'
import Footer from '../components/ui/header_footer/customer/Footer.jsx'
import ButtonFloat from '../components/ui/button/ButtonFloat.jsx'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp.jsx'
import CourseCard from '../components/ui/card/CourseCard.jsx'
import ITBA_course from '../assets/img/ITBA_course.svg'
import BDE_course from '../assets/img/BDE_course.svg'
import BI_course from '../assets/img/BI_course.svg'
import DA_course from '../assets/img/DA_course.svg'
import Desktop_course from '../assets/img/Desktop_course.svg'
import ExcelAdvanced_course from '../assets/img/ExcelAdvanced_course.svg'
import PO_course from '../assets/img/PO_course.svg'
import Python_course from '../assets/img/Python_course.svg'
import SQLAdvanced_course from '../assets/img/SQLAdvanced_course.svg'
import { Link } from 'react-router-dom'


const TrangChu_DSKhoaHoc = () => (
    <main className="bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')]">
        <div name="Header">
            <Header />
        </div>
        <div name="body" className='px-40 max-sm:px-7 pb-20 max-sm:pt-6 '>
            <div className='relative flex flex-col xl:w-full items-start w-full gap-10 max-sm:p-0'>
                <div className='items-center inline-flex justify-between w-full'>
                    <p className='headline-medium text-gray-500'>Khóa học tại Skillboost</p>
                    <div className='ml-auto max-sm:hidden'>
                        <ButtonFloat> <ArrowDownUp /> <div className='pl-2 '>Sắp xếp</div></ButtonFloat>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10 justify-center self-center max-sm:grid-cols-1'>
                    <ul>
                        <li>
                            <Link to='/ITBA_course' >
                                <CourseCard coursepic ={ITBA_course} coursename ="IT Bussiness Analysis" teachername="Ryan Nguyễn" starrate="5.0" price="4.000.000"/>
                            </Link>
                        </li>
                        
                    </ul>
                    <div>
                        <CourseCard coursepic ={PO_course} coursename ="Product Owner Master Class" teachername="Harry Phạm" starrate="5.0" price="5.400.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={SQLAdvanced_course} coursename ="SQL Advanced Class" teachername="Jerry Bùi" starrate="5.0" price="4.914.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={DA_course} coursename ="Data Analysis" teachername="Phil Phan" starrate="5.0" price="4.429.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={BI_course} coursename ="Bussiness Intelligence" teachername="Anh Tú" starrate="5.0" price="5.482.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={ExcelAdvanced_course} coursename ="Excel Advanced Class" teachername="Ngọc Thu" starrate="5.0" price="4.704.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={Desktop_course} coursename ="Desktop Coding Class" teachername="Jennie Huỳnh" starrate="5.0" price="4.370.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={Python_course} coursename ="Python Advance Coding Class" teachername="Johnny Đặng" starrate="5.0" price="4.333.000"/>
                    </div>
                    <div>
                        <CourseCard coursepic ={BDE_course} coursename ="Bussiness Data Engineer" teachername="Tuấn Vũ" starrate="5.0" price="5.265.000"/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div name="Footer">
            <Footer />
        </div>
    </main>
)

export default TrangChu_DSKhoaHoc