import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Dashboard  from './pages/dashboard'
import './index.css'


const root_router = createBrowserRouter([{
  path: "/",
  element: <Dashboard />
},
{
  path: "/dashboard",
  element: <Dashboard />
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root_router} />
  </StrictMode>,
)
