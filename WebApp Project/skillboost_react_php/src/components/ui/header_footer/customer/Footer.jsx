import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'
import Logomark from '../../../../assets/logo/Logomark.svg'
import InstagramLogomark from '../../../../assets/logo/InstagramLogomark.svg'
import LinkedInLogomark from '../../../../assets/logo/LinkedInLogomark.svg'
import Mail from '../../../icons/Communication/Mail'



const Footer = () => {
    return (
        <div className=' bg-background-third sm:px-40 sm:py-[40px] max-sm:flex-col text-text-secondary max-sm:pl-5 max-sm:pb-10'>
            <div >
                <div className='flex flex-row space-x-auto justify-between max-sm:flex-col gap-7' >
                    <div className='w-[462px] max-sm:w-full' >
                        <div className='w-[238px] h-[46px]'>
                            <img src={SkillboostLogo} alt="Logo" />
                        </div>
                        <div className='title-medium mt-4 '>Một nền tảng giúp bạn khám phá tiềm năng vô tận trong thế giới IT thông qua các khoá trực tuyến tùy chỉnh</div>
                    </div>
                    <div >
                        <div className='title-large font-semibold'>
                            Về SkillBoost
                        </div>
                        <ul className='body-large max-sm:flex-left max-sm:pl-4' >
                            <li className='mt-6'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Giới thiệu</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="#" class="flex items-center hover:text-brand-default transition">
                                    <span>Liên hệ</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Điều khoản</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Bảo mật</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Cơ hội việc làm</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='title-large font-semibold'>
                            Hỗ trợ
                        </div>
                        <ul className='body-large max-sm:flex-left max-sm:pl-4'>
                            <li className='mt-6'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>FAQ's</span>
                                </a>
                            </li>
                            <li className='mt-4'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Trung tâm hỗ trợ</span>
                                </a>
                            </li>


                            <li className='mt-4'>
                                <a href="#" class="flex items-center  hover:text-brand-default transition">
                                    <span>Liên hệ chúng tôi</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[309px] title-medium max-sm:w-full'>
                        <div>Hãy để lại email và nhận được những chiếc Newsletter bổ ích nhé!</div>
                        <div className='flex flex-row bg-background-secondary mt-6 px-4 py-3.5 gap-3 max-sm:w-max'>
                            <div ><Mail width="25px" height="25px" /></div>
                            <div className='body-large'>Email</div>
                        </div>
                    </div>
                </div>
                <div className='body-medium flex flex-row  mt-7  w-full space-x-auto justify-between max-sm:flex-col'>
                    <div className='flex flex-row gap-9  w-[309px] max-sm:relative sm:hidden'  >
                        <div>
                            <img src={Logomark} alt="Ig" />
                            <div className='mt-3'>Facebook</div>
                        </div>
                        <div>
                            <img src={InstagramLogomark} alt="Ig" />
                            <div className='mt-3'>Instagram</div>
                        </div>
                        <div>
                            <img src={LinkedInLogomark} alt="In" />
                            <div className='mt-3'>LinkedIn</div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        © 2018 - 2023 SkillBoost. Nền tảng học IT hàng đầu Việt Nam
                    </div>
                    <div className='flex flex-row gap-9  w-[309px] max-sm:hidden '  >
                        <div>
                            <img src={Logomark} alt="Ig" />
                            <div className='mt-3'>Facebook</div>
                        </div>
                        <div>
                            <img src={InstagramLogomark} alt="Ig" />
                            <div className='mt-3'>Instagram</div>
                        </div>
                        <div>
                            <img src={LinkedInLogomark} alt="In" />
                            <div className='mt-3'>LinkedIn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer