import React from "react"
import "./Navbar.css"

export default function(){
    return(
        <div className="nav-div">
            <img className = "nav-img"src = "./Assets/chefhat.png"/>
            <h1 className = "nav-title">Recipe App</h1>
            <a href = "/">Home</a>
            <a href = "/random">Random</a>
        </div>
    )
}
