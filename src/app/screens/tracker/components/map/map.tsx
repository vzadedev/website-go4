"use client"

import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Icon, LatLngBounds } from 'leaflet';
import { Markers } from '../iconsEnum/markers';

const Map = () => {

  const foodIcon = new Icon ({
    iconUrl : "/static/images/go4-icon-azul.png",
    iconSize : [50, 50],
    iconAnchor : [22, 94], 
    popupAnchor : [-3, -76] 
  })

  const worldBounds = new LatLngBounds([-90, -180], [90, 180]);

  return (
    <MapContainer bounds={worldBounds} center={[-20.2091282, -50.929647]} zoom={13} scrollWheelZoom={true} className='rounded-lg'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
      >
      {Markers.map((m, index) => (
        <Marker key={index} position={[m.lat, m.long]} icon={m.icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
