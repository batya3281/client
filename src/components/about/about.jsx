import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  CircularProgress,
  Divider
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './about.css';

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

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'With over 15 years of experience in real estate, Sarah leads our company with vision and expertise.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Head of Sales',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Michael brings a wealth of knowledge in property valuation and market analysis to our team.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Emmas innovative marketing strategies have helped countless clients find their dream homes.'
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Property Manager',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'David ensures all our properties are maintained to the highest standards for our clients.'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Jennifer & Robert',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: 'We found our dream home thanks to Premium Real Estate. The team was professional, responsive, and made the entire process smooth and stress-free.',
    location: 'New York'
  },
  {
    id: 2,
    name: 'Thomas Baker',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'As a first-time homebuyer, I was nervous about the process. The team at Premium Real Estate guided me every step of the way. Highly recommended!',
    location: 'Chicago'
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
    text: 'Ive worked with several real estate agencies, but Premium Real Estate stands out for their attention to detail and personalized service.',
    location: 'Los Angeles'
  }
];

export const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
      <Box className="about-page">
        {/* Hero Section */}
        <Box className="about-hero">
          <Container maxWidth="lg">
            <Typography variant="h3" component="h1" className="about-title">
              About Premium Real Estate
            </Typography>
            <Typography variant="h6" component="h2" className="about-subtitle">
              Your Trusted Partner in Real Estate Since 2005
            </Typography>
          </Container>
        </Box>

        {/* Our Story */}
        <Container maxWidth="lg" className="about-section">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" className="section-title">
                Our Story
              </Typography>
              <Typography variant="body1" paragraph className="section-text">
                Premium Real Estate was founded with a simple mission: to help people find their perfect property while providing exceptional service every step of the way.
              </Typography>
              <Typography variant="body1" paragraph className="section-text">
                What began as a small local agency has grown into a trusted name in real estate, serving thousands of satisfied clients across the country. Our success is built on our commitment to understanding each client's unique needs and delivering personalized solutions.
              </Typography>
              <Typography variant="body1" paragraph className="section-text">
                Today, we continue to innovate and expand our services, leveraging the latest technology to make property searching and transactions smoother than ever before.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Office" 
                  className="about-image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Our Values */}
        <Box className="values-section">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="section-title text-center">
              Our Values
            </Typography>
            <Typography variant="body1" className="section-description text-center">
              The principles that guide everything we do
            </Typography>
            
            <Grid container spacing={4} className="values-grid">
              <Grid item xs={12} sm={6} md={3}>
                <Box className="value-item">
                  <Box className="value-icon">🤝</Box>
                  <Typography variant="h6" component="h3" className="value-title">
                    Integrity
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We conduct our business with honesty and transparency at all times
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="value-item">
                  <Box className="value-icon">⭐</Box>
                  <Typography variant="h6" component="h3" className="value-title">
                    Excellence
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We strive for excellence in every aspect of our service
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="value-item">
                  <Box className="value-icon">🔍</Box>
                  <Typography variant="h6" component="h3" className="value-title">
                    Attention to Detail
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We pay close attention to every detail to ensure client satisfaction
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="value-item">
                  <Box className="value-icon">💡</Box>
                  <Typography variant="h6" component="h3" className="value-title">
                    Innovation
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We embrace new ideas and technologies to improve our services
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Team */}
        <Container maxWidth="lg" className="about-section">
          <Typography variant="h4" component="h2" className="section-title text-center">
            Meet Our Team
          </Typography>
          <Typography variant="body1" className="section-description text-center">
            Dedicated professionals committed to your success
          </Typography>
          
          <Grid container spacing={4} className="team-grid">
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.id}>
                <Card className="team-card">
                  <CardMedia
                    component="img"
                    height="200"
                    image={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <CardContent className="team-content">
                    <Typography variant="h6" component="h3" className="team-name">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" className="team-position">
                      {member.position}
                    </Typography>
                    <Typography variant="body2" className="team-bio">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials */}
        <Box className="testimonials-section">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="section-title text-center">
              What Our Clients Say
            </Typography>
            <Typography variant="body1" className="section-description text-center">
              Hear from our satisfied clients
            </Typography>
            
            <Grid container spacing={4} className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <Grid item xs={12} md={4} key={testimonial.id}>
                  <Card className="testimonial-card">
                    <CardContent className="testimonial-content">
                      <Typography variant="body1" className="testimonial-text">
                        "{testimonial.text}"
                      </Typography>
                      <Divider className="testimonial-divider" />
                      <Box className="testimonial-author">
                        <Avatar src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                        <Box>
                          <Typography variant="subtitle2" className="testimonial-name">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" className="testimonial-location">
                            {testimonial.location}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Stats */}
        <Container maxWidth="lg" className="stats-section">
          <Grid container spacing={4} className="stats-grid">
            <Grid item xs={6} md={3}>
              <Box className="stat-item">
                <Typography variant="h3" component="p" className="stat-number">
                  15+
                </Typography>
                <Typography variant="body1" className="stat-label">
                  Years of Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className="stat-item">
                <Typography variant="h3" component="p" className="stat-number">
                  5,000+
                </Typography>
                <Typography variant="body1" className="stat-label">
                  Properties Sold
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className="stat-item">
                <Typography variant="h3" component="p" className="stat-number">
                  10,000+
                </Typography>
                <Typography variant="body1" className="stat-label">
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className="stat-item">
                <Typography variant="h3" component="p" className="stat-number">
                  20+
                </Typography>
                <Typography variant="body1" className="stat-label">
                  Expert Agents
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Contact CTA */}
        <Box className="contact-cta">
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" className="cta-title">
              Ready to Work With Us?
            </Typography>
            <Typography variant="body1" className="cta-description">
              Contact our team today to discuss your real estate needs.
            </Typography>
            <Typography variant="h6" component="p" className="contact-info">
              📞 Call us: (123) 456-7890
            </Typography>
            <Typography variant="h6" component="p" className="contact-info">
              ✉️ Email: info@premiumrealestate.com
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
