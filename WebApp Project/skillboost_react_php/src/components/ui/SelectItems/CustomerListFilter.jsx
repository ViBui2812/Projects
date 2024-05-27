import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';

const CustomerListFilter = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (

        <form className="w-full relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className=" w-auto relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">
                <div className="p-6 pb-3 w-fit">
                    <div className="pl-3 title-medium text-text-secondary">Thời gian cập nhật</div>
                    <div className="pl-3 ">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} isClearable showIcon />
                    </div>
                </div>
                <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

                <div className="p-6  w-fit">
                    <div className="pl-3 title-medium text-text-secondary">Nghề nghiệp</div>
                    <ul class="inline-flex items-center pl-3 pt-3 grid-cols-3">
                        <div>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job1"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job1" className="pl-2">Chuyên viên kinh doanh</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job2"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job2" className="pl-2">Giảng viên</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job3"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job3" className="pl-2">Mua bán</label>
                            </li>
                        </div>
                        <div>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job4"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job4" className="pl-2">Nhiếp ảnh</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job5"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job5" className="pl-2">Học sinh-sinh viên</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job6"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job6" className="pl-2">Nhân viên bất động sản</label>
                            </li>
                        </div>
                        <div>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job7"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job7" className="pl-2">Phân tích dữ liệu</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job8"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job8" className="pl-2">Bác sĩ</label>
                            </li>
                            <li className="flex items-center p-2 pt-0">
                                <input
                                    type="checkbox"
                                    id="Job9"
                                    class=" 
                                    relative 
                                    h-4 w-4 
                                    cursor-pointer
                                    transition-all 
                                    hover:before:opacity-10
                                    accent-indigo-600
                            "/>
                                <label htmlFor="Job9" className="pl-2">Nhà báo</label>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

                <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
                    <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                        <Button size="Small" variant="Secondary"><input type="reset" /></Button>
                    </div>
                    <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                        <Button size="Small" variant="Primary">Xóa</Button>
                    </div>
                    <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                        <Button size="Small" variant="Plain">Hủy</Button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default CustomerListFilter