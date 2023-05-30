import React from 'react'

export function ActoresDelitoImg({ urlImg, nombre }) {
    return (
        <>
                <div className="imagen col-3">
                    <img
                        src= {urlImg}
                        alt="Imagen Carnet"
                        style={{
                            width: '100%',
                            height: '2.8in',
                            border: '2px solid #ccc',
                            borderRadius: '10px',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                            padding: '10px',
                        }}
                    />
                    <p style={{ textAlign: 'center' }}>{nombre}</p>
                </div>
        </>
    )
}
