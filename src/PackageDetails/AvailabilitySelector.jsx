import React from 'react';
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  InputBase,
  Stack,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/material/styles';

// Custom styled select to match rounded pill look
const RoundedSelect = styled(Select)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 999,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  minWidth: 140,
  height: 44,
  '& .MuiSelect-icon': {
    color: theme.palette.text.primary,
  },
}));

const AvailabilitySelector = React.forwardRef((props, ref) => {
  const [participants, setParticipants] = React.useState('Adult x 2');
  const [date, setDate] = React.useState('Jun 12, 2025');
  const [language, setLanguage] = React.useState('English');

  return (
    <Box   ref={ref}
      sx={{
        backgroundColor: '#0d2242',
        borderRadius: 4,
        p: 3,
        maxWidth: '100%',
        mt: 2
      }}
    >
      <Typography
        fontWeight="bold"
        color="white"
        fontSize="18px"
        mb={2}
      >
        Select participants, date, and language
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        {/* Participants Select */}
        <RoundedSelect
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          startAdornment={<PeopleAltIcon sx={{ mr: 1 }} />}
        >
          <MenuItem value="Adult x 1">Adult x 1</MenuItem>
          <MenuItem value="Adult x 2">Adult x 2</MenuItem>
          <MenuItem value="Adult x 3">Adult x 3</MenuItem>
        </RoundedSelect>

        {/* Date Select */}
        <RoundedSelect
          value={date}
          onChange={(e) => setDate(e.target.value)}
          startAdornment={<CalendarTodayIcon sx={{ mr: 1 }} />}
        >
          <MenuItem value="Jun 12, 2025">Jun 12, 2025</MenuItem>
          <MenuItem value="Jun 13, 2025">Jun 13, 2025</MenuItem>
        </RoundedSelect>

        
      </Stack>

      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#0071eb',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          borderRadius: 999,
          py: 1.5,
          '&:hover': {
            backgroundColor: '#005ecb',
          },
        }}
      >
        Check availability
      </Button>
    </Box>
  );
});

export default AvailabilitySelector;
