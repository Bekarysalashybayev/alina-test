import {FC} from "react";
import DashboardIcon from "@/components/side-bar/icons/DashboardIcon.tsx";
import * as React from "react";
import AppIcon from "@/components/side-bar/icons/AppIcon.tsx";
import NewAppIcon from "@/components/side-bar/icons/NewAppIcon.tsx";
import RejectedAppIcon from "@/components/side-bar/icons/RejectedAppIcon.tsx";
import ApprovedAppIcon from "@/components/side-bar/icons/ApprovedAppIcon.tsx";
import {BarIconType} from "@/components/side-bar/icons/types.ts";

interface BarIconProps {
    icon: BarIconType,
    isActive: boolean
}

type IconProps = {
    active?: boolean;
};

const icons: Record<BarIconType, React.ComponentType> = {
    dashboard: DashboardIcon,
    application: AppIcon,
    new_app: NewAppIcon,
    rejected: RejectedAppIcon,
    approved: ApprovedAppIcon
}

const BarIcon: FC<BarIconProps> = ({icon, isActive}) => {
    const IconComponent: React.ComponentType<IconProps> = icons[icon];

    return <IconComponent active={isActive}/>;
};

export default BarIcon;
