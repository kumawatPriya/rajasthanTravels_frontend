import React from "react";
import { Navbar } from "../HomePage/Navbar";
import { LoginBar } from "../LoginPage/LoginBar";
import { Slider } from "../HomePage/Slider";
import { TravelCards } from "../HomePage/TravelCards";

function Home(){
    return(
        <>
        <div className="login-bar-main"><LoginBar/></div>
        <div className="navbar-main"><Navbar/></div>
        <div className="slider-main"><Slider/></div>
        <div className="travel-cards-main"><TravelCards/></div>
        </>
    )
}

export {Home}