import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { ListContainer, LoadingContainer, FormControl as StyledFormControl } from './ListStyles';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <ListContainer>
      <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress size="5rem" />
        </LoadingContainer>
      ) : (
        <>
          <StyledFormControl>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </StyledFormControl>
          <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto' }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails 
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place} 
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </ListContainer>
  );
};

export default List; 