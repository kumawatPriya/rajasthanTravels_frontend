import { Box } from "@mui/material";
import React from "react";
import Contact from "../ContactUs/Contact";
import { LoginBar } from "../LoginPage/LoginBar";
import { Navbar } from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { FAQSection } from "../ContactUs/FAQ";

function ContactUs() {
    return (
        <>
            <Box>
                <div className="login-bar-main"><LoginBar /></div>
                <div className="navbar-main"><Navbar /></div>
                <Contact />
                <FAQSection />
                <div><Footer /></div>
            </Box>
        </>
    )
}

export { ContactUs }

