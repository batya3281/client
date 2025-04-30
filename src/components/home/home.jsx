// import { useDispatch, useSelector } from "react-redux";
// import { Outlet, useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
// import "./home.css"
// import { useState } from "react";

// export const Home = () => {
//     const navigate = useNavigate();
//     const [num,setNum]=useState(-1);
//     const getPropertiesForSale = () => {
//         navigate("propertiesForSale");
//     }
//     const getRequiredProperties = () => {
//         navigate("requiredProperties");
//     }
//     const getFavoriteProperties = () => {
//         navigate("favoriteProperties");
//     }
//     return <div>
//         <div id="header">
//             <div id="welcome">welcome {sessionStorage.getItem("userName")}</div>
//             <img src={"logo.png"} id="logo"></img>
//         </div>
//         <nav>
//             <Button id={num === 0? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
//                 setNum(0);
//                 getPropertiesForSale();}
//             } sx={{ textTransform: 'lowercase' }} >
//                 Your properties for sale
//             </Button>
//             <Button id={num === 1? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
//                 setNum(1);
//                 getRequiredProperties()
//             }} sx={{ textTransform: 'lowercase' }} className={num === 1? "selcet" : "unSelect"}>
//                 Your properties for purchase
//             </Button>
//             <Button id={num === 2? "selected2" : "b"} variant="contained" disableElevation onClick={()=>{
//                 setNum(2);
//                 getFavoriteProperties();}} sx={{ textTransform: 'lowercase' }}>
//                 Your favorite properties
//             </Button>
//         </nav>

//         <div id="main">
//             <Outlet></Outlet></div>
//     </div>
// }
import "./home.css";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


// Custom theme with brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
});

export const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userName = sessionStorage.getItem("userName") || "Guest";

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    // Navigate to login page
    navigate("/welcome");
  };

  const navigateTo = (path, tabIndex) => {
    setActiveTab(tabIndex);
    navigate(path);
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Box className="loading-container">
          <CircularProgress color="primary" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading your real estate dashboard...
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="home-container">
        <AppBar position="static" color="secondary" elevation={1}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <img src="/logo.png" alt="Real Estate Logo" className="header-logo" />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ ml: 2, color: 'text.primary', display: { xs: 'none', md: 'flex' } }}
                >
                  Premium Real Estate
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}>
                  Welcome, {userName}
                </Typography>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                  aria-label="account"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    <HomeIcon fontSize="small" sx={{ mr: 1 }} />
                    Home
                  </MenuItem>
                  <MenuItem component={Link} to="/about" onClick={handleClose}>
                    <InfoIcon fontSize="small" sx={{ mr: 1 }} />
                    About
                  </MenuItem>
                  <MenuItem onClick={() => { handleClose(); handleLogout(); }}>
                    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box className="nav-tabs">
          <Button
            className={activeTab === 0 ? "tab-selected" : "tab-button"}
            onClick={() => navigateTo("propertiesForSale", 0)}
            startIcon={<i className="fas fa-home"></i>}
          >
            Properties For Sale
          </Button>
          <Button
            className={activeTab === 1 ? "tab-selected" : "tab-button"}
            onClick={() => navigateTo("requiredProperties", 1)}
            startIcon={<i className="fas fa-search"></i>}
          >
            Properties For Purchase
          </Button>
          <Button
            className={activeTab === 2 ? "tab-selected" : "tab-button"}
            onClick={() => navigateTo("favoriteProperties", 2)}
            startIcon={<i className="fas fa-heart"></i>}
          >
            Favorite Properties
          </Button>
        </Box>

        <Container className="main-content">
          {activeTab === -1 ? (
            <WelcomeDashboard />
          ) : (
            <Outlet />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

// Welcome Dashboard Component
const WelcomeDashboard = () => {
  return (
    <Box className="welcome-dashboard">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Premium Real Estate
      </Typography>
      <Typography variant="body1" paragraph>
        Your trusted partner in finding the perfect property. Browse your listings, search for new properties, 
        or check your favorites - all in one place.
      </Typography>
      <Box className="dashboard-stats">
        <Box className="stat-card">
          <Typography variant="h3">24</Typography>
          <Typography variant="body2">Active Listings</Typography>
        </Box>
        <Box className="stat-card">
          <Typography variant="h3">12</Typography>
          <Typography variant="body2">New Properties</Typography>
        </Box>
        <Box className="stat-card">
          <Typography variant="h3">8</Typography>
          <Typography variant="body2">Saved Favorites</Typography>
        </Box>
      </Box>
    </Box>
  );
};
