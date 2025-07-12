import React from "react";

const MenuItemCard = ({ menuData }) => {
  let data = menuData;
  let {
    itemName,
    price
  } = data
  console.log("item",data);
  
  
  return (
    <div className="w-28 h-28 bg-green-800 text-white rounded-md p-0.5">
      <h1>CARD</h1>
      <img src={null} alt="menu-img" />
      <p>{itemName}</p>
      <p>{price}</p>
    </div>
  );
};

export default MenuItemCard;
