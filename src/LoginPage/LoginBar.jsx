import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function LoginBar() {
    // const data = useLocation();
    // console.log(data)
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
        <>

            {!isLoggedIn && <>   <Box className="login-bar-main" sx={{ height: { xs: "47px", md: '30px' } }}> <div className="slogan">Luxury travel to India since 1989</div>
                {/* <div style={{color: "white"}}>{data.state.email}</div>  */}
                <div className="loginbar">
                    <Link to="/login">Login</Link>
                    <span className="loginbar-slash">/</span>
                    <Link to="/signup">Signup</Link>
                    <span className="term">(if you don't have an account)</span>
                </div> </Box></>}
        </>
    )
}

export { LoginBar }