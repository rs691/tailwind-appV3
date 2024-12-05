import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Project1 from './pages/Project1.jsx'
import Project2 from './pages/Project2.jsx'
<<<<<<< HEAD
import Hero from './pages/Hero.jsx'
=======
import Contact from './pages/Contact.jsx'

>>>>>>> a9afa9f30ce9e01afb50052f91181d89d1c7904c

import { createHashRouter, RouterProvider } from 'react-router-dom'
import MotionCards from './components/MotionCards.jsx'

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
<<<<<<< HEAD
    path: '/hero',
    element: <Hero/>,
=======
    path: '/motionCards',
    element: <MotionCards/>
  },
  {
    path: '/contact',
    element: <Contact/>
>>>>>>> a9afa9f30ce9e01afb50052f91181d89d1c7904c
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
