// MapComponent.jsx
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [30.0444, 31.2357]; // إحداثيات الموقع

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          موقعنا
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
