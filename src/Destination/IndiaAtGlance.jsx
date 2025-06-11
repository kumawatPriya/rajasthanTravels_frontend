import React from 'react';
import { Box, Grid, Typography, Divider, Stack } from '@mui/material'
import taj_img from "../../src/images/india-agra-taj-majal-at-sunrise-1152168512-1920x1280.webp"

const IndiaAtAGlance = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
      <Stack container flexDirection={{xs:'column',md:'row'}} alignItems="flex-start" gap={1}>
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} fontFamily='Source_serif_pro' fontSize='34px' sx={{ mb: 2 }}>
            India at a glance
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 508, fontSize: '14px' }}>
            Roam the sari lined streets, marvel at the majestic Taj Mahal, see snow-capped saffron mountains and go behind-the-scenes of the Bollywood film industry. From the royal history in Rajasthan to the bustling bazaars, your expert Viatra Travel Director will guide you through the colour and chaos of India.
          </Typography>

          {/* FACT GRID */}
          <Grid container spacing={8}>
            {/* Column 1 */}
            <Grid item xs={6} width={{xs:'34%',md:'28%'}}>
              <Typography variant="body2" fontSize='12px'>Currency</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>Indian rupee</Typography>
              <Divider sx={{ mt: 1, mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Winter avg</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>50°F</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Summer avg</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>93.2°F</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Time Zone</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>GMT+5:30</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />
            </Grid>

            {/* Column 2 */}
            <Grid item xs={6} width={{xs:'40%',md:'28%'}}>
              <Typography variant="body2" fontSize='12px'>Capital City</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>New Delhi</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Language</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>Hindi, English</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Good morning</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>Shubh prabhaat</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />

              <Typography variant="body2" fontSize='12px'>Good evening</Typography>
              <Typography variant="h6" fontSize={{xs:'17px',md:'18px'}} fontWeight={600} color='#3a3c3a' fontFamily='Source_serif_pro'>Susandhya</Typography>
              <Divider sx={{ my: 1,  mb: 3, borderColor:'#726969' , borderWidth: '0.5px'}} />
            </Grid>
          </Grid>

          {/* Bottom Quote */}
          <Box sx={{ mt: 2, borderTop: '1px solid red', pt: 1 , width: '92%'}}>
            <Typography variant="body1" fontWeight={500} fontFamily='InterRegular' fontSize='13px'>
              "I'll show you how to navigate the buzzing cities of India, and go beyond to find soul-stirring temples, beautiful mountains and ancient wildlife forests."
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT SIDE IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={taj_img}
            alt="Taj Mahal"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Stack>
    </Box>
  );
};

export default IndiaAtAGlance;
