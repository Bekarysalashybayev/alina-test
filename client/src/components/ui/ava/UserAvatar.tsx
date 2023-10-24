import './ava.scss'
import {FC} from "react";

interface IAvaProps {
    img?: string,
    text?: string,
}

const UserAvatar: FC<IAvaProps> = ({img, text}) => {
    return (
        <div className="ava">
            <div className="img">
                {img && <img src={img} alt="ava"/>}
            </div>
            {text && <span>{text}</span>}
        </div>
    );
};

export default UserAvatar;
