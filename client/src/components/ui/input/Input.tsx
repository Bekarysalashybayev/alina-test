import './input.scss'
import React, {FC} from "react";
import {useMask} from "@react-input/mask";
import NumberArrow from "@/components/ui/input/number-arrow/NumberArrow.tsx";

interface InputProps {
    value: string,
    onValueChange: (value: string) => void;
    label?: string;
    error?: string;
    required?: boolean;
    mask?: string;
    replacement?: RegExp;
    type?: "text" | "number",
    arrow?: boolean,
    prefix?: string,
    minValue?: number
}

const Input: FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

    const {
        label,
        required = false,
        error,
        value,
        onValueChange,
        prefix,
        mask,
        replacement = /\d/,
        type = "text",
        arrow = false,
        minValue = 0,
        ...rest
    } = props

    const inputMaskRef = mask ? useMask({mask, replacement: {_: replacement}}) : null;

    const decrementValue = () => {
        if (minValue !== 0) {
            onValueChange(String(parseInt(value) - 1))
            return;
        }
        if (parseInt(value) > minValue) {
            onValueChange(String(parseInt(value) - 1))
        }
    }

    return (
        <div className={`input-wrapper ${error && 'error-row'}`}>
            {label && <label>{label}{required && <span>*</span>}</label>}
            <div className='input-wrapper__row'>
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    ref={inputMaskRef}
                    {...rest}
                />
                {type === 'number' && arrow &&
                    <NumberArrow
                        increment={() => onValueChange(String(parseInt(value) + 1))}
                        decrement={decrementValue}
                    />
                }
                {prefix}
            </div>
            {required && error && <div className="error">{error}</div>}
        </div>
    );
};


export default Input;
