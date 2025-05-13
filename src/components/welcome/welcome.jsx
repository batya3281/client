// import React, { useState, useEffect, useRef } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Collapse,
//   Container,
//   Divider,
//   Fade,
//   Grid,
//   IconButton,
//   Link,
//   List,
//   ListItem,
//   Menu,
//   MenuItem,
//   TextField,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   Zoom,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import {
//   ArrowForward as ArrowForwardIcon,
//   Bathtub as BathtubIcon,
//   BarChart as BarChartIcon,
//   Close as CloseIcon,
//   DoneAll as DoneAllIcon,
//   Email as EmailIcon,
//   Facebook as FacebookIcon,
//   Favorite as FavoriteIcon,
//   Info as InfoIcon,
//   Instagram as InstagramIcon,
//   KeyboardArrowDown as KeyboardArrowDownIcon,
//   KeyboardArrowUp as KeyboardArrowUpIcon,
//   LinkedIn as LinkedInIcon,
//   LocationOn as LocationOnIcon,
//   Menu as MenuIcon,
//   Message as MessageIcon,
//   Notifications as NotificationsIcon,
//   Person as PersonIcon,
//   PersonAdd as PersonAddIcon,
//   Phone as PhoneIcon,
//   PlayArrow as PlayArrowIcon,
//   Search as SearchIcon,
//   Send as SendIcon,
//   SquareFoot as SquareFootIcon,
//   Star as StarIcon,
//   Twitter as TwitterIcon,
//   Bed as BedIcon,
// } from '@mui/icons-material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Styled Components
// const HeroSection = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   minHeight: '100vh',
//   display: 'flex',
//   alignItems: 'center',
//   color: '#ffffff',
//   backgroundColor: '#000000', // Changed from blue to black
//   overflow: 'hidden',
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   zIndex: 2,
//   width: '100%',
// }));

// const FeatureCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   borderRadius: '16px',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
//     '& .feature-icon': {
//       backgroundColor: '#e53935',
//       color: '#ffffff',
//       transform: 'rotateY(180deg)',
//     },
//   },
// }));

// const FeatureIcon = styled(Box)(({ theme }) => ({
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '70px',
//   height: '70px',
//   borderRadius: '50%',
//   backgroundColor: 'rgba(229, 57, 53, 0.1)',
//   color: '#e53935',
//   marginBottom: '16px',
//   transition: 'all 0.5s ease',
//   '& svg': {
//     fontSize: '32px',
//   },
// }));

// const PropertyCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
//   },
// }));

// const TestimonialCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   borderRadius: '16px',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
//   },
// }));

// const StepCircle = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '60px',
//   height: '60px',
//   borderRadius: '50%',
//   backgroundColor: '#e53935',
//   color: '#ffffff',
//   flexShrink: 0,
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#e53935',
//   color: '#ffffff',
//   padding: '10px 24px',
//   borderRadius: '30px',
//   textTransform: 'none',
//   fontWeight: 600,
//   boxShadow: '0 4px 12px rgba(229, 57, 53, 0.3)',
//   '&:hover': {
//     backgroundColor: '#d32f2f',
//     boxShadow: '0 6px 16px rgba(229, 57, 53, 0.4)',
//   },
// }));

// const SecondaryButton = styled(Button)(({ theme }) => ({
//   borderColor: 'rgba(255, 255, 255, 0.5)',
//   color: '#ffffff',
//   padding: '10px 24px',
//   borderRadius: '30px',
//   textTransform: 'none',
//   fontWeight: 600,
//   '&:hover': {
//     borderColor: '#ffffff',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
// }));

// const Welcome = () => {
//   // State for mobile menu
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  
//   // State for scroll position
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   // Refs for sections
//   const featuresRef = useRef(null);
//   const howItWorksRef = useRef(null);
//   const propertiesRef = useRef(null);
//   const testimonialsRef = useRef(null);
  
//   // State for section visibility
//   const [featuresVisible, setFeaturesVisible] = useState(false);
//   const [howItWorksVisible, setHowItWorksVisible] = useState(false);
//   const [propertiesVisible, setPropertiesVisible] = useState(false);
//   const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  
//   // Media queries
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  
//   // Sample data for featured properties
//   const featuredProperties = [
//     {
//       title: 'Modern Apartment in Downtown',
//       location: 'Downtown, New York',
//       description: 'Luxurious apartment with stunning city views, modern amenities, and prime location.',
//       price: '$2,500/mo',
//       bedrooms: 2,
//       bathrooms: 2,
//       area: 85,
//       image: 'https://source.unsplash.com/random/600x400/?apartment,modern',
//       featured: true,
//     },
//     {
//       title: 'Cozy Family Home',
//       location: 'Suburbia, Boston',
//       description: 'Spacious family home with a large backyard, perfect for families looking for comfort.',
//       price: '$450,000',
//       bedrooms: 4,
//       bathrooms: 3,
//       area: 180,
//       image: 'https://source.unsplash.com/random/600x400/?house,family',
//       featured: false,
//     },
//     {
//       title: 'Luxury Villa with Pool',
//       location: 'Beverly Hills, Los Angeles',
//       description: 'Exclusive villa featuring a private pool, garden, and state-of-the-art security system.',
//       price: '$1.2M',
//       bedrooms: 5,
//       bathrooms: 4,
//       area: 320,
//       image: 'https://source.unsplash.com/random/600x400/?villa,luxury',
//       featured: true,
//     },
//   ];
  
//   // Sample data for testimonials
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'First-time Homebuyer',
//       comment: 'PropertyMatch made finding my first home so easy! The AI matching was spot on, and I found exactly what I was looking for within two weeks.',
//       rating: 5,
//       avatar: 'https://source.unsplash.com/random/100x100/?portrait,woman',
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Property Investor',
//       comment: 'As an investor, I need to move quickly on good opportunities. PropertyMatchs alerts have helped me secure three great investment properties this year.',
//       rating: 5,
//       avatar: 'https://source.unsplash.com/random/100x100/?portrait,man',
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Relocating Professional',
//       comment: 'When I had to relocate for work, I was worried about finding a place remotely. PropertyMatchs virtual tours and detailed information made it possible!',
//       rating: 4,
//       avatar: 'https://source.unsplash.com/random/100x100/?portrait,woman,2',
//     },
//     {
//       name: 'David Thompson',
//       role: 'Luxury Home Seller',
//       comment: 'I was impressed by how quickly my property sold through PropertyMatch. Their marketing tools and targeted matching brought serious buyers only.',
//       rating: 5,
//       avatar: 'https://source.unsplash.com/random/100x100/?portrait,man,2',
//     },
//   ];
  
//   // Handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
      
//       // Check if sections are visible
//       const isVisible = (ref) => {
//         if (!ref.current) return false;
//         const rect = ref.current.getBoundingClientRect();
//         return rect.top <= window.innerHeight * 0.75;
//       };
      
//       setFeaturesVisible(isVisible(featuresRef));
//       setHowItWorksVisible(isVisible(howItWorksRef));
//       setPropertiesVisible(isVisible(propertiesRef));
//       setTestimonialsVisible(isVisible(testimonialsRef));
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check visibility on mount
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };
  
//   // Handle user menu
//   const handleUserMenuOpen = (event) => {
//     setUserMenuAnchor(event.currentTarget);
//   };
  
//   const handleUserMenuClose = () => {
//     setUserMenuAnchor(null);
//   };
  
//   return (
//     <Box>
//       {/* Navbar */}
//       <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}> {/* Changed from blue to black */}
//         <Container maxWidth="lg">
//           <Toolbar sx={{ py: 1 }}>
//             <Typography
//               variant="h5"
//               component={RouterLink}
//               to="/"
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 textDecoration: 'none',
//                 flexGrow: { xs: 1, md: 0 },
//               }}
//             >
//               PropertyMatch
//             </Typography>
            
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 4, flexGrow: 1 }}>
//               <Button
//                 component={RouterLink}
//                 to="/buy"
//                 color="inherit"
//                 sx={{ mx: 1, textTransform: 'none' }}
//               >
//                 Buy
//               </Button>
              
//               <Button
//                 component={RouterLink}
//                 to="/rent"
//                 color="inherit"
//                 sx={{ mx: 1, textTransform: 'none' }}
//               >
//                 Rent
//               </Button>
              
//               <Button
//                 component={RouterLink}
//                 to="/sell"
//                 color="inherit"
//                 sx={{ mx: 1, textTransform: 'none' }}
//               >
//                 Sell
//               </Button>
              
//               <Button
//                 component={RouterLink}
//                 to="/agents"
//                 color="inherit"
//                 sx={{ mx: 1, textTransform: 'none' }}
//               >
//                 Agents
//               </Button>
              
//               <Button
//                 component={RouterLink}
//                 to="/resources"
//                 color="inherit"
//                 endIcon={<KeyboardArrowDownIcon />}
//                 sx={{ mx: 1, textTransform: 'none' }}
//               >
//                 Resources
//               </Button>
//             </Box>
            
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <Button
//                   component={RouterLink}
//                   to="/login"
//                   color="inherit"
//                   sx={{ mx: 1, textTransform: 'none' }}
//                 >
//                   Log In
//                 </Button>
                
//                 <Button
//                   component={RouterLink}
//                   to="/signup"
//                   variant="contained"
//                   sx={{
//                     ml: 1,
//                     backgroundColor: '#e53935',
//                     textTransform: 'none',
//                     '&:hover': {
//                       backgroundColor: '#d32f2f',
//                     },
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </Box>
              
//               <IconButton
//                 color="inherit"
//                 sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
      
//       {/* Mobile Menu */}
//       <Collapse in={mobileMenuOpen}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: '64px',
//             left: 0,
//             right: 0,
//             backgroundColor: '#000000', // Changed from blue to black
//             zIndex: 1000,
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Container maxWidth="lg">
//             <List>
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/buy"
//                   fullWidth
//                   color="inherit"
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Buy
//                 </Button>
//               </ListItem>
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/rent"
//                   fullWidth
//                   color="inherit"
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Rent
//                 </Button>
//               </ListItem>
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/sell"
//                   fullWidth
//                   color="inherit"
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Sell
//                 </Button>
//               </ListItem>
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/agents"
//                   fullWidth
//                   color="inherit"
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Agents
//                 </Button>
//               </ListItem>
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/resources"
//                   fullWidth
//                   color="inherit"
//                   endIcon={<KeyboardArrowDownIcon />}
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Resources
//                 </Button>
//               </ListItem>
              
//               <Divider sx={{ my: 1 }} />
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/login"
//                   fullWidth
//                   color="inherit"
//                   sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
//                 >
//                   Log In
//                 </Button>
//               </ListItem>
              
//               <ListItem>
//                 <Button
//                   component={RouterLink}
//                   to="/signup"
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     justifyContent: 'flex-start',
//                     backgroundColor: '#e53935',
//                     textTransform: 'none',
//                     '&:hover': {
//                       backgroundColor: '#d32f2f',
//                     },
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </ListItem>
//             </List>
//           </Container>
//         </Box>
//       </Collapse>

//       {/* Hero Section */}
//       <HeroSection>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             overflow: 'hidden',
//             zIndex: 0,
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundImage: 'linear-gradient(135deg, #000000 0%, #212121 100%)', // Changed from blue to black
//               opacity: 0.9,
//             },
//           }}
//         >
//           <Box
//             component="img"
//             src="https://source.unsplash.com/random/1920x1080/?real,estate,luxury"
//             alt="Hero Background"
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               opacity: 0.4,
//             }}
//           />
//         </Box>
        
//         <ContentWrapper>
//           <Container maxWidth="lg">
//             <Grid container spacing={4} alignItems="center">
//               <Grid item xs={12} md={7}>
//                 <Fade in={true} timeout={1000}>
//                   <Box>
//                     <Typography
//                       variant="h2"
//                       component="h1"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{
//                         fontSize: { xs: '2.5rem', md: '3.5rem' },
//                       }}
//                     >
//                       Find Your Perfect Property Match
//                     </Typography>
                    
//                     <Typography
//                       variant="h5"
//                       paragraph
//                       sx={{ mb: 4, opacity: 0.9, maxWidth: '600px' }}
//                     >
//                       Using AI-powered matching to connect you with properties that truly fit your lifestyle and preferences.
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
//                       <ActionButton
//                         size="large"
//                         startIcon={<SearchIcon />}
//                       >
//                         Start Your Search
//                       </ActionButton>
                      
//                       <SecondaryButton
//                         size="large"
//                         startIcon={<PlayArrowIcon />}
//                       >
//                         How It Works
//                       </SecondaryButton>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
//                       <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
//                         <DoneAllIcon sx={{ color: '#e53935', mr: 1 }} />
//                         AI-Powered Matching
//                       </Typography>
                      
//                       <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
//                         <DoneAllIcon sx={{ color: '#e53935', mr: 1 }} />
//                         Verified Listings
//                       </Typography>
                      
//                       <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
//                         <DoneAllIcon sx={{ color: '#e53935', mr: 1 }} />
//                         Virtual Tours
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Fade>
//               </Grid>
              
//               <Grid item xs={12} md={5}>
//                 <Fade in={true} timeout={1000} style={{ transitionDelay: '300ms' }}>
//                   <Box
//                     sx={{
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       backdropFilter: 'blur(10px)',
//                       borderRadius: '16px',
//                       p: 3,
//                       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
//                     }}
//                   >
//                     <Typography variant="h5" fontWeight="bold" gutterBottom>
//                       What are you looking for?
//                     </Typography>
                    
//                     <Box sx={{ mb: 3 }}>
//                       <Button
//                         variant="contained"
//                         sx={{
//                           mr: 1,
//                           mb: 1,
//                           backgroundColor: '#e53935',
//                           '&:hover': {
//                             backgroundColor: '#d32f2f',
//                           },
//                         }}
//                       >
//                         Buy
//                       </Button>
                      
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           mr: 1,
//                           mb: 1,
//                           borderColor: 'rgba(255, 255, 255, 0.5)',
//                           color: '#ffffff',
//                           '&:hover': {
//                             borderColor: '#ffffff',
//                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                           },
//                         }}
//                       >
//                         Rent
//                       </Button>
                      
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           mb: 1,
//                           borderColor: 'rgba(255, 255, 255, 0.5)',
//                           color: '#ffffff',
//                           '&:hover': {
//                             borderColor: '#ffffff',
//                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                           },
//                         }}
//                       >
//                         Sell
//                       </Button>
//                     </Box>
                    
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       placeholder="Location"
//                       InputProps={{
//                         startAdornment: <LocationOnIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />,
//                       }}
//                       sx={{
//                         mb: 3,
//                         '& .MuiOutlinedInput-root': {
//                           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                           color: '#ffffff',
//                           '& fieldset': {
//                             borderColor: 'rgba(255, 255, 255, 0.3)',
//                           },
//                           '&:hover fieldset': {
//                             borderColor: 'rgba(255, 255, 255, 0.5)',
//                           },
//                           '&.Mui-focused fieldset': {
//                             borderColor: '#ffffff',
//                           },
//                         },
//                         '& .MuiInputBase-input::placeholder': {
//                           color: 'rgba(255, 255, 255, 0.7)',
//                           opacity: 1,
//                         },
//                       }}
//                     />
                    
//                     <Grid container spacing={2} sx={{ mb: 3 }}>
//                       <Grid item xs={6}>
//                         <TextField
//                           fullWidth
//                           select
//                           defaultValue="any"
//                           variant="outlined"
//                           label="Property Type"
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                               color: '#ffffff',
//                               '& fieldset': {
//                                 borderColor: 'rgba(255, 255, 255, 0.3)',
//                               },
//                               '&:hover fieldset': {
//                                 borderColor: 'rgba(255, 255, 255, 0.5)',
//                               },
//                               '&.Mui-focused fieldset': {
//                                 borderColor: '#ffffff',
//                               },
//                             },
//                             '& .MuiInputLabel-root': {
//                               color: 'rgba(255, 255, 255, 0.7)',
//                             },
//                             '& .MuiInputLabel-root.Mui-focused': {
//                               color: '#ffffff',
//                             },
//                             '& .MuiSelect-icon': {
//                               color: 'rgba(255, 255, 255, 0.7)',
//                             },
//                           }}
//                         >
//                           <MenuItem value="any">Any Type</MenuItem>
//                           <MenuItem value="house">House</MenuItem>
//                           <MenuItem value="apartment">Apartment</MenuItem>
//                           <MenuItem value="condo">Condo</MenuItem>
//                           <MenuItem value="townhouse">Townhouse</MenuItem>
//                         </TextField>
//                       </Grid>
                      
//                       <Grid item xs={6}>
//                         <TextField
//                           fullWidth
//                           select
//                           defaultValue="any"
//                           variant="outlined"
//                           label="Budget"
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                               color: '#ffffff',
//                               '& fieldset': {
//                                 borderColor: 'rgba(255, 255, 255, 0.3)',
//                               },
//                               '&:hover fieldset': {
//                                 borderColor: 'rgba(255, 255, 255, 0.5)',
//                               },
//                               '&.Mui-focused fieldset': {
//                                 borderColor: '#ffffff',
//                               },
//                             },
//                             '& .MuiInputLabel-root': {
//                               color: 'rgba(255, 255, 255, 0.7)',
//                             },
//                             '& .MuiInputLabel-root.Mui-focused': {
//                               color: '#ffffff',
//                             },
//                             '& .MuiSelect-icon': {
//                               color: 'rgba(255, 255, 255, 0.7)',
//                             },
//                           }}
//                         >
//                           <MenuItem value="any">Any Price</MenuItem>
//                           <MenuItem value="100k">Under $100k</MenuItem>
//                           <MenuItem value="200k">Under $200k</MenuItem>
//                           <MenuItem value="500k">Under $500k</MenuItem>
//                           <MenuItem value="1m">Under $1M</MenuItem>
//                           <MenuItem value="custom">Custom Range</MenuItem>
//                         </TextField>
//                       </Grid>
//                     </Grid>
                    
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       size="large"
//                       startIcon={<SearchIcon />}
//                       sx={{
//                         backgroundColor: '#e53935',
//                         p: 1.5,
//                         borderRadius: '8px',
//                         textTransform: 'none',
//                         fontWeight: 600,
//                         '&:hover': {
//                           backgroundColor: '#d32f2f',
//                         },
//                       }}
//                     >
//                       Search Properties
//                     </Button>
//                   </Box>
//                 </Fade>
//               </Grid>
//             </Grid>
//           </Container>
//         </ContentWrapper>
//       </HeroSection>

//       {/* Features Section */}
//       <Box ref={featuresRef} sx={{ py: 10, backgroundColor: '#f5f5f5' }}>
//         <Container maxWidth="lg">
//           <Fade in={featuresVisible} timeout={1000}>
//             <Box sx={{ textAlign: 'center', mb: 8 }}>
//               <Typography
//                 variant="h3"
//                 component="h2"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ color: '#000000' }} // Changed from blue to black
//               >
//                 Why Choose PropertyMatch
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{ maxWidth: '700px', mx: 'auto', color: '#546e7a' }}
//               >
//                 Our AI-powered platform offers a personalized approach to finding your ideal property.
//               </Typography>
//             </Box>
//           </Fade>
          
