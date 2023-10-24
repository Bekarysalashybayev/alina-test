import './radio-group.scss';
import Radio from "@/components/ui/radio/Radio.tsx";
import {FC} from "react";
import {RadioGroupProps} from "@/components/ui/radio-group/types.ts";


const RadioGroup: FC<RadioGroupProps> = ({options, selectedValue, onChange, title}) => {
    return (
        <div className="radio-group">
            <div className="title">{title}</div>

            <div className="radio-group__list">
                {options.map((o, i) =>
                    <Radio key={i} label={o.text} value={o.value} selectedValue={selectedValue} select={onChange}/>
                )}
            </div>

        </div>
    );
};

export default RadioGroup;
