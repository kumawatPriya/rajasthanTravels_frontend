import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const features = [
  {
    icon: <CheckCircleOutlineIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Free cancellation",
    subtitle: "Cancel up to 24 hours in advance for a full refund",
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Reserve now & pay later",
    subtitle: "Keep your travel plans flexible — book your spot and pay nothing today.",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Duration 8 hours",
    subtitle: "Check availability to see starting times",
  },
  {
    icon: <MoreHorizIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Skip the ticket line",
  },
  {
    icon: <RecordVoiceOverOutlinedIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Live tour guide",
    subtitle: "English, Spanish, French, Italian",
  },
  {
    icon: <AirportShuttleOutlinedIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Pickup included",
    subtitle: "Our driver and guide will pick you up from your desired location in Jaipur, ensuring a convenient and hassle-free experience for you.",
  },
  {
    icon: <GroupsOutlinedIcon sx={{ color: "#155681", fontSize: 19, marginTop: '4px !important' }} />,
    title: "Private group",
  },
];

const AboutThisActivity = () => {
  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        About this activity
      </Typography>
      <Stack spacing={2}>
        {features.map((item, index) => (
          <Stack key={index} direction="row" spacing={2} >
            {item.icon}
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                {item.title}
              </Typography>
              {item.subtitle && (
                <Typography sx={{ color: "#4a4a4a", fontSize: "13.5px" }}>
                  {item.subtitle}
                </Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutThisActivity;
