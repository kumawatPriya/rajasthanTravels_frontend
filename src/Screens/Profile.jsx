import React, { useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  TextField,
  Typography,
  Divider
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProfilePage = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate()
  const [avatar, setAvatar] = useState('/user.png');

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  const backtohome = ()=>{
    navigate('/')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to bottom right, #e3f2f7, #f8fbfc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 900,
          height: '90vh',
          display: 'flex',
          borderRadius: 5,
          overflow: 'hidden',
          boxShadow: 10,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.85)',
        }}
      >
        {/* Left Panel - Profile Overview */}
        <Box
          sx={{
            width: '35%',
            background: '#18a5b2',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            gap: 2,
          }}
        >
          <Box sx={{ position: 'relative', width: 110, height: 110 }}>
            <Avatar
              src={avatar}
              sx={{ width: 110, height: 110, border: '3px solid #fff' }}
            />
            <IconButton
              size="small"
              onClick={handleAvatarClick}
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#fff',
                color: '#18a5b2',
                border: '2px solid #18a5b2',
                '&:hover': {
                  backgroundColor: '#f2f2f2',
                },
              }}
            >
              <AddAPhotoIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
          </Box>

          <Typography variant="h6" fontWeight={600}>
            John Doe
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)">
            johndoe@example.com
          </Typography>

          <Divider sx={{ width: '60%', borderColor: 'rgba(255,255,255,0.4)', my: 2 }} />

          <Stack spacing={1} width="100%" alignItems="center">
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                textTransform: 'none',
                width: '80%',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Change Password
            </Button>
            <Button
              variant="outlined"
            
              onClick={backtohome}
              sx={{
                width: '80%',
                textTransform: 'none',
                borderColor: '#fff',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,0,0,0.1)',
                },
              }}
            >
          <FaArrowLeft  style={{marginRight: '10px'}}/>    Back to Home
            </Button>
          </Stack>
        </Box>

        {/* Right Panel - Edit Form */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Typography variant="h5" fontWeight={500} color="#0d4662" fontFamily='InterRegular'>
            Edit Profile
          </Typography>

          <Stack spacing={2}>
            <TextField label="First Name" fullWidth defaultValue="John" />
            <TextField label="Last Name" fullWidth defaultValue="Doe" />
            <TextField label="Email Address" fullWidth defaultValue="johndoe@example.com" />
            <TextField label="Phone Number" fullWidth defaultValue="+91 9876543210" />
          </Stack>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#18a5b2',
              textTransform: 'none',
              fontWeight: 500,
              fontFamily: 'InterRegular',
              borderRadius: 2,
              width: '50%',
              alignSelf: 'center',
              '&:hover': {
                backgroundColor: '#15919d',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfilePage;
