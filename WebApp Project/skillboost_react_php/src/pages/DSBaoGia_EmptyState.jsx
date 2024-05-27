import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'
import EmptyState from '../assets/state/EmptyState.svg'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'

const DSBaoGia_EmptyState = () => (
    <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
        <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
          <SidebarQL/>
        </div>
        <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
          <div id='Header'>
            <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
          </div>
          <div id='LeadInfoNavigation'>
            <LeadInfoTab/>
          </div>
          <div id='ContentInside' className="w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem]">
            <div id='Header' className='flex justify-between items-center'>
              <div className='text-text-primary title-large'>Danh sách báo giá</div>
              <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Tạo báo giá mới</Button>
            </div>
            <div id='Content' className='flex flex-col space-y-[32px] w-full h-screen items-center justify-center'>
              <img src={EmptyState} alt="EmptySate" />
              <div className='title-large text-text-third'>Hiện chưa có báo giá nào</div>
            </div>
          </div>
        </div>
    </main>
)

export default DSBaoGia_EmptyState