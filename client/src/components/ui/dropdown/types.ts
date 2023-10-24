export interface DropdownOptionsType {
    value: string,
    text: string,
}

export interface DropdownProps {
    options: DropdownOptionsType[],
    selectedValue: string,
    select: (val: string) => void,
    label: string,
    block?: boolean,
    placeHolder?: string,
    isError?: boolean
}
