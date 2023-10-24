import {useLocation} from "react-router-dom";
import {routes} from "@/router";
import {useEffect, useState} from "react";

export const useRouteName = () => {
    const {pathname} = useLocation();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        const currentRoute = routes.find(route => route.path === pathname)

        if (!currentRoute) return;

        setName(currentRoute.name)
        setDescription(currentRoute.description ?? '')
    }, [pathname])

    return {
        name,
        description
    }
}
