import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Config } from "../Utils/Config";
import { Box, Typography, Chip, Grid, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Collapse, Button, Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RoomIcon from '@mui/icons-material/Room';
import AboutThisActivity from "./AboutThisActivity";
import { IoStar } from "react-icons/io5";
import PriceBox from "./PriceModal";
import AvailabilitySelector from "./AvailabilitySelector";

const PackageDetailsLayout = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const availabilityRef = useRef(null);

  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get(`${Config?.Get_Package_Details}?packageId=${id}`);
      if (response?.status === 200) {
        setDetails(response?.data?.data);
      }
    } catch (error) {
      console.log(error, 'Something went wrong');
    }
  };

  useEffect(() => {
    fetchPackageDetails();
  }, [id]);

  if (!details) return <Typography>Loading...</Typography>;

  const {
    title, subtitle, image, duration, price, tagline, rating, reviews, destination,
    details: {
      highlights = [],
      fullDescription = [],
      destinationPoints = [],
      includes = [],
      exclusions = [],
      importantInformation = {},
      images = []
    } = {}
  } = details;
  console.log(details, 'details')

  const handleCheckAvailabilityClick = () => {
    availabilityRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box sx={{ px: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 0, p: 3 }}>
        <Stack spacing={1}>
          <Stack flexDirection='row' alignItems='baseline' gap='8px'>
            <Typography fontFamily='InterRegular' fontSize='26px' fontWeight={600} color="text.primary">{title}</Typography>
            <Typography variant="h6" color="text.secondary">({subtitle})</Typography>
          </Stack>

          <Stack flexDirection='row' sx={{ mt: 1.5, alignItems: 'end', gap: '10px' }}>
            <Chip label={tagline} sx={{ width: "fit-content", fontSize: '12px', height: '24px', borderRadius: '16px', bgcolor: "#aae1e585", border: '1px solid #56dae6', color: "#000", fontWeight: 500 }} />
            <Stack flexDirection='row' alignItems='center'> <IoStar style={{ color: 'gold' }} /><IoStar style={{ color: 'gold' }} /><IoStar style={{ color: 'gold' }} /><IoStar style={{ color: 'gold' }} /><IoStar style={{ color: 'gold' }} />
              <Typography fontSize='15px' marginLeft='5px' fontFamily='Intersemibold'>{rating}</Typography>
            </Stack>
            <Typography fontSize='13px'>({reviews} reviews)</Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Hero Image */}
      <Box sx={{ mb: 4 }}>
        <Box display="flex" gap={1.2}>
          {/* Large Image on the Left */}
          <Box component="img" src={image} alt="Main Image" sx={{ width: '42%', height: 400, objectFit: 'cover', borderRadius: 1 }} />

          {/* 2 Small Images (Stacked Vertically) */}
          <Stack spacing={2} sx={{ width: '30%' }}>
            <Box component="img" src={images[0]?.src} alt="Second Image" sx={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 1 }} />
            {/* <Box component="img" src={images[1]?.src} alt="Third Image" sx={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 2 }} /> */}
          </Stack>

          {/* 2 More Small Images (Stacked Vertically) */}
          <Stack spacing={1.4} sx={{ width: '33%' }}>
            <Box component="img" src={images[2]?.src} alt="Fourth Image" sx={{ width: '100%', height: 190, objectFit: 'cover', borderRadius: 1 }} />
            <Box component="img" src={images[3]?.src} alt="Fifth Image" sx={{ width: '100%', height: 190, objectFit: 'cover', borderRadius: 1 }} />
          </Stack>
        </Box>
      </Box>
      <Stack flexDirection='row'>
        <AboutThisActivity />
        <PriceBox onCheckAvailabilityClick={handleCheckAvailabilityClick} details={details} />
      </Stack>
      <Box ref={availabilityRef} sx={{ scrollMarginTop: '100px', mt: 4 }}>
        <AvailabilitySelector />
      </Box>
      {/* Highlights */}
      <Stack sx={{ mb: 4, flexDirection: 'row', gap: 11 }} >
        <Typography variant="h6" gutterBottom>Highlights</Typography>
        <ul style={{ paddingLeft: '20px' }}>
          {highlights.map((hl, i) => (
            <li key={i}><Typography variant="body2">{hl.text}</Typography></li>
          ))}
        </ul>
      </Stack>

      {/* Full Description */}
      <Stack direction="row" spacing={6} sx={{ mb: 4 }}>
        {/* Left side title */}
        <Typography
         variant="h6" gutterBottom
        >
          Full description
        </Typography>

        {/* Right side content */}
        <Box>
          {showFullDesc ? (
            <>
              {fullDescription.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    {index + 1}. {item.name}:
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </>
          ) : (
             <>
            <Typography variant="body2">
              1. {fullDescription[0]?.name}:
            </Typography>
            <Typography variant="body2">
              {fullDescription[0]?.description?.substring(0, 100)}...
            </Typography>
          </>
          )}

          <Link
            component="button"
            onClick={() => setShowFullDesc(!showFullDesc)}
            underline="hover"
            sx={{
              mt: 1,
              fontSize: '0.95rem',
              color: '#1a2c50',
              fontWeight: 500,
            }}
          >
            {showFullDesc ? 'See less' : 'See more'}
          </Link>
        </Box>
      </Stack>

      {/* Itinerary Timeline */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Itinerary</Typography>
          <Box sx={{ position: 'relative', pl: 3, borderLeft: '3px solid #ff5722' }}>
            {destinationPoints.map((point, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, position: 'relative' }}>
                <RoomIcon sx={{ position: 'absolute', left: '-17px', top: '2px', color: index === 0 ? '#d32f2f' : '#1976d2' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">{point.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{point.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>



      {/* Includes & Excludes */}
       <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#1a2c50', mb: 1 }}
          >
            Includes
          </Typography>
          <Stack spacing={1}>
            {includes.map((inc, index) => (
              <Box key={index} display="flex" alignItems="center">
                <CheckCircleIcon fontSize="small" color="success" sx={{ mr: 1 }} />
                <Typography variant="body2" color="#1a2c50">
                  {inc.item}
                </Typography>
              </Box>
            ))}
            {exclusions.map((exc, index) => (
              <Box key={index} display="flex" alignItems="center">
                <CancelIcon fontSize="small" color="error" sx={{ mr: 1 }} />
                <Typography variant="body2" color="#1a2c50">
                  {exc.item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Important Information */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#1a2c50' }}
          >
            Important information
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          {/* What to bring */}
          <Typography fontWeight={600} sx={{ color: '#1a2c50', mb: 1 }}>
            What to bring
          </Typography>
          <Stack spacing={0.5}>
            {(showInfo
              ? importantInformation?.whatToBring
              : importantInformation?.whatToBring?.slice(0, 4)
            )?.map((info, index) => (
              <Typography key={index} variant="body2" color="#1a2c50">
                • {info.item}
              </Typography>
            ))}
            {importantInformation?.whatToBring?.length > 4 && (
              <Link
                component="button"
                onClick={() => setShowInfo(!showInfo)}
                underline="hover"
                sx={{
                  fontSize: '0.95rem',
                  color: '#1a2c50',
                  fontWeight: 500,
                }}
              >
                {showInfo ? 'See less' : 'See more'}
              </Link>
            )}
          </Stack>

          {/* Not allowed */}
          <Typography
            fontWeight={600}
            sx={{ color: '#1a2c50', mt: 3, mb: 1 }}
          >
            Not allowed
          </Typography>
          <Stack spacing={0.5}>
            {(showInfo
              ? importantInformation?.notAllowed
              : importantInformation?.notAllowed?.slice(0, 2)
            )?.map((info, index) => (
              <Typography key={index} variant="body2" color="#1a2c50">
                • {info.item}
              </Typography>
            ))}
            {importantInformation?.notAllowed?.length > 2 && (
              <Link
                component="button"
                onClick={() => setShowInfo(!showInfo)}
                underline="hover"
                sx={{
                  fontSize: '0.95rem',
                  color: '#1a2c50',
                  fontWeight: 500,
                }}
              >
                {showInfo ? 'See less' : 'See more'}
              </Link>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PackageDetailsLayout;
