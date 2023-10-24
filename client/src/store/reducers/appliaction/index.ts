import {AppAction, AppActionEnum, AppState} from "@/store/reducers/appliaction/types.ts";

const initialState: AppState = {
    isLoading: false,
    error: '',
    applications: {
        totalPages: 0,
        list: []
    }
}

export default function applicationReducer(state = initialState, action: AppAction): AppState {
    switch (action.type) {
        case AppActionEnum.SET_APP:
            return {...state, applications: action.payload}
        case AppActionEnum.SET_APP_ERROR:
            return {...state, error: action.payload}
        case AppActionEnum.SET_APP_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