//           <Grid container spacing={4}>
//             {[
//               {
//                 title: 'AI-Powered Matching',
//                 description: 'Our advanced algorithms analyze your preferences to find properties that truly match your needs.',
//                 icon: <BarChartIcon className="feature-icon" />,
//               },
//               {
//                 title: 'Virtual Tours',
//                 description: 'Explore properties from the comfort of your home with our immersive 3D virtual tours.',
//                 icon: <SearchIcon className="feature-icon" />,
//               },
//               {
//                 title: 'Verified Listings',
//                 description: 'All our listings are verified by our team to ensure accuracy and prevent fraud.',
//                 icon: <DoneAllIcon className="feature-icon" />,
//               },
//               {
//                 title: 'Expert Support',
//                 description: 'Our team of real estate experts is available to guide you through the entire process.',
//                 icon: <MessageIcon className="feature-icon" />,
//               },
//             ].map((feature, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Fade
//                   in={featuresVisible}
//                   timeout={1000}
//                   style={{ transitionDelay: `${200 * index}ms` }}
//                 >
//                   <FeatureCard>
//                     <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                       <FeatureIcon className="feature-icon">
//                         {feature.icon}
//                       </FeatureIcon>
                      
//                       <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                         {feature.title}
//                       </Typography>
                      
//                       <Typography variant="body1" color="text.secondary">
//                         {feature.description}
//                       </Typography>
//                     </CardContent>
//                   </FeatureCard>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* How It Works Section */}
//       <Box ref={howItWorksRef} sx={{ py: 10, backgroundColor: '#ffffff' }}>
//         <Container maxWidth="lg">
//           <Fade in={howItWorksVisible} timeout={1000}>
//             <Box sx={{ textAlign: 'center', mb: 8 }}>
//               <Typography
//                 variant="h3"
//                 component="h2"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ color: '#000000' }} // Changed from blue to black
//               >
//                 How PropertyMatch Works
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{ maxWidth: '700px', mx: 'auto', color: '#546e7a' }}
//               >
//                 Our simple process helps you find and secure your ideal property with ease.
//               </Typography>
//             </Box>
//           </Fade>
          
//           <Grid container spacing={6} alignItems="center">
//             {[
//               {
//                 title: 'Create Your Profile',
//                 description: 'Sign up and tell us about your preferences, budget, and must-haves for your ideal property.',
//                 step: 1,
//               },
//               {
//                 title: 'Get Personalized Matches',
//                 description: 'Our AI algorithm will analyze thousands of listings to find properties that match your criteria.',
//                 step: 2,
//               },
//               {
//                 title: 'Tour Your Favorites',
//                 description: 'Schedule in-person visits or take virtual tours of the properties youre interested in.',
//                 step: 3,
//               },
//               {
//                 title: 'Make It Yours',
//                 description: 'When you find the perfect match, well guide you through the purchasing or renting process.',
//                 step: 4,
//               },
//             ].map((item, index) => (
//               <Grid item xs={12} key={index}>
//                 <Fade
//                   in={howItWorksVisible}
//                   timeout={1000}
//                   style={{ transitionDelay: `${200 * index}ms` }}
//                 >
//                   <Box sx={{ display: 'flex', gap: 4 }}>
//                     <StepCircle>
//                       <Typography variant="h5" fontWeight="bold">
//                         {item.step}
//                       </Typography>
//                     </StepCircle>
                    
//                     <Box>
//                       <Typography variant="h5" fontWeight="bold" gutterBottom>
//                         {item.title}
//                       </Typography>
                      
//                       <Typography variant="body1" color="text.secondary">
//                         {item.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Featured Properties Section */}
//       <Box ref={propertiesRef} sx={{ py: 10, backgroundColor: '#f5f5f5' }}>
//         <Container maxWidth="lg">
//           <Fade in={propertiesVisible} timeout={1000}>
//             <Box sx={{ textAlign: 'center', mb: 8 }}>
//               <Typography
//                 variant="h3"
//                 component="h2"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ color: '#000000' }} // Changed from blue to black
//               >
//                 Featured Properties
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{ maxWidth: '700px', mx: 'auto', color: '#546e7a' }}
//               >
//                 Discover our handpicked selection of premium properties available right now.
//               </Typography>
//             </Box>
//           </Fade>
          
//           <Grid container spacing={4}>
//             {featuredProperties.map((property, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Fade
//                   in={propertiesVisible}
//                   timeout={1000}
//                   style={{ transitionDelay: `${200 * index}ms` }}
//                 >
//                   <PropertyCard>
//                     <Box sx={{ position: 'relative' }}>
//                       <Box
//                         component="img"
//                         src={property.image}
//                         alt={property.title}
//                         sx={{
//                           width: '100%',
//                           height: '240px',
//                           objectFit: 'cover',
//                         }}
//                       />
                      
//                       {property.featured && (
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             top: '16px',
//                             left: '16px',
//                             backgroundColor: '#e53935',
//                             color: '#ffffff',
//                             py: 0.5,
//                             px: 1.5,
//                             borderRadius: '4px',
//                             fontSize: '0.75rem',
//                             fontWeight: 'bold',
//                           }}
//                         >
//                           Featured
//                         </Box>
//                       )}
                      
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           top: '16px',
//                           right: '16px',
//                           backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                           color: '#e53935',
//                           width: '36px',
//                           height: '36px',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           cursor: 'pointer',
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: '#ffffff',
//                             transform: 'scale(1.1)',
//                           },
//                         }}
//                       >
//                         <FavoriteIcon fontSize="small" />
//                       </Box>
                      
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           bottom: '16px',
//                           left: '16px',
//                           backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                           color: '#ffffff',
//                           py: 0.5,
//                           px: 1.5,
//                           borderRadius: '4px',
//                           fontSize: '1.25rem',
//                           fontWeight: 'bold',
//                         }}
//                       >
//                         {property.price}
//                       </Box>
//                     </Box>
                    
//                     <CardContent sx={{ p: 3 }}>
//                       <Typography variant="h6" fontWeight="bold" gutterBottom>
//                         {property.title}
//                       </Typography>
                      
//                       <Typography
//                         variant="body2"
//                         sx={{ display: 'flex', alignItems: 'center', mb: 1, color: '#757575' }}
//                       >
//                         <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: '#e53935' }} />
//                         {property.location}
//                       </Typography>
                      
//                       <Typography variant="body2" paragraph sx={{ color: '#546e7a', mb: 2 }}>
//                         {property.description}
//                       </Typography>
                      
//                       <Divider sx={{ mb: 2 }} />
                      
//                       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
//                           <BedIcon fontSize="small" sx={{ mr: 0.5, color: '#757575' }} />
//                           {property.bedrooms} Beds
//                         </Typography>
                        
//                         <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
//                           <BathtubIcon fontSize="small" sx={{ mr: 0.5, color: '#757575' }} />
//                           {property.bathrooms} Baths
//                         </Typography>
                        
//                         <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
//                           <SquareFootIcon fontSize="small" sx={{ mr: 0.5, color: '#757575' }} />
//                           {property.area} m²
//                         </Typography>
//                       </Box>
//                     </CardContent>
                    
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       sx={{
//                         mt: 3,
//                         backgroundColor: '#000000', // Changed from blue to black
//                         color: '#ffffff',
//                         textTransform: 'none',
//                         '&:hover': {
//                           backgroundColor: '#121212', // Changed from blue to black
//                         },
//                       }}
//                     >
//                       View Details
//                     </Button>
//                   </PropertyCard>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>
          
//           <Box sx={{ textAlign: 'center', mt: 6 }}>
//             <Button
//               variant="outlined"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               sx={{
//                 borderColor: '#000000', // Changed from blue to black
//                 color: '#000000', // Changed from blue to black
//                 borderRadius: '30px',
//                 padding: '10px 24px',
//                 textTransform: 'none',
//                 fontWeight: 600,
//                 '&:hover': {
//                   borderColor: '#121212', // Changed from blue to black
//                   backgroundColor: 'rgba(0, 0, 0, 0.05)', // Changed from blue to black
//                 },
//               }}
//             >
//               View All Properties
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box ref={testimonialsRef} sx={{ py: 10, backgroundColor: '#ffffff' }}>
//         <Container maxWidth="lg">
//           <Fade in={testimonialsVisible} timeout={1000}>
//             <Box sx={{ textAlign: 'center', mb: 8 }}>
//               <Typography
//                 variant="h3"
//                 component="h2"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ color: '#000000' }} // Changed from blue to black
//               >
//                 What Our Clients Say
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{ maxWidth: '700px', mx: 'auto', color: '#546e7a' }}
//               >
//                 Hear from homebuyers and sellers who found success with PropertyMatch.
//               </Typography>
//             </Box>
//           </Fade>
          
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <Fade in={testimonialsVisible} timeout={1000} style={{ transitionDelay: `${200 * index}ms` }}>
//                   <TestimonialCard>
//                     <CardContent sx={{ p: 4 }}>
//                       <Box sx={{ display: 'flex', mb: 2 }}>
//                         {Array.from({ length: 5 }).map((_, i) => (
//                           <StarIcon
//                             key={i}
//                             sx={{
//                               color: i < testimonial.rating ? '#ffc107' : '#e0e0e0',
//                               fontSize: '1.2rem',
//                             }}
//                           />
//                         ))}
//                       </Box>
                      
//                       <Typography variant="body1" paragraph sx={{ minHeight: '120px' }}>
//                         "{testimonial.comment}"
//                       </Typography>
                      
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <Avatar
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           sx={{ width: 56, height: 56, mr: 2 }}
//                         />
                        
//                         <Box>
//                           <Typography variant="h6" fontWeight="bold">
//                             {testimonial.name}
//                           </Typography>
                          
//                           <Typography variant="body2" color="text.secondary">
//                             {testimonial.role}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </CardContent>
//                   </TestimonialCard>
//                 </Fade>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box
//         sx={{
//           py: 10,
//           backgroundColor: '#000000', // Changed from blue to black
//           color: '#ffffff',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={7}>
//               <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//                 Ready to Find Your Perfect Match?
//               </Typography>
              
//               <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
//                 Join thousands of satisfied homeowners who found their ideal property with PropertyMatch.
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                 <ActionButton
//                   size="large"
//                   startIcon={<PersonAddIcon />}
//                 >
//                   Create Your Profile
//                 </ActionButton>
                
//                 <SecondaryButton
//                   size="large"
//                   startIcon={<InfoIcon />}
//                 >
//                   Learn More
//                 </SecondaryButton>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={5}>
//               <Box
//                 sx={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: '16px',
//                   p: 4,
//                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
//                 }}
//               >
//                 <Typography variant="h5" fontWeight="bold" gutterBottom>
//                   Get Personalized Recommendations
//                 </Typography>
                
//                 <Typography variant="body1" paragraph sx={{ mb: 3, opacity: 0.9 }}>
//                   Leave your contact information and our experts will help you find your dream property.
//                 </Typography>
                
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Your Name"
//                   sx={{
//                     mb: 2,
//                     '& .MuiOutlinedInput-root': {        
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       color: '#ffffff',
//                       '& fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.5)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#ffffff',
//                       },
//                     },
//                     '& .MuiInputBase-input::placeholder': {
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       opacity: 1,
//                     },
//                   }}
//                 />
                
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Your Email"
//                   sx={{
//                     mb: 2,
//                     '& .MuiOutlinedInput-root': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       color: '#ffffff',
//                       '& fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.5)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#ffffff',
//                       },
//                     },
//                     '& .MuiInputBase-input::placeholder': {
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       opacity: 1,
//                     },
//                   }}
//                 />
                
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Your Phone"
//                   sx={{
//                     mb: 3,
//                     '& .MuiOutlinedInput-root': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                       color: '#ffffff',
//                       '& fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255, 255, 255, 0.5)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: '#ffffff',
//                       },
//                     },
//                     '& .MuiInputBase-input::placeholder': {
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       opacity: 1,
//                     },
//                   }}
//                 />
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   size="large"
//                   startIcon={<SendIcon />}
//                   sx={{
//                     backgroundColor: '#e53935',
//                     p: 1.5,
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': {
//                       backgroundColor: '#d32f2f',
//                     },
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ backgroundColor: '#121212', color: '#ffffff', pt: 8, pb: 4 }}> {/* Changed from blue to black */}
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom>
//                 PropertyMatch
//               </Typography>
              
//               <Typography variant="body2" paragraph sx={{ mb: 3, opacity: 0.7 }}>
//                 Using AI-powered matching to connect you with properties that truly fit your lifestyle and preferences.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//                 <IconButton
//                   sx={{
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     },
//                   }}
//                 >
//                   <FacebookIcon />
//                 </IconButton>
                
//                 <IconButton
//                   sx={{
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     },
//                   }}
//                 >
//                   <TwitterIcon />
//                 </IconButton>
                
//                 <IconButton
//                   sx={{
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     },
//                   }}
//                 >
//                   <InstagramIcon />
//                 </IconButton>
                
//                 <IconButton
//                   sx={{
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     },
//                   }}
//                 >
//                   <LinkedInIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Quick Links
//               </Typography>
              
//               <List disablePadding>
//                 {['Home', 'About', 'Properties', 'Agents', 'Blog', 'Contact'].map((item) => (
//                   <ListItem key={item} disablePadding sx={{ mb: 1 }}>
//                     <Link
//                       component={RouterLink}
//                       to={`/${item.toLowerCase()}`}
//                       underline="hover"
//                       sx={{
//                         color: 'rgba(255, 255, 255, 0.7)',
//                         '&:hover': {
//                           color: '#ffffff',
//                         },
//                       }}
//                     >
//                       {item}
//                     </Link>
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Services
//               </Typography>
              
//               <List disablePadding>
//                 {['Buy Property', 'Sell Property', 'Rent Property', 'Property Valuation', 'Property Loans', 'Market Research'].map((item) => (
//                   <ListItem key={item} disablePadding sx={{ mb: 1 }}>
//                     <Link
//                       component={RouterLink}
//                       to="/"
//                       underline="hover"
//                       sx={{
//                         color: 'rgba(255, 255, 255, 0.7)',
//                         '&:hover': {
//                           color: '#ffffff',
//                         },
//                       }}
//                     >
//                       {item}
//                     </Link>
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
            
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Contact Us
//               </Typography>
              
//               <List disablePadding>
//                 <ListItem disablePadding sx={{ mb: 2 }}>
//                   <LocationOnIcon sx={{ mr: 2, color: '#e53935' }} />
//                   <Typography variant="body2" sx={{ opacity: 0.7 }}>
//                     1234 Property Lane, Real Estate City, RE 56789
//                   </Typography>
//                 </ListItem>
                
//                 <ListItem disablePadding sx={{ mb: 2 }}>
//                   <PhoneIcon sx={{ mr: 2, color: '#e53935' }} />
//                   <Link
//                     href="tel:+1234567890"
//                     underline="hover"
//                     sx={{
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         color: '#ffffff',
//                       },
//                     }}
//                   >
//                     +1 (234) 567-890
//                   </Link>
//                 </ListItem>
                
//                 <ListItem disablePadding sx={{ mb: 2 }}>
//                   <EmailIcon sx={{ mr: 2, color: '#e53935' }} />
//                   <Link
//                     href="mailto:info@propertymatch.com"
//                     underline="hover"
//                     sx={{
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         color: '#ffffff',
//                       },
//                     }}
//                   >
//                     info@propertymatch.com
//                   </Link>
//                 </ListItem>
//               </List>
              
//               <Box sx={{ mt: 3 }}>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Subscribe to our newsletter
//                 </Typography>
                
//                 <Box sx={{ display: 'flex' }}>
//                   <TextField
//                     size="small"
//                     placeholder="Your Email"
//                     sx={{
//                       flexGrow: 1,
//                       mr: 1,
//                       '& .MuiOutlinedInput-root': {
//                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                         color: '#ffffff',
//                         '& fieldset': {
//                           borderColor: 'rgba(255, 255, 255, 0.3)',
//                         },
//                         '&:hover fieldset': {
//                           borderColor: 'rgba(255, 255, 255, 0.5)',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: '#ffffff',
//                         },
//                       },
//                       '& .MuiInputBase-input::placeholder': {
//                         color: 'rgba(255, 255, 255, 0.7)',
//                         opacity: 1,
//                       },
//                     }}
//                   />
                  
//                   <Button
//                     variant="contained"
//                     sx={{
//                       backgroundColor: '#e53935',
//                       '&:hover': {
//                         backgroundColor: '#d32f2f',
//                       },
//                     }}
//                   >
//                     <SendIcon />
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
          
//           <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//             <Typography variant="body2" sx={{ opacity: 0.7 }}>
//               © {new Date().getFullYear()} PropertyMatch. All rights reserved.
//             </Typography>
            
//             <Box>
//               <Link
//                 href="#"
//                 underline="hover"
//                 sx={{
//                   color: 'rgba(255, 255, 255, 0.7)',
//                   mr: 3,
//                   '&:hover': {
//                     color: '#ffffff',
//                   },
//                 }}
//               >
//                 Privacy Policy
//               </Link>
              
//               <Link
//                 href="#"
//                 underline="hover"
//                 sx={{
//                   color: 'rgba(255, 255, 255, 0.7)',
//                   mr: 3,
//                   '&:hover': {
//                     color: '#ffffff',
//                   },
//                 }}
//               >
//                 Terms of Service
//               </Link>
              
//               <Link
//                 href="#"
//                 underline="hover"
//                 sx={{
//                   color: 'rgba(255, 255, 255, 0.7)',
//                   '&:hover': {
//                     color: '#ffffff',
//                   },
//                 }}
//               >
//                 Sitemap
//               </Link>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* Scroll to Top Button */}
//       <Zoom in={scrollPosition > 300}>
//         <Box
//           onClick={scrollToTop}
//           sx={{
//             position: 'fixed',
//             bottom: '24px',
//             right: '24px',
//             width: '48px',
//             height: '48px',
//             borderRadius: '50%',
//             backgroundColor: '#e53935',
//             color: '#ffffff',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: 'pointer',
//             boxShadow: '0 4px 12px rgba(229, 57, 53, 0.3)',
//             zIndex: 10,
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               backgroundColor: '#d32f2f',
//               transform: 'translateY(-5px)',
//               boxShadow: '0 6px 16px rgba(229, 57, 53, 0.4)',
//             },
//           }}
//         >
//           <KeyboardArrowUpIcon />
//         </Box>
//       </Zoom>
//     </Box>
//   );
// };

// export default Welcome;





