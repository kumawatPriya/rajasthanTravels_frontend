import React from "react";
import BlogPage from "../Blog/BlogList";
import { Navbar } from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { Box } from "@mui/material";

function Blog(){
    return (
        <>
            <Box>
                <div className="navbar-main"><Navbar /></div>
                <BlogPage/>
                <div><Footer /></div>
            </Box>
        </>
    )
}

export {Blog}