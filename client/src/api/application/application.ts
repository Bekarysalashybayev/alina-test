import httpInstance from "@/http/http.ts";
import {IApplication} from "@/models/IApplication.ts";

export type CreatePayloadType = Omit<IApplication, 'id'>
export const getApps = (page: number) => httpInstance.get(`/apps?page=${page}`)
export const saveApp = (payload: CreatePayloadType) => httpInstance.post('/app', payload)
export const deleteApp = (id: number) => httpInstance.delete(`/app/${id}`)
