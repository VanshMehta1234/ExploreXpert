import React, { useState } from 'react';
import { Box, Typography, Skeleton, styled } from '@mui/material';

// Styled components
const ImageWrapper = styled(Box)({
  height: 250,
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
  },
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

// Card Component
const Card = ({ imageSrc, title, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box 
      sx={{ 
        background: 'rgba(26, 26, 26, 0.95)', 
        backdropFilter: 'blur(10px)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        transition: 'all 0.3s ease', 
        overflow: 'hidden', 
        transform: 'translateY(-10px)', 
        boxShadow: '0 20px 40px rgba(0, 188, 212, 0.15)', 
        border: '1px solid rgba(255, 255, 255, 0.2)', 
        '& .card-image': {
          transform: 'scale(1.1)',
        }
      }}
    >
      {/* Image Wrapper */}
      <ImageWrapper>
        {/* Skeleton loader while the image is loading */}
        {!imageLoaded && (
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%" 
            animation="wave"
          />
        )}

        {/* Image */}
        <StyledImage 
          className="card-image"
          src={imageSrc} 
          alt={title} 
          style={{ display: imageLoaded ? 'block' : 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
      </ImageWrapper>

      {/* Card Title */}
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom
        sx={{ 
          color: 'white',
          fontWeight: 600,
          marginTop: 2,
          padding: '0 16px',
        }}
      >
        {title}
      </Typography>

      {/* Card Description */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          padding: '0 16px',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Card;
