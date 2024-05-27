import DoubleQuotation from '../../../assets/logo/DoubleQuotation.svg'
import User01 from '../../icons/User/User01.jsx'
const CommentCard = ({ content, cus_name, cus_course }) => {
    return (
        <div>
            <div className="p-4 flex max-w-max min-w-min h-auto flex-col rounded-xl bg-white border-2 duration-150 hover:shadow-xl">
                <div>
                    <img
                        src={DoubleQuotation}
                        width={15}
                        alt="DoubleQuotation" />
                </div>
                <div className="p-3 w-auto justify-items-stretch rounded-lg border-b-4 border-r-4">
                    {content}
                </div>
                <div className="p-2 pt-5 flex items-center ">
                    <User01 width={30} height={30} className="flex rounded-full border-2 border-black"></User01>
                    <div className='pl-2'>
                        <div className="label-medium ">
                            {cus_name}
                        </div>
                        <div className="flex body-small items-center">
                            Học viên khóa {cus_course}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard