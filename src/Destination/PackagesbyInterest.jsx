import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import img1 from "../images/kumaon_hills.webp"
import img2 from "../images/Kashmir.jpg"
import img3 from "../images/south_india.jpg"
import img4 from "../images/himachal_hill_Station.jpg"
import img5 from "../images/nainital_lake.webp"
import img6 from "../images/gangtok-pelling-darjeeling-tour-bnnr.jpg"

const packageData = {
  "Hill Station": [
    {
      title: 'Best of Kumaon Hills',
      duration: '5 Nights - 6 Days',
      image: img1,
    },
    {
      title: 'Best of Kashmir Velleys',
      duration: '5 Nights - 6 Days',
      image: img2,
    },
    {
      title: 'Best of South India',
      duration: '7 Nights - 8 Days',
      image: img3,
    },
    {
      title: 'Himachal Hill Station Tour',
      duration: '8 Nights - 9 Days',
      image: img4,
    },
    {
      title: 'Nainital Kausani Ranikhet Tour',
      duration: '6 Nights - 7 Days',
      image: img5,
    },
    {
      title: 'Darjeeling Pelling & Gangtok Tour',
      duration: '6 Nights - 7 Days',
      image: img6,
    },
  ],
  Wildlife: [
    {
      title: 'Ranthambore Wildlife Safari',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Ranthambore_Tiger.jpg',
    },
    {
      title: 'Jim Corbett National Park',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Jim_Corbett_National_Park.jpg',
    },
    {
      title: 'Kaziranga Wildlife Tour',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Great_one-horned_rhino_at_Kaziranga_National_Park.jpg',
    },
    {
      title: 'Sundarbans Tiger Safari',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Royal_Bengal_Tiger.jpg',
    },
    {
      title: 'Periyar Wildlife Sanctuary',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Periyar_lake_boating.jpg',
    },
    {
      title: 'Bandhavgarh Tiger Reserve',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Tiger_in_Bandhavgarh.jpg',
    },
  ],
  Beach: [
    {
      title: 'Varkala Beach Retreat',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Varkala_Beach.jpg',
    },
    {
      title: 'Radhanagar Beach Escape',
      duration: '5 Nights - 6 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Radhanagar_beach.jpg',
    },
    {
      title: 'Palolem Beach in Goa',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Palolem_beach_in_Goa.jpg',
    },
    {
      title: 'Gokarna Beach Tour',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Kudle_Beach_Gokarna.jpg',
    },
    {
      title: 'Marari Beach Kerala',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Marari_Beach.jpg',
    },
    {
      title: 'Digha Beach Weekend Tour',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Digha_beach.jpg',
    },
  ],
  Pilgrimage: [
    {
      title: 'Char Dham Yatra',
      duration: '10 Nights - 11 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Kedarnath_Temple_in_May_2023.jpg',
    },
    {
      title: 'Kashi, Prayagraj & Ayodhya Tour',
      duration: '6 Nights - 7 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Kashi_Vishwanath_Temple.jpg',
    },
    {
      title: 'Vaishno Devi Yatra',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Vaishno_Devi_Bhawan_2020.jpg',
    },
    {
      title: 'Tirupati Balaji Temple Visit',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tirumala_temple_view.jpg',
    },
    {
      title: 'Shirdi Sai Baba Darshan',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Shirdi_Sai_Baba_Samadhi_Mandir.jpg',
    },
    {
      title: 'Jagannath Puri Yatra',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Puri_Jagannath_Temple_02.jpg',
    },
  ],
  Heritage: [
    {
      title: 'Rajasthan Heritage Circuit',
      duration: '7 Nights - 8 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Amber_Fort%2C_Jaipur.jpg',
    },
    {
      title: 'Hampi & Badami Heritage Tour',
      duration: '5 Nights - 6 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hampi_-_Virupaksha_Temple.jpg',
    },
    {
      title: 'Khajuraho Temples & Orchha Tour',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Lakshmana_Temple_Khajuraho.jpg',
    },
    {
      title: 'Mysore & Hoysala Heritage',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Mysore_Palace.jpg',
    },
    {
      title: 'Mahabalipuram & Kanchipuram Tour',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shore_temple_at_Mahabalipuram.jpg',
    },
    {
      title: 'Ajanta & Ellora Caves Tour',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Ellora_Caves_view.jpg',
    },
  ],
  Honeymoon: [
    {
      title: 'Shimla-Manali Honeymoon',
      duration: '6 Nights - 7 Days',
      image: 'https://images.unsplash.com/photo-1549888834-2cf1c951b6c2',
    },
    {
      title: 'Alleppey Houseboat Escape',
      duration: '4 Nights - 5 Days',
      image: 'https://images.unsplash.com/photo-1596803248583-cddb1dfd776d',
    },
    {
      title: 'Andaman Romantic Getaway',
      duration: '5 Nights - 6 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Andaman_Nicobar_Islands.jpg',
    },
    {
      title: 'Munnar & Thekkady Bliss',
      duration: '5 Nights - 6 Days',
      image: 'https://images.unsplash.com/photo-1595246759954-e32bfb8cfcc6',
    },
    {
      title: 'Ooty Kodaikanal Honeymoon',
      duration: '6 Nights - 7 Days',
      image: 'https://images.unsplash.com/photo-1614786269806-659926b1cf64',
    },
    {
      title: 'Coorg Coffee Retreat',
      duration: '3 Nights - 4 Days',
      image: 'https://images.unsplash.com/photo-1591186869799-8371f16fa4b9',
    },
  ],
  Adventure: [
    {
      title: 'Rishikesh River Rafting',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/River_rafting_at_Rishikesh.jpg',
    },
    {
      title: 'Bungee & Ziplining in Goa',
      duration: '2 Nights - 3 Days',
      image: 'https://images.unsplash.com/photo-1604754742624-1e9e6dccefcf',
    },
    {
      title: 'Paragliding in Bir Billing',
      duration: '2 Nights - 3 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Paragliding_2.jpg',
    },
    {
      title: 'Rock Climbing in Satpura',
      duration: '3 Nights - 4 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Rock_Climbing.jpg',
    },
    {
      title: 'Caving in Meghalaya',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Siju_Cave_in_Meghalaya.jpg',
    },
    {
      title: 'Jeep Safari in Spiti Valley',
      duration: '6 Nights - 7 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Spiti_Valley.jpg',
    },
  ],
  Trekking: [
    {
      title: 'Valley of Flowers Trek',
      duration: '6 Nights - 7 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Valley_of_Flowers.jpg',
    },
    {
      title: 'Hampta Pass Trek',
      duration: '5 Nights - 6 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Hampta_Pass_Trek.jpg',
    },
    {
      title: 'Kedarkantha Winter Trek',
      duration: '4 Nights - 5 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Kedarkantha_peak.jpg',
    },
    {
      title: 'Sandakphu Phalut Trek',
      duration: '6 Nights - 7 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sandakphu_View.jpg',
    },
    {
      title: 'Dzongri Trek in Sikkim',
      duration: '5 Nights - 6 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Dzongri_trek.jpg',
    },
    {
      title: 'Roopkund Mystery Lake Trek',
      duration: '7 Nights - 8 Days',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Roopkund_Lake.jpg',
    },
  ],
};



const categories = Object.keys(packageData);

const InterestPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hill Station');

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Packages By Interest
      </Typography>

      {/* Category Buttons */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 5 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            color={selectedCategory === category ? 'warning' : 'inherit'}
            onClick={() => setSelectedCategory(category)}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              px: 3,
              fontWeight: 'bold',
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Package Cards */}
      <Grid container spacing={3}>
        {packageData[selectedCategory]?.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} >
            <Card elevation={3} sx={{ borderRadius: 2, width: '165px' }}>
              <CardMedia
                component="img"
                height="160"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography fontWeight="600" fontSize='16px'>{pkg.title}</Typography>
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
