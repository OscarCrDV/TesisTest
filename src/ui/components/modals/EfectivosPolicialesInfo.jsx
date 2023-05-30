import React from 'react'

export function EfectivosPolicialesInfo({ efectivo }) {
    return (
        <>
            <div className="efectivos_policiales">
                <b>-</b>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>Nombre:</b> {efectivo.nombre}</p>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>DNI:</b> {efectivo.dni}</p>
                <p className="card-text" style={{ marginBottom: '10px' }}><b>Descripción:</b> El sospechoso era de complexión delgada, pelo negro y vestía una chaqueta azul.</p>
            </div>
        </>
    )
}
