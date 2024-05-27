import React from 'react'
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg'
import Copy from '../../src/components/icons/Edit/Copy'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import pay from '../assets/logo/pay.svg'




const Thanh_toan = () => {
  return (
    
    <main className="bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')]"> 
      
      <div className="relative z-10 flex flex-col ">
       

        <div className='py-[100px] w-full  items-center justify-center flex order-first '>
          <img src={SkillboostLogo} alt=""  />
        </div>
        <div className=' bg-white py-[36px] px-[64px] rounded-lg self-center	 items-center justify-center flex flex-col 	'>
          <div className='headline-medium text-center  '>
            Thanh toán
          </div>
          <div className='flex flex-row mt-6'>
            <div className='mr-14'>
              <div>
                <img src={pay} alt="" />
              </div>
            </div>
            
            <div className=' pl-2 w-full space-y-6'>
              <div className='flex space-x-16'>
                <TextInput title='Mã đơn hàng' variant='ReadOnly'> ID01468790</TextInput>
                <TextInput title='Mã giảm giá (nếu có) ' variant='ReadOnly'> LEA00813218_HHSV_01</TextInput>
              </div>

              <div className='flex space-x-16'>
                <TextInput title='Tên người thụ hưởng' variant='ReadOnly'> Phạm Nhật Phi</TextInput>
                <TextInput title='Số tài khoản ' variant='ReadOnly' rightIcon={<Copy width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}> 9353538222</TextInput>
              </div>

              <div className='flex space-x-16'>
                <TextInput title='Chi nhánh' variant='ReadOnly'> Vietcombank Hà Nội</TextInput>
                <TextInput title='Nội dung chuyển khoản ' variant='ReadOnly ' rightIcon={<Copy width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}> ID01468790</TextInput>
              </div>
              

              <div className='body medium text-text-secondary flex flex-col'>
                Tổng tiền:
                  <label for="" class="block mb-2  ">7.990.000đ</label>
              </div>
            </div>
            
          </div>

          
        </div>


        <div className='flex justify-center space-x-[24px] mt-10 mb-10'>
          <Button variant='Outlined'> Trở về trang chủ</Button>
          <Button> Đã thanh toán</Button>
        </div>
      </div>



    </main>
  )
}

export default Thanh_toan