import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";

// Replace with your image paths
import kashitempleImg from "../images/Kashi Vishwanath, Varanasi_.jpg";
import kashmirLakeImg from "../images/Kashmir.jpg";
import JaipurMonumentsImg from "../images/pexels-axp-photography-19149584.jpg";
import Varanasi_ghatImg from "../images/river.jpg";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const AboutUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      icon: <HotelIcon sx={{ fontSize: 40, color: "#18a5b2" }} />,
      label: "Tours",
      value: 346,
      ref: ref1,
      inView: inView1
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#18a5b2" }} />,
      label: "Clients",
      value: 876,
      ref: ref2,
      inView: inView2
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: "#18a5b2" }} />,
      label: "Staff",
      value: 234,
      ref: ref3,
      inView: inView3
    }
  ];
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        alignItems="flex-start"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1 }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#18a5b2",
              mb: 1,
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            ABOUT US
            <Box sx={{ width: 40, height: 2, bgcolor: "#18a5b2" }} />
          </Typography>

          <Typography variant="h4" fontWeight={700} mb={2}>
            Welcome to{" "}
            <Box component="span" sx={{ color: "#18a5b2", display: "inline", fontFamily: 'Roboto' }}>
              VIATRA
            </Box>
          </Typography>

          <Typography color="#666" fontSize="16px" mb={4} lineHeight={1.8}>
            At Viatra, we believe every journey should be effortless and unforgettable.
            From handpicked stays to tailored travel experiences, we make every moment count.
          </Typography>

          <Stack direction="row" spacing={2} mb={4}>
            {stats.map((item, i) => (
              <Paper
                key={i}
                ref={item.ref}
                elevation={1}
                sx={{
                  flex: 1,
                  py: 3,
                  border: "3px double #eee",
                  textAlign: "center",
                  boxShadow: 'none'
                }}
              >
                {item.icon}
                <Typography variant="h5" fontWeight={700}>+
                  {item.inView ? <CountUp end={item.value} duration={2} /> : 0}
                </Typography>
                <Typography color="#666">{item.label}</Typography>
              </Paper>
            ))}
          </Stack>


          <Button
            variant="contained"
            sx={{
              backgroundColor: "#18a5b2",
              color: "white",
              px: 4,
              py: 1.1,
              fontWeight: 600,
              borderRadius: "2px",
              textTransform: "uppercase",
              '&:hover': { backgroundColor: "#278a96" }
            }}
          >
            Explore More
          </Button>
        </motion.div>

        {/* Right Image Layout (EXACT MATCH) */}
        <Box sx={{ flex: 1 }}>
          <Stack alignItems='center' gap={{xs: 1, md:2}} >
            <Stack direction="row" gap={{xs: 1, md:2}} alignItems="end">
              <Box sx={{ width: {xs:140, md:210}, height: {xs:180,md:200}, overflow: "hidden" }}>
                <motion.img
                  src={kashitempleImg}
                  alt="Kashi Temple"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transformOrigin: "center",
                  }}
                />
              </Box>

              <Box sx={{ width: {xs:170,md:260}, height: {xs:220, md:250}, overflow: "hidden" }}>
                <motion.img
                  src={kashmirLakeImg}
                  alt="Kashmir Lake"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transformOrigin: "center",
                  }}
                />
              </Box>
            </Stack>
            <Stack direction="row" gap={{xs: 1, md:2}} alignItems="start">
              {/* Left Blooming Image */}
              <Box sx={{ width: {xs:130,md:160}, height: {xs:140,md:150}, overflow: "hidden" }}>
                <motion.img
                  src={JaipurMonumentsImg}
                  alt="Bottom left small"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    transformOrigin: "center",
                  }}
                />
              </Box>

              {/* Right Blooming Image */}
              <Box sx={{ width: {xs:150, md:210}, height: {xs:170, md:200}, overflow: "hidden" }}>
                <motion.img
                  src={Varanasi_ghatImg}
                  alt="Bottom right small"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    transformOrigin: "center",
                  }}
                />
              </Box>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutUs;
