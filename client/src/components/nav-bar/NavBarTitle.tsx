import {useRouteName} from "@/hooks/useRouteName.ts";

const NavBarTitle = () => {
    const {name, description} = useRouteName()

    return (
        <div className="nav-bar__title">
            {name + (description && ':')} {description}
        </div>
    );
};

export default NavBarTitle;
