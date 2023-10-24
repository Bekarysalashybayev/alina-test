import {ApexOptions} from "apexcharts";
import ReactApexChart from 'react-apexcharts'
import {FC} from "react";

type ChartTypes =
    "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined

interface StateOption {
    options: ApexOptions,
    series: any,
    type: ChartTypes,
    height: number | string
}


const Chart: FC<StateOption> = ({options, series, type, height}) => {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type={type}
            height={height}
        />
    );
};

export default Chart;
