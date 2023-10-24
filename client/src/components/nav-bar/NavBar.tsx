import './nav-bar.scss'
import {FC, ReactNode} from "react";
import NavBarTitle from "@/components/nav-bar/NavBarTitle.tsx";
import UserAvatar from "@/components/ui/ava/UserAvatar.tsx";
import DAVA from "@/assets/img/DAva.svg"
import NOTIFICATION from "@/assets/img/Notification.svg"
const NavBar: FC<{children: ReactNode}> = ({children}) => {

    return (
        <div className="nav-bar">
            {children}
            <NavBarTitle/>
            <div className="nav-bar__right">
                <img src={NOTIFICATION} alt="NOTIFICATION" className="notification"/>
                <UserAvatar img={DAVA} text='Иванов И.И.'/>
            </div>
        </div>
    );
};

export default NavBar;
