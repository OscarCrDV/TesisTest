import React, { useState } from 'react'
import '../styles/Mapa.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import ModalMapa from '../ui/components/modals/modalMapa';


const onMarkerClick = (event, id) => {
  console.log(id);
}

// este es el principal
const MapaPage = () => {

  const [modalInfo, setModalInfo] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

   if (!isLoaded) return <div>Loading...</div> 
  return (
    <>
      <ModalMapa />
      <Map />
    </>
  )
  // ---------------------------------------------

  function Map() {
    return (
      <GoogleMap mapContainerClassName="map-container" zoom={17} center={{ lat: -8.111678, lng: -79.028774 }}>
        <MarkerF position={{ lat: -8.111678, lng: -79.028400 }} onClick={(event) => onMarkerClick(event, 1)} />
        <MarkerF position={{ lat: -8.111678, lng: -79.028500 }} onClick={(event) => onMarkerClick(event, 1)} />
        <MarkerF position={{ lat: -8.111678, lng: -79.028700 }} onClick={(event) => onMarkerClick(event, 1)} />
      </GoogleMap>
    )
  }
}


export default MapaPage


