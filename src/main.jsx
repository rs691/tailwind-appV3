import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Project1 from './pages/Project1.jsx'
import Project2 from './pages/Project2.jsx'
import Hero from './pages/Hero.jsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/hero',
    element: <Hero/>,
  },
  {
path: '/projects',
element: <Projects/>,
children: [
  {
    path: '/projects/:id',
    element: <Project1 />,
  },
  {
    path: '/projects/:id',
    element: <Project2 />,
  },
],
  },
  ])


  // https://coolors.co/p/gipamRLZoI95WWKI9pAj
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />;
  </StrictMode>,
)
