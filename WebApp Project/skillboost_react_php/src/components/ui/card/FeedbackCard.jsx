import User02 from '../../icons/User/User02.jsx'
import Heart01 from '../../icons/Interface/Heart01.jsx'
import TrashFull from '../../../components/icons/Interface/TrashFull'

const FeedbackCard = ({cusname, starrate, content, likecount}) => {
    return (
        <div className=" lg:w-full p-4 flex  max-w-max min-w-min h-auto flex-col rounded-xl bg-white border-2">
            <div className='flex items-center pl-3'>
                <div className='flex'>
                    <User02 width={30} height={30} className="flex rounded-full border-2 border-black">

                    </User02>
                </div>
                <div className="pl-2 ">
                    <div className="flex label-medium ">
                        {cusname}
                    </div>
                    <div className="flex items-center gap-1 font-sans font-normal leading-relaxed bold">
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
            </div>
            <div className="p-3 w-auto justify-items-stretch rounded-lg border-b-4 border-r-4">
                {content}
            </div>
            <div className='pt-3 flex items-center'>
                <button><Heart01></Heart01></button>
                <div className='body-small pl-2'>
                    {likecount}
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard