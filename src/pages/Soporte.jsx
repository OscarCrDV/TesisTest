import React from 'react'
import '../styles/Soporte.css'

export default function Soporte() {
    return (
        <>
            <div style={{ height: "90vh", overflow: "scroll ", background: "white" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'></div>
                        <h3 className='col-4 text-center m-5' style={{ fontSize: "32px" }}>Nuevo Ticket</h3>
                        <div className='col-4'></div>

                        <div className='col-12'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Asunto:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3 mt-3 col-12">
                                <label for="exampleFormControlTextarea1" className="form-label">Atividad de la zona:</label>
                                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Tipo de problema:</option>
                                <option value="1">Reporte registrado incorrectamente</option>
                                <option value="2">Datos del perfil incorrecto</option>
                            </select>

                            <div className='col-12 mt-4'>
                                <label for="file-upload" class="custom-file-upload" style={{background:"white"}}>
                                    <i class="fa fa-cloud-upload"></i> Adjuntar captura del problema
                                </label>
                                <input id="file-upload" type="file" />
                            </div>
                        </div>
                        <div style={{ height: '50px' }}></div>
                        <div className='col-4'></div>

                        <div className='col-2'>
                            <button type="button" className="btn btn-success btn-lg px-5">Registrar</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" className="btn btn-danger btn-lg px-5">Cancelar</button>
                        </div>

                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
