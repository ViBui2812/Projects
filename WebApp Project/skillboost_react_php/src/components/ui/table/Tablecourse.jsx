import TrashFull from '../../../components/icons/Interface/TrashFull'
//chưa set add row khi call component


const Tablecourse = () => {
  return (
    <div className='flex flex-col'>
        <div class="overflow-x-auto ">
                    <table class="min-w-[50%]">
                        <tr className='title-small text-text-secondary border-b '>
                            <th scope="col" class=" px-6 py-4 text-left">
                                Tên khóa học
                            </th>
                            <th scope="col" class=" px-6 py-4 text-left">
                                Giảng viên
                            </th>
                            <th scope="col" class=" px-6 py-4 text-left">
                                Giá tiền
                            </th>
                        </tr>
                        <tr className='body-medium text-text-primary bg-white group/item'>
                            <td className='px-6 py-4 '>
                                Become a Business Analyst
                            </td>
                            <td className='px-6 py-4 '>
                                Ryan Nguyễn
                            </td>
                            <td className='px-6 py-4 '>
                                4.000.000đ
                            </td>
                            <td className=' group/edit invisible group-hover/item:visible'>
                                <TrashFull width="24px" height="24px"/>
                            </td>
                        </tr>
                    </table>
        </div>
    </div>
  )
}


export default Tablecourse