import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPlacesData, getWeatherData } from '../../api/travelAdvisorAPI';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useUser } from '@clerk/clerk-react';

import Header from '../../Components/Header/Header.jsx';
import List from '../List/List';
import Map from '../Map/Map';
import axios from 'axios';

const App = () => {
  const { user } = useUser();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return;

        const response = await axios.get('http://localhost:3001/user/api/getSelectedItem', {
          headers: {
            'Authorization': `Bearer ${await user.getToken()}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (response.status === 200 && response.data.data) {
          const data = response.data.data;
          console.log('User data fetched successfully:', data);
          
          if (data.selectedItems && data.selectedItems.length > 0) {
            const latitude = parseFloat(data.selectedItems[0].lat);
            const longitude = parseFloat(data.selectedItems[0].lon);
            if (!isNaN(latitude) && !isNaN(longitude)) {
              setCoords({ lat: latitude, lng: longitude });
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        });
      }
    };
    
    fetchData();
  }, [user]); 

  useEffect(() => {
    if (places && places.length > 0) {
      const filtered = places.filter((place) => Number(place.rating) > rating);
      setFilteredPlaces(filtered);
    }
  }, [rating, places]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          if (data) {
            const validPlaces = data.filter((place) => place && place.name && place.num_reviews > 0);
            setPlaces(validPlaces);
            setFilteredPlaces([]);
            setRating('');
          }
        })
        .catch((error) => {
          console.error('Error fetching places:', error);
          toast.error('Error fetching places data');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCoords({ lat, lng });
      }
    }
  };

  const handleItenorySection = () => {
    toast.success("Creating Itinerary");
    navigate("/Itinerary");
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom right, #161616, #2c3e50)', minHeight: '100vh'}}>
      <Header />
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'4vw'}}>
          <Button variant="contained" color="primary" onClick={handleItenorySection}>
            Create Itinerary
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
