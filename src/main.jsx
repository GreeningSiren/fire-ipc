import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacts from './pages/Contacts.jsx'
import Admin from './pages/Admin.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/admin',
    element: <Admin />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
