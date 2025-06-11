import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Link,
  Rating,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const PriceBox = ({ onCheckAvailabilityClick, details }) => {
  // Safely parse the price and calculate 10% higher value
  const actualPrice = parseInt(details?.price?.replace(/,/g, '')) || 0;
  const oldPrice = Math.round(actualPrice * 1.1);

  // Format number with commas (e.g., 25300 → "25,300")
  const formatPrice = (num) => num.toLocaleString('en-IN');

  return (
    <Box
      sx={{
        border: '1px solid #fdd',
        borderRadius: 2,
        overflow: 'hidden',
        width: 360,
        boxShadow: 1,
        backgroundColor: '#fff'
      }}
    >
      {/* Discount Banner */}
      <Box sx={{ backgroundColor: '#ffe6e6', px: 2,  py: 1}}>
        <Typography
          color="#c62828"
          fontWeight="600"
          fontSize="13px"
          textAlign="right"
        >
          Save up to 10%
        </Typography>
      </Box>

      {/* Price Info */}
      <Box sx={{ p: 2 }}>
        {/* Star Rating */}

        {/* Prices */}
        <Stack direction="row" spacing={1} alignItems="baseline">
          <Typography
            fontSize="16px"
            sx={{ textDecoration: 'line-through', color: '#888' }}
          >
            ₹{formatPrice(oldPrice)}
          </Typography>
          <Typography fontSize="25px" fontWeight="600" color="#c62828">
            ₹{formatPrice(actualPrice)}
          </Typography>
        </Stack>

        <Typography fontSize="14px" color="text.secondary" mb={1}>
          per person
        </Typography>

        {/* Free Cancellation */}
        <Typography fontSize="14px" color="green" fontWeight={500}>
          ✅ Free cancellation up to 24 hours before departure
        </Typography>

        {/* Check Availability Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#0071eb',
            textTransform: 'none',
            fontWeight: '500',
            fontSize: '15px',
            borderRadius: 4,
            // py: 1,
            '&:hover': {
              backgroundColor: '#005ecb',
            },
          }}
          onClick={onCheckAvailabilityClick}
        >
          Check availability
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Reserve Now */}
        <Stack direction="row" alignItems="flex-start" spacing={1}>
          <CreditCardIcon fontSize="small" sx={{ mt: '2px' }} />
          <Typography fontSize="14px" color="text.secondary">
            <Link href="#" underline="hover" fontWeight="500">
              Reserve now & pay later
            </Link>{' '}
            to book your spot and pay nothing today.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default PriceBox;
