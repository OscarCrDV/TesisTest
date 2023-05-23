import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { DCPage, MapaPage, ReportesServicioPage, NuevoReportePage, Soporte } from '../../pages/';
import Sidebar from '../../ui/components/Sidebar';

export function MapsRoutes() {
  return (
    <>
      <Routes>
        <Route path="/mapa" element={<MapaPage />} />
        <Route path="/reportes-de-servicio" element={<ReportesServicioPage />} />
        <Route path='/nuevo-reporte' element={<NuevoReportePage />} />
        <Route path='/soporte' element={<Soporte />} />
{/*         <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  )
}
