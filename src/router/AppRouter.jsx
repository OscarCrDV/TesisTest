import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import DCPage from '../pages/DCPage'
import LoginPage from '../auth/LoginPage'
import MapaPage from '../pages/MapaPage'
import ReporteServicioPage from '../pages/ReportesServicioPage'
import NuevoReportePage from '../pages/NuevoReportePage'
import Soporte from '../pages/Soporte'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/mapa" element={<MapaPage />} />
                <Route path="/reportes-de-servicio" element={<ReporteServicioPage />} />
                <Route path='/nuevo-reporte' element={<NuevoReportePage/>} />
                <Route path='/soporte' element={<Soporte/>} />
                <Route path="login" element={<LoginPage />} />
                 <Route path="/" element={<Navigate to="/login" />} /> 
            </Routes>
        </>
    )
}

export default AppRouter
