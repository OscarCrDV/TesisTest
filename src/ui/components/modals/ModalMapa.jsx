import { useState, useEffect } from 'react'
import '../../../styles/ModalMapa.css'
import styled from 'styled-components'

import { Ocurrencia } from './Ocurrencia'

function ModalMapa({ showModalMap, SetShowModalMap, delitosJson, idSelectDelito, FilterDelitosSelect }) {

    var delitos = []; // aqui se almacenan todos los delitos filtrados 

    if (delitosJson != null && idSelectDelito != null) {
        const dataArrayF = Object.entries(delitosJson);
        const delitSelect = dataArrayF[0][1].find(item => item.id === idSelectDelito);
        if (delitSelect != null) {
            const delitosFiltrados = FilterDelitosSelect(delitSelect.coordenadas.latitud, delitSelect.coordenadas.longitud, delitosJson);

// SE TIENE QUE ORDENAR TODOS LOS DELITOS PONIENDO EN PRIMER LUGAR EL SELECCIONADO

            delitos = delitosFiltrados;

        }
    }



    // Convertir objeto en un array de pares clave-valor // esto sirve para cerrar el modal
    const dataArray = Object.entries(delitosJson);

    const [modalStateCh, setModalStateChil] = useState(showModalMap);


    const changeStateModalButton = () => {

        if (showModalMap == true) {
            SetShowModalMap(false)
            setModalStateChil(false)
        } else {
            SetShowModalMap(true)
            setModalStateChil(true)
        }


    }

    return (
        <>
            {showModalMap &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>Registro de Ocurrencias</h3>
                        </EncabezadoModal>
                        <BotonCerrar><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" onClick={changeStateModalButton}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg></BotonCerrar>
                        <OcurrenciaAll>
                            {Array.isArray(delitos) && delitos.map((delito) => (
                                <Ocurrencia tipoDelito = {delito.tipo_delito} id= {delito.id} detalleDelito = {delito.detalles_adicionales} fecha = {delito.fecha} hora = {delito.hora}/>
                            ))}

                        </OcurrenciaAll>
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default ModalMapa

const Overlay = styled.div`
 height: 90vh;
 position: fixed;
 background: rgba(0,0,0,.5);
 padding: 30px;
 display: flex;
 top: 10whpx;
 right: 0px;
 z-index:2 !important;
`;

const ContenedorModal = styled.div`
width: 500px;
min-height: 72vhpx;
background: #fff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
padding: 20px;

`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
   h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
   } 
`;

const BotonCerrar = styled.div`
   position: absolute;
   top: 15px;
   right: 15px;
   width: 30px;
   height: 30px;
   border: none;
   background: none;
   cursor: pointer;
   transition: .3s ease all;
   border-radius: 5px;
   color: #1766DC;
   text-align: center;

   &:hover { 
    background: #f2f2f2;
   }

   svg { 
    width: 100%;
    height: 100%;
   }
`;

const OcurrenciaAll = styled.div`
height: 72vh;
overflow: auto; 
overflow-y: scroll;
}

`;




