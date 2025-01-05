import React from 'react';
import { Paper, Typography, Rating } from '@mui/material';
import { styled } from '@mui/system';

const PlaceContainer = styled(Paper)(({ theme }) => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
  cursor: 'pointer'
}));

const Place = ({ el }) => {
  return (
    <PlaceContainer elevation={3}>
      <Typography variant="subtitle2" gutterBottom>
        {el.name}
      </Typography>
      {el.rating && (
        <Rating size="small" value={Number(el.rating)} readOnly />
      )}
    </PlaceContainer>
  );
};

export default Place; 