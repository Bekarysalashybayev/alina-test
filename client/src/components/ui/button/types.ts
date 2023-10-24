import {ButtonHTMLAttributes, ReactNode} from "react";

export type BtnTypes = 'primary' | 'primary-light'
export type BtnSize = 'large' | 'small'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btn_type?: BtnTypes,
    btn_size?: BtnSize,
    outline?: boolean,
    disabled?: boolean,
    onClick?: () => void;
    children?: ReactNode
}
