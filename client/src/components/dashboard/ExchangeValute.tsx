
import {getDatesForCurrentMonth} from "@/utils/getDaysCurrentMonth.ts";
import {generateRandomNumbersArray} from "@/utils/getRandomArray.ts";
import Chart from "@/components/ui/chart/Chart.tsx";
import {ApexOptions} from "apexcharts";

const ExchangeValute = () => {
    const days = getDatesForCurrentMonth()
    const state: { options: ApexOptions, series: any } = {
        series: [{
            name: 'покупка',
            data: generateRandomNumbersArray(days.length, 450, 490)
        }, {
            name: 'продажа',
            data: generateRandomNumbersArray(days.length, 435, 480)
        }],
        options: {
            chart: {
                type: 'area',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#D7EDFF', '#A5B7E9'],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: days,
            },
        }
    }

    return (
        <div style={{height: 271, minWidth: 700, width: '100%',}}>
           <Chart options={state.options} series={state.series} height={271} type='area'/>
        </div>
    );
};

export default ExchangeValute;
