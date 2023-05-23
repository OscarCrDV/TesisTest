import React from 'react'

export function Ocurrencia({tipoDelito, id, detalleDelito, fecha, hora}) {
    return (
        
        <div className="card border-success mb-3 m-1">
            {id}
            <div className="card-header"><b>Autor/Autores:</b> Ubaldo Valle Florian</div>
            <div className="card-body text-success p-2">
                <p className="card-text m-0"><b>Tipo de Ocurrencia:</b> {tipoDelito}</p>
                <p className="card-text m-0"><b>Detalle de Delito:</b> {detalleDelito}</p>
                <p className="card-text m-0"><b>Fecha:</b> {fecha} <b>Hora:</b> {hora}</p>
            </div>
        </div>
    )
}
