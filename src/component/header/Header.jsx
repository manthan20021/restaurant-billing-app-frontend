import { NavLink } from "react-router-dom"

const Header = () => {

    return<div className="w-[1200px] h-10  flex items-center justify-between text-green-800">
        <h1 className="font-extrabold text-green-800 text-4xl">LOGO</h1>
        <ul className="flex justify-between ">
            <NavLink to="/menu-form" >
                <li>ADD-YOUR-MENU</li>
            </NavLink>
            <NavLink className="ml-5" to="/menu-dashbord" >
                <li>DASHBORD</li>
            </NavLink>
        </ul>
        <button className="text-white bg-green-800 px-5 py-1 rounded-[4px]">Login</button>
    </div>
}

export default Header 