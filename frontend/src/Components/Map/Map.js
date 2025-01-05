import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import mapStyles from '../../utils/mapStyles';
import { MapContainer } from './MapStyles';
import Place from '../common/Place';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    console.log('Places:', places);
  }, [places]);

  const handleMapChange = (e) => {
    setCoords({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  const handleMarkerClick = (child) => {
    setChildClicked(places[child]);
  };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={handleMapChange}
        onChildClick={handleMarkerClick}
      >
        {places?.map((el, i) => (
          <Place
            key={i}
            lat={el.latitude ? el.latitude : 0}
            lng={el.longitude ? el.longitude : 0}
            el={el}
          />
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
