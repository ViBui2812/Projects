import MiniChartYellow from "../../../assets/logo/MiniChartYellow.svg"
const DashboardOverviewCardUp = ({ namecard, percentchange, total }) => {
    return (
        <div className="p-6 w-max rounded-lg bg-background-primary border-2 items-center jusitfy-between flex-col">
            <div className="flex flex-row items-center ">
                <div className="opacity-70">{namecard}</div>
                <div className="flex items-center pl-5 ml-atuo">
                    <div className="text-secondary">{percentchange}</div>
                </div>
            </div>
            <div className="flex flex-row items-center pt-2">
                <div className="pt-2 label-large text-2xl flex">{total}</div>
                <div className="ml-auto opacity-80">
                    <img
                        src={MiniChartYellow}
                        alt="MiniChartYellow" />
                </div>
            </div>
        </div>
    )
}

export default DashboardOverviewCardUp