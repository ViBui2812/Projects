const CourseCard = ({coursepic, coursename, teachername, starrate, price}) => {
    return (
        <nav>
            <div className="flex w-max min-w-min lg:w-max h-auto flex-col rounded-xl bg-white border-2 hover:shadow-2xl cursor-pointer max-sm:w-[300px]">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        className="duration-500 ease-in-out hover:scale-110"
                        src={coursepic}
                        alt="Hình khóa học"
                        width={400}
                        height={200}
                    />
                </div>
                <div className="px-6 pt-5">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="label-large">
                           {coursename}
                        </div>
                        <div className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-400"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            {starrate}
                        </div>
                    </div>
                    <div className="body-medium pt-1">
                        {teachername}
                    </div>
                </div>
                <div className="px-6 pb-5">
                    <h5 className="body-large float-start pt-2 text-indigo-500	font-bold">
                        {price}đ
                    </h5>
                </div>
            </div>
        </nav>
    )
}
export default CourseCard




