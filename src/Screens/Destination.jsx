import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import DestinationPage from "../Destination/TopPlaces";


function Destination() {
    return (
        <>
            <Box>
                <div className="navbar-main"><Navbar /></div>
                <DestinationPage/>
                <div><Footer /></div>
            </Box>
        </>
    )
}

export { Destination }