//theb origional
// import MenuIcon from '@mui/icons-material/Menu';
// import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   Divider,
//   Fade,
//   Grow,
//   Zoom,
//   useMediaQuery,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Link,
//   AppBar,
//   Toolbar,
//   Collapse,
//   Avatar
// } from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SearchIcon from '@mui/icons-material/Search';
// import PublishIcon from '@mui/icons-material/Publish';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import LoginIcon from '@mui/icons-material/Login';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import HouseIcon from '@mui/icons-material/House';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import VillaIcon from '@mui/icons-material/Villa';
// import BusinessIcon from '@mui/icons-material/Business';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Styled components
// const HeroSection = styled(Box)(({ theme }) => ({
//   position: "relative",
//   minHeight: "85vh",
//   display: "flex",
//   alignItems: "center",
//   backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('https://source.unsplash.com/random/1920x1080/?luxury,real,estate')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "#ffffff",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
//     zIndex: 1,
//   },
//   [theme.breakpoints.down("md")]: {
//     minHeight: "70vh",
//   },
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   position: "relative",
//   zIndex: 2,
// }));

// const FeatureCard = styled(Card)(({ theme }) => ({
//   height: "100%",
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
//     "& .feature-icon": {
//       transform: "scale(1.1) rotate(5deg)",
//       color: "#e53935",
//     },
//     "& .feature-media": {
//       transform: "scale(1.05)",
//     }
//   },
// }));

// const FeatureIcon = styled(Box)(({ theme }) => ({
//   width: 80,
//   height: 80,
//   borderRadius: "50%",
//   backgroundColor: "rgba(229, 57, 53, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   margin: "0 auto 24px",
//   transition: "all 0.3s ease",
//   "& svg": {
//     fontSize: 40,
//     color: "#e53935",
//     transition: "all 0.3s ease",
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   boxShadow: "0 6px 20px rgba(229, 57, 53, 0.2)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   backgroundColor: "#e53935",
//   color: "#ffffff",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
//     transform: "translateX(-100%)",
//   },
//   "&:hover": {
//     backgroundColor: "#d32f2f",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(229, 57, 53, 0.3)",
//     "&::before": {
//       transform: "translateX(100%)",
//       transition: "all 0.7s ease",
//     },
//   },
//   "&:active": {
//     transform: "translateY(0)",
//   },
// }));

// const SecondaryButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   color: "#212121",
//   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//   "&:hover": {
//     backgroundColor: "#ffffff",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const PropertyTypeCard = styled(Card)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   height: "100%",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
//     "& .property-type-media": {
//       transform: "scale(1.05)",
//     },
//     "& .property-type-icon": {
//       backgroundColor: "#e53935",
//       color: "#ffffff",
//     }
//   },
// }));

// const StatsCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//     "& .stats-number": {
//       color: "#e53935",
//     },
//   },
// }));

// const TestimonialCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   position: "relative",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//   },
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "5px",
//     background: "linear-gradient(90deg, #e53935, #ff9800)",
//   },
// }));

// const Logo = styled(HomeWorkIcon)(({ theme }) => ({
//   fontSize: 40,
//   color: "#ffffff",
//   marginRight: theme.spacing(1.5),
//   filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.1) rotate(5deg)",
//   },
// }));

// const BackgroundAnimation = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 0,
//   overflow: "hidden",
//   "&::before, &::after": {
//     content: '""',
//     position: "absolute",
//     width: "600px",
//     height: "600px",
//     borderRadius: "50%",
//     opacity: 0.1,
//     animation: "pulse 15s infinite",
//   },
//   "&::before": {
//     background: "#e53935",
//     top: "-300px",
//     right: "-300px",
//   },
//   "&::after": {
//     background: "#ff9800",
//     bottom: "-300px",
//     left: "-300px",
//     animationDelay: "5s",
//   },
//   "@keyframes pulse": {
//     "0%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//     "50%": {
//       transform: "scale(1.1)",
//       opacity: 0.15,
//     },
//     "100%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//   },
// }));

// const NavButton = styled(Button)(({ theme }) => ({
//   color: "#ffffff",
//   textTransform: "none",
//   fontWeight: 500,
//   fontSize: "16px",
//   padding: theme.spacing(1, 2),
//   borderRadius: "8px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     transform: "translateY(-2px)",
//   },
// }));

// const AuthButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1, 3),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   marginLeft: theme.spacing(1),
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const Welcome = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [featuresVisible, setFeaturesVisible] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [testimonialVisible, setTestimonialVisible] = useState(false);
  
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
//   // Animation sequence
//   useEffect(() => {
//     setLoaded(true);
//     const timer1 = setTimeout(() => setFeaturesVisible(true), 500);
//     const timer2 = setTimeout(() => setStatsVisible(true), 800);
//     const timer3 = setTimeout(() => setTestimonialVisible(true), 1100);
    
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, []);
  
//   return (
//     <Box sx={{ minHeight: "100vh" }}>
//       {/* Navigation */}
//       <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
//         <Toolbar sx={{ py: 1 }}>
//           <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//             <Logo />
//             <Typography
//               variant={isMobile ? "h6" : "h5"}
//               component="h1"
//               fontWeight="bold"
//               sx={{
//                 color: "#ffffff",
//                 textShadow: "0 2px 4px rgba(0,0,0,0.3)",
//               }}
//             >
//               RealEstate Hub
//             </Typography>
//           </Box>
          
//           {!isMobile && (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <NavButton component="a" href="#features">
//                 Features
//               </NavButton>
//               <NavButton component="a" href="#property-types">
//                 Property Types
//               </NavButton>
//               <NavButton component="a" href="#testimonials">
//                 Testimonials
//               </NavButton>
//               <NavButton component="a" href="#contact">
//                 Contact
//               </NavButton>
              
//               <AuthButton
//                 variant="outlined"
//                 startIcon={<LoginIcon />}
//                 component={RouterLink}
//                 to="/login"
//                 sx={{
//                   color: "#ffffff",
//                   borderColor: "rgba(255,255,255,0.5)",
//                   "&:hover": {
//                     borderColor: "#ffffff",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                   },
//                 }}
//               >
//                 Login
//               </AuthButton>
              
//               <AuthButton
//                 variant="contained"
//                 startIcon={<PersonAddIcon />}
//                 component={RouterLink}
//                 to="/logon"
//                 sx={{
//                   backgroundColor: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "#d32f2f",
//                   },
//                 }}
//               >
//                 Sign Up
//               </AuthButton>
//             </Box>
//           )}
          
//           {isMobile && (
//             <IconButton
//               color="inherit"
//               sx={{ ml: 1 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>
      
//       {/* Hero Section */}
//       <HeroSection>
//         <BackgroundAnimation />
//         <Container maxWidth="lg">
//           <ContentWrapper>
//             <Grid container spacing={4} alignItems="center">
//               <Grid item xs={12} md={7}>
//                 <Fade in={loaded} timeout={800}>
//                   <Box>
//                     <Typography
//                       variant={isMobile ? "h3" : "h2"}
//                       component="h1"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{
//                         textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                         lineHeight: 1.2,
//                       }}
//                     >
//                       Find Your Perfect Property Match
//                     </Typography>
                    
//                     <Typography
//                       variant={isMobile ? "h6" : "h5"}
//                       component="h2"
//                       sx={{
//                         mb: 4,
//                         fontWeight: 400,
//                         opacity: 0.9,
//                         textShadow: "0 2px 4px rgba(0,0,0,0.2)",
//                         maxWidth: "600px",
//                       }}
//                     >
//                       Your one-stop platform for buying, selling, and discovering real estate opportunities.
//                     </Typography>
                    
//                     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
//                       <ActionButton
//                         size="large"
//                         startIcon={<SearchIcon />}
//                         component={RouterLink}
//                         to="/search"
//                       >
//                         Find Properties
//                       </ActionButton>
                      
//                       <SecondaryButton
//                         size="large"
//                         startIcon={<PublishIcon />}
//                         component={RouterLink}
//                         to="/publish"
//                       >
//                         List Your Property
//                       </SecondaryButton>
//                     </Box>
                    
//                     <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
//                       <Box sx={{ display: "flex", alignItems: "center" }}>
//                         <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                         <Typography variant="body1" fontWeight={500}>
//                           Verified Listings
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ display: "flex", alignItems: "center" }}>
//                         <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                         <Typography variant="body1" fontWeight={500}>
//                           Serious Buyers
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ display: "flex", alignItems: "center" }}>
//                         <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                         <Typography variant="body1" fontWeight={500}>
//                           Smart Matching
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Fade>
//               </Grid>
              
//               <Grid item xs={12} md={5}>
//                 <Zoom in={loaded} timeout={1000}>
//                   <Box
//                     sx={{
//                       position: "relative",
//                       height: { xs: "300px", md: "400px" },
//                       width: "100%",
//                       borderRadius: "24px",
//                       overflow: "hidden",
//                       boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                       transform: "perspective(1000px) rotateY(-5deg)",
//                       transition: "all 0.5s ease",
//                       "&:hover": {
//                         transform: "perspective(1000px) rotateY(0deg)",
//                       },
//                       "&::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
//                         zIndex: 1,
//                       },
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src="https://source.unsplash.com/random/600x800/?luxury,home,interior"
//                       alt="Luxury Home Interior"
//                       sx={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         transition: "transform 0.5s ease",
//                         "&:hover": {
//                           transform: "scale(1.05)",
//                         },
//                       }}
//                     />
                    
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         p: 3,
//                         zIndex: 2,
//                       }}
//                     >
//                       <Typography variant="h6" fontWeight="bold" sx={{ color: "#ffffff" }}>
//                         Exclusive Properties
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
//                         Discover our handpicked selection of premium properties
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Zoom>
//               </Grid>
//             </Grid>
            
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 mt: { xs: 6, md: 10 },
//               }}
//             >
//               <IconButton
//                 component="a"
//                 href="#features"
//                 sx={{
//                   backgroundColor: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",
//                   color: "#ffffff",
//                   p: 1.5,
//                   "&:hover": {
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                     transform: "translateY(5px)",
//                   },
//                   animation: "bounce 2s infinite",
//                   "@keyframes bounce": {
//                     "0%, 20%, 50%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "40%": {
//                       transform: "translateY(-10px)",
//                     },
//                     "60%": {
//                       transform: "translateY(-5px)",
//                     },
//                   },
//                 }}
//               >
//                 <ExpandMoreIcon fontSize="large" />
//               </IconButton>
//             </Box>
//           </ContentWrapper>
//         </Container>
//       </HeroSection>
      
//       {/* Features Section */}
//       <Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 position: "relative",
//                 display: "inline-block",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -16,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "80px",
//                   height: "4px",
//                   backgroundColor: "#e53935",
//                   borderRadius: "4px",
//                 },
//               }}
//             >
//               Our Services
//             </Typography>
            
//             <Typography
//               variant="h6"
//               color="text.secondary"
//               sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//             >
//               Discover how our platform can help you find, sell, or manage your real estate journey
//             </Typography>
//           </Box>
          
//           <Fade in={featuresVisible} timeout={800}>
//             <Grid container spacing={4}>
//               <Grid item xs={12} md={4}>
//                 <FeatureCard>
//                   <CardContent sx={{ p: 4, textAlign: "center" }}>
//                     <FeatureIcon className="feature-icon">
//                       <PublishIcon />
//                     </FeatureIcon>
                    
//                     <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                       List Your Property
//                     </Typography>
                    
//                     <Typography variant="body1" color="text.secondary" paragraph>
//                       Easily publish your property listings with detailed descriptions, high-quality photos, and all relevant information to attract serious buyers.
//                     </Typography>
                    
