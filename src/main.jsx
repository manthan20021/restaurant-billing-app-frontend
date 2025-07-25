import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MenuDashbord from './component/menu-dashbord/MenuDashbord.jsx'
import ManeuItemForm from './component/menu-form/Menu-item-form.jsx'
import { Provider } from "react-redux"
import store from './Slices/store.js'


//make an store
//make an slice
//provid store to main



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
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)

