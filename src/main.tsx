import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import '/src/styles/global.css'
import Coverages from './routes/EventsList'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { GlobalProvider } from './context/global'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Coverages />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
