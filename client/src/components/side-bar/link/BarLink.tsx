import './bar-link.scss'
import {FC} from "react";
import {ILink} from "@/components/side-bar/types.ts";
import {Link} from "react-router-dom";
import BarIcon from "@/components/side-bar/icons/BarIcon.tsx";

interface BarLinkProps {
    link: ILink,
    isActive: boolean
}
const BarLink: FC<BarLinkProps> = ({link, isActive}) => {
    return (
        <Link to={link.path} className={`link ${isActive && 'active'}`}>
            <BarIcon icon={link.icon} isActive={isActive}/>
            <div className="name">{link.name}</div>
        </Link>
    );
};

export default BarLink;
