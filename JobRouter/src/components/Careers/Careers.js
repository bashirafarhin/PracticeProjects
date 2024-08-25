import { useLoaderData,Link } from "react-router-dom";

export default function Careers(){
    const careers=useLoaderData();
    return (
        <div className="careers">
            {
                careers.map(career => (
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                        <p>Based in {career.location}</p>
                    </Link>
                ))
            }
        </div>
    );
}

export const careersLoader = async() => {
    //open this link in new terminal
    //npm i -g json-server
    //json-server -p 4000 -w ./data/db.json
    const res=await fetch("http://localhost:4000/careers");
    if(!res.ok){
        throw Error('Could not fetch the careers');
    }
    return res.json();
}