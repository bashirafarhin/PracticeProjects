import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About(){
    const [user, setUser]=useState('mario');
    if(!user){
        //so that when user logout, they can went back again to the previous page without login
        //so when replace == true it removes the previous page in history
        return <Navigate to='/' replace={true}/>
    }
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga, quidem soluta consequatur reiciendis obcaecati, ipsum inventore dolores, facere in odit! Quisquam minima dolorem impedit, necessitatibus officia blanditiis facilis? Assumenda.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe voluptates deleniti minus vitae cum quo asperiores cumque magni dicta excepturi quaerat id dolor, neque consectetur tenetur. Enim, consequatur nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam nihil mollitia perferendis impedit laudantium sapiente reiciendis maiores est maxime pariatur assumenda expedita labore delectus eligendi, facere optio. Dolorum, dolores.</p>
            <button onClick={ () => setUser(null) }>Logout</button>
        </div>
    );
}