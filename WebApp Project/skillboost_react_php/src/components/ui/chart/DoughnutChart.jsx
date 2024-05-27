import React from 'react'
import 'chart.js/auto'
import Filter from "../../icons/Interface/Filter"
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const PieChart = () => {
    const options = {
        responsive:true,
        plugins:{
            legend:{
                position: "bottom",
            }
        }
    };
    const PieChartData = {
        labels: ["Sinh viên", "Giảng viên", "Phân tích dữ liệu", "Chuyên viên kinh doanh"],
        legend: {
            position: "top",
            align: "start"
        },
        datasets: [
            {
                
                data: [120, 60, 30, 90],
                backgroundColor: [
                    "rgb(92, 118, 255)",
                    "rgb(0, 255, 194)",
                    "rgb(231, 231, 231)",
                    "rgb(255, 53, 138)"
                ],
                hoverOffset:4,
            },
        ],
    };
    return (
        <main className="w-full h-full">
            <div className="text-primary flex flex-row items-center pb-3">
                <div className="font-bold">Tỉ lệ phần trăm các loại khách hàng theo nghề nghiệp</div>
                <div className="ml-auto cursor-pointer"><Filter/></div>
            </div>
            <Doughnut options={options} data={PieChartData}></Doughnut>
        </main>
    )
}

export default PieChart