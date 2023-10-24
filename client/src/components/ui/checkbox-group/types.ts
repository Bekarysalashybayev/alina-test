export interface CheckboxOptionType {
    value: string,
    text: string,
}

export interface CheckboxGroupProps {
    options: CheckboxOptionType[],
    selectedValue: string[],
    title: string,
    onChange: (value: string[]) => void
}
