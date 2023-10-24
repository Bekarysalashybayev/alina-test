
export interface ThOptions {
    rowspan?: number,
    colspan?: number,
    text: string,
    key: string
}

export interface TableOptions {
    filter?: FilterOptions,
    actions?: {
        editable?: boolean,
        delete?: boolean,
        actionKey?: string,
        onDelete?: (key: string) => void
        onEdit?: (key: string) => void
    }
    th?: ThOptions[][],
    td?: any[]
}
