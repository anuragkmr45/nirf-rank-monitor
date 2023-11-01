import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { routes } from './routes'
function Navigations() {
    return (
        <Routes>
            {
                routes.map((data, index) => {
                    return (
                        <Route key={index} path={data.path} element={data.element} title={data.title} />
                    )
                })
            }
        </Routes>
    )
}

export default Navigations
