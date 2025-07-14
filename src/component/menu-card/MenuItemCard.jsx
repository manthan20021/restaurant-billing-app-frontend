import { useState } from "react";

const MenuItemCard = ({ menuData }) => {

   const [isUpdate, setIsUpdate] = useState(false)
  let data = menuData;

  let {
    itemName,
    price,
    _id,
  } = data

  //delete method for menu item
  const deleteItem = async(id) => {
    try {
        const response  = await 
        fetch(`http://localhost:3000/menu/delete/${id}`,{
          method: "DELETE"
        })
        response.json({
          message:
          "menu-item deleted succsessfully"
        })
    } catch (error) {
     console.log(error);
      
    }
  }

  //update methode for menu item
  const updateItem = async(id, updateData) => {
     try {
      const response = await 
      fetch(`http://localhost:3000/menu/put/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
      })
      setIsUpdate(true)
      response.json({
        message:
        "menu-item updated succsessfully"
      })  
     } catch (error) {
      console.log(error);
     }
  }
  
  
  
  return (
    <div className="w-28 h-28 bg-green-800 text-white rounded-md p-0.5">
      <h1>CARD</h1>
      <img src={null} alt="menu-img" />
      <div>
        {
        isUpdate ? <form>
          <input 
        className="border-transparent bg-transparent w-full" 
        placeholder="itemNmame"
         type="text" 
         value={itemName}
         />
         <input 
         className="border-transparent bg-transparent w-full" 
        placeholder="price"
         type="number"
         value={price}
         />
        </form> 
        
        : (<div> <p>{itemName}</p> <p>{price}</p></div>)
         }
        </div>

      <button onClick={() => deleteItem(_id)}>Delete</button>
      <button onClick={() => updateItem(_id)}>Edit</button>
    </div>

  );  
};

export default MenuItemCard;
