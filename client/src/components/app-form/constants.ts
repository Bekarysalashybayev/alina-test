import {RadioOptionType} from "@/components/ui/radio-group/types.ts";
import {CheckboxOptionType} from "@/components/ui/checkbox-group/types.ts";
import {DropdownOptionsType} from "@/components/ui/dropdown/types.ts";
import {RadioValueType} from "@/components/ui/radio/types.ts";

export const callOptions: RadioOptionType[] = [
    {
        value: true,
        text: 'Да'
    },
    {
        value: false,
        text: 'Нет'
    }
]


export const addedOptions: CheckboxOptionType[] = [
    {
        value: 'mail',
        text: 'Письма на почту'
    },
    {
        value: 'sms',
        text: 'СМС на телефон'
    }
]

export const cityOptions: DropdownOptionsType[] = [
    {
        value: '1',
        text: 'Алматы'
    },
    {
        value: '2',
        text: 'Астана'
    },
    {
        value: '3',
        text: 'Актау'
    },
    {
        value: '4',
        text: 'Актобе'
    },
    {
        value: '5',
        text: 'Атырау'
    },
    {
        value: '6',
        text: 'Караганда'
    },
    {
        value: '7',
        text: 'Кокшетау'
    },
    {
        value: '8',
        text: 'Костанай'
    },
    {
        value: '9',
        text: 'Кызылорда'
    }
]

export const appCategoryOptions: DropdownOptionsType[] = [
    {
        value: '1',
        text: 'Классический'
    },
]


export interface AppFormType {
    name: string,
    summ: number,
    phone: string,
    guestCount: number,
    isCall: RadioValueType,
    addedInfo: string[],
    city: string,
    category: string,
    date: Date | undefined
}


export const initialForm: AppFormType = {
    name: '',
    summ: 0,
    phone: '',
    guestCount: 0,
    isCall: false,
    addedInfo: [],
    city: '',
    category: '',
    date: new Date()
}

export const requiredTypes = ["name", "category",  "phone"]

export type ErrorType = Record<typeof requiredTypes[number], string>

export const initialError: ErrorType = {
    name: '',
    phone: '',
    category: '',
}
