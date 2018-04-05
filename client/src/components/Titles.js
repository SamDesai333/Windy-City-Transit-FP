import React from "react";
import "./Titles.css"
import logo from "../img/transit_logo.png"

class Titles extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <img className ="logo"src={logo} alt=""/>
                <h2>Welcome to Windy City Transit</h2>
                <p>Choose your routes and see arriving times and more!</p>
            </div>
        )
    }
};

export default Titles;

