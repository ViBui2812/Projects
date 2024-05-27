import React from 'react'
import 'chart.js/auto'
import Filter from "../../icons/Interface/Filter"
import { Bar } from 'react-chartjs-2'
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

const BarChart = () => {
    const options = {
        resposive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
        scales:{
            x:{
                ticks:{
                    align:"center"
                }
            }
        }

    };
    const BarChartData = {
        labels: [
            "IT Business Analyst",
            "Python Advance Coding Class",
            "SQL Advanced Class",
            "Data Analyst",
            "Business Intelligence",
            "Excel Advanced Class",
            "Database Foundation",
            "Desktop Coding Class",
            "Product Owner Master Class",
        ],
        datasets: [
            {
                label: "Số lượng bán ra",
                data: [512, 464, 410, 378, 353, 341, 305, 234, 157],
                backgroundColor: "rgb(92, 118, 255)",
                borderColor: "rgb(92, 118, 255)",
                borderRadius: 10,
                hoverBackgroundColor: "rgb(255,255,255)",
                hoverBorderDashOffset: 3,
            },
        ],
    };
    return (
        <main className="w-full h-full ">
            <div className="text-primary flex flex-row items-center pb-5">
                <div className="font-bold">Top khóa học được mua nhiều nhất</div>
                <div className="ml-auto cursor-pointer"><Filter /></div>
            </div>
            <Bar options={options} data={BarChartData}></Bar>
        </main>
    )
}

export default BarChart