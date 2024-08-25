import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jobrouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                </nav>
                <BreadCrumbs/>
            </header>

            <main>
                <Outlet/>
                {/* when we go from Navlink to router to find which component to render it comes
                back here and find where to outlet or show the component */}
            </main>
        </div>
    );
}