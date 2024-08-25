import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga, quidem soluta consequatur reiciendis obcaecati, ipsum inventore dolores, facere in odit! Quisquam minima dolorem impedit, necessitatibus officia blanditiis facilis? Assumenda.</p>
            <nav>
                {/*in navlink we provide path relative to the layout eg here we give path relative to helplayout */}
                    <NavLink to="faq">View the FAQ</NavLink>
                    <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
}