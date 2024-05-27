import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';
const CourseListFilter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [width, setWidth] = useState(100);
    const changeWidth = (event) => {
      setWidth(event.target.value);
    };
      const [range, setRange] = useState({ min: 100, max: 300 });
    
      const handleChange = (values) => {
        setRange({ min: values.min, max: values.max });
      };
  return (
    <div className="w-full relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className=" w-1/3 relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">   
          <div className="p-2 pl-8 w-fit">
              <div className="pl- pt-5 pb-2 title-medium text-text-secondary">Giảng viên</div>
          
            <div className="p-2 grid grid-cols-2 gap-4">
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            IT Business Analysis 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on1"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on1"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on1"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Product Owner Master Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on2"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on2"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on2"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                          SQL Advanced className 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on3"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on3"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on3"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Data Analysis 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on4"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on4"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on4"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Business Intelligence 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on5"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on5"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on5"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Excel Advanced className 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on6"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on6"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on6"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Desktop Coding className 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on7"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on7"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on7"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Python Advance Coding Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on8"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on8"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on8"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Business Data Engineer 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              </div>
            </div>

            <div className="p-2 w-11/12 mx-auto  border-t border-1 border-grey"></div>
            <div className="p-2 pt-0 pl-8 w-fit">
            <div className="title-medium text-text-secondary">Ngày khai giảng</div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon />
            </div>

            <div className="p-2 w-11/12 mx-auto  border-t border-1 border-grey"></div>
            <div className="p-2 pt-0 w-full">
              <div className="pl-6 pb-2 title-medium text-text-secondary">Học phí</div>
              <div class="px-3 w-full">
                <form>
                <div class="-mx-1 flex flex-wrap">
                    <div class="w-full px-6 sm:w-1/2">
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
                    <div class="w-full px-6 sm:w-1/2">
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
            <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-grey"></div>

            <div className="p-2 pt-0 w-full">
            <div className="pl-6 title-medium text-text-secondary">Trạng thái</div>
              
                <div className="mx-auto p-2 grid grid-cols-3 gap-4">
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on9"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on9"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on9"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Đang vận hành 
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on10"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on10"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on10"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Đang chiêu sinh
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on11"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on11"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
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
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on11"
                      >
                        <div className="pl-3 flex items-center">
                          <div className="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Vô hiệu hóa
                          </div>
                        </div>
                      </label>
                    </div>
                </div>
              
            </div>

            



            <div className="p-2 pb-0 w-11/12 mx-auto  border-t border-1 border-grey"></div>
            
            <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
              <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                <Button size="Small" variant="Secondary">Đặt lại</Button>
              </div>
              <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Primary">Xóa</Button>
              </div>
              <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Plain">Hủy</Button>
              </div>
          </div>
          </div>
        </div>
  );
}
export default CourseListFilter;