//                     <Box sx={{ mt: 2 }}>
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Reach thousands of potential buyers
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Professional listing presentation
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium">
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Easy management dashboard
//                       </Typography>
//                     </Box>
                    
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       sx={{
//                         mt: 3,
//                         borderRadius: "30px",
//                         textTransform: "none",
//                         fontWeight: 600,
//                         borderColor: "#e53935",
//                         color: "#e53935",
//                         "&:hover": {
//                           backgroundColor: "rgba(229, 57, 53, 0.05)",
//                           borderColor: "#d32f2f",
//                         },
//                       }}
//                       endIcon={<ArrowForwardIcon />}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </FeatureCard>
//               </Grid>
              
//               <Grid item xs={12} md={4}>
//                 <FeatureCard>
//                   <CardContent sx={{ p: 4, textAlign: "center" }}>
//                     <FeatureIcon className="feature-icon">
//                       <BarChartIcon />
//                     </FeatureIcon>
                    
//                     <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                       Track Serious Interest
//                     </Typography>
                    
//                     <Typography variant="body1" color="text.secondary" paragraph>
//                       Monitor the number of serious inquiries about your property. Our platform filters casual browsers from genuinely interested potential buyers.
//                     </Typography>
                    
//                     <Box sx={{ mt: 2 }}>
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Real-time interest analytics
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Qualified buyer filtering
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium">
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Detailed visitor insights
//                       </Typography>
//                     </Box>
                    
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       sx={{
//                         mt: 3,
//                         borderRadius: "30px",
//                         textTransform: "none",
//                         fontWeight: 600,
//                         borderColor: "#e53935",
//                         color: "#e53935",
//                         "&:hover": {
//                           backgroundColor: "rgba(229, 57, 53, 0.05)",
//                           borderColor: "#d32f2f",
//                         },
//                       }}
//                       endIcon={<ArrowForwardIcon />}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </FeatureCard>
//               </Grid>
              
//               <Grid item xs={12} md={4}>
//                 <FeatureCard>
//                   <CardContent sx={{ p: 4, textAlign: "center" }}>
//                     <FeatureIcon className="feature-icon">
//                       <SearchIcon />
//                     </FeatureIcon>
                    
//                     <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                       Smart Property Matching
//                     </Typography>
                    
//                     <Typography variant="body1" color="text.secondary" paragraph>
//                       Save your property requirements and get automatically matched with listings that meet your criteria. Never miss your dream property again.
//                     </Typography>
                    
//                     <Box sx={{ mt: 2 }}>
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Personalized property alerts
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Advanced search filters
//                       </Typography>
                      
//                       <Typography variant="body2" fontWeight="medium">
//                         <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                         Save favorite properties
//                       </Typography>
//                     </Box>
                    
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       sx={{
//                         mt: 3,
//                         borderRadius: "30px",
//                         textTransform: "none",
//                         fontWeight: 600,
//                         borderColor: "#e53935",
//                         color: "#e53935",
//                         "&:hover": {
//                           backgroundColor: "rgba(229, 57, 53, 0.05)",
//                           borderColor: "#d32f2f",
//                         },
//                       }}
//                       endIcon={<ArrowForwardIcon />}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </FeatureCard>
//               </Grid>
//             </Grid>
//           </Fade>
//         </Container>
//       </Box>
      
//       {/* Property Types Section */}
//       <Box id="property-types" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 position: "relative",
//                 display: "inline-block",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -16,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "80px",
//                   height: "4px",
//                   backgroundColor: "#e53935",
//                   borderRadius: "4px",
//                 },
//               }}
//             >
//               Explore Property Types
//             </Typography>
            
//             <Typography
//               variant="h6"
//               color="text.secondary"
//               sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//             >
//               Browse through various property categories to find exactly what you're looking for
//             </Typography>
//           </Box>
          
//           <Grid container spacing={3}>
//             {[
//               { 
//                 title: "Apartments", 
//                 icon: <ApartmentIcon />, 
//                 image: "https://source.unsplash.com/random/600x400/?apartment", 
//                 count: 1245 
//               },
//               { 
//                 title: "Houses", 
//                 icon: <HouseIcon />, 
//                 image: "https://source.unsplash.com/random/600x400/?house", 
//                 count: 873 
//               },
//               { 
//                 title: "Villas", 
//                 icon: <VillaIcon />, 
//                 image: "https://source.unsplash.com/random/600x400/?villa", 
//                 count: 342 
//               },
//               { 
//                 title: "Commercial", 
//                 icon: <BusinessIcon />, 
//                 image: "https://source.unsplash.com/random/600x400/?office", 
//                 count: 568 
//               }
//             ].map((item, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Zoom in={loaded} timeout={800 + (index * 200)}>
//                   <PropertyTypeCard>
//                     <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
//                       <CardMedia
//                         component="img"
//                         image={item.image}
//                         alt={item.title}
//                         className="property-type-media"
//                         sx={{
//                           height: "100%",
//                           transition: "transform 0.5s ease",
//                         }}
//                       />
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: 16,
//                           right: 16,
//                           backgroundColor: "rgba(255, 255, 255, 0.9)",
//                           borderRadius: "20px",
//                           py: 0.5,
//                           px: 1.5,
//                           fontWeight: "medium",
//                           fontSize: "0.875rem",
//                           boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//                         }}
//                       >
//                         {item.count} listings
//                       </Box>
//                     </Box>
//                     <CardContent sx={{ textAlign: "center" }}>
//                       <Box
//                         className="property-type-icon"
//                         sx={{
//                           width: 60,
//                           height: 60,
//                           borderRadius: "50%",
//                           backgroundColor: "rgba(0, 0, 0, 0.05)",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           margin: "-30px auto 16px",
//                           transition: "all 0.3s ease",
//                           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                           "& svg": {
//                             fontSize: 30,
//                             color: "#212121",
//                             transition: "all 0.3s ease",
//                           },
//                         }}
//                       >
//                         {item.icon}
//                       </Box>
//                       <Typography variant="h6" component="h3" fontWeight="bold">
//                         {item.title}
//                       </Typography>
//                       <Button
//                         sx={{
//                           mt: 1,
//                           textTransform: "none",
//                           fontWeight: 600,
//                           color: "#e53935",
//                           "&:hover": {
//                             backgroundColor: "rgba(229, 57, 53, 0.05)",
//                           },
//                         }}
//                         endIcon={<ArrowForwardIcon />}
//                       >
//                         Browse {item.title}
//                       </Button>
//                     </CardContent>
//                   </PropertyTypeCard>
//                 </Zoom>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
      
//       {/* Stats Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
//         <Container maxWidth="lg">
//           <Fade in={statsVisible} timeout={800}>
//             <Grid container spacing={4}>
//               {[
//                 { number: "10,000+", label: "Active Listings", icon: <HomeWorkIcon /> },
//                 { number: "15,000+", label: "Happy Clients", icon: <FavoriteIcon /> },
//                 { number: "95%", label: "Success Rate", icon: <CheckCircleOutlineIcon /> },
//                 { number: "24/6", label: "Customer Support", icon: <SearchIcon /> }
//               ].map((stat, index) => (
//                 <Grid item xs={6} md={3} key={index}>
//                   <StatsCard>
//                     <Box
//                       sx={{
//                         width: 70,
//                         height: 70,
//                         borderRadius: "50%",
//                         backgroundColor: "rgba(229, 57, 53, 0.1)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         mb: 2,
//                         "& svg": {
//                           fontSize: 36,
//                           color: "#e53935",
//                         },
//                       }}
//                     >
//                       {stat.icon}
//                     </Box>
//                     <Typography
//                       variant="h4"
//                       component="p"
//                       fontWeight="bold"
//                       className="stats-number"
//                       sx={{ transition: "color 0.3s ease" }}
//                     >
//                       {stat.number}
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary">
//                       {stat.label}
//                     </Typography>
//                   </StatsCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </Fade>
//         </Container>
//       </Box>
      
//       {/* How It Works Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 position: "relative",
//                 display: "inline-block",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -16,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "80px",
//                   height: "4px",
//                   backgroundColor: "#e53935",
//                   borderRadius: "4px",
//                 },
//               }}
//             >
//               How It Works
//             </Typography>
            
//             <Typography
//               variant="h6"
//               color="text.secondary"
//               sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//             >
//               Our streamlined process makes finding or selling properties easier than ever
//             </Typography>
//           </Box>
          
//           <Grid container spacing={5} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Zoom in={loaded} timeout={1000}>
//                 <Box
//                   component="img"
//                   src="https://source.unsplash.com/random/600x400/?real,estate,technology"
//                   alt="Real Estate Platform"
//                   sx={{
//                     width: "100%",
//                     height: "auto",
//                     borderRadius: "24px",
//                     boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//                   }}
//                 />
//               </Zoom>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box>
//                 {[
//                   {
//                     step: "01",
//                     title: "Create Your Account",
//                     description: "Sign up for free and set up your profile with your preferences and requirements."
//                   },
//                   {
//                     step: "02",
//                     title: "Browse or List Properties",
//                     description: "Search for properties that match your criteria or list your own property for sale."
//                   },
//                   {
//                     step: "03",
//                     title: "Connect with Buyers or Sellers",
//                     description: "Communicate directly with interested parties through our secure messaging system."
//                   },
//                   {
//                     step: "04",
//                     title: "Close the Deal",
//                     description: "Finalize your transaction with confidence, supported by our platform's tools and resources."
//                   }
//                 ].map((item, index) => (
//                   <Fade in={loaded} timeout={1000 + (index * 200)} key={index}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         mb: 4,
//                         "&:last-child": {
//                           mb: 0,
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 60,
//                           height: 60,
//                           borderRadius: "50%",
//                           backgroundColor: index === 0 ? "#e53935" : "rgba(0, 0, 0, 0.05)",
//                           color: index === 0 ? "#ffffff" : "#212121",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           fontWeight: "bold",
//                           fontSize: "1.25rem",
//                           flexShrink: 0,
//                           mr: 3,
//                           boxShadow: index === 0 ? "0 8px 16px rgba(229, 57, 53, 0.3)" : "none",
//                         }}
//                       >
//                         {item.step}
//                       </Box>
                      
//                       <Box>
//                         <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                           {item.title}
//                         </Typography>
//                         <Typography variant="body1" color="text.secondary">
//                           {item.description}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Fade>
//                 ))}
                
//                 <Box sx={{ mt: 4 }}>
//                   <ActionButton
//                     size="large"
//                     component={RouterLink}
//                     to="/logon"
//                   >
//                     Get Started Now
//                   </ActionButton>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
      
//       {/* Testimonials Section */}
//       <Box id="testimonials" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 8 }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 position: "relative",
//                 display: "inline-block",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -16,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "80px",
//                   height: "4px",
//                   backgroundColor: "#e53935",
//                   borderRadius: "4px",
//                 },
//               }}
//             >
//               What Our Clients Say
//             </Typography>
            
//             <Typography
//               variant="h6"
//               color="text.secondary"
//               sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//             >
//               Hear from our satisfied users who have found success with our platform
//             </Typography>
//           </Box>
          
//           <Collapse in={testimonialVisible} timeout={800}>
//             <Grid container spacing={4}>
//               {[
//                 {
//                   name: "Sarah Johnson",
//                   role: "Property Seller",
//                   avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//                   testimonial: "I was able to sell my apartment within just 3 weeks of listing it on this platform. The analytics showing serious buyer interest helped me focus on the right prospects."
//                 },
//                 {
//                   name: "Michael Chen",
//                   role: "Home Buyer",
//                   avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//                   testimonial: "The property matching feature saved me so much time. I set my preferences and was notified immediately when my dream house was listed. Couldn't be happier with my purchase!"
//                 },
//                 {
//                   name: "Emma Rodriguez",
//                   role: "Real Estate Agent",
//                   avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//                   testimonial: "As an agent, this platform has revolutionized how I connect clients with properties. The detailed analytics and serious buyer filtering have increased my closing rate by 40%."
//                 }
//               ].map((item, index) => (
//                 <Grid item xs={12} md={4} key={index}>
//                   <TestimonialCard>
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                       <Avatar
//                         src={item.avatar}
//                         alt={item.name}
//                         sx={{ width: 64, height: 64, mr: 2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
//                       />
//                       <Box>
//                         <Typography variant="h6" component="h3" fontWeight="bold">
//                           {item.name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {item.role}
//                         </Typography>
//                       </Box>
//                     </Box>
                    
//                     <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
//                       "{item.testimonial}"
//                     </Typography>
                    
//                     <Box sx={{ display: "flex", color: "#FFB400" }}>
//                       {[...Array(5)].map((_, i) => (
//                         <Box key={i} sx={{ mr: 0.5 }}>★</Box>
//                       ))}
//                     </Box>
//                   </TestimonialCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </Collapse>
//         </Container>
//       </Box>
      
//       {/* CTA Section */}
//       <Box
//         sx={{
//           py: { xs: 8, md: 12 },
//           background: "linear-gradient(135deg, #e53935 0%, #d32f2f 100%)",
//           color: "#ffffff",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             opacity: 0.1,
         
//           }}
//         />
        
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={7}>
//               <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
//                 Ready to Find Your Perfect Property?
//               </Typography>
              
//               <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
//                 Join thousands of satisfied users who have successfully bought, sold, or found their ideal properties through our platform.
//               </Typography>
              
//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   component={RouterLink}
//                   to="/logon"
//                   sx={{
//                     backgroundColor: "#ffffff",
//                     color: "#e53935",
//                     fontWeight: "bold",
//                     borderRadius: "30px",
//                     padding: "12px 32px",
//                     textTransform: "none",
//                     fontSize: "1rem",
//                     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//                     "&:hover": {
//                       backgroundColor: "#f5f5f5",
//                       transform: "translateY(-3px)",
//                       boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
//                     },
//                   }}
//                 >
//                   Create Free Account
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   component={RouterLink}
//                   to="/search"
//                   sx={{
//                     color: "#ffffff",
//                     borderColor: "#ffffff",
//                     borderRadius: "30px",
//                     padding: "12px 32px",
//                     textTransform: "none",
//                     fontSize: "1rem",
//                     fontWeight: "bold",
//                     "&:hover": {
//                       borderColor: "#ffffff",
//                       backgroundColor: "rgba(255, 255, 255, 0.1)",
//                       transform: "translateY(-3px)",
//                     },
//                   }}
//                 >
//                   Browse Properties
//                 </Button>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={5}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   height: { xs: "300px", md: "400px" },
//                   width: "100%",
//                   borderRadius: "24px",
//                   overflow: "hidden",
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                   transform: "perspective(1000px) rotateY(5deg)",
//                   transition: "all 0.5s ease",
//                   "&:hover": {
//                     transform: "perspective(1000px) rotateY(0deg)",
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src="https://source.unsplash.com/random/600x800/?house,key"
//                   alt="Property Keys"
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.5s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
      
//       {/* Footer */}
//       <Box id="contact" sx={{ py: 6, backgroundColor: "#212121", color: "#ffffff" }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                 <Logo />
//                 <Typography variant="h5" component="h1" fontWeight="bold">
//                   RealEstate Hub
//                 </Typography>
//               </Box>
              
//               <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
//                 Your trusted platform for all real estate needs. We connect buyers and sellers to create successful property transactions.
//               </Typography>
              
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
//                   <IconButton
//                     key={index}
//                     sx={{
//                       color: "#ffffff",
//                       opacity: 0.7,
//                       "&:hover": {
//                         opacity: 1,
//                         backgroundColor: "rgba(255, 255, 255, 0.1)",
//                       },
//                     }}
//                   >
//                     {/* Replace with actual social media icons */}
//                     <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "currentColor" }} />
//                   </IconButton>
//                 ))}
//               </Box>
//             </Grid>
            
//             <Grid item xs={6} sm={3} md={2}>
//               <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                 Quick Links
//               </Typography>
              
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                 {["Home", "About Us", "Properties", "Pricing", "Contact"].map((link, index) => (
//                   <Link
//                     key={index}
//                     component="a"
//                     href="#"
//                     underline="none"
//                     sx={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       "&:hover": {
//                         color: "#ffffff",
//                       },
//                     }}
//                   >
//                     {link}
//                   </Link>
//                 ))}
//               </Box>
//             </Grid>
            
//             <Grid item xs={6} sm={3} md={2}>
//               <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                 Property Types
//               </Typography>
              
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                 {["Apartments", "Houses", "Villas", "Commercial", "Land", "Luxury"].map((type, index) => (
//                   <Link
//                     key={index}
//                     component="a"
//                     href="#"
//                     underline="none"
//                     sx={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       "&:hover": {
//                         color: "#ffffff",
//                       },
//                     }}
//                   >
//                     {type}
//                   </Link>
//                 ))}
//               </Box>
//             </Grid>
            
//             <Grid item xs={6} sm={3} md={2}>
//               <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                 Resources
//               </Typography>
              
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                 {["Blog", "Market Trends", "Guides", "FAQ", "Help Center", "Privacy Policy"].map((resource, index) => (
//                   <Link
//                     key={index}
//                     component="a"
//                     href="#"
//                     underline="none"
//                     sx={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       "&:hover": {
//                         color: "#ffffff",
//                       },
//                     }}
//                   >
//                     {resource}
//                   </Link>
//                 ))}
//               </Box>
//             </Grid>
            
//             <Grid item xs={6} sm={3} md={2}>
//               <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                 Contact Us
//               </Typography>
              
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                 <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//                   123 Real Estate Street
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//                   New York, NY 10001
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//                   info@realestatehub.com
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//                   +1 (555) 123-4567
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
          
//           <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />
          
//           <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
//               © {new Date().getFullYear()} RealEstate Hub. All rights reserved.
//             </Typography>
            
//             <Box sx={{ display: "flex", gap: 3 }}>
//               <Link
//                 component="a"
//                 href="#"
//                 underline="none"
//                 sx={{
//                   color: "rgba(255, 255, 255, 0.5)",
//                   fontSize: "0.875rem",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Terms of Service
//               </Link>
              
//               <Link
//                 component="a"
//                 href="#"
//                 underline="none"
//                 sx={{
//                   color: "rgba(255, 255, 255, 0.5)",
//                   fontSize: "0.875rem",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Privacy Policy
//               </Link>
              
//               <Link
//                 component="a"
//                 href="#"
//                 underline="none"
//                 sx={{
//                   color: "rgba(255, 255, 255, 0.5)",
//                   fontSize: "0.875rem",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Cookies
//               </Link>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };
// export default Welcome;
// //theb origional

















































//theb origional
// import MenuIcon from '@mui/icons-material/Menu';
// import React, { useState, useEffect, useRef } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   Divider,
//   Fade,
//   Grow,
//   Zoom,
//   useMediaQuery,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Link,
//   AppBar,
//   Toolbar,
//   Collapse,
//   Avatar,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   useScrollTrigger
// } from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SearchIcon from '@mui/icons-material/Search';
// import PublishIcon from '@mui/icons-material/Publish';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import LoginIcon from '@mui/icons-material/Login';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import HouseIcon from '@mui/icons-material/House';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import VillaIcon from '@mui/icons-material/Villa';
// import BusinessIcon from '@mui/icons-material/Business';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Styled components
// const HeroSection = styled(Box)(({ theme }) => ({
//   position: "relative",
//   minHeight: "85vh",
//   display: "flex",
//   alignItems: "center",
//   backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('https://source.unsplash.com/random/1920x1080/?luxury,real,estate')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "#ffffff",
//   overflow: "hidden",
//   backgroundColor: '#000000', // Changed from gradient to black
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
//     zIndex: 1,
//   },
//   [theme.breakpoints.down("md")]: {
//     minHeight: "70vh",
//   },
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   position: "relative",
//   zIndex: 2,
// }));

// const FeatureCard = styled(Card)(({ theme }) => ({
//   height: "100%",
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
//     "& .feature-icon": {
//       transform: "scale(1.1) rotate(5deg)",
//       color: "#e53935",
//     },
//     "& .feature-media": {
//       transform: "scale(1.05)",
//     }
//   },
// }));

// const FeatureIcon = styled(Box)(({ theme }) => ({
//   width: 80,
//   height: 80,
//   borderRadius: "50%",
//   backgroundColor: "rgba(229, 57, 53, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   margin: "0 auto 24px",
//   transition: "all 0.3s ease",
//   "& svg": {
//     fontSize: 40,
//     color: "#e53935",
//     transition: "all 0.3s ease",
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   boxShadow: "0 6px 20px rgba(229, 57, 53, 0.2)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   backgroundColor: "#e53935",
//   color: "#ffffff",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
//     transform: "translateX(-100%)",
//   },
//   "&:hover": {
//     backgroundColor: "#d32f2f",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(229, 57, 53, 0.3)",
//     "&::before": {
//       transform: "translateX(100%)",
//       transition: "all 0.7s ease",
//     },
//   },
//   "&:active": {
//     transform: "translateY(0)",
//   },
// }));

// const SecondaryButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   color: "#212121",
//   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//   "&:hover": {
//     backgroundColor: "#ffffff",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const PropertyTypeCard = styled(Card)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   height: "100%",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
//     "& .property-type-media": {
//       transform: "scale(1.05)",
//     },
//     "& .property-type-icon": {
//       backgroundColor: "#e53935",
//       color: "#ffffff",
//     }
//   },
// }));

// const StatsCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//     "& .stats-number": {
//       color: "#e53935",
//     },
//   },
// }));

// const TestimonialCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   position: "relative",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//   },
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "5px",
//     background: "linear-gradient(90deg, #e53935, #ff9800)",
//   },
// }));

// const Logo = styled(HomeWorkIcon)(({ theme }) => ({
//   fontSize: 40,
//   color: "#ffffff",
//   marginRight: theme.spacing(1.5),
//   filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.1) rotate(5deg)",
//   },
// }));

// const BackgroundAnimation = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 0,
//   overflow: "hidden",
//   "&::before, &::after": {
//     content: '""',
//     position: "absolute",
//     width: "600px",
//     height: "600px",
//     borderRadius: "50%",
//     opacity: 0.1,
//     animation: "pulse 15s infinite",
//   },
//   "&::before": {
//     background: "#e53935",
//     top: "-300px",
//     right: "-300px",
//   },
//   "&::after": {
//     background: "#ff9800",
//     bottom: "-300px",
//     left: "-300px",
//     animationDelay: "5s",
//   },
//   "@keyframes pulse": {
//     "0%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//     "50%": {
//       transform: "scale(1.1)",
//       opacity: 0.15,
//     },
//     "100%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//   },
// }));

// const NavButton = styled(Button)(({ theme }) => ({
//   color: "#ffffff",
//   textTransform: "none",
//   fontWeight: 500,
//   fontSize: "16px",
//   padding: theme.spacing(1, 2),
//   borderRadius: "8px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     transform: "translateY(-2px)",
//   },
// }));

// const AuthButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1, 3),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   marginLeft: theme.spacing(1),
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const Welcome = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [featuresVisible, setFeaturesVisible] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [testimonialVisible, setTestimonialVisible] = useState(false);
//   const [faqVisible, setFaqVisible] = useState(false); // New state for FAQ visibility
  
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
//   // Animation sequence
//   useEffect(() => {
//     setLoaded(true);
//     const timer1 = setTimeout(() => setFeaturesVisible(true), 500);
//     const timer2 = setTimeout(() => setStatsVisible(true), 800);
//     const timer3 = setTimeout(() => setTestimonialVisible(true), 1100);
//     const timer4 = setTimeout(() => setFaqVisible(true), 1400); // Set FAQ visibility
    
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4); // Clear the FAQ timeout
//     };
//   }, []);
  
//   return (
//     <Box sx={{ minHeight: "100vh" }}>
//       {/* Navigation */}
//       <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
//         <Toolbar sx={{ py: 1 }}>
//           <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//             <Logo />
//             <Typography
//               variant={isMobile ? "h6" : "h5"}
//               component="h1"
//               fontWeight="bold"
//               sx={{
//                 color: "#ffffff",
//                 textShadow: "0 2px 4px rgba(0,0,0,0.3)",
//               }}
//             >
//               RealEstate Hub
//             </Typography>
//           </Box>
          
//           {!isMobile && (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <NavButton component="a" href="#features">
//                 Features
//               </NavButton>
//               <NavButton component="a" href="#property-types">
//                 Property Types
//               </NavButton>
//               <NavButton component="a" href="#testimonials">
//                 Testimonials
//               </NavButton>
//               <NavButton component="a" href="#faq"> {/* Added link to FAQ */}
//                 FAQ
//               </NavButton>
//               <NavButton component="a" href="#contact">
//                 Contact
//               </NavButton>
              
//               <AuthButton
//                 variant="outlined"
//                 startIcon={<LoginIcon />}
//                 component={RouterLink}
//                 to="/login"
//                 sx={{
//                   color: "#ffffff",
//                   borderColor: "rgba(255,255,255,0.5)",
//                   "&:hover": {
//                     borderColor: "#ffffff",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                   },
//                 }}
//               >
//                 Login
//               </AuthButton>
              
//               <AuthButton
//                 variant="contained"
//                 startIcon={<PersonAddIcon />}
//                 component={RouterLink}
//                 to="/logon"
//                 sx={{
//                   backgroundColor: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "#d32f2f",
//                   },





// }}
// >
//   Sign Up
// </AuthButton>
// </Box>
// )}

// {isMobile && (
// <IconButton
// color="inherit"
// sx={{ ml: 1 }}
// >
// <MenuIcon />
// </IconButton>
// )}
// </Toolbar>
// </AppBar>

// {/* Hero Section */}
// <HeroSection>
// <BackgroundAnimation />
// <Container maxWidth="lg">
// <ContentWrapper>
// <Grid container spacing={4} alignItems="center">
// <Grid item xs={12} md={7}>
//   <Fade in={loaded} timeout={800}>
//     <Box>
//       <Typography
//         variant={isMobile ? "h3" : "h2"}
//         component="h1"
//         fontWeight="bold"
//         gutterBottom
//         sx={{
//           textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//           lineHeight: 1.2,
//         }}
//       >
//         Find Your Perfect Property Match
//       </Typography>
      
//       <Typography
//         variant={isMobile ? "h6" : "h5"}
//         component="h2"
//         sx={{
//           mb: 4,
//           fontWeight: 400,
//           opacity: 0.9,
//           textShadow: "0 2px 4px rgba(0,0,0,0.2)",
//           maxWidth: "600px",
//         }}
//       >
//         Your one-stop platform for buying, selling, and discovering real estate opportunities.
//       </Typography>
      
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
//         <ActionButton
//           size="large"
//           startIcon={<SearchIcon />}
//           component={RouterLink}
//           to="/search"
//         >
//           Find Properties
//         </ActionButton>
        
//         <SecondaryButton
//           size="large"
//           startIcon={<PublishIcon />}
//           component={RouterLink}
//           to="/publish"
//         >
//           List Your Property
//         </SecondaryButton>
//       </Box>
      
//       <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//           <Typography variant="body1" fontWeight={500}>
//             Verified Listings
//           </Typography>
//         </Box>
        
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//           <Typography variant="body1" fontWeight={500}>
//             Serious Buyers
//           </Typography>
//         </Box>
        
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//           <Typography variant="body1" fontWeight={500}>
//             Smart Matching
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   </Fade>
// </Grid>

// <Grid item xs={12} md={5}>
//   <Zoom in={loaded} timeout={1000}>
//     <Box
//       sx={{
//         position: "relative",
//         height: { xs: "300px", md: "400px" },
//         width: "100%",
//         borderRadius: "24px",
//         overflow: "hidden",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//         transform: "perspective(1000px) rotateY(-5deg)",
//         transition: "all 0.5s ease",
//         "&:hover": {
//           transform: "perspective(1000px) rotateY(0deg)",
//         },
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
//           zIndex: 1,
//         },
//       }}
//     >
//       <Box
//         component="img"
//         src="https://source.unsplash.com/random/600x800/?luxury,home,interior"
//         alt="Luxury Home Interior"
//         sx={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transition: "transform 0.5s ease",
//           "&:hover": {
//             transform: "scale(1.05)",
//           },
//         }}
//       />
      
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           p: 3,
//           zIndex: 2,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" sx={{ color: "#ffffff" }}>
//           Exclusive Properties
//         </Typography>
//         <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
//           Discover our handpicked selection of premium properties
//         </Typography>
//       </Box>
//     </Box>
//   </Zoom>
// </Grid>
// </Grid>

// <Box
// sx={{
//   display: "flex",
//   justifyContent: "center",
//   mt: { xs: 6, md: 10 },
// }}
// >
// <IconButton
//   component="a"
//   href="#features"
//   sx={{
//     backgroundColor: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(10px)",
//     color: "#ffffff",
//     p: 1.5,
//     "&:hover": {
//       backgroundColor: "rgba(255,255,255,0.2)",
//       transform: "translateY(5px)",
//     },
//     animation: "bounce 2s infinite",
//     "@keyframes bounce": {
//       "0%, 20%, 50%, 80%, 100%": {
//         transform: "translateY(0)",
//       },
//       "40%": {
//         transform: "translateY(-10px)",
//       },
//       "60%": {
//         transform: "translateY(-5px)",
//       },
//     },
//   }}
// >
//   <ExpandMoreIcon fontSize="large" />
// </IconButton>
// </Box>
// </ContentWrapper>
// </Container>
// </HeroSection>

// {/* Features Section */}
// <Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
//   position: "relative",
//   display: "inline-block",
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: -16,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "80px",
//     height: "4px",
//     backgroundColor: "#e53935",
//     borderRadius: "4px",
//   },
// }}
// >
// Our Services
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Discover how our platform can help you find, sell, or manage your real estate journey
// </Typography>
// </Box>

// <Fade in={featuresVisible} timeout={800}>
// <Grid container spacing={4}>
// <Grid item xs={12} md={4}>
//   <FeatureCard>
//     <CardContent sx={{ p: 4, textAlign: "center" }}>
//       <FeatureIcon className="feature-icon">
//         <PublishIcon />
//       </FeatureIcon>
      
//       <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//         List Your Property
//       </Typography>
      
//       <Typography variant="body1" color="text.secondary" paragraph>
//         Easily publish your property listings with detailed descriptions, high-quality photos, and all relevant information to attract serious buyers.
//       </Typography>
      
//       <Box sx={{ mt: 2 }}>
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Reach thousands of potential buyers
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Professional listing presentation
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium">
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Easy management dashboard
//         </Typography>
//       </Box>
      
//       <Button
//         variant="outlined"
//         color="primary"
//         sx={{
//           mt: 3,
//           borderRadius: "30px",
//           textTransform: "none",
//           fontWeight: 600,
//           borderColor: "#e53935",
//           color: "#e53935",
//           "&:hover": {
//             backgroundColor: "rgba(229, 57, 53, 0.05)",
//             borderColor: "#d32f2f",
//           },
//         }}
//         endIcon={<ArrowForwardIcon />}
//       >
//         Learn More
//       </Button>
//     </CardContent>
//   </FeatureCard>
// </Grid>

// <Grid item xs={12} md={4}>
//   <FeatureCard>
//     <CardContent sx={{ p: 4, textAlign: "center" }}>
//       <FeatureIcon className="feature-icon">
//         <BarChartIcon />
//       </FeatureIcon>
      
//       <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//         Track Serious Interest
//       </Typography>
      
//       <Typography variant="body1" color="text.secondary" paragraph>
//         Monitor the number of serious inquiries about your property. Our platform filters casual browsers from genuinely interested potential buyers.
//       </Typography>
      
//       <Box sx={{ mt: 2 }}>
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Real-time interest analytics
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Qualified buyer filtering
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium">
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Detailed visitor insights
//         </Typography>
//       </Box>
      
//       <Button
//         variant="outlined"
//         color="primary"
//         sx={{
//           mt: 3,
//           borderRadius: "30px",
//           textTransform: "none",
//           fontWeight: 600,
//           borderColor: "#e53935",
//           color: "#e53935",
//           "&:hover": {
//             backgroundColor: "rgba(229, 57, 53, 0.05)",
//             borderColor: "#d32f2f",
//           },
//         }}
//         endIcon={<ArrowForwardIcon />}
//       >
//         Learn More
//       </Button>
//     </CardContent>
//   </FeatureCard>
// </Grid>

// <Grid item xs={12} md={4}>
//   <FeatureCard>
//     <CardContent sx={{ p: 4, textAlign: "center" }}>
//       <FeatureIcon className="feature-icon">
//         <SearchIcon />
//       </FeatureIcon>
      
//       <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//         Smart Property Matching
//       </Typography>
      
//       <Typography variant="body1" color="text.secondary" paragraph>
//         Save your property requirements and get automatically matched with listings that meet your criteria. Never miss your dream property again.
//       </Typography>
      
//       <Box sx={{ mt: 2 }}>
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Personalized property alerts
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Advanced search filters
//         </Typography>
        
//         <Typography variant="body2" fontWeight="medium">
//           <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//           Save favorite properties
//         </Typography>
//       </Box>
      
//       <Button
//         variant="outlined"
//         color="primary"
//         sx={{
//           mt: 3,
//           borderRadius: "30px",
//           textTransform: "none",
//           fontWeight: 600,
//           borderColor: "#e53935",
//           color: "#e53935",
//           "&:hover": {
//             backgroundColor: "rgba(229, 57, 53, 0.05)",
//             borderColor: "#d32f2f",
//           },
//         }}
//         endIcon={<ArrowForwardIcon />}
//       >
//         Learn More
//       </Button>
//     </CardContent>
//   </FeatureCard>
// </Grid>
// </Grid>
// </Fade>
// </Container>
// </Box>

// {/* Property Types Section */}
// <Box id="property-types" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
//   position: "relative",
//   display: "inline-block",
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: -16,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "80px",
//     height: "4px",
//     backgroundColor: "#e53935",
//     borderRadius: "4px",
//   },
// }}
// >
// Explore Property Types
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Browse through various property categories to find exactly what you're looking for
// </Typography>
// </Box>

// <Grid container spacing={3}>
// {[
// { 
//   title: "Apartments", 
//   icon: <ApartmentIcon />, 
//   image: "https://source.unsplash.com/random/600x400/?apartment", 
//   count: 1245 
// },
// { 
//   title: "Houses", 
//   icon: <HouseIcon />, 
//   image: "https://source.unsplash.com/random/600x400/?house",


// count: 873 
// },
// { 
//   title: "Villas", 
//   icon: <VillaIcon />, 
//   image: "https://source.unsplash.com/random/600x400/?villa", 
//   count: 342 
// },
// { 
//   title: "Commercial", 
//   icon: <BusinessIcon />, 
//   image: "https://source.unsplash.com/random/600x400/?office", 
//   count: 568 
// }
// ].map((item, index) => (
// <Grid item xs={12} sm={6} md={3} key={index}>
//   <Zoom in={loaded} timeout={800 + (index * 200)}>
//     <PropertyTypeCard>
//       <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
//         <CardMedia
//           component="img"
//           image={item.image}
//           alt={item.title}
//           className="property-type-media"
//           sx={{
//             height: "100%",
//             transition: "transform 0.5s ease",
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             top: 16,
//             right: 16,
//             backgroundColor: "rgba(255, 255, 255, 0.9)",
//             borderRadius: "20px",
//             py: 0.5,
//             px: 1.5,
//             fontWeight: "medium",
//             fontSize: "0.875rem",
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {item.count} listings
//         </Box>
//       </Box>
//       <CardContent sx={{ textAlign: "center" }}>
//         <Box
//           className="property-type-icon"
//           sx={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             backgroundColor: "rgba(0, 0, 0, 0.05)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             margin: "-30px auto 16px",
//             transition: "all 0.3s ease",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             "& svg": {
//               fontSize: 30,
//               color: "#212121",
//               transition: "all 0.3s ease",
//             },
//           }}
//         >
//           {item.icon}
//         </Box>
//         <Typography variant="h6" component="h3" fontWeight="bold">
//           {item.title}
//         </Typography>
//         <Button
//           sx={{
//             mt: 1,
//             textTransform: "none",
//             fontWeight: 600,
//             color: "#e53935",
//             "&:hover": {
//               backgroundColor: "rgba(229, 57, 53, 0.05)",
//             },
//           }}
//           endIcon={<ArrowForwardIcon />}
//         >
//           Browse {item.title}
//         </Button>
//       </CardContent>
//     </PropertyTypeCard>
//   </Zoom>
// </Grid>
// ))}
// </Grid>
// </Container>
// </Box>

// {/* Stats Section */}
// <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
// <Container maxWidth="lg">
// <Fade in={statsVisible} timeout={800}>
// <Grid container spacing={4}>
// {[
//   { number: "10,000+", label: "Active Listings", icon: <HomeWorkIcon /> },
//   { number: "15,000+", label: "Happy Clients", icon: <FavoriteIcon /> },
//   { number: "95%", label: "Success Rate", icon: <CheckCircleOutlineIcon /> },
//   { number: "24/6", label: "Customer Support", icon: <SearchIcon /> }
// ].map((stat, index) => (
//   <Grid item xs={6} md={3} key={index}>
//     <StatsCard>
//       <Box
//         sx={{
//           width: 70,
//           height: 70,
//           borderRadius: "50%",
//           backgroundColor: "rgba(229, 57, 53, 0.1)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           mb: 2,
//           "& svg": {
//             fontSize: 36,
//             color: "#e53935",
//           },
//         }}
//       >
//         {stat.icon}
//       </Box>
//       <Typography
//         variant="h4"
//         component="p"
//         fontWeight="bold"
//         className="stats-number"
//         sx={{ transition: "color 0.3s ease" }}
//       >
//         {stat.number}
//       </Typography>
//       <Typography variant="subtitle1" color="text.secondary">
//         {stat.label}
//       </Typography>
//     </StatsCard>
//   </Grid>
// ))}
// </Grid>
// </Fade>
// </Container>
// </Box>

// {/* How It Works Section */}
// <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
//   position: "relative",
//   display: "inline-block",
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: -16,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "80px",
//     height: "4px",
//     backgroundColor: "#e53935",
//     borderRadius: "4px",
//   },
// }}
// >
// How It Works
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Our streamlined process makes finding or selling properties easier than ever
// </Typography>
// </Box>

// <Grid container spacing={5} alignItems="center">
// <Grid item xs={12} md={6}>
// <Zoom in={loaded} timeout={1000}>
//   <Box
//     component="img"
//     src="https://source.unsplash.com/random/600x400/?real,estate,technology"
//     alt="Real Estate Platform"
//     sx={{
//       width: "100%",
//       height: "auto",
//       borderRadius: "24px",
//       boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//     }}
//   />
// </Zoom>
// </Grid>

// <Grid item xs={12} md={6}>
// <Box>
//   {[
//     {
//       step: "01",
//       title: "Create Your Account",
//       description: "Sign up for free and set up your profile with your preferences and requirements."
//     },
//     {
//       step: "02",
//       title: "Browse or List Properties",
//       description: "Search for properties that match your criteria or list your own property for sale."
//     },
//     {
//       step: "03",
//       title: "Connect with Buyers or Sellers",
//       description: "Communicate directly with interested parties through our secure messaging system."
//     },
//     {
//       step: "04",
//       title: "Close the Deal",
//       description: "Finalize your transaction with confidence, supported by our platform's tools and resources."
//     }
//   ].map((item, index) => (
//     <Fade in={loaded} timeout={1000 + (index * 200)} key={index}>
//       <Box
//         sx={{
//           display: "flex",
//           mb: 4,
//           "&:last-child": {
//             mb: 0,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             backgroundColor: index === 0 ? "#e53935" : "rgba(0, 0, 0, 0.05)",
//             color: index === 0 ? "#ffffff" : "#212121",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontWeight: "bold",
//             fontSize: "1.25rem",
//             flexShrink: 0,
//             mr: 3,
//             boxShadow: index === 0 ? "0 8px 16px rgba(229, 57, 53, 0.3)" : "none",
//           }}
//         >
//           {item.step}
//         </Box>
        
//         <Box>
//           <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//             {item.title}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             {item.description}
//           </Typography>
//         </Box>
//       </Box>
//     </Fade>
//   ))}
  
//   <Box sx={{ mt: 4 }}>
//     <ActionButton
//       size="large"
//       component={RouterLink}
//       to="/logon"
//     >
//       Get Started Now
//     </ActionButton>
//   </Box>
// </Box>
// </Grid>
// </Grid>
// </Container>
// </Box>

// {/* Testimonials Section */}
// <Box id="testimonials" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
//   position: "relative",
//   display: "inline-block",
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: -16,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "80px",
//     height: "4px",
//     backgroundColor: "#e53935",
//     borderRadius: "4px",
//   },
// }}
// >
// What Our Clients Say
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Hear from our satisfied users who have found success with our platform
// </Typography>
// </Box>

// <Collapse in={testimonialVisible} timeout={800}>
// <Grid container spacing={4}>
// {[
//   {
//     name: "Sarah Johnson",
//     role: "Property Seller",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     testimonial: "I was able to sell my apartment within just 3 weeks of listing it on this platform. The analytics showing serious buyer interest helped me focus on the right prospects."
//   },
//   {
//     name: "Michael Chen",
//     role: "Home Buyer",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     testimonial: "The property matching feature saved me so much time. I set my preferences and was notified immediately when my dream house was listed. Couldn't be happier with my purchase!"
//   },
//   {
//     name: "Emma Rodriguez",
//     role: "Real Estate Agent",
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//     testimonial: "As an agent, this platform has revolutionized how I connect clients with properties. The detailed analytics and serious buyer filtering have increased my closing rate by 40%."
//   }
// ].map((item, index) => (
//   <Grid item xs={12} md={4} key={index}>
//     <TestimonialCard>
//       <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//         <Avatar
//           src={item.avatar}
//           alt={item.name}
//           sx={{ width: 64, height: 64, mr: 2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
//         />
//         <Box>
//           <Typography variant="h6" component="h3" fontWeight="bold">
//             {item.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {item.role}
//           </Typography>
//         </Box>
//       </Box>
      
//       <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
//         "{item.testimonial}"
//       </Typography>
      
//       <Box sx={{ display: "flex", color: "#FFB400" }}>
//         {[...Array(5)].map((_, i) => (
//           <Box key={i} sx={{ mr: 0.5 }}>★</Box>
//         ))}
//       </Box>
//     </TestimonialCard>
//   </Grid>
// ))}
// </Grid>
// </Collapse>
// </Container>
// </Box>

// {/* FAQ Section */}
// {/* FAQ Section */}
// <Box id="faq" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f0f0f0" }}>
//   <Container maxWidth="md">
//     <Box sx={{ textAlign: "center", mb: 8 }}>
//       <Typography
//         variant="h3"
//         component="h2"
//         fontWeight="bold"
//         gutterBottom
//         sx={{
//           position: "relative",
//           display: "inline-block",
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             bottom: -16,
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#e53935",
//             borderRadius: "4px",
//           },
//         }}
//       >
//         Frequently Asked Questions
//       </Typography>
//       <Typography
//         variant="h6"
//         color="text.secondary"
//         sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//       >
//         Find answers to common questions about our platform.
//       </Typography>
//     </Box>
//     <motion.div
//       ref={faqRef}
//       initial={{ opacity: 0, y: 20 }}
//       animate={faqControls}
//     >
//       <Box>
//         <Accordion defaultExpanded>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             sx={{ backgroundColor: 'rgba(229, 57, 53, 0.05)' }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               How does the property matching work?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1" color="text.secondary">
//               Our AI-powered matching system analyzes your preferences, budget,
//               and other criteria to suggest properties that best fit your needs.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             sx={{ backgroundColor: 'rgba(229, 57, 53, 0.05)' }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               How do I list my property?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1" color="text.secondary">
//               Create an account, provide detailed information about your
//               property, upload high-quality photos, and set your price. Our
//               platform guides you through each step.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             sx={{ backgroundColor: 'rgba(229, 57, 53, 0.05)' }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               Are the listings verified?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1" color="text.secondary">
//               Yes, we verify all listings to ensure accuracy and prevent fraud.
//               Our team reviews each listing before it goes live.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             sx={{ backgroundColor: 'rgba(229, 57, 53, 0.05)' }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               How can I contact support?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1" color="text.secondary">
//               You can reach our support team via email at
//               info@realestatehub.com or by phone at +1 (555) 123-4567.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </motion.div>
//   </Container>
// </Box>



// {/* CTA Section */}
// <Box
// sx={{
// py: { xs: 8, md: 12 },
// background: "linear-gradient(135deg, #e53935 0%, #d32f2f 100%)",
// color: "#ffffff",
// position: "relative",
// overflow: "hidden",
// }}
// >
// <Box
// sx={{
// position: "absolute",
// top: 0,
// left: 0,
// right: 0,
// bottom: 0,
// opacity: 0.1,

// }}
// />

// <Container maxWidth="lg">
// <Grid container spacing={4} alignItems="center">
// <Grid item xs={12} md={7}>
// <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
// Ready to Find Your Perfect Property?
// </Typography>

// <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
// Join thousands of satisfied users who have successfully bought, sold, or found their ideal properties through our platform.
// </Typography>

// <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
// <Button
//   variant="contained"
//   size="large"
//   component={RouterLink}
//   to="/logon"
//   sx={{
//     backgroundColor: "#ffffff",
//     color: "#e53935",
//     fontWeight: "bold",
//     borderRadius: "30px",
//     padding: "12px 32px",
//     textTransform: "none",
//     fontSize: "1rem",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     "&:hover": {
//       backgroundColor: "#f5f5f5",
//       transform: "translateY(-3px)",
//       boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
//     },
//   }}
// >
//   Create Free Account
// </Button>

// <Button
//   variant="outlined"
//   size="large"
//   component={RouterLink}
//   to="/search"
//   sx={{
//     color: "#ffffff",
//     borderColor: "#ffffff",
//     borderRadius: "30px",
//     padding: "12px 32px",
//     textTransform: "none",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     "&:hover": {
//       borderColor: "#ffffff",
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//       transform: "translateY(-3px)",
//     },
//   }}
// >
//   Browse Properties
// </Button>
// </Box>
// </Grid>

// <Grid item xs={12} md={5}>
// <Box
// sx={{
//   position: "relative",
//   height: { xs: "300px", md: "400px" },
//   width: "100%",
//   borderRadius: "24px",
//   overflow: "hidden",
//   boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//   transform: "perspective(1000px) rotateY(5deg)",
//   transition: "all 0.5s ease",
//   "&:hover": {
//     transform: "perspective(1000px) rotateY(0deg)",
//   },
// }}
// >
// <Box
//   component="img"
//   src="https://source.unsplash.com/random/600x800/?house,key"
//   alt="Property Keys"
//   sx={{
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     transition: "transform 0.5s ease",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   }}
// />
// </Box>
// </Grid>
// </Grid>
// </Container>
// </Box>

// {/* Footer */}
// <Box id="contact" sx={{ py: 6, backgroundColor: "#212121", color: "#ffffff" }}>
// <Container maxWidth="lg">
// <Grid container spacing={4}>
// <Grid item xs={12} md={4}>
// <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
// <Logo />
// <Typography variant="h5" component="h1" fontWeight="bold">
//   RealEstate Hub
// </Typography>
// </Box>

// <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
// Your trusted platform for all real estate needs. We connect buyers and sellers to create successful property transactions.
// </Typography>

// <Box sx={{ display: "flex", gap: 2 }}>
// {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
//   <IconButton
//     key={index}
//     sx={{
//       color: "#ffffff",
//       opacity: 0.7,
//       "&:hover": {
//         opacity: 1,
//         backgroundColor: "rgba(255, 255, 255, 0.1)",
//       },
//     }}
//   >
//     {/* Replace with actual social media icons */}
//     <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "currentColor" }} />
//   </IconButton>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Quick Links
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Home", "About Us", "Properties", "Pricing", "Contact"].map((link, index) => (
//   <Link
//     key={index}
//     component="a"
//     href="#"
//     underline="none"
//     sx={{
//       color: "rgba(255, 255, 255, 0.7)",
//       "&:hover": {
//         color: "#ffffff",
//       },
//     }}
//   >
//     {link}
//   </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Property Types
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Apartments", "Houses", "Villas", "Commercial", "Land", "Luxury"].map((type, index) => (
//   <Link
//     key={index}
//     component="a"
//     href="#"
//     underline="none"
//     sx={{
//       color: "rgba(255, 255, 255, 0.7)",
//       "&:hover": {
//         color: "#ffffff",
//       },
//     }}
//   >
//     {type}
//   </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Resources
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Blog", "Market Trends", "Guides", "FAQ", "Help Center", "Privacy Policy"].map((resource, index) => (
//   <Link
//     key={index}
//     component="a"
//     href="#"
//     underline="none"
//     sx={{
//       color: "rgba(255, 255, 255, 0.7)",
//       "&:hover": {
//         color: "#ffffff",
//       },
//     }}
//   >
//     {resource}
//   </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Contact Us
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//   123 Real Estate Street
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//   New York, NY 10001
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//   info@realestatehub.com
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
//   +1 (555) 123-4567
// </Typography>
// </Box>
// </Grid>
// </Grid>

// <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

// <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
// © {new Date().getFullYear()} RealEstate Hub. All rights reserved.
// </Typography>

// <Box sx={{ display: "flex", gap: 3 }}>
// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
//   color: "rgba(255, 255, 255, 0.5)",
//   fontSize: "0.875rem",
//   "&:hover": {
//     color: "#ffffff",
//   },
// }}
// >
// Terms of Service
// </Link>

// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
//   color: "rgba(255, 255, 255, 0.5)",
//   fontSize: "0.875rem",
//   "&:hover": {
//     color: "#ffffff",
//   },
// }}
// >
// Privacy Policy
// </Link>

// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
//   color: "rgba(255, 255, 255, 0.5)",
//   fontSize: "0.875rem",
//   "&:hover": {
//     color: "#ffffff",
//   },
// }}
// >
// Cookies
// </Link>
// </Box>
// </Box>
// </Container>
// </Box>
// </Box>
// );
// };
// export default Welcome;





































//theb origional






























// import React, { useState, useRef, useEffect } from 'react'; // Import useRef
// import { Link as RouterLink } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   Divider,
//   Fade,
//   Grow,
//   Zoom,
//   useMediaQuery,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Link,
//   AppBar,
//   Toolbar,
//   Collapse,
//   Avatar,
//   Slide, // Import Slide
//   Accordion, // Import Accordion
//   AccordionSummary, // Import AccordionSummary
//   AccordionDetails, // Import AccordionDetails
// } from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SearchIcon from '@mui/icons-material/Search';
// import PublishIcon from '@mui/icons-material/Publish';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import LoginIcon from '@mui/icons-material/Login';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import HouseIcon from '@mui/icons-material/House';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import VillaIcon from '@mui/icons-material/Villa';
// import BusinessIcon from '@mui/icons-material/Business';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import MenuIcon from '@mui/icons-material/Menu';

// // Styled components
// const HeroSection = styled(Box)(({ theme }) => ({
//   position: "relative",
//   minHeight: "85vh",
//   display: "flex",
//   alignItems: "center",
//   backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('https://source.unsplash.com/random/1920x1080/?luxury,real,estate')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "#ffffff",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
//     zIndex: 1,
//   },
//   [theme.breakpoints.down("md")]: {
//     minHeight: "70vh",
//   },
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   position: "relative",
//   zIndex: 2,
// }));

// const FeatureCard = styled(Card)(({ theme }) => ({
//   height: "100%",
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
//     "& .feature-icon": {
//       transform: "scale(1.1) rotate(5deg)",
//       color: "#e53935",
//     },
//     "& .feature-media": {
//       transform: "scale(1.05)",
//     }
//   },
// }));

// const FeatureIcon = styled(Box)(({ theme }) => ({
//   width: 80,
//   height: 80,
//   borderRadius: "50%",
//   backgroundColor: "rgba(229, 57, 53, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   margin: "0 auto 24px",
//   transition: "all 0.3s ease",
//   "& svg": {
//     fontSize: 40,
//     color: "#e53935",
//     transition: "all 0.3s ease",
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   boxShadow: "0 6px 20px rgba(229, 57, 53, 0.2)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   backgroundColor: "#e53935",
//   color: "#ffffff",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
//     transform: "translateX(-100%)",
//   },
//   "&:hover": {
//     backgroundColor: "#d32f2f",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(229, 57, 53, 0.3)",
//     "&::before": {
//       transform: "translateX(100%)",
//       transition: "all 0.7s ease",
//     },
//   },
//   "&:active": {
//     transform: "translateY(0)",
//   },
// }));

// const SecondaryButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1.5, 4),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   color: "#212121",
//   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//   "&:hover": {
//     backgroundColor: "#ffffff",
//     transform: "translateY(-3px)",
//     boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const PropertyTypeCard = styled(Card)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   height: "100%",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
//     "& .property-type-media": {
//       transform: "scale(1.05)",
//     },
//     "& .property-type-icon": {
//       backgroundColor: "#e53935",
//       color: "#ffffff",
//     }
//   },
// }));

// const StatsCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//     "& .stats-number": {
//       color: "#e53935",
//     },
//   },
// }));

// const TestimonialCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: "16px",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//   position: "relative",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
//   },
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "5px",
//     background: "linear-gradient(90deg, #e53935, #ff9800)",
//   },
// }));

// const Logo = styled(HomeWorkIcon)(({ theme }) => ({
//   fontSize: 40,
//   color: "#ffffff",
//   marginRight: theme.spacing(1.5),
//   filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.1) rotate(5deg)",
//   },
// }));

// const BackgroundAnimation = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 0,
//   overflow: "hidden",
//   "&::before, &::after": {
//     content: '""',
//     position: "absolute",
//     width: "600px",
//     height: "600px",
//     borderRadius: "50%",
//     opacity: 0.1,
//     animation: "pulse 15s infinite",
//   },
//   "&::before": {
//     background: "#e53935",
//     top: "-300px",
//     right: "-300px",
//   },
//   "&::after": {
//     background: "#ff9800",
//     bottom: "-300px",
//     left: "-300px",
//     animationDelay: "5s",
//   },
//   "@keyframes pulse": {
//     "0%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//     "50%": {
//       transform: "scale(1.1)",
//       opacity: 0.15,
//     },
//     "100%": {
//       transform: "scale(1)",
//       opacity: 0.1,
//     },
//   },
// }));

// const NavButton = styled(Button)(({ theme }) => ({
//   color: "#ffffff",
//   textTransform: "none",
//   fontWeight: 500,
//   fontSize: "16px",
//   padding: theme.spacing(1, 2),
//   borderRadius: "8px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     transform: "translateY(-2px)",
//   },
// }));

// const AuthButton = styled(Button)(({ theme }) => ({
//   borderRadius: "30px",
//   padding: theme.spacing(1, 3),
//   textTransform: "none",
//   fontWeight: 600,
//   transition: "all 0.3s ease",
//   marginLeft: theme.spacing(1),
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const Welcome = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [featuresVisible, setFeaturesVisible] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [testimonialVisible, setTestimonialVisible] = useState(false);
//   const [faqVisible, setFaqVisible] = useState(false); // New state for FAQ

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));

//   // Refs for sections
//   const featuresRef = useRef(null); // Use useRef
//   const propertyTypesRef = useRef(null); // Use useRef
//   const statsRef = useRef(null); // Use useRef
//   const testimonialsRef = useRef(null); // Use useRef
//   const faqRef = useRef(null); // Use useRef
//   const faqRefInView = useRef(null); // Use useRef

//   // Animation sequence
//   useEffect(() => {
//     setLoaded(true);
//     const timer1 = setTimeout(() => setFeaturesVisible(true), 500);
//     const timer2 = setTimeout(() => setStatsVisible(true), 800);
//     const timer3 = setTimeout(() => setTestimonialVisible(true), 1100);
//     const timer4 = setTimeout(() => setFaqVisible(true), 1400); // Set FAQ visibility

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4); // Clear the FAQ timeout
//     };
//   }, []);

//   return (
//     <Box sx={{ minHeight: "100vh" }}>
//       {/* Navigation */}
//       <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
//         <Toolbar sx={{ py: 1 }}>
//           <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//             <Logo />
//             <Typography
//               variant={isMobile ? "h6" : "h5"}
//               component="h1"
//               fontWeight="bold"
//               sx={{
//                 color: "#ffffff",
//                 textShadow: "0 2px 4px rgba(0,0,0,0.3)",
//               }}
//             >
//               RealEstate Hub
//             </Typography>
//           </Box>

//           {!isMobile && (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <NavButton component="a" href="#features">
//                 Features
//               </NavButton>
//               <NavButton component="a" href="#property-types">
//                 Property Types
//               </NavButton>
//               <NavButton component="a" href="#testimonials">
//                 Testimonials
//               </NavButton>
//               <NavButton component="a" href="#faq"> {/* Added link to FAQ */}
//                 FAQ
//               </NavButton>
//               <NavButton component="a" href="#contact">
//                 Contact
//               </NavButton>

//               <AuthButton
//                 variant="outlined"
//                 startIcon={<LoginIcon />}
//                 component={RouterLink}
//                 to="/login"
//                 sx={{
//                   color: "#ffffff",
//                   borderColor: "rgba(255,255,255,0.5)",
//                   "&:hover": {
//                     borderColor: "#ffffff",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                   },
//                 }}
//               >
//                 Login
//               </AuthButton>

//               <AuthButton
//                 variant="contained"
//                 startIcon={<PersonAddIcon />}
//                 component={RouterLink}
//                 to="/logon"
//                 sx={{
//                   backgroundColor: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "#d32f2f",
//                   },
//                 }}
//               >
//                 Sign Up
//               </AuthButton>
//             </Box>
//           )}

//           {isMobile && (
//             <IconButton
//               color="inherit"
//               sx={{ ml: 1 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}

// </Toolbar>
// </AppBar>

// {/* Hero Section */}
// <HeroSection>
//   <BackgroundAnimation />
//   <Container maxWidth="lg">
//     <ContentWrapper>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={7}>
//           <Fade in={loaded} timeout={800}>
//             <Box>
//               <Typography
//                 variant={isMobile ? "h3" : "h2"}
//                 component="h1"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{
//                   textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Find Your Perfect Property Match
//               </Typography>

//               <Typography
//                 variant={isMobile ? "h6" : "h5"}
//                 component="h2"
//                 sx={{
//                   mb: 4,
//                   fontWeight: 400,
//                   opacity: 0.9,
//                   textShadow: "0 2px 4px rgba(0,0,0,0.2)",
//                   maxWidth: "600px",
//                 }}
//               >
//                 Your one-stop platform for buying, selling, and discovering real estate opportunities.
//               </Typography>

//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
//                 <ActionButton
//                   size="large"
//                   startIcon={<SearchIcon />}
//                   component={RouterLink}
//                   to="/search"
//                 >
//                   Find Properties
//                 </ActionButton>

//                 <SecondaryButton
//                   size="large"
//                   startIcon={<PublishIcon />}
//                   component={RouterLink}
//                   to="/publish"
//                 >
//                   List Your Property
//                 </SecondaryButton>
//               </Box>

//               <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                   <Typography variant="body1" fontWeight={500}>
//                     Verified Listings
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                   <Typography variant="body1" fontWeight={500}>
//                     Serious Buyers
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
//                   <Typography variant="body1" fontWeight={500}>
//                     Smart Matching
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Fade>
//         </Grid>

//         <Grid item xs={12} md={5}>
//           <Zoom in={loaded} timeout={1000}>
//             <Box
//               sx={{
//                 position: "relative",
//                 height: { xs: "300px", md: "400px" },
//                 width: "100%",
//                 borderRadius: "24px",
//                 overflow: "hidden",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                 transform: "perspective(1000px) rotateY(-5deg)",
//                 transition: "all 0.5s ease",
//                 "&:hover": {
//                   transform: "perspective(1000px) rotateY(0deg)",
//                 },
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
//                   zIndex: 1,
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src="https://source.unsplash.com/random/600x800/?luxury,home,interior"
//                 alt="Luxury Home Interior"
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.5s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               />

//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   p: 3,
//                   zIndex: 2,
//                 }}
//               >
//                 <Typography variant="h6" fontWeight="bold" sx={{ color: "#ffffff" }}>
//                   Exclusive Properties
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
//                   Discover our handpicked selection of premium properties
//                 </Typography>
//               </Box>
//             </Box>
//           </Zoom>
//         </Grid>
//       </Grid>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           mt: { xs: 6, md: 10 },
//         }}
//       >
//         <IconButton
//           component="a"
//           href="#features"
//           sx={{
//             backgroundColor: "rgba(255,255,255,0.1)",
//             backdropFilter: "blur(10px)",
//             color: "#ffffff",
//             p: 1.5,
//             "&:hover": {
//               backgroundColor: "rgba(255,255,255,0.2)",
//               transform: "translateY(5px)",
//             },
//             animation: "bounce 2s infinite",
//             "@keyframes bounce": {
//               "0%, 20%, 50%, 80%, 100%": {
//                 transform: "translateY(0)",
//               },
//               "40%": {
//                 transform: "translateY(-10px)",
//               },
//               "60%": {
//                 transform: "translateY(-5px)",
//               },
//             },
//           }}
//         >
//           <ExpandMoreIcon fontSize="large" />
//         </IconButton>
//       </Box>
//     </ContentWrapper>
//   </Container>
// </HeroSection>

// {/* Features Section */}
// <Box id="features" ref={featuresRef} sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
//   <Container maxWidth="lg">
//     <Box sx={{ textAlign: "center", mb: 8 }}>
//       <Typography
//         variant="h3"
//         component="h2"
//         fontWeight="bold"
//         gutterBottom
//         sx={{
//           position: "relative",
//           display: "inline-block",
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             bottom: -16,
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#e53935",
//             borderRadius: "4px",
//           },
//         }}
//       >
//         Our Services
//       </Typography>

//       <Typography
//         variant="h6"
//         color="text.secondary"
//         sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//       >
//         Discover how our platform can help you find, sell, or manage your real estate journey
//       </Typography>
//     </Box>

//     <Fade in={featuresVisible} timeout={800}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={4}>
//           <FeatureCard>
//             <CardContent sx={{ p: 4, textAlign: "center" }}>
//               <FeatureIcon className="feature-icon">
//                 <PublishIcon />
//               </FeatureIcon>

//               <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                 List Your Property
//               </Typography>

//               <Typography variant="body1" color="text.secondary" paragraph>
//                 Easily publish your property listings with detailed descriptions, high-quality photos, and all relevant information to attract serious buyers.
//               </Typography>

//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Reach thousands of potential buyers
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Professional listing presentation
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium">
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Easy management dashboard
//                 </Typography>
//               </Box>

//               <Button
//                 variant="outlined"
//                 color="primary"
//                 sx={{
//                   mt: 3,
//                   borderRadius: "30px",
//                   textTransform: "none",
//                   fontWeight: 600,
//                   borderColor: "#e53935",
//                   color: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "rgba(229, 57, 53, 0.05)",
//                     borderColor: "#d32f2f",
//                   },
//                 }}
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </FeatureCard>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <FeatureCard>
//             <CardContent sx={{ p: 4, textAlign: "center" }}>
//               <FeatureIcon className="feature-icon">
//                 <BarChartIcon />
//               </FeatureIcon>

//               <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                 Track Serious Interest
//               </Typography>

//               <Typography variant="body1" color="text.secondary" paragraph>
//                 Monitor the number of serious inquiries about your property. Our platform filters casual browsers from genuinely interested potential buyers.
//               </Typography>

//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Real-time interest analytics
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Qualified buyer filtering
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium">
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Detailed visitor insights
//                 </Typography>
//               </Box>

//               <Button
//                 variant="outlined"
//                 color="primary"
//                 sx={{
//                   mt: 3,
//                   borderRadius: "30px",
//                   textTransform: "none",
//                   fontWeight: 600,
//                   borderColor: "#e53935",
//                   color: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "rgba(229, 57, 53, 0.05)",
//                     borderColor: "#d32f2f",
//                   },
//                 }}
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </FeatureCard>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <FeatureCard>
//             <CardContent sx={{ p: 4, textAlign: "center" }}>
//               <FeatureIcon className="feature-icon">
//                 <SearchIcon />
//               </FeatureIcon>

//               <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//                 Smart Property Matching
//               </Typography>

//               <Typography variant="body1" color="text.secondary" paragraph>
//                 Save your property requirements and get automatically matched with listings that meet your criteria. Never miss your dream property again.
//               </Typography>

//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Personalized property alerts
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Advanced search filters
//                 </Typography>

//                 <Typography variant="body2" fontWeight="medium">
//                   <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
//                   Save favorite properties
//                 </Typography>
//               </Box>

//               <Button
//                 variant="outlined"
//                 color="primary"
//                 sx={{
//                   mt: 3,
//                   borderRadius: "30px",
//                   textTransform: "none",
//                   fontWeight: 600,
//                   borderColor: "#e53935",
//                   color: "#e53935",
//                   "&:hover": {
//                     backgroundColor: "rgba(229, 57, 53, 0.05)",
//                     borderColor: "#d32f2f",
//                   },
//                 }}
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </FeatureCard>
//         </Grid>
//       </Grid>
//     </Fade>
//   </Container>
// </Box>

// {/* Property Types Section */}
// <Box id="property-types" ref={propertyTypesRef} sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
//   <Container maxWidth="lg">
//     <Box sx={{ textAlign: "center", mb: 8 }}>
//       <Typography
//         variant="h3"
//         component="h2"
//         fontWeight="bold"
//         gutterBottom
//         sx={{
//           position: "relative",
//           display: "inline-block",
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             bottom: -16,
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#e53935",
//             borderRadius: "4px",
//           },
//         }}
//       >
//         Explore Property Types
//       </Typography>

//       <Typography
//         variant="h6"
//         color="text.secondary"
//         sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
//       >
//         Browse through various property categories to find exactly what you're looking for
//       </Typography>
//     </Box>

//     <Grid container spacing={3}>
//       {[
//         {
//           title: "Apartments",
//           icon: <ApartmentIcon />,
//           image: "https://source.unsplash.com/random/600x400/?apartment",
//           count: 1245
//         },
//         {
//           title: "Houses",
//           icon: <HouseIcon />,
//           image: "https://source.unsplash.com/random/600x400/?house",
//           count: 873
//         },
//         {
//           title: "Villas",
//           icon: <VillaIcon />,
//           image: "https://source.unsplash.com/random/600x400/?villa",
//           count: 342
//         },
//         {
//           title: "Commercial",
//           icon: <BusinessIcon />,
//           image: "https://source.unsplash.com/random/600x400/?office",
//           count: 568
//         }
//       ].map((item, index) => (
//         <Grid item xs={12


// } md={3} key={index}>
// <Zoom in={loaded} timeout={800 + (index * 200)}>
//   <PropertyTypeCard>
//     <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
//       <CardMedia
//         component="img"
//         image={item.image}
//         alt={item.title}
//         className="property-type-media"
//         sx={{
//           height: "100%",
//           transition: "transform 0.5s ease",
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           top: 16,
//           right: 16,
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           borderRadius: "20px",
//           py: 0.5,
//           px: 1.5,
//           fontWeight: "medium",
//           fontSize: "0.875rem",
//           boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {item.count} listings
//       </Box>
//     </Box>
//     <CardContent sx={{ textAlign: "center" }}>
//       <Box
//         className="property-type-icon"
//         sx={{
//           width: 60,
//           height: 60,
//           borderRadius: "50%",
//           backgroundColor: "rgba(0, 0, 0, 0.05)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "-30px auto 16px",
//           transition: "all 0.3s ease",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           "& svg": {
//             fontSize: 30,
//             color: "#212121",
//             transition: "all 0.3s ease",
//           },
//         }}
//       >
//         {item.icon}
//       </Box>
//       <Typography variant="h6" component="h3" fontWeight="bold">
//         {item.title}
//       </Typography>
//       <Button
//         sx={{
//           mt: 1,
//           textTransform: "none",
//           fontWeight: 600,
//           color: "#e53935",
//           "&:hover": {
//             backgroundColor: "rgba(229, 57, 53, 0.05)",
//           },
//         }}
//         endIcon={<ArrowForwardIcon />}
//       >
//         Browse {item.title}
//       </Button>
//     </CardContent>
//   </PropertyTypeCard>
// </Zoom>
// </Grid>
// ))}
// </Grid>
// </Container>
// </Box>

// {/* Stats Section */}
// <Box id="stats" ref={statsRef} sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
// <Container maxWidth="lg">
// <Fade in={statsVisible} timeout={800}>
// <Grid container spacing={4}>
// {[
// { number: "10,000+", label: "Active Listings", icon: <HomeWorkIcon /> },
// { number: "15,000+", label: "Happy Clients", icon: <FavoriteIcon /> },
// { number: "95%", label: "Success Rate", icon: <CheckCircleOutlineIcon /> },
// { number: "24/6", label: "Customer Support", icon: <SearchIcon /> }
// ].map((stat, index) => (
// <Grid item xs={6} md={3} key={index}>
//   <StatsCard>
//     <Box
//       sx={{
//         width: 70,
//         height: 70,
//         borderRadius: "50%",
//         backgroundColor: "rgba(229, 57, 53, 0.1)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         mb: 2,
//         "& svg": {
//           fontSize: 36,
//           color: "#e53935",
//         },
//       }}
//     >
//       {stat.icon}
//     </Box>
//     <Typography
//       variant="h4"
//       component="p"
//       fontWeight="bold"
//       className="stats-number"
//       sx={{ transition: "color 0.3s ease" }}
//     >
//       {stat.number}
//     </Typography>
//     <Typography variant="subtitle1" color="text.secondary">
//       {stat.label}
//     </Typography>
//   </StatsCard>
// </Grid>
// ))}
// </Grid>
// </Fade>
// </Container>
// </Box>

// {/* How It Works Section */}
// <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
// position: "relative",
// display: "inline-block",
// "&::after": {
//   content: '""',
//   position: "absolute",
//   bottom: -16,
//   left: "50%",
//   transform: "translateX(-50%)",
//   width: "80px",
//   height: "4px",
//   backgroundColor: "#e53935",
//   borderRadius: "4px",
// },
// }}
// >
// How It Works
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Our streamlined process makes finding or selling properties easier than ever
// </Typography>
// </Box>

// <Grid container spacing={5} alignItems="center">
// <Grid item xs={12} md={6}>
// <Zoom in={loaded} timeout={1000}>
// <Box
//   component="img"
//   src="https://source.unsplash.com/random/600x400/?real,estate,technology"
//   alt="Real Estate Platform"
//   sx={{
//     width: "100%",
//     height: "auto",
//     borderRadius: "24px",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//   }}
// />
// </Zoom>
// </Grid>

// <Grid item xs={12} md={6}>
// <Box>
// {[
//   {
//     step: "01",
//     title: "Create Your Account",
//     description: "Sign up for free and set up your profile with your preferences and requirements."
//   },
//   {
//     step: "02",
//     title: "Browse or List Properties",
//     description: "Search for properties that match your criteria or list your own property for sale."
//   },
//   {
//     step: "03",
//     title: "Connect with Buyers or Sellers",
//     description: "Communicate directly with interested parties through our secure messaging system."
//   },
//   {
//     step: "04",
//     title: "Close the Deal",
//     description: "Finalize your transaction with confidence, supported by our platform's tools and resources."
//   }
// ].map((item, index) => (
//   <Fade in={loaded} timeout={1000 + (index * 200)} key={index}>
//     <Box
//       sx={{
//         display: "flex",
//         mb: 4,
//         "&:last-child": {
//           mb: 0,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           width: 60,
//           height: 60,
//           borderRadius: "50%",
//           backgroundColor: index === 0 ? "#e53935" : "rgba(0, 0, 0, 0.05)",
//           color: index === 0 ? "#ffffff" : "#212121",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontWeight: "bold",
//           fontSize: "1.25rem",
//           flexShrink: 0,
//           mr: 3,
//           boxShadow: index === 0 ? "0 8px 16px rgba(229, 57, 53, 0.3)" : "none",
//         }}
//       >
//         {item.step}
//       </Box>

//       <Box>
//         <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
//           {item.title}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {item.description}
//         </Typography>
//       </Box>
//     </Box>
//   </Fade>
// ))}

// <Box sx={{ mt: 4 }}>
//   <ActionButton
//     size="large"
//     component={RouterLink}
//     to="/logon"
//   >
//     Get Started Now
//   </ActionButton>
// </Box>
// </Box>
// </Grid>
// </Grid>
// </Container>
// </Box>

// {/* Testimonials Section */}
// <Box id="testimonials" ref={testimonialsRef} sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
// <Container maxWidth="lg">
// <Box sx={{ textAlign: "center", mb: 8 }}>
// <Typography
// variant="h3"
// component="h2"
// fontWeight="bold"
// gutterBottom
// sx={{
// position: "relative",
// display: "inline-block",
// "&::after": {
//   content: '""',
//   position: "absolute",
//   bottom: -16,
//   left: "50%",
//   transform: "translateX(-50%)",
//   width: "80px",
//   height: "4px",
//   backgroundColor: "#e53935",
//   borderRadius: "4px",
// },
// }}
// >
// What Our Clients Say
// </Typography>

// <Typography
// variant="h6"
// color="text.secondary"
// sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
// >
// Hear from our satisfied users who have found success with our platform
// </Typography>
// </Box>

// <Collapse in={testimonialVisible} timeout={800}>
// <Grid container spacing={4}>
// {[
// {
//   name: "Sarah Johnson",
//   role: "Property Seller",
//   avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   testimonial: "I was able to sell my apartment within just 3 weeks of listing it on this platform. The analytics showing serious buyer interest helped me focus on the right prospects."
// },
// {
//   name: "Michael Chen",
//   role: "Home Buyer",
//   avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//   testimonial: "The property matching feature saved me so much time. I set my preferences and was notified immediately when my dream house was listed. Couldn't be happier with my purchase!"
// },
// {
//   name: "Emma Rodriguez",
//   role: "Real Estate Agent",
//   avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//   testimonial: "As an agent, this platform has revolutionized how I connect clients with properties. The detailed analytics and serious buyer filtering have increased my closing rate by 40%."
// }
// ].map((item, index) => (
// <Grid item xs={12} md={4} key={index}>
//   <TestimonialCard>
//     <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//       <Avatar
//         src={item.avatar}
//         alt={item.name}
//         sx={{ width: 64, height: 64, mr: 2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
//       />
//       <Box>
//         <Typography variant="h6" component="h3" fontWeight="bold">
//           {item.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {item.role}
//         </Typography>
//       </Box>
//     </Box>

//     <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
//       "{item.testimonial}"
//     </Typography>

//     <Box sx={{ display: "flex", color: "#FFB400" }}>
//       {[...Array(5)].map((_, i) => (
//         <Box key={i} sx={{ mr: 0.5 }}>★</Box>
//       ))}
//     </Box>
//   </TestimonialCard>
// </Grid>
// ))}
// </Grid>
// </Collapse>
// </Container>
// </Box>

// {/* FAQ Section */}
// <Box id="faq" ref={faqRef} sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
// <Container maxWidth="md">
// <Box sx={{ textAlign: "center", mb: 6 }}>
// <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
// Frequently Asked Questions
// </Typography>
// <Typography variant="h6" color="text.secondary">
// Find answers to common questions about our platform.
// </Typography>
// </Box>

// {/* Accordion for FAQ */}
// <Box>
// {[
// {
// question: "How do I list my property?",
// answer: "To list your property, create an account, provide property details, upload photos, and set your price. Our platform guides you through each step.",
// },
// {
// question: "How does the property matching work?",
// answer: "Our AI analyzes your preferences (location, budget, property type) and matches you with relevant listings. You'll receive personalized alerts for new matches.",
// },
// {
// question: "Is my information secure?",
// answer: "Yes, we use industry-standard security measures to protect your data. Your privacy is our priority.",
// },
// {
// question: "How can I contact customer support?",
// answer: "You can reach our support team via email at info@realestatehub.com or by phone at +1 (555) 123-4567. We're here to help!",
// },
// ].map((faq, index) => (
// <Accordion key={index} defaultExpanded={false}>
// <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}a-content`} id={`panel${index + 1}a-header`}>
//   <Typography variant="h6" fontWeight="bold">
//     {faq.question}
//   </Typography>
// </AccordionSummary>
// <AccordionDetails>
//   <Typography variant="body1" color="text.secondary">
//     {faq.answer}
//   </Typography>
// </AccordionDetails>
// </Accordion>
// ))}
// </Box>
// </Container>
// </Box>

// {/* CTA Section */}
// <Box
// sx={{
// py: { xs: 8, md: 12 },
// background: "linear-gradient(135deg, #e53935 0%, #d32f2f 100%)",
// color: "#ffffff",
// position: "relative",
// overflow: "hidden",
// }}
// >
// <Box
// sx={{
// position: "absolute",
// top: 0,
// left: 0,
// right: 0,
// bottom: 0,
// opacity: 0.1,

// }}
// />

// <Container maxWidth="lg">
// <Grid container spacing={4} alignItems="center">
// <Grid item xs={12} md={7}>
// <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
// Ready to Find Your Perfect Property?
// </Typography>

// <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
// Join thousands of satisfied users who have successfully bought, sold, or found their ideal properties through our platform.
// </Typography>

// <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
// <Button
//   variant="contained"
//   size="large"
//   component={RouterLink}
//   to="/logon"

// sx={{
//   backgroundColor: "#ffffff",
//   color: "#e53935",
//   fontWeight: "bold",
//   borderRadius: "30px",
//   padding: "12px 32px",
//   textTransform: "none",
//   fontSize: "1rem",
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//   "&:hover": {
//     backgroundColor: "#f5f5f5",
//     transform: "translateY(-3px)",
//     boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
//   },
// }}
// >
// Create Free Account
// </Button>

// <Button
// variant="outlined"
// size="large"
// component={RouterLink}
// to="/search"
// sx={{
//   color: "#ffffff",
//   borderColor: "#ffffff",
//   borderRadius: "30px",
//   padding: "12px 32px",
//   textTransform: "none",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   "&:hover": {
//     borderColor: "#ffffff",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     transform: "translateY(-3px)",
//   },
// }}
// >
// Browse Properties
// </Button>
// </Box>
// </Grid>

// <Grid item xs={12} md={5}>
// <Box
// sx={{
// position: "relative",
// height: { xs: "300px", md: "400px" },
// width: "100%",
// borderRadius: "24px",
// overflow: "hidden",
// boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
// transform: "perspective(1000px) rotateY(5deg)",
// transition: "all 0.5s ease",
// "&:hover": {
//   transform: "perspective(1000px) rotateY(0deg)",
// },
// }}
// >
// <Box
// component="img"
// src="https://source.unsplash.com/random/600x800/?house,key"
// alt="Property Keys"
// sx={{
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   transition: "transform 0.5s ease",
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
// }}
// />
// </Box>
// </Grid>
// </Grid>
// </Container>
// </Box>

// {/* Footer */}
// <Box id="contact" sx={{ py: 6, backgroundColor: "#212121", color: "#ffffff" }}>
// <Container maxWidth="lg">
// <Grid container spacing={4}>
// <Grid item xs={12} md={4}>
// <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
// <Logo />
// <Typography variant="h5" component="h1" fontWeight="bold">
// RealEstate Hub
// </Typography>
// </Box>

// <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
// Your trusted platform for all real estate needs. We connect buyers and sellers to create successful property transactions.
// </Typography>

// <Box sx={{ display: "flex", gap: 2 }}>
// {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
// <IconButton
//   key={index}
//   sx={{
//     color: "#ffffff",
//     opacity: 0.7,
//     "&:hover": {
//       opacity: 1,
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//     },
//   }}
// >
//   {/* Replace with actual social media icons */}
//   <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "currentColor" }} />
// </IconButton>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Quick Links
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Home", "About Us", "Properties", "Pricing", "Contact"].map((link, index) => (
// <Link
//   key={index}
//   component="a"
//   href="#"
//   underline="none"
//   sx={{
//     color: "rgba(255, 255, 255, 0.7)",
//     "&:hover": {
//       color: "#ffffff",
//     },
//   }}
// >
//   {link}
// </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Property Types
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Apartments", "Houses", "Villas", "Commercial", "Land", "Luxury"].map((type, index) => (
// <Link
//   key={index}
//   component="a"
//   href="#"
//   underline="none"
//   sx={{
//     color: "rgba(255, 255, 255, 0.7)",
//     "&:hover": {
//       color: "#ffffff",
//     },
//   }}
// >
//   {type}
// </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Resources
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// {["Blog", "Market Trends", "Guides", "FAQ", "Help Center", "Privacy Policy"].map((resource, index) => (
// <Link
//   key={index}
//   component="a"
//   href="#"
//   underline="none"
//   sx={{
//     color: "rgba(255, 255, 255, 0.7)",
//     "&:hover": {
//       color: "#ffffff",
//     },
//   }}
// >
//   {resource}
// </Link>
// ))}
// </Box>
// </Grid>

// <Grid item xs={6} sm={3} md={2}>
// <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
// Contact Us
// </Typography>

// <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
// 123 Real Estate Street
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
// New York, NY 10001
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
// info@realestatehub.com
// </Typography>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
// +1 (555) 123-4567
// </Typography>
// </Box>
// </Grid>
// </Grid>

// <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

// <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
// <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
// © {new Date().getFullYear()} RealEstate Hub. All rights reserved.
// </Typography>

// <Box sx={{ display: "flex", gap: 3 }}>
// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
// color: "rgba(255, 255, 255, 0.5)",
// fontSize: "0.875rem",
// "&:hover": {
//   color: "#ffffff",
// },
// }}
// >
// Terms of Service
// </Link>

// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
// color: "rgba(255, 255, 255, 0.5)",
// fontSize: "0.875rem",
// "&:hover": {
//   color: "#ffffff",
// },
// }}
// >
// Privacy Policy
// </Link>

// <Link
// component="a"
// href="#"
// underline="none"
// sx={{
// color: "rgba(255, 255, 255, 0.5)",
// fontSize: "0.875rem",
// "&:hover": {
//   color: "#ffffff",
// },
// }}
// >
// Cookies
// </Link>
// </Box>
// </Box>
// </Container>
// </Box>
// </Box>
// );
// };
// export default Welcome;






































































import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  Fade,
  Grow,
  Zoom,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  AppBar,
  Toolbar,
  Collapse,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useScrollTrigger
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('https://source.unsplash.com/random/1920x1080/?luxury,real,estate')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#ffffff",
  overflow: "hidden",
  backgroundColor: '#000000', // Changed from gradient to black
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
    zIndex: 1,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "70vh",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
    "& .feature-icon": {
      transform: "scale(1.1) rotate(5deg)",
      color: "#e53935",
    },
    "& .feature-media": {
      transform: "scale(1.05)",
    }
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "rgba(229, 57, 53, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: 40,
    color: "#e53935",
    transition: "all 0.3s ease",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "0 6px 20px rgba(229, 57, 53, 0.2)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#e53935",
  color: "#ffffff",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
    transform: "translateX(-100%)",
  },
  "&:hover": {
    backgroundColor: "#d32f2f",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(229, 57, 53, 0.3)",
    "&::before": {
      transform: "translateX(100%)",
      transition: "all 0.7s ease",
    },
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#212121",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#ffffff",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
}));

const PropertyTypeCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    "& .property-type-media": {
      transform: "scale(1.05)",
    },
    "& .property-type-icon": {
      backgroundColor: "#e53935",
      color: "#ffffff",
    }
  },
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
    "& .stats-number": {
      color: "#e53935",
    },
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    background: "red",
  },
}));

const Logo = styled(HomeWorkIcon)(({ theme }) => ({
  fontSize: 40,
  color: "#ffffff",
  marginRight: theme.spacing(1.5),
  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
  },
}));

