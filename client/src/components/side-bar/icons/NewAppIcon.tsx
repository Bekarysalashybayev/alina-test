import {FC} from "react";

const NewAppIcon: FC<{active?: boolean}> = ({active = false}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1.66669 7.08325H11.25M5.00002 13.7499H6.66669M8.75002 13.7499H12.0834"
                  stroke={active ? 'white' : '#2B2B2B'}/>
            <path d="M18.3334 10.0251V13.4251C18.3334 16.3501 17.5917 17.0834 14.6334 17.0834H5.36669C2.40835 17.0834 1.66669 16.3501 1.66669 13.4251V6.57508C1.66669 3.65008 2.40835 2.91675 5.36669 2.91675H11.25"
                  stroke={active ? 'white' : '#2B2B2B'}/>
            <path d="M13.75 5.20841H18.3333M16.0417 7.50008V2.91675"
                  stroke={active ? 'white' : '#2B2B2B'}/>
        </svg>
    );
};

export default NewAppIcon;
