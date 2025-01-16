import React from 'react';
import { Box, Container, Grid, Typography, IconButton, useTheme, alpha, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../Components/common/Card';
import Button from '../../Components/common/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MapIcon from '@mui/icons-material/Map';
import LuggageIcon from '@mui/icons-material/Luggage';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from '../../Components/Header/Header';
import { IMAGES } from '../../constants/imageUrls';

console.log("ExploreHome Component Rendered");
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${IMAGES.hero.url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  padding: theme.spacing(25, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

const StepCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

const TestimonialCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: alpha(theme.palette.background.paper, 0.5),
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #4DD0E1 30%, #00BCD4 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1,
});

const ExploreHome = () => {
  
  const theme = useTheme();

  const featuredDestinations = [
    {
      title: 'Bali, Indonesia',
      description: 'Tropical paradise with stunning beaches and rich culture',
      image: IMAGES.destinations[0].url,
    },
    {
      title: 'Santorini, Greece',
      description: 'Iconic white buildings and breathtaking sunsets',
      image: IMAGES.destinations[1].url,
    },
    {
      title: 'Kyoto, Japan',
      description: 'Ancient temples and beautiful cherry blossoms',
      image: IMAGES.destinations[2].url,
    },
  ];

  const features = [
    {
      icon: <ExploreIcon fontSize="large" />,
      title: 'Trip Planning Made Easy',
      description: 'Create detailed itineraries and track all your plans in one place.',
    },
    {
      icon: <FlightTakeoffIcon fontSize="large" />,
      title: 'Seamless Booking',
      description: 'Book flights, buses, hotels, and activities with just a few clicks.',
    },
    {
      icon: <LuggageIcon fontSize="large" />,
      title: 'Packing Lists & Essentials',
      description: 'Generate customized packing lists tailored to your trip.',
    },
    {
      icon: <AccountBalanceWalletIcon fontSize="large" />,
      title: 'Budget Management',
      description: 'Stay on top of your expenses with our built-in money manager.',
    },
    {
      icon: <MapIcon fontSize="large" />,
      title: 'Interactive Maps',
      description: 'Explore destinations with our detailed travel maps.',
    },
    {
      icon: <ShareIcon fontSize="large" />,
      title: 'Share Your Journey',
      description: 'Share your photos and memories with friends and family in real-time.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Plan Your Trip',
      description: 'Organize your itinerary, decide on transportation, and create your packing list.',
    },
    {
      number: '02',
      title: 'Book & Confirm',
      description: 'Book flights, hotels, buses, and activities all in one go.',
    },
    {
      number: '03',
      title: 'Manage Your Finances',
      description: 'Track spending, currency conversion, and stay within your budget.',
    },
    {
      number: '04',
      title: 'Share & Relive Memories',
      description: 'Share your travel photos with others or create a travel journal.',
    },
  ];

  return (
    
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <HeroSection>
        <ImageOverlay />
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <GradientTypography variant="h1" sx={{ fontWeight: 800, mb: 3 }}>
            From Dreams to Destinations
          </GradientTypography>
          <Typography 
            variant="h5" 
            sx={{ mb: 4, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Your Ultimate All-in-One Travel Companion
          </Typography>
          <Button 
            size="large" 
            startIcon={<ExploreIcon />}
            sx={{ 
              padding: '15px 40px',
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #4DD0E1 30%, #00BCD4 90%)',
              boxShadow: '0 4px 20px rgba(0,188,212,0.4)',
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ py: 12, backgroundColor: 'background.default' }}>
        <Container>
          <GradientTypography variant="h2" align="center" sx={{ mb: 8 }}>
            Everything You Need for Your Journey
          </GradientTypography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StepCard
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${IMAGES.features[index].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <IconButton 
                    sx={{ 
                      color: '#fff',
                      backgroundColor: 'rgba(0, 188, 212, 0.2)',
                      mb: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 188, 212, 0.3)',
                      }
                    }}
                  >
                    {feature.icon}
                  </IconButton>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ color: '#fff', fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    sx={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    {feature.description}
                  </Typography>
                </StepCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ 
        py: 12, 
        backgroundColor: '#1A1A1A',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Container>
          <GradientTypography variant="h2" align="center" sx={{ mb: 8 }}>
            How ExploreXpert Works
          </GradientTypography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <StepCard>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      color: alpha(theme.palette.secondary.main, 0.2),
                      fontWeight: 800,
                      mb: 2
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </StepCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <GradientTypography variant="h2" gutterBottom>
            Ready to Begin Your Next Adventure?
          </GradientTypography>
          <Typography 
            variant="h5" 
            sx={{ mb: 4, opacity: 0.7 }}
          >
            Join thousands of travelers who plan their trips with ExploreXpert
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              background: 'linear-gradient(45deg, #FF6B6B 30%, #E74C3C 90%)',
              padding: '15px 40px',
            }}
          >
            Join ExploreXpert Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ExploreHome; 