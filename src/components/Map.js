import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// const Map = ({ location }) => {
//   const center = { lat: location.lat, lng: location.lng };

const NewYorkCoordinates = {
  lat: 40.7128,
  lng: -74.0060,
};
  
const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBU0ZdYhzfCYD0SJGYK72kDdw8xXFI2RK8">
      <GoogleMap mapContainerStyle={containerStyle} center={NewYorkCoordinates} zoom={10}>
        <Marker position={NewYorkCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
