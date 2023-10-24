import './chart-container.scss';
import {FC, ReactNode} from "react";
import ChartFilter from '@/assets/img/ChartFilter.svg'
interface ChartProps {
    title: string,
    filter: string,
    children?: ReactNode
}

const CharContainer: FC<ChartProps> = ({title, filter, children}) => {
    return (
        <div className="chart-container">
            <div className="chart-container__head">
                <div className="title">{title}</div>
                <div className="filter">
                    {filter}
                    <img src={ChartFilter} alt="ChartFilter"/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default CharContainer;
