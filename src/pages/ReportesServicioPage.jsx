import React from 'react'

export default function ReportesServicioPage() {
    return (
        <div style={{ height: "90vh", overflow: "scroll ", background: "white" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'></div>
                    <h3 className='col-6 text-center m-5' style={{ fontSize: "32px" }}>Reporte de Servicio Efectivo Policial</h3>
                    <div className='col-3'></div>
                </div>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col-3'></div>
                            <button style={{ background: "#0b5742", borderColor: "#0b5742" }} type="button" className="btn btn-primary col-6 btn-lg mb-3"><a style={{ background: "#0b5742", color: 'white', textDecoration: 'none' }} href="/nuevo-reporte">Nuevo Reporte</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    <div className='col-3 mb-2'>
                        <b>Dia de Reporte: </b> 07/05/2023
                    </div>
                    <div className='col-3'></div>
                    <div className='col-3'></div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2020/10/Fotos-online-para-Visa-y-pasaporte-y-Bachiller..-240x300.jpg" alt="Card image cap" style={{ height: '300px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">ANTONIO GARCIA</h5>
                            <p className="card-text">Informe de patrulla: Hoy, mientras patrullaba la zona, observé a un grupo de personas sospechosas merodeando en un callejón. Me acerqué para investigar y descubrí que estaban consumiendo drogas ilegales. Inmediatamente procedí a arrestarlos y confiscar la droga.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary" >Más Información</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-240x300.gif" alt="Card image cap" style={{ height: '300px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">MARIA CARMEN MARTINEZ</h5>
                            <p className="card-text">Informe de accidente de tráfico: Fui llamado a la escena de un accidente de tráfico en la intersección de dos calles principales. Llegué al lugar y encontré un automóvil volcado y a una persona herida. Llamé a los servicios de emergencia y proporcioné asistencia médica de primeros auxilios hasta que llegaron.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2020/10/Fotos-online-para-Visa-y-pasaporte-y-Bachiller.-240x300.jpg" alt="Card image cap" style={{ height: '300px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">JOSEFA LOPEZ</h5>
                            <p className="card-text">Informe de disturbios públicos: Respondí a un informe de disturbios públicos en una zona comercial. Al llegar, encontré a un grupo de personas discutiendo y causando disturbios. Después de intentar hablar con ellos y persuadirlos para que se calmaran, tuve que intervenir para controlar la situación y detener a los alborotadores.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Qo7ilYr9wFlucjtkMfBxLVcv8RnmgODPBQ&usqp=CAU" alt="Card image cap" style={{ height: '300px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">ISABEL SANCHEZ</h5>
                            <p className="card-text">Informe de asistencia a un ciudadano: Un ciudadano llamó a la policía reportando que había perdido su cartera en una calle transitada. Me dirigí al lugar y comencé a buscar la cartera junto con el ciudadano. Finalmente, logramos encontrarla y se la devolvimos.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-3 m-2" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a style={{ background: "#0b5742", borderColor: "#0b5742" }} href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
