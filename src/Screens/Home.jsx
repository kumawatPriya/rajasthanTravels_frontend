import React from "react";
import { Navbar } from "../HomePage/Navbar";
import { LoginBar } from "../LoginPage/LoginBar";
import { Slider } from "../HomePage/Slider";
import { TravelCards } from "../HomePage/TravelCards";

import { motion } from "framer-motion";
import { TripSteps } from "../HomePage/Steps";
import AboutUs from "../AboutUs/About";
import Testimonials from "../HomePage/Tetimonials";
import ViatraFeatures from "../HomePage/Features";
import Blog from "../HomePage/Blog";
import Footer from "../HomePage/Footer";
import { TopDestinations } from "../HomePage/TopDestinations";
import { Box } from "@mui/material";


function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
    };
    return (
        <>
            <LoginBar />
            <div className="navbar-main"><Navbar /></div>
            <div className="slider-main"><Slider /></div>
            <div><TopDestinations /></div>
            <div className="step-main"><TripSteps /></div>
            <motion.div {...fadeInUp} className="travel-cards-main"><TravelCards /></motion.div>
            <div><AboutUs /></div>
            <div><Testimonials /></div>
            <div><ViatraFeatures /></div>
            <div><Blog /></div>
            <div><Footer /></div>
        </>
    )
}

export { Home }