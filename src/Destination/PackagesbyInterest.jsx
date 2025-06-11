import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { Config } from '../Utils/Config';

// Define both label and value for each category
const categories = [
  { label: "Hill Station", value: "hill_station" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Beach", value: "beach" },
  { label: "Pilgrimage", value: "pilgrimage" },
  { label: "Heritage", value: "heritage" },
  { label: "Honeymoon", value: "honeymoon" },
  { label: "Adventure", value: "adventure" },
  { label: "Trekking", value: "trekking" }
];

const InterestPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('hill_station');
  const [packageData, setPackageData] = useState([]);

  const fetchPackages = async (category) => {
    try {
      const res = await axios.get(`${Config?.Get_Packages_By_Interest}?category=${category}`);
      setPackageData(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch packages:', err);
      setPackageData([]);
    }
  };

  useEffect(() => {
    fetchPackages(selectedCategory);
  }, [selectedCategory]);

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, pt: 6 , pb: 2}}>
      <Typography variant="h4" fontWeight="bold" fontSize='30px' fontFamily='Source_serif_pro' textAlign="center" mb={4}>
        Packages By Interest
      </Typography>

      {/* Category Buttons with Labels */}
      <Box sx={{ display: 'flex', gap: {xs:'4px',md: 2}, flexWrap: 'wrap', justifyContent: 'center', mb: 5 }}>
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant="outlined"
            onClick={() => setSelectedCategory(cat.value)}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              px: {xs:1, md:3},
              fontWeight: 'bold',
              fontSize: {xs: '11px', md: '14px'},
              color: selectedCategory === cat.value ? 'white' : '#109392',
              background: selectedCategory === cat.value
                ? 'linear-gradient(45deg, #109392, #8b9eaf)'
                : 'transparent',
              border: selectedCategory === cat.value
                ? 'none'
                : '1px solid transparent',
              backgroundImage: selectedCategory === cat.value
                ? 'linear-gradient(45deg, #109392, #8b9eaf)'
                : 'linear-gradient(white, white), linear-gradient(45deg, #109392, #8b9eaf)',
              backgroundOrigin: 'border-box',
              backgroundClip: selectedCategory === cat.value
                ? 'border-box'
                : 'padding-box, border-box',
            }}
          >
            {cat.label}
          </Button>

        ))}
      </Box>

      {/* Package Cards */}
      <Grid container spacing={{xs:1, md:2}}>
        {packageData.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={3} sx={{ borderRadius: 2, width: {xs:'160px',md:'173px'},boxShadow: 1 }}>
              <CardMedia
                component="img"
                height="160"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography fontWeight="600" fontSize='15px' fontFamily='InterRegular'>{pkg.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InterestPackages;
