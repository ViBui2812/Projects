import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../icons/Calendar/Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';

const LeadQuotationListFilter = () => {
  
   const [startDate, setStartDate] = useState(new Date());
  return (
        <div class="w-auto relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div class=" w-auto relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">   
            
            <div class="p-2 pl-2 w-full"> 
            <div class="pl-6 pt-5 title-medium text-text-secondary">Trạng thái</div>
            <div class="p-2 grid grid-cols-2 gap-4">
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-lq-1"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-lq-1"
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on-lq-1"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Nháp 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-lq-2"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-lq-2"
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on-lq-2"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Đã gửi
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              
              
              </div>
            </div>

            <div class="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

            <div class="pl-8 p-2 pt-0 w-fit">
              <div class=" title-medium text-text-secondary">Thời gian cập nhật</div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon />
            </div>
        
            <div class="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

            <div className="p-2 pt-0 w-full">
              <div className="pl-6 pb-2 title-medium text-text-secondary">Tổng tiền</div>
              <div class="px-3 w-full">
                <form>
                <div class="-mx-1 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="hocphifrom"
                          id="hocphifrom"
                          placeholder="Từ"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3  body-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-3">
                        <input
                          type="text"
                          name="hocphito"
                          id="hocphito"
                          placeholder="Đến"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 body-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>   

            <div class="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

            <div class="p-2 pt-0 w-full">
            <div class="pl-6 title-medium text-text-secondary">Người thực hiện</div>
            <div class="p-2 grid grid-cols-2 gap-4">
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-9"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-9"
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on-9"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            PIC 
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-10"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-10"
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on-10"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Hệ thống 
                          </div>
                        </div>
                      </label>
                    </div>
                    
            </div>
            </div>

            <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>
            
            <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
              <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                <Button size="Small" variant="Secondary">Đặt lại</Button>
              </div>
              <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Primary">Cập nhật</Button>
              </div>
              <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Plain">Hủy</Button>
              </div>
          </div>
          </div>

        </div>
   
  );
}

export default LeadQuotationListFilter