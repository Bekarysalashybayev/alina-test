import './checkbox.scss';
import {FC} from "react";
import {CheckboxProps} from "@/components/ui/checkbox/types.ts";


const Checkbox: FC<CheckboxProps> = ({value, selectedValue, select, label}) => {

    const selectValue = () => {

        if (selectedValue.includes(value)) {
            select(selectedValue.filter(e => e !== value))
            return;
        }
        select([...selectedValue, value])
    }

    return (
        <div className={`checkbox ${selectedValue.includes(value) && 'selected'}`} onClick={selectValue}>
            <div className="circle">
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5L2.99593 6.59317C3.5 7 4.5 7.5 5.58355 6.59317L10 1" stroke="black"/>
                </svg>
            </div>
            <div className="label">{label}</div>
        </div>
    );
};

export default Checkbox;
