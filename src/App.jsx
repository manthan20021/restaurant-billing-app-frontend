import { Outlet } from "react-router-dom"
import Header from "./component/header/Header"



function App() {

  return (
    <div id="AppLeout" className="w-full flex flex-col items-center justify-center bg-[#F6F5FF] ">
     <Header/>
     <Outlet/>
    </div>
  )

}



export default App
