import './checkbox-group.scss';
import {FC} from "react";
import {CheckboxGroupProps} from "@/components/ui/checkbox-group/types.ts";
import Checkbox from "@/components/ui/checkbox/Checkbox.tsx";


const CheckboxGroup: FC<CheckboxGroupProps> = ({options, selectedValue, onChange, title}) => {
    return (
        <div className="checkbox-group">
            <div className="title">{title}</div>

            <div className="checkbox-group__list">
                {options.map((o, i) =>
                    <Checkbox key={i} label={o.text} value={o.value} selectedValue={selectedValue} select={onChange}/>
                )}
            </div>

        </div>
    );
};

export default CheckboxGroup;
