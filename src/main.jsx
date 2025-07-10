import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MenuDashbord from './component/menu-dashbord/MenuDashbord.jsx'
import MenuItemCard from './component/menu-card/MenuItemCard.jsx'
import ManeuItemForm from './component/menu-form/Menu-item-form.jsx'


const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,

      children:[
       {
        path:"/menu-form",
        element:<ManeuItemForm/>
      },
      {
         path:"/menu-dashbord",
      element:<MenuDashbord/>,
      }
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}/>
  </StrictMode>,
)

