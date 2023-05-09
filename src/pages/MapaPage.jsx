import React, { useEffect, useState } from 'react'
import '../styles/Mapa.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import ModalMapa from '../ui/components/modals/modalMapa';


// este es el principal
const MapaPage = () => {

  const [showModalMap, setShowModalMap] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

   if (!isLoaded) return <div>Loading...</div> 
  return (
    <>
      <ModalMapa showModalMap = {showModalMap} SetShowModalMap = {setShowModalMap}/>
      <Map showModalMap2 = {showModalMap} SetShowModalMap2 = {setShowModalMap} />
    </>
  )
  // ---------------------------------------------

  function Map({ showModalMap2, SetShowModalMap2 }) {

    const changeStateModalMarker = (event) => {
      if(showModalMap2 == true){
        SetShowModalMap2(false)
      }else{
        SetShowModalMap2(true)
      }
      console.log(event);
  }

    return (
      <GoogleMap mapContainerClassName="map-container" zoom={17} center={{ lat: -8.111678, lng: -79.028774 }}>
        <MarkerF position={{ lat: -8.111678, lng: -79.028400 }} onClick={(event) => changeStateModalMarker(event)}  />
        <MarkerF position={{ lat: -8.111678, lng: -79.028500 }} onClick={(event) => changeStateModalMarker(event)} />
        <MarkerF position={{ lat: -8.111678, lng: -79.028700 }} onClick={(event) => changeStateModalMarker(event)} />
      </GoogleMap>
    )
  }
}


export default MapaPage


