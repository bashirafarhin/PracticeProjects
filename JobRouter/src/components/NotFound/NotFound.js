import { Link, Outlet } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="not-found">
            <h2>page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga, quidem soluta consequatur reiciendis obcaecati, ipsum inventore dolores, facere in odit! Quisquam minima dolorem impedit, necessitatibus officia blanditiis facilis? Assumenda.</p>
        

        <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    );
}