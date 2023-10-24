import './radio.scss';
import {FC} from "react";
import {RadioProps} from "@/components/ui/radio/types.ts";


const Radio: FC<RadioProps> = ({value, selectedValue, select, label}) => {

    const selectValue = () => {
        if (value === selectedValue) return
        select(value)
    }

    return (
        <div className={`radio ${value === selectedValue && 'selected'}`} onClick={selectValue}>
            <div className="circle">
                <div className="s"></div>
            </div>
            <div className="label">{label}</div>
        </div>
    );
};

export default Radio;
