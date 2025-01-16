import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card } from '../../Components/common/Card';
import { Button } from '../../Components/common/Button';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const Home = () => {
  const destinations = [
    {
      title: 'Paris',
      description: 'The city of love and lights',
      image: '/assets/images/paris.jpg',
    },
    // Add more destinations
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h1" gutterBottom>
            Explore The World
          </Typography>
          <Typography variant="h5" paragraph>
            Discover amazing places and create unforgettable memories
          </Typography>
          <Button size="large">Start Your Journey</Button>
        </Container>
      </HeroSection>

      <Container>
        <Typography variant="h2" gutterBottom align="center">
          Popular Destinations
        </Typography>
        <Grid container spacing={4}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card {...destination} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home; 