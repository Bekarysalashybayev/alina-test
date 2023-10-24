import AppRouter from "@/components/AppRouter.tsx";
import SideBar from "@/components/side-bar/SideBar.tsx";
import NavBar from "@/components/nav-bar/NavBar.tsx";
import '@/assets/scss/app.scss'
import {useEffect, useState} from "react";
import Button from "@/components/ui/button/Button.tsx";
import {useLocation} from "react-router-dom";

function App() {
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="app">
            <div className={`app__bar ${open && 'open'}`}>
                <div className="app__bar-overlay" onClick={() => setOpen(false)}></div>
                <SideBar/>
            </div>
            <div className="app__content">
                <div className="app__content-header">
                    <NavBar>
                        <div className="burger-button">
                            <Button
                                onClick={() => setOpen(true)}
                                btn_size='small'
                            >
                                Open
                            </Button>
                        </div>
                    </NavBar>
                </div>
                <div className="app__content-page scroll">
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
}

export default App;
