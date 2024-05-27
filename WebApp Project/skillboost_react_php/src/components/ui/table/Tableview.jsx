const Tableview = () => {
    return (
      <div class="flex flex-col">
          <div class="overflow-x-auto ">
                      <table class="min-w-[50%]">
                          <tr className='title-small text-text-secondary border-b '>
                              <th scope="col" class=" px-6 py-4 text-left">
                                  Công việc
                              </th>
                              <th scope="col" class=" px-6 py-4 text-left">
                                  Đối tượng
                              </th>
                              <th scope="col" class=" px-6 py-4 text-left">
                                  Thời gian chờ
                              </th>
                          </tr>
                          <tr className='body-medium text-text-primary  hover:bg-background-third '>
                              <td className='px-6 py-4 '>
                                  Trả lời tin nhắn
                              </td>
                              <td className='px-6 py-4 '>
                                  Hoàng Thái Nguyên
                              </td>
                              <td className='px-6 py-4 '>
                                  5 ngày
                              </td>
                          </tr>
                      </table>
  
  
          </div>
      </div>
    )
  }
  
  
  export default Tableview
  