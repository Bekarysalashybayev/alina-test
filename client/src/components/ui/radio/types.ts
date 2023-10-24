export type RadioValueType = string | boolean
export interface RadioProps {
    label: string,
    value: RadioValueType,
    selectedValue: RadioValueType,
    select: (val: RadioValueType) => void
}