const BackgroundAnimation = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  overflow: "hidden",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    opacity: 0.1,
    animation: "pulse 15s infinite",
  },
  "&::before": {
    background: "#e53935",
    top: "-300px",
    right: "-300px",
  },
  "&::after": {
    background: "#ff9800",
    bottom: "-300px",
    left: "-300px",
    animationDelay: "5s",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 0.1,
    },
    "50%": {
      transform: "scale(1.1)",
      opacity: 0.15,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.1,
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "16px",
  padding: theme.spacing(1, 2),
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)",
  },
}));

const AuthButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  marginLeft: theme.spacing(1),
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const Welcome = () => {
  const [loaded, setLoaded] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false); // New state for FAQ visibility
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Animation controls
  const featuresControls = useAnimation();
  const statsControls = useAnimation();
  const testimonialControls = useAnimation();
  const faqControls = useAnimation();
  const propertyTypeControls = useAnimation();

  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [testimonialRef, testimonialInView] = useInView({ threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ threshold: 0.2 });
  const [propertyTypeRef, propertyTypeInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!featuresInView) {
      featuresControls.start({ opacity: 0, y: 20 });
    }
  }, [featuresControls, featuresInView]);

  useEffect(() => {
    if (statsInView) {
      statsControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!statsInView) {
      statsControls.start({ opacity: 0, y: 20 });
    }
  }, [statsControls, statsInView]);

  useEffect(() => {
    if (testimonialInView) {
      testimonialControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!testimonialInView) {
      testimonialControls.start({ opacity: 0, y: 20 });
    }
  }, [testimonialControls, testimonialInView]);

  useEffect(() => {
    if (faqInView) {
      faqControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!faqInView) {
      faqControls.start({ opacity: 0, y: 20 });
    }
  }, [faqControls, faqInView]);

  useEffect(() => {
    if (propertyTypeInView) {
      propertyTypeControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!propertyTypeInView) {
      propertyTypeControls.start({ opacity: 0, y: 20 });
    }
  }, [propertyTypeControls, propertyTypeInView]);

  // Animation sequence
  useEffect(() => {
    setLoaded(true);
    const timer1 = setTimeout(() => setFeaturesVisible(true), 500);
    const timer2 = setTimeout(() => setStatsVisible(true), 800);
    const timer3 = setTimeout(() => setTestimonialVisible(true), 1100);
    const timer4 = setTimeout(() => setFaqVisible(true), 1400); // Set FAQ visibility

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4); // Clear the FAQ timeout
    };
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
<Toolbar sx={{ py: 1 }}>
  <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
    <Logo />
    <Typography
      variant={isMobile ? "h6" : "h5"}
      component="h1"
      fontWeight="bold"
      sx={{
        color: "#ffffff",
        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }}
    >
      RealEstate Hub
    </Typography>
  </Box>

  {!isMobile && (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <NavButton component="a" href="#features">
        Features
      </NavButton>
      <NavButton component="a" href="#property-types">
        Property Types
      </NavButton>
      <NavButton component="a" href="#testimonials">
        Testimonials
      </NavButton>
      <NavButton component="a" href="#faq"> {/* Added link to FAQ */}
        FAQ
      </NavButton>
      <NavButton component="a" href="#contact">
        Contact
      </NavButton>

      <AuthButton
        variant="outlined"
        startIcon={<LoginIcon />}
        component={RouterLink}
        to="/login"
        sx={{
          color: "#ffffff",
          borderColor: "rgba(255,255,255,0.5)",
          "&:hover": {
            borderColor: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        Login
      </AuthButton>

      <AuthButton
        variant="contained"
        startIcon={<PersonAddIcon />}
        component={RouterLink}
        to="/logon"
        sx={{
          backgroundColor: "#e53935",
          "&:hover": {
            backgroundColor: "#d32f2f",
          },
        }}
      >
        Sign Up
      </AuthButton>
    </Box>
  )}

  {isMobile && (
    <IconButton
      color="inherit"
      sx={{ ml: 1 }}
    >
      <MenuIcon />
    </IconButton>
  )}
</Toolbar>
</AppBar>

{/* Hero Section */}
<HeroSection>
<BackgroundAnimation />
<Container maxWidth="lg">
  <ContentWrapper>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={7}>
        <Fade in={loaded} timeout={800}>
          <Box>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                lineHeight: 1.2,
              }}
            >
              Find Your Perfect Property Match
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              sx={{
                mb: 4,
                fontWeight: 400,
                opacity: 0.9,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "600px",
              }}
            >
              Your one-stop platform for buying, selling, and discovering real estate opportunities.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
              <ActionButton
                size="large"
                startIcon={<SearchIcon />}
                component={RouterLink}
                to="/search"
              >
                Find Properties
              </ActionButton>

              <SecondaryButton
                size="large"
                startIcon={<PublishIcon />}
                component={RouterLink}
                to="/publish"
              >
                List Your Property
              </SecondaryButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Verified Listings
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Serious Buyers
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Smart Matching
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Grid>

      <Grid item xs={12} md={5}>
        <Zoom in={loaded} timeout={1000}>
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", md: "400px" },
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transform: "perspective(1000px) rotateY(-5deg)",
              transition: "all 0.5s ease",
              "&:hover": {
                transform: "perspective(1000px) rotateY(0deg)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                zIndex: 1,
              },
            }}
          >
            <Box
              component="img"
              src="https://source.unsplash.com/random/600x800/?luxury,home,interior"
              alt="Luxury Home Interior"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                zIndex: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#ffffff" }}>
                Exclusive Properties
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                Discover our handpicked selection of premium properties
              </Typography>
            </Box>
          </Box>
        </Zoom>
      </Grid>
    </Grid>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 6, md: 10 },
      }}
    >
      <IconButton
        component="a"
        href="#features"
        sx={{
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
          p: 1.5,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
            transform: "translateY(5px)",
          },
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateY(0)",
            },
            "40%": {
              transform: "translateY(-10px)",
            },
            "60%": {
              transform: "translateY(-5px)",
            },
          },
        }}
      >
        <ExpandMoreIcon fontSize="large" />
      </IconButton>
    </Box>
  </ContentWrapper>
