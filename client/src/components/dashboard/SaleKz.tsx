import {ApexOptions} from "apexcharts";
import Chart from "@/components/ui/chart/Chart.tsx";

const SaleKz = () => {

    const state: { options: ApexOptions, series: any } = {
        series: [{
            data: [
                6000000,
                13000000,
                10000000,
                7000000,
                16000000,
                8000000,
                13000000,
                15000000,
            ]
        }],
        options: {
            chart: {
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#233D82'],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            xaxis: {
                categories: [
                    'Шымкент', 'Кызылорда', 'Актау', 'Актобе', 'Атырау', 'Караганда', 'Астана', 'Алматы',
                ],
                labels: {
                    formatter: function(val) {
                        return val.toString() === '0' ? '0' : parseInt(val.toString()) / 1000000 + ' млн';
                    },
                },
            },
        }
    }

    return (
            <Chart options={state.options} series={state.series} type='bar' height={271} />
    );
};

export default SaleKz;
