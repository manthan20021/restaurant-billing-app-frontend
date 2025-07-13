import React from "react";


const MenuItemCard = ({ menuData }) => {
  let data = menuData;
  let {
    itemName,
    price,
    _id
  } = data

  //delete method for menu item
  const deleteItem = async(id) => {
    try {
        const response  = await fetch(`http://localhost:3000/menu/delete/${id}`, {method: "DELETE"})
        response.json({message:"menu-item deleted succsessfully"})
    } catch (error) {
     console.log(error);
      
    }
  }

  //update methode for menu item
  const updateItem = async(id) => {
     try {
      const response = await fetch(`http://localhost:3000/menu/put/${id}`, {
        method: "PUT"
      })
      response.json({message:"menu-item updated succsessfully"})
     } catch (error) {
      console.log(error);
      
     }
  }
  
  
  return (
    <div className="w-28 h-28 bg-green-800 text-white rounded-md p-0.5">
      <h1>CARD</h1>
      <img src={null} alt="menu-img" />
      <p>{itemName}</p>
      <p>{price}</p>

      <button onClick={() => deleteItem(_id)}>Delete</button>
      <button onClick={() => updateItem(_id)}>Update</button>
    </div>

  );
};

export default MenuItemCard;
