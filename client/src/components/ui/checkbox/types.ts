export interface CheckboxProps {
    label: string,
    value: string,
    selectedValue: string[],
    select: (val: string[]) => void
}
