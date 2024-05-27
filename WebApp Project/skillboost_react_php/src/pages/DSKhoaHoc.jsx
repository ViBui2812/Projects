import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import CourseTableStatus from '../components/ui/chips/CourseTableStatus'
import ActionIcon from '../components/ui/button/ActionIcon'
import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp'
import ChevronRight from '../components/icons/Arrow/ChevronRight'

const DSKhoaHoc = () => {

  //Lấy dữ liệu Khách hàng lên
  const [khoahocs, setkhoahocs] = useState([]);
  useEffect(() => {
      getKhoaHoc();
  }, []);

  function getKhoaHoc() {
      axios.get('http://localhost:80/SkillBoost-API/api/KhoaHoc/read_all.php').then(function(response) {
          console.log(response.data);
          setkhoahocs(response.data);
      });
  }

  //Set hiển thị trạng thái khóa học tương ứng với data
  function trangThaiKhoaHoc(status) {
    switch (status) {
      case 'Đang vận hành':
        return <CourseTableStatus variant='DangVanHanh'/>;
      case 'Đang chiêu sinh':
        return <CourseTableStatus variant='DangChieuSinh' />;
      case 'Vô hiệu hóa':
        return <CourseTableStatus variant='VoHieuHoa' />;
      default:
        return <CourseTableStatus variant='DangVanHanh' />;
    }
  }

  return (
    <main id = "DSKhoaHoc">
    <div className='w-full bg-background-secondary relative grid grid-cols-7 gap-4'>
      <div id='Sidebar' className='col-span-1'>
        <SidebarQL/>
      </div>
        
      <div id="ContentContainer" className='col-span-6 bg-background-secondary px-16 py-8 space-y-6' >
        <div id="Header">
          <HeaderAdmin>Khóa học</HeaderAdmin>
        </div>
          
        <div id="CourseList" className='w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6'>
          <div className='flex justify-between pb-9'>
            <div className="relative flex items-center title-large mr-6">Danh sách khóa học</div>
              <div className='gap-4'>
                <ActionIcon icon={<AddPlus width="1.5rem" height="1.5rem"/>}/>
                <ActionIcon icon={<SearchMagnifyingGlass width="1.5rem" height="1.5rem"/>}/>
                <ActionIcon icon={<Filter width="1.5rem" height="1.5rem"/>}/>
                <ActionIcon icon={<ArrowDownUp width="1.5rem" height="1.5rem"/>}/>
              </div>
            </div>

          <div className='flex-auto block pb-1'>
            <div id="Table" className='overflow-x-auto'>
              <table class="table-auto w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200 rounded-2xl">
                <thead class="align-bottom"> 
                <tr class="title-small text-text-secondary">
                      <th class="pb-3 pl-4 py-3 text-start min-w-[50px] ">ID</th>
                      <th class="pb-3 text-middle min-w-[150px] text-start px-4">Tên khóa học</th>
                      <th class="pb-3 text-middle min-w-[125px]">Giảng viên</th>
                      <th class="pb-3 text-middle min-w-[125px]">Ngày khai giảng</th>
                      <th class="pb-3 text-middle min-w-[125px]">Học phí</th>
                      <th class="pb-3 text-middle min-w-[150px]">Trạng thái</th>
                      <th class="pb-3 text-middle min-w-[25px]"> </th>
                    </tr>             
                </thead>
                <tbody>
                  {khoahocs.map((khoahoc, key) =>
                  <tr className="body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle" key={key}>
                    <td class="px-4 py-3 body-medium">{khoahoc.MaKhoaHoc}</td>
                    <td class="px-4 py-3 body-medium">{khoahoc.TenKhoaHoc}</td>
                    <td class="py-3 text-center">{khoahoc.GiangVien}</td>
                    <td class="py-3 text-center">{khoahoc.NgayKhaiGiang}</td>
                    <td class="py-3 text-center">{khoahoc.GiaTien}</td>
                    <td className='py-3 flex items-center justify-center'>
                      {trangThaiKhoaHoc(khoahoc.TrangThaiKhoaHoc)}
                    </td>
                    <td>
                    <div className='cursor-pointer block'>
                        <Link to={`/khoahocAdmin/ctkhoahoc/${khoahoc.MaKhoaHoc}`}>
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
    </main>
  )
}
export default DSKhoaHoc