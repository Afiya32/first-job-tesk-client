import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
          
          <div className='min-w-min max-w-7xl mx-auto'>
          <div><Toaster/></div>
            <RouterProvider router={router}></RouterProvider>
           </div>
     
       </AuthProvider>
  
  </React.StrictMode>,
)
