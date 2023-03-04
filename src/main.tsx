import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import '/src/styles/global.css'
import Coverages from './routes/Coverages'
import Agenda from './routes/Agenda'

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
        path:"coverages",
        element: <Coverages/>
      },
      {
        path:"agenda",
        element: <Agenda/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
