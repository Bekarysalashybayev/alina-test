import {FC} from "react";
import './side-bar.scss'
import Logo from "@/components/ui/Logo/Logo.tsx";
import {routes} from "@/router";
import BarLink from "@/components/side-bar/link/BarLink.tsx";
import {useRouteName} from "@/hooks/useRouteName.ts";

const SideBar: FC = () => {
    const {name} = useRouteName()
    return (
        <div className="side-bar">
            <div className="side-bar__logo">
                <Logo/>
            </div>
            <div className="side-bar__links">
                {routes.map((route, i) => (
                    <BarLink key={i} link={route} isActive={name === route.name}/>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
