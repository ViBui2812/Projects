import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../icons/Calendar/Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';

const LeadListFilter = () => {
  
   const [startDate, setStartDate] = useState(new Date());
  return (

        <div class="w-full relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div class=" w-auto relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">   
            <div class="p-2 pl-8 w-fit">
              <div class="pl- pt-5 pb-2 title-medium text-text-secondary">Thời gian cập nhật</div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon />
            </div>
              
            <div class="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

            <div class="p-2 pt-0   w-fit">
            <div class="pl-6 title-medium text-text-secondary">Khóa học quan tâm</div>
            <div class="p-2 grid grid-cols-2 gap-4">
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-0"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-0"
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
                        for="ripple-on-0"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            IT Business Analysis 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-1"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-1"
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
                        for="ripple-on-1"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Product Owner Master Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-2"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-2"
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
                        for="ripple-on-2"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                          SQL Advanced Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-3"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-3"
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
                        for="ripple-on-3"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Data Analysis 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-4"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-4"
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
                        for="ripple-on-4"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Business Intelligence 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-5"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-5"
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
                        for="ripple-on-5"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Excel Advanced Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-6"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-6"
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
                        for="ripple-on-6"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Desktop Coding Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-7"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-7"
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
                        for="ripple-on-7"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Python Advance Coding Class 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              <div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-8"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-8"
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
                        for="ripple-on-8"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Business Data Engineer 
                          </div>
                        </div>
                      </label>
                    </div>
              </div>
              </div>
            </div>

            <div class="p-2 w-11/12 mx-auto  border-t border-1 border-outline-divider"></div>

            <div class="p-2 pt-0 w-fit">
            <div class="pl-6 title-medium text-text-secondary">Trạng thái</div>
            <div class="p-2 grid grid-cols-3 gap-4">
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
                            Đang tư vấn 
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
                            Đã thanh toán 
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on-11"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on-11"
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
                        for="ripple-on-11"
                      >
                        <div class="pl-3 flex items-center">
                          <div class="flex-col justify-start mb-1 duration-200 ease-in-out body-medium text-text-primary">
                            Ngừng theo dõi 
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

export default LeadListFilter