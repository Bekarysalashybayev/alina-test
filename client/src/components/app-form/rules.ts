interface FType {
    obj: Object,
    hasError: boolean
}

export const checkRequiredFields = (obj: Object, keys: string[]): FType => {
    const payload: Record<typeof keys[number], string> = {}

    let hasError = false

    for (const [key, value] of Object.entries(obj)) {
        if (keys.includes(key)) {
            if (key === 'phone' && value.length !== 18) {
                payload[key] = key.toUpperCase() + ' format is error'
                continue;
            }
            if (!value) {
                payload[key] = key.toUpperCase() + ' is required'
                hasError = true
            } else {
                payload[key] = ""
            }
        }
    }

    return {
        obj: payload,
        hasError
    }
}

export const checkExistObject = (obj: Record<string, any>, initialForm: Record<string, any>):boolean => {
    for (const [key, value] of Object.entries(obj)) {
        if (value !== initialForm[key]) {
            return true
        }
    }
    return false
}
