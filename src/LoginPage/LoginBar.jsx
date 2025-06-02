import React from "react";
import { Link, useLocation } from "react-router-dom";

function LoginBar(){
    // const data = useLocation();
    // console.log(data)
    return(
        <>
        <div className="slogan">Luxury travel to India since 1989</div>
        {/* <div style={{color: "white"}}>{data.state.email}</div> */}
        <div className="loginbar">
        <Link to="/login">Login</Link>
        <span className="loginbar-slash">/</span>
        <Link to="/signup">Signup</Link>
        <span>(if you don't have an account)</span>
        </div>
        </>
    )
}

export {LoginBar}