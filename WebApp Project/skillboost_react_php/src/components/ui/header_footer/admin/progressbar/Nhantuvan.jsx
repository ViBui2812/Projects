import React from 'react'

const Nhantuvan = () => {
  return (
    <div className='space-y-[10px]'>
        <div class="flex ">
            <span class="h-[6px] w-[231px]  rounded-xl bg-brand-default"></span>
            <span class="h-[6px] w-[231px]  rounded-xl bg-outline-table"></span>
            <span class="h-[6px] w-[231px]  rounded-xl bg-outline-table"></span>
        </div>
        <div className='flex body-small text-text-third '>
            <div className='text-brand-default'>
                Tiếp nhận yêu cầu
            </div>
            <div className='content-center text-center w-[231px]'>Tư vấn</div>
            <div className='content-center text-center w-[231px]'>Báo giá</div>
            <div className='content-center text-center w-[200px]'>Thanh toán</div>
        </div> 
    </div>
  )
}

export default Nhantuvan