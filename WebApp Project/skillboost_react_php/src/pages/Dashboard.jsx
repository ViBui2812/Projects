import React, { useState } from "react";
import SidebarQL from "../components/ui/sidebar/SidebarQL";
import HeaderAdmin from "../components/ui/header_footer/admin/headerad/HeaderAdmin";
import DashboardOverviewCardUp from "../components/ui/card/DashboardOverviewCardUp";
import DashboardOverviewCardDown from "../components/ui/card/DashboardOverviewCardDown";
import DashboardOverviewCardNone from "../components/ui/card/DashboardOverviewCardNone";
import LineChart from "../components/ui/chart/LineChart";
import DoughnutChart from "../components/ui/chart/DoughnutChart";
import ColumnChart from "../components/ui/chart/ColumnChart";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main id="Dashboard" className='relative w-full bg-background-secondary flex'>
      <div id='SidebarQL' className="sticky top-0 z-10 h-screen max-sm:relative ">
        <SidebarQL />
      </div>
      <div id="ContentContainer" className="col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px] max-sm:px-0 max-sm:pl-5 max-sm:w-max">
        <div>
          <HeaderAdmin>Số liệu</HeaderAdmin>
        </div>




        {/* Hàng đầu */}
        <div className="flex w-full justify-center space-x-[24px] relative max-sm:overflow-x-scroll max-sm:w-[350px]">
          <div className=" flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardUp
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"9.901"}
            />
          </div>
          <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardDown
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"9.901"}
            />
          </div>
          <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardNone
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"5.861"}
            />
          </div>
        </div>

        {/* Hàng hai */}
        <div className="flex w-full justify-center space-x-[24px] max-sm:space-x-0 max-sm:grid max-sm:grid-cols-1 gap-5">
          <div className="flex w-2/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px]">
            <LineChart />
          </div>
          <div className="flex w-1/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px]">
            <DoughnutChart />
          </div>
        </div>

        {/* Hàng ba */}
        <div className="flex w-full justify-center space-x-[24px]">
          <div className="flex w-full h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px] max-sm:h-[450px]">
            <ColumnChart />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
