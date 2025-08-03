import { NavLink } from "react-router-dom"

const Header = () => {

    return<nav className="w-full">
 <div className="w-full bg-[#5959b2] flex items-center text-white justify-between rounded-b-xl px-4 py-2">
        <div className="flex items-center">
            <h2 className="font-extrabold text-white text-4xl mr-1">&</h2>
            <h1>APP Name</h1>
        </div>
        <NavLink to="login">
                    <button className="bg-[#f6f5ff] text-[#5959b2] px-5 py-1 rounded-[4px]">Login</button>
        </NavLink>
    </div>

         <ul className="w-full flex justify-center items-center overflow-auto  pt-[15px] pb-[ 15px]  text-gray-600 font-bold">
            <NavLink className="bg-[#D9D9D9] py-1 px-2 text-sm rounded-2xl" to="/menu-form" >
                <li>add-menu-item</li>
                </NavLink>
            <NavLink className="ml-3 bg-[#D9D9D9] py-1 px-2 text-sm rounded-2xl" to="/menu-d6 b6 bh6ashbord" >
                <li>dashbord</li>
            </NavLink>

            <li className="ml-3 bg-[#D9D9D9] py-1 px-2 text-sm rounded-2xl">bills</li>
            <li className="ml-3 bg-[#D9D9D9] py-1 px-2 text-sm rounded-2xl">sells</li> 
        </ul> 
    </nav>
}

export default Header