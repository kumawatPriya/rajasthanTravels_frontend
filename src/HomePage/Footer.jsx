import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: 'linear-gradient(130deg, #204066, #21807d)', color: '#ffffff', pt: 6, pb: 2 }}>
      <Box sx={{ px: { xs: 3, md: 10 }, maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={6}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 2 }}>
              Viatra
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', mb: 3 }}>
              Discover unforgettable journeys and explore breathtaking destinations with us.
            </Typography>

            {/* Newsletter Subscription */}
            <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 500, mb: 1 }}>
              Subscribe to our Newsletter
            </Typography>
            <Stack direction="row" spacing={1} component="form" onSubmit={(e) => e.preventDefault()} sx={{width: {sm: '60%', md: '72%'}}}>
              <Box
                component="input" type="email" placeholder="Enter your email"
                required
                sx={{ flex: 1, px: 2, py: 1, borderRadius: '4px', border: 'none', outline: 'none', width: {xs: '30%',sm:'100%', md: '100%'},
                  fontSize: '14px', backgroundColor: '#f5f5f5', color: '#4d4d4d',
                  '&::placeholder': { color: '#999',},}}/>
              <Box component="button" type="submit"
                sx={{ backgroundColor: '#000', color: '#fff',
                  border: 'none', px: 2, fontSize: {xs: '12px', sm: '12px', md: '14px' }, borderRadius: '4px',
                  fontWeight: 500, cursor: 'pointer',transition: '0.3s',
                  '&:hover': {backgroundColor: '#428cd6',},}} >
                Subscribe
              </Box>
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff', mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              {['About Us', 'Blog', 'Careers', 'Contact'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="none"
                  sx={{
                    color: '#fff',
                    fontSize: '14px',
                    transition: '0.3s',
                    '&:hover': { color: "#d3e9ff" },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Support Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff', mb: 2 }}>
              Support
            </Typography>
            <Stack spacing={1}>
              {['Help Center', 'Terms', 'Privacy', 'FAQs'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="none"
                  sx={{
                    color: '#fff',
                    fontSize: '14px',
                    transition: '0.3s',
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff', mb: 2 }}>
              Get in Touch
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center" color='#fff'>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">New Delhi, India</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">support@viatra.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91 9876543210</Typography>
              </Stack>
              <Stack direction="row" spacing={1} mt={2}>
                {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      backgroundColor: 'transparent',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#d3e9ff',
                      },
                      transition: '0.3s',
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#fff', my: 2 }} />

        <Typography variant="caption" color="#fff" align="center" display="block">
          &copy; {new Date().getFullYear()} Viatra. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
