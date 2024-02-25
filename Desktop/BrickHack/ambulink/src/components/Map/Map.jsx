import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

import "./Map.scss";
const housePosition = [43.0848, -77.6744]; // Example position: latitude and longitude
const ambulancePosition = [43, -77];

function MyMap() {
  const ambulanceIcon = new L.Icon({
    iconUrl: "./ambulance.png", // Path to your custom marker image
    iconSize: [35, 35], // Size of the icon. Adjust as needed.
    iconAnchor: [17, 35], // This will help in positioning the icon correctly (half of width, full height)
    popupAnchor: [0, -35], // Point from which the popup should open relative to the iconAnchor
  });

  const houseIcon = new L.Icon({
    iconUrl: "./house.png", // Path to your custom marker image
    iconSize: [35, 35], // Size of the icon. Adjust as needed.
    iconAnchor: [17, 35], // This will help in positioning the icon correctly (half of width, full height)
    popupAnchor: [0, -35], // Point from which the popup should open relative to the iconAnchor
  });

  const linePoints = [ambulancePosition, housePosition];

  return (
    <MapContainer center={ambulancePosition} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={housePosition} icon={houseIcon}>
        <Popup>This is where you are.</Popup>
      </Marker>
      <Marker position={ambulancePosition} icon={ambulanceIcon}>
        <Popup>This is where the Ambulance is.</Popup>
      </Marker>
      <Polyline pathOptions={{ color: "red" }} positions={linePoints} />
    </MapContainer>
  );
}

export default MyMap;
