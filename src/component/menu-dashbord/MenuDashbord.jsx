import MenuItemCard from "../menu-card/MenuItemCard";
import {useSelector } from "react-redux";


const MenuDashbord = () => {
  const menuData = useSelector((store) => store.menu)
  console.log("error from ",menuData);
  
  return (
    <div className="w-full h-[1200px] bg-amber-400 flex flex-wrap justify-around">
      {/* {menuData.map((res) => {
        return <MenuItemCard menuData={res}/>
      })} */}
      <h1>dashbord</h1>
    </div>
  );
};



export default MenuDashbord;
