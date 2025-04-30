import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Typography, 
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Fade
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './welcome.css';

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
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
  },
});

// Featured properties data
const featuredProperties = [
  {
    id: 1,
    title: 'Luxury Apartment',
    location: 'Downtown',
    price: '$850,000',
    image: 'https://images.unsplash.com/photo',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    beds: 3,
    baths: 2,
    area: '1,800 sq ft'
  },
  {
    id: 2,
    title: 'Modern Villa',
    location: 'Beachfront',
    price: '$1,250,000',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    beds: 4,
    baths: 3,
    area: '2,500 sq ft'
  },
  {
    id: 3,
    title: 'Cozy Townhouse',
    location: 'Suburban Area',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    beds: 2,
    baths: 2,
    area: '1,200 sq ft'
  },
];

export const Welcome = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      setAnimateHero(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/logon');
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Box className="loading-container">
          <CircularProgress color="primary" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading...
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }
  return (
   
    <ThemeProvider theme={theme}>
       
      <Box className="welcome-page">
        {/* Header */}
        <Box className="welcome-header">
          <Container maxWidth="lg">
            <Box className="header-content">
              <img src="/logo.png" alt="Real Estate Logo" className="welcome-logo" />
              <Box className="header-buttons">
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={handleLogin}
                  className="header-button"
                >
                  Sign In
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleSignup}
                  className="header-button"
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box className="hero-section">
          <Container maxWidth="lg">
            <Fade in={animateHero} timeout={1000}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h1" className="hero-title">
                    Find Your Dream Property
                  </Typography>
                  <Typography variant="h5" component="h2" className="hero-subtitle">
                    Your trusted partner in real estate
                  </Typography>
                  <Typography variant="body1" className="hero-description">
                    We connect buyers and sellers with the perfect properties. 
                    Browse our exclusive listings and find your dream home today.
                  </Typography>
                  <Box className="hero-buttons">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      onClick={handleSignup}
                      className="hero-button"
                    >
                      Get Started
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className="hero-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Luxury Home" 
                      className="hero-image"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Fade>
          </Container>
        </Box>

        {/* Featured Properties */}
        <Box className="featured-section">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="section-title">
              Featured Properties
            </Typography>
            <Typography variant="body1" className="section-description">
              Explore our handpicked selection of premium properties
            </Typography>
            
            <Grid container spacing={4} className="featured-properties">
              {featuredProperties.map((property) => (
                <Grid item xs={12} sm={6} md={4} key={property.id}>
                  <Card className="property-card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={property.image}
                      alt={property.title}
                      className="property-image"
                    />
                    <CardContent className="property-content">
                      <Typography variant="h6" component="h3" className="property-title">
                        {property.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" className="property-location">
                        {property.location}
                      </Typography>
                      <Typography variant="h6" component="p" className="property-price">
                        {property.price}
                      </Typography>
                      <Box className="property-details">
                        <Typography variant="body2" className="property-detail">
                          <span className="detail-icon">🛏️</span> {property.beds} Beds
                        </Typography>
                        <Typography variant="body2" className="property-detail">
                          <span className="detail-icon">🚿</span> {property.baths} Baths
                        </Typography>
                        <Typography variant="body2" className="property-detail">
                          <span className="detail-icon">📏</span> {property.area}
                        </Typography>
                      </Box>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        fullWidth
                        className="property-button"
                        onClick={handleLogin}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Box className="services-section">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="section-title">
              Our Services
            </Typography>
            <Typography variant="body1" className="section-description">
              Comprehensive real estate solutions tailored to your needs
            </Typography>
            
            <Grid container spacing={4} className="services-grid">
              <Grid item xs={12} sm={6} md={3}>
                <Box className="service-item">
                  <Box className="service-icon">🏠</Box>
                  <Typography variant="h6" component="h3" className="service-title">
                    Property Listings
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    Browse our extensive collection of properties for sale and rent
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="service-item">
                  <Box className="service-icon">🔍</Box>
                  <Typography variant="h6" component="h3" className="service-title">
                    Property Search
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    Find your ideal property with our advanced search tools
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="service-item">
                  <Box className="service-icon">💼</Box>
                  <Typography variant="h6" component="h3" className="service-title">
                    Property Management
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    Professional management services for property owners
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="service-item">
                  <Box className="service-icon">📊</Box>
                  <Typography variant="h6" component="h3" className="service-title">
                    Market Analysis
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    Stay informed with the latest real estate market trends
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box className="cta-section">
          <Container maxWidth="md">
            <Box className="cta-content">
              <Typography variant="h4" component="h2" className="cta-title">
                Ready to Find Your Dream Property?
              </Typography>
              <Typography variant="body1" className="cta-description">
                Join our platform today and discover the perfect property for your needs.
              </Typography>
              <Box className="cta-buttons">
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  onClick={handleSignup}
                  className="cta-button"
                >
                  Get Started Now
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box className="welcome-footer">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <img src="/logo.png" alt="Real Estate Logo" className="footer-logo" />
                <Typography variant="body2" className="footer-description">
                  Your trusted partner in finding the perfect property. We connect buyers and sellers with exceptional real estate opportunities.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" component="h3" className="footer-heading">
                  Quick Links
                </Typography>
                <ul className="footer-links">
                  <li><a href="#" onClick={handleLogin}>Sign In</a></li>
                  <li><a href="#" onClick={handleSignup}>Sign Up</a></li>
                  <li><a href="#" onClick={() => navigate('/about')}>About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" component="h3" className="footer-heading">
                  Contact Information
                </Typography>
                <Typography variant="body2" className="footer-contact">
                  <strong>Address:</strong> 123 Real Estate Ave, City, Country
                </Typography>
                <Typography variant="body2" className="footer-contact">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </Typography>
                <Typography variant="body2" className="footer-contact">
                  <strong>Email:</strong> info@realestate.com
                </Typography>
              </Grid>
            </Grid>
            <Box className="footer-bottom">
              <Typography variant="body2" className="copyright">
                © {new Date().getFullYear()} Premium Real Estate. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
