import React from 'react'

export default function NuevoReportePage() {
    return (
        <>
            <div style={{ height: "90vh", overflow: "scroll ", background: "#F9E79F" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'></div>
                        <h3 className='col-4 text-center m-5' style={{  fontSize: "32px" }}>Nuevo Reporte</h3>
                        <div className='col-4'></div>
                        <div className="form-group mb-4">
                            <label className="control-label" htmlFor="date" disabled>Date:</label>
                            <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" disabled/>
                        </div>

                        <div className='col-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Dirección:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Calle:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Ciudad:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>


                        <div className="mb-3 mt-3 col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Atividad de la zona:</label>

                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option lected = 'true'>Abrir el menú de selección</option>
                                <option value="1">Normal</option>
                                <option value="2">Sospechosa</option>
                            </select>
                            <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-3 mt-3 col-6">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Condiciones de Seguridad:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3 mt-3 col-6">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Recomendaciones:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
