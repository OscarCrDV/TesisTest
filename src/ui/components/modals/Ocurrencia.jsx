import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../styles/Ocurrencia.css";

export function Ocurrencia({tipoDelito, id, detalleDelito, fecha, hora, indice}) {

    const navigate = useNavigate();

    const redireccionar = () => {
        navigate(`/delito/${id}`);
      };

    return (
        <div className="card mb-3 m-1 border-top caja-boton" onClick={redireccionar}>
            <div className={indice == 0 ? "card-header bg-warning" : "card-header"}><b>Autor/Autores:</b> Ubaldo Valle Florian</div>
            <div className={"card-body p-2"}>
                <p className="card-text m-0"><b>Tipo de Ocurrencia:</b> {tipoDelito}</p>
                <p className="card-text m-0"><b>Detalle de Delito:</b> {detalleDelito}</p>
                <p className="card-text m-0"><b>Fecha:</b> {fecha} <b>Hora:</b> {hora}</p>
            </div>
        </div>
    )
}

