
import ba from '../../../assets/img/ba.png'
import bi from '../../../assets/img/bi.png'
import productowner from '../../../assets/img/productowner.png'
import sqladvanced from '../../../assets/img/sqladvanced.png'
import da from '../../../assets/img/da.png'
import Button from '../button/Button'

const CourseSelector = () => {
  return (
<div class="flex flex-wrap -mx-3 mb-5">
  <div class="w-full max-w-full px-3 mb-6 mx-auto">
    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
      <div class="relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">
        {/* <!-- card header --> */}
        <div class="px-9 p-4 flex justify-between items-stretch flex-wrap bg-transparent">
          <h3 class="m-0 flex flex-col items-start justify-center title-large text-text-primary">
            <span class="mr-3">Thêm khóa học</span>
            {/* <span class="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span> */}
          </h3>
        </div>
        {/* <!-- end card header -->
        <!-- card body  --> */}
        <div class="flex-auto block px-9 pb-1">
          <div class="overflow-x-auto">
            <table class="w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200">
              <thead class="align-bottom " >
                <tr class="title-small text-text-secondary">
                  <th class="pb-3 px-10 py-3 text-start min-w-[175px] ">Tên khóa học</th>
                  <th class="pb-3 text-middle min-w-[100px]">Giảng viên</th>
                  <th class="pb-3 text-middle min-w-[100px]">Ngày khai giảng</th>
                  <th class="pb-3 text-middle min-w-[175px]">Học phí</th>
                  {/* <th class="pb-3 text-middle min-w-[50px]">Details</th> */}
                </tr>
              </thead>
              <tbody>
                <tr class=" body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                  <td>
                    {/* checkbox */}
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
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
                        for="ripple-on"
                      >
                        <div class="body-medium text-text-primary  flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={ba} alt=""></img>
                          </div>
                          <div class="flex flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 ease-in-out  ">IT Business Analysis</a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td class="text-middle items-center mb-1">
                  Ryan Nguyễn
                  </td>
                  <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                  2023-08-23
                  </td>
                  <td class="px-4 py-3 text-center mb-1"> 4.000.000đ 
                  </td>
                  <td class="p-1.5 pr-0 pl-0 text-middle">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr class="body-medium text-text-primary last:border-b-0">
                <td>
                    {/* checkbox */}
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
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
                        for="ripple-on"
                      >
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                          <img src={productowner} alt=""></img>
                          </div>
                          <div class="flex flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 ease-in-out"> Product Owner Master Class </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td class="text-middle items-center mb-1">
                  Harry Phạm
                  </td>
                  <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                  2024-04-11
                  </td>
                  <td class="px-4 py-3 text-center mb-1"> 5.400.000đ 
                  </td>
                  <td class="pr-0 text-middle">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr class=" body-medium text-text-primary border-dashed last:border-b-0">
                <td>
                    {/* checkbox */}
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
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
                        for="ripple-on"
                      >
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                          <img src={sqladvanced} alt=""></img>
                          </div>
                          <div class="flex flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 duration-200 ease-in-out"> SQL Advanced Class 
                            </a>
                          </div>
                      </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td class="text-middle items-center mb-1">
                  Jerry Bùi
                  </td>
                  <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                  2024-02-10
                  </td>
                  <td class="px-4 py-3 text-center mb-1"> 4.914.000đ 
                  </td>
                  <td class="pr-0 text-middle">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr class="body-medium text-text-primary border-dashed last:border-b-0">
                <td>
                    {/* checkbox */}
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
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
                        for="ripple-on"
                      >
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                          <img src={da} alt=""></img>
                          </div>
                          <div class="flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 duration-200 ease-in-out"> Data Analysis </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td class="text-middle items-center mb-1">
                  Phil Phan
                  </td>
                  <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                  2023-05-31
                  </td>
                  <td class="px-4 py-3 text-center mb-1"> 4.429.000đ 
                  </td>
                  <td class="pr-0 text-middle">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr class="body-medium text-text-primary border-dashed">
                <td>
                    {/* checkbox */}
                    <div class="inline-flex items-center pl-5">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
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
                        for="ripple-on"
                      >
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                          <img src={bi} alt=""></img>
                          </div>
                          <div class="flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 duration-200 ease-in-out"> Business Intelligence </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td class="text-middle items-center mb-1">
                    Anh Tú
                  </td>
                  <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                       2023-05-15
                  </td>
                  <td class="px-4 py-3 text-center mb-1"> 5.482.000đ 
                  </td>
                  <td class="pr-0 text-middle">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
          </div> */}
          <div class="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <div class=' relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Medium" variant="Primary">Chọn</Button>
              </div>
              <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Medium" variant="Plain">Thoát</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CourseSelector