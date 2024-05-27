import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';
import CaretDownMd from "../../icons/Arrow/CaretDownMd.jsx";
import CaretUpMd from "../../icons/Arrow/CaretUpMd.jsx";
import defaultdiscountlist from "../../../defaultdiscountlist.json";
import maxdiscountlist from "../../../maxdiscountlist.json";

const DiscountListFilter = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);


    return (

        <form className="w-auto relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className=" w-auto relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">
                <div className="p-6 pb-3 w-fit flex gap-6">
                    <div>
                        <div className=" title-medium text-text-secondary">Phần trăm giảm giá mặc định</div>
                        <div id="Chon%" className="p-2 pl-1 w-max"><Button onClick={() => setIsOpen((prev) => !prev)}>
                            Chọn %

                            {!isOpen ? (
                                <CaretDownMd className="h-8"></CaretDownMd>
                            ) : (
                                <CaretUpMd className="h-8"></CaretUpMd>
                            )
                            }
                        </Button></div>
                        {isOpen && (
                            <div className="absolute w-max z-10 bg-indigo-500 flex flex-col rounded-lg p-2  text-white ">
                                {defaultdiscountlist.map((item, i) => (
                                    <div className="justify-between  inline-flex mt-2 hover:text-white cursor-pointer rounded-r-lg  hover:border-b-2 hover:font-semibold">
                                        <div >{item.discount_name}</div>
                                        <div className="ml-auto pl-5">{item.discount_value}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <div className=" title-medium text-text-secondary">Phần trăm giảm giá tối đa</div>
                        <div className="p-2 pl-1 w-max duration-500 "><Button  onClick={() => setIsOpen1((prev) => !prev )}>
                            Chọn %

                            {!isOpen1 ? (
                                <CaretDownMd className="h-8"></CaretDownMd>
                            ) : (
                                <CaretUpMd className="h-8"></CaretUpMd>
                            )
                            }
                        </Button></div>
                        {isOpen1 && (
                            <div className="absolute  z-10 bg-indigo-500 flex flex-col rounded-lg p-2 w-max text-white ">
                                {maxdiscountlist.map((item, i) => (
                                    <div className="justify-between  inline-flex mt-2 hover:text-white cursor-pointer rounded-r-lg  hover:border-b-2 hover:font-semibold">
                                        <div >{item.discount_name}</div>
                                        <div className="ml-auto pl-3">{item.discount_value}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>


                <div className="p-6 pb-3 w-fit">
                    <div className="pl-3 title-medium text-text-secondary">Thời gian cập nhật</div>
                    <div className="pl-3 ">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} isClearable showIcon />
                    </div>
                </div>
                <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

                <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
                    <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                        <Button><input type="reset" /></Button>
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

export default DiscountListFilter