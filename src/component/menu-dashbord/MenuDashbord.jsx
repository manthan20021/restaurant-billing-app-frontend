import React, { useEffect, useState } from "react";
import MenuItemCard from "../menu-card/MenuItemCard";

const MenuDashbord = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        return setMenu(data)
        
      });
  }, []);
  return (
    <div className="w-full h-[1200px] bg-amber-400 flex flex-wrap justify-around">
      {menu.map((res) => {
        return <MenuItemCard key={res.id} menuData={res} />
      })}
    </div>
  );
};

export default MenuDashbord;
