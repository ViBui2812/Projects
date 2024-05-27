import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 
import ActionIcon from '../components/ui/button/ActionIcon';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan';
import Pagination from '../components/ui/pagination/Pagination';
import SearchBar from '../components/ui/placeholder/SearchBar';
import LeadActivityListFilter from '../components/ui/SelectItems/LeadActivityListFilter';

import AddPlus from '../components/icons/Edit/AddPlus';
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass';
import Filter from '../components/icons/Interface/Filter';
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import ChevronRight from '../components/icons/Arrow/ChevronRight';

const DSHoatDongLead_BangHoatDong = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showLeadQuotationListFilter, setShowLeadQuotationListFilter] = useState(false);
    const [showOptionList, setShowOptionList] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearchIconClick = () => {
        setShowSearchBar(!showSearchBar);
    };

    const handleFilterIconClick = () => {
        setShowLeadQuotationListFilter(!showLeadQuotationListFilter);
    };

    const handleOptionIconClick = () => {
        setShowOptionList(!showOptionList);
    };

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option);
        // Perform any action with the selected option, e.g., save to database filter
    };

    return (
        <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
            <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
                <SidebarQL/>
            </div>
            <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
                <div id='Header'>
                    <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
                </div>
                <div id="LeadInfoNavigation" className="flex space-x-[24px]">
                    <div className="grow">
                        <LeadInfoTab />
                    </div>
                    <LeadProgressStatus variant="DangTuVan" />
                </div>
                <div id='ContentInside' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[36px]">
                    <div id='Header' className='flex justify-between items-start h-[30px]'>
                        <div className='text-text-primary title-large'>Danh sách hoạt động</div>
                        {showSearchBar && <SearchBar previewText='Tìm kiếm hoạt động'/>} 
                        <div id='ActionIconSet' className='flex space-x-[16px]'>
                            <div className='cursor-pointer block'>
                                <Link to="/lead/dshoatdong/taohoatdong">
                                    <ActionIcon size='Small' icon={<AddPlus width="1.25rem" height="1.25rem"/>} />
                                </Link>
                            </div>
                            <ActionIcon size='Small' icon={<SearchMagnifyingGlass width="1.25rem" height="1.25rem"/>} onClick={handleSearchIconClick} />
                            <ActionIcon size='Small' icon={<Filter width="1.25rem" height="1.25rem"/>} onClick={handleFilterIconClick}/>
                            <ActionIcon size='Small' icon={<ArrowDownUp width="1.25rem" height="1.25rem"/>} onClick={handleOptionIconClick} />
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
                                        <th className="w-[368px] px-[16px] py-[24px]">Tên hoạt động</th>
                                        <th className="px-[16px] py-[24px] text-center">Loại hoạt động</th>
                                        <th className="px-[16px] py-[24px] text-center">Thời gian thực hiện</th>
                                        <th className="px-[16px] py-[24px] text-center">Người thực hiện</th>
                                    </tr>
                                </thead>
                                <tbody className='body-medium text-text-primary'>
                                    <tr className="border-t">
                                        <td className="px-[16px] py-[24px]">Yêu cầu báo giá khóa học IT Business Analyst và Product Owner Master Class</td>
                                        <td className="px-[16px] py-[24px] text-center">Yêu cầu</td>
                                        <td className="px-[16px] py-[24px] text-center">13:11 - 11/12/2023</td>
                                        <td className="px-[16px] py-[24px] text-center">Lead</td>
                                        <td>
                                            <div className='cursor-pointer block'>
                                                <Link to="/lead/dshoatdong/xemchitiethoatdong">
                                                    <ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem"/>} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id='Pagination' className='flex w-full justify-end'>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            {showLeadQuotationListFilter && 
                <div className="absolute top-[220px] right-[100px] z-50">
                    <LeadActivityListFilter/>
                </div>
            }
        </main>
    );
}

export default DSHoatDongLead_BangHoatDong;
