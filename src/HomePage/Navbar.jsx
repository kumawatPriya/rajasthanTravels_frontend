import React from "react";
import logoImg from "../images/Indian-traditional-elephant.png"

function Navbar(){

    const nav = [
        {
            title: "Home"
        },
        {
            title: "Holiday Packages"
        },
        {
            title: "Family Packages"
        },
        {
            title: "About Us"
        },
        {
            title: "Inspiration"
        },
        {
            title: "Reviews"
        },

    ]

    return(
        <>
        <div className="navbar-logo">
            <div className="navbar-logo-img">
            <img src={logoImg} alt="elephant" />
            </div>
            <div className="logo-title">
            <p className="logo-title-word1">Explore</p>
            <p className="logo-title-word2">Rajasthan</p>
            </div>
        </div>
        <div className="navbar-main-list">
        {
            nav.map((list)=>{
               return(
                <>
                <ul>
                    <li>{list.title}</li>
                </ul>
                </>
               )
            })
        }
        </div>
        </>
    )
}

export {Navbar}