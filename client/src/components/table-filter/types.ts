interface FilterOptions {
    search?: {
        value?: string,
        onChange?: (val: string) => void,
        onClick?: () => void,
        placeholder?: string,
    }
}
