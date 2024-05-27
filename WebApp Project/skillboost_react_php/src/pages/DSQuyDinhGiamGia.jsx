import axios from "axios"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import Pagination from '../components/ui/pagination/Pagination';
import ActionIcon from '../components/ui/button/ActionIcon'
import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import SvgHamburgerMd from '../components/icons/Menu/HamburgerMd';
import ChevronRight from '../components/icons/Arrow/ChevronRight'
import DiscountListFilter from '../components/ui/SelectItems/DiscountListFilter';
import SearchBar from '../components/ui/placeholder/SearchBar';

const DSQuyDinhGiamGia = () => {
  const [qdgiamgias, setQdggs] = useState([]);
    useEffect(() => {
        getQdggs();
    }, []);

    function getQdggs() {
        axios.get('http://localhost:80/SkillBoost-API/api/QuyDinhGiamGia/read_all.php').then(function(response) {
            console.log(response.data);
            setQdggs(response.data);
        });
    }
  
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showDiscountListFilter, setDiscountListFilter] = useState(false);
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSearchIconClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleDiscountListFilterClick = () => {
    setDiscountListFilter(!showDiscountListFilter);
  };  

  const handleOptionIconClick = () => {
    setShowOptionList(!showOptionList);
  };

  const handleSortOptionSelect = (option) => {
    setSelectedSortOption(option);
  };

  return (
<main id = "DSQuyDinhGiamGia">
<div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div className='col-span-1 max-sm:hidden'>
      <SidebarQL/>
    </div>
    <div id ="ContentContainer" className='flex flex-col h-screen sm:col-span-6 max-sm:col-span-7 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
      <div className="max-sm:hidden">
        <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
      </div>
      <div className="sm:hidden max-sm:headline-medium max-sm:flex max-sm:justify-between max-sm:pr-28 ">
        <ActionIcon size='Medium' icon={<SvgHamburgerMd width="1.5rem" height="1.5rem"/>} />
        <div className="max-sm:font-bold max-sm:text-center max-sm:pt-1 max-sm:title-medium max-sm:text-text-primary">Quy định giảm giá</div>
      </div>
      <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 max-sm:pr-4 max-sm:pl-4 gap-[24px] '>
          <div className='pb-5 flex justify-between'>
            <div className="relative flex items-center title-large max-sm:w-[180px]">Danh sách quy định giảm giá</div>
            <div className="max-sm:hidden">{showSearchBar && <SearchBar previewText='Tìm kiếm hoạt động'/>}    </div>
            <div className='flex space-x-[4px]'>
              <div className='cursor-pointer block'>
                  <Link to="/dsqdgg/taodsqdgg">
                    <ActionIcon icon={<AddPlus width="1.5rem" height="1.5rem"/>}/>
                  </Link>
              </div>                 
              <ActionIcon icon={<SearchMagnifyingGlass width="1.5rem" height="1.5rem"/>} onClick={handleSearchIconClick}/>
              <ActionIcon icon={<Filter width="1.5rem" height="1.5rem"/>} onClick={handleDiscountListFilterClick}/>
              <ActionIcon icon={<ArrowDownUp width="1.5rem" height="1.5rem"/>} onClick={handleOptionIconClick}/>
            </div>
            {showOptionList && (
                <div className="absolute top-[70px] right-[16px] z-50 bg-background-primary shadow-md rounded-md p-[12px]">
                    <ul>
                        <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 1')}>Từ A-Z</li>
                        <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 2')}>Từ Z-A</li>
                        <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 3')}>Mới nhất</li>
                        <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 4')}>Cũ nhất</li>
                    </ul>
                </div>
            )}
          </div>
          <div className='sm:hidden pb-5'>            
            {showSearchBar && <SearchBar previewText='Tìm kiếm hoạt động'/>}                     
          </div>
          <div className='flex-auto block pb-1'>
        <div className="flex w-full rounded-lg border border-outline-table">
          <table className="table-auto w-full">
            <thead> 
            <tr class="title-small text-text-secondary text-center">
                  <th class="pb-3 px-5 max-sm:pl-5 py-3 text-left min-w-[100px] ">ID</th>
                  <th class="pb-3 px-3 py-3 text-left min-w-[250px] ">Mô tả</th>
                  <th class="pb-3 px-3 py-3 text-middle min-w-[150px]">Phần trăm giảm giá mặc định (%)</th>
                  <th class="pb-3 px-3 py-3 text-middle min-w-[150px] ">Phần trăm giảm giá tối đa (%)</th>
                  <th class="pb-3 px-3 py-3 text-middle min-w-[150px] ">Thời gian tạo</th>
                  <th class="pb-3 px-3 py-3 text-middle min-w-[150px] ">Tạo bởi</th>
                  <th class="pb-3 px-3 py-3 text-middle min-w-[50px] "> </th>
                </tr>             
            </thead>
            <tbody>
              {qdgiamgias.map((DSQDGG, key) => 
              <tr key ={key} className="body-medium text-text-primary border-t border-solid last:border-b-0 text-middle">
                <td class="text-left sm:pl-5 max-sm:pl-5 py-3 body-large">{DSQDGG.MaQuyDinhGiamGia}</td>
                <td class=" px-3 py-3 body-large text-left">{DSQDGG.MoTaLoaiGiamGia}</td>
                <td class=" px-3 py-3 body-large text-center">{DSQDGG.PhanTramGiamGiaMacDinh}</td>
                <td class=" px-3 py-3 body-large text-center">{DSQDGG.PhanTramGiamGiaToiDa}</td>
                <td class=" px-3 py-3 body-large text-center">{DSQDGG.TaoVaoLuc}</td>
                <td class=" px-3 py-3 body-large text-center">{DSQDGG.HoTenNV}</td>
                <td class="items-center text-center">
                <div className='cursor-pointer block'>
                    <Link to={`/dsqdgg/xemchitietdsqdgg/${DSQDGG.MaQuyDinhGiamGia}`}>
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
      </div>
      
    </div>
</div>
    {showDiscountListFilter && 
      <div className="absolute top-[170px] max-sm:right-[30px] max-sm:left-[30px] sm:right-[60px] z-50">
          <DiscountListFilter/>
      </div>
    }
</main>
  )
}
export default DSQuyDinhGiamGia