import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import {LoginPage} from '../auth'
import {MapsRoutes} from '../mapas/routes'
import App from '../App'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                 <Route path="/*" element={<App/>} /> 
            </Routes>
        </>
    )
}

export default AppRouter
