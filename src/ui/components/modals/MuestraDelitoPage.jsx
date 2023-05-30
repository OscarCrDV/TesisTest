import React from 'react'
import { useParams } from 'react-router-dom';
import { getDelitos } from '../../../assets/Delitos';
import '../../../styles/MuestraDelitosPage.css'
import { AiFillPrinter } from 'react-icons/ai';
import { TfiMapAlt } from 'react-icons/tfi';
import { ActoresDelitoImg } from './ActoresDelitoImg';
import ActoresDelitoInfo from './ActoresDelitoInfo';
import { EfectivosPolicialesInfo } from './EfectivosPolicialesInfo';

export function MuestraDelitoPage() {

    //Aqui es donde se debe hacer el request
    const { id } = useParams();

    function buscarElementoPorId(id, arreglo) {
        return arreglo.find(elemento => elemento.id === id);
    }

    //Aqui estamos consiguiendo los datos del acto delictivo
    const delitosResponse = getDelitos();
    const arrayData = Object.entries(delitosResponse);
    const delito = buscarElementoPorId(id, arrayData[0][1]);

    console.log(delito.efectivos_policiales);

    return (
        <>
            <div className='container bg-light text-dark'>
                <div className="row">
                    <div style={{ marginTop: '8vh', marginBottom: '4vh' }} className="col-10 general">
                        <h4 style={{ textAlign: "center", textDecoration: "underline" }} className='pt-5'>Actores Involucrados</h4>
                        <div className="imagenes col-12 p-4">
                            <div className="row">
                                {Array.isArray(delito.actores_delito) && delito.actores_delito.map((delito, indice) => (
                                    <ActoresDelitoImg key={indice} urlImg={delito.url_img} nombre={delito.nombre} />
                                ))}
                            </div>
                        </div>
                        <h4 style={{ textAlign: "center", textDecoration: "underline" }} className='p-2'>Información de la Ocurrencia</h4>
                        <div className="information col-12 p-4">
                            <div className="row">
                                <div className="col-4">
                                    <h5 className="card-title" style={{ color: '#333', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textDecoration: "underline" }}>Detalles del delito</h5>
                                    <b>-</b>
                                    <p className="card-text" style={{ marginBottom: '5px' }}><b>ID:</b> {delito.id}</p>
                                    <p className="card-text" style={{ marginBottom: '5px' }}><b>Dirección: </b>{delito.direccion}</p>
                                    <p className="card-text" style={{ marginBottom: '5px' }}><b>Tipo de delito: </b>{delito.tipo_delito}</p>
                                    <p className="card-text" style={{ marginBottom: '10px' }}><b>Descripción General: </b>{delito.descripcion}</p>
                                </div>
                                <div className="col-4">
                                    <h5 className="card-title" style={{ color: '#333', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textDecoration: "underline" }}>Actores del delito</h5>
                                    {Array.isArray(delito.actores_delito) && delito.actores_delito.map((delito, indice) => (
                                        <ActoresDelitoInfo key={indice} actor={delito} />
                                    ))}
                                </div>
                                <div className="col-4">
                                    <h5 className="card-title" style={{ color: '#333', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textDecoration: "underline" }}>Efectivos Policiales</h5>

                                    {Array.isArray(delito.efectivos_policiales) && delito.efectivos_policiales.map((efectivo, indice) => (
                                        <EfectivosPolicialesInfo key={indice} efectivo={efectivo} />
                                    ))}

                                </div>
                            </div>
                        </div>
                        {/*                         <div className="impresion p-2">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-3"></div>
                                <div className="col-3"></div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-secondary mb-4" style={{height: '50px', width: '150px'}}>Imprimir <AiFillPrinter/> </button>
                                </div>

                            </div>
                        </div> */}
                    </div>
                    <div className="col-2" style={{ paddingTop: "9vh", paddingLeft: "50px" }}>
                        <button type="button" className="btn btn-warning mb-4 mt-2" style={{ width: '200px', padding: "12px" }} ><a style={{ color: 'white', textDecoration: 'none' }} href="/mapa">Regresar <TfiMapAlt className='mx-2' /></a></button>
                        <button type="button" className="btn btn-secondary mb-4" style={{ width: '200px', padding: "12px" }} >Imprimir <AiFillPrinter /> </button>

                    </div>
                </div>
            </div>
        </>
    )
}
