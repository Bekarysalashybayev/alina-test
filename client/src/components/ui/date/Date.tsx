import 'react-day-picker/dist/style.css';
import './date.scss'
import { DayPicker, } from 'react-day-picker';
import { ru } from 'date-fns/locale';
import {FC} from "react";

interface DateProps {
    label: string,
    selected: Date | undefined,
    setSelected: (val: Date | undefined) => void
}
const Date:FC<DateProps> = ({label, selected, setSelected}) => {

    return (
        <div className="date">
            <div className="title">{label}</div>
            <DayPicker
                locale={ru}
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
        </div>
    );
};

export default Date;
