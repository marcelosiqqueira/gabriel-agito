import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import '/src/styles/global.css'
import Coverages from './routes/Coverages'
import Schedule from './routes/Schedule'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Coverages />
      },
      {
        path: "schedule",
        element: <Schedule />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
