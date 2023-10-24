import {IRoute} from "@/router";

export type ILink = Omit<IRoute, 'component' | 'description'>
