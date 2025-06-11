import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { FiMinusCircle } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";

function FAQSection() {
    const [expanded, setExpanded] = useState();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                width: { xs: "87%", sm: '65%', md: "65%" },
                mx: "auto",
                mt: 4, mb: 6,
                p: { xs: '12px 16px', sm: "2rem 3rem", md: "2rem 3rem" },
                borderRadius: "12px",
                bgcolor: "#ffffff",
                boxShadow: "0px 2px 3px 3px #efefef",
            }}
        >
            {/* Heading */}
            <Typography
                textAlign={{ xs: 'left', md: "center" }}
                mb={2}
                color="#3A3F3C"
                sx={{ fontSize: { xs: '30px', md: "32px" }, fontFamily: "'GeneralSansSemibold', sans-serif", lineHeight: { xs: '40px' }, paddingLeft: { xs: '6px' } }}
            >
                Frequently Ask Question
            </Typography>
            <Typography
                textAlign={{ xs: 'left', md: "center" }}
                mb={4}
                color="#011632"
                sx={{ fontSize: "15px", lineHeight: "1.5", fontFamily: "'GeneralSansRegular', sans-serif", paddingLeft: { xs: '6px' } }}
            >
                We offer carefully curated destinations and tours that capture the true essence of travel,
                ensuring you experience more than just sightseeing.
            </Typography>

            {/* FAQ Items */}
            {[
                {
                    panel: "panel1",
                    question: "How does Viatra ensure timely delivery of travel confirmations?",
                    answer:
                        "We leverage automated systems and real-time booking engines to ensure all your reservations are confirmed and delivered instantly after booking.",
                },
                {
                    panel: "panel2",
                    question: "What types of destinations and travel packages are available?",
                    answer:
                        "Viatra offers a variety of travel packages including luxury getaways, cultural tours, adventure trips, and personalized itineraries across multiple countries.",
                },
                {
                    panel: "panel3",
                    question: "Is there a minimum booking requirement with Viatra?",
                    answer:
                        "No, there is no minimum booking requirement. You can book single tours, accommodation, or complete packages as per your preference.",
                },
                {
                    panel: "panel4",
                    question: "How can I track the status of my booking?",
                    answer:
                        "You can track your booking status by logging into your Viatra account or using the order tracking page. You’ll also receive timely email updates.",
                },
            ].map(({ panel, question, answer }, index) => (
                <Accordion
                    key={panel}
                    expanded={expanded === panel}
                    onChange={handleChange(panel)}
                    sx={{
                        mb: 2,
                        borderRadius: expanded === panel ? "12px !important" : '0px',
                        overflow: "hidden",
                        // Apply the border-bottom conditionally for panel 2 and 3
                        borderBottom: index === 0 || index === 1 || index === 2 ? "1px solid #e0e0e0" : "none",
                        boxShadow: expanded === panel ? "none" : "none",
                        width: expanded === panel ? {xs:'100%', md:'96%'} : {xs: '100%', md:'90%'},
                        margin: expanded === panel ? 'auto !important' : 'auto',
                        padding: expanded === panel ? '' : '10px 0px 13px'
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <Box sx={{ position: 'relative', width: 24, height: 24 }}>
                                {/* Plus Icon */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        opacity: expanded === panel ? 0 : 1,
                                        transform: expanded === panel ? 'scale(0.8)' : 'scale(1)',
                                        transition: 'opacity 0.1s ease, transform 0.1s ease',
                                    }}
                                >
                                    <LuCirclePlus style={{ fontSize: '20px' }} />
                                </Box>

                                {/* Minus Icon */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        opacity: expanded === panel ? 1 : 0,
                                        transform: expanded === panel ? 'scale(1)' : 'scale(0.8)',
                                        transition: 'opacity 0.1s ease, transform 0.1s ease',
                                    }}
                                >
                                    <FiMinusCircle style={{ fontSize: '20px' }} className="minus_icon"/>
                                </Box>
                            </Box>
                        }
                        sx={{
                            transition: 'ease-in 0.3s',
                            bgcolor: expanded === panel ? "#18a5b2" : "#ffffff",
                            color: expanded === panel ? "#ffffff" : "#333333",
                            minHeight: expanded === panel ? '60px' : '51px',
                            padding: '0px 16px 0px 0px !important',
                            "& .MuiAccordionSummary-content": {
                                fontSize: "16px",
                                // margin: "0px !important",
                                paddingRight: "30px !important",
                                padding: '0 !important'
                            },
                        }}>
                        <Typography sx={{
                            fontFamily: "'GeneralSansMedium', sans-serif", letterSpacing: "0px",
                            paddingLeft: expanded === panel ? { xs: '20px', sm: '3rem', md: '3rem' } : '0'
                        }}>
                            {question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            bgcolor: expanded === panel ? "#18a5b2" : "#ffffff",
                            color: expanded === panel ? "#ffffff" : "#666666",
                            p: { xs: "0px 20px 20px 20px", sm: "0px 30px 35px 45px", md: "0px 30px 35px 45px" },
                            fontSize: "14px",
                            lineHeight: "1.6",
                        }}
                    >
                        <Box sx={{ width: "100%", marginBottom: "16px" }}>
                            <Divider
                                orientation="horizontal"
                                style={{
                                    borderWidth: "1.5px",
                                    borderColor: "#FFFFFF",
                                    border: 'none',
                                    borderBottom: '1px solid',
                                    display: expanded ? "block" : 'none'
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: "'GeneralSansRegular', sans-serif",
                                fontSize: "15px",
                                letterSpacing: "0.1px",
                                wordSpacing: "1px",
                                width: "96%",
                            }}
                        >
                            {answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export { FAQSection };