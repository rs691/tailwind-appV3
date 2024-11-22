import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About/>,
  }
  ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />;
  </StrictMode>,
)
