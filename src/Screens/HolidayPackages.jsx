import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import { Box } from '@mui/material'
import { Config } from '../Utils/Config'
import Cards from '../HolidayPackages/Cards'

const HolidayPackages = () => {
     
    return (
        <Box>
            <div className="navbar-main"><Navbar /></div>
            <div><Cards/></div>
            <div><Footer /></div>
        </Box>
    )
}

export default HolidayPackages