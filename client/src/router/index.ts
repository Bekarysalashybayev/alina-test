import * as React from "react";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import Application from "@/pages/Application.tsx";
import NewApplication from "@/pages/NewApplication.tsx";
import {BarIconType} from "@/components/side-bar/icons/types.ts";

export interface IRoute {
    path: string,
    component: React.ComponentType,
    name: string,
    description?: string,
    icon: BarIconType
}

export enum RouteNames {
    DASHBOARD = '/',
    APPLICATION = '/applications',
    NEW_APPLICATION = '/application',
    APPROVED_APPLICATION = '/approved',
    REJECTED_APPLICATION = '/rejected',
}


export const routes: IRoute[] = [
    {
        path: RouteNames.DASHBOARD,
        component: Dashboard,
        name: 'Дашборд',
        description: 'Анализ заявок компании',
        icon: "dashboard"
    },
    {
        path: RouteNames.APPLICATION,
        component: Application,
        name: 'Мои заявки',
        icon: "application"
    },
    {
        path: RouteNames.NEW_APPLICATION,
        component: NewApplication,
        name: 'Новая заявка',
        icon: "new_app"
    },
    {
        path: RouteNames.APPROVED_APPLICATION,
        component: Application,
        name: 'Согласованные заявки',
        icon: "approved"
    },
    {
        path: RouteNames.REJECTED_APPLICATION,
        component: Application,
        name: 'Отклоненные заявки',
        icon: "rejected"
    },
]
