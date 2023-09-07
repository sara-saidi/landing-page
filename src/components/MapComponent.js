
import React from 'react';
import GoogleMapReact from 'google-map-react';

// Define a custom component to use as a marker on the map
const AnyReactComponent = ({ text }) => (
  <div style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '50%' }}>
    {text}
  </div>
);

const mapOptions = {
  center: {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  },
  zoom: 10, // Set the initial zoom level
};

const MapComponent = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg'  }} // Replace with your Google Maps API key
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        <AnyReactComponent
          lat={mapOptions.center.lat}
          lng={mapOptions.center.lng}
          text="Marker" // You can customize the marker's content here
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
