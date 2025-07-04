import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Stack, CircularProgress, Link, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logoImg2 from "../images/viatra_logo.png"
import { FaArrowLeft } from "react-icons/fa";
import { Config } from "../Utils/Config";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/AuthSlice";
import { showGlobalSnackbar } from "../Atoms/GlobalSnackbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Config?.Login_Api}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      if (result.status === true) {
        const { userId, token, email } = result;
        dispatch(setCredentials({
          userId: result.userId,
          token: result.token,
          email: result.email,
        }));
        const userData = { userId, token, email, };
        localStorage.setItem("User", JSON.stringify(userData));
        showGlobalSnackbar(result.message, "success");
        setTimeout(() => navigate("/"), 2000);
      } else {
        showGlobalSnackbar(result?.message, "error");
      }
    } catch (error) {
      showGlobalSnackbar('Something went wrong, please try agian ', "error")
    }
    setLoading(false);
  };

  // const handleLogin = async()=>{
  //   try{
  //     const response = await 
  //   }
  // }

  const backtohome = () => {
    navigate('/')
  }

  return (
    <>

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
            p: { xs: 4, md: 5 },
            width: { xs: "100%", sm: "400px", md: '420px' },
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Stack flexDirection='row' alignItems='baseline' mb={2} justifyContent='center'>
            <Typography variant="h5"
              fontWeight="bold"
              textAlign="center" fontSize={{ xs: '14px', sm: '16px', md: '23px' }}
              sx={{ color: "#18a5b2", textTransform: "uppercase", letterSpacing: 1 }}>  Welcome to</Typography> <img src={logoImg2} alt="viatra" width='38%' style={{ marginLeft: '4px', marginTop: '4px', position: 'relative', top: '2px' }} />
          </Stack>

          <Typography variant="body2" textAlign="center" color="text.secondary" mb={3}>
            Login to your account
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              disabled={loading} // ✅ disable when loading
              onClick={handleLogin}
              sx={{
                py: 1,
                fontWeight: 500,
                backgroundColor: "#18a5b2",
                '&:hover': { backgroundColor: "#128795" }
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Log In"
              )}
            </Button>
          </Stack>

          <Typography mt={3} textAlign="center" variant="body2" color="text.secondary">
            Don’t have an account?{" "}
            <Link href="/signup" style={{ color: "#18a5b2", fontWeight: 500 }}>
              Sign Up
            </Link>
          </Typography>

          <Link href='/'><Stack justifyContent='center' alignItems='center' mt='10px' sx={{ cursor: 'pointer' }}>
            <Typography sx={{ textTransform: 'capitalize', fontSize: '14px', color: '#4646ff' }}> <FaArrowLeft style={{ marginRight: '2px', marginBottom: '2px', fontSize: '13px', color: '#5151ff' }} /> Back to Home</Typography>
          </Stack></Link>
        </Paper>
      </Box>
    </>
  );
};

export { Login };
