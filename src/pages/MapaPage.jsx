import React from 'react'
import '../styles/Mapa.css'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"


const Map = () => {
  
    return (
      <GoogleMap zoom={8} center={{ lat: 44, lng: -80 }} mapContainerClassName="map-container">
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap >
    )
  }

const MapaPage = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAqwNXXDPXZDv7qHjKJYKtdvAX8hlvPw_Q',
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map />

}

export default MapaPage


