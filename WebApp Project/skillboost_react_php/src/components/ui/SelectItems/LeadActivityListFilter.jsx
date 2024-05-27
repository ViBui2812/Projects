import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';

const LeadListFilter = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (

        <form className="w-full relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className=" w-auto relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">
                <div className="p-6 w-fit">
                    <div className="pl-3 pb-3 title-medium text-text-secondary">Loại hoạt động</div>
                    <div className="pl-3 grid grid-cols-3 gap-4 items-center">
                        <div className="flex items-center ">
                            <input
                                type="radio"
                                name="activityState"
                                value="Yêu cầu"
                                id="Yeucau" 
                                className="h-4 w-4 border-gray-300 accent-indigo-500"/>
                            <label htmlFor="Yeucau" className="pl-2 rounded-full cursor-pointer">Yêu Cầu</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState"
                                value="Tư vấn"
                                id="Tuvan" 
                                className="h-4 w-4 border-gray-300 accent-indigo-500"/>
                            <label htmlFor="Tuvan" className="pl-2 rounded-full cursor-pointer">Tư Vấn</label>
                        </div>
                        <div className="flex items-center ">
                            <input
                                type="radio"
                                name="activityState"
                                value="Gửi Email báo giá"
                                id="Guiemail" 
                                className="h-5 w-5 border-gray-300 accent-indigo-500 "/>
                            <label htmlFor="Guiemail" className="pl-2 rounded-full cursor-pointer">Gửi Email Báo giá</label>
                        </div>
                    </div>
                </div>
                <div className="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

                <div className="p-2 pt-0 w-fit">
                    <div className="pl-6 title-medium text-text-secondary">Thời gian thực hiện</div>
                    <div className="pl-6 ">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} isClearable showIcon/>
                    </div>
                </div>
                <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

                <div className="p-6 pb-4 pt-2 w-fit">
                    <div className="pl-3 pb-3 title-medium text-text-secondary">Người thực hiện</div>
                    <div className="pl-3 grid grid-cols-3 gap-16 items-center">
                        <div className="flex items-center ">
                            <input
                                type="radio"
                                name="PersonIC"
                                value="Lead"
                                id="Lead" 
                                className="h-4 w-4 border-gray-300 accent-indigo-500 "/>
                            <label htmlFor="Lead" className="pl-2 rounded-full cursor-pointer">Lead</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="PersonIC"
                                value="PIC"
                                id="PIC" 
                                className="h-4 w-4 border-gray-300 accent-indigo-500 "/>
                            <label htmlFor="PIC" className="pl-2 rounded-full cursor-pointer">PIC</label>
                        </div>
                        <div className="flex items-center ">
                            <input
                                type="radio"
                                name="PersonIC"
                                value="Hệ thống"
                                id="Hethong" 
                                className="h-4 w-4 border-gray-300 accent-indigo-500  "/>
                            <label htmlFor="Hethong" className="pl-2 rounded-full cursor-pointer">Hệ thống</label>
                        </div>
                    </div>
                </div>
                <div className="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>


                <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
                    <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                        <Button variant="Secondary" size='small'><input type="reset"/></Button>
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

export default LeadListFilter