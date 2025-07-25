import {  useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const MenuItemCard = ({ menuData }) => {

   const [isUpdate, setIsUpdate] = useState(false)

  let data = menuData;
  console.log(data);
  

  let {
    itemImg,
    itemName,
    price,
    _id
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
    <div className="w-[103px] h-[141px] bg-[#5959b2] rounded-xl group"  >
      <div className=" w-full pt-[6px] flex justify-center items-center ">
              <img className="rounded-xl overflow-hidden w-[89px] h-[81px]" src={itemImg} alt="" />
      </div>
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
<div className="w-7 h-[100px] flex-col items-center justify-around bg-[#D9D9D9]  rounded-2xl sticky mt-[-100px] ml-[103px] {isHover} group-hover:flex hidden ">
        <button className="text-[#5959b2] rounded-sm" onClick={() => deleteItem(_id)}>
          <MdDelete />
        </button>
      <button className="text-[#5959b2]  rounded-sm" onClick={() => updateItem(_id)}>
        <FaEdit />
      </button>
      </div>
         
        </div>



    </div>

  );  
};

export default MenuItemCard;
