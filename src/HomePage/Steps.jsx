import React, { useRef } from "react";
import { Box, Typography, Avatar, Stack, Card, CardContent, LinearProgress, } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import PaymentsIcon from "@mui/icons-material/Payments";
import FlightIcon from "@mui/icons-material/Flight";
import lakeImg from "../images/Lake.jpg";
import mysoreIcon from "../images/mysoreIcon-removebg-preview.png"
import { motion, useInView } from "framer-motion";
import { RiStarSFill, RiStarHalfFill } from "react-icons/ri";


const steps = [
    {
        icon: <HotelIcon sx={{ color: "#fff" }} />,
        title: "Choose Destination",
        desc: "Browse and select your desired travel destination from a wide range of options tailored to your preferences.",
        color: "#FFD233",
    },
    {
        icon: <PaymentsIcon sx={{ color: "#fff" }} />,
        title: "Make Payment",
        desc: "Securely complete your booking by selecting a payment method and finalizing the transaction.",
        color: "#F15A2B",
    },
    {
        icon: <FlightIcon sx={{ color: "#fff" }} />,
        title: "Reach Airport on Selected Date",
        desc: "Arrive at the designated airport on your departure date with all necessary documents and luggage ready.",
        color: "#006380",
    },
];

export const TripSteps = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" }); // triggers early when scrolling

    return (
        <Box ref={ref}
            display="flex"
            justifyContent="space-between"
            width={{ xs: '86%', md: '81%' }} margin='auto' alignItems='center'
            sx={{ backgroundColor: "#fff", gap: "48px", flexWrap: "wrap" }}
        >
            {/* Left Side */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ maxWidth: "500px" }}
            >
                <Typography variant="body2" fontWeight={600} sx={{ color: "#5E6282", mb: 1 }}>
                    Easy and Fast
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, fontSize: {xs: '28px',md:"38px"}, color: "#14183E", lineHeight: {xs:"40px",md:"50px"}, mb: {xs: 4, md:5}, }}>
                    Book Your Next Trip
                    <br />
                    In 3 Easy Steps
                </Typography>

                <Stack spacing={3}>
                    {steps.map((step, index) => (
                        <Box key={index} display="flex" alignItems="flex-start" gap={3}>
                            <Box
                                width={{xs:110, md:65}} height={45} display="flex" alignItems="center" justifyContent="center" borderRadius="12px" sx={{ backgroundColor: step.color, "& .MuiSvgIcon-root": { fontSize: 21, }, }}>
                                {step.icon}
                            </Box>
                            <Box>
                                <Typography fontWeight={600} fontSize="16px" color="#5E6282" mb={0.5}>
                                    {step.title}
                                </Typography>
                                <Typography fontSize="14px" color="#5E6282" lineHeight="22px" > {step.desc}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </motion.div>

            {/* Right Side */}
            <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                style={{ position: "relative", width: 360 }}
            >

                <Box
                    sx={{
                        position: {md:"absolute"}, top: "-120px", left: "0px", right: { xs: "-70px", md: "-90px" }, bottom: "0px",
                        background: "radial-gradient(circle, rgb(144 196 255) 13%, white 61%);",
                        filter: "blur(60px)", zIndex: 0, borderRadius: "50%",
                    }} />
                {/* Card with Blue Shadow */}
                <Box overflow="hidden" borderRadius="24px" position="relative" zIndex={1} width={{ xs: '279px', md: '344px' }} boxShadow='1px 2px 4px #efefef'>
                    <Card sx={{ width: { xs: 279, md: 344 }, borderRadius: "24px", padding: { xs: '10px', md: '20px' }, boxShadow: "none", }}>
                        <img
                            src={lakeImg}
                            alt="Trip to Shillong"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: '24px 24px 0px 0px '
                            }}
                        />
                        <CardContent sx={{ padding: '0px', paddingBottom: '0px !important' }}>
                            <Typography
                                fontSize={{ xs: '16px', md: "17px" }}
                                fontWeight={500}
                                color="#14183E"
                                mt='10px'
                            >
                                Trip To Shillong
                            </Typography>
                            <Typography
                                fontSize={{ xs: '12px', md: "14px" }}
                                color="#5E6282"
                                mb={0.5}
                                sx={{ display: "flex", gap: '4px' }}
                            >
                                14–29 June
                                <span style={{ margin: "0 0px" }}>by</span>
                                <b style={{ color: "#14183E" }}>Mithilesh Kumar</b>
                            </Typography>
                            <Stack flexDirection='row' mb='4px'>
                                <RiStarSFill color="#ffce00" />
                                <RiStarSFill color="#ffce00" />
                                <RiStarSFill color="#ffce00" />
                                <RiStarSFill color="#ffce00" />
                                <RiStarHalfFill color="#ffce00" />
                            </Stack>
                            <Typography fontSize="14px" color="#5E6282">
                                24 people going
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                {/* Floating Trip to Rome Card */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '58px',
                        right: { xs: '-15px', md: '-49px' }, // Responsive right
                        zIndex: 5,
                    }}
                >
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '18px',
                            boxShadow: '0px 2px 6px rgb(170 174 180 / 25%)',
                            padding: '9px',
                            width: '199px',
                        }}
                    >
                        <Box display="flex" gap={2} alignItems="center">
                            <Avatar
                                src={mysoreIcon}
                                sx={{ width: { xs: 40, md: 45 }, height: { xs: 40, md: 45 } }}
                            />
                            <Box>
                                <Typography
                                    fontSize="12px"
                                    color="#5E6282"
                                    fontWeight={500}
                                    mb={0.5}
                                >
                                    Ongoing
                                </Typography>
                                <Typography fontWeight={600} fontSize="14px" color="#14183E">
                                    Trip to Mysore
                                </Typography>
                                <Typography
                                    fontSize="12px"
                                    color="#5E6282"
                                    fontWeight={500}
                                    mt={0.5}
                                >
                                    40% completed
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={40}
                                    sx={{
                                        mt: 0.5, height: 5, borderRadius: 5,
                                        backgroundColor: "#EEE",
                                        "& .MuiLinearProgress-bar": {
                                            backgroundColor: "#8A79DF",
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
        </Box >
    );
}
