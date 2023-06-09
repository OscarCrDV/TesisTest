import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { DCPage, MapaPage, ReportesServicioPage, NuevoReportePage, Soporte } from '../../pages/';
import Sidebar from '../../ui/components/Sidebar';
import { MuestraDelitoPage } from '../../ui/components/modals/MuestraDelitoPage';

export function MapsRoutes() {
  return (
    <>
      <Routes>

        <Route path="/" element={<MapaPage/>} /> 

        <Route path="/mapa" element={<MapaPage />} />
        <Route path="/reportes-de-servicio" element={<ReportesServicioPage />} />
        <Route path='/nuevo-reporte' element={<NuevoReportePage />} />
        <Route path='/soporte' element={<Soporte />} />
        <Route path="/delito/:id" element={<MuestraDelitoPage/>} />

{/*         <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  )
}
