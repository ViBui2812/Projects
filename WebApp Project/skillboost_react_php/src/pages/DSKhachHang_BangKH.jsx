
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import ActionIcon from '../components/ui/button/ActionIcon'
import SearchBar from '../components/ui/placeholder/SearchBar';
import CustomerListFilter from '../components/ui/SelectItems/CustomerListFilter';

import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import ChevronRight from '../components/icons/Arrow/ChevronRight'

import avatar from '../assets/logo/avatar.svg'

const DSKhachHang_BangKH = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showCustomerListFilter, setShowCustomerListFilter] = useState(false);
    const [showOptionList, setShowOptionList] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearchBar(!showSearchBar);
    };

    const handleFilterIconClick = () => {
        setShowCustomerListFilter(!showCustomerListFilter);
    };

    const handleOptionIconClick = () => {
        setShowOptionList(!showOptionList);
    };

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option);
    };


    //Lấy dữ liệu Khách hàng lên
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getCustomers();
    }, []);

    function getCustomers() {
        axios.get('http://localhost:80/SkillBoost-API/api/KhachHang/read_all.php').then(function(response) {
            console.log(response.data);
            setCustomers(response.data);
        });
    }

    return (
    <main id = "DSLead" className='relative w-full bg-background-secondary flex'>
        <div id='SidebarQL' className='sticky top-0 h-screen max-sm:relative'>
            <SidebarQL/>
        </div>
        <div id ="ContentContainer" className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div>
            <HeaderAdmin>Khách hàng</HeaderAdmin>
        </div>
        <div className="relative w-full h-auto rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[36px]">
            <div className='flex justify-between h-[30px] '>
                <div className="flex items-center title-large">Danh sách khách hàng</div>
                {showSearchBar && <SearchBar previewText='Tìm kiếm Khách hàng'/>}
                <div className='flex space-x-[16px] items-center'>
                    {/* <div className='cursor-pointer block'>
                        <Link to="/khachhang/taokhachhang">
                            <ActionIcon size='Small' icon={<AddPlus width="1.25rem" height="1.25rem"/>}/>
                        </Link>
                    </div> */}
                    <ActionIcon size='Small' icon={<SearchMagnifyingGlass width="1.25rem" height="1.25rem"/>} onClick={handleSearchIconClick}/>
                    <ActionIcon size='Small' icon={<Filter width="1.25rem" height="1.25rem"/>} onClick={handleFilterIconClick}/>
                    <ActionIcon size='Small' icon={<ArrowDownUp width="1.25rem" height="1.25rem"/>} onClick={handleOptionIconClick}/>
                    {showOptionList && (
                        <div className="absolute top-[56px] right-[16px] z-50 bg-background-primary shadow-md rounded-md p-[12px]">
                            <ul>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 1')}>Từ A-Z</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 2')}>Từ Z-A</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 3')}>Mới nhất</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 4')}>Cũ nhất</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div id='Content' className='flex flex-col space-y-[32px] w-full h-auto'>
                <div id='Table' className="flex w-full rounded-lg border border-outline-table">
                    <table className="table-auto w-full">
                        <thead className='title-small text-text-secondary text-left'> 
                            <tr>
                                <th class="px-[16px] py-[24px]">ID khách hàng</th>
                                <th class="px-[16px] py-[24px]">Tên khách hàng</th>
                                <th class="px-[16px] py-[24px] text-center">Thời gian cập nhật gần nhất</th>
                                <th class="px-[16px] py-[24px] text-center">Số điện thoại</th>
                                <th class="px-[16px] py-[24px] text-center">Email</th>
                                <th class="px-[16px] py-[24px] text-center"> </th>
                            </tr>             
                        </thead>
                        <tbody className='body-medium text-text-primary'>
                            {customers.map((customer, key) =>
                            <tr className="border-t" key={key}>
                                <td class="px-[16px] py-[24px]">{customer.MaKH}</td>
                                <td class="px-[16px] py-[24px]">
                                <div class="body-medium text-text-primary flex items-center space-x-[12px]">
                                    <div class="w-[28px] h-[28px] shrink-0 rounded-2xl">
                                        <img src={avatar} alt="" className='h-6'></img>
                                    </div>
                                    <div class="flex flex-col justify-start">{customer.HoTenKH}</div>
                                </div>
                                </td>
                                <td class="px-[16px] py-[24px] text-center">{customer.ChinhSuaLanCuoiVaoLuc}</td>
                                <td class="px-[16px] py-[24px] text-center">{customer.SoDienThoaiKH}</td>
                                <td class="px-[16px] py-[24px] text-center">{customer.EmailKH}</td>
                                <td class="items-center text-center">
                                    <div className='cursor-pointer block'>
                                        <Link to={`/khachhang/xemchitietkhachhang/${customer.MaKH}`}>
                                            <ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem"/>} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {showCustomerListFilter && 
                <div className="absolute top-[16px] right-[40px] z-50">
                    <CustomerListFilter/>
                </div>
                }
        </div>
        </div>
        
        </div>
    </main>
  )
}
export default DSKhachHang_BangKH