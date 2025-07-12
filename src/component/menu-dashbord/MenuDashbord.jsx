import { useSelector } from "react-redux";
import MenuItemCard from "../menu-card/MenuItemCard";
import useMenuItem from "../../hooks/useMenuItem";







const MenuDashbord = () => {
  useMenuItem()
  
  const data  = useSelector((store)=> store.menu?.menuItem)
   console.log("user",data);
   
  
  return (
    <div className="w-full h-[1200px] bg-amber-400 flex flex-wrap justify-around">
      {data.map((res) => {
        return <MenuItemCard menuData={res}/>
      })}
    </div>
  );
};



export default MenuDashbord;
