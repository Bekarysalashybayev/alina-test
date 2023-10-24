import {RadioValueType} from "@/components/ui/radio/types.ts";

export interface RadioOptionType {
    value: RadioValueType,
    text: string,
}

export interface RadioGroupProps {
    options: RadioOptionType[],
    selectedValue: RadioValueType,
    title: string,
    onChange: (value: RadioValueType) => void
}
