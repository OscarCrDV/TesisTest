import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { MapsRoutes } from '../mapas/routes'
import App from '../App'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />


                <Route path="/*" element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                } />


            </Routes>
        </>
    )
}

export default AppRouter
