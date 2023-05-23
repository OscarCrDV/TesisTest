import React, { useEffect, useState } from 'react'
import '../styles/Mapa.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import ModalMapa from '../ui/components/modals/modalMapa';
import { getDelitos } from '../assets/Delitos'




// este es el principal
export const MapaPage = () => {

  //json de prueba
  const [dataDelitos, setDataDelitos] = useState();

  // Dirección de ocurrencia seleccionada
  const [idSelectDelito, setIdSelectDelito] = useState('');

  useEffect(() => {
    setDataDelitos(getDelitos());

    if (dataDelitos === null) {
      console.log('Data de Respuesta de Json vacía...');
    }
  }, []);

  // ---------------------------

  // Función para calcular la distancia en kilómetros entre dos puntos utilizando la fórmula de Haversine
  function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Diferencia de latitud en radianes
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Diferencia de longitud en radianes

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = radioTierra * c; // Distancia en kilómetros
    return distancia;
  }


  const FilterDelitosSelect = (latidSelect = 0, longtSelect = 0) => {
    const distanciaMin = 0.13863468154736133;
    const arrayFiltrados = [];
    if (dataDelitos != null) {
      const dataArrayF = Object.entries(dataDelitos);
      dataArrayF[0][1].forEach(element => {

        const distancia = calcularDistancia(latidSelect, longtSelect, element.coordenadas.latitud, element.coordenadas.longitud);

        if (distancia < distanciaMin) {
          arrayFiltrados.push(element);
        }
      });
    }
    return arrayFiltrados; // Retorna todos las ocurrencias dentro de una cuadra
    //Aqui se van a filtrar solo los delitos dentro de un rango por latitud y altitud 
  }


  const [showModalMap, setShowModalMap] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>
  return (
    <>
      <ModalMapa showModalMap={showModalMap} SetShowModalMap={setShowModalMap} delitosJson={dataDelitos} idSelectDelito={idSelectDelito} FilterDelitosSelect={FilterDelitosSelect} />
      <Map showModalMap2={showModalMap} SetShowModalMap2={setShowModalMap} delitosJson={dataDelitos} SetIdSelectDelito={setIdSelectDelito} />
    </>
  )
  // ---------------------------------------------

  function Map({ showModalMap2, SetShowModalMap2, delitosJson, SetIdSelectDelito }) {

    const changeStateModalMarker = (event, idMarker) => {
      if (showModalMap2 == true) {
        SetShowModalMap2(false)
      } else {
        SetShowModalMap2(true)
      }
      SetIdSelectDelito(idMarker);
    }

    // Convertir objeto en un array de pares clave-valor
    const dataArray = Object.entries(delitosJson);

    return (
      <GoogleMap mapContainerClassName="map-container" zoom={17} center={{ lat: -8.111678, lng: -79.028774 }}>

        {Array.isArray(dataArray[0][1]) && dataArray[0][1].map((delito) => (
          <MarkerF key={delito.id} position={{ lat: delito.coordenadas.latitud, lng: delito.coordenadas.longitud }} onClick={(event) => changeStateModalMarker(event, delito.id)} />
        ))}

      </GoogleMap>
    )
  }
}



