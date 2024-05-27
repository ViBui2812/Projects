import axios from "axios";
import { useEffect, useState} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import ActionIcon from '../components/ui/button/ActionIcon';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan';
import Pagination from '../components/ui/pagination/Pagination';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronRight from '../components/icons/Arrow/ChevronRight';
import EmptyState from '../assets/state/EmptyState.svg'


const DSBaoGia_BangBaoGia = () => {
    const [baoGiaLeads, setBaoGiaLeads] = useState([]);
    const { leadid } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    useEffect(() => {
        getBaoGiaLead();
    }, []);

    function getBaoGiaLead() {
        axios.get(`http://localhost:80/SkillBoost-API/api/BaoGia/read_all_lead.php?MaLead=${leadid}`).then(function (response) {
            console.log(response.data);
            setBaoGiaLeads(response.data);
            setIsLoading(false); // Set loading state to false when data is fetched
        });
    }

    return (
        <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
            <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
                <SidebarQL/>
            </div>
            <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
                <div id='Header'>
                    <HeaderAdmin progressBar={<Nhantuvan/>}>{localStorage.getItem('HoTenLead')}</HeaderAdmin>
                </div>
                <div id='LeadInfoNavigation' className='flex space-x-[24px]'>
                    <div className='grow'>
                        <LeadInfoTab/>
                    </div>
                    <LeadProgressStatus variant="DangTuVan" />
                </div>
                <div id='ContentInside' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[36px]">
                <div id='Header' className='flex justify-between items-center'>
                    <div className='text-text-primary title-large'>Danh sách báo giá</div>
                    <div className='cursor-pointer block'>
                        <Link to={`/lead/dsbaogia/taobaogia/${leadid}`}>
                            <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Tạo báo giá mới</Button>
                        </Link>
                    </div> 
                </div>
                {baoGiaLeads.length > 0 ? (
                    <div id='Content' className='flex flex-col space-y-[32px] w-full h-auto'>
                        <div id='Table' className="flex w-full rounded-lg border border-outline-table">
                            <table className="table-auto w-full">
                                <thead className='title-small text-text-secondary text-left'>
                                    <tr>
                                        <th className="px-[16px] py-[24px]">ID</th>
                                        <th className="w-[278px] px-[16px] py-[24px]">Tên báo giá</th>
                                        <th className="px-[16px] py-[24px] text-center">Trạng thái</th>
                                        <th className="px-[16px] py-[24px] text-center">Thời gian chỉnh sửa lần cuối</th>
                                        <th className="px-[16px] py-[24px] text-center">Tổng tiền</th>
                                        <th className="px-[16px] py-[24px] text-center">Người thực hiện</th>
                                    </tr>
                                </thead>
                                <tbody className='body-medium text-text-primary'>
                                    {baoGiaLeads.map((baoGia, key) =>
                                        <tr className="border-t" key={key}>
                                            <td className="px-[16px] py-[24px]">{baoGia.MaBaoGia}</td>
                                            <td className="px-[16px] py-[24px]">{baoGia.TenBaoGia}</td>
                                            <td className="px-[16px] py-[24px] text-center">{baoGia.TrangThaiBaoGia}</td>
                                            <td className="px-[16px] py-[24px] text-center">{baoGia.ChinhSuaLanCuoiVaoLuc}</td>
                                            <td className="px-[16px] py-[24px] text-center">{baoGia.TongTien}</td>
                                            <td className="px-[16px] py-[24px] text-center">PIC</td>
                                            <td>
                                                <div className='cursor-pointer block'>
                                                    <Link to="/lead/dsbaogia/xemchitietbaogia">
                                                        <ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem"/>} />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div id='Content' className='flex flex-col space-y-[32px] w-full h-screen items-center justify-center'>
                        <img src={EmptyState} alt="EmptySate" />
                        <div className='title-large text-text-third'>Hiện chưa có báo giá nào</div>
                    </div>
                )}
                </div>
            </div>
        </main>
    );
}

export default DSBaoGia_BangBaoGia;
