import {ApexOptions} from "apexcharts";
import Chart from "@/components/ui/chart/Chart.tsx";

const Statistics = () => {
    const state: { options: ApexOptions, series: any } = {
        series: [{
            name: 'закрытые - 345',
            data: [44, 55, 57, 50]
        }, {
            name: 'новые - 420',
            data: [76, 85, 101, 45]
        }, {
            name: 'текущие - 280',
            data: [35, 41, 36, 60]
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
            colors: ['#D73C4A', '#0016BE', '#E7BE34'],
            legend: {
                show: true,
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                },
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['кв. I', 'кв. II', 'кв. III', 'кв. IV'],
            },
            fill: {
                opacity: 1
            },

        }
    }

    return (
        <Chart options={state.options} series={state.series} type='bar' height={271}/>
    );
};

export default Statistics;
