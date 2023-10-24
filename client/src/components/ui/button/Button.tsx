import './button.scss'
import {FC} from "react";
import {BtnProps} from "@/components/ui/button/types.ts";

const Button: FC<BtnProps> = (props) => {
    const {
        children,
        btn_type = 'primary',
        outline = false,
        disabled = false,
        btn_size = 'medium',
        onClick = () => {},
        ...rest
    } = props

    const clickHandler = () => {
        if (disabled) return;
        onClick()
    }

    return (
        <button
            className={`custom-button rounded ${btn_type} ${btn_size} ${outline && 'outline'}`}
            disabled={disabled}
            onClick={clickHandler}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
