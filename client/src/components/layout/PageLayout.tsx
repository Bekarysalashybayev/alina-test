import './page-layout.scss'
import {FC, ReactNode} from "react";

const PageLayout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="page-layout">
            {children}
        </div>
    );
};

export default PageLayout;
