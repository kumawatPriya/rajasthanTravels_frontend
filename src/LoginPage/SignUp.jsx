import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Stack} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from "react-icons/fa";
import { Config } from "../Utils/Config";

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupApi = async () => {
        const response = await fetch(`${Config?.Signup_Api}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const resSignUp = await response.json();
        if (resSignUp) {
            toast.success("Your account has been created. Please login to continue.");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } else {
            toast.error("Something went wrong. Try again.");
        }
    };

    const backtohome = () => {
        navigate('/')
    }

    return (
        <>
            <ToastContainer position="top-center" />
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "#f7fafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 4, md: 6 },
                        width: { xs: "100%", sm: "400px" },
                        borderRadius: 4,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        textAlign="center"
                        mb={2}
                        sx={{ color: "#18a5b2", textTransform: "uppercase", letterSpacing: 1 }}
                    >
                        Create Your Account
                    </Typography>

                    <Typography variant="body2" textAlign="center" color="text.secondary" mb={3}>
                        Sign up to get started with Viatra
                    </Typography>

                    <Stack spacing={2}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} sx={{ fontSize: '14px' }} />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={signupApi}
                            sx={{
                                py: 1,
                                fontWeight: 500,
                                fontSize: "0.95rem",
                                backgroundColor: "#18a5b2",
                                '&:hover': {
                                    backgroundColor: "#128795"
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Stack>

                    <Typography mt={3} textAlign="center" variant="body2" color="text.secondary">
                        Already have an account?{" "}
                        <Link to="/login" style={{ color: "#18a5b2", fontWeight: 500 }}>
                            Log In
                        </Link>
                    </Typography>

                    <Stack justifyContent='center' alignItems='center' pt='10px' onClick={backtohome} sx={{ cursor: 'pointer' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontSize: '14px', color: '#4646ff' }}> <FaArrowLeft style={{ marginRight: '2px', marginBottom: '2px', fontSize: '13px', color: '#5151ff' }} /> Back to Home</Typography>
                    </Stack>
                </Paper>
            </Box>
        </>
    );
};

export { Signup };
