import React from 'react'

export default function ActoresDelitoInfo({ actor }) {
    return (
            <>
                <b>-</b>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>Nombre:</b> {actor.nombre}</p>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>DNI/Carnet Ext.:</b> {actor.dni}</p>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>Edad:</b> {actor.edad}</p>
                <p className="card-text" style={{ marginBottom: '5px' }}><b>Género:</b> {actor.genero}</p>
                <p className="card-text" style={{ marginBottom: '10px' }}><b>Descripción:</b> {actor.descripcion}</p>
            </>
    )
}
