import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Paper, FormControl, InputAdornment, IconButton, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Config } from '../Utils/Config';
import { showGlobalSnackbar } from '../Atoms/GlobalSnackbar';

const Contact = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);
    const labelStyles = {
        fontFamily: "'GeneralSansMedium', sans-serif",
        fontSize: "13px",
        color: "#3C4959",
    };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            selectedDate: null,
            message: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            phone: Yup.string()
                .matches(/^\d{10}$/, "Phone number must be 10 digits")
                .required("Phone number is required"),
            selectedDate: Yup.date()
                .nullable()
                .required("Date is required"),
            message: Yup.string(),
        }),
        onSubmit:  async (values, { resetForm }) => {
    try {
        const response = await axios.post(`${Config?.Contact_us}`, values);
        if (response.status === 200) {
            showGlobalSnackbar(response?.data?.message , "success");
            resetForm(); // Reset form after successful submission
        } else {
            showGlobalSnackbar('Something went wrong. Please try again.', "error");
        }
    } catch (error) {
        console.error("API error:", error);
        showGlobalSnackbar('Failed to submit the form. Please try again later.', "error");
    }
}

    });

   
    return (
        <>
        
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, backgroundColor: '#fff', width: {xs:'95%', md: '88%'}, margin: 'auto' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="stretch">
                {/* Left Info Section */}
                <Stack flex={1} spacing={3}>
                    <Typography variant="subtitle2" color="#18a5b2">
                        Contact Us
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" fontSize='29px'>
                        Contact With Us For Your Any Help
                    </Typography>
                    <Typography variant="body1" maxWidth="500px" fontSize='15px'>
                        We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more than buying individual tickets.
                    </Typography>

                    {/* Info Cards */}
                    <Stack spacing={2.4}>
                        <Stack direction="row" alignItems="center" spacing={2} padding='8px 12px' height='79px' boxShadow='1px 2px 4px #eeeeee' borderRadius='4px'>
                            <Box sx={{ backgroundColor: '#e0f5ffb8', borderRadius: 2, p: 1.5, display: 'flex', alignItems: 'center', }}>
                                <LocationOnIcon sx={{ color: '#18a5b2' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="error">
                                    Our Location
                                </Typography>
                                <Typography fontWeight="600" color='#4c4c4c' fontSize={{xs: '14px'}}>
                                    Connaught Place, New Delhi 110001, India
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2} padding='8px 12px' height='79px' boxShadow='1px 2px 4px #eeeeee' borderRadius='4px'>
                            <Box sx={{ backgroundColor: '#e0f5ffb8', borderRadius: 2, p: 1.5, display: 'flex', alignItems: 'center', }}>
                                <PhoneIcon sx={{ color: '#18a5b2' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="error">
                                    Phone Number
                                </Typography>
                                <Typography fontWeight="600" color='#4c4c4c' fontSize={{xs: '14px'}}>+91 8765432111</Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2} padding='8px 12px' height='79px' boxShadow='1px 2px 4px #eeeeee' borderRadius='4px'>
                            <Box sx={{ backgroundColor: '#e0f5ffb8', borderRadius: 2, p: 1.5, display: 'flex', alignItems: 'center', }} >
                                <EmailIcon sx={{ color: '#18a5b2' }} />
                            </Box>
                            <Box>
                                <Typography variant="caption" color="error">
                                    Send Email
                                </Typography>
                                <Typography fontWeight="600" color='#4c4c4c' fontSize={{xs: '14px'}}>Hellosupporttravel@Gmail.Com</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Form Section */}
                <Paper elevation={0} sx={{ flex: 1, p: {xs: '32px 22px',md:4}, backgroundColor: '#f0f4ff', borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Send Your Message!
                    </Typography>
                    <Typography variant="body2" mb={3}>
                        We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience.
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={1.4}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <FormControl>
                                    <label style={labelStyles}>First Name</label>
                                    <TextField fullWidth placeholder="Enter First Name" variant="outlined" size="small" name='firstName'
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        sx={{
                                            // bgcolor: 'white',
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            },
                                            '& .MuiInputBase-input::placeholder': {
                                                fontSize: '14px', color: '#3C4959', opacity: 0.7
                                            },
                                        }} />
                                </FormControl>
                                <FormControl>
                                    <label style={labelStyles}>Last Name</label>
                                    <TextField fullWidth placeholder="Enter Last Name" variant="outlined" size="small" name='lastName'
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        sx={{
                                             '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            },
                                            '& .MuiInputBase-input::placeholder': {
                                                fontSize: '14px', color: '#3C4959', opacity: 0.7
                                            },
                                        }} />
                                </FormControl>

                            </Stack>
                            <FormControl>
                                <label style={labelStyles}>Email</label>
                                <TextField fullWidth placeholder="Enter Email" variant="outlined" size="small"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            },
                                        '& .MuiInputBase-input::placeholder': {
                                            fontSize: '14px', color: '#3C4959', opacity: 0.7
                                        },
                                    }} />
                            </FormControl>
                            <FormControl>
                                <label style={labelStyles}>Phone Number</label>
                                <TextField fullWidth placeholder="Enter Phone No" variant="outlined" type='number' size="small"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    sx={{ '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }, '& .MuiInputBase-input::placeholder': { fontSize: '14px', color: '#3C4959', opacity: 0.7 }, }} />
                            </FormControl>
                            <FormControl>
                                <label style={labelStyles}>Select Date</label>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        open={open}
                                        onOpen={() => setOpen(true)}
                                        onClose={() => setOpen(false)}
                                        value={formik.values.selectedDate}
                                        onChange={(newValue) => formik.setFieldValue("selectedDate", newValue)}
                                        onBlur={formik.handleBlur}
                                        enableAccessibleFieldDOMStructure={false} //  FIXES THE ERROR
                                        slots={{
                                            textField: (params) => (
                                                <TextField
                                                    {...params}
                                                    placeholder="Select Date"
                                                    fullWidth
                                                    name="selectedDate"
                                                    error={formik.touched.selectedDate && Boolean(formik.errors.selectedDate)}
                                                    helperText={formik.touched.selectedDate && formik.errors.selectedDate}
                                                    size="small"
                                                    onClick={() => setOpen(true)}
                                                    sx={{
                                                      '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            },
                                                        '& .MuiInputBase-input': {
                                                            fontSize: "14px",
                                                            color: "#3C4959",
                                                        },
                                                        '& .MuiInputBase-input::placeholder': {
                                                            fontSize: "14px",
                                                            color: "#3C4959",
                                                            opacity: 0.7,
                                                        },
                                                    }}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                {selectedDate ? (
                                                                    <IconButton
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setSelectedDate(null);
                                                                        }}
                                                                    >
                                                                        <CloseIcon sx={{ fontSize: '17px' }} />
                                                                    </IconButton>
                                                                ) : (
                                                                    <IconButton onClick={() => setOpen(true)}>
                                                                        <CalendarMonthIcon sx={{ fontSize: '17px' }} />
                                                                    </IconButton>
                                                                )}
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            ),
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                            <FormControl>
                                <label style={labelStyles}>Message</label>
                                <TextField fullWidth placeholder="Enter Message..." multiline rows={4} variant="outlined"
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    sx={{ '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }, '& .MuiInputBase-input::placeholder': { fontSize: '14px', color: '#3C4959', opacity: 0.7 }, }} />
                            </FormControl>

                            <Button variant="contained" type="submit"
                                endIcon={<SendIcon style={{ fontSize: '16px' }} />}
                                sx={{
                                    alignSelf: 'flex-start', fontSize: '13px', mt: 2, px: 4, py: 1.1,
                                    backgroundColor: '#18a5b2',
                                    '&:hover': { backgroundColor: '#148995' },
                                    borderRadius: 10,
                                }}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Stack>

        </Box>
        </>
    );
};

export default Contact;
