import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hello = () => {
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

    return(
        <div>
            <h3>Danh sách khách hàng</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID khách hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Thời gian cập nhật gần nhất</th>
                        <th>Nghề nghiệp</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, key) =>
                        <tr key={key}>
                            <td>{customer.MaKH}</td>
                            <td>{customer.HoTenKH}</td>
                            <td>{customer.ChinhSuaLanCuoiVaoLuc}</td>
                            <td>{customer.TenNgheNghiep}</td>
                            <td>{customer.EmailKH}</td>
                            {/* <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td> */}
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Hello