</Container>
</HeroSection>

{/* Features Section */}
<Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      Our Services
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Discover how our platform can help you find, sell, or manage your real estate journey
    </Typography>
  </Box>

  <motion.div
    ref={featuresRef}
    initial={{ opacity: 0, y: 20 }}
    animate={featuresControls}
  >
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <PublishIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              List Your Property
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Easily publish your property listings with detailed descriptions, high-quality photos, and all relevant information to attract serious buyers.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Reach thousands of potential buyers
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Professional listing presentation
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Easy management dashboard
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <BarChartIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              Track Serious Interest
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Monitor the number of serious inquiries about your property. Our platform filters casual browsers from genuinely interested potential buyers.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Real-time interest analytics
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Qualified buyer filtering
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Detailed visitor insights
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <SearchIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              Smart Property Matching
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Save your property requirements and get automatically matched with listings that meet your criteria. Never miss your dream property again.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Personalized property alerts
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Advanced search filters
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Save favorite properties
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>
    </Grid>


</motion.div>
</Container>
</Box>

{/* Property Types Section */}
<Box id="property-types" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      Explore Property Types
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Browse through various property categories to find exactly what you're looking for
    </Typography>
  </Box>

  <motion.div
    ref={propertyTypeRef}
    initial={{ opacity: 0, y: 20 }}
    animate={propertyTypeControls}
  >
    <Grid container spacing={3}>
      {[
        {
          title: "Apartments",
          icon: <ApartmentIcon />,
          image: "https://source.unsplash.com/random/600x400/?apartment",
          count: 1245
        },
        {
          title: "Houses",
          icon: <HouseIcon />,
          image: "https://source.unsplash.com/random/600x400/?house",
          count: 873
        },
        {
          title: "Villas",
          icon: <VillaIcon />,
          image: "https://source.unsplash.com/random/600x400/?villa",
          count: 342
        },
        {
          title: "Commercial",
          icon: <BusinessIcon />,
          image: "https://source.unsplash.com/random/600x400/?office",
          count: 568
        }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Zoom in={loaded} timeout={800 + (index * 200)}>
            <PropertyTypeCard>
              <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className="property-type-media"
                  sx={{
                    height: "100%",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "20px",
                    py: 0.5,
                    px: 1.5,
                    fontWeight: "medium",
                    fontSize: "0.875rem",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {item.count} listings
                </Box>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  className="property-type-icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-30px auto 16px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    "& svg": {
                      fontSize: 30,
                      color: "#212121",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {item.title}
                </Typography>
                <Button
                  sx={{
                    mt: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    color: "#e53935",
                    "&:hover": {
                      backgroundColor: "rgba(229, 57, 53, 0.05)",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Browse {item.title}
                </Button>
              </CardContent>
            </PropertyTypeCard>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

{/* Stats Section */}
<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <motion.div
    ref={statsRef}
    initial={{ opacity: 0, y: 20 }}
    animate={statsControls}
  >
    <Grid container spacing={4}>
      {[
        { number: "10,000+", label: "Active Listings", icon: <HomeWorkIcon /> },
        { number: "15,000+", label: "Happy Clients", icon: <FavoriteIcon /> },
        { number: "95%", label: "Success Rate", icon: <CheckCircleOutlineIcon /> },
        { number: "24/6", label: "Customer Support", icon: <SearchIcon /> }
      ].map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <StatsCard>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                backgroundColor: "rgba(229, 57, 53, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                "& svg": {
                  fontSize: 36,
                  color: "#e53935",
                },
              }}
            >
              {stat.icon}
            </Box>
            <Typography
              variant="h4"
              component="p"
              fontWeight="bold"
              className="stats-number"
              sx={{ transition: "color 0.3s ease" }}
            >
              {stat.number}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {stat.label}
            </Typography>
          </StatsCard>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

{/* How It Works Section */}
<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      How It Works
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Our streamlined process makes finding or selling properties easier than ever
    </Typography>
  </Box>

  <Grid container spacing={5} alignItems="center">
    <Grid item xs={12} md={6}>
      <Zoom in={loaded} timeout={1000}>
        <Box
          component="img"
          src="https://source.unsplash.com/random/600x400/?real,estate,technology"
          alt="Real Estate Platform"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        />
      </Zoom>
    </Grid>

    <Grid item xs={12} md={6}>
      <Box>
        {[
          {
            step: "01",
            title: "Create Your Account",
            description: "Sign up for free and set up your profile with your preferences and requirements."
          },
          {
            step: "02",
            title: "Browse or List Properties",
            description: "Search for properties that match your criteria or list your own property for sale."
          },
          {
            step: "03",
            title: "Connect with Buyers or Sellers",
            description: "Communicate directly with interested parties through our secure messaging system."
          },
          {
            step: "04",
            title: "Close the Deal",
            description: "Finalize your transaction with confidence, supported by our platform's tools and resources."
          }
        ].map((item, index) => (
          <Fade in={loaded} timeout={1000 + (index * 200)} key={index}>
            <Box
              sx={{
                display: "flex",
                mb: 4,
                "&:last-child": {
                  mb: 0,
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: index === 0 ? "#e53935" : "rgba(0, 0, 0, 0.05)",
                  color: index === 0 ? "#ffffff" : "#212121",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                  mr: 3,
                  boxShadow: index === 0 ? "0 8px 16px rgba(229, 57, 53, 0.3)" : "none",
                }}
              >
                {item.step}
              </Box>

              <Box>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Fade>
        ))}

        <Box sx={{ mt: 4 }}>
          <ActionButton
            size="large"
            component={RouterLink}
            to="/logon"
          >
            Get Started Now
          </ActionButton>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Container>
</Box>

{/* Testimonials Section */}
<Box id="testimonials" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      What Our Clients Say
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Hear from our satisfied users who have found success with our platform
    </Typography>
  </Box>

  <motion.div
    ref={testimonialRef}
    initial={{ opacity: 0, y: 20 }}
    animate={testimonialControls}
  >
    <Grid container spacing={4}>
      {[
        {
          name: "Sarah Johnson",
          role: "Property Seller",
          // avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          testimonial: "I was able to sell my apartment within just 3 weeks of listing it on this platform. The analytics showing serious buyer interest helped me focus on the right prospects."
        },
        {
          name: "Michael Chen",
          role: "Home Buyer",
          // avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          testimonial: "The property matching feature saved me so much time. I set my preferences and was notified immediately when my dream house was listed. Couldn't be happier with my purchase!"
        },
        {
          name: "Emma Rodriguez",
          role: "Real Estate Agent",
          // avatar: "https://randomuser.me/api/portraits/women/68.jpg",
          testimonial: "As an agent, this platform has revolutionized how I connect clients with properties. The detailed analytics and serious buyer filtering have increased my closing rate by 40%."
        }
      ].map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <TestimonialCard>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                src={item.avatar}
                alt={item.name}
                sx={{ width: 64, height: 64, mr: 2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
              />
              <Box>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
              "{item.testimonial}"
            </Typography>

            <Box sx={{ display: "flex", color: "black" }}>
              {[...Array(5)].map((_, i) => (
                <Box key={i} sx={{ mr: 0.5 }}>★</Box>
              ))}
            </Box>
          </TestimonialCard>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

      {/* FAQ Section */}
      <Box id="faq" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f0f0f0" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  backgroundColor: "#e53935",
                  borderRadius: "4px",
                },
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
            >
              Find answers to common questions about our platform.
            </Typography>
          </Box>
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqControls}
          >
            <Box>
              <Accordion
                defaultExpanded
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How does the property matching work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Our AI-powered matching system analyzes your preferences, budget,
                    and other criteria to suggest properties that best fit your needs.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How do I list my property?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Create an account, provide detailed information about your
                    property, upload high-quality photos, and set your price. Our
                    platform guides you through each step.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Are the listings verified?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Yes, we verify all listings to ensure accuracy and prevent fraud.
                    Our team reviews each listing before it goes live.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How can I contact support?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    You can reach our support team via email at
                    info@realestatehub.com or by phone at +1 (555) 123-4567.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </motion.div>
        </Container>
      </Box>


{/* CTA Section */}
<Box
sx={{
py: { xs: 8, md: 12 },
background: "linear-gradient(135deg, #e53935 0%, #d32f2f 100%)",
color: "#ffffff",
position: "relative",
overflow: "hidden",
}}
>
<Box
sx={{
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
opacity: 0.1,
}}
/>

<Container maxWidth="lg">
<Grid container spacing={4} alignItems="center">
<Grid item xs={12} md={7}>
<Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
  Ready to Find Your Perfect Property?
</Typography>

<Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
  Join thousands of satisfied users who have successfully bought, sold, or found their ideal properties through our platform.
</Typography>

<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
  <Button
    variant="contained"
    size="large"
    component={RouterLink}
    to="/logon"
    sx={{
      backgroundColor: "#ffffff",
      color: "#e53935",
      fontWeight: "bold",
      borderRadius: "30px",
      padding: "12px 32px",
      textTransform: "none",
      fontSize: "1rem",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        transform: "translateY(-3px)",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
      },
    }}
  >
    Create Free Account
  </Button>

  <Button
    variant="outlined"
    size="large"
    component={RouterLink}
    to="/search"
    sx={{
      color: "#ffffff",
      borderColor: "#ffffff",
      borderRadius: "30px",
      padding: "12px 32px",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        borderColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-3px)",
      },
    }}
  >
    Browse Properties
  </Button>
</Box>
</Grid>

<Grid item xs={12} md={5}>
<Box
  sx={{
    position: "relative",
    height: { xs: "300px", md: "400px" },
    width: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transform: "perspective(1000px) rotateY(5deg)",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "perspective(1000px) rotateY(0deg)",
    },
  }}
>
  <Box
    component="img"
    src="https://source.unsplash.com/random/600x800/?house,key"
    alt="Property Keys"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  />
</Box>
</Grid>
</Grid>
</Container>
</Box>

{/* Footer */}
<Box id="contact" sx={{ py: 6, backgroundColor: "#212121", color: "#ffffff" }}>
<Container maxWidth="lg">
<Grid container spacing={4}>
<Grid item xs={12} md={4}>
<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
  <Logo />
  <Typography variant="h5" component="h1" fontWeight="bold">
    RealEstate Hub
  </Typography>
</Box>

<Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
  Your trusted platform for all real estate needs. We connect buyers and sellers to create successful property transactions.
</Typography>

<Box sx={{ display: "flex", gap: 2 }}>
  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
    <IconButton
      key={index}
      sx={{
        color: "#ffffff",
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {/* Replace with actual social media icons */}
      <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "currentColor" }} />
    </IconButton>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Quick Links
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Home", "About Us", "Properties", "Pricing", "Contact"].map((link, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {link}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Property Types
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Apartments", "Houses", "Villas", "Commercial", "Land", "Luxury"].map((type, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {type}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Resources
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Blog", "Market Trends", "Guides", "FAQ", "Help Center", "Privacy Policy"].map((resource, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {resource}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Contact Us
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    123 Real Estate Street
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    New York, NY 10001
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    info@realestatehub.com
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    +1 (555) 123-4567
  </Typography>
</Box>
</Grid>
</Grid>

<Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
<Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
© {new Date().getFullYear()} RealEstate Hub. All rights reserved.
</Typography>

<Box sx={{ display: "flex", gap: 3 }}>
<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Terms of Service
</Link>

<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Privacy Policy
</Link>

<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Cookies
</Link>
</Box>
</Box>
</Container>
</Box>
</Box>
);
};
export default Welcome;



