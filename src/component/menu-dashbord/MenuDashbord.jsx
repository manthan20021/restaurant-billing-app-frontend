import { useSelector } from "react-redux";
import MenuItemCard from "../menu-card/MenuItemCard";
import useMenuItem from "../../hooks/useMenuItem";

const MenuDashbord = () => {
  useMenuItem()
  
  const data  = useSelector((store)=> store.menu?.menuItem)
   
  return (
    <div className="h-auto w-full flex items-center justify-center">
    <div className=" h-auto grid  pl-3.5 grid-cols-3 space-x-[15px] space-y-[30px] ">
      {data.map((res) => {
        return <MenuItemCard menuData={res}/>
      })}
    </div>
    </div>
  );
};



export default MenuDashbord;
