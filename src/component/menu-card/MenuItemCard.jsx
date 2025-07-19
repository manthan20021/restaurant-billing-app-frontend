import {  useState } from "react";

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
    <div className="w-[103px] h-[141px] bg-[#5959b2] rounded-xl ">
      <img className="rounded-xl overflow-hidden" src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="menu-img" />
      <div>
        {
        isUpdate ? <form>
          <input 
        className="border-transparent bg-transparent w-full" 
        placeholder="itemNmame"


         type="text" 
         />
         <input 
         className="border-transparent bg-transparent w-full" 
        placeholder="price"
         type="number"
         />
        </form> 
        
        : (<div className="w-full flex flex-col items-center text-[#F6F5FF]"> <p>{itemName}</p> <p>Rs : {price}</p></div>)
         }
<div className="w-full flex justify-around bg-gray-300 p-1 rounded-2xl  ">
        <button className="text-[#5959b2] px-1 rounded-sm" onClick={() => deleteItem(_id)}>Delete</button>
      <button className="text-[#5959b2] px-1 rounded-sm" onClick={() => updateItem(_id)}>Edit</button>
      </div>
         
        </div>



    </div>

  );  
};

export default MenuItemCard;
