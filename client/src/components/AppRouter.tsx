import {Route, Routes, Navigate} from "react-router-dom";
import {RouteNames, routes} from "@/router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.component/>}
                />
            ))}
            <Route path="/*" element={<Navigate to={RouteNames.DASHBOARD}/>}/>
        </Routes>
    );
};

export default AppRouter;
