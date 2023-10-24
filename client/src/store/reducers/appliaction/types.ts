import {IApplication} from "@/models/IApplication.ts";

export interface ApplicationsType {
    totalPages: number,
    list: IApplication[]
}

export interface AppState {
    isLoading: boolean,
    error: string,
    applications: ApplicationsType
}

export enum AppActionEnum {
    SET_APP = 'SET_APP',
    SET_APP_ERROR = 'SET_APP_ERROR',
    SET_APP_LOADING = 'SET_APP_LOADING',
}


export interface SetAppAction {
    type: AppActionEnum.SET_APP,
    payload: ApplicationsType
}

export interface SetAppLoadingAction {
    type: AppActionEnum.SET_APP_LOADING,
    payload: boolean
}


export interface SetAppErrorAction {
    type: AppActionEnum.SET_APP_ERROR,
    payload: string
}

export type AppAction =
    SetAppAction |
    SetAppLoadingAction |
    SetAppErrorAction
