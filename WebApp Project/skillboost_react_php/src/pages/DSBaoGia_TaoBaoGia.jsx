import axios from "axios";
import { useEffect, useState} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import CourseSelectorNew from '../components/ui/SelectItems/CourseSelectorNew'
import DiscountListFilter from '../components/ui/SelectItems/DiscountListFilter';

import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSBaoGia_TaoBaoGia = () => {
  const [showPromotionInputs, setShowPromotionInputs] = useState(false);
  const [showEmailInputs, setShowEmailInputs] = useState(false);
  
  const [selectedDoiTuongUuTien, setSelectedDoiTuongUuTien] = useState(null);
  const [selectedDipDacBiet, setSelectedDipDacBiet] = useState(null);

  const handleAddPromotionClick = () => {
    setShowPromotionInputs(!showPromotionInputs);
  };

  const handleEmailClick = () => {
    setShowEmailInputs(!showEmailInputs);
  };

  //Hiển thị data khóa học
  //const [baoGiaKhoaHocs, setBaoGiaKhoaHocs] = useState([]);
  //Tạo mảng chứa khóa học đc chọn
  const [selectedCourses, setSelectedCourses] = useState([]);

    const { leadid } = useParams();

    useEffect(() => {
        getBaoGiaKhoaHoc();
    }, []);

    function getBaoGiaKhoaHoc() {
        axios.get(`http://localhost:80/SkillBoost-API/api/KhoaHoc/read_khoahoc_in_yctv.php?MaLead=${leadid}`).then(function (response) {
            console.log(response.data);
            setSelectedCourses(response.data);
        });
    }

    //Tính tổng tiền
    const calculateTotalCost = () => {
      let totalCost = 0;
      selectedCourses.forEach((khoaHoc) => {
        totalCost += parseFloat(khoaHoc.GiaTien);
      });
      return totalCost;
    };

    //Hiển thị thêm khóa học
    const [showCourseSelector, setShowCourseSelector] = useState(false);

    const handleCourseSelectorClick = () => {
      setShowCourseSelector(!showCourseSelector);
    };
  
  
    const handleCourseSelection = (selectedCourses) => {
      console.log("Khóa học được chọn:", selectedCourses); // Check if this logs the selected courses array
      setSelectedCourses(selectedCourses);
    };


  return (
    <main id='DSBaoGia' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen  max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
        </div>
        <div id='LeadInfoNavigation' className='flex space-x-[24px]'>
          <div className='grow'><LeadInfoTab/></div>
          <LeadProgressStatus variant='DangTuVan' />
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
          <div id='Header' className='flex items-center space-x-[16px]'>
            <div className='cursor-pointer block'>
                <Link to={`/lead/dsbaogia/${leadid}`}>
                  <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                </Link>
            </div>
            <div className='text-text-primary title-large'>Tạo báo giá</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div>
              <TextInput title='Tên báo giá' previewText='Nhập tên báo giá'></TextInput>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học</div>
              <div id='Table' className="overflow-x-auto rounded-lg border border-outline-table">
                <table className="table-auto w-full">
                  <thead className='title-small text-text-secondary text-left'>
                    <tr>
                      <th className="w-[649px] px-[16px] py-[24px]">Tên khóa học</th>
                      <th className="w-[649px] px-[16px] py-[24px]">Giảng viên</th>
                      <th className="w-[214px] px-[16px] py-[24px]">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody className='body-medium text-text-primary'>
                  {selectedCourses.map((khoaHoc, key) =>
                    <tr className="hover:bg-background-secondary border-b border-t" key={key}>
                      <td className="px-[16px] py-[24px]">{khoaHoc.TenKhoaHoc}</td>
                      <td className="px-[16px] py-[24px]">{khoaHoc.GiangVien}</td>
                      <td className="w-[214px] px-[16px] py-[24px]">{khoaHoc.GiaTien}</td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="2" className="px-[16px] py-[24px]">Tổng tiền</td>
                    <td className="px-[16px] py-[24px] text-brand-default title-medium font-bold">{calculateTotalCost()}</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="px-[16px] py-[16px] border-t">
                      <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>
                        Thêm khóa học
                      </Button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {showPromotionInputs ? (
              <>
                <div className='title-medium text-text-primary'>Khuyến mãi</div>
                <div className='flex overflow-x-auto w-full space-x-[16px] '>
                  <TextInput title="Số khóa học mua chung" previewText="Nhập số khóa học" />
                  <DropDown
                    title="Đối tượng ưu tiên"
                    previewText="Chọn đối tượng ưu tiên"
                    options={["Học sinh - Sinh Viên", "Giảng viên đại học", "Không có"]}
                    selectedOption={selectedDoiTuongUuTien}
                    setSelectedOption={setSelectedDoiTuongUuTien}
                  />
                  <DropDown
                    title="Dịp đặc biệt"
                    previewText="Chọn dịp đặc biệt"
                    options={["Ngày lễ", "Không có"]}
                    selectedOption={selectedDipDacBiet}
                    setSelectedOption={setSelectedDipDacBiet}
                  />
                </div>
                <div className='flex w-1/3 pr-[16px]'>
                  <TextInput title="Phần trăm giảm giá (%)" previewText="Nhập phần trăm giảm giá" />
                </div>
                <div className='flex'>
                  <Button variant='Neutral' size='Medium' onClick={handleAddPromotionClick}>Ẩn khuyến mãi</Button>
                </div>
              </>
            ) : (
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Khuyến mãi</div>
                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5} />} onClick={handleAddPromotionClick}>Thêm khuyến mãi</Button>
              </div>
            )}
            {showEmailInputs ? (
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Email báo giá</div>
                <TextArea
                  previewText="Email báo giá"
                />
                <Button variant='Neutral' size='Medium' onClick={handleEmailClick}>Ẩn email</Button>
              </div>
            ) : (
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Email báo giá</div>
                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleEmailClick}>Tạo email</Button>
              </div>
            )}
            <div className='flex w-full space-x-[12px] items-center justify-end'>
              <div className='cursor-pointer block'>
                  <Link to="/lead/dsbaogia">
                    <Button variant='Destructive-plain' size='Medium'>Hủy chỉnh sửa</Button>
                  </Link>
              </div>
              <Button variant='Primary' size='Medium'>Lưu thay đổi</Button>
            </div>
          </div>
        </div>
      </div>
      {showCourseSelector && (
        <div className="absolute top-[170px] left-[520px] z-50">
          <CourseSelectorNew
            onSubmit={handleCourseSelection}
            onCancel={setShowCourseSelector}
          />
        </div>
        )}
    </main>
  );
};

export default DSBaoGia_TaoBaoGia;
