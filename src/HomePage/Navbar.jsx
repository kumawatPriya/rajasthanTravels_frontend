import React, { useState } from "react";
import logoImg2 from "../images/viatra_logo.png";
import { Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, useMediaQuery, useTheme,} from "@mui/material";
import { BsFillHandbagFill } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import userIcon from "../images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { showGlobalSnackbar } from "../Atoms/GlobalSnackbar";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = () => {
  localStorage.removeItem("User");
  showGlobalSnackbar("You have logged out successfully", "success");
  setTimeout(() => {
    navigate("/login");
  }, 1500);
};


  const nav = [
    { title: "Home", link: "/" },
    { title: "Holiday Packages", link: "/holidayPackages" },
    { title: "Destinations", link: "/destinations" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blog" },
  ];

  const navigatetoProfile = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <>
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1}
      >
        {/* Logo */}
        <Stack className="logo-img" sx={{width: {xs: '70%', sm: '18%', md: '18%'}, height: '50px'}}>
          <img
            src={logoImg2}
            alt="viatra"
            width="57%"
            style={{ marginLeft: {xs: '0px', md:"15px"}, marginTop: {xs: '-10px', md:"2px"} }}
          />
        </Stack>

    
        {
            isMobile && <Stack mt="4px" flexDirection="row" gap="20px" alignItems="center">
          <BsFillHandbagFill color="#0d4662" fontSize="20px" />
          <Avatar
            alt="User"
            src={userIcon}
            sx={{ width: {xs: 22, md: 24}, height: {xs: 22, md: 24}, cursor: "pointer", mt: {xs: '2px'} }}
            onClick={handleAvatarClick}
          />
        </Stack>
        }
        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon fontSize="20px"  sx={{mt: '6px',ml: '6px', fill:"black !important"}} />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 250 }}>
                {nav.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component={Link} to={item.link} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div className="navbar-main-list" style={{ display: "flex", gap: "35px" }}>
            {nav.map((list, index) => (
              <ul key={index} style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <Link to={list.link} style={{ textDecoration: "none", color: "#000" }}>
                  <li style={{fontSize: '15px', fontFamily: 'InterRegular'}}>{list.title}</li>
                </Link>
              </ul>
            ))}
          </div>
        )}

        {/* Cart + Avatar */}
       {!isMobile && <Stack mt="4px" flexDirection="row" gap="20px" alignItems="center">
          <BsFillHandbagFill color="#0d4662" fontSize="20px" />
          <Avatar
            alt="User"
            src={userIcon}
            sx={{ width: 24, height: 24, cursor: "pointer" }}
            onClick={handleAvatarClick}
          />
        </Stack>}

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 4,
            sx: {
              borderRadius: 2,
              mt: 2,
              padding: "0px",
              "& .MuiList-root": { padding: "0px" },
              "& .MuiMenuItem-root": {
                px: 1.5,
                py: 0.8,
                fontSize: "0.95rem",
                "&:hover": { backgroundColor: "#f0f0f0" },
              },
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
         {isLoggedIn ? (
  <>
    <MenuItem onClick={navigatetoProfile} sx={{ px: 2, py: 1 }}>
      <ListItemIcon>
        <AccountCircleIcon fontSize="small" sx={{ color: "#18a5b2" }} />
      </ListItemIcon>
      <ListItemText
        primary="Profile"
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
    </MenuItem>
    <MenuItem onClick={handleLogout} sx={{ px: 2, py: 1 }}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" sx={{ color: "#e53935" }} />
      </ListItemIcon>
      <ListItemText
        primary="Logout"
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
    </MenuItem>
  </>
) : (
  <>
    <MenuItem onClick={() => navigate("/login")} sx={{ px: 2, py: 1 }}>
      <ListItemIcon>
        <LoginIcon fontSize="small" sx={{ color: "#18a5b2" }} />
      </ListItemIcon>
      <ListItemText
        primary="Login"
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
    </MenuItem>
    <MenuItem onClick={() => navigate("/signup")} sx={{ px: 2, py: 1 }}>
      <ListItemIcon>
        <PersonAddIcon fontSize="small" sx={{ color: "#18a5b2" }} />
      </ListItemIcon>
      <ListItemText
        primary="Signup"
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
    </MenuItem>
  </>
)}

        </Menu>
      </Stack>
    </>
  );
}

export { Navbar };
