import React, { useState } from "react";
import { OutlinedInput, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import PlaceholderImage from '../../../assets/images/placeholder.png';

const SearchContainer = styled('div')({
  display: "flex",
  flexDirection: "column"
});

const SearchInput = styled(OutlinedInput)({
  width: "100%"
});

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const SearchBox = ({ selectedPlaces, suggestionList, onSelectPlace, setNewPlace, newPlace, handleSaveItenory }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputFocus = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleInputChange = (event) => {
    setNewPlace(event.target.value);
    if (event.target.value.length === 0) {
      setShowSuggestions(false);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Click here to search"
        value={newPlace}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {showSuggestions && (
        <List component="nav" aria-label="search suggestions">
          {suggestionList
            .filter((place) =>
              place.display_name.toLowerCase().includes(newPlace.toLowerCase())
            )
            .map((item) => (
              <div key={item?.place_id}>
                <ListItem
                  button
                  sx={{ 
                    margin: '4px 8px', 
                    fontSize: '12px', 
                    backgroundColor: '#F6FDC3'
                  }}
                  onClick={() => {
                    handleInputFocus();
                    setNewPlace(item.display_name);
                    onSelectPlace(item);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={PlaceholderImage}
                      alt="Placeholder"
                      style={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item?.display_name} 
                    primaryTypographyProps={{ fontSize: '12px' }}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      )}
    </SearchContainer>
  );
};

export default SearchBox; 