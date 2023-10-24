import {FC} from "react";

const AppIcon: FC<{active?: boolean}> = ({active = false}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1.66669 7.0874H18.3334M5.00002 13.7541H6.66669M8.75002 13.7541H12.0834"
                  stroke={active ? 'white' : '#2B2B2B'} />
            <path d="M5.36669 2.9209H14.625C17.5917 2.9209 18.3334 3.65423 18.3334 6.57923V13.4209C18.3334 16.3459 17.5917 17.0792 14.6334 17.0792H5.36669C2.40835 17.0876 1.66669 16.3542 1.66669 13.4292V6.57923C1.66669 3.65423 2.40835 2.9209 5.36669 2.9209Z"
                  stroke={active ? 'white' : '#2B2B2B'}/>
        </svg>
    );
};

export default AppIcon;
