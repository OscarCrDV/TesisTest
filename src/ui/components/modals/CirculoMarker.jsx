import React from 'react'

export function CirculoMarker({ center = { lat: -8.110895983145374, lng: -79.02869760990144 }, radius }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: '50%',
        border: '2px solid red',
        opacity: '0.5',
        pointerEvents: 'none',
        transform: `translate(${center.x - radius}px, ${center.y - radius}px)`,
      }}
    ></div>
    
  )
}
