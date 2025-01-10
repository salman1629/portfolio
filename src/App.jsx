import { createBrowserRouter,RouterProvider } from "react-router-dom"


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./views/Layout"
import IntroPage from "./components/IntroPage"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IntroPage />,
      },
      
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
