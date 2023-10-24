import {
    AppActionEnum, ApplicationsType,
    SetAppAction,
    SetAppErrorAction,
    SetAppLoadingAction
} from "@/store/reducers/appliaction/types.ts";
import {AppDispatch} from "@/store";
import {CreatePayloadType, deleteApp, getApps, saveApp} from "@/api/application/application.ts";
import {appCategoryOptions, AppFormType, cityOptions} from "@/components/app-form/constants.ts";
import { format } from 'date-fns';

export const AppActionCreator = {
    setApp: (apps: ApplicationsType): SetAppAction => ({type: AppActionEnum.SET_APP, payload: apps}),
    setAppLoading: (val: boolean): SetAppLoadingAction => ({type: AppActionEnum.SET_APP_LOADING, payload: val}),
    setAppError: (val: string): SetAppErrorAction => ({type: AppActionEnum.SET_APP_ERROR, payload: val}),

    fetchApp: (page: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreator.setAppLoading(true))
            const {data} = await getApps(page)
            dispatch(AppActionCreator.setApp(data))
        } catch (e: any) {
            dispatch(AppActionCreator.setAppError(e?.response?.data?.error))
        }finally {
            dispatch(AppActionCreator.setAppLoading(false))
        }
    },

    createApp: (payload: AppFormType) => async (dispatch: AppDispatch) => {
        const city = payload.city ? cityOptions.find(e => e.value === payload.city)?.text : ""
        const category = payload.category ? appCategoryOptions.find(e => e.value === payload.category)?.text : ""
        const newPayload: CreatePayloadType = {
            "fio": payload.name,
            "phoneNumber": payload.phone,
            "requestType": category || '',
            "date": payload.date  ? format(payload.date, 'yyyy.MM.dd') : '',
            "quantity": payload.guestCount,
            "city": city || '',
            "call": payload.isCall ? 'YES' : 'NO'
        }
        try {
            dispatch(AppActionCreator.setAppLoading(true))
            await saveApp(newPayload)
        } catch (e: any) {
            dispatch(AppActionCreator.setAppError(e?.response?.data?.error))
        }finally {
            dispatch(AppActionCreator.setAppLoading(false))
        }
    },
    deleteApp: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreator.setAppLoading(true))
            await deleteApp(id)
        } catch (e: any) {
            dispatch(AppActionCreator.setAppError(e?.response?.data?.error))
        }finally {
            dispatch(AppActionCreator.setAppLoading(false))
        }
    }
}
