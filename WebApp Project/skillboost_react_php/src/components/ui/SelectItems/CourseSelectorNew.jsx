import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from '../button/Button';

const CourseSelectorNew = ({ onSubmit, onClick, onCancel }) => {
    const [khoaHocs, setKhoaHocs] = useState([]);
    const [selectedRows, setSelectedRows] = useState({});

    useEffect(() => {
        getKhoaHocs();
    }, []);

    function getKhoaHocs() {
        axios.get('http://localhost:80/SkillBoost-API/api/KhoaHoc/read_all.php')
            .then(response => {
                const initialSelectedRows = response.data.reduce((acc, khoaHoc) => {
                    acc[khoaHoc.id] = false;
                    return acc;
                }, {});
                setKhoaHocs(response.data);
                setSelectedRows(initialSelectedRows);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const [checked, setChecked] = useState([]);
  
    const handleCheck = (id) => {
      setChecked(prev => {
        const isChecked = checked.includes(id);
        if(isChecked){
          return checked.filter(item => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }

    // const handleSubmit = () => {
    //     console.log({selectedIds: checked});
    //   }

    const handleSubmit = () => {
        // Initialize an array to store selected khoa hocs
        const KhoaHocDuocChon = [];
      
        // Loop over the selected rows
        checked.forEach(id => {
            // Find the corresponding KhoaHoc object
            const selectedKhoaHoc = khoaHocs.find(khoaHoc => khoaHoc.MaKhoaHoc === id);
            
            // Extract relevant columns and add them to the array
            if (selectedKhoaHoc) {
                const { MaKhoaHoc, TenKhoaHoc, GiangVien, NgayKhaiGiang, GiaTien } = selectedKhoaHoc;
                KhoaHocDuocChon.push({ MaKhoaHoc, TenKhoaHoc, GiangVien, NgayKhaiGiang, GiaTien });
            }
        });
    
        // Call the onSubmit callback with the selected khoa hocs array
        onSubmit(KhoaHocDuocChon);
        // Log the array of selected khoa hocs
        //console.log("Khóa học được chọn:", KhoaHocDuocChon);
    };
    


    return (
        <main className='flex flex-col space-y-[24px] bg-background-primary border border-solid border-[#5200FF] p-[36px] rounded-xl'>
            <div className='flex w-full title-large'>Thêm khóa học</div>
            <div className='flex w-full title-large'>
                <div id='Table' className="flex w-full rounded-lg border border-outline-table">
                    <div className="overflow-y-auto max-h-[320px]">
                        <table className="table-auto w-full">
                            <thead className='title-small text-text-secondary text-left'>
                                <tr>
                                    <th className="px-[16px] py-[24px]"></th>
                                    <th className="px-[16px] py-[24px]">ID khóa học</th>
                                    <th className="px-[16px] py-[24px]">Tên khóa học</th>
                                    <th className="px-[16px] py-[24px] text-center">Giảng viên</th>
                                    <th className="px-[16px] py-[24px] text-center">Ngày khai giảng</th>
                                    <th className="px-[16px] py-[24px] text-center">Học phí</th>
                                </tr>
                            </thead>
                            <tbody className='body-medium text-text-primary'>
                                {khoaHocs.map((khoaHoc, key) => (
                                    <tr className="border-t" key={key}>
                                        <td className="px-[16px] py-[24px]">
                                            <input
                                                type="checkbox"
                                                checked={checked.includes(khoaHoc.MaKhoaHoc)}
                                                onChange={() => handleCheck(khoaHoc.MaKhoaHoc)}
                                            />
                                        </td>
                                        <td className="px-[16px] py-[24px]">{khoaHoc.MaKhoaHoc}</td>
                                        <td className="px-[16px] py-[24px]">{khoaHoc.TenKhoaHoc}</td>
                                        <td className="px-[16px] py-[24px] text-center">{khoaHoc.GiangVien}</td>
                                        <td className="px-[16px] py-[24px] text-center">{khoaHoc.NgayKhaiGiang}</td>
                                        <td className="flex px-[16px] py-[24px] justify-center">{khoaHoc.GiaTien}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex w-full title-large justify-end'>
                <Button size='Medium' variant='Plain'>Thoát</Button>
                <Button size='Medium' onClick={handleSubmit}>Chọn</Button>
            </div>
        </main>
    );
};

export default CourseSelectorNew;
