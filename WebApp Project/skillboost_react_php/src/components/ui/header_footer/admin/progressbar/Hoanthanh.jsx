import React from 'react'
import  CircleCheck  from '../../../../icons/Warning/CircleCheck'

const Hoanthanh = () => {
  return (
    <div className='space-y-[2px]'>
        <div class="flex items-center">
            <span class="h-[6px] w-[231px]  rounded-xl bg-brand-default"></span>
            <span class="h-[6px] w-[231px]  rounded-xl bg-brand-default"></span>
            <span class="h-[6px] w-[231px]  rounded-xl bg-brand-default"></span>
            <span className='bg-brand-default text-text-white rounded-full '><CircleCheck width="24px" height="24px"/></span>
        </div>
        <div className='flex body-small text-text-third '>
            <div className='text-brand-default'>
                Tiếp nhận yêu cầu
            </div>
            <div className='content-center text-center w-[231px] text-brand-default'>Tư vấn</div>
            <div className='content-center text-center w-[231px] text-brand-default'>Báo giá</div>
            <div className='content-center text-center w-[200px] text-brand-default'>Thanh toán</div>
            
        </div>
    </div>
  )
}

export default Hoanthanh