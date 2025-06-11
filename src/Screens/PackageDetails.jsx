import React from 'react'
import PackageDetailsLayout from '../PackageDetails/Page'
import { Box } from '@mui/material'
import { Navbar } from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'

export const PackageDetails = () => {
    return (
        <>
            <Box>
                <div className="navbar-main"><Navbar /></div>
                <PackageDetailsLayout />
                <div><Footer /></div>
            </Box>
        </>
    )
}
