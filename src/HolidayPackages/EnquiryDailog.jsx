import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, TextField, Button, Typography, Stack, Box, IconButton, CircularProgress} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import { showGlobalSnackbar } from "../Atoms/GlobalSnackbar";
import { Config } from "../Utils/Config";

const EnquiryDialog = ({ open, onClose, packageDetails }) => {
    const { title } = packageDetails || {};
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            selectedDate: "",
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
            selectedDate: Yup.string().required("Date is required"),
            message: Yup.string(),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const response = await axios.post(`${Config?.Contact_us}`, {
                    ...values,
                    packageTitle: title,
                });
                if (response.status === 200) {
                    showGlobalSnackbar(response?.data?.message || "Enquiry submitted!", "success");
                    resetForm();
                    onClose();
                } else {
                    showGlobalSnackbar("Something went wrong. Please try again.", "error");
                }
            } catch (error) {
                console.error("API error:", error);
                showGlobalSnackbar("Failed to submit the form. Please try again later.", "error");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{ sx: { borderRadius: 3, background: "#fdfefe", p: 0 } }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2, backgroundColor: '#f0f8ff' }}>
                <Typography variant="h6" fontWeight={600} fontSize='16px' sx={{ pt: 0.8, display: 'flex', alignItems: 'initial', gap: '5px' }}>
                    <TravelExploreIcon sx={{ mb: "-4px", mr: 0.4, color: "#18a5b2" }} />
                    Enquire for : <span style={{ color: "#18a5b2", fontSize: '15px !important', fontWeight: 500 }}>{title}</span>
                </Typography>
                <IconButton onClick={onClose} sx={{ borderRadius: '0px' }}><CloseIcon /></IconButton>
            </Box>

            <form onSubmit={formik.handleSubmit}>
                <DialogContent sx={{ px: 3, pb: 2, pt: 3 }}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="First Name"
                                name="firstName"
                                fullWidth
                                size="small"
                                variant="outlined"
                                required
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                            <TextField
                                label="Last Name"
                                name="lastName"
                                fullWidth
                                size="small"
                                variant="outlined"
                                required
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </Stack>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            size="small"
                            variant="outlined"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="tel"
                            fullWidth
                            size="small"
                            variant="outlined"
                            required
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                        <TextField
                            label="Preferred Date"
                            name="selectedDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            size="small"
                            variant="outlined"
                            required
                            value={formik.values.selectedDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.selectedDate && Boolean(formik.errors.selectedDate)}
                            helperText={formik.touched.selectedDate && formik.errors.selectedDate}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={3}
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Write your query or special request..."
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button onClick={onClose} variant="outlined" sx={{ textTransform: "none", borderRadius: 2, fontWeight: 500, px: 3 }}>Cancel</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#18a5b2",
                            borderRadius: 2,
                            px: 4,
                            fontWeight: 600,
                            "&:hover": { backgroundColor: "#15929d" }
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={20} sx={{ color: "#fff" }} />
                        ) : (
                            "Submit Enquiry"
                        )}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EnquiryDialog;
