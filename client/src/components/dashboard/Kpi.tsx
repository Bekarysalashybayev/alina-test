import {ApexOptions} from "apexcharts";
import Chart from "@/components/ui/chart/Chart.tsx";

const Kpi = () => {
    const state: { options: ApexOptions, series: any } = {
        series: [67],
        options: {
            chart: {
                type: 'radialBar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#233D82', '#E9F5FF'],
            legend: {
                show: true,
                position: 'bottom',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['прирост за день'],
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            offsetY: -5,
                            show: true,
                            color: '#233D82',
                            fontSize: '13px',
                        },
                        value: {
                            offsetY: 10,
                            fontSize: '18px',
                            color: '#02BC63',
                            formatter: function (val) {
                                return val + '%';
                            },
                        },
                        total: {
                            show: true,
                            label: '67%',
                            formatter: function () {
                                return '+2%';
                            },
                        },
                    },
                },
            },
        }
    }

    return (
        <Chart options={state.options} series={state.series} type='radialBar' height={271}/>
    );
};

export default Kpi;
