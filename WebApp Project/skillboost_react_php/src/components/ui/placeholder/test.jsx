import axios from "axios";
import { useEffect, useState } from "react";
import DropDown from '../conponents/DropDown';

export default function DroplistKhoaHoc() {
    const [courses, setCourses] = useState([]);
    const [selectCourseOption, setSelectCourseOption] = useState(null);

    useEffect(() => {
        getCourses();
    }, []);

    function getCourses() {
        axios.get('http://localhost:80/SkillBoost-API/api/KhoaHoc/read_all.php')
            .then(function(response) {
                setCourses(response.data);
            })
            .catch(function(error) {
                console.error('Error fetching courses:', error);
            });
    }

    function handleCourseChange(course) {
        setSelectCourseOption(course);
    }

    console.log(selectCourseOption?.value || undefined);

    return (
        <main>
            <div>
                <h3>Danh sách Khóa học</h3>
                <div>
                    <DropDown
                        id="courses"
                        title='Chọn khóa học:'
                        options={courses.map((course) => ({
                            label: course.TenKhoaHoc,
                            value: course.MaKhoaHoc,
                        }))}
                        onHandleChange={handleCourseChange}
                        previewText="-- Chọn khóa học --"
                    />
                </div>
                {selectCourseOption && (
                    <div>
                        <h4>Thông tin khóa học đã chọn:</h4>
                        <p>ID khóa học: {selectCourseOption?.label || ''}</p>
                        {/* You can display more information about the selected course here */}
                    </div>
                )}
            </div>
        </main>
    );
}